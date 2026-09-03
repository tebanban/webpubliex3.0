export function SectionLabel({
  children,
  dark = false,
}: {
  children: string;
  dark?: boolean;
}) {
  return (
    <p
      className={`mb-5 font-raleway text-sm font-extrabold uppercase tracking-normal md:mb-6 md:text-2xl ${
        dark ? "text-black" : "text-white"
      }`}
    >
      {children}
    </p>
  );
}
