import { useEffect, useRef } from "react";

import { CampaignCta } from "@/components/site/CampaignCta";
import { ImagePanel } from "@/components/site/ImagePanel";
import { PrimaryLink } from "@/components/site/PrimaryLink";
import { SectionLabel } from "@/components/site/SectionLabel";
import { cases, insights, solutions } from "@/content/home";
import { publiexAsset } from "@/lib/assets";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!hero || !video || prefersReducedMotion) {
      return;
    }

    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;
      const { bottom, top } = hero.getBoundingClientRect();

      if (bottom < 0 || top > window.innerHeight) {
        return;
      }

      const offset = Math.min(Math.max(-top * 0.3, 0), 160);
      video.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
    };

    const requestParallaxUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);

    return () => {
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section
        className="relative h-[clamp(36rem,47.9vw,57.5rem)] overflow-hidden text-white"
        id="inicio"
        ref={heroRef}
      >
        <video
          ref={videoRef}
          aria-hidden="true"
          autoPlay
          className="absolute inset-0 size-full origin-center object-cover will-change-transform"
          loop
          muted
          playsInline
          poster={publiexAsset("figma-home-hero.jpeg")}
        >
          <source src={publiexAsset("hero_home.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-[#0047ba]/65 via-[#0047ba]/15 to-black/75" />
        <div className="relative mx-auto flex h-full w-full max-w-480 items-end px-5 pb-12 pt-28 md:px-10 md:pb-20">
          <div className="mx-auto w-full max-w-295 text-center">
            <h1 className="font-raleway font-black uppercase leading-[0.996]">
              <span className="block text-[clamp(2.4rem,5.4vw,3.85rem)]">
                Hacemos que su marca sea
              </span>
              <span className="block text-[clamp(3rem,7vw,5.66rem)] text-publiex-red">
                imposible de ignorar
              </span>
            </h1>
            <p className="mx-auto mt-7 max-w-237.5 font-raleway text-[clamp(1.1rem,2.3vw,1.965rem)] leading-tight">
              Grandes formatos, movilidad, tecnología y creatividad para hacer
              que su marca sea parte del paisaje y de la conversación.
            </p>
            <div className="mt-10 flex flex-col text-lg items-center justify-center gap-5 sm:flex-row">
              <PrimaryLink href="#contacto" weight="normal">
                Diseñar mi campaña
              </PrimaryLink>
              <a
                className="font-raleway text-lg font-normal uppercase underline underline-offset-4"
                href="#ubicaciones"
              >
                Explorar ubicaciones
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location finder */}
      <section
        className="overflow-hidden bg-publiex-gradient text-white"
        id="ubicaciones"
      >
        <div className="mx-auto grid w-full max-w-480 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="px-5 py-[clamp(5rem,7.5vw,8.5rem)] md:px-10 xl:pl-41.5 xl:pr-16">
            <h2 className="max-w-130 font-raleway text-[clamp(2.4rem,5.3vw,4.865rem)] font-semibold leading-[1.03]">
              Encuentre el lugar{" "}
              <span className="text-publiex-red">
                donde su marca debe estar.
              </span>
            </h2>
            <p className="font-uni mt-7 max-w-167.5 text-[clamp(1.20rem,1.4vw,1.765rem)] leading-tight">
              Explore una muestra de cobertura por formato y provincia. Cada
              consulta puede convertirse en una selección curada con ficha
              técnica, métricas y disponibilidad confirmada.
            </p>
            <a
              className="relative mt-9 inline-flex font-raleway text-sm uppercase after:absolute after:-bottom-1 after:right-0 after:h-px after:w-screen after:bg-[#f5333f] after:content-['']"
              href="#contacto"
            >
              Buscar
            </a>
          </div>
          <img
            alt="Pantalla digital Publiex en una zona urbana nocturna"
            className="h-full min-h-90 w-full object-cover"
            src={publiexAsset("figma-location.jpeg")}
          />
        </div>
      </section>

      {/* Impact statement */}
      <section className="relative overflow-hidden text-white">
        <img
          alt="Valla iluminada en una carretera de Costa Rica durante la noche"
          className="absolute inset-0 size-full object-cover"
          src={publiexAsset("figma-skip-ad.jpeg")}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto flex min-h-[clamp(45rem,59.2vw,71.0625rem)] w-full max-w-480 items-center justify-end px-5 py-[clamp(5rem,9.2vw,11.0625rem)] md:px-10 lg:px-24 xl:items-start">
          <div className="max-w-165 text-right xl:mr-15">
            <SectionLabel>Impacto</SectionLabel>
            <h2 className="text-right font-raleway text-[clamp(2.8rem,7vw,5.965rem)] font-semibold leading-none">
              <span className="block">Afuera no</span>
              <span className="block text-publiex-red">hay skip ad</span>
            </h2>
            <p className="mt-8 max-w-165 text-[clamp(1.25rem,1.65vw,1.965rem)] leading-tight">
              Creamos presencia real para marcas que no quieren pasar
              desapercibidas. Combinamos ubicaciones estratégicas, creatividad,
              tecnología y datos para convertir cada recorrido en una
              oportunidad de conexión.
            </p>
          </div>
        </div>
      </section>

      {/* Company story */}
      <section className="relative overflow-hidden text-white" id="nosotros">
        <img
          alt="Estructura de publicidad exterior Publiex"
          className="absolute inset-0 size-full object-cover"
          src={publiexAsset("figma-about.jpeg")}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative mx-auto flex min-h-[clamp(43.75rem,55.3vw,66.375rem)] w-full max-w-480 items-center justify-end px-5 py-[clamp(5rem,8vw,9.5rem)] md:px-10 lg:px-24">
          <div className="max-w-177.5 text-right xl:mr-16.25 xl:mt-30">
            <SectionLabel>Quiénes somos</SectionLabel>
            <p className="font-raleway text-[clamp(4rem,14vw,16rem)] font-black leading-none text-publiex-red">
              27{" "}
              <span className="align-middle text-[0.42em] text-white">
                años
              </span>
            </p>
            <h2 className="font-raleway text-[clamp(2.5rem,6vw,4.965rem)] font-bold lowercase leading-[1.04]">
              mirando hacia adelante.
            </h2>
            <p className="font-uni mt-8 text-[clamp(1.25rem,1.65vw,1.965rem)] leading-tight">
              Somos una empresa especializada desde 1999 en el 
              campo de la publicidad exterior (Out of Home Media) 
              con más de 27 años de trayectoria en Costa Rica, 
              dándole a cada cliente la solución a sus necesidades 
              para hacer crecer sus marcas.
            </p>
            <a
              className="relative mt-8 inline-block pb-1 font-raleway text-sm font-bold uppercase text-white transition after:absolute after:bottom-0 after:left-0 after:h-px after:w-screen after:bg-[#f5333f] after:content-[''] hover:text-white/75"
              href="/about"
            >
              Ver más
            </a>
          </div>
        </div>
      </section>

      {/* Advertising solutions */}
      <section
        className="overflow-hidden bg-publiex-gradient text-white"
        id="soluciones"
      >
        <div className="mx-auto w-full max-w-480 px-5 py-[clamp(2.5rem,3.7vw,4.4375rem)] md:px-10 lg:px-24">
          <div className="mx-auto max-w-393.5">
            <SectionLabel>Soluciones publicitarias</SectionLabel>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2 className="font-raleway text-[clamp(2.7rem,6.5vw,5.965rem)] font-medium leading-[1.04]">
                <span className="block">Un país.</span>
                <span className="block">
                  Infinitas formas de{" "}
                  <span className="text-publiex-red">ser visto.</span>
                </span>
              </h2>
              <a
                className="relative pb-1 font-raleway text-sm font-extrabold uppercase after:absolute after:bottom-0 after:left-0 after:h-px after:w-screen after:bg-[#f5333f] after:content-['']"
                href="#contacto"
              >
                Ver todas las soluciones
              </a>
            </div>
            <div className="mt-21.5 grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution) => (
                <ImagePanel
                  image={solution.image}
                  key={solution.title}
                  title={solution.title}
                >
                  <h3 className="absolute right-4 top-4 max-w-[58%] text-right font-raleway text-[clamp(0.9rem,5cqw,1.625rem)] font-bold uppercase leading-tight md:right-5 md:top-5">
                    {solution.title}
                  </h3>
                  <div className="w-full text-left">
                    <p className="font-raleway text-[clamp(1rem,6.5cqw,2.0rem)] font-semibold leading-tight">
                      {solution.description}
                    </p>
                    <div className="mt-[clamp(0.2rem,1.2cqw,0.50rem)] w-full border-t border-white pt-[clamp(0.35rem,2.2cqw,0.85rem)]">
                      <a
                        className="font-raleway text-[clamp(0.55rem,2.2cqw,0.7rem)] font-black uppercase tracking-[0.18em] transition hover:text-white/75"
                        href="#contacto"
                      >
                        Explorar
                      </a>
                    </div>
                  </div>
                </ImagePanel>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Large format */}
      <section className="overflow-hidden">
        <div className="mx-auto grid min-h-[clamp(36.25rem,40vw,52.1875rem)] w-full max-w-480 gap-0 lg:grid-cols-2">
          <img
            alt="Mega formato Publiex en una vía principal"
            className="h-full min-h-130 w-full object-cover"
            src={publiexAsset("figma-large-format.jpeg")}
          />
          <div className="flex flex-col justify-center px-5 py-[clamp(5rem,4.25vw,5.0625rem)] md:px-10 lg:px-15">
            <SectionLabel dark>Gran formato</SectionLabel>
            <h2 className="max-w-186 font-raleway text-[clamp(2.3rem,5vw,6.4rem)] font-semibold leading-[0.97]">
              Cuando una marca necesita dominar, el espacio debe estar a su
              altura.
            </h2>
            <p className="mt-7 max-w-2xl text-[clamp(1.25rem,1.4vw,1.6875rem)] leading-tight">
              Vallas unipolares y mega landmarks construyen presencia de alto
              impacto en rutas, intersecciones y puntos urbanos estratégicos.
            </p>
            <div className="mt-9">
              <PrimaryLink href="#contacto">Explorar gran formato</PrimaryLink>
            </div>
          </div>
        </div>
      </section>

      {/* Format highlights */}
      <section className="overflow-hidden">
        <div className="mx-auto grid min-h-[clamp(36.25rem,40vw,52.1875rem)] w-full max-w-480 gap-0 lg:grid-cols-2">
          <div className="px-5 py-[clamp(4.625rem,4.2vw,5rem)] md:px-10 lg:px-24 xl:pl-43.25 xl:pr-15">
            <SectionLabel dark>Mobiliario urbano</SectionLabel>
            <h2 className="max-w-186 font-raleway text-[clamp(2.3rem,5vw,6.4rem)] font-semibold leading-[0.97]">
              Convierta una ruta completa en una secuencia de marca.
            </h2>
            <p className="mt-7 max-w-2xl text-[clamp(1.25rem,1.4vw,1.6875rem)] leading-tight">
              Los banner posts construyen frecuencia y continuidad visual
              mediante múltiples puntos de contacto a lo largo de avenidas,
              rotondas y rutas estratégicas.
            </p>
            <div className="mt-9">
              <PrimaryLink href="#contacto">Explorar banner posts</PrimaryLink>
            </div>
          </div>
          <img
            alt="Banner posts Publiex instalados en una carretera"
            className="h-full min-h-130 w-full object-cover"
            src={publiexAsset("figma-urban-furniture.jpeg")}
          />
        </div>
      </section>

      {/* Transport and special projects */}
      <section
        className="overflow-hidden bg-publiex-sports-gradient text-white"
        id="analitica"
      >
        <div className="mx-auto grid min-h-[clamp(36.25rem,40vw,52.1875rem)] w-full max-w-460 lg:grid-cols-2">
          <img
            alt="Publicidad exterior en tren"
            className="h-full min-h-130 w-full object-cover"
            src={publiexAsset("figma-transport.jpeg")}
          />
          <div className="px-5 py-[clamp(5rem,6.8vw,8.125rem)] md:px-10 lg:px-24 xl:pl-20.5">
            <SectionLabel>Publicidad en transporte</SectionLabel>
            <h2 className="max-w-183 font-raleway text-[clamp(2.1rem,5.3vw,6.0rem)] font-semibold leading-[0.97]">
              Una marca que acompaña el recorrido se vuelve parte del día a día.
            </h2>
            <p className="mt-7 max-w-2xl text-[clamp(1.25rem,1.3vw,1.5625rem)] leading-tight">
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
        </div>
      </section>

      {/* Digital and special formats */}
      <section className="overflow-hidden border-t border-zinc-300">
        <div className="mx-auto grid w-full max-w-480 gap-10 px-5 pb-[clamp(2.5rem,3vw,3.5rem)] pt-[clamp(4rem,4vw,4.75rem)] md:px-10 lg:grid-cols-2 lg:px-24 xl:gap-53.25 xl:px-23.25">
          <article>
            <img
              alt="Pantalla digital Publiex con contenido dinámico"
              className="aspect-756/518 w-full object-cover"
              src={publiexAsset("figma-dooh-raw-1.jpeg")}
            />
            <SectionLabel dark>Pantallas digitales y DOOH</SectionLabel>
            <h2 className="font-raleway text-[clamp(1.8rem,3.7vw,3.9rem)] font-semibold leading-[1.04]">
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
              className="aspect-756/518 w-full object-cover"
              src={publiexAsset("figma-special-projects.jpeg")}
            />
            <SectionLabel dark>Proyectos especiales</SectionLabel>
            <h2 className="font-raleway text-[clamp(1.8rem,3.7vw,3.9rem)] font-semibold leading-[1.04]">
              Cuando la idea sale del formato, empieza la conversación.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-tight md:text-xl">
              Salientes, volumétricos, sobrepuestos e iluminación LED convierten
              una ubicación en una ejecución que la audiencia recuerda y
              comparte.
            </p>
            <div className="mt-8">
              <PrimaryLink href="#contacto">
                Explorar proyectos especiales
              </PrimaryLink>
            </div>
          </article>
        </div>
      </section>

      {/* Audience analytics */}
      <section className="overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#bbd1f3_100%)]">
        <div className="mx-auto grid w-full max-w-480 gap-10 px-5 py-[clamp(4rem,4.2vw,5.0625rem)] md:px-10 lg:px-24 xl:grid-cols-[minmax(0,630fr)_minmax(0,630fr)_minmax(230px,280fr)] xl:items-start xl:gap-x-4.5">
          <div className="@container xl:pt-11.5">
            <SectionLabel dark>Datos y audiencias</SectionLabel>
            <h2 className="mt-8 font-raleway font-bold leading-none xl:mt-8.5">
              <span className="block whitespace-nowrap font-uni text-[clamp(2.0rem,8.2cqw,3.7rem)] font-semibold leading-normal text-publiex-red">
                No compre espacios.
              </span>
              <span className="mt-1 block text-[clamp(4.5rem,18.3cqw,7rem)] leading-[0.94]">
                Conquiste
                <span className="block lowercase">audiencias.</span>
              </span>
            </h2>
            <p className="font-uni mt-8 max-w-164 text-[clamp(1.1rem,4.4cqw,1.8rem)] leading-tight">
              Traducimos ubicaciones, movilidad, rutas y exposición en
              decisiones de campaña más claras. La información operativa permite
              comprender el alcance de un ecosistema que conecta trabajo,
              estudio y actividad económica.
            </p>
            <div className="mt-6.75">
              <PrimaryLink href="#contacto" tone="blue">
                Planificar con datos
              </PrimaryLink>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-164.75 items-center justify-center xl:mt-18.25">
            <div className="absolute inset-0 rounded-full border border-publiex-blue" />
            <div className="absolute inset-12.5 rounded-full border border-publiex-blue" />
            <div className="flex aspect-square w-[66.3%] flex-col items-center justify-center rounded-full bg-publiex-blue px-10 text-center text-white">
              <p className="font-raleway text-[clamp(0.75rem,0.9vw,1.201rem)] font-semibold uppercase">
                Audiencia única estimada
              </p>
              <p className="mt-4 font-raleway text-[clamp(2.8rem,4.2vw,4.998rem)] font-black leading-none text-publiex-red">
                1.578.841
              </p>
              <p className="mt-4 max-w-86.25 font-raleway text-[clamp(0.8rem,1vw,1.201rem)] font-semibold leading-tight">
                estimación basada en dispositivos móviles únicos detectados
                frente a los activos
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3 xl:mt-0 xl:grid-cols-1">
            <article className="bg-white px-5.5 pb-5.5 pt-4">
              <h3 className="font-raleway text-[18px] font-semibold uppercase leading-5.5">
                Impresiones vistas
              </h3>
              <p className="mt-1 font-raleway text-[45px] font-bold leading-13">
                339,3 M
              </p>
              <p className="mt-4 max-w-51.25 font-raleway text-[17px] leading-5.25">
                impactos estimados con oportunidad efectiva de visualización de
                la campaña
              </p>
              <p className="mt-2.5 border-t border-publiex-blue pt-2.5 font-raleway text-[12px] font-bold leading-3.75 text-publiex-blue">
                ESTIMACIÓN · 100% SOT
              </p>
            </article>

            <article className="bg-white px-5.5 pb-3.5 pt-4">
              <h3 className="font-raleway text-[18px] font-semibold uppercase leading-5.5">
                Permanencia media
              </h3>
              <p className="mt-1 font-raleway text-[60px] font-bold leading-13.25">
                22 <span className="text-[38px]">s</span>
              </p>
              <p className="mt-3.5 max-w-50 font-raleway text-[17px] lowercase leading-[21px]">
                tiempo promedio detectado frente a las pantallas, una ventana
                real para generar atención
              </p>
              <p className="mt-2 border-t border-publiex-blue pt-2.5 font-raleway text-[12px] font-bold leading-[15px] text-publiex-blue">
                MEDICIÓN TECNOLÓGICA
              </p>
            </article>

            <article className="bg-white px-5.5 pb-5 pt-4">
              <h3 className="font-raleway text-[18px] font-semibold uppercase leading-5.5">
                Distribución por género
              </h3>
              <div className="mt-5 grid grid-cols-[96px_1fr] items-center gap-4">
                <div className="relative aspect-square w-24 overflow-hidden rounded-full bg-publiex-red">
                  <div className="absolute inset-y-0 left-0 w-[46%] rounded-l-full bg-publiex-blue" />
                </div>
                <div className="font-raleway font-bold lowercase leading-none">
                  <p className="text-[29px] text-publiex-red">51,6%</p>
                  <p className="mt-1 text-[14px] text-[#959595]">mujeres</p>
                  <p className="mt-3.5 text-[29px] text-publiex-blue">48,4%</p>
                  <p className="mt-1 text-[14px] text-[#959595]">hombres</p>
                </div>
              </div>
              <p className="mt-3.5 border-t border-publiex-blue pt-2.5 font-raleway text-[12px] font-bold uppercase leading-[15px] text-publiex-blue">
                Perfil demográfico modelado
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Work and insights */}
      <section
        className="overflow-hidden bg-publiex-navy text-white"
        id="casos"
      >
        <div className="mx-auto w-full max-w-480 px-5 py-[clamp(4.5rem,5vw,6rem)] md:px-10 lg:px-24">
          <div className="mx-auto max-w-393.5">
            <div className="relative">
              <SectionLabel>Casos de éxito</SectionLabel>
              <h2 className="mt-14.5 max-w-273 font-raleway text-[clamp(2.4rem,5.5vw,4.965rem)] font-semibold leading-tight md:leading-20.5">
                Campañas que se
                <span className="block">
                  volvieron{" "}
                  <span className="text-publiex-red">parte del viaje</span>
                </span>
              </h2>
              <a
                className="mt-8 block w-full max-w-114.75 font-inter text-[16.45px] uppercase leading-normal text-white xl:absolute xl:right-0 xl:bottom-2 xl:mt-0"
                href="/case-studies"
              >
                Ver todos los casos
                <span className="mt-2 block border-t border-publiex-red" />
              </a>
            </div>
            <div className="mt-16 grid gap-5 md:grid-cols-3 xl:mt-28 xl:grid-cols-[486px_486px_483px] xl:gap-10">
              {cases.map((item) => (
                <ImagePanel
                  image={item.image}
                  key={item.title}
                  title={item.title}
                  variant="case"
                >
                  <div className="absolute left-4 top-3.5 right-4 flex justify-between font-raleway text-[15px] font-semibold uppercase leading-normal">
                    <span>{item.tag}</span>
                    <span>{item.type}</span>
                  </div>
                  <h3 className="font-raleway text-[clamp(1.5rem,2.05vw,2.465rem)] font-semibold leading-[1.1]">
                    {item.title}
                  </h3>
                </ImagePanel>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden" id="actualidad">
        <div className="mx-auto w-full max-w-480 px-5 py-20 md:px-10 lg:px-24">
          <div className="mx-auto max-w-393.5">
            <SectionLabel dark>Actualidad e insights</SectionLabel>
            <h2 className="font-raleway text-[clamp(2.4rem,5.5vw,4.965rem)] font-semibold leading-tight md:leading-20.5">
              Lo que hacemos.
              <span className="block">
                Lo que aprendemos.{" "}
                <span className="text-publiex-red">Lo que sigue.</span>
              </span>
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3 xl:grid-cols-[573px_481px_481px] xl:gap-4.75">
              {insights.map((item) => (
                <ImagePanel
                  image={item.image}
                  key={item.title}
                  title={item.title}
                  variant="insight"
                >
                  <p className="font-raleway text-xs font-bold uppercase">
                    {item.tag}
                  </p>
                  <h3 className="mt-4 font-raleway text-[clamp(1.5rem,2.16vw,2.59rem)] font-semibold leading-[1.05]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-snug md:text-base">
                    {item.description}
                  </p>
                </ImagePanel>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proposal paths */}
      <section className="overflow-hidden">
        <div className="mx-auto w-full max-w-480 py-[clamp(0rem,4.4vw,5.3125rem)]">
          <div className="mx-auto grid max-w-393.5 gap-15 md:grid-cols-2">
            <div className="bg-publiex-gradient px-5 py-16 text-white md:px-10 lg:px-10.75">
              <SectionLabel>Para agencias</SectionLabel>
              <h2 className="font-raleway text-[clamp(2rem,4vw,3.375rem)] font-semibold leading-tight md:leading-13.25">
                Más velocidad para planificar.
                Más impacto para presentar.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-tight">
                Una experiencia diseñada para planners, compradores de medios 
                y equipos comerciales que necesitan pasar de la búsqueda a 
                la propuesta sin fricción.
              </p>
              <div className="mt-8">
                <PrimaryLink href="#contacto" tone="white">
                  Acceso para agencias
                </PrimaryLink>
              </div>
            </div>
            <div className="bg-zinc-200 px-5 py-16 md:px-10 lg:px-10.75">
              <SectionLabel dark>Para propietarios</SectionLabel>
              <h2 className="font-raleway text-[clamp(2rem,4vw,3.375rem)] font-semibold leading-tight md:leading-13.25">
                Su espacio puede convertirse en un nuevo punto de referencia.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-tight">
                Una experiencia diseñada para planners, compradores de medios
                 y equipos comerciales que necesitan pasar de la búsqueda a la
                 propuesta sin fricción.
              </p>
              <div className="mt-8">
                <PrimaryLink href="#contacto" tone="blue">
                  Enviar mi ubicación
                </PrimaryLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        className="overflow-hidden bg-publiex-gradient text-white"
        id="contacto"
      >
        <div className="mx-auto grid w-full max-w-480 items-center gap-12 px-5 py-[clamp(5rem,8vw,9.5rem)] md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-24 xl:px-43.25">
          <div>
            <SectionLabel>Solicitar propuesta</SectionLabel>
            <h2 className="max-w-160 font-raleway text-[clamp(2.5rem,5.6vw,5rem)] font-semibold leading-tight md:leading-20.5">
              Cuéntenos qué quiere lograr.
              <span className="block text-publiex-red">
                Nosotros encontramos dónde.
              </span>
            </h2>
            <p className="mt-7 max-w-162.75 text-[clamp(1.25rem,1.4vw,1.6875rem)] leading-tight">
              Un formulario breve y útil para que el equipo comercial reciba el
              contexto correcto y responda con una recomendación construida para
              su marca.
            </p>
          </div>

          {/* Proposal form */}
          <form className="grid gap-5 bg-white p-6 text-black shadow-2xl md:grid-cols-2 md:p-10 xl:p-12">
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Qué quiere lograr
              <select className="min-h-12 border border-zinc-300 bg-white px-4 font-uni text-base font-normal normal-case text-black">
                <option>Seleccione un objetivo</option>
                <option>Generar reconocimiento de marca</option>
                <option>Lanzar un producto o servicio</option>
                <option>Aumentar tráfico a punto de venta</option>
                <option>Dominar una zona estratégica</option>
              </select>
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Zona de interés
              <select className="min-h-12 border border-zinc-300 bg-white px-4 font-uni text-base font-normal normal-case text-black">
                <option>Seleccione una zona</option>
                <option>Gran Área Metropolitana</option>
                <option>San José</option>
                <option>Alajuela</option>
                <option>Heredia</option>
                <option>Cartago</option>
                <option>Cobertura nacional</option>
              </select>
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase md:col-span-2">
              Nivel de cobertura
              <select className="min-h-12 border border-zinc-300 bg-white px-4 font-uni text-base font-normal normal-case text-black">
                <option>Seleccione el nivel</option>
                <option>Una ubicación clave</option>
                <option>Circuito por zona</option>
                <option>Cobertura por provincia</option>
                <option>Cobertura nacional</option>
              </select>
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Nombre
              <input className="min-h-12 border border-zinc-300 px-4 font-uni text-base font-normal normal-case" />
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Correo electrónico
              <input
                className="min-h-12 border border-zinc-300 px-4 font-uni text-base font-normal normal-case"
                type="email"
              />
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase md:col-span-2">
              Empresa
              <input className="min-h-12 border border-zinc-300 px-4 font-uni text-base font-normal normal-case" />
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase md:col-span-2">
              Nota
              <textarea className="min-h-32 border border-zinc-300 px-4 py-3 font-uni text-base font-normal normal-case" />
            </label>
            <button
              className="min-h-12 bg-publiex-red px-5 font-raleway rounded-l-41.5 text-sm font-extrabold uppercase text-white transition hover:bg-red-600 md:col-span-2 md:w-max"
              type="button"
            >
              Solicitar propuesta
            </button>
          </form>
        </div>
      </section>

      <CampaignCta />
    </main>
  );
}
