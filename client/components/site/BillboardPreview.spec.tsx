import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { publiexLocations } from "@/content/locations";
import { BillboardImage } from "./BillboardImage";
import { BillboardPreview } from "./BillboardPreview";

describe("billboard face preview", () => {
  it("renders the selected face image, direction, and sibling face controls", () => {
    const faces = publiexLocations.filter(
      (face) => face.structureId === "SJ14",
    );
    const face = {
      ...faces.find((item) => item.code === "SJ14-C")!,
      title: "internal-only-owner",
    };
    const html = renderToStaticMarkup(
      <BillboardPreview
        face={face}
        faces={faces}
        saved={false}
        atLimit={false}
        onAdd={() => {}}
        onSelect={() => {}}
      />,
    );
    expect(html).toContain("SJ14-C.webp");
    expect(html).toContain(face.direction);
    expect(html).toContain('aria-pressed="true"');
    expect(html).toContain('aria-pressed="false"');
    expect(html).toContain("Añadir a cotización");
    expect(html).not.toContain("internal-only-owner");
    expect(html).toMatch(/<h3[^>]*>SJ14-C<\/h3>/);
  });
  it("offers a placeholder without an unrelated image", () => {
    const html = renderToStaticMarkup(
      <BillboardImage src={null} alt="GC7-A" />,
    );
    expect(html).toContain("Imagen no disponible");
    expect(html).toContain("GC7-A");
    expect(html).not.toContain("<img");
  });
});
