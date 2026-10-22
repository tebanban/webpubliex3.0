import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { articles } from "@/content/articles";
import ActualidadPage from "./ActualidadPage";
import ArticlePage from "./ArticlePage";

function renderArticle(slug: string) {
  return renderToStaticMarkup(
    <MemoryRouter initialEntries={[`/actualidad/${slug}`]}>
      <Routes>
        <Route path="/actualidad/:slug" element={<ArticlePage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("Actualidad article navigation", () => {
  // Every preview must lead to its own complete article, never the contact page.
  it("links every preview to its article", () => {
    const html = renderToStaticMarkup(
      <MemoryRouter>
        <ActualidadPage />
      </MemoryRouter>,
    );

    for (const article of articles) {
      expect(html).toContain(`href="/actualidad/${article.id}"`);
      expect(html).toContain(`aria-label="Leer más: ${article.title}"`);
    }
    expect(new Set(articles.map((article) => article.id)).size).toBe(
      articles.length,
    );
  });

  it.each(articles)("renders the content for $id", (article) => {
    const html = renderArticle(article.id);

    expect(html).toContain(article.title);
    expect(html).toContain(article.intro);
    expect(html).toContain(article.paragraphs[0]);
    expect(html).toContain(article.quote);
    expect(html).toContain(
      `/images/publiex/${article.heroImage ?? article.image}`,
    );
    expect(html).toContain(`dateTime="${article.publishedAt}"`);
    expect(html).toContain('href="/contact"');
    expect(html).toContain('href="/actualidad"');
  });

  it("shows the existing not-found page for an unknown article", () => {
    const html = renderArticle("entrada-inexistente");

    expect(html).toContain("Página no encontrada");
    expect(html).not.toContain("Solicitar una recomendación");
  });
});
