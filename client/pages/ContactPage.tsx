import { type ChangeEvent, type FormEvent, useState } from "react";

import { SectionLabel } from "@/components/site/SectionLabel";

type ContactFormData = {
  objetivo: string;
  zona: string;
  cobertura: string;
  nombre: string;
  correo: string;
  telefono: string;
  empresa: string;
  nota: string;
  website: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const initialFormData: ContactFormData = {
  objetivo: "",
  zona: "",
  cobertura: "",
  nombre: "",
  correo: "",
  telefono: "",
  empresa: "",
  nota: "",
  website: "",
};

const inputClassName =
  "min-h-12 border border-zinc-300 px-4 font-uni text-base font-normal normal-case disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-500";

const selectClassName = `${inputClassName} bg-white text-black`;
const errorClassName = "border-publiex-red ring-1 ring-publiex-red";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const validateForm = () => {
    const nextErrors: Partial<ContactFormData> = {};

    if (!formData.objetivo) {
      nextErrors.objetivo = "Seleccione un objetivo.";
    }

    if (!formData.nombre.trim()) {
      nextErrors.nombre = "Ingrese su nombre.";
    }

    if (!formData.correo.trim()) {
      nextErrors.correo = "Ingrese su correo electrónico.";
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      nextErrors.correo = "Ingrese un correo electrónico válido.";
    }

    if (!formData.empresa.trim()) {
      nextErrors.empresa = "Ingrese el nombre de la empresa.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus((current) => (current === "submitting" ? current : "idle"));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok || !result.sent) {
        throw new Error(result.message || "No se pudo enviar el formulario.");
      }

      setFormData(initialFormData);
      setErrors({});
      setStatus("success");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    }
  };

  const fieldClassName = (name: keyof ContactFormData, className: string) =>
    `${className} ${errors[name] ? errorClassName : ""}`;

  return (
    <main className="bg-white text-black">
      {/* Section 1, Contact form */}
      <section className="overflow-hidden bg-publiex-gradient text-white">
        <div className="mx-auto grid min-h-screen w-full max-w-480 items-center gap-12 px-5 pb-[clamp(5rem,8vw,9.5rem)] pt-[clamp(9rem,11vw,13rem)] md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-24 xl:px-43.25">
          <div>
            <SectionLabel>Solicitar propuesta</SectionLabel>
            <h1 className="max-w-160 font-raleway text-[clamp(2.5rem,5.6vw,5rem)] font-semibold leading-tight md:leading-20.5">
              Cuéntenos qué quiere lograr.
              <span className="block text-publiex-red">
                Nosotros encontramos dónde.
              </span>
            </h1>
            <p className="mt-7 max-w-162.75 text-[clamp(1.25rem,1.4vw,1.6875rem)] leading-tight">
              Un formulario breve y útil para que el equipo comercial reciba el
              contexto correcto y responda con una recomendación construida para
              su marca.
            </p>
          </div>

          {/* Proposal form */}
          <form
            className="grid gap-5 bg-white p-6 text-black shadow-2xl md:grid-cols-2 md:p-10 xl:p-12"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Hidden spam trap */}
            <label className="hidden" aria-hidden="true">
              Website
              <input
                autoComplete="off"
                name="website"
                tabIndex={-1}
                value={formData.website}
                onChange={handleChange}
              />
            </label>

            {/* Campaign fields */}
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Qué quiere lograr
              <select
                className={fieldClassName("objetivo", selectClassName)}
                name="objetivo"
                value={formData.objetivo}
                onChange={handleChange}
                disabled={status === "submitting"}
                aria-invalid={Boolean(errors.objetivo)}
              >
                <option value="">Seleccione un objetivo</option>
                <option>Generar reconocimiento de marca</option>
                <option>Lanzar un producto o servicio</option>
                <option>Aumentar tráfico a punto de venta</option>
                <option>Dominar una zona estratégica</option>
              </select>
              {errors.objetivo && (
                <span className="font-uni text-xs font-normal normal-case text-publiex-red">
                  {errors.objetivo}
                </span>
              )}
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Zona de interés
              <select
                className={selectClassName}
                name="zona"
                value={formData.zona}
                onChange={handleChange}
                disabled={status === "submitting"}
              >
                <option value="">Seleccione una zona</option>
                <option>Gran Área Metropolitana</option>
                <option>San José</option>
                <option>Alajuela</option>
                <option>Heredia</option>
                <option>Cartago</option>
                <option>Cobertura nacional</option>
              </select>
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase md:col-span-2">
              Nivel de cobertura
              <select
                className={selectClassName}
                name="cobertura"
                value={formData.cobertura}
                onChange={handleChange}
                disabled={status === "submitting"}
              >
                <option value="">Seleccione el nivel</option>
                <option>Una ubicación clave</option>
                <option>Circuito por zona</option>
                <option>Cobertura por provincia</option>
                <option>Cobertura nacional</option>
              </select>
            </label>

            {/* Contact fields */}
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Nombre
              <input
                className={fieldClassName("nombre", inputClassName)}
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                disabled={status === "submitting"}
                aria-invalid={Boolean(errors.nombre)}
              />
              {errors.nombre && (
                <span className="font-uni text-xs font-normal normal-case text-publiex-red">
                  {errors.nombre}
                </span>
              )}
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Correo electrónico
              <input
                className={fieldClassName("correo", inputClassName)}
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleChange}
                disabled={status === "submitting"}
                aria-invalid={Boolean(errors.correo)}
              />
              {errors.correo && (
                <span className="font-uni text-xs font-normal normal-case text-publiex-red">
                  {errors.correo}
                </span>
              )}
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase md:col-span-2">
              Empresa
              <input
                className={fieldClassName("empresa", inputClassName)}
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                disabled={status === "submitting"}
                aria-invalid={Boolean(errors.empresa)}
              />
              {errors.empresa && (
                <span className="font-uni text-xs font-normal normal-case text-publiex-red">
                  {errors.empresa}
                </span>
              )}
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase md:col-span-2">
              Teléfono
              <input
                className={inputClassName}
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                disabled={status === "submitting"}
              />
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase md:col-span-2">
              Nota
              <textarea
                className="min-h-32 border border-zinc-300 px-4 py-3 font-uni text-base font-normal normal-case disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-500"
                name="nota"
                value={formData.nota}
                onChange={handleChange}
                disabled={status === "submitting"}
              />
            </label>

            {/* Submission status */}
            {status === "success" && (
              <p className="font-uni text-sm font-semibold text-emerald-700 md:col-span-2">
                Correo enviado con éxito, pronto le estaremos contactando!
              </p>
            )}
            {status === "error" && (
              <p className="font-uni text-sm font-semibold text-publiex-red md:col-span-2">
                Error al enviar la solicitud. Por favor intente de
                nuevo.
              </p>
            )}
            <button
              className="min-h-12 rounded-l-41.5 bg-publiex-red px-5 font-raleway text-sm font-extrabold uppercase text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2 md:w-max"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Enviando..." : "Solicitar propuesta"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
