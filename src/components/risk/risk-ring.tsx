export function RiskRing({ score, band }: { score: number; band: string }) {
  const angle = Math.min(360, Math.max(0, (score / 100) * 360));
  return (
    <div className="card flex items-center gap-8 p-6">
      <div
        className="flex h-36 w-36 items-center justify-center rounded-full"
        style={{ background: `conic-gradient(#0f172a ${angle}deg, #e2e8f0 ${angle}deg)` }}
      >
        <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white">
          <div className="text-3xl font-semibold text-slate-900">{score}</div>
          <div className="text-xs uppercase tracking-[0.25em] text-slate-400">risk</div>
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Current state</div>
        <div className="mt-2 text-2xl font-semibold capitalize text-slate-900">{band}</div>
        <p className="mt-3 max-w-md text-sm text-slate-500">
          InamixAI explains risk before taking action, so prevention feels transparent and controlled rather than disruptive.
        </p>
      </div>
    </div>
  );
}
