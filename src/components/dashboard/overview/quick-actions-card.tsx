import { ArrowRight } from "lucide-react";
import { quickActions } from "@/components/dashboard/overview/overview-data";

export default function QuickActionsCard() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-semibold text-slate-950">Quick actions</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Fast response actions for your prevention team.
      </p>

      <div className="mt-5 space-y-3">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              type="button"
              className="w-full rounded-[20px] border border-slate-200 bg-white p-4 text-left transition hover:bg-slate-100"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
                  <Icon size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-900">
                      {action.title}
                    </p>
                    <ArrowRight size={16} className="text-slate-400" />
                  </div>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {action.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}