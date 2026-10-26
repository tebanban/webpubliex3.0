import { Link } from "react-router-dom";

import { PropertySubmissionForm } from "@/components/site/PropertySubmissionForm";
import { landlordSteps } from "@/content/landlords";
import { publiexAsset } from "@/lib/assets";

export default function LandlordsPage() {
  return (
    <main className="bg-white pt-14 text-black md:pt-16 xl:pt-20">
      {/* Section 1, Property owner hero */}
      <section
        className="overflow-hidden bg-[#ececec] px-5 pt-[clamp(4rem,10.5vw,12.6rem)] pb-[clamp(3rem,5vw,6rem)] md:px-10 lg:px-24"
        id="inicio"
      >
        <div className="mx-auto w-full max-w-393.5">
          <p className="font-raleway text-sm font-bold uppercase text-publiex-blue md:text-xl">
            Publiex para propietarios de terreno
          </p>
          <h1 className="mt-10 max-w-393.5 font-raleway text-[clamp(2.5rem,4.05vw,4.85rem)] font-semibold leading-[0.996]">
            Su propiedad puede convertirse
            <br className="hidden lg:block" /> en un nuevo{" "}
            <span className="text-publiex-red">punto de referencia.</span>
          </h1>
          <p className="mt-8 max-w-273.5 font-raleway text-[clamp(1.125rem,1.43vw,1.715rem)] leading-tight">
            Desarrollamos oportunidades publicitarias en terrenos, edificios y
            espacios estratégicos con un proceso profesional, seguro y orientado
            al largo plazo.
          </p>
          <Link
            className="mt-10 inline-flex bg-publiex-blue px-4 py-2 font-raleway text-sm font-bold uppercase text-white transition hover:bg-blue-800 md:text-xl"
            to="#postular-ubicacion"
          >
            Evaluar mi ubicación
          </Link>
        </div>
      </section>

      {/* Section 2, Guided property evaluation */}
      <section
        id="postular-ubicacion"
        aria-labelledby="property-form-title"
        className="scroll-mt-20 bg-[#f8f8f8] px-5 py-[clamp(4rem,6vw,7.2rem)] md:px-10 lg:px-24 xl:pl-43.25 xl:pr-22.75"
      >
        <div className="mx-auto grid max-w-393.5 items-start gap-12 lg:grid-cols-[minmax(0,0.667fr)_minmax(0,1fr)] xl:max-w-none xl:gap-18.5">
          <div>
            <p className="font-raleway text-sm font-bold uppercase text-publiex-blue md:text-xl">
              Postule su ubicación
            </p>
            <h2
              id="property-form-title"
              className="mt-12 max-w-158.25 font-raleway text-[clamp(2.5rem,4.05vw,4.85rem)] font-semibold leading-[0.996]"
            >
              <span className="text-publiex-red">Primero,</span> veamos el
              potencial del lugar.
            </h2>
            <p className="mt-12 max-w-160.75 font-raleway text-[clamp(1.125rem,1.43vw,1.715rem)] leading-tight">
              Complete tres pasos sencillos. La evaluación inicial toma menos de
              cinco minutos y no requiere documentos legales.
            </p>
          </div>
          <PropertySubmissionForm />
        </div>
      </section>

      {/* Section 3, Location potential image */}
      <section className="relative overflow-hidden text-white">
        <div className="relative h-[clamp(26rem,36.8vw,44.1875rem)] overflow-hidden">
          <img
            alt="Valla publicitaria Publiex sobre una ruta principal"
            className="absolute top-[-73.19%] left-[-11.18%] h-[215.24%] w-[137.63%] max-w-none"
            src={publiexAsset("landlords-location.png")}
          />
        </div>
        <img
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 max-w-none -translate-x-1/2 mix-blend-multiply"
          src={publiexAsset("landlords-image-shade.svg")}
        />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-[clamp(2rem,3vw,3.75rem)] md:px-10 lg:px-24">
          <div className="mx-auto w-full max-w-393.5">
            <h2 className="max-w-250 font-raleway text-[clamp(2.75rem,5vw,4.85rem)] font-semibold leading-none">
              Una buena ubicación
              <span className="block">
                puede{" "}
                <strong className="font-black">cambiar el paisaje.</strong>
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Section 4, Owner onboarding process */}
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

      {/* Section 5, Property submission CTA */}
      <section className="overflow-hidden bg-[#12294e] text-white">
        <div className="mx-auto grid min-h-[clamp(18rem,23.9vw,28.7rem)] w-full max-w-480 items-center gap-10 px-5 py-14 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.74fr)] lg:px-24 xl:pl-43 xl:pr-0">
          <div className="font-raleway">
            <p className="text-sm font-bold uppercase md:text-xl">
              Transparencia · factibilidad · comercialización · mantenimiento
            </p>
            <h2 className="mt-8 max-w-201.5 text-[clamp(2.5rem,4.04vw,4.85rem)] font-semibold leading-none">
              Usted aporta el lugar.
              <span className="block text-[#74a9ff]">
                Publiex desarrolla el potencial.
              </span>
            </h2>
          </div>
          <Link
            className="flex min-h-[clamp(7rem,11.15vw,13.375rem)] w-full items-center justify-center rounded-l-[999px] bg-[#8db8ff] px-10 text-center font-raleway text-[clamp(2.3rem,4.17vw,5rem)] font-bold uppercase leading-none text-white transition hover:bg-[#78a8f6]"
            to="#postular-ubicacion"
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
