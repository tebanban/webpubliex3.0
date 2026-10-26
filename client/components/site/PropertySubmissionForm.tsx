import { useRef, useState, type FormEvent } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const stages = ["Ubicación", "El espacio", "Contacto"];
const titles = [
  "¿Dónde se encuentra el espacio?",
  "Cuéntenos sobre el espacio.",
  "¿Cómo podemos contactarle?",
];
const initialValues = {
  maps: "",
  provincia: "",
  canton: "",
  distrito: "",
  direccion: "",
  tipo: "",
  dimensiones: "",
  fotografias: "",
  detalles: "",
  nombre: "",
  correo: "",
  telefono: "",
  empresa: "",
  website: "",
};
type FieldName = keyof typeof initialValues;
const fieldStyle =
  "h-12 rounded-none border-zinc-300 bg-white text-sm shadow-none";

export function PropertySubmissionForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const submittingRef = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const update = (name: FieldName, value: string) =>
    setValues((current) => ({ ...current, [name]: value }));
  const changeStep = (next: number) => {
    setStatus("idle");
    setStep(next);
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  // Send property details through the same email endpoint as the quote form.
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submittingRef.current) return;
    if (step < 2) {
      changeStep(step + 1);
      return;
    }

    submittingRef.current = true;
    setStatus("submitting");
    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          objetivo: "Postular propiedad",
          zona: [values.provincia, values.canton, values.distrito]
            .map((value) => value.trim())
            .join(", "),
          cobertura: "Evaluación de ubicación",
          nombre: values.nombre.trim(),
          correo: values.correo.trim(),
          telefono: values.telefono.trim(),
          // Individual owners can submit without a company name.
          empresa: values.empresa.trim() || values.nombre.trim(),
          website: values.website,
          nota: [
            `Google Maps: ${values.maps}`,
            `Dirección o punto de referencia: ${values.direccion}`,
            `Tipo de espacio: ${values.tipo}`,
            `Dimensiones: ${values.dimensiones || "Por confirmar"}`,
            `Fotografías (enlace): ${values.fotografias || "No incluidas"}`,
            `Información adicional: ${values.detalles || "No indicada"}`,
          ].join("\n"),
        }),
      });
      const result = await response.json();
      if (!response.ok || result.sent !== true)
        throw new Error("Email delivery failed");

      setValues(initialValues);
      setStatus("success");
      requestAnimationFrame(() => headingRef.current?.focus());
    } catch {
      // Retain all entered values so a failed submission can be retried.
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  };
  const field = (
    name: FieldName,
    label: string,
    options: {
      required?: boolean;
      type?: string;
      placeholder?: string;
      autoComplete?: string;
    } = {},
  ) => (
    <label className="grid gap-2 text-sm font-bold" key={name}>
      <span>
        {label}
        {options.required && <span className="text-publiex-red"> *</span>}
      </span>
      <Input
        {...options}
        className={fieldStyle}
        name={name}
        value={values[name]}
        onChange={(event) => update(name, event.target.value)}
      />
    </label>
  );

  return (
    <form
      onSubmit={submit}
      className="border-t-4 border-publiex-blue bg-white p-5 font-raleway text-slate-950 shadow-[-8px_9px_68px_0_rgba(0,0,0,0.2)] md:p-10 xl:min-h-[clamp(60rem,67.8vw,81.375rem)] xl:p-12"
      aria-label="Postular su ubicación"
      aria-busy={status === "submitting"}
    >
      {status === "success" ? (
        <div role="status" className="py-12">
          <h3
            ref={headingRef}
            tabIndex={-1}
            className="text-3xl font-semibold outline-none"
          >
            Recibimos su ubicación.
          </h3>
          <p className="mt-6 leading-relaxed">
            Gracias por postular su propiedad. El equipo de Publiex revisará la
            información y le contactará.
          </p>
        </div>
      ) : (
        <>
          {/* Step progress and keyboard focus follow the active form section. */}
          <ol className="mb-12 flex items-center justify-between gap-2 text-[0.65rem] font-bold uppercase tracking-wide md:text-xs">
            {stages.map((stage, index) => (
              <li
                key={stage}
                aria-current={step === index ? "step" : undefined}
                className={`flex items-center gap-2 ${index <= step ? "text-publiex-blue" : "text-zinc-500"}`}
              >
                <span
                  className={`flex size-7 shrink-0 items-center justify-center rounded-full border ${index <= step ? "border-publiex-blue bg-publiex-blue text-white" : "border-zinc-300"}`}
                >
                  {index + 1}
                </span>
                <span>{stage}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs font-bold uppercase tracking-widest text-publiex-red">
            Paso {step + 1} de 3
          </p>
          <h3
            ref={headingRef}
            tabIndex={-1}
            className="mt-4 mb-8 text-[clamp(1.65rem,2.5vw,3rem)] font-semibold leading-tight outline-none"
          >
            {titles[step]}
          </h3>
          <fieldset
            disabled={status === "submitting"}
            className="grid gap-5 disabled:opacity-60"
          >
            <legend className="sr-only">{stages[step]}</legend>
            {step === 0 && (
              <>
                {field("maps", "Enlace de Google Maps", {
                  required: true,
                  type: "url",
                  placeholder: "Pegue aquí el enlace de la ubicación",
                })}
                <p className="-mt-3 text-xs text-zinc-500">
                  En Google Maps seleccione “Compartir” y copie el enlace.
                </p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit border-b border-publiex-blue pb-2 text-xs font-bold uppercase tracking-wide text-publiex-blue"
                >
                  Buscar mi ubicación en Google Maps ↗
                </a>
                {/* Regional map provides context without transmitting entered property details. */}
                <iframe
                  title="Mapa de Costa Rica"
                  className="h-64 w-full border border-zinc-300 bg-emerald-100 xl:h-80"
                  src="https://maps.google.com/maps?q=Costa%20Rica&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  {field("provincia", "Provincia", { required: true })}
                  {field("canton", "Cantón", { required: true })}
                  {field("distrito", "Distrito", { required: true })}
                </div>
                <label className="grid gap-2 text-sm font-bold">
                  <span>
                    Dirección o punto de referencia{" "}
                    <span className="text-publiex-red">*</span>
                  </span>
                  <Textarea
                    required
                    className="min-h-24 rounded-none border-zinc-300"
                    name="direccion"
                    value={values.direccion}
                    onChange={(event) =>
                      update("direccion", event.target.value)
                    }
                    placeholder="Ej.: 200 metros oeste de Multiplaza Escazú, frente a…"
                  />
                </label>
              </>
            )}
            {step === 1 && (
              <>
                <label className="grid gap-2 text-sm font-bold">
                  <span>
                    Tipo de espacio <span className="text-publiex-red">*</span>
                  </span>
                  <select
                    required
                    className={`${fieldStyle} w-full border px-3`}
                    name="tipo"
                    value={values.tipo}
                    onChange={(event) => update("tipo", event.target.value)}
                  >
                    <option value="">Seleccione una opción</option>
                    <option>Terreno</option>
                    <option>Edificio o fachada</option>
                    <option>Azotea</option>
                    <option>Otro espacio</option>
                  </select>
                </label>
                {field("dimensiones", "Dimensiones aproximadas", {
                  placeholder: "Ancho y alto o área disponible",
                })}
                {field("fotografias", "Enlace a fotografías", {
                  type: "url",
                  placeholder: "https://…",
                })}
                <p className="-mt-3 text-xs text-zinc-500">
                  Comparta un enlace accesible a una carpeta con fotografías del
                  lugar.
                </p>
                <label className="grid gap-2 text-sm font-bold">
                  Información adicional
                  <Textarea
                    className="min-h-32 rounded-none border-zinc-300"
                    name="detalles"
                    value={values.detalles}
                    onChange={(event) => update("detalles", event.target.value)}
                  />
                </label>
              </>
            )}
            {step === 2 && (
              <>
                {field("nombre", "Nombre completo", {
                  required: true,
                  autoComplete: "name",
                })}
                {field("correo", "Correo electrónico", {
                  required: true,
                  type: "email",
                  autoComplete: "email",
                })}
                {field("telefono", "Teléfono", {
                  required: true,
                  type: "tel",
                  autoComplete: "tel",
                })}
                {field("empresa", "Empresa (opcional)", {
                  autoComplete: "organization",
                })}
              </>
            )}
          </fieldset>
          {/* Match the quote form's hidden spam trap. */}
          <label className="hidden" aria-hidden="true">
            Website
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(event) => update("website", event.target.value)}
            />
          </label>
          {status === "error" && (
            <p role="alert" className="mt-6 text-sm text-publiex-red">
              No pudimos enviar su ubicación. Sus datos se conservan; intente de
              nuevo o contáctenos en{" "}
              <a href="mailto:ventas@publiexcr.com" className="underline">
                ventas@publiexcr.com
              </a>
              .
            </p>
          )}
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-zinc-200 pt-6">
            {step > 0 && (
              <button
                type="button"
                disabled={status === "submitting"}
                onClick={() => changeStep(step - 1)}
                className="text-xs font-bold uppercase text-publiex-blue"
              >
                ← Anterior
              </button>
            )}
            <button
              disabled={status === "submitting"}
              type="submit"
              className="ml-auto bg-publiex-red px-5 py-4 text-xs font-bold uppercase text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "submitting"
                ? "Enviando…"
                : step < 2
                  ? "Continuar →"
                  : "Enviar mi ubicación"}
            </button>
          </div>
        </>
      )}
    </form>
  );
}
