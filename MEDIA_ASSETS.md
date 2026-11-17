# Media assets

Site images, SVGs, and videos live in `public/images/publiex`. Reference them with
`publiexAsset(name)` from `client/lib/assets.ts`.

## Naming

Use lowercase kebab-case: `<page>-<section-or-purpose>[-<detail>].<extension>`.
Keep the original format and use a lowercase extension; renaming does not convert
image formats.

- Page prefixes: `home`, `about`, `products`, `locations`, `cases`, `actualidad`,
  `article`, `info-trenes`, and `landlords`.
- Shared assets use `shared`, `publiex`, or `footer` as their prefix.
- Examples: `about-hero.png`, `home-cases-trains.png`, `home-hero.mp4`, and
  `footer-instagram.svg`.
- Prefer descriptive names. For an ordered series, use a hyphen before the number,
  such as `home-cases-1.png`.
- Avoid export prefixes such as `figma-`, underscores, uppercase letters, and
  unexplained numeric suffixes.

## Updating assets

Update references in the same change as a rename. Preserve complete filenames as
string literals so the asset checker can find them, including content arrays,
carousel images, video sources, and posters. Preserve assets referenced by an
individual article even when its preview card is hidden.

Run `pnpm check:assets` after adding, renaming, replacing, or deleting media. It
checks exact filename casing, missing references, unused files, and the naming
format. It scans application source and public text files; documentation and build
output do not count as runtime usage.
