import { Eye } from "lucide-react";
import { monitoringCoverage } from "@/components/dashboard/overview/overview-data";

export default function MonitoringCoverageCard() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            <Eye size={14} />
            Monitoring reach
          </div>

          <h3 className="mt-4 text-lg font-semibold text-slate-950">
            Monitoring coverage
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            A surface-by-surface view of how much of your identity environment
            is currently covered.
          </p>
        </div>

        <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-800">
          82% total
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {monitoringCoverage.map((item: any) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-[20px] border border-slate-200 bg-white p-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
                  <Icon size={18} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-950">
                      {item.value}
                    </p>
                  </div>

                  <p className="mt-1 text-sm text-slate-600">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}