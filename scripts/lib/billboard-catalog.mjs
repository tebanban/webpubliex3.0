// Confirmed shared photos keep face IDs and viewing directions independent.
const faceImageOverrides = new Map([
  ["GC7-A", "GC7-AB.webp"],
  ["GC7-B", "GC7-AB.webp"],
]);

// Only these public fields can cross the source-export boundary.
export function getPosition(record) {
  let position = record.position;
  if (!position) {
    const url = new URL(record.mapUrl);
    const match = (url.searchParams.get("q") ?? url.pathname).match(
      /(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/,
    );
    if (match) position = { lat: Number(match[1]), lng: Number(match[2]) };
  }
  if (
    !position ||
    !Number.isFinite(position.lat) ||
    !Number.isFinite(position.lng) ||
    Math.abs(position.lat) > 90 ||
    Math.abs(position.lng) > 180
  ) {
    throw new Error(`Invalid coordinates for ${record.code}`);
  }
  return { lat: position.lat, lng: position.lng };
}

export function getStructure(code) {
  if (code === "SJ61 - A y C (Completo)")
    return { id: "SJ61", face: "A y C · Completo" };
  const match = code.match(/^(.+?)\s*-\s*([A-D])$/i);
  return match
    ? { id: match[1].trim().toUpperCase(), face: match[2].toUpperCase() }
    : { id: code.toUpperCase(), face: "Única" };
}

export function createPublicCatalog(source, imageFiles) {
  if (!Array.isArray(source.data))
    throw new Error("Catalog must contain a data array");
  const ids = new Set();
  const codes = new Set();
  const positions = new Map();
  const faces = source.data
    .filter((record) => record.visible !== false)
    .map((record) => {
      if (
        typeof record.id !== "string" ||
        !record.id ||
        typeof record.code !== "string" ||
        !record.code ||
        ids.has(record.id) ||
        codes.has(record.code.toUpperCase())
      ) {
        throw new Error(`Missing or duplicate ID/code: ${record.code}`);
      }
      ids.add(record.id);
      codes.add(record.code.toUpperCase());
      const structure = getStructure(record.code);
      const position = getPosition(record);
      const previous = positions.get(structure.id);
      if (
        previous &&
        (Math.abs(previous.lat - position.lat) > 0.00001 ||
          Math.abs(previous.lng - position.lng) > 0.00001)
      ) {
        throw new Error(`Conflicting face coordinates: ${structure.id}`);
      }
      positions.set(structure.id, position);
      const filename = faceImageOverrides.get(record.code.toUpperCase()) ?? `${record.code}.webp`;
      const text = (value) => (typeof value === "string" ? value.trim() : "");
      const dimension = (value) =>
        typeof value === "number" && Number.isFinite(value) && value > 0
          ? value
          : null;
      // Reconstruct each record explicitly: never spread internal source fields.
      return {
        id: record.id,
        code: record.code,
        structureId: structure.id,
        face: structure.face,
        // Alias is internal: the public identity is always the full face code.
        title: record.code,
        province: text(record.location),
        address: text(record.address),
        district: text(record.district),
        direction: text(record.direction),
        position,
        widthM: dimension(record.widthM),
        heightM: dimension(record.heightM),
        image: imageFiles.has(filename)
          ? `/images/locations/${encodeURIComponent(filename)}`
          : null,
        imageAlt: `Valla Publiex · Cara ${record.code}`,
      };
    });
  return { schemaVersion: 1, faces };
}
