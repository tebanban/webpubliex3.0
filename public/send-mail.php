<?php
// Basic JSON response headers for the contact form endpoint.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["sent" => false, "message" => "Metodo no permitido."]);
    exit();
}

// Decode the JSON payload sent by the React form.
$request_body = file_get_contents("php://input");
$data = json_decode($request_body, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["sent" => false, "message" => "Solicitud invalida."]);
    exit();
}

if (!empty($data["website"])) {
    echo json_encode(["sent" => true]);
    exit();
}

$required_fields = ["objetivo", "nombre", "correo", "empresa"];

foreach ($required_fields as $field) {
    if (empty(trim($data[$field] ?? ""))) {
        http_response_code(400);
        echo json_encode(["sent" => false, "message" => "Faltan datos requeridos."]);
        exit();
    }
}

if (!filter_var($data["correo"], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["sent" => false, "message" => "Correo invalido."]);
    exit();
}

// Mailbox configuration. The sender should exist in the hosting control panel.
$to = "trafico1@publiexcr.com";
$from_email = "website@publiexcr.com";

// Sanitize values before using them in headers or the HTML message.
$name = trim(preg_replace('/[\r\n]+/', ' ', $data["nombre"]));
$user_email = trim(preg_replace('/[\r\n]+/', '', $data["correo"]));
$company = htmlspecialchars(trim($data["empresa"]), ENT_QUOTES, "UTF-8");
$goal = htmlspecialchars(trim($data["objetivo"]), ENT_QUOTES, "UTF-8");
$zone = htmlspecialchars(trim($data["zona"] ?? "No especificada"), ENT_QUOTES, "UTF-8");
$coverage = htmlspecialchars(trim($data["cobertura"] ?? "No especificado"), ENT_QUOTES, "UTF-8");
$note = htmlspecialchars(trim($data["nota"] ?? ""), ENT_QUOTES, "UTF-8");

$safe_name = htmlspecialchars($name, ENT_QUOTES, "UTF-8");
$safe_email = htmlspecialchars($user_email, ENT_QUOTES, "UTF-8");
$subject = "Nueva solicitud web Publiex: " . $company;
$confirmation_subject = "Recibimos su solicitud en Publiex";

// Build a compact HTML email for the commercial team.
$headers = "From: Publiex Web <" . $from_email . ">\r\n";
$headers .= "Reply-To: " . $safe_email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$email_content = "
<html>
<body>
    <h3>Nueva solicitud desde el sitio web de Publiex</h3>
    <p><strong>Nombre:</strong> {$safe_name}</p>
    <p><strong>Correo:</strong> {$safe_email}</p>
    <p><strong>Empresa:</strong> {$company}</p>
    <p><strong>Objetivo:</strong> {$goal}</p>
    <p><strong>Zona de interes:</strong> {$zone}</p>
    <p><strong>Nivel de cobertura:</strong> {$coverage}</p>
    <p><strong>Nota:</strong><br>" . nl2br($note) . "</p>
</body>
</html>
";

// Build a brief confirmation email for the sender.
$confirmation_headers = "From: Publiex <" . $from_email . ">\r\n";
$confirmation_headers .= "Reply-To: " . $to . "\r\n";
$confirmation_headers .= "MIME-Version: 1.0\r\n";
$confirmation_headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$confirmation_content = "
<html>
<body>
    <h3>Gracias por contactar a Publiex</h3>
    <p>Hola {$safe_name},</p>
    <p>Recibimos su solicitud y nuestro equipo le dará seguimiento pronto.</p>
    <p><strong>Empresa:</strong> {$company}</p>
    <p><strong>Objetivo:</strong> {$goal}</p>
    <p><strong>Zona de interes:</strong> {$zone}</p>
    <p><strong>Nivel de cobertura:</strong> {$coverage}</p>
    <p>Este correo confirma que su mensaje fue recibido correctamente.</p>
</body>
</html>
";

$internal_sent = mail($to, $subject, $email_content, $headers);

if ($internal_sent) {
    $confirmation_sent = mail($user_email, $confirmation_subject, $confirmation_content, $confirmation_headers);
    echo json_encode(["sent" => true, "confirmationSent" => $confirmation_sent]);
} else {
    http_response_code(500);
    echo json_encode(["sent" => false, "message" => "Error del servidor al enviar correo."]);
}
?>
