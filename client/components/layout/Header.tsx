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
      <div className="mx-auto flex h-20 w-full max-w-[1920px] items-center justify-between px-5 md:px-10 xl:h-[158px] xl:px-[178px]">
        {/* Brand mark */}
        <Link
          aria-label="Publiex"
          className="block h-10.5 w-29.5 md:h-14 md:w-39.25 xl:h-18.75 xl:w-52.5"
          to="/"
        >
          <img
            alt="Publiex"
            className="size-full object-contain"
            src={publiexAsset("publiex-logo.svg")}
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="font-uni hidden items-center gap-7 text-[16px] font-normal uppercase leading-tight tracking-normal lg:flex xl:gap-10">
          {navItems.map(([label, href]) => (
            <Link
              className="flex max-w-[14ch] flex-wrap justify-center gap-x-1.5 text-center whitespace-normal transition [overflow-wrap:normal] [word-break:normal] hover:text-publiex-red"
              key={href}
              to={href}
            >
              {label.split(" ").map((word, index) => (
                <span
                  className="inline-block whitespace-nowrap [overflow-wrap:normal] [word-break:keep-all]"
                  key={`${word}-${index}`}
                >
                  {index > 0 ? " " : ""}
                  {word}
                </span>
              ))}
            </Link>
          ))}
        </nav>

        {/* Primary action */}
        <Link
          className="hidden min-h-7.25 max-w-[16ch] flex-wrap items-center justify-center gap-x-1.5 bg-publiex-red px-4 py-1 text-center font-raleway text-[17.81px] font-extrabold uppercase leading-tight text-white whitespace-normal transition [overflow-wrap:normal] [word-break:normal] hover:bg-red-600 md:inline-flex"
          to="/#contacto"
        >
          {"Solicitar propuesta".split(" ").map((word, index) => (
            <span
              className="inline-block whitespace-nowrap [overflow-wrap:normal] [word-break:keep-all]"
              key={`${word}-${index}`}
            >
              {index > 0 ? " " : ""}
              {word}
            </span>
          ))}
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
