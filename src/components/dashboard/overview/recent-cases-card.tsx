import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { recentCases } from "@/components/dashboard/overview/overview-data";

function statusClasses(status: string) {
  if (status === "Resolved") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }
  if (status === "In progress") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }
  return "border-slate-200 bg-slate-100 text-slate-700";
}

function priorityClasses(priority: string) {
  if (priority === "Critical") return "text-rose-600";
  if (priority === "High") return "text-amber-600";
  return "text-sky-600";
}

export default function RecentCasesCard() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-semibold text-slate-950">Recent cases</h3>

      <div className="mt-5 space-y-3">
        {recentCases.map((item) => (
          <div
            key={item.id}
            className="rounded-[20px] border border-slate-200 bg-white p-4"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-slate-400">{item.id}</p>
                <p className="text-sm font-semibold text-slate-900 mt-1">
                  {item.title}
                </p>
              </div>

              <ArrowUpRight size={16} />
            </div>

            <div className="mt-3 flex justify-between items-center">
              <span
                className={`text-xs px-2 py-1 rounded-full border ${statusClasses(
                  item.status
                )}`}
              >
                {item.status}
              </span>

              <div className="flex items-center gap-1 text-xs font-semibold">
                <ShieldCheck
                  size={12}
                  className={priorityClasses(item.priority)}
                />
                <span className={priorityClasses(item.priority)}>
                  {item.priority}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}