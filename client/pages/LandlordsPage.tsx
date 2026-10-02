import { Link } from "react-router-dom";

import { publiexAsset } from "@/lib/assets";

const landlordSteps = [
  {
    number: "01",
    title: "Postule",
    copy: "Comparta la ubicación, fotografías, dimensiones y datos de contacto.",
  },
  {
    number: "02",
    title: "Evaluamos",
    copy: "Analizamos visibilidad, tránsito, normativa, factibilidad y potencial comercial.",
  },
  {
    number: "03",
    title: "Diseñamos",
    copy: "Definimos el formato, la tecnología y el modelo de colaboración apropiado.",
  },
  {
    number: "04",
    title: "Activamos",
    copy: "Publiex gestiona comercialización, producción, operación y mantenimiento.",
  },
];

export default function LandlordsPage() {
  return (
    <main className="bg-white pt-14 text-black md:pt-16 xl:pt-20">
      {/* Section 1, Property owner hero */}
      <section
        className="overflow-hidden bg-publiex-red px-5 py-[clamp(4rem,7.8vw,9.375rem)] text-white md:px-10 lg:px-24"
        id="inicio"
      >
        <div className="mx-auto w-full max-w-393.5">
          <p className="font-raleway text-sm font-bold uppercase md:text-xl">
            Publiex para propietarios
          </p>
          <h1 className="mt-8 max-w-310 font-raleway text-[clamp(2.75rem,5vw,4.85rem)] font-semibold leading-none">
            Su espacio puede convertirse
            <span className="block text-black">
              en un nuevo punto de referencia.
            </span>
          </h1>
          <p className="mt-8 max-w-206 font-raleway text-[clamp(1.125rem,1.43vw,1.715rem)] leading-tight">
            Una experiencia diseñada para propietarios que quieren convertir una
            ubicación visible en un activo comercial con operación profesional.
          </p>
          <Link
            className="mt-10 inline-flex bg-publiex-blue px-4 py-2 font-raleway text-sm font-bold uppercase text-white transition hover:bg-blue-800 md:text-xl"
            to="/contact"
          >
            Enviar mi ubicación
          </Link>
        </div>
      </section>

      {/* Section 2, Location potential image */}
      <section className="relative overflow-hidden text-white">
        <img
          alt="Valla publicitaria Publiex sobre una ruta principal"
          className="h-[clamp(26rem,36.8vw,44.1875rem)] w-full object-cover object-center"
          src={publiexAsset("landlords-hero-billboard.png")}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-[clamp(2rem,3vw,3.75rem)] md:px-10 lg:px-24">
          <div className="mx-auto w-full max-w-393.5">
            <h2 className="max-w-250 font-raleway text-[clamp(2.75rem,5vw,4.85rem)] font-semibold leading-none lowercase">
              Una buena ubicación
              <span className="block">puede cambiar el paisaje.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Section 3, Owner onboarding process */}
      <section className="overflow-hidden bg-white px-5 md:px-10 lg:px-24">
        <div className="mx-auto grid w-full max-w-393.5 border-l border-black/40 sm:grid-cols-2 xl:grid-cols-4">
          {landlordSteps.map((step) => (
            <article
              className="min-h-[clamp(15rem,18.35vw,22rem)] border-r border-b border-black/40 p-[clamp(1.5rem,1.7vw,2rem)] font-raleway xl:border-b-0"
              key={step.number}
            >
              <p className="text-sm font-bold text-publiex-red md:text-xl">
                {step.number}
              </p>
              <h2 className="mt-[clamp(2.25rem,3vw,3.75rem)] max-w-70 text-[clamp(1.6rem,1.83vw,2.1875rem)] font-semibold leading-[1.05]">
                {step.title}
              </h2>
              <p className="mt-8 max-w-82 text-[clamp(1rem,1.25vw,1.5rem)] leading-none">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Section 4, Property submission CTA */}
      <section className="overflow-hidden bg-publiex-blue-deep text-white">
        <div className="mx-auto grid min-h-[clamp(18rem,22.35vw,26.875rem)] w-full max-w-480 items-center gap-10 px-5 py-14 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.95fr)] lg:px-24 xl:pl-43 xl:pr-0">
          <div className="font-raleway">
            <p className="text-sm font-bold uppercase md:text-xl">
              Transparencia · factibilidad · comercialización · mantenimiento
            </p>
            <h2 className="mt-8 max-w-170 text-[clamp(2.5rem,4.04vw,4.85rem)] font-semibold leading-none">
              Usted aporta el lugar.
              <span className="block text-[#74a9ff]">
                Publiex desarrolla el potencial.
              </span>
            </h2>
          </div>
          <Link
            className="flex min-h-[clamp(7rem,11.15vw,13.375rem)] w-full items-center justify-center rounded-l-[999px] bg-[#8db8ff] px-10 text-center font-raleway text-[clamp(2.3rem,4.17vw,5rem)] font-bold uppercase leading-none text-white transition hover:bg-[#78a8f6]"
            to="/contact"
          >
            <span>
              <span className="block font-semibold">Postular</span>
              <span className="block">espacio</span>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
