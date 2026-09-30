import type { ReactNode } from "react";

import { SectionLabel } from "./SectionLabel";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-publiex-gradient px-5 pb-[clamp(5rem,6.7vw,8rem)] pt-[clamp(8rem,11.7vw,14rem)] text-white md:px-10 lg:px-24">
      <div className="mx-auto max-w-393.5">
        {/* Page masthead */}
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="max-w-275 font-raleway text-[clamp(2.6rem,6vw,5.965rem)] font-semibold uppercase leading-[1.03]">
          {title}
        </h1>
        <p className="mt-8 max-w-205 text-[clamp(1.25rem,1.65vw,1.965rem)] leading-tight">
          {description}
        </p>
      </div>
    </section>
  );
}
