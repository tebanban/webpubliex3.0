import type { PubliexLocation } from "@/content/locations";
import { BillboardImage } from "./BillboardImage";

export function BillboardPreview({
  face,
  faces,
  onSelect,
  onAdd,
  saved,
  atLimit,
}: {
  face: PubliexLocation;
  faces: PubliexLocation[];
  onSelect: (id: string) => void;
  onAdd: (id: string) => void;
  saved: boolean;
  atLimit: boolean;
}) {
  return (
    <div className="space-y-4 text-sm [--publiex-paragraph-font-size:0.875rem]">
      {/* Each face has its own image and direction at the shared map position. */}
      <BillboardImage
        src={face.image}
        alt={face.imageAlt}
        className="aspect-[1458/923] w-full rounded"
        fit="contain"
      />
      <p className="font-bold text-publiex-blue">{face.code}</p>
      <h3 className="font-raleway text-xl font-semibold">{face.title}</h3>
      <fieldset>
        <legend className="mb-2 font-semibold">Cara de la valla</legend>
        <div className="flex flex-wrap gap-2">
          {faces.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={item.id === face.id}
              className={`min-h-11 rounded border px-3 ${item.id === face.id ? "bg-publiex-blue text-white" : "bg-white text-slate-700"}`}
              onClick={() => onSelect(item.id)}
            >
              {item.face}
            </button>
          ))}
        </div>
      </fieldset>
      <dl className="space-y-3 leading-relaxed">
        <div>
          <dt className="font-semibold">Ubicación</dt>
          <dd>
            {face.province}
            {face.district ? ` · ${face.district}` : ""}
          </dd>
          <dd>{face.address}</dd>
        </div>
        {face.direction && (
          <div>
            <dt className="font-semibold">Sentido de circulación</dt>
            <dd>{face.direction}</dd>
          </div>
        )}
        {face.widthM && face.heightM && (
          <div>
            <dt className="font-semibold">Dimensiones</dt>
            <dd>
              {face.widthM} × {face.heightM} m
            </dd>
          </div>
        )}
      </dl>
      <button
        type="button"
        disabled={saved || atLimit}
        onClick={() => onAdd(face.id)}
        className="min-h-11 w-full rounded bg-publiex-red px-3 py-3 font-semibold text-white disabled:bg-slate-200 disabled:text-slate-600"
      >
        {saved ? "Añadida a cotización" : "Añadir a cotización"}
      </button>
      {atLimit && !saved && (
        <p>Puede solicitar hasta 50 caras por propuesta.</p>
      )}
      <p className="text-xs text-slate-500">
        Disponibilidad y condiciones sujetas a confirmación.
      </p>
    </div>
  );
}
