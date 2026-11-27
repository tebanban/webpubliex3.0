import catalog from "./billboards.generated.json";

export type PubliexLocation = {
  id: string;
  code: string;
  structureId: string;
  face: string;
  title: string;
  province: string;
  address: string;
  district: string;
  direction: string;
  position: { lat: number; lng: number };
  widthM: number | null;
  heightM: number | null;
  image: string | null;
  imageAlt: string;
};

export type BillboardStructure = {
  id: string;
  title: string;
  position: PubliexLocation["position"];
  faces: PubliexLocation[];
};

export const publiexLocations: PubliexLocation[] = catalog.faces;

// Faces remain separate saleable records; the map gets one marker per structure.
export function groupBillboardFaces(
  faces: PubliexLocation[],
): BillboardStructure[] {
  const groups = new Map<string, BillboardStructure>();
  for (const face of faces) {
    const group = groups.get(face.structureId);
    if (group) group.faces.push(face);
    else
      groups.set(face.structureId, {
        id: face.structureId,
        title: face.province,
        position: face.position,
        faces: [face],
      });
  }
  return [...groups.values()].sort((a, b) =>
    a.id.localeCompare(b.id, "es", { numeric: true }),
  );
}

export function filterBillboardFaces(
  faces: PubliexLocation[],
  province: string,
  search: string,
) {
  const normalize = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const query = normalize(search.trim());
  return faces.filter(
    (face) =>
      (!province || face.province === province) &&
      (!query ||
        normalize(
          `${face.code} ${face.province} ${face.address} ${face.district}`,
        ).includes(query)),
  );
}
