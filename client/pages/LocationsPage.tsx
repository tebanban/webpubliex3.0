import { publiexAsset } from "@/lib/assets";

function LocationButton({
  children,
  href,
  variant = "red",
}: {
  children: string;
  href: string;
  variant?: "red" | "underline";
}) {
  const styles = {
    red: "bg-publiex-red px-5 text-white hover:bg-red-600",
    underline: "text-white underline-offset-4 hover:underline",
  };

  return (
    <a
      className={`inline-flex min-h-12.5 items-center justify-center font-raleway text-[clamp(0.875rem,1.04vw,1.25rem)] font-bold uppercase leading-8 transition ${styles[variant]}`}
      href={href}
    >
      {children}
    </a>
  );
}

export default function LocationsPage() {
  return (
    <main className="bg-white pt-14 text-black md:pt-16 xl:pt-20">
      {/* Section 1, Hero */}
      <section className="overflow-hidden bg-white text-white">
        <div className="mx-auto grid w-full max-w-480 lg:grid-cols-[51%_49%]">
          <div className="flex flex-col justify-center bg-publiex-blue-deep px-5 py-[clamp(5rem,7vw,8rem)] md:px-10 lg:px-24 xl:pl-47.5 xl:pr-18">
            <p className="font-raleway text-sm font-bold uppercase md:text-2xl">
              Publiex explora
            </p>
            <h1 className="mt-9 max-w-178 font-raleway text-[clamp(2.7rem,5.4vw,4.965rem)] font-bold leading-[1.04]">
              Hagamos visible su historia,
              <span className="block text-publiex-red">
                justo donde Costa Rica se mueve.
              </span>
            </h1>
            <p className="mt-10 max-w-184 font-raleway text-[clamp(1.125rem,1.43vw,1.715rem)] leading-tight">
              Explore una muestra del inventario de Publiex, descubra qué puede
              lograr cada formato y construya una selección preliminar para su
              campaña.
            </p>
          </div>
          <div className="min-h-[clamp(30rem,44.1vw,52.9375rem)]">
            <img
              alt="Valla Publiex ubicada en un corredor urbano de Costa Rica"
              className="size-full object-cover object-center"
              src={publiexAsset("locations-hero.png")}
            />
          </div>
        </div>
      </section>

      {/* Section 2, Inventory visual */}
      <section className="overflow-hidden bg-publiex-muted-section px-5 py-[clamp(3rem,5vw,6rem)] md:px-10 lg:px-24">
        <div className="mx-auto w-full max-w-480">
          <div className="grid min-h-[clamp(42rem,46.9vw,56.25rem)] overflow-hidden bg-white shadow-sm lg:grid-cols-[10%_70%_20%]">
            <aside className="flex flex-col border-b border-zinc-200 bg-zinc-50 px-4 py-7 font-raleway xl:px-5 lg:border-b-0 lg:border-r">
              <h2 className="text-[clamp(1.1rem,1.1vw,1.35rem)] font-extrabold uppercase tracking-wide">
                Refinar búsqueda
              </h2>

              <div className="mt-8 space-y-6">
                {[
                  {
                    label: "Provincia",
                    defaultValue: "Todas",
                    options: [
                      "Todas",
                      "San José",
                      "Alajuela",
                      "Cartago",
                      "Heredia",
                      "Guanacaste",
                      "Puntarenas",
                      "Limón",
                    ],
                  },
                  {
                    label: "Solución",
                    defaultValue: "Todas",
                    options: [
                      "Todas",
                      "Vallas Unipolares",
                      "Mega Landmarks",
                      "Circuitos Rotativos",
                      "Banner Post",
                      "Puentes y formatos urbanos",
                      "Pantallas Digitales",
                    ],
                  },
                  {
                    label: "Objetivo",
                    defaultValue: "Todos",
                    options: ["Todos"],
                  },
                ].map((filter) => (
                  <label className="block" key={filter.label}>
                    <span className="block text-xs font-extrabold uppercase tracking-[0.16em] text-zinc-600">
                      {filter.label}
                    </span>
                    <select
                      className="mt-3 h-8 w-full border border-zinc-300 bg-white px-2 text-xs font-bold text-black shadow-inner"
                      defaultValue={filter.defaultValue}
                    >
                      {filter.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                ))}
              </div>

              <label className="mt-7 flex items-center gap-2 border-y border-zinc-300 py-5 text-xs font-extrabold uppercase tracking-[0.14em] text-zinc-700">
                <input className="size-3.5" type="checkbox" />
                Impacto nocturno o iluminado
              </label>

              <div className="mt-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-zinc-600">
                  Categorías
                </p>
                <div className="mt-6 space-y-6 text-[clamp(0.95rem,0.95vw,1.2rem)] text-zinc-800">
                  {[
                    ["bg-[#2859c7]", "Valla unipolar"],
                    ["bg-publiex-red", "Mega landmark"],
                    ["bg-[#3f2b78]", "Circuito rotativo"],
                    ["bg-[#4597bf]", "DOOH"],
                    ["bg-[#3d8b62]", "Trenes"],
                  ].map(([color, label]) => (
                    <div className="flex items-center gap-4" key={label}>
                      <span className={`size-3 rounded-full ${color}`} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="mt-auto w-fit border-b border-black pb-3 pt-12 text-xs font-extrabold uppercase tracking-[0.14em] text-zinc-700"
                type="button"
              >
                Limpiar filtros
              </button>
            </aside>

            <div className="relative min-h-[32rem] overflow-hidden bg-[#d9e8ed]">
              <img
                alt="Mapa comercial de muestra con ubicaciones Publiex"
                className="absolute inset-0 size-full object-cover"
                src={publiexAsset("Locations-map.png")}
              />
              <div className="absolute left-[2.5%] top-6 font-raleway text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Océano Pacífico
              </div>
              <div className="absolute right-[2.5%] top-6 font-raleway text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Mar Caribe
              </div>
              <div className="absolute inset-x-[3%] bottom-7 bg-white/95 px-6 py-5 font-raleway shadow-sm">
                <p className="text-sm font-extrabold uppercase tracking-[0.08em]">
                  Mapa comercial de muestra
                </p>
                <p className="mt-2 text-xs leading-tight text-zinc-600 md:text-sm">
                  Los puntos ilustran zonas y corredores. Las coordenadas
                  exactas se publicarán únicamente tras validación interna.
                </p>
              </div>
            </div>

            <aside className="border-t border-zinc-200 bg-white font-raleway lg:border-l lg:border-t-0">
              <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-5 text-xs text-zinc-500 xl:px-5">
                <p className="text-sm font-extrabold text-black">
                  8 medios encontrados
                </p>
                <p>Muestra pública · Costa Rica</p>
              </div>

              <div className="max-h-[clamp(36rem,44vw,53rem)] space-y-5 overflow-y-auto p-4 xl:p-5">
                <article className="border border-publiex-blue bg-white">
                  <div className="relative h-[clamp(10rem,11.8vw,14.2rem)] overflow-hidden bg-black">
                    <img
                      alt="Vista nocturna de valla unipolar en corredor urbano"
                      className="size-full object-cover"
                      src={publiexAsset("Locations-campaign2.png")}
                    />
                    <p className="absolute left-4 top-4 text-xs font-extrabold uppercase text-white">
                      SJ · Muestra 01
                    </p>
                    <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white text-2xl font-black text-publiex-blue">
                      ✓
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-extrabold uppercase text-publiex-blue">
                      Valla unipolar · San José
                    </p>
                    <h3 className="mt-4 text-[clamp(1.4rem,1.6vw,2rem)] font-semibold leading-tight">
                      Sabana · corredor urbano
                    </h3>
                    <p className="mt-3 text-sm leading-tight text-zinc-600">
                      Presencia sostenida en un corredor metropolitano de alta
                      actividad.
                    </p>
                    <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-extrabold uppercase">
                      <a
                        className="flex items-center justify-between border-t border-zinc-300 pt-5 text-publiex-blue"
                        href="/contact"
                      >
                        Ver ubicación <span aria-hidden="true">↗</span>
                      </a>
                      <a
                        className="flex items-center justify-between bg-publiex-red px-4 py-5 text-white"
                        href="/contact"
                      >
                        Ver mi campaña aquí <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </article>

                <article className="border border-zinc-200 bg-white">
                  <div className="relative h-[clamp(10rem,11.8vw,14.2rem)] overflow-hidden">
                    <img
                      alt="Mega landmark en carretera para muestra de inventario"
                      className="size-full object-cover"
                      src={publiexAsset("locations-selection-thumb.png")}
                    />
                    <p className="absolute left-4 top-4 text-xs font-extrabold uppercase text-white">
                      SJ · Muestra 02
                    </p>
                    <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white text-2xl font-black text-publiex-blue">
                      +
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-extrabold uppercase text-publiex-blue">
                      Mega landmark · San José
                    </p>
                    <h3 className="mt-4 text-[clamp(1.4rem,1.6vw,2rem)] font-semibold leading-tight">
                      Escazú · alto impacto
                    </h3>
                    <p className="mt-3 text-sm leading-tight text-zinc-600">
                      Escala y exclusividad para convertir el entorno en
                      territorio de marca.
                    </p>
                    <span className="mt-5 block h-1 bg-publiex-red" />
                  </div>
                </article>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 3, Featured location */}
      <section className="overflow-hidden bg-publiex-blue-deep px-5 py-[clamp(4rem,6.25vw,7.5rem)] text-white md:px-10 lg:px-24">
        <div className="mx-auto max-w-393.5">
          <h2 className="max-w-300 font-raleway text-[clamp(2.4rem,5.4vw,4.965rem)] font-semibold leading-[1.04]">
            Encuentre el lugar donde su marca puede{" "}
            <span className="text-publiex-red">generar impacto.</span>
          </h2>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div className="relative min-h-[clamp(30rem,33.3vw,40rem)] overflow-hidden bg-black">
              <img
                alt="Previsualización de ubicación para campaña Publiex"
                className="absolute inset-0 size-full object-cover opacity-65"
                src={publiexAsset("Locations-campaign2.png")}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative flex min-h-[clamp(30rem,33.3vw,40rem)] flex-col items-center justify-center px-6 text-center">
                <p className="font-raleway text-[clamp(1.8rem,3.5vw,2.75rem)] font-bold">
                  Su campaña aparecerá aquí
                </p>
                <p className="mt-3 font-raleway text-sm opacity-80 md:text-base">
                  Previsualización conceptual para evaluar presencia y lectura.
                </p>
              </div>
            </div>
            <aside>
              <p className="font-raleway text-sm font-bold uppercase text-publiex-blue md:text-2xl">
                SJ · Muestra 01 · Valla unipolar
              </p>
              <h3 className="mt-4 font-raleway text-[clamp(2.7rem,5.4vw,4.965rem)] font-bold leading-[1.04]">
                Sabana · corredor urbano
              </h3>
              <div className="mt-8 border-y border-white/35 py-5 font-raleway text-sm uppercase leading-7 md:text-base">
                <p>Formato: valla unipolar</p>
                <p>Contexto: ruta urbana de alto tránsito</p>
                <p>Lectura: vehicular y peatonal</p>
              </div>
              <div className="mt-8 flex flex-col items-start gap-5">
                <LocationButton href="/contact">
                  Agregar y solicitar propuestas
                </LocationButton>
                <LocationButton href="/contact" variant="underline">
                  Solicitar apoyo creativo
                </LocationButton>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 4, Selection summary */}
      <section className="overflow-hidden bg-publiex-muted-section px-5 py-[clamp(4rem,6.25vw,7.5rem)] md:px-10 lg:px-24">
        <div className="mx-auto max-w-393.5">
          <p className="font-raleway text-sm font-bold uppercase md:text-2xl">
            Mi selección
          </p>
          <h2 className="mt-8 max-w-313 font-raleway text-[clamp(2.4rem,5.4vw,4.965rem)] font-semibold leading-[1.04]">
            Construya un plan preliminar y{" "}
            <span className="text-publiex-red">
              deje que Publiex haga el resto.
            </span>
          </h2>
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-start xl:px-40">
            <article className="bg-white shadow-sm">
              <img
                alt="Miniatura de ubicación seleccionada"
                className="h-37 w-full object-cover object-center"
                src={publiexAsset("locations-selection-thumb.png")}
              />
              <div className="p-4 font-raleway">
                <p className="text-xs font-bold uppercase text-publiex-blue">
                  Muestra 01
                </p>
                <h3 className="mt-2 text-lg font-bold leading-tight">
                  Sabana · corredor urbano
                </h3>
                <p className="mt-2 text-sm leading-tight text-zinc-600">
                  Valla unipolar para revisión preliminar.
                </p>
              </div>
            </article>
            <div className="overflow-hidden bg-white shadow-sm">
              <img
                alt="Formulario preliminar para solicitar propuesta Publiex"
                className="w-full object-cover"
                src={publiexAsset("locations-selection-form.png")}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

