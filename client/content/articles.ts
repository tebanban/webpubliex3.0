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
    image: "actualidad-raw-02.jpeg",
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
  // Draft article bodies extend the existing previews until final editorial copy is supplied.
  {
    id: "dominacion-visual",
    category: "Insights OOH",
    date: "30 julio 2026",
    publishedAt: "2026-07-30",
    title:
      "De visibilidad a dominación visual: cuándo una ubicación se convierte en territorio de marca",
    description:
      "Escala, contexto, continuidad y creatividad: cuatro variables para planificar gran formato con intención.",
    image: "actualidad-raw-03.jpeg",
    imageAlt: "Publicidad exterior de gran formato en un entorno urbano",
    intro:
      "Una ubicación puede hacer visible un mensaje y también convertirse en una referencia para la marca.",
    paragraphs: [
      "La dominación visual comienza por comprender el entorno. La escala del soporte, los accesos y la distancia de lectura determinan cómo se descubre un mensaje y cuánto espacio tiene para comunicar su idea.",
      "Una pieza de gran formato necesita una jerarquía clara: una idea principal, una marca reconocible y un contraste que facilite la lectura. Cada elemento debe aportar al objetivo de la campaña.",
      "La ubicación se convierte en territorio de marca cuando el formato, el mensaje y el contexto trabajan juntos. Planificar esa relación permite elegir entre una presencia puntual y una secuencia de contactos en rutas complementarias.",
    ],
    quote: "La escala gana atención cuando está al servicio de una idea clara.",
  },
  {
    id: "medir-antes-de-comunicar",
    category: "Sostenibilidad",
    date: "24 julio 2026",
    publishedAt: "2026-07-24",
    title:
      "Medir antes de comunicar: una ruta responsable para la sostenibilidad en OOH",
    description:
      "Qué información debe documentar una empresa de publicidad exterior para construir indicadores verificables.",
    image: "actualidad-raw-05.jpeg",
    imageAlt: "Soporte de publicidad exterior integrado a su entorno",
    intro:
      "Una comunicación responsable sobre sostenibilidad empieza por documentar las decisiones y sus resultados.",
    paragraphs: [
      "Antes de comunicar un compromiso ambiental, conviene definir qué se está midiendo. Los materiales, el consumo de energía, el mantenimiento y el destino de las piezas al terminar una campaña son aspectos que requieren información específica.",
      "Un registro útil identifica el alcance, el periodo y la fuente de cada dato. También distingue entre acciones ejecutadas, objetivos futuros y resultados verificados, para que el mensaje refleje lo que realmente puede demostrarse.",
      "Pedir esta información desde la planificación facilita conversaciones más claras entre la marca, sus proveedores y el equipo creativo. La transparencia permite comunicar avances con información documentada.",
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
      "La continuidad visual ayuda a construir frecuencia y recordación a lo largo de corredores estratégicos.",
    image: "actualidad-raw-13.jpeg",
    imageAlt: "Publicidad en un corredor urbano",
    intro:
      "Los circuitos conectan distintos puntos de la ciudad para que un mensaje acompañe los recorridos cotidianos.",
    paragraphs: [
      "Un circuito urbano organiza varias ubicaciones alrededor de un objetivo de comunicación. Su valor depende de cómo los puntos se relacionan con las rutas de la audiencia y de la coherencia del mensaje entre una pieza y otra.",
      "La repetición puede ayudar a reconocer una campaña, mientras que pequeñas variaciones creativas permiten desarrollar una misma idea. Mantener la identidad visual y una lectura sencilla facilita que cada contacto forme parte de una historia común.",
      "Para planificar el circuito, es útil definir las zonas prioritarias, los momentos de contacto y la duración de la campaña. Así, la selección de soportes responde a un recorrido concreto y a la función que cada ubicación debe cumplir.",
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
      "Volumetría, iluminación y elementos salientes pueden convertir el medio en parte de la idea.",
    image: "actualidad-raw-15.png",
    imageAlt:
      "Ejecución creativa de publicidad exterior con elementos especiales",
    intro:
      "El soporte puede formar parte de la idea cuando la creatividad considera el espacio y su contexto.",
    paragraphs: [
      "Una campaña exterior puede explorar elementos que amplíen la superficie convencional: volumetría, salientes, sobrepuestos o iluminación. La decisión creativa empieza por identificar qué recurso ayuda a expresar mejor la idea de la marca.",
      "El desarrollo requiere coordinar diseño y ejecución. Las características de la ubicación, la visibilidad y las condiciones técnicas deben revisarse antes de definir la propuesta final, para que la pieza pueda leerse con claridad en su entorno.",
      "Una intervención especial funciona mejor cuando el recurso visual tiene una relación directa con el mensaje. El objetivo es que el formato refuerce la campaña y convierta la atención inicial en reconocimiento de marca.",
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
      "Contenido dinámico, iluminación y actualización ágil para campañas con mayor capacidad de adaptación.",
    image: "actualidad-raw-16.jpeg",
    imageAlt: "Pantalla digital de publicidad exterior",
    intro:
      "Las pantallas digitales permiten adaptar el contenido y explorar nuevas formas de comunicar en el exterior.",
    paragraphs: [
      "DOOH incorpora contenido digital a la publicidad exterior. Una pantalla puede alternar piezas y actualizar mensajes durante una campaña, según las condiciones acordadas para cada soporte.",
      "La flexibilidad creativa necesita una planificación clara. Conviene definir qué mensajes se alternarán, cómo se reconocerá la marca y qué papel tendrá el movimiento, sin perder de vista que la audiencia puede disponer de pocos segundos para leer.",
      "La selección del formato debe considerar la ubicación, el contexto y el objetivo. Una propuesta eficaz combina una idea sencilla con recursos digitales que aporten al mensaje y una revisión previa de las posibilidades de ejecución.",
    ],
    quote:
      "La flexibilidad del medio aporta valor cuando cada cambio tiene un propósito.",
  },
];
