import Link from "next/link";
import Image from "next/image";
import type { Athlete } from "@/lib/data";

export function AthleteCard({ a }: { a: Athlete }) {
  return (
    <div className="card overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[16/9] bg-white/5">
        {a.image ? (
          <Image
            src={a.image}
            alt={a.name}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/40 text-xs">
            No image
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold leading-tight">{a.name}</h3>
          <span className="badge">{a.sport}</span>
        </div>
        <p className="text-sm text-white/70 mt-1">
          {a.country} • {a.club}
        </p>

        <div className="mt-3 flex gap-2 text-xs text-white/70">
          <span>SPD {a.metrics.speed}</span>
          <span>STR {a.metrics.strength}</span>
          <span>END {a.metrics.endurance}</span>
          <span>TEC {a.metrics.technique}</span>
          <span>CON {a.metrics.consistency}</span>
        </div>

        <Link
          href={`/athletes/${a.id}`}
          className="btn btn-ghost mt-4 w-full text-center justify-center"
        >
          View profile
        </Link>
      </div>
    </div>
  );
}
