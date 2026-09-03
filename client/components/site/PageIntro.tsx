import type { ReactNode } from "react";

import { SectionLabel } from "./SectionLabel";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-publiex-gradient px-5 py-24 text-white md:px-10 lg:px-24 xl:py-32">
      <div className="mx-auto max-w-[1574px]">
        {/* Page masthead */}
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="max-w-[1100px] font-raleway text-[clamp(2.6rem,6vw,5.965rem)] font-semibold uppercase leading-[1.03]">
          {title}
        </h1>
        <p className="mt-8 max-w-[820px] text-xl leading-tight md:text-[31.44px]">
          {description}
        </p>
      </div>
    </section>
  );
}
