export function KVGrid({ items }: { items: { k: string; v: string | number }[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((it, i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-xs text-white/60">{it.k}</div>
          <div className="font-medium">{it.v}</div>
        </div>
      ))}
    </div>
  );
}
