import { describe, expect, it } from "vitest";
import {
  createPublicCatalog,
  getPosition,
  getStructure,
} from "./billboard-catalog.mjs";

const face = (code = "SJ14-A", id = "ACT-1") => ({
  id,
  code,
  alias: "La Uruca",
  location: "San José",
  address: "Circunvalación",
  direction: "Hacia La Uruca",
  widthM: 14.4,
  heightM: 5,
  mapUrl: "https://www.google.com/maps?q=9.9481019,-84.1041505",
});

describe("public billboard catalog", () => {
  it("excludes hidden records and never copies internal or reservation fields", () => {
    const source = {
      data: [
        {
          ...face(),
          alias: "internal-only-owner",
          reservations: ["private"],
          jiraKey: "internal",
          slideBlueTop: "internal",
          secret: "private",
        },
        { ...face("SJ15-A", "ACT-2"), visible: false },
      ],
    };
    const result = createPublicCatalog(source, new Set(["SJ14-A.webp"]));
    expect(result.faces).toHaveLength(1);
    expect(result.faces[0].image).toBe("/images/locations/SJ14-A.webp");
    expect(result.faces[0].title).toBe("SJ14-A");
    expect(result.faces[0].imageAlt).toBe("Valla Publiex · Cara SJ14-A");
    expect(JSON.stringify(result)).not.toMatch(
      /private|internal|reservations|jiraKey|slideBlueTop|secret|visible/,
    );
  });
  it("keeps opposite faces distinct within the same structure", () => {
    const result = createPublicCatalog(
      {
        data: [
          face(),
          { ...face("SJ14-C", "ACT-2"), direction: "Desde La Uruca" },
        ],
      },
      new Set(["SJ14-A.webp", "SJ14-C.webp"]),
    );
    expect(result.faces.map((item) => item.structureId)).toEqual([
      "SJ14",
      "SJ14",
    ]);
    expect(result.faces[0].image).not.toBe(result.faces[1].image);
    expect(result.faces[0].direction).not.toBe(result.faces[1].direction);
  });
  it("uses the confirmed shared GC7 photo without merging the faces", () => {
    const result = createPublicCatalog(
      { data: [face("GC7-A", "ACT-1"), face("GC7-B", "ACT-2")] },
      new Set(["GC7-AB.webp"]),
    );
    expect(result.faces.map((item) => item.image)).toEqual([
      "/images/locations/GC7-AB.webp",
      "/images/locations/GC7-AB.webp",
    ]);
    expect(result.faces.map((item) => item.code)).toEqual(["GC7-A", "GC7-B"]);
    expect(result.faces.map((item) => item.id)).toEqual(["ACT-1", "ACT-2"]);
  });
  it("supports faces B and D, spaces, and combined faces", () => {
    expect(getStructure("GC7-B")).toEqual({ id: "GC7", face: "B" });
    expect(getStructure("SJ14-D").id).toBe("SJ14");
    expect(getStructure("Macayas - A").id).toBe("MACAYAS");
    expect(getStructure("SJ61 - A y C (Completo)").id).toBe("SJ61");
  });
  it("uses exact image casing and does not guess combined face images", () => {
    expect(
      createPublicCatalog(
        { data: [face()] },
        new Set(["sj14-a.webp", "SJ14-AC.webp"]),
      ).faces[0].image,
    ).toBeNull();
  });
  it("reads direction URLs and prioritizes explicit coordinates", () => {
    expect(
      getPosition({
        code: "A",
        mapUrl: "https://www.google.com/maps/dir//9.95,-84.19",
      }),
    ).toEqual({ lat: 9.95, lng: -84.19 });
    expect(getPosition({ ...face(), position: { lat: 10, lng: -85 } })).toEqual(
      { lat: 10, lng: -85 },
    );
  });
  it("rejects duplicates, invalid coordinates, and inconsistent structure positions", () => {
    expect(() =>
      createPublicCatalog({ data: [face(), face()] }, new Set()),
    ).toThrow(/duplicate/);
    expect(() =>
      getPosition({ ...face(), position: { lat: 100, lng: -85 } }),
    ).toThrow(/coordinates/);
    expect(() =>
      createPublicCatalog(
        {
          data: [
            face(),
            { ...face("SJ14-C", "ACT-2"), position: { lat: 10, lng: -85 } },
          ],
        },
        new Set(),
      ),
    ).toThrow(/Conflicting/);
  });
});
