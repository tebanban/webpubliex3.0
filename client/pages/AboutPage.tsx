import { publiexAsset } from "@/lib/assets";

function AboutButton({
  children,
  href,
  tone = "red",
}: {
  children: string;
  href: string;
  tone?: "red" | "white" | "text";
}) {
  const styles = {
    red: "bg-publiex-red px-5 text-white hover:bg-red-600",
    white: "bg-white px-5 text-black hover:bg-zinc-100",
    text: "text-black underline-offset-4 hover:underline",
  };

  return (
    <a
      className={`inline-flex min-h-12.5 items-center justify-center font-raleway text-sm font-bold uppercase leading-8 transition md:text-[19.44px] ${styles[tone]}`}
      href={href}
    >
      {children}
    </a>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-white pt-14 text-black md:pt-16 xl:pt-20">
      {/* Hero story */}
      <section className="overflow-hidden bg-publiex-gradient text-white">
        <div className="mx-auto grid w-full max-w-480 lg:min-h-230.25 lg:grid-cols-[48%_52%]">
          <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-24 xl:pl-43.25 xl:pr-16">
            <p className="font-raleway text-sm font-bold uppercase leading-none md:text-xl">
              Conozca Publiex
            </p>
            <h1 className="mt-9 max-w-145 font-raleway text-[clamp(2.7rem,5.4vw,4.965rem)] font-bold leading-[1.04]">
              Experiencia que se ve.
              <span className="block text-publiex-red">
                Respaldo que se siente.
              </span>
            </h1>
            <p className="font-uni mt-10 max-w-151 text-lg leading-tight md:text-[25px]">
              Desde 1999 ayudamos a las marcas a ocupar un lugar relevante en la
              vida real. Unimos estrategia, ubicaciones, creatividad, producción
              y operación para convertir el espacio exterior en una plataforma
              de crecimiento.
            </p>
            <div className="mt-9">
              <AboutButton href="#historia">
                Descubrir nuestra historia
              </AboutButton>
            </div>
          </div>
          <div className="min-h-120 lg:min-h-230.25">
            <img
              alt="Valla Publiex de gran formato en Costa Rica"
              className="size-full object-cover object-center"
              src={publiexAsset("about-hero-billboard.png")}
            />
          </div>
        </div>
      </section>

      {/* History overview */}
      <section className="overflow-hidden bg-white" id="historia">
        <div className="mx-auto flex w-full max-w-480 flex-col items-center px-5 py-16 text-center md:px-10 lg:px-24 xl:min-h-134 xl:justify-center xl:py-20">
          <p className="self-start font-raleway text-sm font-bold uppercase md:text-xl">
            Nuestra historia
          </p>
          <h2 className="mt-8 max-w-385 font-raleway text-[clamp(2.4rem,5.4vw,4.85rem)] font-semibold leading-[0.996]">
            Una empresa costarricense construida para hacer{" "}
            <span className="text-publiex-red">visibles grandes ideas.</span>
          </h2>
          <p className="mt-8 max-w-380 font-raleway text-lg leading-tight md:text-[27.44px] md:leading-8">
            Publiex nació en 1999 con una convicción que sigue vigente: la
            publicidad exterior funciona mejor cuando una gran ubicación se
            combina con ejecución impecable y comprensión del objetivo de
            negocio. Nuestra evolución amplió esa capacidad hacia gran formato,
            mobiliario urbano, publicidad en movimiento, DOOH y proyectos
            especiales.
          </p>
        </div>
      </section>

      {/* Team culture */}
      <section className="overflow-hidden bg-publiex-gradient text-white">
        <div className="mx-auto grid w-full max-w-480 lg:min-h-230.25 lg:grid-cols-[51%_49%]">
          <div className="min-h-120 lg:min-h-230.25">
            <img
              alt="Equipo reunido revisando una propuesta de campaña"
              className="size-full object-cover object-center"
              src={publiexAsset("about-team-culture.png")}
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-24 xl:pl-25 xl:pr-36">
            <p className="font-raleway text-sm font-bold uppercase leading-none md:text-xl">
              Equipo y cultura
            </p>
            <h2 className="mt-9 max-w-145 font-raleway text-[clamp(2.7rem,5.4vw,4.965rem)] font-bold leading-[1.04]">
              La calidad visible comienza con el trabajo que nadie ve.
            </h2>
            <p className="font-uni mt-10 max-w-160 text-lg leading-tight md:text-[25px]">
              Detrás de cada campaña hay criterio, coordinación, seguridad,
              mantenimiento y personas comprometidas con hacer bien cada
              detalle. Esa cultura operativa es parte esencial de la confianza
              que construimos con clientes, agencias, instituciones, aliados y
              propietarios.
            </p>
            <div className="mt-9">
              <AboutButton href="/#contacto">Conversemos</AboutButton>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid w-full max-w-480 gap-10 px-5 py-16 md:px-10 lg:grid-cols-[1fr_1fr] lg:px-24 xl:min-h-147.25 xl:px-43.25 xl:py-27">
          <div>
            <p className="font-raleway text-sm font-bold uppercase md:text-xl">
              Nuestra historia
            </p>
            <h2 className="mt-8 max-w-165 font-raleway text-[clamp(2.4rem,5.4vw,4.85rem)] font-semibold leading-[0.996]">
              Compromisos que deben poder{" "}
              <span className="text-publiex-red">demostrarse.</span>
            </h2>
          </div>
          <p className="max-w-195 self-center font-raleway text-lg leading-tight md:text-[27.44px] md:leading-8">
            Publiex comunicará cifras únicamente cuando estén documentadas,
            tengan un periodo definido y puedan explicarse con claridad.
            Mientras se consolida la línea base, este es el marco de información
            que guiará la medición.
          </p>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="overflow-hidden bg-publiex-red text-white">
        <div className="mx-auto flex w-full max-w-480 flex-col justify-center px-5 py-16 md:px-10 lg:px-24 xl:min-h-130 xl:px-43.25">
          <p className="font-raleway text-sm font-bold uppercase md:text-xl">
            Construyamos confianza
          </p>
          <h2 className="mt-9 max-w-374 font-raleway text-[clamp(2.4rem,5.4vw,4.85rem)] font-semibold leading-[0.996]">
            Una trayectoria sólida.
            <span className="block text-black">
              Una visión que sigue avanzando.
            </span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <AboutButton href="/#actualidad" tone="white">
              Ver actualidad e insights
            </AboutButton>
            <AboutButton href="/#contacto" tone="text">
              Trabajar con Publiex
            </AboutButton>
          </div>
        </div>
      </section>
    </main>
  );
}
