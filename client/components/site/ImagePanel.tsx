import type { ReactNode } from "react";

import { publiexAsset } from "@/lib/assets";

const panelShape = {
  solution: "aspect-square xl:h-128",
  case: "aspect-[486/567] xl:h-141.75",
  insight: "aspect-[573/728] xl:h-182",
};

export function ImagePanel({
  image,
  title,
  children,
  variant = "solution",
}: {
  image: string;
  title: string;
  children: ReactNode;
  variant?: keyof typeof panelShape;
}) {
  return (
    <article
      className={`group relative min-h-80 overflow-hidden bg-zinc-900 ${panelShape[variant]}`}
    >
      <img
        alt={title}
        className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
        src={publiexAsset(image)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/80" />
      <div className="relative flex min-h-80 flex-col justify-end p-6 text-white md:min-h-full md:p-8">
        {children}
      </div>
    </article>
  );
}
