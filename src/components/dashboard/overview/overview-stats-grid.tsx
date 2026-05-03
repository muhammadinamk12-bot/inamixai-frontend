import { OverviewStatCard } from "./overview-stat-card";
import { OverviewStat } from "./overview-types";

type Props = {
  stats: OverviewStat[];
};

export function OverviewStatsGrid({ stats }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <OverviewStatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}