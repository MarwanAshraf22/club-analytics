"use client";

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis } from "recharts";
import type { Metrics } from "@/lib/data";

export function ChartRadar({ metrics }: { metrics: Metrics }) {
  const data = Object.entries(metrics).map(([k, v]) => ({ metric: k, value: v }));
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="#374151" />
          <PolarAngleAxis 
            dataKey="metric" 
            tick={{ fill: "#F3F6FA", fontSize: 12 }}
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={{ fill: "#F3F6FA", fontSize: 10 }}
          />
          <Radar 
            dataKey="value" 
            fill="#0A73B7" 
            fillOpacity={0.6}
            stroke="#0A73B7"
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
