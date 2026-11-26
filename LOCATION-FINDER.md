# Publiex Location Finder Feature Plan

Status: Proposed implementation.

The Location Finder will let visitors filter billboard locations, inspect a
billboard on a map, save several locations, and request a proposal for their
shortlist. A single billboard is previewed at a time; browsing another billboard
must never replace or remove saved locations.

This plan covers the `/locations` experience, catalog data, code-based image
matching, selection persistence, and integration with the existing contact flow.

## Supplied catalog and images

Inputs supplied on November 25, 2026:

- Source export: `data/source/billboard-catalog-2026-11-25.json`.
- Catalog images: `public/images/locations/`.
- The original export contained a metadata object and a `data` array, rather than
  a plain array: 240 records, with 235 marked visible and 5 marked hidden.
- The image folder contains 230 files. Matching the exact filename
  `<code>.webp` finds images for 224 of the 235 visible records.
- Exported IDs and codes are unique. Records identify billboard faces separately,
  for example `ACT-14` / `AL1-A` and `ACT-15` / `AL1-C`.

These inputs have been inspected; the running finder still uses the earlier
`client/content/publiex-locations.json` inventory. The catalog migration and
individual-image previews are not implemented yet.

The working source has since been cleaned to 235 records. Records marked
`visible: false` were removed, followed by the `slideBlueTop`, `slideBlueBottom`,
`slideWhiteTop`, `slideWhiteBottom`, `reservations`, and `visible` fields on the
remaining records. Totals were updated, and the original status aggregate was
removed because the records do not provide individual statuses to recompute it.

### Source adapter requirements

Map `location` to province, `alias` to the display name, `direction` to the viewing
direction, and `widthM` / `heightM` to dimensions. Preserve the exported face IDs
and public codes. Read coordinates from both numeric `q=lat,lng` URLs and numeric
`/maps/dir//lat,lng` URLs. Ten remaining records originally relied on shortened
Google Maps links. Seven now have explicit `position` coordinates copied from
`client/content/publiex-locations.json` using these structure-code matches:

| Face codes | Existing structure code |
| --- | --- |
| `SJ3-A`, `SJ3-C` | `SJ3` |
| `SJ32-A`, `SJ32-C` | `SJ32` |
| `SJ57-A`, `SJ57-C` | `SJ57` |
| `SJ62-C` | `SJ62` |

Prefer an explicit `position` when present, then parse numeric map URLs. The
November 26 audit found usable coordinates for all 235 records, including the
three previously unresolved codes. Do not substitute coordinates from a nearby
or similarly named billboard.

### Structures and faces

Each catalog record represents a face, rather than necessarily a separate physical
billboard. For example, `SJ14-A` and `SJ14-C` share coordinates
`9.9481019, -84.1041505`, have opposite viewing directions, and match separate
images `SJ14-A.webp` and `SJ14-C.webp`.

Use one map marker per physical structure, with a face selector in its preview.
Changing the face updates the image, full face code, direction, and face-specific
information. Saving a selection saves that face's ID; users may save both faces
of the same billboard, but may not save the same face twice.

Derive a structure key such as `SJ14` from standard codes and provide explicit
grouping overrides for nonstandard codes. Support the face suffixes actually
present in the data: `A`, `B`, `C`, and `D`. Do not assume every structure has
exactly two faces or generate a reverse direction automatically; display the
catalog's `direction` text for the chosen face.

The audit found differing coordinates within the `GC6` and `SJ62` face groups.
`SJ62-C` currently uses coordinates copied from the older inventory. Review these
differences before assigning a shared marker position. Keep the source coordinates
unchanged until the canonical structure position is verified. Different physical
structures at the same position must also remain individually reachable.

The export does not provide an explicit format category or lighting flag. Do not
infer these attributes from image names, image appearance, or missing values.
Enrich them with verified values, or omit their filters until supported.

### Image matching exceptions

Use the supplied folder and exact filename casing when integrating these assets:

```text
AL1-A -> /images/locations/AL1-A.webp
AL1-C -> /images/locations/AL1-C.webp
```

The following visible codes have no exact `<code>.webp` match:

| Catalog codes | Candidate file or next action |
| --- | --- |
| `GC7-A`, `GC7-B` | Review whether `GC7-AB.webp` represents both faces. |
| `PZ1-A`, `PZ1-B` | Review whether `pz1-ab.webp` represents both faces; preserve lowercase casing in the mapping. |
| `SJ58` | Review `SJ58-A.webp` before assigning it. |
| `SJ61 - A y C (Completo)` | Review `SJ61-AC.webp` before assigning it. |
| `Macayas - A`, `Macayas - C`, `SJ15-C`, `SJ31-A`, `SJ34-C` | Supply a matching image or use the unavailable-image placeholder. |

Treat the candidate mappings as unverified until the image contents and face
coverage have been checked. Use explicit overrides for exceptions instead of
silently guessing a face or changing uploaded filenames.

### Public export preparation

The original export included hidden records and reservation notes on 34 records;
those records and notes have been removed from the working source. Internal
source metadata remains. The file has been moved out of `public/` into `data/source/`, and
`/data/source/*billboard-catalog-*.json` is excluded from Git for untracked exports.
An export already staged or tracked must be removed from the Git index separately
to exclude it from commits. Keep this raw
export available locally for catalog generation; fresh checkouts need a separate
copy supplied outside Git.

A file under `public/` is served directly when deployed, even if the application
filters its contents. Before publishing the new catalog, generate a public
allowlisted catalog containing only visible records and approved display fields.
Exclude reservation notes and internal source fields. This public export has not
been generated yet. Deploy only the production build, not the raw source folder.

## Current implementation

- `client/pages/LocationsPage.tsx` renders the filters, Google Maps markers,
  location cards, featured location, and selection summary.
- `client/content/publiex-locations.json` contains the imported location inventory.
- `client/content/locations.ts` converts that inventory into the UI data model.
- The right column currently lists all filtered locations. Clicking a location
  replaces the single location used by the preview and selection summary.
- Images are currently shared by category rather than matched to individual codes.
- Categories are inferred from location names, and lighting is currently assigned
  `false` for every record. These defaults must be replaced with verified data.
- The contact page submits to the existing PHP endpoint in `public/send-mail.php`.

## Target user flow

1. Open the map and see all locations that match the current filters.
2. Filter by province, format, and other verified catalog attributes.
3. Click a structure marker and choose the face to inspect in its preview.
4. Review its image and information, then choose **Agregar a mi selección**.
5. Continue browsing and save additional billboards.
6. Review the shortlist, remove unwanted locations, and choose **Solicitar propuesta**.
7. Complete the contact form with the selected locations already attached.

### Interaction rules

| Action | Result |
| --- | --- |
| Click a marker | Open the structure preview with its last inspected face, or its first available face. |
| Change the preview face | Update the image, full code, direction, and details without changing saved faces. |
| Add the active billboard | Save its ID once; keep the preview open. |
| Click another marker | Change the preview without changing the shortlist. |
| Apply filters | Update visible locations without clearing saved IDs. |
| Hide the active billboard through filtering | Clear the active preview and invite another selection. |
| Remove a saved billboard | Remove it from the shortlist; do not move the map. |
| Refresh the page | Restore saved IDs that still exist in the catalog. |
| Find no matching locations | Show a clear empty state and a reset-filters action. |

Start with no active billboard and an instruction such as
**Seleccione una ubicación en el mapa para ver sus detalles**. Do not silently
save or substitute the first location.

## Catalog data

Extend the existing `client/content/publiex-locations.json` as the single source
of truth. JSON suits the current static site: it is easy to validate, version, and
include in the build. A database or content management system is not required for
this version.

Use explicit fields for filtering instead of inferring attributes from names.
Keep existing IDs stable during migration so saved selections and references
remain valid. The following illustrates the proposed normalized schema; it is not
a claim that the migration has been implemented.

```json
{
  "id": "al1",
  "code": "AL1",
  "name": "El Coyol",
  "province": "Alajuela",
  "address": "1 km oeste del Aeropuerto Internacional Juan Santamaría",
  "position": {
    "lat": 9.9978448,
    "lng": -84.2237502
  },
  "category": "Valla unipolar",
  "dimensions": {
    "widthM": 14.4,
    "heightM": 5
  },
  "faceDirection": "San José - La Garita",
  "backDirection": "La Garita - San José",
  "illuminated": null,
  "imageAlt": "Valla Publiex AL1 en El Coyol"
}
```

### Data rules

- Require a unique, stable `id`, a unique `code`, a name, province, coordinates,
  and an explicit category.
- Use a controlled category vocabulary matching the supported formats.
- Store dimensions as numbers in meters. Derive area when appropriate rather
  than maintaining conflicting numeric and formatted values.
- Use `null` for unconfirmed attributes. Unknown lighting must not be displayed
  as an assertion that a billboard is unlit.
- Retain viewing directions separately and omit unavailable details from previews.
- Keep only public-facing information in the browser catalog. Availability is
  confirmed through the proposal process, not inferred from appearing on the map.
- Keep an objective filter only if useful, verified objective assignments exist;
  avoid a filter backed by the same placeholder value for every record.

If Excel remains the source used by operations, import it into this schema with a
repeatable validation step. Avoid manually maintaining two independent catalogs.

## Catalog images

The supplied images already use a dedicated folder. Keep these existing paths
for the first integration:

```text
public/images/locations/
  AL1-A.webp
  AL1-C.webp
  AL2-A.webp
```

Match the complete public code, including its face suffix, to the exact uploaded
filename. Preserve meaningful separators in codes. Do not strip characters in a
way that could make two different codes resolve to the same filename. If filenames
are standardized later, update the image mapping in the same change.

```text
AL1-A -> /images/locations/AL1-A.webp
AL1-C -> /images/locations/AL1-C.webp
```

The marker identifies the structure. Its face selector supplies the selected face
record's ID. The application finds that record, reads its full code, and constructs
the image URL. It does not scan the public folder or use image recognition in the
browser.

Support an optional `imageFile` override for exceptions, restricted to catalog
filenames. Match exact filenames and casing so the feature also works on Linux
hosting. Validate file existence during development or build.

Prefer an optimized WebP image with consistent landscape framing. Load the active
preview on demand instead of downloading the entire image catalog when the map
opens. Saved-list thumbnails should also load lazily.

If the image is missing or fails to load, show a branded placeholder and
**Imagen no disponible**. Keep the billboard details and save action usable.
Never show an unrelated billboard as its image fallback.

For the first version, use one primary image per selectable face code. Retain each
face's existing ID and code. Group faces at a structure marker, and keep separate
structures at shared coordinates reachable through a cluster/list interaction or
a marker chooser.

## Map and preview interface

### Desktop

Retain the compact filter sidebar, central map, and narrow right-hand panel. Replace
the right-hand list of every result with one active billboard preview. Keep the
filtered-result count visible independently of the preview.

The preview contains:

- Face selector, billboard image, full face code, and name.
- Province and address.
- Format, dimensions, viewing direction, and lighting when confirmed.
- **Agregar a mi selección**, changing to **Agregada a mi selección** after saving.

Use different visual states for the active marker and saved markers so visitors
can distinguish inspection from saving. Marker clusters must still allow access
to individual locations.

### Mobile and intermediate widths

Use a collapsible filter panel and a bottom sheet for the active preview. The map
and preview must remain usable without forcing narrow desktop columns onto a
tablet. Provide a visible shortlist count and a non-map list option so keyboard
users and visitors unable to use the map can inspect and save locations.

Keep focus order logical, expose selection states to assistive technology, and
allow the preview sheet to close without losing saved locations. Map-load errors
must retain access to the filtered list and shortlist.

## Selection state and persistence

Keep browsing and saving independent:

```ts
activeLocationId: string | null;
savedLocationIds: string[];
```

Derive the active record and saved records from the catalog rather than storing
duplicate objects. Preserve insertion order and prevent duplicate IDs.

Persist saved IDs in a versioned `localStorage` entry such as
`publiex.location-shortlist.v1`. Validate restored data, discard IDs absent from
the current catalog, and continue with in-memory state if storage is unavailable.
Do not store contact information alongside the shortlist.

The **Mi selección** area shows saved thumbnails, codes, names, remove actions,
and a clear-all action. A persistent **Mi selección · N** control provides access
while exploring. Disable proposal submission for an empty shortlist and show a
helpful empty state.

## Proposal request integration

Replace the selection section's current form illustration with a real route into
the existing contact form. Transfer selected IDs through application state and
the persisted shortlist; avoid placing the full catalog or personal information
in a URL.

Show the attached locations in the contact form and allow the user to review them
before sending. Extend the submission payload with the selected IDs. The existing
PHP endpoint must validate their format, count, and catalog membership, and resolve
the corresponding public codes before including them in the internal email.

Because the source JSON is inside `client/`, generate a minimal server-readable
catalog from that same source during the build. Deploy it with the PHP endpoint;
do not introduce a second catalog that needs manual updates. Never trust submitted
names, codes, or other client-provided metadata as authoritative.

Keep the shortlist after a failed submission. After confirmed success, offer an
explicit action to clear it rather than silently discarding the user's work.

## Implementation stages

| Stage | Deliverable |
| --- | --- |
| 1. Catalog and images | Define the schema, migrate existing records, add image resolution and placeholders, and validate codes and files. |
| 2. Active preview | Separate active selection from saving, connect markers to individual images, and add desktop/mobile previews and list access. |
| 3. Shortlist | Add/remove locations, show counts and saved-marker states, and persist valid IDs across refreshes. |
| 4. Proposal request | Attach IDs to the contact form, generate the server catalog, validate in PHP, and include locations in the email. |
| 5. Verification | Test filtering, matching, persistence, errors, accessibility, responsive layouts, and submission. |

Reuse `client/components/site` for the preview and shortlist components. Keep
catalog types and transformations in `client/content/locations.ts`, and extract
shared selection or image-resolution logic when needed. Add short comments around
the main state transitions and validation rules.

Extend `scripts/check-assets.mjs` to recognize the new catalog folder and
code-derived image usage before running cleanup checks. Catalog images must not
be reported as unused simply because their URLs are generated from codes.

## Acceptance criteria

- Every supported code resolves to its matching catalog image or the placeholder.
- A marker click opens the correct record and never changes the shortlist.
- Every face remains reachable through the structure's face selector and shows
  the image and direction matching its complete code.
- Different structures at shared coordinates remain reachable; coordinate
  discrepancies within a structure require a verified resolution.
- Adding the same billboard twice does not create duplicates.
- Filters preserve saved locations and clear an active preview that no longer matches.
- Empty results clear the active preview without falling back to an unrelated record.
- Refresh restores valid saved IDs; invalid storage and unavailable storage are handled.
- Missing images and map failures do not block browsing or proposal requests.
- Preview, list, and shortlist controls work with keyboard navigation and readable labels.
- Layouts remain usable at mobile, tablet, intermediate desktop, and wide desktop widths.
- The contact form visibly includes the selected locations, and the server rejects
  unknown IDs and oversized or malformed selection payloads.
- Failed requests preserve the shortlist. Successful requests contain the verified
  location codes in the internal email.
- Catalog validation, asset checks, TypeScript, relevant behavioral tests, and the
  production build pass. Verify the PHP submission on a PHP-capable host.

## Catalog preparation before implementation

Prepare the images using the agreed face-code filenames. Codes identify individual
faces. Verify structure grouping and coordinate discrepancies, identify who owns
catalog updates, and verify category, lighting, dimensions, and viewing directions.
These decisions determine the migration and image matching; they do not require a
database for the first version.

Catalog and image updates will be published through the normal site build and
deployment process. An administrative upload interface, live availability, and
automatic pricing are outside this version's scope.
