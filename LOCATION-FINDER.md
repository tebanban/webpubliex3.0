# Publiex Location Finder

The Location Finder at `/locations` connects the public billboard catalog to
Google Maps, previews individual faces, and saves a shortlist for a proposal.
One structure marker can contain several faces; the selected face controls the
image, full code, viewing direction, and details.

Status: Implemented locally. Browser interaction and PHP email delivery require
deployment-environment verification before release.

## Catalog and structure model

The current catalog contains 235 faces grouped into 122 structure markers. Each
face has its own stable ID and public code. For example, `SJ14-A` and `SJ14-C`
share a structure position but have separate images and opposite viewing
directions. The source text is displayed verbatim; reverse directions are never
generated automatically.

Standard codes ending in `-A`, `-B`, `-C`, or `-D` are grouped by their
structure prefix. Spaced codes such as `Macayas - A` are supported. The combined
code `SJ61 - A y C (Completo)` has an explicit structure mapping. Coordinate
differences within a structure beyond the validation tolerance stop generation
rather than silently moving a marker.

The previously flagged GC6 and SJ62 coordinates have been corrected. Explicit
`position` coordinates take priority over numeric Google Maps URLs.

## Source and generated files

| File                                            | Purpose                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------- |
| `data/source/billboard-catalog-2026-11-25.json` | Working source export; never copied into the deployed site.                  |
| `public/images/locations/`                      | Individual face images, using exact code-based filenames.                    |
| `scripts/lib/billboard-catalog.mjs`             | Public-field allowlist, coordinates, structure grouping, and image matching. |
| `scripts/generate-billboard-catalog.mjs`        | Generates the client and server catalogs from the latest dated source.       |
| `client/content/billboards.generated.json`      | Sanitized, committed client catalog.                                         |
| `public/catalog/billboards.json`                | Same public catalog for server-side proposal validation.                     |
| `client/content/locations.ts`                   | Typed faces, structure grouping, and search/filter helpers.                  |

The source originally contained 240 records, including 5 hidden records. Hidden
records, reservation notes, slide presentation fields, and visibility flags have
been removed from the working source. Internal export metadata remains in the
source and is excluded by the generator.

Generation constructs every public face explicitly. It does not spread the source
record into a public object. The allowlisted fields are:

- Stable face ID, full code, structure ID, and face label.
- Public face code as the title, province, address, district, and viewing direction.
- Latitude/longitude and numeric dimensions when available.
- Size category from the source `sizeCategory` field.
- Exact image URL or `null`, plus alternative text.

Internal aliases are excluded from titles, image descriptions, search, previews,
saved-location labels, and proposal emails. The full face code is the public
identity; province and district provide public location context.

Reservation notes, Jira metadata, export queries, presentation fields, and
unqualified impression figures are not included. The source lacks verified format,
objective, and lighting fields; those filters are omitted rather than populated
with inferred or placeholder attributes.

The Vite configuration runs generation for development, tests, and production
builds. It also supports fresh checkouts without the raw export by using the
committed sanitized catalog. Run generation explicitly after changing source data
or adding images while the development server is already running:

```bash
pnpm catalog:generate
```

Keep the generated client JSON in Git. Keep the generated server JSON in the
deployment output. The ignore pattern for raw exports is
`/data/source/*billboard-catalog-*.json`; it does not remove an already tracked
or staged source file from Git. Deploy only the production output, never the
entire source checkout.

## Image matching and placeholders

Matching uses the full face code and exact filename casing:

```text
AL1-A -> /images/locations/AL1-A.webp
AL1-C -> /images/locations/AL1-C.webp
```

The browser does not scan folders or perform image recognition. The generator
checks filenames, and the preview uses its generated URL. Missing images and
load failures show a branded neutral placeholder with **Imagen no disponible**.
No unrelated billboard image is substituted. Preview and shortlist images load
lazily.

GC7-A and GC7-B are confirmed to share `GC7-AB.webp`: both faces serve the same
traffic direction. They retain separate selectable IDs, codes, and source details.

Nine faces currently need exact images or confirmed mapping corrections:

| Face codes                                                 | Candidate or action                                                       |
| ---------------------------------------------------------- | ------------------------------------------------------------------------- |
| `PZ1-A`, `PZ1-B`                                           | Review `pz1-ab.webp`; preserve its exact casing if a mapping is approved. |
| `SJ58`                                                     | Review `SJ58-A.webp` before changing the source code or mapping.          |
| `SJ61 - A y C (Completo)`                                  | Review `SJ61-AC.webp` before assigning it.                                |
| `Macayas - A`, `Macayas - C`, `SJ15-C`, `SJ31-A`, `SJ34-C` | Supply the corresponding face images.                                     |

Candidates are not automatically assigned. After supplying exact matching files,
regenerate the catalog to replace their placeholders.

## Browsing and preview behavior

Visitors filter by province and size category, or search by code, province, address, or district. Search
ignores case and accents. Size options are populated from the catalog's
`sizeCategory` values (currently small, medium, large, and landmark), and combine
with province and search using AND. Resetting filters clears size as well. Counts
distinguish structures from faces; saved selections remain unchanged by filtering.

A marker opens the structure's last inspected face, or its first available face.
The preview contains face controls, image, full code as its main title, address, direction,
dimensions, and **Agregar a mi selección**. Changing faces keeps the same map
structure active. Adding a face does not change the active marker.

Marker colors distinguish:

- Blue: a structure available to inspect.
- Red: the active structure.
- Green: a structure containing one or more saved faces.

Desktop uses compact filters on the left and the map fills the remaining width.
Selecting a list entry highlights its marker and zooms to its location without
opening the preview. Selecting a marker or the preview button opens an accessible
centered popup on every screen size. No preview column reserves map space. Smaller screens
retain collapsible filters; the popup fits the viewport and scrolls when needed.
Closing it preserves the current face and shortlist, returns keyboard focus, and
leaves a button to reopen the preview.

A labeled native list allows visitors to select any filtered face without using
map markers. It remains available if the Google Maps key is absent, loading fails,
or overlapping physical structures make a marker difficult to choose. Clusters
count structure markers, not individual faces.

Filtering never clears the shortlist. If a filter hides the active face, the
preview clears rather than silently selecting a different billboard. Empty
results show a resettable state.

## Saved faces

Browsing and saving use separate state:

```ts
activeFaceId: string | null;
savedFaceIds: string[];
```

The shortlist stores face IDs rather than full duplicated catalog objects.
A user may save both sides of a structure, but cannot save the same face twice.
The current request limit is 50 faces.

`client/hooks/use-location-shortlist.ts` persists selections using
`publiex.location-shortlist.v1`. Restoration discards unknown IDs, removes
duplicates, preserves order, and handles malformed data. Storage failures fall
back to in-memory selection for the current tab. Changes synchronize across
page navigation and through browser storage events.

**Mi selección** displays thumbnails, codes, public location context, per-face remove controls,
and a clear-all action. A visible count links back to the shortlist. Proposal
navigation appears only when faces have been saved. Contact details are not
stored with the shortlist.

## Proposal requests

The shortlist links to `/contact?from=locations`. The contact form visibly lists
the saved faces, lets users remove them, and submits their IDs in `locationIds`.
It does not submit names or codes as trusted catalog information.

`public/send-mail.php` checks that the selection is a list of no more than 50
unique IDs and resolves every ID against `public/catalog/billboards.json`.
Unknown IDs, duplicate IDs, malformed payloads, and unavailable catalog data are
rejected. Verified face codes, names, and directions are escaped and included in
the commercial email and sender confirmation.

A failed request preserves contact input and saved faces. A successful request
preserves the shortlist and offers an explicit action to clear it. Existing
contact requests without saved faces remain supported.

The PHP endpoint must be deployed with its generated catalog on PHP-capable
hosting. A static Vite preview cannot send email.

## Development and validation

```bash
pnpm catalog:generate
pnpm typecheck
pnpm test
pnpm check:assets --allow-unused
pnpm build
```

Asset checking recognizes the catalog folder, uppercase face filenames, encoded
URLs, and generated catalog references. Strict asset checking still reports
unused files. The `--allow-unused` option permits retained originals and
unassigned catalog images while continuing to fail on missing references and
invalid filenames.

Automated tests cover public-field sanitization, hidden-record exclusion,
coordinate parsing and consistency, exact image matching, multi-face grouping,
search/filter behavior, shortlist restoration and limits, and preview/placeholder
rendering. Existing editorial and utility tests also remain in place.

Before release, verify in a browser with the configured Google Maps key:

1. Select a structure and change between its faces; confirm image and direction.
2. Save both faces, browse elsewhere, filter, refresh, and remove a saved face.
3. Use only the keyboard/list and test the mobile preview's close/focus behavior.
4. Resize through mobile, tablet, intermediate desktop, and wide desktop widths.
5. Simulate unavailable maps, missing images, and restricted local storage.
6. Send a proposal on PHP-capable staging and verify the internal and confirmation
   emails contain the selected face codes.
7. Check server rejection of unknown, duplicate, malformed, and oversized selections.

PHP is unavailable in the implementation environment, so PHP runtime behavior
and actual mail delivery have not been exercised locally. Browser interaction
also requires verification; a successful build does not replace those checks.

## Scope

This version supports catalog exploration, individual-face previews, persistent
shortlists, and enquiry submission. Administrative uploads, live availability,
and automatic pricing remain outside scope. Catalog/image updates use the
existing build and deployment workflow.
