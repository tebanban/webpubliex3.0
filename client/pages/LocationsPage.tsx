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
      className={`inline-flex min-h-12.5 items-center justify-center font-raleway text-sm font-bold uppercase leading-8 transition md:text-xl ${styles[variant]}`}
      href={href}
    >
      {children}
    </a>
  );
}

export default function LocationsPage() {
  return (
    <main className="bg-white pt-14 text-black md:pt-16 xl:pt-20">
      {/* Hero */}
      <section className="overflow-hidden bg-publiex-gradient text-white">
        <div className="mx-auto grid w-full max-w-480 lg:min-h-211.75 lg:grid-cols-[51%_49%]">
          <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-24 xl:pl-47.5 xl:pr-18">
            <p className="font-raleway text-sm font-bold uppercase md:text-2xl">
              Publiex explora
            </p>
            <h1 className="mt-9 max-w-178 font-raleway text-[clamp(2.7rem,5.4vw,4.965rem)] font-bold leading-[1.04]">
              Hagamos visible su historia,
              <span className="block text-publiex-red">
                justo donde Costa Rica se mueve.
              </span>
            </h1>
            <p className="mt-10 max-w-184 font-raleway text-lg leading-tight md:text-[27.44px] md:leading-8">
              Explore una muestra del inventario de Publiex, descubra qué puede
              lograr cada formato y construya una selección preliminar para su
              campaña.
            </p>
          </div>
          <div className="min-h-120 lg:min-h-211.75">
            <img
              alt="Valla Publiex ubicada en un corredor urbano de Costa Rica"
              className="size-full object-cover object-center"
              src={publiexAsset("locations-hero.png")}
            />
          </div>
        </div>
      </section>

      {/* Inventory visual */}
      <section className="overflow-hidden bg-[#eaedf2] px-5 py-16 md:px-10 lg:px-24 xl:py-31">
        <div className="mx-auto max-w-393.5">
          <p className="font-raleway text-sm font-bold uppercase md:text-2xl">
            Inventario visual
          </p>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-263 font-raleway text-[clamp(2.4rem,5.4vw,4.965rem)] font-semibold leading-[1.04]">
              Encuentre el lugar donde su marca puede generar impacto.
            </h2>
            <div className="flex gap-2 font-raleway text-xs font-bold uppercase">
              <button
                className="bg-publiex-blue px-4 py-2 text-white"
                type="button"
              >
                Mapa
              </button>
              <button className="bg-white px-4 py-2 text-black" type="button">
                Listado
              </button>
            </div>
          </div>
          <div className="mt-12 overflow-hidden bg-white shadow-sm">
            <img
              alt="Vista de mapa con filtros y activos de publicidad exterior Publiex"
              className="w-full object-cover"
              src={publiexAsset("locations-inventory-map.png")}
            />
          </div>
        </div>
      </section>

      {/* Featured location */}
      <section className="overflow-hidden bg-publiex-navy px-5 py-16 text-white md:px-10 lg:px-24 xl:py-30">
        <div className="mx-auto max-w-393.5">
          <h2 className="max-w-300 font-raleway text-[clamp(2.4rem,5.4vw,4.965rem)] font-semibold leading-[1.04]">
            Encuentre el lugar donde su marca puede{" "}
            <span className="text-publiex-red">generar impacto.</span>
          </h2>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div className="relative min-h-120 overflow-hidden bg-black md:min-h-160">
              <img
                alt="Previsualización de ubicación para campaña Publiex"
                className="absolute inset-0 size-full object-cover opacity-65"
                src={publiexAsset("locations-feature-screen.png")}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative flex min-h-120 flex-col items-center justify-center px-6 text-center md:min-h-160">
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
                <LocationButton href="/#contacto">
                  Agregar y solicitar propuestas
                </LocationButton>
                <LocationButton href="/#contacto" variant="underline">
                  Solicitar apoyo creativo
                </LocationButton>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Selection summary */}
      <section className="overflow-hidden bg-[#eaedf2] px-5 py-16 md:px-10 lg:px-24 xl:py-30">
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
