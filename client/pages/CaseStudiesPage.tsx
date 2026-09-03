import { ImagePanel } from "@/components/site/ImagePanel";
import { PageIntro } from "@/components/site/PageIntro";
import { PrimaryLink } from "@/components/site/PrimaryLink";
import { cases } from "@/content/home";

export default function CaseStudiesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Casos de éxito"
        title={
          <>
            Campañas que se volvieron <span className="text-publiex-red">parte del viaje.</span>
          </>
        }
        description="La página de casos queda organizada para ampliar cada historia con objetivo, formato, ubicación, métricas y resultados."
      />

      {/* Featured cases */}
      <section className="bg-publiex-navy px-5 py-20 text-white md:px-10 lg:px-24">
        <div className="mx-auto grid max-w-[1574px] gap-5 md:grid-cols-3 xl:gap-10">
          {cases.map((item) => (
            <ImagePanel image={item.image} key={item.title} title={item.title} variant="case">
              <div className="absolute left-6 right-6 top-6 flex justify-between font-raleway text-xs font-bold uppercase">
                <span>{item.tag}</span>
                <span>{item.type}</span>
              </div>
              <h2 className="font-raleway text-2xl font-semibold leading-tight md:text-[39.44px] md:leading-[44px]">
                {item.title}
              </h2>
            </ImagePanel>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-[1574px]">
          <PrimaryLink href="/#contacto" tone="white">
            Crear una campaña
          </PrimaryLink>
        </div>
      </section>
    </main>
  );
}
