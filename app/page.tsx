import { Hero } from "@/components/Hero";
import { AthleteCard } from "@/components/AthleteCard";
import { getAthletes } from "@/lib/data";

export default function Page() {
  const athletes = getAthletes().slice(0, 6);
  return (
    <div className="space-y-8">
      <Hero />
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Featured Athletes</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {athletes.map(a => <AthleteCard key={a.id} a={a} />)}
        </div>
      </section>
    </div>
  );
}
