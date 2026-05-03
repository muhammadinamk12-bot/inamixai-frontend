import { ShieldCheck, TrendingUp } from "lucide-react";

const scoreItems = [
  {
    label: "Current score",
    value: "92 / 100",
  },
  {
    label: "Weekly change",
    value: "+6.4%",
  },
  {
    label: "High-risk surfaces",
    value: "04",
  },
];

export default function ProtectionScoreCard() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <TrendingUp size={14} />
            Core metric
          </div>

          <h3 className="mt-4 text-lg font-semibold text-slate-950">
            Protection score
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            A single operating score showing overall prevention strength across
            your identity surfaces.
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
          <ShieldCheck size={20} />
        </div>
      </div>

      <div className="mt-6 rounded-[22px] border border-slate-200 bg-white p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">Overall health</p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
              92
            </p>
          </div>

          <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
            Strong
          </div>
        </div>

        <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[92%] rounded-full bg-slate-900" />
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {scoreItems.map((item) => (
          <div
            key={item.label}
            className="rounded-[20px] border border-slate-200 bg-white p-4"
          >
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-2 text-lg font-semibold text-slate-950">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}