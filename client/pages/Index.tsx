import { ArrowRight, Menu } from "lucide-react";
import type { ReactNode } from "react";

const asset = (name: string) => `/images/publiex/${name}`;

const navItems = [
  ["Nosotros", "#nosotros"],
  ["Soluciones publicitarias", "#soluciones"],
  ["Explorar ubicaciones", "#ubicaciones"],
  ["Analítica", "#analitica"],
  ["Actualidad", "#actualidad"],
  ["Casos", "#casos"],
];

const solutions = [
  {
    title: "Vallas unipolares",
    description: "Una presencia que se convirtió en punto de referencia.",
    image: "skip-ad.png",
  },
  {
    title: "Mega landmarks",
    description: "Ocupe el paisaje. Conviértase en referencia.",
    image: "landmark-overpass.png",
  },
  {
    title: "Circuitos rotativos",
    description:
      "Más recorridos. Más frecuencia. Más oportunidades de ser visto.",
    image: "highway-billboards.png",
  },
  {
    title: "Banner posts",
    description: "Una avenida completa hablando de su marca.",
    image: "banner-posts-road.png",
  },
  {
    title: "Pantallas digitales",
    description: "Contenido que responde al ritmo de la ciudad.",
    image: "wide-road-billboard.png",
  },
  {
    title: "Publicidad en transporte",
    description: "Su marca viaja con Costa Rica.",
    image: "train-wrap.png",
  },
  {
    title: "Proyectos especiales",
    description: "Ideas que convierten el medio en experiencia.",
    image: "night-road-billboard.jpeg",
  },
];

const stats = [
  {
    label: "Impresiones vistas",
    value: "339,3 M",
    detail:
      "Impactos estimados con oportunidad efectiva de visualización de la campaña.",
    footnote: "Estimación · 100% SOT",
  },
  {
    label: "Permanencia media",
    value: "22 s",
    detail:
      "Tiempo promedio detectado frente a las pantallas: una ventana real para generar atención.",
    footnote: "Medición tecnológica",
  },
  {
    label: "Distribución por género",
    value: "51,6% / 48,4%",
    detail: "Perfil demográfico modelado entre mujeres y hombres.",
    footnote: "Audiencia modelada",
  },
];

const cases = [
  {
    tag: "Gran formato",
    type: "Landmark",
    title: "Una presencia que se convirtió en punto de referencia.",
    image: "landmark-overpass.png",
  },
  {
    tag: "Movilidad",
    type: "Trenes",
    title: "Un lanzamiento que recorrió la GAM.",
    image: "train-wrap.png",
  },
  {
    tag: "DOOH",
    type: "Contexto",
    title: "Una pantalla que cambió con la ciudad.",
    image: "highway-billboards.png",
  },
];

const insights = [
  {
    tag: "Innovación",
    title:
      "Publicidad en movimiento: cómo acompañar a la audiencia durante su recorrido.",
    description:
      "Una mirada a las posibilidades de integrar presencia exterior, experiencias interiores y frecuencia urbana.",
    image: "insight-innovation.png",
  },
  {
    tag: "Sostenibilidad",
    title: "Medir antes de comunicar.",
    description:
      "Datos, ubicación y criterio creativo para decidir dónde activar una campaña exterior.",
    image: "insight-sustainability.jpeg",
  },
  {
    tag: "Insights OOH",
    title: "De visibilidad a dominación visual.",
    description:
      "Cómo convertir rutas, avenidas y puntos de espera en memoria de marca.",
    image: "wide-road-billboard.png",
  },
];

const footerGroups = [
  {
    title: "Soluciones",
    links: ["Vallas y unipolares", "Mega landmarks", "Banner posts", "DOOH", "Trenes"],
  },
  {
    title: "Planificar",
    links: ["Ubicaciones", "Audiencias", "Solicitar media kit", "Cotizar"],
  },
  {
    title: "Publiex",
    links: ["Nosotros", "Sostenibilidad", "Agencias", "Sistema visual"],
  },
  {
    title: "Contacto",
    links: ["ventas@publiexcr.com", "+506 2525-1010", "Agendar reunión"],
  },
];

function SectionLabel({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p
      className={`mb-5 font-raleway text-sm font-extrabold uppercase tracking-normal md:mb-6 md:text-2xl ${
        dark ? "text-black" : "text-white"
      }`}
    >
      {children}
    </p>
  );
}

function PrimaryLink({
  href,
  children,
  tone = "red",
}: {
  href: string;
  children: string;
  tone?: "red" | "black" | "white" | "blue";
}) {
  const tones = {
    red: "bg-publiex-red text-white hover:bg-red-600",
    black: "bg-black text-white hover:bg-zinc-800",
    white: "bg-white text-black hover:bg-zinc-100",
    blue: "bg-publiex-blue text-white hover:bg-blue-700",
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 px-5 font-raleway text-sm font-extrabold uppercase transition md:min-h-[50px] md:text-[19.44px] ${tones[tone]}`}
      href={href}
    >
      {children}
      <ArrowRight aria-hidden className="size-4 shrink-0" />
    </a>
  );
}

function ImagePanel({
  image,
  title,
  children,
}: {
  image: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="group relative min-h-[320px] overflow-hidden bg-zinc-900 md:min-h-[420px]">
      <img
        alt={title}
        className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
        src={asset(image)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/80" />
      <div className="relative flex min-h-[320px] flex-col justify-end p-6 text-white md:min-h-[420px] md:p-8">
        {children}
      </div>
    </article>
  );
}

export default function Index() {
  return (
    <main className="bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
        <div className="mx-auto flex h-20 max-w-[1574px] items-center justify-between px-5 md:px-10 xl:h-[158px] xl:px-0">
          <a
            aria-label="Publiex"
            className="block h-[42px] w-[118px] md:h-[56px] md:w-[157px] xl:h-[75px] xl:w-[210px]"
            href="#inicio"
          >
            <img
              alt="Publiex"
              className="size-full object-contain"
              src={asset("publiex-logo.svg")}
            />
          </a>
          <nav className="hidden items-center gap-7 text-[18.25px] font-normal uppercase tracking-normal lg:flex xl:gap-10">
            {navItems.map(([label, href]) => (
              <a className="transition hover:text-publiex-red" href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <a
            className="hidden h-[29px] items-center bg-publiex-red px-4 font-raleway text-[17.81px] font-extrabold uppercase leading-none text-white transition hover:bg-red-600 md:inline-flex"
            href="#contacto"
          >
            Solicitar propuesta
          </a>
          <button
            aria-label="Abrir navegación"
            className="inline-flex size-11 items-center justify-center border border-black/15 lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative flex min-h-[calc(100vh-5rem)] items-end overflow-hidden px-5 pb-12 pt-28 text-white md:px-10 md:pb-20 xl:min-h-[1204px]"
        id="inicio"
      >
        <img
          alt="Vallas publicitarias Publiex sobre una vía principal de Costa Rica"
          className="absolute inset-0 size-full object-cover"
          src={asset("hero-road-billboards.png")}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0047ba]/70 via-[#0047ba]/15 to-black/70" />
        <div className="relative mx-auto w-full max-w-[1180px] text-center">
          <h1 className="font-raleway font-black uppercase leading-[0.996]">
            <span className="block text-[clamp(2.4rem,5.4vw,3.85rem)]">
              Hacemos que su marca sea
            </span>
            <span className="block text-[clamp(3rem,7vw,5.66rem)] text-publiex-red">
              imposible de ignorar
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-[950px] font-raleway text-[clamp(1.1rem,2.3vw,1.965rem)] leading-tight">
            Grandes formatos, movilidad, tecnología y creatividad para hacer
            que su marca sea parte del paisaje y de la conversación.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <PrimaryLink href="#contacto">Diseñar mi campaña</PrimaryLink>
            <a
              className="font-raleway text-sm font-extrabold uppercase underline underline-offset-4"
              href="#ubicaciones"
            >
              Explorar ubicaciones
            </a>
          </div>
        </div>
      </section>

      {/* Location finder */}
      <section
        className="grid min-h-[903px] overflow-hidden bg-publiex-gradient text-white lg:grid-cols-[0.95fr_1.05fr]"
        id="ubicaciones"
      >
        <div className="px-5 py-20 md:px-10 lg:px-24 lg:py-28">
          <SectionLabel>Buscar</SectionLabel>
          <h2 className="max-w-[520px] font-raleway text-[clamp(2.4rem,5.4vw,4.965rem)] font-semibold uppercase leading-[1.03]">
            Encuentre el lugar{" "}
            <span className="text-publiex-red">donde su marca debe estar.</span>
          </h2>
          <p className="mt-7 max-w-[670px] text-xl leading-tight md:text-[31.44px]">
            Explore una muestra de cobertura por formato y provincia. Cada
            consulta puede convertirse en una selección curada con ficha
            técnica, métricas y disponibilidad confirmada.
          </p>
          <a
            className="mt-9 inline-flex items-center gap-3 font-raleway text-sm font-extrabold uppercase underline underline-offset-4"
            href="#contacto"
          >
            Buscar <ArrowRight aria-hidden className="size-4" />
          </a>
        </div>
        <img
          alt="Pantalla digital Publiex en una zona urbana nocturna"
          className="h-full min-h-[360px] w-full object-cover"
          src={asset("wide-road-billboard.png")}
        />
      </section>

      {/* Impact statement */}
      <section className="relative flex min-h-[720px] items-center justify-end overflow-hidden px-5 py-20 text-white md:px-10 lg:px-24 xl:min-h-[1137px]">
        <img
          alt="Valla iluminada en una carretera de Costa Rica durante la noche"
          className="absolute inset-0 size-full object-cover"
          src={asset("night-road-billboard.jpeg")}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-2xl text-right">
          <SectionLabel>Impacto</SectionLabel>
          <h2 className="font-raleway text-[clamp(2.8rem,7vw,5.965rem)] font-semibold leading-none">
            Afuera no <span className="text-publiex-red">HAY SKIP AD</span>
          </h2>
          <p className="mt-8 max-w-[660px] text-xl leading-tight md:text-[31.44px]">
            Creamos presencia real para marcas que no quieren pasar
            desapercibidas. Combinamos ubicaciones estratégicas, creatividad,
            tecnología y datos para convertir cada recorrido en una oportunidad
            de conexión.
          </p>
        </div>
      </section>

      {/* Company story */}
      <section
        className="relative flex min-h-[700px] items-center justify-end overflow-hidden px-5 py-20 text-white md:px-10 lg:px-24 xl:min-h-[1062px]"
        id="nosotros"
      >
        <img
          alt="Estructura de publicidad exterior Publiex"
          className="absolute inset-0 size-full object-cover"
          src={asset("wide-road-billboard.png")}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative max-w-3xl text-right">
          <SectionLabel>Quiénes somos</SectionLabel>
          <p className="font-raleway text-[clamp(4rem,14vw,16rem)] font-black leading-none text-publiex-red">
            27 <span className="align-middle text-[0.42em] text-white">años</span>
          </p>
          <h2 className="font-raleway text-[clamp(2.5rem,6vw,4.965rem)] font-bold lowercase leading-[1.04]">
            mirando hacia adelante.
          </h2>
          <p className="mt-8 text-xl leading-tight md:text-[31.44px]">
            Somos una empresa especializada desde 1999 en publicidad exterior
            con más de 27 años de trayectoria en Costa Rica, dándole a cada
            cliente la solución para hacer crecer sus marcas.
          </p>
        </div>
      </section>

      {/* Advertising solutions */}
      <section className="bg-publiex-gradient px-5 py-20 text-white md:px-10 lg:px-24 xl:min-h-[2140px]" id="soluciones">
        <div className="mx-auto max-w-[1574px]">
          <SectionLabel>Soluciones publicitarias</SectionLabel>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="font-raleway text-[clamp(2.7rem,6.5vw,5.965rem)] font-medium leading-[1.04]">
              Un país.
              <span className="block text-publiex-red">
                Infinitas formas de ser visto.
              </span>
            </h2>
            <a
              className="font-raleway text-sm font-extrabold uppercase underline underline-offset-4"
              href="#contacto"
            >
              Ver todas las soluciones
            </a>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <ImagePanel image={solution.image} key={solution.title} title={solution.title}>
                <p className="max-w-md font-raleway text-2xl font-semibold leading-tight md:text-[34.44px] md:leading-[36px]">
                  {solution.description}
                </p>
                <div className="mt-8 border-t border-white pt-5">
                  <p className="font-raleway text-[0.7rem] font-black uppercase tracking-[0.18em]">
                    Explorar
                  </p>
                  <h3 className="mt-2 font-raleway text-xl font-bold uppercase md:text-[26px]">
                    {solution.title}
                  </h3>
                </div>
              </ImagePanel>
            ))}
          </div>
        </div>
      </section>

      {/* Format highlights */}
      <section className="grid gap-0 lg:grid-cols-2">
        <div className="px-5 py-20 md:px-10 lg:px-24">
          <SectionLabel dark>Mobiliario urbano</SectionLabel>
          <h2 className="font-raleway text-[clamp(2.3rem,5vw,6.4rem)] font-semibold leading-[0.97]">
            Convierta una ruta completa en una secuencia de marca.
          </h2>
          <p className="mt-7 max-w-2xl text-xl leading-tight md:text-[27px]">
            Los banner posts construyen frecuencia y continuidad visual mediante
            múltiples puntos de contacto a lo largo de avenidas, rotondas y
            rutas estratégicas.
          </p>
          <div className="mt-9">
            <PrimaryLink href="#contacto">Explorar banner posts</PrimaryLink>
          </div>
        </div>
        <img
          alt="Banner posts Publiex instalados en una carretera"
          className="h-full min-h-[520px] w-full object-cover"
          src={asset("banner-posts-road.png")}
        />
      </section>

      {/* Transport and special projects */}
      <section className="grid bg-publiex-navy text-white lg:grid-cols-2" id="analitica">
        <img
          alt="Publicidad exterior en tren"
          className="h-full min-h-[520px] w-full object-cover"
          src={asset("train-wrap.png")}
        />
        <div className="px-5 py-20 md:px-10 lg:px-24">
          <SectionLabel>Publicidad en transporte</SectionLabel>
          <h2 className="font-raleway text-[clamp(2.4rem,5.8vw,6.4rem)] font-semibold leading-[0.97]">
            Una marca que acompaña el recorrido se vuelve parte del día a día.
          </h2>
          <p className="mt-7 max-w-2xl text-xl leading-tight md:text-[31.44px]">
            Desde la dominación exterior hasta las experiencias interiores, el
            tren combina alcance urbano, permanencia y múltiples momentos de
            contacto.
          </p>
          <div className="mt-9">
            <PrimaryLink href="#contacto" tone="white">
              Descubrir soluciones en trenes
            </PrimaryLink>
          </div>
        </div>
      </section>

      <section className="grid gap-10 border-t border-zinc-300 px-5 py-20 md:px-10 lg:grid-cols-2 lg:px-24">
        <article>
          <img
            alt="Pantalla digital Publiex con contenido dinámico"
            className="aspect-[4/3] w-full object-cover"
            src={asset("wide-road-billboard.png")}
          />
          <SectionLabel dark>Pantallas digitales y DOOH</SectionLabel>
          <h2 className="font-raleway text-[clamp(2rem,4vw,4.375rem)] font-semibold leading-tight md:leading-[80px]">
            Mensajes que se mueven al ritmo de la ciudad.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-tight md:text-xl">
            Contenido flexible y de alto impacto para activar campañas
            relevantes en los momentos que importan.
          </p>
          <div className="mt-8">
            <PrimaryLink href="#contacto">Explorar DOOH</PrimaryLink>
          </div>
        </article>
        <article>
          <img
            alt="Proyecto especial de publicidad exterior Publiex"
            className="aspect-[4/3] w-full object-cover"
            src={asset("banner-posts-road.png")}
          />
          <SectionLabel dark>Proyectos especiales</SectionLabel>
          <h2 className="font-raleway text-[clamp(2rem,4vw,4.375rem)] font-semibold leading-tight md:leading-[80px]">
            Cuando la idea sale del formato, empieza la conversación.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-tight md:text-xl">
            Salientes, volumétricos, sobrepuestos e iluminación LED convierten
            una ubicación en una ejecución que la audiencia recuerda y comparte.
          </p>
          <div className="mt-8">
            <PrimaryLink href="#contacto">Explorar proyectos especiales</PrimaryLink>
          </div>
        </article>
      </section>

      {/* Audience analytics */}
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#bbd1f3_100%)] px-5 py-20 md:px-10 lg:px-24">
        <div className="mx-auto grid max-w-[1574px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionLabel dark>Datos y audiencias</SectionLabel>
            <h2 className="font-raleway text-[clamp(2.7rem,6vw,7.465rem)] font-bold uppercase leading-[0.94]">
              No compre espacios.
              <span className="block lowercase">Conquiste audiencias.</span>
            </h2>
            <p className="mt-7 max-w-3xl text-xl leading-tight md:text-2xl">
              Traducimos ubicaciones, movilidad, rutas y exposición en
              decisiones de campaña más claras.
            </p>
            <div className="mt-9">
              <PrimaryLink href="#contacto" tone="blue">
                Planificar con datos
              </PrimaryLink>
            </div>
          </div>
          <div className="mx-auto flex aspect-square w-full max-w-[500px] flex-col items-center justify-center rounded-full bg-publiex-blue p-10 text-center text-white">
            <p className="font-raleway text-[clamp(2.5rem,5vw,5rem)] font-black text-publiex-red">
              1.578.841
            </p>
            <p className="mt-4 font-raleway text-lg font-bold uppercase">
              Audiencia única estimada
            </p>
            <p className="mt-3 max-w-xs text-sm">
              Estimación basada en dispositivos móviles únicos detectados frente
              a los activos.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-[980px] gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <article className="bg-white p-6 shadow-sm" key={stat.label}>
              <h3 className="font-raleway text-sm font-bold uppercase">
                {stat.label}
              </h3>
              <p className="mt-4 font-raleway text-4xl font-bold">{stat.value}</p>
              <p className="mt-4 text-sm leading-snug">{stat.detail}</p>
              <p className="mt-5 border-t border-publiex-blue pt-3 font-raleway text-xs font-extrabold uppercase text-publiex-blue">
                {stat.footnote}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Work and insights */}
      <section className="bg-publiex-navy px-5 py-20 text-white md:px-10 lg:px-24" id="casos">
        <div className="mx-auto max-w-[1574px]">
          <SectionLabel>Casos de éxito</SectionLabel>
          <h2 className="font-raleway text-[clamp(2.4rem,5.5vw,4.965rem)] font-semibold leading-tight md:leading-[82px]">
            Campañas que se volvieron{" "}
            <span className="text-publiex-red">parte del viaje.</span>
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {cases.map((item) => (
              <ImagePanel image={item.image} key={item.title} title={item.title}>
                <div className="absolute left-6 top-6 right-6 flex justify-between font-raleway text-xs font-bold uppercase">
                  <span>{item.tag}</span>
                  <span>{item.type}</span>
                </div>
                <h3 className="font-raleway text-2xl font-semibold leading-tight md:text-4xl">
                  {item.title}
                </h3>
              </ImagePanel>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:px-24" id="actualidad">
        <div className="mx-auto max-w-[1574px]">
          <SectionLabel dark>Actualidad e insights</SectionLabel>
          <h2 className="font-raleway text-[clamp(2.4rem,5.5vw,4.965rem)] font-semibold leading-tight md:leading-[82px]">
            Lo que hacemos. Lo que aprendemos.{" "}
            <span className="text-publiex-red">Lo que sigue.</span>
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {insights.map((item) => (
              <ImagePanel image={item.image} key={item.title} title={item.title}>
                <p className="font-raleway text-xs font-bold uppercase">{item.tag}</p>
                <h3 className="mt-4 font-raleway text-2xl font-semibold leading-tight md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-snug md:text-base">
                  {item.description}
                </p>
              </ImagePanel>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal paths */}
      <section className="grid md:grid-cols-2">
        <div className="bg-publiex-gradient px-5 py-16 text-white md:px-10 lg:px-24">
          <SectionLabel>Para agencias</SectionLabel>
          <h2 className="font-raleway text-[clamp(2rem,4vw,3.375rem)] font-semibold leading-tight md:leading-[53px]">
            Acceso a inventario, especificaciones y propuestas en un solo lugar.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-tight">
            Media kits, disponibilidad, propuestas co-brandeadas y seguimiento
            de campañas para equipos que necesitan velocidad y precisión.
          </p>
          <div className="mt-8">
            <PrimaryLink href="#contacto" tone="white">
              Acceso para agencias
            </PrimaryLink>
          </div>
        </div>
        <div className="bg-zinc-200 px-5 py-16 md:px-10 lg:px-24">
          <SectionLabel dark>Para propietarios</SectionLabel>
          <h2 className="font-raleway text-[clamp(2rem,4vw,3.375rem)] font-semibold leading-tight md:leading-[53px]">
            Evalúe el potencial comercial de su terreno, edificio o espacio.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-tight">
            Un proceso claro, profesional y respaldado por Publiex para valorar
            nuevas ubicaciones.
          </p>
          <div className="mt-8">
            <PrimaryLink href="#contacto" tone="blue">
              Postular una ubicación
            </PrimaryLink>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        className="grid overflow-hidden bg-publiex-gradient text-white lg:grid-cols-[1fr_0.85fr]"
        id="contacto"
      >
        <div className="px-5 py-20 md:px-10 lg:px-24">
          <SectionLabel>Solicitar propuesta</SectionLabel>
          <h2 className="font-raleway text-[clamp(2.5rem,5.6vw,5rem)] font-semibold leading-tight md:leading-[82px]">
            Cuéntenos qué quiere lograr.
            <span className="block text-publiex-red">
              Nosotros encontramos dónde.
            </span>
          </h2>
          <p className="mt-7 max-w-2xl text-xl leading-tight">
            Un formulario breve para que el equipo comercial reciba el contexto
            correcto y responda con una recomendación construida para su marca.
          </p>
          <form className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            <input className="min-h-12 bg-white px-4 text-black" placeholder="Nombre" />
            <input className="min-h-12 bg-white px-4 text-black" placeholder="Empresa" />
            <input className="min-h-12 bg-white px-4 text-black" placeholder="Correo" type="email" />
            <input className="min-h-12 bg-white px-4 text-black" placeholder="Teléfono" />
            <textarea
              className="min-h-32 bg-white px-4 py-3 text-black sm:col-span-2"
              placeholder="Objetivo de campaña"
            />
            <button
              className="min-h-12 bg-publiex-red px-5 font-raleway text-sm font-extrabold uppercase text-white transition hover:bg-red-600 sm:w-max"
              type="button"
            >
              Solicitar propuesta
            </button>
          </form>
        </div>
        <img
          alt="Ejemplo de activo exterior Publiex para propuesta comercial"
          className="h-full min-h-[460px] w-full object-cover"
          src={asset("proposal-form.png")}
        />
      </section>

      {/* Footer */}
      <footer className="bg-black px-5 py-14 text-white md:px-10 lg:px-24">
        <div className="mx-auto max-w-[1574px]">
          <div className="flex flex-col justify-between gap-8 border-b border-white/20 pb-10 md:flex-row md:items-start">
            <a className="font-raleway text-3xl font-black uppercase text-white" href="#inicio">
              publi<span className="text-publiex-red">ex</span>
            </a>
            <a className="font-raleway text-sm font-extrabold uppercase underline" href="#inicio">
              Volver arriba
            </a>
          </div>
          <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-raleway text-sm font-bold uppercase text-[#3e88bd]">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm uppercase">
                  {group.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs uppercase text-white/60">
            © 2026 Publiex. Publicidad exterior en Costa Rica.
          </p>
        </div>
      </footer>
    </main>
  );
}
