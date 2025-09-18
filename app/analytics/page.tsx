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
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: "#F3F6FA", fontSize: 12 }}
              />
              <YAxis 
                domain={[0,100]} 
                tick={{ fill: "#F3F6FA", fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#0F1829", 
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#F3F6FA"
                }}
              />
              <Bar 
                dataKey="speed" 
                fill="#0A73B7" 
                stroke="#0A73B7"
                strokeWidth={1}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
      <section className="card p-5">
        <h3 className="font-semibold mb-2">Strength (bar) — demo</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: "#F3F6FA", fontSize: 12 }}
              />
              <YAxis 
                domain={[0,100]} 
                tick={{ fill: "#F3F6FA", fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#0F1829", 
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#F3F6FA"
                }}
              />
              <Bar 
                dataKey="strength" 
                fill="#F5C542" 
                stroke="#F5C542"
                strokeWidth={1}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
