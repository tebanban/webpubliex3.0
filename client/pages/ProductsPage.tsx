import { ImagePanel } from "@/components/site/ImagePanel";
import { PageIntro } from "@/components/site/PageIntro";
import { PrimaryLink } from "@/components/site/PrimaryLink";
import { solutions } from "@/content/home";

export default function ProductsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Soluciones publicitarias"
        title={
          <>
            Un país. <span className="text-publiex-red">Infinitas formas de ser visto.</span>
          </>
        }
        description="La página de productos tendrá el inventario completo por formato, objetivo de campaña y contexto urbano."
      />

      {/* Product categories */}
      <section className="px-5 py-20 md:px-10 lg:px-24">
        <div className="mx-auto grid max-w-[1574px] gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <ImagePanel image={solution.image} key={solution.title} title={solution.title}>
              <p className="max-w-md font-raleway text-2xl font-semibold leading-tight md:text-[34.44px] md:leading-[36px]">
                {solution.description}
              </p>
              <div className="mt-8 border-t border-white pt-5">
                <p className="font-raleway text-[0.7rem] font-black uppercase tracking-[0.18em]">
                  Explorar
                </p>
                <h2 className="mt-2 font-raleway text-xl font-bold uppercase md:text-[26px]">
                  {solution.title}
                </h2>
              </div>
            </ImagePanel>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-[1574px]">
          <PrimaryLink href="/#contacto">Solicitar propuesta</PrimaryLink>
        </div>
      </section>
    </main>
  );
}
