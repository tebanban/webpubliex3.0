import rawLocations from "@/content/publiex-locations.json";
import { publiexAsset } from "@/lib/assets";

export type LocationCategory =
  | "Valla unipolar"
  | "Mega landmark"
  | "Circuito rotativo"
  | "DOOH"
  | "Trenes";

export type PubliexLocation = {
  id: string;
  code: string;
  title: string;
  province: string;
  solution: string;
  objective: string;
  category: LocationCategory;
  description: string;
  context: string;
  reading: string;
  image: string;
  imageAlt: string;
  position: google.maps.LatLngLiteral;
  illuminated: boolean;
};

type RawPubliexLocation = {
  id: string;
  code: string;
  name: string;
  province: string;
  position: google.maps.LatLngLiteral;
  address: string;
  faceDirection: string;
  backDirection: string;
  dimensions: string;
  area: string;
};

export const categoryStyles: Record<LocationCategory, string> = {
  "Valla unipolar": "bg-[#2859c7]",
  "Mega landmark": "bg-publiex-red",
  "Circuito rotativo": "bg-[#3f2b78]",
  DOOH: "bg-[#4597bf]",
  Trenes: "bg-[#3d8b62]",
};

function getLocationCategory(location: RawPubliexLocation): LocationCategory {
  return location.name.toLowerCase().includes("landmark")
    ? "Mega landmark"
    : "Valla unipolar";
}

function getLocationTitle(location: RawPubliexLocation) {
  const codePattern = new RegExp(`^${location.code}\\.?\\s*`, "i");

  return location.name.replace(codePattern, "").trim() || location.name;
}

function getLocationContext(location: RawPubliexLocation) {
  const details = [location.dimensions, location.area].filter(Boolean);

  return details.length ? details.join(" · ") : "Formato exterior";
}

function getLocationReading(location: RawPubliexLocation) {
  const directions = [location.faceDirection, location.backDirection].filter(
    Boolean,
  );

  return directions.length ? directions.join(" / ") : "Lectura vehicular";
}

// Excel inventory mapped into the UI and Google Maps data model.
export const publiexLocations: PubliexLocation[] = (
  rawLocations as RawPubliexLocation[]
).map((location) => {
  const category = getLocationCategory(location);
  const image =
    category === "Mega landmark"
      ? publiexAsset("locations-selection-thumb.png")
      : publiexAsset("Locations-campaign2.png");

  return {
    id: location.id,
    code: location.code,
    title: getLocationTitle(location),
    province: location.province,
    solution: category === "Mega landmark" ? "Mega Landmarks" : "Vallas Unipolares",
    objective: "Cobertura exterior",
    category,
    description: location.address || location.name,
    context: getLocationContext(location),
    reading: getLocationReading(location),
    image,
    imageAlt: `${category} Publiex ${location.code}`,
    position: location.position,
    illuminated: false,
  };
});

