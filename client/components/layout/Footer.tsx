import { Link } from "react-router-dom";

import { publiexAsset } from "@/lib/assets";

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

export function Footer() {
  return (
    <footer className="bg-black px-5 py-14 text-white md:px-10 lg:px-24 xl:min-h-[568px] xl:py-[43px]">
      <div className="mx-auto max-w-[1574px]">
        {/* Footer masthead */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/20 pb-10 md:flex-row md:items-start">
          <Link aria-label="Publiex" className="block h-[42px] w-[118px]" to="/">
            <img
              alt="Publiex"
              className="size-full object-contain brightness-0 invert"
              src={publiexAsset("publiex-logo.svg")}
            />
          </Link>
          <a className="font-raleway text-sm font-extrabold uppercase underline" href="#top">
            Volver arriba
          </a>
        </div>

        {/* Footer navigation groups */}
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
  );
}
