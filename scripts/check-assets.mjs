import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const mediaRoot = path.join(projectRoot, "public/images/publiex");
const mediaExtensions = /\.(?:png|jpe?g|svg|gif|webp|mp4|avif)$/i;

// Inspect source and public text files without counting build output or docs as usage.
function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

const mediaFiles = walk(mediaRoot).filter((file) => mediaExtensions.test(file));
const sourceFiles = [
  ...walk(path.join(projectRoot, "client")),
  path.join(projectRoot, "index.html"),
  ...walk(path.join(projectRoot, "public")).filter((file) =>
    /\.(?:html|css|js|json|svg|php)$/i.test(file),
  ),
];
const references = new Map();

// The site stores complete media filenames as literals, including carousel entries.
for (const file of sourceFiles) {
  const source = readFileSync(file, "utf8");
  const pattern =
    /["'`](?:[^"'`\r\n]*\/)?([a-zA-Z0-9_-]+\.(?:png|jpe?g|svg|gif|webp|mp4|avif))["'`]/gi;
  for (const match of source.matchAll(pattern)) {
    if (/^["'`](?:https?:)?\/\//i.test(match[0])) continue;
    const name = match[1];
    const locations = references.get(name) ?? new Set();
    locations.add(path.relative(projectRoot, file));
    references.set(name, locations);
  }
}

const filenames = new Set(mediaFiles.map((file) => path.basename(file)));
const errors = [];
for (const [name, files] of references) {
  if (!filenames.has(name)) {
    errors.push(`Missing asset: ${name} (${[...files].join(", ")})`);
  }
}
for (const name of filenames) {
  if (
    !/^[a-z0-9]+(?:-[a-z0-9]+)+\.(?:png|jpe?g|svg|gif|webp|mp4|avif)$/.test(
      name,
    )
  ) {
    errors.push(
      `Use a lowercase kebab-case filename with a page prefix: ${name}`,
    );
  }
  if (!references.has(name)) errors.push(`Unused asset: ${name}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Checked ${filenames.size} assets: references, filenames, and usage are valid.`,
  );
}
