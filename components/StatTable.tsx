type Row = { label: string; value: string | number };

export function StatTable({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <section className="card p-4">
      <h4 className="font-semibold mb-3">{title}</h4>
      <table className="table">
        <thead>
          <tr><th>Metric</th><th>Value</th></tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="text-white/80">{r.label}</td>
              <td className="font-medium">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
