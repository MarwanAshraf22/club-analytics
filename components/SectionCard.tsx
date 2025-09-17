export function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="card p-5">
      <h3 className="font-semibold mb-3">{title}</h3>
      {children}
    </section>
  );
}
