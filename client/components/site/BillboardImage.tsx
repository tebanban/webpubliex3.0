import { useState } from "react";

export function BillboardImage({
  src,
  alt,
  className = "",
  fit = "cover",
}: {
  src: string | null;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
}) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  if (!src || failedSource === src) {
    return (
      <div
        role="img"
        aria-label={`${alt}. Imagen no disponible`}
        className={`flex items-center justify-center bg-slate-100 p-4 text-center text-sm text-slate-500 ${className}`}
      >
        Imagen no disponible
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={`${fit === "contain" ? "object-contain bg-slate-100" : "object-cover"} ${className}`}
      loading="lazy"
      onError={() => setFailedSource(src)}
    />
  );
}
