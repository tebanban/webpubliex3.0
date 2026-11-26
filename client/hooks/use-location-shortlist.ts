import { useMemo, useSyncExternalStore } from "react";
import { publiexLocations } from "@/content/locations";
import {
  MAX_SAVED_FACES,
  parseShortlist,
  SHORTLIST_KEY,
} from "@/lib/location-shortlist";

const validIds = new Set(publiexLocations.map((face) => face.id));
const changedEvent = "publiex-shortlist-changed";
let memoryValue = "[]";
let storageUnavailable = false;

function snapshot() {
  if (storageUnavailable) return memoryValue;
  try {
    return window.localStorage.getItem(SHORTLIST_KEY) ?? "[]";
  } catch {
    storageUnavailable = true;
    return memoryValue;
  }
}

function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(changedEvent, listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(changedEvent, listener);
  };
}

export function useLocationShortlist() {
  const stored = useSyncExternalStore(subscribe, snapshot, () => "[]");
  const ids = useMemo(() => parseShortlist(stored, validIds), [stored]);
  const write = (next: string[]) => {
    memoryValue = JSON.stringify(next);
    try {
      window.localStorage.setItem(SHORTLIST_KEY, memoryValue);
    } catch {
      storageUnavailable = true; /* Retain selection in memory when storage is unavailable. */
    }
    window.dispatchEvent(new Event(changedEvent));
  };
  return {
    ids,
    faces: ids.map((id) => publiexLocations.find((face) => face.id === id)!),
    add: (id: string) => {
      const current = parseShortlist(snapshot(), validIds);
      if (
        validIds.has(id) &&
        !current.includes(id) &&
        current.length < MAX_SAVED_FACES
      )
        write([...current, id]);
    },
    remove: (id: string) =>
      write(
        parseShortlist(snapshot(), validIds).filter((saved) => saved !== id),
      ),
    clear: () => write([]),
    limit: MAX_SAVED_FACES,
  };
}
