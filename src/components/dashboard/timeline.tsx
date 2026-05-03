export function Timeline({ items }: { items: Array<{ id: string; label: string; severity: string; score: number; recommended_action: string; created_at: string }> }) {
  return (
    <div className="card p-5">
      <div className="mb-5 text-lg font-semibold text-slate-900">Recent prevention timeline</div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 border-l border-slate-200 pl-4">
            <div className="mt-1 h-3 w-3 rounded-full bg-slate-900" />
            <div>
              <div className="flex items-center gap-3">
                <div className="font-medium text-slate-900">{item.label}</div>
                <span className="badge bg-slate-100 text-slate-700 capitalize">{item.severity}</span>
                <span className="badge bg-amber-50 text-amber-700">Score {item.score}</span>
              </div>
              <div className="mt-1 text-sm text-slate-500">Recommended action: {item.recommended_action}</div>
              <div className="mt-1 text-xs text-slate-400">{new Date(item.created_at).toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
