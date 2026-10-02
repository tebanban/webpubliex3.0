# Contact Form Email Flow

The Publiex contact page uses the same practical approach as the PMontajes site:
the browser submits the form to a PHP endpoint, and PHP sends the email through
the hosting server with `mail()`.

## Current Implementation

The feature has two parts:

- `client/pages/ContactPage.tsx`: renders the proposal form, validates input,
  shows submit status, and sends a JSON `POST` request to `/send-mail.php`.
- `public/send-mail.php`: receives the JSON payload, validates it again on the
  server, builds an internal HTML email, sends it with PHP `mail()`, and then
  sends a confirmation email to the submitted sender address.

Vite copies everything in `public/` to the production output. After running
`pnpm build`, the endpoint is available at:

```text
dist/spa/send-mail.php
```

When deployed to a PHP-capable host, the public URL should resolve as:

```text
https://your-domain.com/send-mail.php
```

## Submitted Fields

The React form currently sends:

- `objetivo`: campaign objective. Required.
- `zona`: area of interest. Optional.
- `cobertura`: coverage level. Optional.
- `nombre`: contact name. Required.
- `correo`: contact email. Required and validated as email.
- `empresa`: company name. Required.
- `nota`: additional message. Optional.
- `website`: hidden honeypot field for basic spam filtering.

The PHP endpoint repeats the important validation because browser validation can
be bypassed.

## Email Delivery Settings

The current PHP configuration is:

```php
$to = "trafico1@publiexcr.com";
$from_email = "website@publiexcr.com";
```

Before deploying, confirm that `website@publiexcr.com` exists in the hosting
control panel. Many hosts reject or silently drop messages when the `From`
address is not a valid mailbox for the domain.

The visitor email is used as `Reply-To` on the internal notification, so the
commercial team can reply directly from the received message.

After the internal notification is sent, the endpoint sends a separate
confirmation email to the visitor. The internal notification is the primary
success condition: if the confirmation email fails but the internal email was
delivered, the endpoint still returns `sent: true` with `confirmationSent:
false`.

## How To Implement This In Another Static React Site

1. Create or update the React form as a controlled form.
2. Add client-side validation for required fields and email format.
3. On submit, send the form data as JSON:

```ts
await fetch("/send-mail.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
```

4. Add `public/send-mail.php`.
5. In PHP, read `php://input`, decode JSON, validate required fields, sanitize
   values, build the email body, and call `mail()`.
6. Deploy the built site to a host that can execute PHP from the site root.
7. Submit a production test message and confirm it arrives in the recipient
   mailbox.

## Local Development Notes

`pnpm dev` starts Vite, but Vite does not execute PHP. The form can render and
validate locally, but the actual email endpoint will only work when
`/send-mail.php` is served by a PHP-capable local server or by the production
host.

If local testing needs a working endpoint, run the built files through a PHP
server or test after deployment.

## Troubleshooting

- `404` for `/send-mail.php`: the PHP file is missing from the deployed root or
  the host is not serving files from the expected build directory.
- `405 Metodo no permitido`: the request was not sent as `POST`.
- `Faltan datos requeridos`: one of `objetivo`, `nombre`, `correo`, or
  `empresa` is empty.
- `Correo invalido`: the submitted email failed server-side validation.
- `Error del servidor al enviar correo`: PHP `mail()` returned false. Check the
  host mail configuration and confirm the sender mailbox exists.
- Internal message arrives but sender confirmation does not: check the sender
  mailbox spam folder and review whether the recipient provider filtered the
  automatic confirmation.
- No message arrives but the request succeeds: check spam folders, DNS mail
  records, sender reputation, and whether the host allows PHP `mail()`.

## Production Checklist

- Confirm `public/send-mail.php` exists before building.
- Run `pnpm typecheck`.
- Run `pnpm build`.
- Confirm `dist/spa/send-mail.php` exists.
- Deploy to a PHP-capable host.
- Confirm `website@publiexcr.com` exists.
- Send a test submission from the live domain.
- Confirm the message arrives at `trafico1@publiexcr.com`.
- Confirm the submitted sender email receives the automatic confirmation.
