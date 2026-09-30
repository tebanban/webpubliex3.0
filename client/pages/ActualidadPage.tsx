import { Link } from "react-router-dom";

import { publiexAsset } from "@/lib/assets";

const articleFilters = [
  "Todo",
  "Corporativo",
  "Innovación",
  "Casos y campañas",
  "Sostenibilidad",
  "Insights OOH",
  "Educación OOH",
  "Prensa",
];

const articles = [
  {
    category: "Innovación",
    date: "5 agosto 2026",
    title:
      "Publicidad en movimiento: cómo acompañar a la audiencia durante su recorrido",
    description:
      "Una mirada a las posibilidades de integrar presencia exterior, experiencias interiores y frecuencia urbana.",
    image: "actualidad-raw-02.jpeg",
  },
  {
    category: "Insights OOH",
    date: "30 julio 2026",
    title:
      "De visibilidad a dominación visual: cuándo una ubicación se convierte en territorio de marca",
    description:
      "Escala, contexto, continuidad y creatividad: cuatro variables para planificar gran formato con intención.",
    image: "actualidad-raw-03.jpeg",
  },
  {
    category: "Sostenibilidad",
    date: "24 julio 2026",
    title:
      "Medir antes de comunicar: una ruta responsable para la sostenibilidad en OOH",
    description:
      "Qué información debe documentar una empresa de publicidad exterior para construir indicadores verificables.",
    image: "actualidad-raw-05.jpeg",
  },
  {
    category: "Educación OOH",
    date: "18 julio 2026",
    title:
      "Circuitos urbanos: por qué la repetición convierte un recorrido en una experiencia de marca",
    description:
      "La continuidad visual ayuda a construir frecuencia y recordación a lo largo de corredores estratégicos.",
    image: "actualidad-raw-13.jpeg",
  },
  {
    category: "Casos y campañas",
    date: "10 julio 2026",
    title: "Cuando la creatividad transforma el formato",
    description:
      "Volumetría, iluminación y elementos salientes pueden convertir el medio en parte de la idea.",
    image: "actualidad-raw-15.png",
  },
  {
    category: "Innovación",
    date: "2 julio 2026",
    title: "DOOH: flexibilidad creativa para una ciudad que cambia",
    description:
      "Contenido dinámico, iluminación y actualización ágil para campañas con mayor capacidad de adaptación.",
    image: "actualidad-raw-16.jpeg",
  },
];

function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="font-raleway">
      <div className="aspect-[497/330] overflow-hidden bg-zinc-300">
        <img
          alt={article.title}
          className="size-full object-cover"
          src={publiexAsset(article.image)}
        />
      </div>
      <p className="mt-5 text-[clamp(0.7rem,0.78vw,0.9375rem)] font-bold uppercase leading-tight text-publiex-blue">
        {article.category} · {article.date}
      </p>
      <h3 className="mt-4 min-h-[5.7rem] text-[clamp(1.45rem,1.9vw,2.25rem)] font-normal leading-[0.95] text-black">
        {article.title}
      </h3>
      <p className="mt-4 min-h-[3.8rem] text-[clamp(0.95rem,1.1vw,1.375rem)] leading-tight text-black">
        {article.description}
      </p>
      <Link
        className="mt-6 block border-b border-zinc-300 pb-5 text-[clamp(0.7rem,0.78vw,0.9375rem)] font-bold uppercase text-publiex-blue transition hover:text-publiex-blue-light"
        to="/contact"
      >
        Leer más
      </Link>
    </article>
  );
}

export default function ActualidadPage() {
  return (
    <main className="bg-white pt-14 text-black md:pt-16 xl:pt-20">
      {/* Section 1, Hero */}
      <section className="overflow-hidden bg-publiex-blue-deep text-white">
        <div className="mx-auto w-full max-w-480 px-5 py-[clamp(5rem,8vw,10rem)] md:px-10 lg:px-24 xl:px-43.25">
          <p className="font-raleway text-sm font-bold uppercase md:text-xl">
            Actualidad e insights
          </p>
          <h1 className="mt-8 max-w-350 font-raleway text-[clamp(2.7rem,5.2vw,4.965rem)] font-bold leading-[1.04]">
            Ideas, proyectos y perspectivas
            <span className="block text-publiex-red">
              que mueven el exterior.
            </span>
          </h1>
          <p className="mt-8 max-w-275 font-raleway text-[clamp(1rem,1.3vw,1.5625rem)] leading-tight">
            La plataforma editorial de Publiex: noticias corporativas, casos,
            innovación, sostenibilidad y conocimiento para planificar mejor OOH
            y DOOH.
          </p>
        </div>
      </section>

      {/* Section 2, Featured story */}
      <section className="overflow-hidden bg-white px-5 py-[clamp(3rem,5vw,6rem)] md:px-10 lg:px-24">
        <div className="mx-auto grid w-full max-w-393.5 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.76fr)] lg:items-center xl:gap-12">
          <div className="relative aspect-[835/788] overflow-hidden bg-zinc-300 lg:aspect-[835/788]">
            <img
              alt="Tren en movimiento al atardecer"
              className="size-full object-cover"
              src={publiexAsset("actualidad-raw-01.jpeg")}
            />
            <p className="absolute bottom-4 left-4 font-raleway text-xs font-bold uppercase text-white">
              Historia destacada
            </p>
          </div>
          <div className="font-raleway">
            <h2 className="max-w-162 font-raleway text-[clamp(2.2rem,4vw,4.85rem)] font-semibold leading-[0.996]">
              Publicidad en movimiento: cómo acompañar a la audiencia durante su
              recorrido
            </h2>
            <p className="mt-8 max-w-143 text-[clamp(1.05rem,1.43vw,1.715rem)] leading-tight">
              Una mirada a las posibilidades de integrar presencia exterior,
              experiencias interiores y frecuencia urbana.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3, Editorial grid */}
      <section className="overflow-hidden bg-publiex-muted-section px-5 py-[clamp(3rem,5vw,6rem)] md:px-10 lg:px-24">
        <div className="mx-auto w-full max-w-393.5">
          <div className="flex flex-wrap justify-center gap-2 font-raleway text-sm font-semibold">
            {articleFilters.map((filter, index) => (
              <button
                className={
                  index === 0
                    ? "border border-publiex-blue bg-publiex-blue px-5 py-2 text-white"
                    : "border border-publiex-blue bg-transparent px-5 py-2 text-publiex-blue transition hover:bg-white"
                }
                key={filter}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard article={article} key={article.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4, Press room */}
      <section className="overflow-hidden bg-publiex-red px-5 py-[clamp(4rem,5.6vw,6.75rem)] text-white md:px-10 lg:px-24">
        <div className="mx-auto grid w-full max-w-393.5 gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="font-raleway text-sm font-bold uppercase md:text-xl">
              Sala de prensa
            </p>
            <h2 className="mt-8 max-w-260 font-raleway text-[clamp(2.2rem,4.1vw,4.85rem)] font-semibold leading-[0.996] text-black">
              Información corporativa lista para medios y aliados.
            </h2>
            <p className="mt-7 max-w-190 font-raleway text-[clamp(1rem,1.3vw,1.5625rem)] leading-tight">
              Comunicados, recursos gráficos, perfiles institucionales y
              contacto para solicitudes de prensa.
            </p>
          </div>
          <div className="flex flex-col gap-7 font-raleway text-[clamp(1rem,1.3vw,1.5625rem)] font-semibold leading-tight">
            <Link
              className="border-t border-white/45 pt-5 transition hover:text-black"
              to="/contact"
            >
              Contactar a Publiex
            </Link>
            <Link
              className="border-t border-white/45 pt-5 transition hover:text-black"
              to="/contact"
            >
              Consultar sistema visual
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5, Newsletter */}
      <section className="overflow-hidden bg-publiex-blue-deep px-5 py-[clamp(4rem,5.6vw,6.75rem)] text-white md:px-10 lg:px-24">
        <div className="mx-auto grid w-full max-w-393.5 gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="font-raleway text-sm font-bold uppercase md:text-xl">
              Sala de prensa
            </p>
            <h2 className="mt-8 max-w-230 font-raleway text-[clamp(2.2rem,4.1vw,4.85rem)] font-semibold leading-[0.996]">
              Lo más relevante de OOH, directamente en
              <span className="text-[#74a9ff]"> su correo.</span>
            </h2>
          </div>
          <form className="bg-white p-5 font-raleway text-black shadow-sm">
            <label className="block text-xs font-bold uppercase text-zinc-500">
              Correo electrónico
              <input
                className="mt-3 h-12 w-full border border-zinc-200 px-4 text-base normal-case outline-none focus:border-publiex-blue"
                type="email"
              />
            </label>
            <button
              className="mt-5 flex h-12 w-full items-center justify-center bg-publiex-red text-sm font-bold uppercase text-white transition hover:bg-red-600"
              type="button"
            >
              Suscribirme
            </button>
            <p className="mt-3 text-xs leading-tight text-zinc-500">
              Reciba noticias, lanzamientos y contenido especializado sobre OOH
              y DOOH.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
