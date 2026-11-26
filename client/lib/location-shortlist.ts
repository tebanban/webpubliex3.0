export const SHORTLIST_KEY = "publiex.location-shortlist.v1";
export const MAX_SAVED_FACES = 50;

// Restore only unique, current face IDs; malformed storage must not break a page.
export function parseShortlist(
  value: string | null,
  validIds: Set<string>,
): string[] {
  try {
    const parsed: unknown = JSON.parse(value ?? "[]");
    return Array.isArray(parsed)
      ? [
          ...new Set(
            parsed.filter(
              (id): id is string => typeof id === "string" && validIds.has(id),
            ),
          ),
        ].slice(0, MAX_SAVED_FACES)
      : [];
  } catch {
    return [];
  }
}
