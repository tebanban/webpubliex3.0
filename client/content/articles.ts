// Shared editorial content powers previews and individual article routes.
export interface Article {
  id: string;
  category: string;
  date: string;
  publishedAt: string;
  title: string;
  description: string;
  image: string;
  heroImage?: string;
  imageAlt: string;
  intro: string;
  paragraphs: string[];
  quote: string;
}

export const articles: Article[] = [
  {
    id: "publicidad-en-movimiento",
    category: "Innovación",
    date: "5 agosto 2026",
    publishedAt: "2026-08-05",
    title:
      "Publicidad en movimiento: cómo acompañar a la audiencia durante su recorrido",
    description:
      "Una mirada a las posibilidades de integrar presencia exterior, experiencias interiores y frecuencia urbana.",
    image: "article-publicidad-en-movimiento.png",
    heroImage: "article-publicidad-en-movimiento.png",
    imageAlt: "Tren con publicidad exterior al atardecer",
    intro:
      "La movilidad permite que una marca conecte con la audiencia en distintos momentos, dentro y fuera del trayecto.",
    paragraphs: [
      "La publicidad en movimiento amplía la lógica tradicional del soporte fijo. En lugar de esperar a que la audiencia llegue a un punto, la marca se integra a recorridos cotidianos y suma contactos en contextos de traslado.",
      "Una estrategia puede combinar presencia exterior para alcance, formatos interiores para atención prolongada y recursos de audio o experiencias para reforzar el mensaje. La elección depende del objetivo, la ruta, la duración y el papel que el medio desempeña dentro del plan general.",
      "El valor no está únicamente en cubrir un vehículo. Está en diseñar una secuencia coherente: cómo se descubre la campaña, cómo se reconoce durante el viaje y cómo se conecta con otros puntos de contacto urbanos.",
    ],
    quote:
      "Una buena decisión de OOH comienza por definir qué debe lograr la marca en la vida real.",
  },
  {
    id: "dominacion-visual",
    category: "Insights OOH",
    date: "30 julio 2026",
    publishedAt: "2026-07-30",
    title:
      "De visibilidad a dominación visual: cuándo una ubicación se convierte en territorio de marca",
    description:
      "La escala funciona mejor cuando se combina con contexto, continuidad y una idea creativa clara.",
    image: "actualidad-insights-ooh.webp",
    imageAlt: "Publicidad exterior de gran formato en un entorno urbano",
    intro:
      "La escala funciona mejor cuando se combina con contexto, continuidad y una idea creativa clara.",
    paragraphs: [
      "Una ubicación de gran formato no se evalúa solo por sus dimensiones. La aproximación, el ángulo de lectura, el entorno, el flujo y la posibilidad de extender visualmente la idea determinan su verdadero potencial.",
      "Los mega landmarks pueden convertir una estructura en referencia urbana. Las vallas de aproximación y los circuitos complementarios ayudan a construir anticipación, frecuencia y continuidad alrededor del punto dominante.",
      "La planificación debe comenzar por el objetivo de campaña y no por el formato aislado. Cuando cada pieza cumple un papel, la marca deja de ocupar un soporte y empieza a apropiarse del recorrido.",
    ],
    quote: "La escala gana atención cuando está al servicio de una idea clara.",
  },
  // Draft article bodies extend the existing previews until final editorial copy is supplied.
  {
    id: "medir-antes-de-comunicar",
    category: "Sostenibilidad",
    date: "24 julio 2026",
    publishedAt: "2026-07-24",
    title:
      "Medir antes de comunicar: una ruta responsable para la sostenibilidad en OOH",
    description:
      "La credibilidad comienza con una línea base, una metodología y evidencia que pueda explicarse.",
    image: "actualidad-sostenibilidad.webp",
    imageAlt: "Soporte de publicidad exterior integrado a su entorno",
    intro:
      "La credibilidad comienza con una línea base, una metodología y evidencia que pueda explicarse.",
    paragraphs: [
      "Los compromisos ambientales y sociales adquieren valor cuando pueden demostrarse. Antes de publicar porcentajes o metas, una empresa debe definir qué mide, durante qué periodo, con qué fuente y quién valida el resultado.",
      "En publicidad exterior, una línea base puede incluir materiales utilizados y recuperados, destino final, consumo energético, mantenimiento, seguridad ocupacional, empleo, compras nacionales y participación comunitaria.",
      "El siguiente paso es asignar responsables, periodicidad y controles. Solo entonces las cifras pueden convertirse en indicadores públicos claros, comparables y útiles para clientes, aliados y comunidades.",
    ],
    quote:
      "La confianza se construye con información que puede explicarse y verificarse.",
  },
  {
    id: "circuitos-urbanos",
    category: "Educación OOH",
    date: "18 julio 2026",
    publishedAt: "2026-07-18",
    title:
      "Circuitos urbanos: por qué la repetición convierte un recorrido en una experiencia de marca",
    description:
      "Una perspectiva práctica para transformar objetivos de campaña en decisiones de medios.",
    image: "actualidad-educacion.png",
    imageAlt: "Publicidad en un corredor urbano",
    intro:
      "Una perspectiva práctica para transformar objetivos de campaña en decisiones de medios.",
    paragraphs: [
      "La publicidad exterior combina ubicación, formato, contexto y frecuencia. Su capacidad para construir presencia depende de cómo se articulan esas variables alrededor de un objetivo concreto.",
      "Cada campaña requiere una arquitectura distinta. Publiex acompaña ese proceso con criterio estratégico, conocimiento operativo y soluciones adaptadas a cada marca.",
    ],
    quote: "Cada punto del recorrido debe sumar a la misma historia de marca.",
  },
  {
    id: "creatividad-transforma-formato",
    category: "Casos y campañas",
    date: "10 julio 2026",
    publishedAt: "2026-07-10",
    title: "Cuando la creatividad transforma el formato",
    description:
      "El soporte puede formar parte de la idea cuando la creatividad considera el espacio y su contexto.",
    image: "actualidad-casos.jpg",
    imageAlt:
      "Ejecución creativa de publicidad exterior con elementos especiales",
    intro:
      "El soporte puede formar parte de la idea cuando la creatividad considera el espacio y su contexto.",
    paragraphs: [
      "La publicidad exterior combina ubicación, formato, contexto y frecuencia. Su capacidad para construir presencia depende de cómo se articulan esas variables alrededor de un objetivo concreto.",
      "Cada campaña requiere una arquitectura distinta. Publiex acompaña ese proceso con criterio estratégico, conocimiento operativo y soluciones adaptadas a cada marca.",
    ],
    quote:
      "Una ejecución memorable conecta la forma del soporte con el mensaje.",
  },
  {
    id: "dooh-flexibilidad-creativa",
    category: "Innovación",
    date: "2 julio 2026",
    publishedAt: "2026-07-02",
    title: "DOOH: flexibilidad creativa para una ciudad que cambia",
    description:
      "Una perspectiva práctica para transformar objetivos de campaña en decisiones de medios.",
    image: "actualidad-innovacion.jpeg",
    imageAlt: "Pantalla digital de publicidad exterior",
    intro:
      "Una perspectiva práctica para transformar objetivos de campaña en decisiones de medios.",
    paragraphs: [
      "La publicidad exterior combina ubicación, formato, contexto y frecuencia. Su capacidad para construir presencia depende de cómo se articulan esas variables alrededor de un objetivo concreto.",
      "Cada campaña requiere una arquitectura distinta. Publiex acompaña ese proceso con criterio estratégico, conocimiento operativo y soluciones adaptadas a cada marca.",
    ],
    quote:
      "La flexibilidad del medio aporta valor cuando cada cambio tiene un propósito.",
  },
];
