import { AlertTriangle, ArrowUpRight, ShieldAlert } from "lucide-react";
import { riskAlerts } from "@/components/dashboard/overview/overview-data";

function levelClasses(level: string) {
  if (level === "Critical") {
    return "border-rose-200 bg-rose-50 text-rose-700";
  }

  if (level === "High") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-sky-200 bg-sky-50 text-sky-700";
}

export default function RiskAlertsPanel() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">
            Risk alerts
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Priority issues that need action before they turn into damage.
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
          <ShieldAlert size={20} />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {riskAlerts.map((alert) => (
          <div
            key={alert.title}
            className="rounded-2xl border border-slate-200 bg-white p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <span
                className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${levelClasses(
                  alert.level
                )}`}
              >
                {alert.level}
              </span>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <AlertTriangle size={16} />
              </div>
            </div>

            <h4 className="mt-4 text-sm font-semibold text-slate-950">
              {alert.title}
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {alert.description}
            </p>

            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
            >
              {alert.action}
              <ArrowUpRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}