"use client";

import { getAthletes } from "@/lib/data";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";

const all = getAthletes();

export default function AnalyticsPage() {
  const data = all.map(a => ({ name: a.name.split(" ")[0], speed: a.metrics.speed, strength: a.metrics.strength }));
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <section className="card p-5">
        <h3 className="font-semibold mb-2">Speed (bar) — demo</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0,100]} />
              <Tooltip />
              <Bar dataKey="speed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
      <section className="card p-5">
        <h3 className="font-semibold mb-2">Strength (bar) — demo</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0,100]} />
              <Tooltip />
              <Bar dataKey="strength" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
