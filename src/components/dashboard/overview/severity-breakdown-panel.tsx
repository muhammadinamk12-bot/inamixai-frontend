import { SeverityBreakdownItem } from "@/lib/types";

type Props = {
  items: SeverityBreakdownItem[];
};

function barClass(severity: string) {
  switch (severity) {
    case "critical":
      return "bg-red-400";
    case "high":
      return "bg-orange-400";
    case "medium":
      return "bg-yellow-400";
    default:
      return "bg-emerald-400";
  }
}

export function SeverityBreakdownPanel({ items }: Props) {
  const total = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl">
      <h3 className="text-lg font-semibold text-white">Severity breakdown</h3>
      <p className="mt-1 text-sm text-slate-400">
        Distribution of alert severity across the account.
      </p>

      <div className="mt-5 space-y-4">
        {items.map((item) => {
          const percentage = total > 0 ? Math.round((item.count / total) * 100) : 0;

          return (
            <div key={item.severity}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="capitalize text-slate-300">{item.severity}</span>
                <span className="text-slate-400">
                  {item.count} ({percentage}%)
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${barClass(item.severity || "low")}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
