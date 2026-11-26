import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createPublicCatalog } from "./lib/billboard-catalog.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const sourceDirectory = path.join(root, "data/source");
const output = path.join(root, "client/content/billboards.generated.json");

export function generateBillboardCatalog() {
  const sources = existsSync(sourceDirectory)
    ? readdirSync(sourceDirectory)
        .filter((name) =>
          /^(?:traffic-)?billboard-catalog-\d{4}-\d{2}-\d{2}\.json$/.test(name),
        )
        .sort((a, b) =>
          a
            .match(/\d{4}-\d{2}-\d{2}/)[0]
            .localeCompare(b.match(/\d{4}-\d{2}-\d{2}/)[0]),
        )
    : [];
  let catalog;
  if (sources.length) {
    const source = JSON.parse(
      readFileSync(path.join(sourceDirectory, sources.at(-1)), "utf8").replace(
        /^\uFEFF/,
        "",
      ),
    );
    catalog = createPublicCatalog(
      source,
      new Set(readdirSync(path.join(root, "public/images/locations"))),
    );
    const serialized = JSON.stringify(catalog, null, 2) + "\n";
    if (!existsSync(output) || readFileSync(output, "utf8") !== serialized)
      writeFileSync(output, serialized);
  } else {
    // Fresh checkouts use the committed, already sanitized catalog.
    if (!existsSync(output))
      throw new Error(
        "Supply a source catalog or the generated public catalog",
      );
    catalog = JSON.parse(readFileSync(output, "utf8"));
    if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.faces))
      throw new Error("Invalid generated catalog");
  }
  const directory = path.join(root, "public/catalog");
  mkdirSync(directory, { recursive: true });
  const publicOutput = path.join(directory, "billboards.json");
  const publicJson = JSON.stringify(catalog) + "\n";
  if (
    !existsSync(publicOutput) ||
    readFileSync(publicOutput, "utf8") !== publicJson
  )
    writeFileSync(publicOutput, publicJson);
  return catalog;
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const catalog = generateBillboardCatalog();
  console.log(
    `Generated ${catalog.faces.length} public faces; ${catalog.faces.filter((face) => !face.image).length} use the missing-image placeholder.`,
  );
}
