"use client";

type Props = {
  query: string;
  onQuery: (v: string) => void;
  sport: string;
  onSport: (v: string) => void;
  sports: string[];
};

export function SearchBar({ query, onQuery, sport, onSport, sports }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      <input
        className="input md:col-span-2"
        placeholder="Search by name, sport, country, club..."
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />
      <select className="select" value={sport} onChange={(e) => onSport(e.target.value)}>
        {sports.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
    </div>
  );
}
