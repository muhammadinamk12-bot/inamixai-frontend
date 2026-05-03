export function Topbar() {
  return (
    <div className="card flex items-center justify-between p-5">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Digital Identity Protection Layer</div>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Wave 1 Dashboard</h2>
      </div>
      <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
        Prevention mode active
      </div>
    </div>
  );
}
