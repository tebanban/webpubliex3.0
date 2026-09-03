import { PageIntro } from "@/components/site/PageIntro";
import { PrimaryLink } from "@/components/site/PrimaryLink";
import { publiexAsset } from "@/lib/assets";

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Quiénes somos"
        title={
          <>
            27 años <span className="text-publiex-red">mirando hacia adelante.</span>
          </>
        }
        description="La página de nosotros reunirá trayectoria, equipo, enfoque operativo y la evolución de Publiex en publicidad exterior."
      />

      {/* Company snapshot */}
      <section className="grid min-h-[680px] lg:grid-cols-2">
        <img
          alt="Estructura de publicidad exterior Publiex"
          className="h-full min-h-[420px] w-full object-cover"
          src={publiexAsset("figma-about.jpeg")}
        />
        <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-24">
          <h2 className="font-raleway text-[clamp(2.2rem,5vw,4.965rem)] font-semibold leading-tight">
            Experiencia, cobertura y criterio para construir presencia real.
          </h2>
          <p className="mt-7 text-xl leading-tight md:text-[27px]">
            Esta sección queda preparada para ampliar historia, valores,
            certificaciones y diferenciales de servicio.
          </p>
          <div className="mt-9">
            <PrimaryLink href="/#contacto">Conversar con Publiex</PrimaryLink>
          </div>
        </div>
      </section>
    </main>
  );
}
