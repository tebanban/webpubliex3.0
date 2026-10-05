import { useEffect, useMemo, useRef, useState } from "react";
import {
  GoogleMap,
  MarkerClustererF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

import {
  categoryStyles,
  publiexLocations,
  type PubliexLocation,
} from "@/content/locations";
import { publiexAsset } from "@/lib/assets";

type LocationFilters = {
  province: string;
  solution: string;
  objective: string;
  illuminated: boolean;
};

const defaultFilters: LocationFilters = {
  province: "Todas",
  solution: "Todas",
  objective: "Todos",
  illuminated: false,
};

const mapCenter = { lat: 9.96, lng: -84.05 };
const defaultMapZoom = 9;
const markerCodeZoom = 16;
const clusterMaxZoom = markerCodeZoom - 1;

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

function LocationButton({
  children,
  href,
  variant = "red",
}: {
  children: string;
  href: string;
  variant?: "red" | "underline";
}) {
  const styles = {
    red: "bg-publiex-red px-5 text-white hover:bg-red-600",
    underline: "text-white underline-offset-4 hover:underline",
  };

  return (
    <a
      className={`inline-flex min-h-12.5 items-center justify-center font-raleway text-[clamp(0.875rem,1.04vw,1.25rem)] font-bold uppercase leading-8 transition ${styles[variant]}`}
      href={href}
    >
      {children}
    </a>
  );
}

function getUniqueOptions(key: "province" | "solution" | "objective") {
  return Array.from(new Set(publiexLocations.map((location) => location[key])));
}

function LocationsMap({
  locations,
  selectedLocation,
  onSelectLocation,
}: {
  locations: PubliexLocation[];
  selectedLocation: PubliexLocation;
  onSelectLocation: (location: PubliexLocation) => void;
}) {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!googleMapsApiKey) {
    return <StaticMapFallback locations={locations} />;
  }

  return (
    <GoogleLocationsMap
      googleMapsApiKey={googleMapsApiKey}
      locations={locations}
      onSelectLocation={onSelectLocation}
      selectedLocation={selectedLocation}
    />
  );
}

function GoogleLocationsMap({
  googleMapsApiKey,
  locations,
  selectedLocation,
  onSelectLocation,
}: {
  googleMapsApiKey: string;
  locations: PubliexLocation[];
  selectedLocation: PubliexLocation;
  onSelectLocation: (location: PubliexLocation) => void;
}) {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [mapZoom, setMapZoom] = useState(defaultMapZoom);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey,
  });

  useEffect(() => {
    if (!mapRef.current || !selectedLocation) return;

    mapRef.current.panTo(selectedLocation.position);
    mapRef.current.setZoom(markerCodeZoom);
  }, [selectedLocation]);

  const getMarkerIcon = (selected: boolean): google.maps.Icon => {
    const width = selected ? 42 : 34;
    const height = selected ? 46 : 37;

    return {
      url: publiexAsset("marker2.svg"),
      scaledSize: new google.maps.Size(width, height),
      anchor: new google.maps.Point(width / 2, height),
    };
  };

  if (loadError) {
    return <StaticMapFallback locations={locations} />;
  }

  if (!isLoaded) {
    return (
      <div className="flex size-full min-h-[32rem] items-center justify-center bg-[#d9e8ed] font-raleway text-sm font-extrabold uppercase tracking-[0.16em] text-slate-600">
        Cargando mapa
      </div>
    );
  }

  return (
    <GoogleMap
      center={selectedLocation?.position ?? mapCenter}
      mapContainerClassName="size-full min-h-[32rem]"
      onLoad={(map) => {
        mapRef.current = map;
        setMapZoom(map.getZoom() ?? defaultMapZoom);
      }}
      onZoomChanged={() => {
        if (!mapRef.current) return;

        setMapZoom(mapRef.current.getZoom() ?? defaultMapZoom);
      }}
      options={mapOptions}
      zoom={defaultMapZoom}
    >
      <MarkerClustererF
        averageCenter
        calculator={clusterCalculator}
        gridSize={56}
        maxZoom={clusterMaxZoom}
        minimumClusterSize={3}
        styles={clusterStyles}
        title="Zona de ubicaciones Publiex"
      >
        {(clusterer) => (
          <>
            {locations.map((location) => (
              <MarkerF
                clusterer={clusterer}
                icon={getMarkerIcon(selectedLocation?.id === location.id)}
                key={location.id}
                onClick={() => onSelectLocation(location)}
                position={location.position}
                title={location.title}
                zIndex={selectedLocation?.id === location.id ? 20 : 10}
              />
            ))}
          </>
        )}
      </MarkerClustererF>
    </GoogleMap>
  );
}

function StaticMapFallback({ locations }: { locations: PubliexLocation[] }) {
  return (
    <div className="relative min-h-[32rem] overflow-hidden bg-[#d9e8ed]">
      <img
        alt="Mapa comercial de muestra con ubicaciones Publiex"
        className="absolute inset-0 size-full object-cover"
        src={publiexAsset("Locations-map.png")}
      />
      <div className="absolute left-[2.5%] top-6 font-raleway text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
        Océano Pacífico
      </div>
      <div className="absolute right-[2.5%] top-6 font-raleway text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
        Mar Caribe
      </div>
      <div className="absolute inset-x-[3%] bottom-7 bg-white/95 px-6 py-5 font-raleway shadow-sm">
        <p className="text-base font-extrabold uppercase tracking-[0.08em]">
          {locations.length} medios filtrados
        </p>
        <p className="mt-2 text-sm leading-tight text-zinc-600 md:text-base">
          Configure VITE_GOOGLE_MAPS_API_KEY para activar el mapa interactivo de
          Google Maps.
        </p>
      </div>
    </div>
  );
}

function LocationCard({
  location,
  selected,
  onSelect,
}: {
  location: PubliexLocation;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      className={`border bg-white transition ${
        selected ? "border-publiex-blue" : "border-zinc-200 hover:border-zinc-400"
      }`}
    >
      <button className="block w-full text-left" onClick={onSelect} type="button">
        <div className="relative h-[clamp(10rem,11.8vw,14.2rem)] overflow-hidden bg-black">
          <img
            alt={location.imageAlt}
            className="size-full object-cover"
            src={location.image}
          />
          <p className="absolute left-4 top-4 text-sm font-extrabold uppercase text-white">
            {location.code}
          </p>
          <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white text-2xl font-black text-publiex-blue">
            {selected ? "✓" : "+"}
          </span>
        </div>
        <div className="p-5">
          <p className="text-sm font-extrabold uppercase text-publiex-blue">
            {location.category} · {location.province}
          </p>
          <h3 className="mt-4 text-[clamp(1.4rem,1.6vw,2rem)] font-semibold leading-tight">
            {location.title}
          </h3>
          <p className="mt-3 text-base leading-tight text-zinc-600">
            {location.description}
          </p>
        </div>
      </button>
      {selected ? (
        <div className="grid grid-cols-2 gap-3 px-5 pb-5 text-sm font-extrabold uppercase">
          <a
            className="flex items-center justify-between border-t border-zinc-300 pt-5 text-publiex-blue"
            href="/contact"
          >
            Ver ubicación <span aria-hidden="true">↗</span>
          </a>
          <a
            className="flex items-center justify-between bg-publiex-red px-4 py-5 text-white"
            href="/contact"
          >
            Ver mi campaña aquí <span aria-hidden="true">→</span>
          </a>
        </div>
      ) : (
        <span className="mx-5 mb-5 block h-1 bg-publiex-red" />
      )}
    </article>
  );
}

export default function LocationsPage() {
  const [filters, setFilters] = useState<LocationFilters>(defaultFilters);
  const [selectedLocationId, setSelectedLocationId] = useState(
    publiexLocations[0].id,
  );

  const filterGroups = useMemo(
    () => [
      {
        key: "province" as const,
        label: "Provincia",
        options: ["Todas", ...getUniqueOptions("province")],
      },
      {
        key: "solution" as const,
        label: "Solución",
        options: ["Todas", ...getUniqueOptions("solution")],
      },
      {
        key: "objective" as const,
        label: "Objetivo",
        options: ["Todos", ...getUniqueOptions("objective")],
      },
    ],
    [],
  );

  const filteredLocations = useMemo(
    () =>
      publiexLocations.filter((location) => {
        const matchesProvince =
          filters.province === "Todas" || location.province === filters.province;
        const matchesSolution =
          filters.solution === "Todas" || location.solution === filters.solution;
        const matchesObjective =
          filters.objective === "Todos" || location.objective === filters.objective;
        const matchesLighting = !filters.illuminated || location.illuminated;

        return (
          matchesProvince &&
          matchesSolution &&
          matchesObjective &&
          matchesLighting
        );
      }),
    [filters],
  );

  const selectedLocation =
    filteredLocations.find((location) => location.id === selectedLocationId) ??
    filteredLocations[0] ??
    publiexLocations[0];

  useEffect(() => {
    if (!filteredLocations.length) return;

    const selectedStillVisible = filteredLocations.some(
      (location) => location.id === selectedLocationId,
    );

    if (!selectedStillVisible) {
      setSelectedLocationId(filteredLocations[0].id);
    }
  }, [filteredLocations, selectedLocationId]);

  return (
    <main className="bg-white pt-14 text-black md:pt-16 xl:pt-20">
      {/* Section 1, Hero */}
      <section className="overflow-hidden bg-white text-white">
        <div className="mx-auto grid w-full max-w-480 lg:grid-cols-[51%_49%]">
          <div className="flex flex-col justify-center bg-publiex-blue-deep px-5 py-[clamp(5rem,7vw,8rem)] md:px-10 lg:px-24 xl:pl-47.5 xl:pr-18">
            <p className="font-raleway text-sm font-bold uppercase md:text-2xl">
              Publiex explora
            </p>
            <h1 className="mt-9 max-w-178 font-raleway text-[clamp(2.7rem,5.4vw,4.965rem)] font-bold leading-[1.04]">
              Hagamos visible su historia,
              <span className="block text-publiex-red">
                justo donde Costa Rica se mueve.
              </span>
            </h1>
            <p className="mt-10 max-w-184 font-raleway text-[clamp(1.125rem,1.43vw,1.715rem)] leading-tight">
              Explore una muestra del inventario de Publiex, descubra qué puede
              lograr cada formato y construya una selección preliminar para su
              campaña.
            </p>
          </div>
          <div className="min-h-[clamp(30rem,44.1vw,52.9375rem)]">
            <img
              alt="Valla Publiex ubicada en un corredor urbano de Costa Rica"
              className="size-full object-cover object-center"
              src={publiexAsset("locations-hero.png")}
            />
          </div>
        </div>
      </section>

      {/* Section 2, Interactive inventory map */}
      <section className="overflow-hidden bg-publiex-muted-section px-5 py-[clamp(3rem,5vw,6rem)] md:px-10 lg:px-24">
        <div className="mx-auto w-full max-w-480">
          <div className="grid min-h-[clamp(42rem,46.9vw,56.25rem)] overflow-hidden bg-white shadow-sm lg:grid-cols-[14rem_minmax(0,1fr)_20rem] xl:grid-cols-[18rem_minmax(0,1fr)_24rem]">
            <aside className="flex flex-col border-b border-zinc-200 bg-zinc-50 px-4 py-7 font-raleway xl:px-5 lg:border-b-0 lg:border-r">
              <h2 className="text-[clamp(1.25rem,1.25vw,1.55rem)] font-extrabold uppercase tracking-wide">
                Refinar búsqueda
              </h2>

              <div className="mt-8 space-y-6">
                {filterGroups.map((filter) => (
                  <label className="block" key={filter.label}>
                    <span className="block text-sm font-extrabold uppercase tracking-[0.12em] text-zinc-600">
                      {filter.label}
                    </span>
                    <select
                      className="mt-3 h-10 w-full border border-zinc-300 bg-white px-3 text-sm font-bold text-black shadow-inner"
                      onChange={(event) =>
                        setFilters((currentFilters) => ({
                          ...currentFilters,
                          [filter.key]: event.target.value,
                        }))
                      }
                      value={filters[filter.key]}
                    >
                      {filter.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                ))}
              </div>

              <label className="mt-7 flex items-center gap-3 border-y border-zinc-300 py-5 text-sm font-extrabold uppercase tracking-[0.1em] text-zinc-700">
                <input
                  checked={filters.illuminated}
                  className="size-4"
                  onChange={(event) =>
                    setFilters((currentFilters) => ({
                      ...currentFilters,
                      illuminated: event.target.checked,
                    }))
                  }
                  type="checkbox"
                />
                Impacto nocturno o iluminado
              </label>

              <div className="mt-8">
                <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-zinc-600">
                  Categorías
                </p>
                <div className="mt-6 space-y-5 text-base text-zinc-800 xl:text-lg">
                  {Object.entries(categoryStyles).map(([label, color]) => (
                    <div className="flex items-center gap-4" key={label}>
                      <span className={`size-3 rounded-full ${color}`} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="mt-auto w-fit border-b border-black pb-3 pt-12 text-sm font-extrabold uppercase tracking-[0.1em] text-zinc-700"
                onClick={() => setFilters(defaultFilters)}
                type="button"
              >
                Limpiar filtros
              </button>
            </aside>

            <div className="relative min-h-[32rem] overflow-hidden bg-[#d9e8ed]">
              <LocationsMap
                locations={filteredLocations}
                onSelectLocation={(location) => setSelectedLocationId(location.id)}
                selectedLocation={selectedLocation}
              />
            </div>

            <aside className="border-t border-zinc-200 bg-white font-raleway lg:border-l lg:border-t-0">
              <div className="flex items-center justify-between gap-4 border-b border-zinc-200 px-4 py-5 text-sm text-zinc-500 xl:px-5">
                <p className="text-base font-extrabold text-black">
                  {filteredLocations.length} medios encontrados
                </p>
                <p>Muestra pública · Costa Rica</p>
              </div>

              <div className="max-h-[clamp(36rem,44vw,53rem)] space-y-5 overflow-y-auto p-4 xl:p-5">
                {filteredLocations.length ? (
                  filteredLocations.map((location) => (
                    <LocationCard
                      key={location.id}
                      location={location}
                      onSelect={() => setSelectedLocationId(location.id)}
                      selected={selectedLocation.id === location.id}
                    />
                  ))
                ) : (
                  <div className="border border-dashed border-zinc-300 p-5 text-base leading-tight text-zinc-600">
                    No hay medios para estos filtros. Ajuste la búsqueda o limpie
                    los filtros para ver más opciones.
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 3, Featured location */}
      <section className="overflow-hidden bg-publiex-blue-deep px-5 py-[clamp(4rem,6.25vw,7.5rem)] text-white md:px-10 lg:px-24">
        <div className="mx-auto max-w-393.5">
          <h2 className="max-w-300 font-raleway text-[clamp(2.4rem,5.4vw,4.965rem)] font-semibold leading-[1.04]">
            Encuentre el lugar donde su marca puede{" "}
            <span className="text-publiex-red">generar impacto.</span>
          </h2>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div className="relative min-h-[clamp(30rem,33.3vw,40rem)] overflow-hidden bg-black">
              <img
                alt={selectedLocation.imageAlt}
                className="absolute inset-0 size-full object-cover opacity-65"
                src={selectedLocation.image}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative flex min-h-[clamp(30rem,33.3vw,40rem)] flex-col items-center justify-center px-6 text-center">
                <p className="font-raleway text-[clamp(1.8rem,3.5vw,2.75rem)] font-bold">
                  Su campaña aparecerá aquí
                </p>
                <p className="mt-3 font-raleway text-base opacity-80 md:text-lg">
                  Previsualización conceptual para evaluar presencia y lectura.
                </p>
              </div>
            </div>
            <aside>
              <p className="font-raleway text-sm font-bold uppercase text-publiex-blue md:text-2xl">
                {selectedLocation.code} · {selectedLocation.category}
              </p>
              <h3 className="mt-4 font-raleway text-[clamp(2.7rem,5.4vw,4.965rem)] font-bold leading-[1.04]">
                {selectedLocation.title}
              </h3>
              <div className="mt-8 border-y border-white/35 py-5 font-raleway text-base uppercase leading-8 md:text-lg">
                <p>Formato: {selectedLocation.category.toLowerCase()}</p>
                <p>Contexto: {selectedLocation.context}</p>
                <p>Lectura: {selectedLocation.reading}</p>
              </div>
              <div className="mt-8 flex flex-col items-start gap-5">
                <LocationButton href="/contact">
                  Agregar y solicitar propuestas
                </LocationButton>
                <LocationButton href="/contact" variant="underline">
                  Solicitar apoyo creativo
                </LocationButton>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 4, Selection summary */}
      <section className="overflow-hidden bg-publiex-muted-section px-5 py-[clamp(4rem,6.25vw,7.5rem)] md:px-10 lg:px-24">
        <div className="mx-auto max-w-393.5">
          <p className="font-raleway text-sm font-bold uppercase md:text-2xl">
            Mi selección
          </p>
          <h2 className="mt-8 max-w-313 font-raleway text-[clamp(2.4rem,5.4vw,4.965rem)] font-semibold leading-[1.04]">
            Construya un plan preliminar y{" "}
            <span className="text-publiex-red">
              deje que Publiex haga el resto.
            </span>
          </h2>
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-start xl:px-40">
            <article className="bg-white shadow-sm">
              <img
                alt={selectedLocation.imageAlt}
                className="h-37 w-full object-cover object-center"
                src={selectedLocation.image}
              />
              <div className="p-4 font-raleway">
                <p className="text-sm font-bold uppercase text-publiex-blue">
                  {selectedLocation.code}
                </p>
                <h3 className="mt-2 text-xl font-bold leading-tight">
                  {selectedLocation.title}
                </h3>
                <p className="mt-2 text-base leading-tight text-zinc-600">
                  {selectedLocation.category} para revisión preliminar.
                </p>
              </div>
            </article>
            <div className="overflow-hidden bg-white shadow-sm">
              <img
                alt="Formulario preliminar para solicitar propuesta Publiex"
                className="w-full object-cover"
                src={publiexAsset("locations-selection-form.png")}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

