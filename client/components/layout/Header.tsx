import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { publiexAsset } from "@/lib/assets";
import { cn } from "@/lib/utils";

const navItems = [
  ["Nosotros", "/about"],
  ["Soluciones publicitarias", "/products"],
  ["Explorar ubicaciones", "/locations"],
  ["Analítica", "/#analitica"],
  ["Actualidad", "/#actualidad"],
  ["Casos", "/case-studies"],
];

export function Header() {
  const { pathname } = useLocation();
  const [isPastHero, setIsPastHero] = useState(pathname !== "/");

  useEffect(() => {
    const updateHeaderTheme = () => {
      const hero = document.getElementById("inicio");

      if (!hero) {
        setIsPastHero(true);
        return;
      }

      const headerHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;

      setIsPastHero(hero.getBoundingClientRect().bottom <= headerHeight);
    };

    updateHeaderTheme();
    window.addEventListener("scroll", updateHeaderTheme, { passive: true });
    window.addEventListener("resize", updateHeaderTheme);

    return () => {
      window.removeEventListener("scroll", updateHeaderTheme);
      window.removeEventListener("resize", updateHeaderTheme);
    };
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isPastHero
          ? "border-zinc-200 bg-white text-zinc-800 shadow-sm"
          : "border-white/35 bg-black/5 text-white",
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-480 items-center justify-start px-5 md:h-16 md:px-10 xl:h-20 xl:px-44.5">
        {/* Brand mark */}
        <Link
          aria-label="Publiex"
          className="block h-7.5 w-21 md:h-9 md:w-25 xl:h-10 xl:w-28"
          to="/"
        >
          <img
            alt="Publiex"
            className={cn(
              "size-full object-contain transition duration-300",
              !isPastHero && "brightness-0 invert",
            )}
            src={publiexAsset("publiex-logo.svg")}
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className={cn(
            "font-uni ml-10 hidden items-stretch divide-x border-x text-sm font-normal uppercase leading-tight tracking-normal transition-colors duration-300 lg:flex xl:ml-16",
            isPastHero
              ? "divide-zinc-300 border-zinc-300"
              : "divide-white/35 border-white/35",
          )}
        >
          {navItems.map(([label, href]) => (
            <Link
              className={cn(
                "flex min-h-8 max-w-[14ch] flex-wrap items-center justify-center gap-x-1.5 px-4 text-center whitespace-normal break-normal transition xl:px-5",
                isPastHero ? "hover:text-zinc-950" : "hover:text-white/75",
              )}
              key={href}
              to={href}
            >
              {label.split(" ").map((word, index) => (
                <span
                  className="inline-block whitespace-nowrap wrap-normal break-keep"
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
          className="ml-auto hidden min-h-7.25 max-w-[16ch] flex-wrap items-center justify-center gap-x-1.5 bg-publiex-red px-4 py-1 text-center font-raleway text-sm font-extrabold uppercase leading-tight text-white whitespace-normal break-normal transition hover:bg-red-600 md:inline-flex"
          to="/#contacto"
        >
          {"Solicitar propuesta".split(" ").map((word, index) => (
            <span
              className="inline-block whitespace-nowrap wrap-normal break-keep"
              key={`${word}-${index}`}
            >
              {index > 0 ? " " : ""}
              {word}
            </span>
          ))}
        </Link>

        <button
          aria-label="Abrir navegación"
          className={cn(
            "ml-auto inline-flex size-10 items-center justify-center border transition-colors duration-300 lg:hidden md:ml-4",
            isPastHero
              ? "border-zinc-300 text-zinc-800"
              : "border-white/30 text-white",
          )}
          type="button"
        >
          <Menu className="size-5" />
        </button>
      </div>
    </header>
  );
}
