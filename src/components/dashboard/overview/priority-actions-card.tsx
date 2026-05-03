import { ArrowRight, ShieldCheck } from "lucide-react";
import type { DashboardOverview } from "@/lib/types";

type PriorityActionsCardProps = {
  actions: any[];
};

function priorityClasses(priority: string) {
  if (priority === "Critical") {
    return "border-rose-200 bg-rose-50 text-rose-700";
  }
  if (priority === "High") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }
  return "border-sky-200 bg-sky-50 text-sky-700";
}

export default function PriorityActionsCard({
  actions,
}: PriorityActionsCardProps) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">
            Priority actions
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Highest-impact actions you should take right now to reduce risk.
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
          <ShieldCheck size={20} />
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {actions.map((item) => (
          <div
            key={item.title}
            className="rounded-[20px] border border-slate-200 bg-white p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="text-sm font-semibold text-slate-950">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-slate-600">{item.impact}</p>
              </div>

              <span
                className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${priorityClasses(
                  item.priority
                )}`}
              >
                {item.priority}
              </span>
            </div>

            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
            >
              Take action
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}