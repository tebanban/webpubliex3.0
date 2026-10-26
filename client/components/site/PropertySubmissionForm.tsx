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
};
type FieldName = keyof typeof initialValues;
const fieldStyle =
  "h-12 rounded-none border-zinc-300 bg-white text-sm shadow-none";

export function PropertySubmissionForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(initialValues);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const update = (name: FieldName, value: string) =>
    setValues((current) => ({ ...current, [name]: value }));
  const changeStep = (next: number) => {
    setStep(next);
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  // Keep entries in memory; email delivery is pending approval.
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < 2) changeStep(step + 1);
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
    >
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
      <fieldset className="grid gap-5">
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
                onChange={(event) => update("direccion", event.target.value)}
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
            <p className="text-sm leading-relaxed" role="status">
              El envío de postulaciones todavía no está habilitado. Puede
              contactar al equipo en{" "}
              <a
                href="mailto:ventas@publiexcr.com"
                className="text-publiex-blue underline"
              >
                ventas@publiexcr.com
              </a>
              .
            </p>
          </>
        )}
      </fieldset>
      <div className="mt-8 flex items-center justify-between gap-4 border-t border-zinc-200 pt-6">
        {step > 0 && (
          <button
            type="button"
            onClick={() => changeStep(step - 1)}
            className="text-xs font-bold uppercase text-publiex-blue"
          >
            ← Anterior
          </button>
        )}
        <button
          disabled={step === 2}
          type="submit"
          className="ml-auto bg-publiex-red px-5 py-4 text-xs font-bold uppercase text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {step < 2 ? "Continuar →" : "Enviar mi ubicación"}
        </button>
      </div>
    </form>
  );
}
