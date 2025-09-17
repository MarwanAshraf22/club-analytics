type Row = Record<string, string | number | undefined>;
export function RowsTable({ cols, rows }: { cols: string[]; rows: Row[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead><tr>{cols.map(c => <th key={c}>{c}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{cols.map(c => <td key={c}>{(r[c] ?? "") as any}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
