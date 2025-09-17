"use client";

import { useMemo, useState } from "react";
import { AthleteCard } from "@/components/AthleteCard";
import { SearchBar } from "@/components/SearchBar";
import { getAthletes, searchAthletes } from "@/lib/data";

const ALL_SPORTS = ["All", ...Array.from(new Set(getAthletes().map(a => a.sport)))];

export default function AthletesPage() {
  const [q, setQ] = useState("");
  const [sport, setSport] = useState("All");
  const data = useMemo(() => searchAthletes(q, sport), [q, sport]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Athletes</h1>
        <div className="text-sm text-white/70">{data.length} results</div>
      </div>
      <SearchBar query={q} onQuery={setQ} sport={sport} onSport={setSport} sports={ALL_SPORTS} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(a => <AthleteCard key={a.id} a={a} />)}
      </div>
    </div>
  );
}
