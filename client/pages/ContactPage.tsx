import { SectionLabel } from "@/components/site/SectionLabel";

export default function ContactPage() {
  return (
    <main className="bg-white text-black">
      {/* Contact form */}
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
          <form className="grid gap-5 bg-white p-6 text-black shadow-2xl md:grid-cols-2 md:p-10 xl:p-12">
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Qué quiere lograr
              <select className="min-h-12 border border-zinc-300 bg-white px-4 font-uni text-base font-normal normal-case text-black">
                <option>Seleccione un objetivo</option>
                <option>Generar reconocimiento de marca</option>
                <option>Lanzar un producto o servicio</option>
                <option>Aumentar tráfico a punto de venta</option>
                <option>Dominar una zona estratégica</option>
              </select>
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Zona de interés
              <select className="min-h-12 border border-zinc-300 bg-white px-4 font-uni text-base font-normal normal-case text-black">
                <option>Seleccione una zona</option>
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
              <select className="min-h-12 border border-zinc-300 bg-white px-4 font-uni text-base font-normal normal-case text-black">
                <option>Seleccione el nivel</option>
                <option>Una ubicación clave</option>
                <option>Circuito por zona</option>
                <option>Cobertura por provincia</option>
                <option>Cobertura nacional</option>
              </select>
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Nombre
              <input className="min-h-12 border border-zinc-300 px-4 font-uni text-base font-normal normal-case" />
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Correo electrónico
              <input
                className="min-h-12 border border-zinc-300 px-4 font-uni text-base font-normal normal-case"
                type="email"
              />
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase md:col-span-2">
              Empresa
              <input className="min-h-12 border border-zinc-300 px-4 font-uni text-base font-normal normal-case" />
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase md:col-span-2">
              Nota
              <textarea className="min-h-32 border border-zinc-300 px-4 py-3 font-uni text-base font-normal normal-case" />
            </label>
            <button
              className="min-h-12 rounded-l-41.5 bg-publiex-red px-5 font-raleway text-sm font-extrabold uppercase text-white transition hover:bg-red-600 md:col-span-2 md:w-max"
              type="button"
            >
              Solicitar propuesta
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
