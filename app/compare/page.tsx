"use client";

import { useMemo, useState } from "react";
import { getAthletes, type Athlete } from "@/lib/data";
import { ChartRadar } from "@/components/ChartRadar";

const list = getAthletes();

function Select({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <select className="select" value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Pick athlete…</option>
      {list.map(a => <option key={a.id} value={a.id}>{a.name} — {a.sport}</option>)}
    </select>
  );
}

export default function ComparePage() {
  const [a1, setA1] = useState<string>("mohammed-youssef");
  const [a2, setA2] = useState<string>("fatima-al-hosani");

  const left = useMemo(() => list.find(a => a.id === a1), [a1]);
  const right = useMemo(() => list.find(a => a.id === a2), [a2]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Compare Athletes</h1>
      <div className="grid md:grid-cols-2 gap-3">
        <Select value={a1} onChange={setA1} />
        <Select value={a2} onChange={setA2} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {left && (
          <section className="card p-5">
            <h3 className="font-semibold mb-2">{left.name}</h3>
            <ChartRadar metrics={left.metrics} />
          </section>
        )}
        {right && (
          <section className="card p-5">
            <h3 className="font-semibold mb-2">{right.name}</h3>
            <ChartRadar metrics={right.metrics} />
          </section>
        )}
      </div>

      {left && right && (
        <section className="card p-5">
          <h3 className="font-semibold mb-4">Side‑by‑side table</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">{left.name}</h4>
              <ul className="space-y-2 text-sm">
                <li>Speed: {left.metrics.speed}</li>
                <li>Strength: {left.metrics.strength}</li>
                <li>Endurance: {left.metrics.endurance}</li>
                <li>Technique: {left.metrics.technique}</li>
                <li>Consistency: {left.metrics.consistency}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{right.name}</h4>
              <ul className="space-y-2 text-sm">
                <li>Speed: {right.metrics.speed}</li>
                <li>Strength: {right.metrics.strength}</li>
                <li>Endurance: {right.metrics.endurance}</li>
                <li>Technique: {right.metrics.technique}</li>
                <li>Consistency: {right.metrics.consistency}</li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
