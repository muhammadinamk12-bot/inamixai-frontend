import { TrendingUp } from "lucide-react";
import type { DashboardOverview } from "@/lib/types";

type PreventionGraphProps = {
  bars: any[];
  signals: any[];
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function PreventionGraph({
  bars,
  signals,
}: PreventionGraphProps) {
  const max = Math.max(...bars, 1);

  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <TrendingUp size={14} />
            Prevention performance
          </div>

          <h3 className="mt-4 text-lg font-semibold text-slate-950">
            Protection trend
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            A simple operating view of how InamixAI is improving detection,
            interception, and preventive action over time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {signals.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3"
            >
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className="mt-1 text-lg font-semibold text-slate-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="flex h-[280px] items-end gap-3 rounded-[20px] border border-slate-200 bg-white p-5">
          {bars.map((value, index) => {
            const height = `${Math.max((value / max) * 100, 12)}%`;

            return (
              <div
                key={`${value}-${index}`}
                className="flex h-full flex-1 flex-col items-center justify-end gap-3"
              >
                <div className="flex h-full w-full items-end">
                  <div
                    className="w-full rounded-t-2xl bg-slate-900 transition-all duration-300"
                    style={{ height }}
                  />
                </div>
                <span className="text-xs text-slate-400">
                  {months[index] ?? `M${index + 1}`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}