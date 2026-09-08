import { ArrowRight } from "lucide-react";

import { CampaignCta } from "@/components/site/CampaignCta";
import { ImagePanel } from "@/components/site/ImagePanel";
import { PrimaryLink } from "@/components/site/PrimaryLink";
import { SectionLabel } from "@/components/site/SectionLabel";
import { cases, insights, solutions, stats } from "@/content/home";
import { publiexAsset } from "@/lib/assets";

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden text-white" id="inicio">
        <img
          alt="Vallas publicitarias Publiex sobre una vía principal de Costa Rica"
          className="absolute inset-0 size-full object-cover"
          src={publiexAsset("figma-home-hero.jpeg")}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0047ba]/70 via-[#0047ba]/15 to-black/70" />
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[1920px] items-end px-5 pb-12 pt-28 md:px-10 md:pb-20 xl:min-h-[1204px]">
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
            <div className="mt-10 flex flex-col text-[18px] items-center justify-center gap-5 sm:flex-row">
              <PrimaryLink href="#contacto" weight="normal">
                Diseñar mi campaña
              </PrimaryLink>
              <a
                className="font-raleway text-[18px] font-normal uppercase underline underline-offset-4"
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
        <div className="mx-auto grid min-h-[903px] w-full max-w-[1920px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="px-5 py-20 md:px-10 lg:py-[166px] xl:pl-[166px] xl:pr-16">
            
            <h2 className="max-w-[520px] font-raleway text-[clamp(2.4rem,5.4vw,4.965rem)] font-semibold leading-[1.03]">
              Encuentre el lugar{" "}
              <span className="text-publiex-red">
                donde su marca debe estar.
              </span>
            </h2>
            <p className="font-uni mt-7 max-w-[670px] text-xl leading-tight md:text-[31.44px]">
              Explore una muestra de cobertura por formato y provincia. Cada
              consulta puede convertirse en una selección curada con ficha
              técnica, métricas y disponibilidad confirmada.
            </p>
            <a
              className="mt-9 inline-flex text-[16px] items-center gap-3 font-raleway text-sm  uppercase underline underline-offset-4"
              href="#contacto"
            >
              Buscar <ArrowRight aria-hidden className="size-4" />
            </a>
          </div>
          <img
            alt="Pantalla digital Publiex en una zona urbana nocturna"
            className="h-full min-h-[360px] w-full object-cover"
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
        <div className="relative mx-auto flex min-h-[720px] w-full max-w-[1920px] items-center justify-end px-5 py-20 md:px-10 lg:px-24 xl:min-h-[1137px] xl:items-start xl:pt-[177px]">
          <div className="max-w-[660px] text-right xl:mr-[60px]">
            <SectionLabel>Impacto</SectionLabel>
            <h2 className="font-raleway text-[clamp(2.8rem,7vw,5.965rem)] font-semibold leading-none">
              Afuera no <span className="text-publiex-red">hay skip ad</span>
            </h2>
            <p className="mt-8 max-w-[660px] text-xl leading-tight md:text-[31.44px]">
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
        <div className="relative mx-auto flex min-h-[700px] w-full max-w-[1920px] items-center justify-end px-5 py-20 md:px-10 lg:px-24 xl:min-h-[1062px]">
          <div className="max-w-[710px] text-right xl:mr-[65px] xl:mt-[120px]">
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
            <p className="font-uni mt-8 text-xl leading-tight md:text-[31.44px]">
              Somos una empresa especializada desde 1999 en publicidad exterior
              con más de 27 años de trayectoria en Costa Rica, dándole a cada
              cliente la solución para hacer crecer sus marcas.
            </p>
          </div>
        </div>
      </section>

      {/* Advertising solutions */}
      <section
        className="overflow-hidden bg-publiex-gradient text-white"
        id="soluciones"
      >
        <div className="mx-auto w-full max-w-[1920px] px-5 py-20 md:px-10 lg:px-24 xl:min-h-[2140px] xl:pt-[71px]">
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
            <div className="mt-[86px] grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-4">
              {solutions.map((solution) => (
                <ImagePanel
                  image={solution.image}
                  key={solution.title}
                  title={solution.title}
                >
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
        </div>
      </section>

      {/* Large format */}
      <section className="overflow-hidden">
        <div className="mx-auto grid min-h-[720px] w-full max-w-[1920px] gap-0 lg:grid-cols-[51.5%_48.5%] xl:min-h-[1101px]">
          <img
            alt="Mega formato Publiex en una vía principal"
            className="h-full min-h-[520px] w-full object-cover"
            src={publiexAsset("figma-large-format.jpeg")}
          />
          <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-[60px] xl:justify-start xl:py-[81px]">
            <SectionLabel dark>Gran formato</SectionLabel>
            <h2 className="max-w-[744px] font-raleway text-[clamp(2.3rem,5vw,6.4rem)] font-semibold leading-[0.97]">
              Cuando una marca necesita dominar, el espacio debe estar a su
              altura.
            </h2>
            <p className="mt-7 max-w-2xl text-xl leading-tight md:text-[27px]">
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
        <div className="mx-auto grid min-h-[720px] w-full max-w-[1920px] gap-0 lg:grid-cols-[51%_49%] xl:min-h-[1103px]">
          <div className="px-5 py-20 md:px-10 lg:px-24 xl:py-[74px] xl:pl-[173px] xl:pr-[60px]">
            <SectionLabel dark>Mobiliario urbano</SectionLabel>
            <h2 className="max-w-[744px] font-raleway text-[clamp(2.3rem,5vw,6.4rem)] font-semibold leading-[0.97]">
              Convierta una ruta completa en una secuencia de marca.
            </h2>
            <p className="mt-7 max-w-2xl text-xl leading-tight md:text-[27px]">
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
            className="h-full min-h-[520px] w-full object-cover"
            src={publiexAsset("figma-urban-furniture.jpeg")}
          />
        </div>
      </section>

      {/* Transport and special projects */}
      <section
        className="overflow-hidden bg-publiex-navy text-white"
        id="analitica"
      >
        <div className="mx-auto grid min-h-[720px] w-full max-w-[1920px] lg:grid-cols-[52%_48%] xl:min-h-[1101px]">
          <img
            alt="Publicidad exterior en tren"
            className="h-full min-h-[520px] w-full object-cover"
            src={publiexAsset("figma-transport.jpeg")}
          />
          <div className="px-5 py-20 md:px-10 lg:px-24 xl:py-32.5 xl:pl-20.5">
            <SectionLabel>Publicidad en transporte</SectionLabel>
            <h2 className="max-w-[732px] font-raleway text-[clamp(2.4rem,5.8vw,6.4rem)] font-semibold leading-[0.97]">
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
        </div>
      </section>

      {/* Digital and special formats */}
      <section className="overflow-hidden border-t border-zinc-300">
        <div className="mx-auto grid w-full max-w-[1920px] gap-10 px-5 py-20 md:px-10 lg:grid-cols-2 lg:px-24 xl:min-h-[1243px] xl:gap-[213px] xl:px-[93px] xl:py-[76px]">
          <article>
            <img
              alt="Pantalla digital Publiex con contenido dinámico"
              className="aspect-[756/518] w-full object-cover"
              src={publiexAsset("figma-dooh-raw-1.jpeg")}
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
              className="aspect-[756/518] w-full object-cover"
              src={publiexAsset("figma-special-projects.jpeg")}
            />
            <SectionLabel dark>Proyectos especiales</SectionLabel>
            <h2 className="font-raleway text-[clamp(2rem,4vw,4.375rem)] font-semibold leading-tight md:leading-[80px]">
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
        <div className="mx-auto w-full max-w-[1920px] px-5 py-20 md:px-10 lg:px-24 xl:min-h-[990px] xl:py-[99px]">
          <div className="mx-auto grid max-w-[1574px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionLabel dark>Datos y audiencias</SectionLabel>
              <h2 className="font-raleway text-[clamp(2.7rem,6vw,7.465rem)] font-bold uppercase leading-[0.94]">
                No compre espacios.
                <span className="block lowercase">Conquiste audiencias.</span>
              </h2>
              <p className="font-uni mt-7 max-w-[656px] text-xl leading-tight md:text-[31.44px]">
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
                Estimación basada en dispositivos móviles únicos detectados
                frente a los activos.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-[980px] gap-5 md:grid-cols-3">
            {stats.map((stat) => (
              <article className="bg-white p-6 shadow-sm" key={stat.label}>
                <h3 className="font-raleway text-sm font-bold uppercase">
                  {stat.label}
                </h3>
                <p className="mt-4 font-raleway text-4xl font-bold">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm leading-snug">{stat.detail}</p>
                <p className="mt-5 border-t border-publiex-blue pt-3 font-raleway text-xs font-extrabold uppercase text-publiex-blue">
                  {stat.footnote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work and insights */}
      <section
        className="overflow-hidden bg-publiex-navy text-white"
        id="casos"
      >
        <div className="mx-auto w-full max-w-[1920px] px-5 py-20 md:px-10 lg:px-24">
          <div className="mx-auto max-w-[1574px]">
            <SectionLabel>Casos de éxito</SectionLabel>
            <h2 className="font-raleway text-[clamp(2.4rem,5.5vw,4.965rem)] font-semibold leading-tight md:leading-[82px]">
              Campañas que se volvieron{" "}
              <span className="text-publiex-red">parte del viaje.</span>
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3 xl:gap-10">
              {cases.map((item) => (
                <ImagePanel
                  image={item.image}
                  key={item.title}
                  title={item.title}
                  variant="case"
                >
                  <div className="absolute left-6 top-6 right-6 flex justify-between font-raleway text-xs font-bold uppercase">
                    <span>{item.tag}</span>
                    <span>{item.type}</span>
                  </div>
                  <h3 className="font-raleway text-2xl font-semibold leading-tight md:text-[39.44px] md:leading-[44px]">
                    {item.title}
                  </h3>
                </ImagePanel>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden" id="actualidad">
        <div className="mx-auto w-full max-w-[1920px] px-5 py-20 md:px-10 lg:px-24">
          <div className="mx-auto max-w-[1574px]">
            <SectionLabel dark>Actualidad e insights</SectionLabel>
            <h2 className="font-raleway text-[clamp(2.4rem,5.5vw,4.965rem)] font-semibold leading-tight md:leading-[82px]">
              Lo que hacemos. Lo que aprendemos.{" "}
              <span className="text-publiex-red">Lo que sigue.</span>
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3 xl:grid-cols-[573px_481px_481px] xl:gap-[19px]">
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
                  <h3 className="mt-4 font-raleway text-2xl font-semibold leading-tight md:text-[41.44px] md:leading-[37px]">
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
        <div className="mx-auto w-full max-w-[1920px] xl:py-[85px]">
          <div className="mx-auto grid max-w-[1574px] md:grid-cols-2">
            <div className="bg-publiex-gradient px-5 py-16 text-white md:px-10 lg:px-[43px]">
              <SectionLabel>Para agencias</SectionLabel>
              <h2 className="font-raleway text-[clamp(2rem,4vw,3.375rem)] font-semibold leading-tight md:leading-[53px]">
                Acceso a inventario, especificaciones y propuestas en un solo
                lugar.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-tight">
                Media kits, disponibilidad, propuestas co-brandeadas y
                seguimiento de campañas para equipos que necesitan velocidad y
                precisión.
              </p>
              <div className="mt-8">
                <PrimaryLink href="#contacto" tone="white">
                  Acceso para agencias
                </PrimaryLink>
              </div>
            </div>
            <div className="bg-zinc-200 px-5 py-16 md:px-10 lg:px-[43px]">
              <SectionLabel dark>Para propietarios</SectionLabel>
              <h2 className="font-raleway text-[clamp(2rem,4vw,3.375rem)] font-semibold leading-tight md:leading-[53px]">
                Evalúe el potencial comercial de su terreno, edificio o espacio.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-tight">
                Un proceso claro, profesional y respaldado por Publiex para
                valorar nuevas ubicaciones.
              </p>
              <div className="mt-8">
                <PrimaryLink href="#contacto" tone="blue">
                  Postular una ubicación
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
        <div className="mx-auto grid min-h-[760px] w-full max-w-[1920px] items-center gap-12 px-5 py-20 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-24 xl:min-h-[1045px] xl:px-[173px]">
          <div>
            <SectionLabel>Solicitar propuesta</SectionLabel>
            <h2 className="max-w-[640px] font-raleway text-[clamp(2.5rem,5.6vw,5rem)] font-semibold leading-tight md:leading-[82px]">
              Cuéntenos qué quiere lograr.
              <span className="block text-publiex-red">
                Nosotros encontramos dónde.
              </span>
            </h2>
            <p className="mt-7 max-w-[651px] text-xl leading-tight md:text-[27px]">
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
              Name
              <input className="min-h-12 border border-zinc-300 px-4 font-uni text-base font-normal normal-case" />
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase">
              Email
              <input
                className="min-h-12 border border-zinc-300 px-4 font-uni text-base font-normal normal-case"
                type="email"
              />
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase md:col-span-2">
              Business
              <input className="min-h-12 border border-zinc-300 px-4 font-uni text-base font-normal normal-case" />
            </label>
            <label className="grid gap-2 font-raleway text-sm font-bold uppercase md:col-span-2">
              Note
              <textarea className="min-h-32 border border-zinc-300 px-4 py-3 font-uni text-base font-normal normal-case" />
            </label>
            <button
              className="min-h-12 bg-publiex-red px-5 font-raleway text-sm font-extrabold uppercase text-white transition hover:bg-red-600 md:col-span-2 md:w-max"
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
