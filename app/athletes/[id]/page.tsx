import { notFound } from "next/navigation";
import Image from "next/image";

import { getAthlete } from "@/lib/data";
import { ChartRadar } from "@/components/ChartRadar";
import { SectionCard } from "@/components/SectionCard";
import { KVGrid } from "@/components/KVGrid";
import { RowsTable } from "@/components/RowsTable";

type PageProps = {
  params: { id: string };
};

export default function ProfilePage({ params }: PageProps) {
  const a = getAthlete(params.id);
  if (!a) return notFound();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{a.name}</h1>
          <p className="text-white/70 mt-1">
            {a.sport} • {a.country}
          </p>
        </div>
      </div>

      {/* Top grid: card with photo + quick facts, and the radar chart */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: identity card */}
        <section className="lg:col-span-1 card overflow-hidden">
          <div className="aspect-video bg-white/5 relative">
            {/* Prefer real image if provided */}
            {a.image ? (
              <Image
                src={a.image}
                alt={a.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white/40 text-xs">
                No image
              </div>
            )}
          </div>
          <div className="p-5">
            <div className="flex flex-wrap gap-2 text-xs text-white/80 mb-2">
              {"personal" in a && a.personal?.class && (
                <span className="badge">Class {a.personal.class}</span>
              )}
              <span className="badge">{a.club}</span>
              {"training" in a && a.training?.years !== undefined && (
                <span className="badge">Training {a.training.years}+ yrs</span>
              )}
            </div>
            <div className="grid grid-cols-5 gap-2 text-[11px] text-white/70">
              <div className="rounded-md bg-white/5 p-2 text-center">
                <div className="font-semibold leading-tight">SPD</div>
                <div>{a.metrics.speed}</div>
              </div>
              <div className="rounded-md bg-white/5 p-2 text-center">
                <div className="font-semibold leading-tight">STR</div>
                <div>{a.metrics.strength}</div>
              </div>
              <div className="rounded-md bg-white/5 p-2 text-center">
                <div className="font-semibold leading-tight">END</div>
                <div>{a.metrics.endurance}</div>
              </div>
              <div className="rounded-md bg-white/5 p-2 text-center">
                <div className="font-semibold leading-tight">TEC</div>
                <div>{a.metrics.technique}</div>
              </div>
              <div className="rounded-md bg-white/5 p-2 text-center">
                <div className="font-semibold leading-tight">CON</div>
                <div>{a.metrics.consistency}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Right: radar */}
        <section className="lg:col-span-2 card p-5">
          <h3 className="font-semibold mb-2">Skill Radar</h3>
          <ChartRadar metrics={a.metrics} />
        </section>
      </div>

      {/* Personal / Training */}
      {a.personal && (
        <SectionCard title="Personal & Classification">
          <KVGrid
            items={[
              { k: "Date of Birth", v: a.personal.dob ?? "-" },
              { k: "Class", v: a.personal.class ?? "-" },
              { k: "Disability / Category", v: a.personal.disability ?? "-" },
              { k: "Marital Status", v: a.personal.marital_status ?? "-" },
              { k: "Education", v: a.personal.education ?? "-" },
            ]}
          />
        </SectionCard>
      )}

      {a.training && (
        <SectionCard title="Training">
          <KVGrid
            items={[
              { k: "Years of Training", v: a.training.years ?? "-" },
              { k: "Training Rate / Week", v: a.training.weekly_frequency ?? "-" },
              { k: "Average Session", v: a.training.avg_session ?? "-" },
            ]}
          />
        </SectionCard>
      )}

      {(a.goals?.length || a.support) && (
        <SectionCard title="Goals & Support">
          {a.goals?.length ? (
            <ul className="list-disc pl-5 mb-3">
              {a.goals.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          ) : null}
          {a.support && (
            <div className="text-sm text-white/80">Support: {a.support}</div>
          )}
        </SectionCard>
      )}

      {/* Key stats & records */}
      {a.key_stats && a.key_stats.length > 0 && (
        <SectionCard title="Key Stats">
          <RowsTable
            cols={["Metric", "Value"]}
            rows={a.key_stats.map((s) => ({ Metric: s.label, Value: String(s.value) }))}
          />
        </SectionCard>
      )}

      {a.records_reference && (
        <SectionCard title="Records (Reference)">
          <RowsTable
            cols={["Event", "World Record", "Regional Record", "Best Recent"]}
            rows={[
              {
                Event: "100m",
                "World Record": a.records_reference["100m"]?.world_record,
                "Regional Record": a.records_reference["100m"]?.regional_record,
                "Best Recent": a.records_reference.best_recent?.["100m"],
              },
              {
                Event: "800m",
                "World Record": a.records_reference["800m"]?.world_record,
                "Regional Record": a.records_reference["800m"]?.regional_record,
                "Best Recent": a.records_reference.best_recent?.["800m"],
              },
            ]}
          />
        </SectionCard>
      )}

      {/* Competition tables */}
      {a.competitions_100m && a.competitions_100m.length > 0 && (
        <SectionCard title="Targeted Competitions — 100m">
          <RowsTable
            cols={["name", "date", "target", "achieved", "rank", "goal", "status"]}
            rows={a.competitions_100m}
          />
        </SectionCard>
      )}

      {a.competitions_800m && a.competitions_800m.length > 0 && (
        <SectionCard title="Targeted Competitions — 800m">
          <RowsTable
            cols={["name", "date", "target", "achieved", "rank", "goal", "status"]}
            rows={a.competitions_800m}
          />
        </SectionCard>
      )}

      {/* Camps */}
      {a.camps && a.camps.length > 0 && (
        <SectionCard title="Camps & Meetings (Plan)">
          <RowsTable cols={["name", "place", "period", "days"]} rows={a.camps} />
        </SectionCard>
      )}
    </div>
  );
}
