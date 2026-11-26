import { describe, expect, it } from "vitest";
import { MAX_SAVED_FACES, parseShortlist } from "./location-shortlist";
import {
  filterBillboardFaces,
  groupBillboardFaces,
  publiexLocations,
} from "@/content/locations";

describe("location finder data and selections", () => {
  const valid = new Set(["ACT-1", "ACT-2"]);
  it("restores unique current face IDs in the saved order", () => {
    expect(
      parseShortlist('["ACT-2","missing",42,"ACT-1","ACT-2"]', valid),
    ).toEqual(["ACT-2", "ACT-1"]);
  });
  it("handles corrupt or incompatible storage and enforces the request limit", () => {
    for (const input of [null, "bad", "null", "{}", "42"])
      expect(parseShortlist(input, valid)).toEqual([]);
    const ids = Array.from({ length: 100 }, (_, index) => String(index));
    expect(parseShortlist(JSON.stringify(ids), new Set(ids))).toHaveLength(
      MAX_SAVED_FACES,
    );
  });
  it("creates one marker group for SJ14 while retaining both selectable faces", () => {
    const group = groupBillboardFaces(publiexLocations).find(
      (item) => item.id === "SJ14",
    )!;
    expect(group.faces.map((face) => face.code).sort()).toEqual([
      "SJ14-A",
      "SJ14-C",
    ]);
    expect(
      group.faces.every(
        (face) =>
          face.position.lat === group.position.lat &&
          face.position.lng === group.position.lng,
      ),
    ).toBe(true);
  });
  it("searches codes, names and addresses without requiring accents", () => {
    expect(
      filterBillboardFaces(publiexLocations, "", "SJ14-A").map(
        (face) => face.code,
      ),
    ).toEqual(["SJ14-A"]);
    expect(
      filterBillboardFaces(publiexLocations, "", "san jose").length,
    ).toBeGreaterThan(0);
    expect(filterBillboardFaces(publiexLocations, "Nonexistent", "")).toEqual(
      [],
    );
  });
  it("does not mutate the inventory while filtering or grouping", () => {
    const snapshot = JSON.stringify(publiexLocations);
    groupBillboardFaces(filterBillboardFaces(publiexLocations, "San José", ""));
    expect(JSON.stringify(publiexLocations)).toBe(snapshot);
  });
});
