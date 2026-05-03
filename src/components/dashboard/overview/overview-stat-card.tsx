import { AlertTriangle, ShieldAlert, ShieldCheck, Activity } from "lucide-react";
import { OverviewStat, StatTone } from "./overview-types";

type Props = {
  stat: OverviewStat;
};

function getToneClasses(tone: StatTone = "neutral") {
  switch (tone) {
    case "critical":
      return "border-red-500/30 bg-red-500/10 text-red-200";
    case "high":
      return "border-orange-500/30 bg-orange-500/10 text-orange-200";
    case "medium":
      return "border-yellow-500/30 bg-yellow-500/10 text-yellow-200";
    case "low":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-200";
    default:
      return "border-white/10 bg-white/5 text-slate-200";
  }
}

function getIcon(tone: StatTone = "neutral") {
  switch (tone) {
    case "critical":
      return ShieldAlert;
    case "high":
      return AlertTriangle;
    case "low":
      return ShieldCheck;
    default:
      return Activity;
  }
}

export function OverviewStatCard({ stat }: Props) {
  const Icon = getIcon(stat.tone);
  const toneClasses = getToneClasses(stat.tone);

  return (
    <div className={`rounded-2xl border p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ${toneClasses}`}>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
          {stat.label}
        </span>
        <div className="rounded-xl border border-white/10 bg-black/20 p-2">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="text-3xl font-semibold tracking-tight text-white">
        {stat.value}
      </div>

      <p className="mt-2 text-sm text-slate-400">
        {stat.hint}
      </p>
    </div>
  );
}