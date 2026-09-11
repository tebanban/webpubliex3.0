import { publiexAsset } from "@/lib/assets";

const caseStudies = [
  {
    category: "Landmark",
    title: "Una presencia que se convirtió en punto de referencia",
    image: "cases-landmark.png",
    imageLayout: "top",
    body: [
      "Una ubicación dominante puede cambiar la forma en que una marca aparece en la ciudad. Este caso muestra cómo un formato de gran escala ayuda a construir recordación, lectura inmediata y presencia sostenida en un corredor de alto tránsito.",
      "La pieza fue pensada para verse rápido, mantenerse clara a distancia y convertirse en una referencia visual cotidiana. La combinación entre tamaño, ubicación y mensaje simple permitió que la campaña acompañara recorridos diarios sin depender de interrupciones digitales.",
    ],
  },
  {
    category: "Trenes",
    title: "Un lanzamiento que recorrió la GAM",
    image: "cases-train.png",
    imageLayout: "right",
    body: [
      "La publicidad en movimiento permite que una marca acompañe a las personas durante el trayecto. En este lanzamiento, el tren funcionó como una plataforma móvil capaz de multiplicar puntos de contacto y reforzar presencia en distintos momentos del día.",
      "La ejecución combinó impacto exterior con cercanía urbana, llevando el mensaje por rutas donde la audiencia se desplaza de forma recurrente. El resultado fue una campaña visible, reconocible y conectada con la movilidad real de la ciudad.",
    ],
  },
  {
    category: "DOOH",
    title: "Una pantalla que cambió con la ciudad",
    image: "figma-dooh-raw-1.jpeg",
    imageLayout: "top",
    body: [
      "Las pantallas digitales permiten adaptar mensajes sin perder presencia en calle. Este caso aprovecha contenido dinámico para mantener la campaña activa, flexible y alineada con distintos momentos de comunicación.",
      "El formato ayudó a alternar piezas, refrescar llamados y sostener impacto visual con iluminación y movimiento. Para marcas con varias prioridades de mensaje, DOOH reduce la rigidez de una sola pieza y abre espacio para secuencias creativas.",
    ],
  },
];

type CaseStudy = (typeof caseStudies)[number];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  if (study.imageLayout === "right") {
    return (
      <article className="grid overflow-hidden bg-white lg:grid-cols-[1fr_0.82fr]">
        {/* Case copy */}
        <div className="flex flex-col justify-center p-6 md:p-10 xl:p-16">
          <p className="font-raleway text-sm font-bold uppercase text-publiex-red md:text-xl">
            {study.category}
          </p>
          <h3 className="mt-5 max-w-160 font-raleway text-[clamp(2.3rem,5vw,5.45rem)] font-semibold leading-[1.04]">
            {study.title}
          </h3>
          <div className="mt-8 grid gap-5 font-raleway text-base leading-tight md:text-xl xl:text-2xl">
            {study.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <img
          alt={study.title}
          className="h-full min-h-120 w-full object-cover"
          src={publiexAsset(study.image)}
        />
      </article>
    );
  }

  return (
    <article className="overflow-hidden bg-white">
      {/* Case image */}
      <img
        alt={study.title}
        className="h-80 w-full object-cover md:h-120 xl:h-156"
        src={publiexAsset(study.image)}
      />
      <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[0.92fr_1.08fr] xl:p-16">
        <div>
          <p className="font-raleway text-sm font-bold uppercase text-publiex-red md:text-xl">
            {study.category}
          </p>
          <h3 className="mt-5 max-w-165 font-raleway text-[clamp(2.3rem,5vw,5.45rem)] font-semibold leading-[1.04]">
            {study.title}
          </h3>
        </div>
        <div className="grid gap-5 self-end font-raleway text-base leading-tight md:text-xl xl:text-2xl">
          {study.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function CaseStudiesPage() {
  return (
    <main className="bg-publiex-navy text-white">
      {/* Hero */}
      <section
        className="relative min-h-160 overflow-hidden md:min-h-180 xl:min-h-226"
        id="inicio"
      >
        <img
          alt="Campaña Publiex iluminada sobre una ruta nocturna"
          className="absolute inset-0 size-full object-cover"
          src={publiexAsset("cases-hero.png")}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/25 to-black/75" />
        <div className="relative mx-auto flex min-h-160 w-full max-w-480 items-end justify-center px-5 pb-8 text-center md:min-h-180 md:px-10 xl:min-h-226">
          <h1 className="font-raleway text-[clamp(3rem,8vw,8.85rem)] font-semibold uppercase leading-[0.996]">
            Casos de éxito
          </h1>
        </div>
      </section>

      {/* Case list */}
      <section className="overflow-hidden bg-publiex-navy px-5 py-16 md:px-10 lg:px-24 xl:py-30">
        <div className="mx-auto max-w-393.5">
          <p className="font-raleway text-sm font-bold uppercase md:text-2xl">
            Noticias
          </p>
          <h2 className="mt-8 max-w-220 font-raleway text-[clamp(2.4rem,5.4vw,4.965rem)] font-semibold leading-[1.04]">
            Campañas que se volvieron{" "}
            <span className="text-publiex-red">parte del viaje</span>
          </h2>
          <div className="mt-12 grid gap-8 xl:gap-16">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} study={study} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
