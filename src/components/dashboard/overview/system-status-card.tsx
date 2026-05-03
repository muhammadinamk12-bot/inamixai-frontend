import { systemStatus } from "@/components/dashboard/overview/overview-data";

export default function SystemStatusCard() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-semibold text-slate-950">System status</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Live condition of the prevention engine.
      </p>

      <div className="mt-5 space-y-3">
        {systemStatus.map((item) => {
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