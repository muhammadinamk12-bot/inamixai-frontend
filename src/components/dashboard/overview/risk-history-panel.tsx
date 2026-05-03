
type Props = {
  items: any[];
};

export function RiskHistoryPanel({ items }: Props) {
  const maxScore = Math.max(...items.map((item) => item.score), 100);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl">
      <h3 className="text-lg font-semibold text-white">Risk history</h3>
      <p className="mt-1 text-sm text-slate-400">
        Recent engine scores across recorded events.
      </p>

      <div className="mt-5 space-y-4">
        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 p-6 text-sm text-slate-400">
            No history available yet.
          </div>
        ) : (
          items.map((item) => {
            const width = Math.max(8, Math.round((item.score / maxScore) * 100));

            return (
              <div key={item.id}>
                <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                  <div>
                    <div className="text-slate-200">{item.event_type}</div>
                    <div className="text-xs text-slate-500">{item.created_at}</div>
                  </div>
                  <div className="font-medium text-white">{item.score}</div>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-400"
                    style={{ width: `${width}%` }}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}