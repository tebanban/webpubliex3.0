import { Link } from "react-router-dom";

import { publiexAsset } from "@/lib/assets";

const footerGroups = [
  {
    title: "Soluciones",
    links: [
      ["Vallas y unipolares", "/products"],
      ["Mega Landmarks", "/products"],
      ["Banner posts", "/products"],
      ["DOOH", "/products"],
      ["Trenes", "/products"],
    ],
  },
  {
    title: "Planificar",
    links: [
      ["Ubicaciones", "/locations"],
      ["Audiencias", "/#analitica"],
      ["Solicitar media kit", "/#contacto"],
      ["Cotizar", "/#contacto"],
    ],
  },
  {
    title: "Publiex",
    links: [
      ["Nosotros", "/about"],
      ["Sostenibilidad", "/about"],
      ["Agencias", "/#contacto"],
      ["Sistema visual", "/about"],
    ],
  },
  {
    title: "Contacto",
    links: [
      ["ventas@publiexcr.com", "mailto:ventas@publiexcr.com"],
      ["+506 2525-1010", "tel:+50625251010"],
      ["Agendar reunión", "/#contacto"],
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    icon: "footer-social-4.svg",
    href: "https://www.instagram.com/",
  },
  {
    label: "Facebook",
    icon: "footer-social-5.svg",
    href: "https://www.facebook.com/",
  },
  {
    label: "LinkedIn",
    icon: "footer-social-3.svg",
    href: "https://www.linkedin.com/",
  },
  {
    label: "YouTube",
    icon: "footer-social-2.svg",
    href: "https://www.youtube.com/",
  },
];

export function Footer() {
  return (
    <footer className="relative min-h-[568px] overflow-hidden bg-publiex-gradient px-5 py-10 text-white md:px-10 lg:px-24 xl:py-[43px]">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          alt=""
          aria-hidden="true"
          className="h-[1947px] w-[568px] rotate-90 object-fill"
          src={publiexAsset("footer-background.svg")}
        />
      </div>

      <div className="relative mx-auto grid min-h-[488px] max-w-[1574px] grid-rows-[auto_1fr_auto]">
        {/* Footer top */}
        <div className="relative flex min-h-[82px] items-start justify-center">
          <Link
            aria-label="Publiex"
            className="mt-[5px] block h-[67px] w-[185px]"
            to="/"
          >
            <img
              alt="Publiex"
              className="size-full object-contain"
              src={publiexAsset("footer-logo.svg")}
            />
          </Link>
          <a
            className="absolute right-0 top-0 inline-flex items-center gap-2 font-raleway text-[19px] font-extrabold lowercase leading-9 text-white transition hover:text-white/80"
            href="#top"
          >
            volver arriba
            <img
              alt=""
              aria-hidden="true"
              className="h-[19px] w-[21px] object-contain"
              src={publiexAsset("footer-arrow.svg")}
            />
          </a>
        </div>

        {/* Footer menu columns */}
        <div className="grid gap-10 pt-[58px] sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[170px_170px_119px_172px] xl:justify-between">
          {footerGroups.map((group) => (
            <nav aria-label={group.title} key={group.title}>
              <h3 className="font-uni text-base font-bold uppercase leading-9 text-[#3e88bd]">
                {group.title}
              </h3>
              <ul className="text-base uppercase leading-9">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a className="transition hover:text-white/80" href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-[44px] pb-[53px] pt-10">
          {socialLinks.map((item) => (
            <a
              aria-label={item.label}
              className="block size-[54px] transition hover:opacity-80"
              href={item.href}
              key={item.label}
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt=""
                aria-hidden="true"
                className="size-full object-contain"
                src={publiexAsset(item.icon)}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
