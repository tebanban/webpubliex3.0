import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { articles } from "@/content/articles";
import { publiexAsset } from "@/lib/assets";
import NotFound from "./NotFound";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((entry) => entry.id === slug);

  // Keep the browser title in sync when navigating between article routes.
  useEffect(() => {
    if (!article) return;
    const previousTitle = document.title;
    document.title = `${article.title} | Publiex`;
    return () => {
      document.title = previousTitle;
    };
  }, [article]);

  if (!article) return <NotFound />;

  return (
    <main className="bg-white pt-14 font-raleway text-black md:pt-16 xl:pt-20">
      <article aria-labelledby="article-title" className="mx-auto max-w-480">
        {/* Article heading and introduction */}
        <header className="px-5 pt-[clamp(4rem,10vw,12rem)] pb-[clamp(2rem,3vw,3.25rem)] md:px-10 lg:px-24 xl:px-43.25">
          <p className="text-sm font-bold uppercase text-publiex-blue md:text-xl">
            {article.category} ·{" "}
            <time dateTime={article.publishedAt}>{article.date}</time>
          </p>
          <h1
            className="mt-12 max-w-292.5 text-[clamp(2.5rem,4.05vw,4.85rem)] font-semibold leading-[0.996]"
            id="article-title"
          >
            {article.title}
          </h1>
          <p className="mt-12 max-w-273.5 text-[clamp(1.125rem,1.43vw,1.715rem)] leading-[1.17]">
            {article.intro}
          </p>
        </header>

        {/* Article imagery can differ from the listing preview. */}
        <div className="relative mx-5 aspect-[1753/940] overflow-hidden bg-zinc-200 md:mx-10 xl:mx-[4.35%]">
          <img
            alt={article.imageAlt}
            className="size-full object-cover"
            fetchPriority="high"
            src={publiexAsset(article.heroImage ?? article.image)}
          />
        </div>

        {/* Offset reading column, quote, and campaign enquiry */}
        <div className="px-5 pt-[clamp(3rem,5.2vw,6.25rem)] pb-[clamp(4rem,5vw,6rem)] md:px-10 lg:ml-[31.61%] lg:pr-[12.29%] lg:pl-0">
          <div className="space-y-8 text-[clamp(1.0625rem,1.43vw,1.715rem)] leading-[1.57]">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="relative mt-12 flex min-h-54.75 items-center py-6 pl-8 md:pl-14">
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-0 h-54.75 w-3 -translate-y-1/2 overflow-hidden"
            >
              <img
                alt=""
                className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90"
                src={publiexAsset("article-quote-accent.svg")}
              />
            </div>
            <p className="text-[clamp(1.5rem,2.42vw,2.9025rem)] font-semibold leading-[1.27]">
              {article.quote}
            </p>
          </blockquote>
          <section aria-labelledby="article-contact-title" className="mt-20">
            <h2
              id="article-contact-title"
              className="text-[clamp(2rem,4.04vw,4.84rem)] font-semibold leading-[1.05]"
            >
              ¿Qué puede lograr su marca?
            </h2>
            <p className="mt-8 text-[clamp(1.0625rem,1.43vw,1.715rem)] leading-[1.57]">
              El equipo de Publiex puede convertir este enfoque en una
              recomendación de formatos, zonas y nivel de cobertura, sin
              publicar tarifas ni disponibilidad no confirmada.
            </p>
            <Link
              className="mt-10 inline-block bg-publiex-red px-3 py-2 text-sm font-bold uppercase text-white transition hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-publiex-blue md:text-[1.215rem]"
              to="/contact"
            >
              Solicitar una recomendación
            </Link>
          </section>
        </div>
      </article>

      {/* Return to the editorial index */}
      <section className="relative flex min-h-[clamp(20rem,24.5vw,29.4375rem)] items-center overflow-hidden bg-[#12294e] text-white">
        <img
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90"
          src={publiexAsset("article-explore-background.svg")}
        />
        <div className="relative mx-auto w-full max-w-480 px-5 py-16 md:px-10 lg:px-24 xl:px-43.25">
          <p className="text-sm font-bold uppercase md:text-xl">
            Siga explorando
          </p>
          <h2 className="mt-8 text-[clamp(2rem,4.05vw,4.85rem)] font-semibold leading-[0.996]">
            Más ideas para hacer visible su marca.
          </h2>
          <Link
            className="mt-12 inline-block text-sm font-bold uppercase text-[#74a9ff] transition hover:text-white md:text-xl"
            to="/actualidad"
          >
            Ver todas las publicaciones
          </Link>
        </div>
      </section>
    </main>
  );
}
