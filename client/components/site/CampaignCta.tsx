export function CampaignCta() {
  return (
    <section className="relative h-64.5 overflow-hidden bg-publiex-red text-white sm:h-80 md:h-107.5 xl:h-143.5">
      <div className="relative mx-auto h-full w-full max-w-480">
        {/* Campaign prompt */}
        <h2 className="absolute left-[9.01%] top-[34.3%] max-w-[39%] font-raleway text-[clamp(2rem,4.17vw,5rem)] font-semibold leading-[1.025]">
          Hagamos que
          <span className="block">Costa Rica</span>
          <span className="block text-black">vea su campaña</span>
        </h2>

        {/* Figma pill: fully rounded, wider than the visible viewport, clipped on the right. */}
        <a
          className="absolute left-[53.33%] top-[34.3%] flex h-[39.37%] min-h-25.5 w-[56.3%] min-w-121.5 items-center justify-start rounded-41.5 bg-black pl-[clamp(3rem,5.3vw,6.375rem)] pr-8 text-center font-raleway text-[clamp(2rem,4.17vw,5rem)] font-black uppercase leading-[1.025] text-white transition hover:bg-zinc-900"
          href="#contacto"
        >
          <span className="w-[min(28vw,481px)] min-w-57.5">
            <span className="block font-semibold">Solicitar</span>
            propuesta
          </span>
        </a>
      </div>
    </section>
  );
}
