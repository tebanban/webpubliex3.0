export function CampaignCta() {
  return (
    <section className="relative h-[258px] overflow-hidden bg-publiex-red text-white sm:h-[320px] md:h-[430px] xl:h-[574px]">
      <div className="relative mx-auto h-full w-full max-w-[1920px]">
        {/* Campaign prompt */}
        <h2 className="absolute left-[9.01%] top-[34.3%] max-w-[39%] font-raleway text-[clamp(2rem,4.17vw,5rem)] font-semibold leading-[1.025]">
          Hagamos que
          <span className="block">Costa Rica</span>
          <span className="block text-black">vea su campaña</span>
        </h2>

        {/* Figma pill: fully rounded, wider than the visible viewport, clipped on the right. */}
        <a
          className="absolute left-[53.33%] top-[34.3%] flex h-[39.37%] min-h-[102px] w-[56.3%] min-w-[486px] items-center justify-start rounded-[166px] bg-black pl-[clamp(3rem,5.3vw,6.375rem)] pr-8 text-center font-raleway text-[clamp(2rem,4.17vw,5rem)] font-black uppercase leading-[1.025] text-white transition hover:bg-zinc-900"
          href="#contacto"
        >
          <span className="w-[min(28vw,481px)] min-w-[230px]">
            <span className="block font-semibold">Solicitar</span>
            propuesta
          </span>
        </a>
      </div>
    </section>
  );
}
