import { publiexAsset } from "@/lib/assets";

const caseStudies = [
  {
    id: "landmark",
    category: "Landmark",
    title: "Una presencia que se convirtió en punto de referencia",
    titleLines: [
      "Una presencia",
      "que se convirtió",
      "en punto de",
      "referencia",
    ],
    image: "casestudies-landmark.png",
    layout: "imageTop",
    body: [
      "Una ubicación dominante puede cambiar la forma en que una marca aparece en la ciudad. Este caso muestra cómo un formato de gran escala ayuda a construir recordación, lectura inmediata y presencia sostenida en un corredor de alto tránsito.",
      "La pieza fue pensada para verse rápido, mantenerse clara a distancia y convertirse en una referencia visual cotidiana. La combinación entre tamaño, ubicación y mensaje simple permitió que la campaña acompañara recorridos diarios sin depender de interrupciones digitales.",
      "El resultado fue una presencia reconocible que reforzó el mensaje en cada recorrido y convirtió el soporte en parte del paisaje de referencia para la audiencia.",
    ],
  },
  {
    id: "trenes",
    category: "Trenes",
    title: "Un lanzamiento que recorrió la GAM",
    image: "casestudies-tren.png",
    layout: "imageRight",
    body: [
      "La publicidad en movimiento permite que una marca acompañe a las personas durante el trayecto. En este lanzamiento, el tren funcionó como una plataforma móvil capaz de multiplicar puntos de contacto y reforzar presencia en distintos momentos del día.",
      "La ejecución combinó impacto exterior con cercanía urbana, llevando el mensaje por rutas donde la audiencia se desplaza de forma recurrente. La marca viajó con la ciudad y apareció tanto en estaciones como durante el recorrido.",
      "El resultado fue una campaña visible, reconocible y conectada con la movilidad real de la ciudad.",
    ],
  },
  {
    id: "dooh",
    category: "DOOH",
    title: "Una pantalla que cambió con la ciudad",
    image: "casestudies-dooh.mp4",
    mediaType: "video",
    layout: "imageTop",
    body: [
      "Las pantallas digitales permiten adaptar mensajes sin perder presencia en calle. Este caso aprovecha contenido dinámico para mantener la campaña activa, flexible y alineada con distintos momentos de comunicación.",
      "El formato ayudó a alternar piezas, refrescar llamados y sostener impacto visual con iluminación y movimiento. Para marcas con varias prioridades de mensaje, DOOH reduce la rigidez de una sola pieza y abre espacio para secuencias creativas.",
      "La campaña mantuvo presencia continua y pudo responder mejor al ritmo de la ciudad durante el periodo contratado.",
    ],
  },
] as const;

type CaseStudy = (typeof caseStudies)[number];

function CaseBody({ study }: { study: CaseStudy }) {
  return (
    <div className="grid gap-4 font-raleway text-[clamp(0.85rem,0.85vw,1rem)] leading-[1.08] text-black">
      {study.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function CaseTitle({ study }: { study: CaseStudy }) {
  return (
    <div>
      <p className="font-raleway text-sm font-bold uppercase text-publiex-red md:text-xl">
        {study.category}
      </p>
      <h3 className="mt-4 max-w-165 font-raleway text-[clamp(2.25rem,4.55vw,5.45rem)] font-semibold leading-[1.05] text-black">
        {"titleLines" in study
          ? study.titleLines.map((line) => (
              <span className="block whitespace-nowrap" key={line}>
                {line}
              </span>
            ))
          : study.title}
      </h3>
    </div>
  );
}

function CaseMedia({
  className,
  study,
}: {
  className: string;
  study: CaseStudy;
}) {
  if ("mediaType" in study && study.mediaType === "video") {
    return (
      <video
        aria-label={study.title}
        autoPlay
        className={className}
        loop
        muted
        playsInline
      >
        <source src={publiexAsset(study.image)} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      alt={study.title}
      className={className}
      src={publiexAsset(study.image)}
    />
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  if (study.layout === "imageRight") {
    return (
      <article
        className="grid overflow-hidden bg-white lg:grid-cols-[minmax(0,0.98fr)_minmax(320px,0.82fr)]"
        id={study.id}
      >
        {/* Case copy */}
        <div className="flex flex-col justify-center px-[clamp(1.5rem,3.5vw,4.75rem)] py-[clamp(2.25rem,3.2vw,4.5rem)]">
          <CaseTitle study={study} />
          <div className="mt-[clamp(2rem,3vw,4rem)] max-w-2xl">
            <CaseBody study={study} />
          </div>
        </div>

        {/* Case image */}
        <div className="min-h-[clamp(16rem,32vw,36rem)] overflow-hidden p-[clamp(0.8rem,1.7vw,2.2rem)] pl-0 max-lg:pl-[clamp(1rem,2vw,2.5rem)] max-lg:pt-0">
          <CaseMedia
            className="size-full object-cover object-center"
            study={study}
          />
        </div>
      </article>
    );
  }

  return (
    <article className="overflow-hidden bg-white" id={study.id}>
      {/* Case image */}
      <div className="px-[clamp(1.25rem,3.5vw,4.25rem)] pt-[clamp(1rem,2vw,2.5rem)]">
        <CaseMedia
          className="h-[clamp(18rem,32.5vw,39rem)] w-full object-cover object-center"
          study={study}
        />
      </div>

      {/* Case details */}
      <div className="grid gap-8 px-[clamp(1.5rem,3.95vw,4.75rem)] pb-[clamp(2.25rem,3vw,3.75rem)] pt-[clamp(1.75rem,2.7vw,3.375rem)] lg:grid-cols-2">
        <CaseTitle study={study} />
        <div
          className={`lg:max-w-2xl ${
            "titleLines" in study ? "self-start lg:pt-11" : "self-center"
          }`}
        >
          <CaseBody study={study} />
        </div>
      </div>
    </article>
  );
}

export default function CaseStudiesPage() {
  return (
    <main className="bg-publiex-blue-deep text-white">
      {/* Section 1, Hero */}
      <section
        className="relative min-h-[clamp(24rem,36vw,48rem)] overflow-hidden bg-publiex-blue-deep"
        id="inicio"
      >
        <img
          alt="Campaña Publiex iluminada sobre una ruta nocturna"
          className="absolute inset-0 size-full object-cover object-center"
          src={publiexAsset("casestudies-hero.png")}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/5 via-black/15 to-black/65" />
        <div className="relative mx-auto flex min-h-[clamp(24rem,36vw,48rem)] w-full max-w-480 items-end justify-center px-5 pb-[clamp(1.5rem,2.25vw,2.75rem)] text-center md:px-10">
          <h1 className="font-raleway text-[clamp(3rem,7.4vw,8.85rem)] font-semibold uppercase leading-[0.996]">
            Casos de éxito
          </h1>
        </div>
      </section>

      {/* Section 2, Case list */}
      <section className="overflow-hidden bg-publiex-blue-deep px-5 py-[clamp(3rem,5vw,6rem)] md:px-10 lg:px-24">
        <div className="mx-auto max-w-393.5">
          <p className="font-raleway text-sm font-bold uppercase md:text-2xl">
            Noticias
          </p>
          <h2 className="mt-8 max-w-300 font-raleway text-[clamp(2.2rem,5.2vw,4.7rem)] font-semibold leading-[1.04]">
            <span className="block md:whitespace-nowrap">
              Campañas que se volvieron
            </span>
            <span className="block text-publiex-red md:whitespace-nowrap">
              parte del viaje
            </span>
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
