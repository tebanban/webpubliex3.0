import { publiexAsset } from "@/lib/assets";

const formatTabs = [
  ["Gran formato", "#gran-formato"],
  ["Mobiliario urbano", "#mobiliario-urbano"],
  ["Publicidad en movimiento", "#movimiento"],
  ["DOOH", "#dooh"],
  ["Proyectos especiales", "#proyectos-especiales"],
];

const productGroups = [
  {
    id: "gran-formato",
    eyebrow: "Gran formato",
    title: "Escala para dominar rutas, zonas y ciudades.",
    redTitle: "rutas, zonas y ciudades.",
    products: [
      {
        title: "Vallas Unipolares",
        image: "products-vallas-unipolares.png",
        badge: "Presencia permanente",
        description:
          "Activos de gran formato ubicados en rutas de alto tránsito para mantener a la marca visible de forma sostenida.",
        benefits: [
          "Cobertura estratégica",
          "Lectura a distancia",
          "Recordación sostenida",
        ],
        bestFor:
          "Notoriedad, lanzamientos, retail, automotriz, banca, consumo masivo e instituciones.",
        difference:
          "Equilibran escala, permanencia y distribución geográfica sin depender de un único punto.",
        overlayTitle: "Impacto más allá del centro urbano.",
        overlayCopy:
          "Una presencia clara en rutas interurbanas amplía la cobertura y acompaña viajes de mayor duración.",
        tags: [
          "Visibilidad en ruta",
          "Cobertura estratégica",
          "Alcance territorial",
          "Presencia nocturna",
        ],
        link: "Alcance territorial",
      },
      {
        title: "Mega Landmarks",
        image: "products-mega-landmarks.png",
        badge: "Dominación visual",
        description:
          "Superficies excepcionales que transforman una ubicación premium en un territorio exclusivo para la marca.",
        benefits: [
          "Escala icónica",
          "Alta exclusividad",
          "Poder de referencia urbana",
        ],
        bestFor:
          "Lanzamientos insignia, marcas líderes, entretenimiento, tecnología, telecomunicaciones y reputación corporativa.",
        difference:
          "No solo ocupan un espacio: cambian la lectura del entorno y pueden convertirse en puntos de referencia.",
        overlayTitle: "Escala para comunicar en segundos.",
        overlayCopy:
          "Un frente amplio favorece mensajes simples, productos visibles y una lectura clara en movimiento.",
        tags: ["Escala icónica", "Dominación de zona", "Lectura inmediata"],
        link: "Explorar ubicaciones landmark",
      },
    ],
  },
  {
    id: "mobiliario-urbano",
    eyebrow: "Mobiliario urbano",
    title: "Continuidad de marca a escala humana.",
    redTitle: "Continuidad de marca",
    products: [
      {
        title: "Circuitos Rotativos",
        image: "products-circuitos-rotativos.png",
        badge: "Cobertura multiplicada",
        description:
          "Redes de ubicaciones que conectan distintos momentos del recorrido para construir frecuencia y alcance.",
        benefits: [
          "Secuencia visual",
          "Cobertura por zona",
          "Frecuencia sostenida",
        ],
        bestFor:
          "Campañas de alcance, promociones, aperturas, eventos, educación y consumo masivo.",
        difference:
          "Convierte varias ubicaciones en un sistema coordinado, en lugar de concentrar todo el impacto en un solo activo.",
        overlayTitle: "Varias piezas. Una sola historia de marca.",
        overlayCopy:
          "La marca aparece en distintos puntos del trayecto y refuerza el mensaje por repetición contextual.",
        tags: ["Cobertura multiplicada", "Secuencia", "Frecuencia"],
        link: "Diseñar circuito",
      },
      {
        title: "Banner Posts",
        image: "figma-urban-furniture.jpeg",
        badge: "Presencia secuencial",
        description:
          "Piezas de alto recorrido visual instaladas en avenidas, rotondas y rutas urbanas estratégicas.",
        benefits: ["Frecuencia", "Continuidad", "Escala urbana"],
        bestFor:
          "Marcas que necesitan repetición visible en recorridos cotidianos y corredores comerciales.",
        difference:
          "Transforma una ruta completa en una secuencia de marca, no en un único impacto aislado.",
        overlayTitle: "Una avenida completa hablando de su marca.",
        overlayCopy:
          "Cada punto suma continuidad y refuerza la presencia durante el trayecto urbano.",
        tags: ["Continuidad", "Frecuencia", "Recorrido"],
        link: "Explorar banner posts",
      },
      {
        title: "Puentes y formatos urbanos",
        image: "products-puentes-formatos-urbanos.png",
        badge: "Integración urbana",
        description:
          "Formatos que aprovechan infraestructura de alto tránsito para integrarse al paisaje cotidiano.",
        benefits: ["Puntos de paso", "Lectura frontal", "Presencia diaria"],
        bestFor:
          "Retail, servicios, educación, tecnología, consumo masivo y comunicación institucional.",
        difference:
          "Aprovecha estructuras urbanas existentes para aparecer en momentos naturales del recorrido.",
        overlayTitle: "Presencia integrada al trayecto cotidiano.",
        overlayCopy:
          "El mensaje acompaña movimientos diarios con ubicaciones familiares para la audiencia.",
        tags: ["Puentes", "Urbano", "Trayecto"],
        link: "Ver formatos urbanos",
      },
    ],
  },
  {
    id: "movimiento",
    eyebrow: "Publicidad en movimiento",
    title: "Una marca que acompaña la vida cotidiana.",
    redTitle: "vida cotidiana.",
    products: [
      {
        title: "Trenes",
        image: "products-trenes.png",
        badge: "Movimiento + permanencia",
        description:
          "Dominación exterior e interior para acompañar recorridos urbanos con múltiples momentos de contacto.",
        benefits: [
          "Alcance urbano",
          "Frecuencia diaria",
          "Experiencia interior",
        ],
        bestFor:
          "Consumo masivo, entretenimiento, educación, tecnología, retail y campañas de alto alcance.",
        difference:
          "La marca viaja con la audiencia y permanece visible tanto en estaciones como durante el recorrido.",
        overlayTitle: "Acompaña a la ciudad mientras avanza.",
        overlayCopy:
          "El transporte permite presencia móvil, repetida y cercana a rutinas reales de movilidad.",
        tags: ["Movilidad", "Cobertura", "Contacto diario"],
        link: "Planificar campaña en trenes",
      },
    ],
  },
  {
    id: "dooh",
    eyebrow: "DOOH",
    title: "Contenido flexible para una ciudad en movimiento.",
    redTitle: "Contenido flexible",
    products: [
      {
        title: "Pantallas Digitales",
        image: "figma-dooh-raw-1.jpeg",
        badge: "Agilidad + iluminación",
        description:
          "Pantallas de alta visibilidad que permiten alternar piezas, actualizar mensajes y aprovechar el movimiento creativo.",
        benefits: [
          "Contenido dinámico",
          "Actualización ágil",
          "Presencia diurna y nocturna",
        ],
        bestFor:
          "Promociones, entretenimiento, retail, delivery, tecnología, eventos y campañas con múltiples mensajes.",
        difference:
          "Reduce la rigidez creativa de una pieza única y permite construir secuencias o adaptar contenidos.",
        overlayTitle: "Mensajes que pueden cambiar con la campaña.",
        overlayCopy:
          "DOOH aporta iluminación, movimiento creativo y agilidad para alternar piezas durante el periodo contratado.",
        tags: ["Contenido dinámico", "Actualización ágil", "Iluminación"],
        link: "Planificar una campaña DOOH",
      },
    ],
  },
  {
    id: "proyectos-especiales",
    eyebrow: "Proyectos especiales",
    title: "Ideas diseñadas para convertirse en conversación.",
    redTitle: "convertirse en conversación.",
    products: [
      {
        title: "Innovaciones a la medida",
        image: "products-proyectos-especiales.png",
        badge: "Movimiento + permanencia",
        description:
          "Salientes, volumétricos, sobrepuestos, iluminación LED y desarrollos creativos que modifican el soporte para amplificar una idea.",
        benefits: [
          "Ruptura visual",
          "Potencial de conversación",
          "Ejecución distintiva",
        ],
        bestFor:
          "Lanzamientos, ediciones especiales, entretenimiento, automotriz, tecnología y marcas que buscan notoriedad cultural.",
        difference:
          "La solución se diseña desde el concepto creativo y no desde las limitaciones de un formato estándar.",
        overlayTitle: "Cuando la creatividad sale del plano.",
        overlayCopy:
          "Los elementos salientes transforman un gran formato en una ejecución con mayor capacidad de sorpresa.",
        tags: ["Ruptura visual", "Diseño a la medida", "Impacto lumínico"],
        link: "Crear un proyecto especial",
      },
    ],
  },
];

const campaignSystems = [
  {
    title: "Lanzamiento visible",
    copy: "Mega landmark + DOOH + circuito urbano para sumar notoriedad, agilidad y repetición.",
  },
  {
    title: "Dominio de corredor",
    copy: "Landmark + vallas de aproximación + banner posts para construir una secuencia completa.",
  },
  {
    title: "Movilidad cotidiana",
    copy: "Tren exterior + experiencia interior + mobiliario urbano para acompañar distintos momentos del trayecto.",
  },
];

type Product = (typeof productGroups)[number]["products"][number];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white p-5 shadow-sm md:p-8 xl:p-16">
      {/* Product summary */}
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.72fr_0.9fr]">
        <div>
          <p className="font-raleway text-sm font-bold uppercase text-publiex-red md:text-xl">
            {product.badge}
          </p>
          <h3 className="mt-5 font-raleway text-[clamp(2.2rem,4.6vw,4.85rem)] font-semibold leading-[0.996]">
            {product.title}
          </h3>
          <p className="mt-6 max-w-157 font-raleway text-lg leading-tight md:text-xl">
            {product.description}
          </p>
        </div>
        <div>
          <p className="font-raleway text-sm font-extrabold uppercase">
            Beneficios principales
          </p>
          <ul className="mt-4 list-disc pl-5 font-raleway text-lg leading-9 md:text-xl">
            {product.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="font-raleway text-lg leading-tight md:text-xl">
          <p className="font-extrabold uppercase text-sm">
            Funciona mejor para
          </p>
          <p className="mt-4">{product.bestFor}</p>
          <p className="mt-8 font-extrabold uppercase text-sm">
            Qué lo diferencia
          </p>
          <p className="mt-4">{product.difference}</p>
        </div>
      </div>

      {/* Product image feature */}
      <div className="relative mt-10 min-h-120 overflow-hidden text-white md:min-h-160 xl:min-h-205.5">
        <img
          alt={product.title}
          className="absolute inset-0 size-full object-cover"
          src={publiexAsset(product.image)}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/35 to-black/85" />
        <div className="relative flex min-h-120 flex-col justify-end p-6 md:min-h-160 md:p-10 xl:min-h-205.5 xl:p-13">
          <p className="font-raleway text-xl font-extrabold uppercase">
            {product.tags[0]}
          </p>
          <h4 className="mt-8 max-w-265 font-raleway text-[clamp(2rem,5vw,4.85rem)] font-semibold leading-[0.996]">
            {product.overlayTitle}
          </h4>
          <p className="mt-8 max-w-157 font-raleway text-lg leading-tight md:text-xl">
            {product.overlayCopy}
          </p>
          <div className="mt-8 h-1 w-full bg-white/45">
            <div className="h-full w-1/4 bg-publiex-red" />
          </div>
          <div className="mt-6 flex flex-wrap gap-x-12 gap-y-3 font-raleway text-sm font-bold uppercase md:text-xl">
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a
            className="mt-8 w-fit font-raleway text-sm font-extrabold uppercase text-[#0f62e7] transition hover:text-white md:text-xl"
            href="/#contacto"
          >
            {product.link}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section
        className="relative min-h-210 overflow-hidden text-white xl:min-h-249"
        id="inicio"
      >
        <img
          alt="Valla Publiex en carretera"
          className="absolute inset-0 size-full object-cover"
          src={publiexAsset("products-hero.png")}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/35 to-black/80" />
        <div className="relative mx-auto flex min-h-210 w-full max-w-480 flex-col items-center justify-end px-5 pb-25 text-center md:px-10 xl:min-h-249">
          <h1 className="max-w-350 font-raleway text-[clamp(2.7rem,5.4vw,4.85rem)] font-extrabold uppercase leading-[0.996]">
            No elija un formato.
            <span className="block">Elija lo que quiere lograr.</span>
          </h1>
          <p className="mt-8 max-w-240 font-raleway text-xl leading-tight md:text-[31.44px]">
            Publiex integra escala, frecuencia, movimiento, tecnología y
            creatividad para construir la presencia que necesita cada marca.
          </p>
        </div>
        <nav className="absolute inset-x-0 bottom-0 bg-publiex-blue/95 px-5 py-5 md:px-10">
          <div className="mx-auto flex max-w-380 flex-wrap justify-center gap-x-12 gap-y-3 font-raleway text-sm font-semibold uppercase md:text-[26.44px]">
            {formatTabs.map(([label, href]) => (
              <a
                className="transition hover:text-white/70"
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </section>

      {/* Product families */}
      {productGroups.map((group) => (
        <section
          className="overflow-hidden bg-[#e9e9e9] px-5 py-16 md:px-10 lg:px-24 xl:py-30"
          id={group.id}
          key={group.id}
        >
          <div className="mx-auto max-w-393.5">
            <p className="font-raleway text-sm font-bold uppercase md:text-xl">
              {group.eyebrow}
            </p>
            <h2 className="mt-8 max-w-300 font-raleway text-[clamp(2.4rem,5.4vw,4.85rem)] font-semibold leading-[0.996]">
              {group.title.includes(group.redTitle) ? (
                <>
                  {group.title.replace(group.redTitle, "")}
                  <span className="text-publiex-red">{group.redTitle}</span>
                </>
              ) : (
                group.title
              )}
            </h2>
            <div className="mt-12 grid gap-12 xl:gap-17.5">
              {group.products.map((product) => (
                <ProductCard key={product.title} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Campaign architecture */}
      <section className="overflow-hidden bg-publiex-gradient px-5 py-16 text-white md:px-10 lg:px-24 xl:py-30">
        <div className="mx-auto max-w-393.5">
          <p className="font-raleway text-sm font-bold uppercase md:text-xl">
            Arquitectura de campaña
          </p>
          <h2 className="mt-8 max-w-295 font-raleway text-[clamp(2.4rem,5.4vw,4.85rem)] font-semibold leading-[0.996]">
            Un formato genera presencia.
            <span className="block">Un sistema genera dominio.</span>
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3 xl:gap-36">
            {campaignSystems.map((system) => (
              <article
                className="flex min-h-91.5 flex-col items-center justify-center border-4 border-white p-8 text-center"
                key={system.title}
              >
                <h3 className="font-raleway text-[clamp(1.8rem,3vw,2.85rem)] font-black leading-none">
                  {system.title}
                </h3>
                <p className="mt-10 font-raleway text-xl leading-tight md:text-[30px]">
                  {system.copy}
                </p>
              </article>
            ))}
          </div>
          <a
            className="mt-16 inline-flex min-h-20.75 items-center bg-white px-8 font-raleway text-xl font-semibold uppercase text-black transition hover:bg-zinc-100 md:text-[30px]"
            href="/#contacto"
          >
            Recibir una combinación recomendada
          </a>
        </div>
      </section>
    </main>
  );
}
