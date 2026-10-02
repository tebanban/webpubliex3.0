import { Link } from "react-router-dom";

const agencyBenefits = [
  {
    number: "01",
    title: "Inventario en tiempo real",
    copy: "Busque activos por formato, zona, audiencia y objetivo de campaña.",
  },
  {
    number: "02",
    title: "Propuestas más rápidas",
    copy: "Genere selecciones, fichas técnicas y presentaciones co-brandeadas.",
  },
  {
    number: "03",
    title: "Campañas bajo control",
    copy: "Centralice artes, aprobaciones, pruebas de instalación, métricas y reportes.",
  },
  {
    number: "04",
    title: "Un equipo que responde",
    copy: "Acceso directo a soporte comercial, creativo, producción y operaciones.",
  },
];

export default function AgenciesPage() {
  return (
    <main className="bg-white pt-14 text-black md:pt-16 xl:pt-20">
      {/* Section 1, Agency access hero */}
      <section
        className="overflow-hidden bg-publiex-blue-deep px-5 py-[clamp(4rem,7.8vw,9.375rem)] text-white md:px-10 lg:px-24"
        id="inicio"
      >
        <div className="mx-auto w-full max-w-393.5">
          <p className="font-raleway text-sm font-bold uppercase md:text-xl">
            Publiex para agencias
          </p>
          <h1 className="mt-8 max-w-310 font-raleway text-[clamp(2.75rem,5vw,4.85rem)] font-semibold leading-none">
            Más velocidad para planificar.
            <span className="block text-[#74a9ff]">
              Más impacto para presentar.
            </span>
          </h1>
          <p className="mt-8 max-w-206 font-raleway text-[clamp(1.125rem,1.43vw,1.715rem)] leading-tight">
            Una experiencia diseñada para planners, compradores de medios y
            equipos comerciales que necesitan pasar de la búsqueda a la
            propuesta sin fricción.
          </p>
          <Link
            className="mt-10 inline-flex bg-publiex-red px-4 py-2 font-raleway text-sm font-bold uppercase text-white transition hover:bg-red-600 md:text-xl"
            to="/contact"
          >
            Activar mi acceso
          </Link>
        </div>
      </section>

      {/* Section 2, Agency workflow benefits */}
      <section className="overflow-hidden bg-white px-5 md:px-10 lg:px-24">
        <div className="mx-auto grid w-full max-w-393.5 border-l border-black/40 sm:grid-cols-2 xl:grid-cols-4">
          {agencyBenefits.map((benefit) => (
            <article
              className="min-h-[clamp(16rem,18.35vw,22rem)] border-r border-b border-black/40 p-[clamp(1.5rem,1.7vw,2rem)] font-raleway xl:border-b-0"
              key={benefit.number}
            >
              <p className="text-sm font-bold text-publiex-red md:text-xl">
                {benefit.number}
              </p>
              <h2 className="mt-[clamp(2.25rem,3vw,3.75rem)] max-w-70 text-[clamp(1.6rem,1.83vw,2.1875rem)] font-semibold leading-[1.05]">
                {benefit.title}
              </h2>
              <p className="mt-8 max-w-78 text-[clamp(1rem,1.25vw,1.5rem)] leading-none">
                {benefit.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Section 3, Access CTA */}
      <section className="overflow-hidden bg-publiex-red text-white">
        <div className="mx-auto grid min-h-[clamp(18rem,22.35vw,26.875rem)] w-full max-w-480 items-center gap-10 px-5 py-14 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.95fr)] lg:px-24 xl:pl-43 xl:pr-0">
          <div className="font-raleway">
            <p className="text-sm font-bold uppercase md:text-xl">
              Media kits · especificaciones · disponibilidad · propuestas ·
              reportes
            </p>
            <h2 className="mt-8 max-w-155 text-[clamp(2.5rem,4.04vw,4.85rem)] font-semibold leading-none">
              Todo lo que su agencia necesita.
              <span className="block text-black">En un solo lugar.</span>
            </h2>
          </div>
          <Link
            className="flex min-h-[clamp(7rem,11.15vw,13.375rem)] w-full items-center justify-center rounded-l-[999px] bg-black px-10 text-center font-raleway text-[clamp(2.3rem,4.17vw,5rem)] font-black uppercase leading-none text-white transition hover:bg-zinc-900"
            to="/contact"
          >
            <span>
              <span className="block font-semibold">Solicitar</span>
              <span className="block">acceso</span>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
