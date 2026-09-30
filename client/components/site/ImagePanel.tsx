import type { ReactNode } from "react";

import { publiexAsset } from "@/lib/assets";

const panelShape = {
  solution: "aspect-square w-full min-w-0",
  case: "aspect-[486/567] w-full min-w-0",
  insight: "aspect-[573/728] w-full min-w-0 xl:aspect-auto xl:h-182",
};

const panelHeight = {
  solution: "min-h-0",
  case: "min-h-80",
  insight: "min-h-80",
};

const panelPadding = {
  solution: "p-4 md:p-5",
  case: "p-6 md:p-8",
  insight: "p-6 md:p-8",
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
      className={`group relative overflow-hidden bg-zinc-900 [container-type:inline-size] ${panelHeight[variant]} ${panelShape[variant]}`}
    >
      <img
        alt={title}
        className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
        src={publiexAsset(image)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/80" />
      <div
        className={`relative flex h-full min-h-0 flex-col justify-end text-white ${panelPadding[variant]}`}
      >
        {children}
      </div>
    </article>
  );
}
