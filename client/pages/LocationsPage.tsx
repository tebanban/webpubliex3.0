import { PageIntro } from "@/components/site/PageIntro";
import { PrimaryLink } from "@/components/site/PrimaryLink";
import { publiexAsset } from "@/lib/assets";

export default function LocationsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Explorar ubicaciones"
        title={
          <>
            Encuentre el lugar <span className="text-publiex-red">donde su marca debe estar.</span>
          </>
        }
        description="La página de ubicaciones será el espacio para filtros por provincia, formato, audiencia, disponibilidad y fichas técnicas."
      />

      {/* Location planning */}
      <section className="grid min-h-[680px] bg-white lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-24">
          <h2 className="font-raleway text-[clamp(2.2rem,5vw,4.965rem)] font-semibold leading-tight">
            Cobertura convertida en decisiones de campaña.
          </h2>
          <p className="mt-7 text-xl leading-tight md:text-[27px]">
            Este módulo queda listo para integrar mapas, listados de activos,
            audiencias estimadas y solicitudes de disponibilidad.
          </p>
          <div className="mt-9">
            <PrimaryLink href="/#contacto">Solicitar ubicaciones</PrimaryLink>
          </div>
        </div>
        <img
          alt="Pantalla digital Publiex en una zona urbana nocturna"
          className="h-full min-h-[420px] w-full object-cover"
          src={publiexAsset("figma-location.jpeg")}
        />
      </section>
    </main>
  );
}
