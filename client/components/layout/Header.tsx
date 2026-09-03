import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import { publiexAsset } from "@/lib/assets";

const navItems = [
  ["Nosotros", "/about"],
  ["Soluciones publicitarias", "/products"],
  ["Explorar ubicaciones", "/locations"],
  ["Analítica", "/#analitica"],
  ["Actualidad", "/#actualidad"],
  ["Casos", "/case-studies"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex h-20 max-w-[1574px] items-center justify-between px-5 md:px-10 xl:h-[158px] xl:px-0">
        {/* Brand mark */}
        <Link
          aria-label="Publiex"
          className="block h-[42px] w-[118px] md:h-[56px] md:w-[157px] xl:h-[75px] xl:w-[210px]"
          to="/"
        >
          <img
            alt="Publiex"
            className="size-full object-contain"
            src={publiexAsset("publiex-logo.svg")}
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="font-uni hidden items-center gap-7 text-[18.25px] font-normal uppercase tracking-normal lg:flex xl:gap-10">
          {navItems.map(([label, href]) => (
            <Link className="transition hover:text-publiex-red" key={href} to={href}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Primary action */}
        <Link
          className="hidden h-[29px] items-center bg-publiex-red px-4 font-raleway text-[17.81px] font-extrabold uppercase leading-none text-white transition hover:bg-red-600 md:inline-flex"
          to="/#contacto"
        >
          Solicitar propuesta
        </Link>

        <button
          aria-label="Abrir navegación"
          className="inline-flex size-11 items-center justify-center border border-black/15 lg:hidden"
          type="button"
        >
          <Menu className="size-5" />
        </button>
      </div>
    </header>
  );
}
