import athletes from "@/data/athletes.json";

export type Metrics = {
  speed: number;
  strength: number;
  endurance: number;
  technique: number;
  consistency: number;
};

export type StatItem = { label: string; value: string | number };

export type CompetitionRow = {
  name: string;
  date: string;       // free text or ISO range
  target?: string;
  achieved?: string;
  rank?: string;
  goal?: string;
  status?: string;    // e.g., Achievable
};

export type CampRow = {
  name: string;
  place: string;
  period: string;     // free text or ISO range
  days?: number;
};

export type Athlete = {
  id: string;
  name: string;
  sport: string;
  age: number;
  country: string;
  club: string;
  image: string;
  metrics: Metrics;

  // Optional rich fields
  personal?: {
    dob?: string;
    class?: string;
    disability?: string;
    marital_status?: string;
    education?: string;
  };
  training?: {
    years?: number;
    weekly_frequency?: string;
    avg_session?: string;
  };
  support?: string;
  goals?: string[];
  expectations?: { event: string; note: string }[];
  key_stats?: StatItem[];
  records_reference?: {
    ["100m"]?: { world_record?: string; regional_record?: string };
    ["800m"]?: { world_record?: string; regional_record?: string };
    best_recent?: { ["100m"]?: string; ["800m"]?: string };
  };
  competitions_100m?: CompetitionRow[];
  competitions_800m?: CompetitionRow[];
  camps?: CampRow[];

  // legacy
  stats?: StatItem[];
};

export function getAthletes(): Athlete[] {
  return athletes as Athlete[];
}
export function getAthlete(id: string): Athlete | undefined {
  return getAthletes().find(a => a.id === id);
}
export function bySport(sport?: string) {
  const data = getAthletes();
  if (!sport || sport === "All") return data;
  return data.filter(a => a.sport.includes(sport));
}
export function searchAthletes(q: string, sport?: string) {
  const norm = (s: string) => s.toLowerCase().normalize("NFKD");
  const data = bySport(sport);
  if (!q) return data;
  return data.filter(a =>
    [a.name, a.sport, a.country, a.club].some(v => norm(v).includes(norm(q)))
  );
}
