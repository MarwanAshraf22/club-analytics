import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-gradient rounded-2xl border border-white/10 p-8 md:p-12 mb-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Analytics for Dubai Club for People of Determination
          </h1>
          <p className="mt-4 text-white/70 text-base md:text-lg">
            Discover athlete strengths, compare performances, and present clean visuals for coaches and fans.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/athletes" className="btn btn-primary">Browse Athletes</Link>
            <Link href="/analytics" className="btn btn-ghost">View Analytics</Link>
          </div>
          <div className="mt-6 flex gap-2">
            <span className="badge">Para Athletics</span>
            <span className="badge">Powerlifting</span>
            <span className="badge">Badminton</span>
            <span className="badge">More…</span>
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-4">Trending Metrics</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between"><span>Speed Index</span><span className="font-semibold">+3.2%</span></li>
            <li className="flex justify-between"><span>Technique Score</span><span className="font-semibold">+1.8%</span></li>
            <li className="flex justify-between"><span>Consistency</span><span className="font-semibold">+2.4%</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
