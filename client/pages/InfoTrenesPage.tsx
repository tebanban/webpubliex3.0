import { Link } from "react-router-dom";
import { publiexAsset } from "@/lib/assets";

const networkStats = [
  {
    value: "+3,5M",
    label: "pasajeros al año",
    icon: "tren-1.svg",
  },
  {
    value: "14",
    label: "trenes en operación activa",
    icon: "tren-2.svg",
  },
  {
    value: "96",
    label: "servicios por día",
    icon: "tren-3.svg",
  },
  {
    value: "33",
    label: "paradas en la red",
    icon: "tren-4.svg",
  },
  {
    value: "14",
    label: "cantones de influencia",
    icon: "tren-5.svg",
  },
  {
    value: "+2M",
    label: "impresiones exteriores\nmensuales GAM",
    icon: "tren-6.svg",
  },
];

const routes = [
  {
    number: "01",
    title: "San José — Cartago",
    detail: "149.385 pasajeros/mes",
    meta: "45 min de viaje\nMayor volumen anual de pasajeros",
  },
  {
    number: "02",
    title: "San José — Heredia — Alajuela",
    detail: "131.112 pasajeros/mes",
    meta: "25 min por tramo\nFlujo universitario y ejecutivo",
  },
  {
    number: "03",
    title: "Curridabat — Pavas — Belén",
    detail: "45.859 pasajeros/mes",
    meta: "40 min de viaje\nZonas empresariales y actividad urbana",
  },
];

const formats = [
  {
    eyebrow: "Exterior · máxima cobertura",
    title: "Dominio Total",
    copy: "Cuatro laterales y ventanas exteriores para convertir dos vagones en una presencia envolvente.",
  },
  {
    eyebrow: "Exterior · impacto estratégico",
    title: "Línea Integral",
    copy: "Dos laterales y ventanas de un vagón para lograr visibilidad continua con una inversión eficiente.",
  },
  {
    eyebrow: "Exterior · presencia continua",
    title: "Ventanas Panorámicas",
    copy: "32 o 40 ventanas microperforadas que acompañan el recorrido de punta a punta.",
  },
  {
    eyebrow: "Interior · inmersión",
    title: "Experiencia Total",
    copy: "Techo, pasillo, agarraderas y, en DMU, precintas y audio para acompañar al pasajero durante el trayecto.",
  },
  {
    eyebrow: "Interior · interacción visual",
    title: "Pasillo Activo",
    copy: "Piso y agarraderas en las zonas de mayor circulación dentro del tren.",
  },
  {
    eyebrow: "DMU · presencia sonora",
    title: "Audio Experiencia",
    copy: "Mensajes de 15, 20 o 30 segundos mediante el sistema de audio a bordo.",
  },
];

export default function InfoTrenesPage() {
  return (
    <main className="bg-white pt-14 text-black md:pt-16 xl:pt-20">
      {/* Section 1, Hero */}
      <section className="relative overflow-hidden bg-publiex-blue-deep text-white">
        <img
          alt="Tren Publiex con publicidad exterior"
          className="absolute inset-0 size-full object-cover object-[64%_center] opacity-90"
          src={publiexAsset("info-trenes-hero.jpeg")}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.72)_32%,rgba(0,0,0,0)_58%)]" />
        <div className="relative mx-auto flex min-h-[clamp(38rem,39.6vw,47rem)] w-full max-w-480 flex-col justify-center px-5 py-20 md:px-10 lg:px-24 xl:px-47.5">
          <p className="font-raleway text-sm font-bold uppercase md:text-xl">
            El nuevo ecosistema de publicidad en movimiento
          </p>
          <h1 className="mt-8 max-w-178 font-raleway text-[clamp(2.6rem,5vw,4.965rem)] font-semibold leading-[1.04]">
            Su marca viaja
            <span className="block text-publiex-red">con Costa Rica</span>
          </h1>
          <p className="mt-8 max-w-183 font-raleway text-[clamp(1.125rem,1.43vw,1.715rem)] leading-tight">
            El único medio que puede acompañar a su audiencia por dentro,
            proyectarse hacia la ciudad y estar presente en los principales
            puntos de conexión ferroviaria.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6 font-raleway text-[clamp(0.9rem,1vw,1.215rem)] font-bold uppercase">
            <Link
              className="bg-publiex-red px-5 py-3 text-white transition hover:bg-red-600"
              to="/contact"
            >
              Diseñar una campaña
            </Link>
            <a
              className="underline underline-offset-4 transition hover:text-white/75"
              href="#formatos"
            >
              Explorar formatos
            </a>
          </div>
        </div>
      </section>

      {/* Section 2, Network scale */}
      <section className="overflow-hidden bg-publiex-muted-section px-5 py-[clamp(4rem,5.6vw,6.75rem)] md:px-10 lg:px-24">
        <div className="mx-auto w-full max-w-393.5">
          <p className="font-raleway text-sm font-bold uppercase md:text-xl">
            La escala de la red
          </p>
          <div className="mt-12 grid gap-px bg-zinc-300 md:grid-cols-2 xl:grid-cols-3">
            {networkStats.map(({ value, label, icon }) => (
              <article
                className="bg-publiex-muted-section p-8 font-raleway"
                key={label}
              >
                <div className="flex items-center gap-5">
                  <img
                    alt=""
                    aria-hidden="true"
                    className="h-[clamp(2.5rem,3.2vw,3.75rem)] w-[clamp(3.25rem,4.3vw,5rem)] shrink-0 object-contain object-left"
                    src={publiexAsset(icon)}
                  />
                  <p className="text-[clamp(2.7rem,4.2vw,4.965rem)] font-bold leading-none">
                    {value}
                  </p>
                </div>
                <p className="mt-3 whitespace-pre-line text-[clamp(1rem,1.25vw,1.5rem)] font-bold leading-tight">
                  {label}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-220 font-raleway text-sm leading-tight text-zinc-700 md:text-lg">
            Pasajeros, servicios y cobertura: Informe Anual de Estadísticas
            Operativas INCOFER 2025. Impresiones exteriores: AllUnite®. Datos
            sujetos a variaciones operativas.
          </p>
        </div>
      </section>

      {/* Section 3, Routes */}
      <section className="overflow-hidden bg-white px-5 py-[clamp(4rem,5.6vw,6.75rem)] md:px-10 lg:px-24">
        <div className="mx-auto w-full max-w-393.5">
          <p className="font-raleway text-sm font-bold uppercase md:text-xl">
            Rutas
          </p>
          <h2 className="mt-8 max-w-267 font-raleway text-[clamp(2.6rem,5vw,4.965rem)] font-semibold leading-[1.04]">
            Tres líneas.
            <span className="block text-publiex-red">
              Miles de rutinas cotidianas.
            </span>
          </h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {routes.map((route) => (
              <article
                className="border border-black/40 p-8 font-raleway"
                key={route.number}
              >
                <p className="text-xl font-bold text-publiex-red">
                  {route.number}
                </p>
                <h3 className="mt-7 min-h-20 text-[clamp(1.4rem,1.85vw,2.1875rem)] font-semibold leading-[1.18]">
                  {route.title}
                </h3>
                <p className="mt-10 text-[clamp(1rem,1.25vw,1.5rem)] font-bold leading-loose">
                  {route.detail}
                </p>
                <p className="whitespace-pre-line text-[clamp(1rem,1.25vw,1.5rem)] leading-loose">
                  {route.meta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4, Formats */}
      <section
        id="formatos"
        className="overflow-hidden bg-publiex-blue-deep px-5 py-[clamp(4.5rem,6.5vw,7.75rem)] text-white md:px-10 lg:px-24"
      >
        <div className="mx-auto w-full max-w-393.5">
          <p className="font-raleway text-sm font-bold uppercase md:text-xl">
            Mi formatos
          </p>
          <h2 className="mt-8 max-w-312 font-raleway text-[clamp(2.6rem,5vw,4.965rem)] font-semibold leading-[1.04]">
            Una plataforma para cada
            <span className="block text-publiex-red">nivel de atención.</span>
          </h2>
          <div className="mt-16 divide-y divide-white/25 border-y border-white/25">
            {formats.map((format) => (
              <article
                className="grid gap-5 py-7 font-raleway lg:grid-cols-[minmax(220px,0.85fr)_minmax(0,1.45fr)_230px] lg:items-center"
                key={format.title}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8db8ff]">
                    {format.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[clamp(1.8rem,2.48vw,2.965rem)] font-semibold leading-tight">
                    {format.title}
                  </h3>
                </div>
                <p className="max-w-190 text-[clamp(1rem,1.1vw,1.2775rem)] leading-tight">
                  {format.copy}
                </p>
                <div className="font-raleway text-xs font-semibold uppercase tracking-[0.08em] text-[#8db8ff] lg:text-right">
                  <Link
                    className="inline-flex bg-publiex-red px-5 py-2 text-[clamp(1rem,1.48vw,1.7775rem)] font-bold text-white transition hover:bg-red-600"
                    to="/contact"
                  >
                    Consultar
                  </Link>
                  <p className="mt-3 whitespace-nowrap">Disponibilidad y recomendación</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5, Campaign ecosystem CTA */}
      <section className="overflow-hidden bg-publiex-red text-white">
        <div className="mx-auto grid w-full max-w-480 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="flex flex-col justify-center px-5 py-[clamp(4rem,6vw,7rem)] md:px-10 lg:px-24 xl:pl-47.5 xl:pr-12">
            <h2 className="max-w-165 font-raleway text-[clamp(2.6rem,5vw,4.965rem)] font-semibold leading-[1.04]">
              Alcance afuera. Atención adentro.
              <span className="block text-black">
                Frecuencia en cada viaje.
              </span>
            </h2>
            <p className="mt-8 max-w-165 font-raleway text-[clamp(1.125rem,1.43vw,1.715rem)] leading-tight">
              Una campaña puede combinar Dominio Total para impactar la ciudad,
              Experiencia Total para profundizar la conexión y presencia en
              estaciones para reforzar el contacto.
            </p>
            <Link
              className="mt-9 w-fit bg-white px-5 py-3 font-raleway text-sm font-bold uppercase text-black transition hover:bg-zinc-100 md:text-xl"
              to="/contact"
            >
              Crear un ecosistema de campaña
            </Link>
          </div>
          <div className="min-h-[clamp(26rem,34vw,40rem)] overflow-hidden">
            <img
              alt="Tren Publiex con campaña exterior en movimiento"
              className="size-full object-cover object-center"
              src={publiexAsset("infotren-reach.png")}
            />
          </div>
        </div>
      </section>
    </main>
  );
}





