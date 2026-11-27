import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import {
  GoogleMap,
  MarkerClustererF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import {
  filterBillboardFaces,
  groupBillboardFaces,
  publiexLocations,
  type BillboardStructure,
} from "@/content/locations";
import { useLocationShortlist } from "@/hooks/use-location-shortlist";
import { BillboardImage } from "@/components/site/BillboardImage";
import { BillboardPreview } from "@/components/site/BillboardPreview";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { publiexAsset } from "@/lib/assets";

const mapCenter = { lat: 9.96, lng: -84.05 };
const defaultMapZoom = 9;
const markerCodeZoom = 16;
const clusterMaxZoom = markerCodeZoom - 1;
const sizeCategoryOrder: Record<string, number> = {
  small: 0,
  medium: 1,
  large: 2,
  landmark: 3,
};

const mapOptions: google.maps.MapOptions = {
  clickableIcons: false,
  fullscreenControl: false,
  mapTypeControl: false,
  minZoom: 8,
  streetViewControl: false,
  styles: [
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#1f2937" }, { weight: 1.4 }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#ffffff" }, { weight: 3.5 }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#111827" }],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#0f172a" }],
    },
  ],
};

function getClusterIcon(color: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r="33" fill="${color}" fill-opacity="0.22"/>
      <circle cx="36" cy="36" r="24" fill="${color}" fill-opacity="0.45"/>
      <circle cx="36" cy="36" r="15" fill="${color}"/>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const clusterStyles = [
  {
    url: getClusterIcon("#2859c7"),
    height: 56,
    width: 56,
    textColor: "#ffffff",
    textSize: 15,
  },
  {
    url: getClusterIcon("#e31f26"),
    height: 64,
    width: 64,
    textColor: "#ffffff",
    textSize: 16,
  },
  {
    url: getClusterIcon("#7f1218"),
    height: 72,
    width: 72,
    textColor: "#ffffff",
    textSize: 17,
  },
];

const clusterCalculator = (markers: google.maps.Marker[]) => {
  const count = markers.length;

  return {
    text: String(count),
    index: count >= 20 ? 3 : count >= 8 ? 2 : 1,
    title: `${count} ubicaciones Publiex`,
  };
};

function LocationsMap({
  structures,
  active,
  focusRequest,
  onSelect,
  savedStructures,
}: {
  structures: BillboardStructure[];
  active: BillboardStructure | null;
  focusRequest: number;
  onSelect: (structure: BillboardStructure) => void;
  savedStructures: Set<string>;
}) {
  const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return key ? (
    <GoogleLocationsMap
      apiKey={key}
      structures={structures}
      active={active}
      focusRequest={focusRequest}
      onSelect={onSelect}
      savedStructures={savedStructures}
    />
  ) : (
    <MapFallback />
  );
}

function MapFallback() {
  return (
    <div className="flex min-h-[32rem] items-center justify-center bg-slate-100 p-8 text-center">
      <div>
        <h3 className="font-raleway text-xl font-semibold">
          Explore las ubicaciones
        </h3>
        <p className="mt-3">
          El mapa no está disponible en este momento. Use la lista de
          ubicaciones para explorar las caras y crear su selección.
        </p>
      </div>
    </div>
  );
}

function GoogleLocationsMap({
  apiKey,
  structures,
  active,
  focusRequest,
  onSelect,
  savedStructures,
}: {
  apiKey: string;
  structures: BillboardStructure[];
  active: BillboardStructure | null;
  focusRequest: number;
  onSelect: (structure: BillboardStructure) => void;
  savedStructures: Set<string>;
}) {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [mapZoom, setMapZoom] = useState(defaultMapZoom);
  const { isLoaded, loadError } = useJsApiLoader({ googleMapsApiKey: apiKey });
  useEffect(() => {
    if (!mapRef.current || !structures.length) return;
    const bounds = new google.maps.LatLngBounds();
    structures.forEach((structure) => bounds.extend(structure.position));
    mapRef.current.fitBounds(bounds, 35);
  }, [structures, isLoaded]);
  // List selections refocus even when another face shares the same structure.
  useEffect(() => {
    if (!mapRef.current || !active) return;
    mapRef.current.panTo(active.position);
    mapRef.current.setZoom(markerCodeZoom);
  }, [active?.id, focusRequest, isLoaded]);
  if (loadError) return <MapFallback />;
  if (!isLoaded)
    return (
      <div
        role="status"
        className="flex min-h-[32rem] items-center justify-center"
      >
        Cargando mapa…
      </div>
    );
  return (
    <GoogleMap
      center={mapCenter}
      zoom={defaultMapZoom}
      options={mapOptions}
      mapContainerClassName="size-full min-h-[32rem]"
      onLoad={(map) => {
        mapRef.current = map;
        if (active) {
          map.panTo(active.position);
          map.setZoom(markerCodeZoom);
        } else if (structures.length) {
          const bounds = new google.maps.LatLngBounds();
          structures.forEach((structure) => bounds.extend(structure.position));
          map.fitBounds(bounds, 35);
        }
      }}
      onUnmount={() => {
        mapRef.current = null;
      }}
      onZoomChanged={() =>
        setMapZoom(mapRef.current?.getZoom() ?? defaultMapZoom)
      }
    >
      <MarkerClustererF
        averageCenter
        calculator={clusterCalculator}
        gridSize={56}
        maxZoom={clusterMaxZoom}
        minimumClusterSize={2}
        styles={clusterStyles}
      >
        {(clusterer) => (
          <>
            {structures.map((structure) => (
              <MarkerF
                key={structure.id}
                clusterer={clusterer}
                position={structure.position}
                title={
                  structure.id +
                  " · " +
                  structure.title +
                  " · " +
                  structure.faces.length +
                  " caras"
                }
                onClick={() => onSelect(structure)}
                zIndex={
                  active?.id === structure.id
                    ? 30
                    : savedStructures.has(structure.id)
                      ? 20
                      : 10
                }
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: active?.id === structure.id ? 14 : 10,
                  fillColor:
                    active?.id === structure.id
                      ? "#f5333f"
                      : savedStructures.has(structure.id)
                        ? "#15803d"
                        : "#0047ba",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 2,
                }}
                label={
                  mapZoom >= markerCodeZoom
                    ? {
                        text: structure.id,
                        color: "#111827",
                        fontSize: "11px",
                        fontWeight: "700",
                        className: "translate-y-7 rounded bg-white px-1",
                      }
                    : undefined
                }
              />
            ))}
          </>
        )}
      </MarkerClustererF>
    </GoogleMap>
  );
}

export default function LocationsPage() {
  const [province, setProvince] = useState("");
  const [search, setSearch] = useState("");
  const [sizeCategory, setSizeCategory] = useState("");
  const [activeFaceId, setActiveFaceId] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [mapFocusRequest, setMapFocusRequest] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const shortlist = useLocationShortlist();
  const lastFaces = useRef(new Map<string, string>());
  const previewReturnFocus = useRef<HTMLElement | null>(null);
  const provinces = useMemo(
    () => [...new Set(publiexLocations.map((face) => face.province))].sort(),
    [],
  );
  const sizeCategories = useMemo(
    () =>
      [
        ...new Set(
          publiexLocations.map((face) => face.sizeCategory).filter(Boolean),
        ),
      ].sort(
        (a, b) =>
          (sizeCategoryOrder[a] ?? 4) - (sizeCategoryOrder[b] ?? 4) ||
          a.localeCompare(b),
      ),
    [],
  );
  const filtered = useMemo(
    () =>
      filterBillboardFaces(publiexLocations, province, search, sizeCategory),
    [province, search, sizeCategory],
  );
  const structures = useMemo(() => groupBillboardFaces(filtered), [filtered]);
  const selected = filtered.find((face) => face.id === activeFaceId) ?? null;
  const activeStructure =
    structures.find((structure) => structure.id === selected?.structureId) ??
    null;
  const savedStructures = new Set(
    shortlist.faces.map((face) => face.structureId),
  );
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  // Filtering affects browsing only; saved faces persist independently.
  useEffect(() => {
    if (activeFaceId && !filtered.some((face) => face.id === activeFaceId)) {
      setActiveFaceId(null);
      setPreviewOpen(false);
    }
  }, [activeFaceId, filtered]);
  const selectFace = (id: string, openPreview = true) => {
    const face = filtered.find((item) => item.id === id);
    if (!face) return;
    if (
      openPreview &&
      !previewOpen &&
      document.activeElement instanceof HTMLElement
    ) {
      previewReturnFocus.current = document.activeElement;
    }
    lastFaces.current.set(face.structureId, id);
    setActiveFaceId(id);
    setPreviewOpen(openPreview);
    if (!openPreview) setMapFocusRequest((request) => request + 1);
  };
  const selectStructure = (structure: BillboardStructure) => {
    const last = lastFaces.current.get(structure.id);
    selectFace(
      structure.faces.find((face) => face.id === last)?.id ??
        structure.faces[0].id,
    );
  };
  const preview =
    selected && activeStructure ? (
      <BillboardPreview
        face={selected}
        faces={activeStructure.faces}
        onSelect={selectFace}
        onAdd={(id) => {
          shortlist.add(id);
          setPreviewOpen(false);
        }}
        saved={shortlist.ids.includes(selected.id)}
        atLimit={shortlist.ids.length >= shortlist.limit}
      />
    ) : null;

  return (
    <main className="bg-white pt-14 text-black md:pt-16 xl:pt-20">
      {/* Section 1, Hero */}
      <section className="overflow-hidden bg-white text-white">
        <div className="mx-auto grid w-full max-w-480 lg:grid-cols-[51%_49%]">
          <div className="flex flex-col justify-center bg-publiex-blue-deep px-5 py-[clamp(5rem,7vw,8rem)] md:px-10 lg:px-24 xl:pl-47.5 xl:pr-18">
            <p className="text-sm font-bold uppercase md:text-2xl">
              Publiex explora
            </p>
            <h1 className="mt-9 max-w-178 font-raleway text-[clamp(2.7rem,5.4vw,4.965rem)] font-bold leading-[1.04]">
              Hagamos visible su historia,
              <span className="block text-publiex-red">
                justo donde Costa Rica se mueve.
              </span>
            </h1>
            <p className="mt-10 max-w-184 leading-tight">
              Explore una muestra del inventario de Publiex, descubra qué puede
              lograr cada formato y construya una selección preliminar para su
              campaña.
            </p>
          </div>
          <div className="min-h-[clamp(30rem,44.1vw,52.9375rem)]">
            <img
              alt="Valla Publiex ubicada en un corredor urbano de Costa Rica"
              className="size-full object-cover object-center"
              src={publiexAsset("locations-hero.webp")}
            />
          </div>
        </div>
      </section>

      {/* Verified catalog filters and accessible list remain usable without the map. */}
      <section
        id="explorar"
        className="bg-publiex-muted-section px-5 py-12 md:px-10 lg:px-24"
      >
        <div className="mx-auto max-w-393.5">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-raleway text-2xl font-semibold">
              Encuentre su próxima ubicación
            </h2>
          </div>
          <p className="mb-4 text-sm text-slate-600">
            Seleccione una ubicación en el mapa o en la lista para ver sus caras
            y detalles.
          </p>
          {/* The popup overlays the page, so no preview column reduces the map width. */}
          <div className="grid overflow-hidden rounded bg-white shadow-sm lg:grid-cols-[12rem_minmax(0,1fr)] xl:grid-cols-[clamp(12rem,14vw,14rem)_minmax(0,1fr)]">
            <aside className="min-w-0 border-b bg-zinc-50 p-4 text-sm [--publiex-paragraph-font-size:0.875rem] lg:border-r">
              <details open={isDesktop || undefined} className="group">
                <summary className="cursor-pointer py-2 font-semibold">
                  Refinar búsqueda
                </summary>
                <div className="mt-5 space-y-5">
                  <label className="block">
                    Provincia
                    <select
                      value={province}
                      onChange={(event) => setProvince(event.target.value)}
                      className="mt-2 min-h-11 w-full rounded border bg-white px-2 text-sm"
                    >
                      <option value="">Todas</option>
                      {provinces.map((value) => (
                        <option key={value}>{value}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    Tamaño
                    <select
                      value={sizeCategory}
                      onChange={(event) => setSizeCategory(event.target.value)}
                      className="mt-2 min-h-11 w-full rounded border bg-white px-2 text-sm"
                    >
                      <option value="">Todos los tamaños</option>
                      {sizeCategories.map((value) => (
                        <option key={value} value={value}>
                          {value.charAt(0).toUpperCase() + value.slice(1)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    Código o ubicación
                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      type="search"
                      placeholder="Ej. SJ14 o Santa Ana"
                      className="mt-2 min-h-11 w-full min-w-0 rounded border px-2 text-sm"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setProvince("");
                      setSearch("");
                      setSizeCategory("");
                    }}
                    className="min-h-11 underline"
                  >
                    Limpiar filtros
                  </button>
                </div>
              </details>

              <label className="mt-5 block font-semibold">
                Explorar por código
                <select
                  value={selected?.id ?? ""}
                  onChange={(event) => selectFace(event.target.value, false)}
                  className="mt-2 min-h-11 w-full min-w-0 rounded border bg-white px-2 text-xs"
                >
                  <option value="">Seleccione una cara</option>
                  {structures.flatMap((structure) =>
                    structure.faces.map((face) => (
                      <option key={face.id} value={face.id}>
                        {face.code} · {face.district || face.province}
                      </option>
                    )),
                  )}
                </select>
              </label>
              <p className="mt-6 text-xs text-slate-500">
                Azul: ubicación · Rojo: vista actual · Verde: incluye caras
                guardadas.
              </p>
            </aside>
            <div className="min-h-[32rem] min-w-0">
              {structures.length ? (
                <LocationsMap
                  structures={structures}
                  active={activeStructure}
                  focusRequest={mapFocusRequest}
                  onSelect={selectStructure}
                  savedStructures={savedStructures}
                />
              ) : (
                <div
                  role="status"
                  className="flex min-h-[32rem] items-center justify-center p-6 text-center"
                >
                  No hay ubicaciones para esta búsqueda. Pruebe otra provincia o
                  limpie los filtros.
                </div>
              )}
            </div>
          </div>
          {selected && (
            <button
              type="button"
              className="mt-4 min-h-11 w-full rounded border border-publiex-blue bg-white text-sm text-publiex-blue"
              onClick={(event) => {
                previewReturnFocus.current = event.currentTarget;
                setPreviewOpen(true);
              }}
            >
              Ver cara {selected.code}
            </button>
          )}
          <Dialog
            open={previewOpen && !!selected}
            onOpenChange={setPreviewOpen}
          >
            <DialogContent
              className="max-h-[90svh] w-[calc(100vw-2rem)] max-w-md overflow-y-auto"
              onCloseAutoFocus={(event) => {
                event.preventDefault();
                previewReturnFocus.current?.focus();
              }}
            >
              <DialogTitle>Vista previa de la ubicación</DialogTitle>
              <DialogDescription>
                Elija la cara y añádala a su cotización.
              </DialogDescription>
              {preview}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Saving faces is independent of the active marker and current filters. */}
      <section
        id="mi-seleccion"
        className="scroll-mt-24 px-5 py-14 [--publiex-paragraph-font-size:0.95rem] md:px-10 lg:px-24"
      >
        <div className="mx-auto max-w-393.5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-raleway text-xl font-semibold">
              Mi selección: {shortlist.ids.length}
            </h2>
          </div>
          <p className="mt-4">
            Guarde las caras que le interesan y solicite una propuesta. La
            disponibilidad se confirma con nuestro equipo.
          </p>
          {shortlist.faces.length ? (
            <>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {shortlist.faces.map((face) => (
                  <li
                    key={face.id}
                    className="flex min-w-0 items-center gap-4 rounded border p-4"
                  >
                    <BillboardImage
                      src={face.image}
                      alt={face.imageAlt}
                      className="h-20 w-24 shrink-0 rounded"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold">{face.code}</p>
                      <p className="text-sm">
                        {face.district || face.province}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={"Quitar " + face.code + " de la cotización"}
                      title="Quitar de la cotización"
                      onClick={() => shortlist.remove(face.id)}
                      className="inline-flex size-11 shrink-0 items-center justify-center rounded text-slate-500 transition hover:bg-red-50 hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-publiex-blue"
                    >
                      <Trash2 aria-hidden="true" className="size-5" />
                    </button>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact?from=locations"
                className="mt-8 inline-flex min-h-12 items-center rounded bg-publiex-red px-6 font-semibold text-white"
              >
                Solicitar propuesta · {shortlist.ids.length} caras
              </Link>
            </>
          ) : (
            <p className="mt-8 rounded border border-dashed p-6 text-slate-500">
              Aún no ha guardado ubicaciones. Explore el mapa o la lista y
              agregue una cara para comenzar.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
