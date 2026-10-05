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

export const categoryStyles: Record<LocationCategory, string> = {
  "Valla unipolar": "bg-[#2859c7]",
  "Mega landmark": "bg-publiex-red",
  "Circuito rotativo": "bg-[#3f2b78]",
  DOOH: "bg-[#4597bf]",
  Trenes: "bg-[#3d8b62]",
};

// Public sample inventory for the interactive map preview.
export const publiexLocations: PubliexLocation[] = [
  {
    id: "sabana-corredor",
    code: "SJ · Muestra 01",
    title: "Sabana · corredor urbano",
    province: "San José",
    solution: "Vallas Unipolares",
    objective: "Cobertura metropolitana",
    category: "Valla unipolar",
    description:
      "Presencia sostenida en un corredor metropolitano de alta actividad.",
    context: "ruta urbana de alto tránsito",
    reading: "vehicular y peatonal",
    image: publiexAsset("Locations-campaign2.png"),
    imageAlt: "Vista nocturna de valla unipolar en corredor urbano",
    position: { lat: 9.9365, lng: -84.1069 },
    illuminated: true,
  },
  {
    id: "escazu-impacto",
    code: "SJ · Muestra 02",
    title: "Escazú · alto impacto",
    province: "San José",
    solution: "Mega Landmarks",
    objective: "Lanzamiento premium",
    category: "Mega landmark",
    description:
      "Escala y exclusividad para convertir el entorno en territorio de marca.",
    context: "corredor comercial de alto perfil",
    reading: "vehicular de larga distancia",
    image: publiexAsset("locations-selection-thumb.png"),
    imageAlt: "Mega landmark en carretera para muestra de inventario",
    position: { lat: 9.9328, lng: -84.1393 },
    illuminated: true,
  },
  {
    id: "alajuela-aeropuerto",
    code: "AL · Muestra 03",
    title: "Aeropuerto · entrada país",
    province: "Alajuela",
    solution: "Pantallas Digitales",
    objective: "Awareness turístico",
    category: "DOOH",
    description:
      "Visibilidad para audiencias en tránsito entre aeropuerto, hoteles y centros de negocio.",
    context: "ruta de acceso aeroportuario",
    reading: "vehicular y pasajero",
    image: publiexAsset("locations-selection-thumb.png"),
    imageAlt: "Pantalla digital en corredor aeroportuario",
    position: { lat: 9.9982, lng: -84.2041 },
    illuminated: true,
  },
  {
    id: "cartago-industrial",
    code: "CA · Muestra 04",
    title: "Cartago · corredor industrial",
    province: "Cartago",
    solution: "Circuitos Rotativos",
    objective: "Frecuencia regional",
    category: "Circuito rotativo",
    description:
      "Circuito pensado para reforzar mensajes de marca en viajes recurrentes.",
    context: "zona industrial y universitaria",
    reading: "vehicular",
    image: publiexAsset("Locations-campaign2.png"),
    imageAlt: "Circuito rotativo en corredor industrial",
    position: { lat: 9.8644, lng: -83.9194 },
    illuminated: false,
  },
  {
    id: "heredia-centro",
    code: "HE · Muestra 05",
    title: "Heredia · centro activo",
    province: "Heredia",
    solution: "Banner Post",
    objective: "Cobertura metropolitana",
    category: "Valla unipolar",
    description:
      "Formato urbano para acompañar recorridos diarios y puntos de decisión local.",
    context: "centro urbano de alta permanencia",
    reading: "peatonal y vehicular",
    image: publiexAsset("locations-selection-thumb.png"),
    imageAlt: "Banner post en centro urbano",
    position: { lat: 9.9985, lng: -84.1165 },
    illuminated: false,
  },
  {
    id: "guanacaste-playas",
    code: "GU · Muestra 06",
    title: "Liberia · ruta a playas",
    province: "Guanacaste",
    solution: "Vallas Unipolares",
    objective: "Awareness turístico",
    category: "Valla unipolar",
    description:
      "Cobertura estratégica para turistas y residentes en rutas de alto flujo estacional.",
    context: "carretera interprovincial",
    reading: "vehicular",
    image: publiexAsset("Locations-campaign2.png"),
    imageAlt: "Valla unipolar en carretera hacia playas",
    position: { lat: 10.6346, lng: -85.4407 },
    illuminated: true,
  },
  {
    id: "puntarenas-puerto",
    code: "PU · Muestra 07",
    title: "Puntarenas · acceso portuario",
    province: "Puntarenas",
    solution: "Puentes y formatos urbanos",
    objective: "Frecuencia regional",
    category: "Mega landmark",
    description:
      "Punto de referencia para campañas con presencia en el Pacífico central.",
    context: "acceso urbano y portuario",
    reading: "vehicular",
    image: publiexAsset("locations-selection-thumb.png"),
    imageAlt: "Formato urbano en acceso portuario",
    position: { lat: 9.9763, lng: -84.8384 },
    illuminated: false,
  },
  {
    id: "limon-logistica",
    code: "LI · Muestra 08",
    title: "Limón · eje logístico",
    province: "Limón",
    solution: "Trenes",
    objective: "Awareness turístico",
    category: "Trenes",
    description:
      "Presencia móvil para amplificar mensajes en rutas logísticas y urbanas.",
    context: "corredor logístico del Caribe",
    reading: "peatonal, vehicular y pasajero",
    image: publiexAsset("Locations-campaign2.png"),
    imageAlt: "Formato de tren para corredor logístico",
    position: { lat: 9.9916, lng: -83.0334 },
    illuminated: false,
  },
];

