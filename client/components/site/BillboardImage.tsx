import { useState } from "react";

export function BillboardImage({
  src,
  alt,
  className = "",
}: {
  src: string | null;
  alt: string;
  className?: string;
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
      className={`object-cover ${className}`}
      loading="lazy"
      onError={() => setFailedSource(src)}
    />
  );
}
