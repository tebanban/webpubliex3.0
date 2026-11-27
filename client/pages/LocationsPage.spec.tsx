import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import LocationsPage from "./LocationsPage";

describe("location finder without Google Maps", () => {
  afterEach(() => vi.unstubAllEnvs());
  it("keeps the face list available and starts without an active or saved face", () => {
    vi.stubEnv("VITE_GOOGLE_MAPS_API_KEY", "");
    const html = renderToStaticMarkup(
      <MemoryRouter>
        <LocationsPage />
      </MemoryRouter>,
    );
    expect(html).toContain("El mapa no está disponible");
    expect(html).toContain("Explorar por código");
    expect(html).toContain("Todos los tamaños");
    for (const category of ["small", "medium", "large", "landmark"]) {
      expect(html).toContain(`value="${category}"`);
    }
    expect(html).toContain("SJ14-A");
    expect(html).toContain("SJ14-C");
    expect(html).toContain("Aún no ha guardado ubicaciones");
    expect(html).toContain("Seleccione una ubicación en el mapa o en la lista");
    expect(html).not.toContain("Sentido de circulación");
  });
});
