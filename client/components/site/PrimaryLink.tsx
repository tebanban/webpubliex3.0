import { ArrowRight } from "lucide-react";

const tones = {
  red: "bg-publiex-red text-white hover:bg-red-600",
  black: "bg-black text-white hover:bg-zinc-800",
  white: "bg-white text-black hover:bg-zinc-100",
  blue: "bg-publiex-blue text-white hover:bg-blue-700",
};

const weights = {
  normal: "font-normal",
  extrabold: "font-extrabold",
};

export function PrimaryLink({
  href,
  children,
  tone = "red",
  weight = "extrabold",
}: {
  href: string;
  children: string;
  tone?: keyof typeof tones;
  weight?: keyof typeof weights;
}) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 px-5 font-raleway text-sm uppercase transition md:min-h-12.5 md:text-[19.44px] ${weights[weight]} ${tones[tone]}`}
      href={href}
    >
      {children}
      <ArrowRight aria-hidden className="size-4 shrink-0" />
    </a>
  );
}
