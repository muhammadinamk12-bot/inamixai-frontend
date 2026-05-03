import { DashboardOverview } from "@/lib/types";
import { OverviewStatsGrid } from "./overview-stats-grid";

type Props = {
  data: DashboardOverview;
};

export function DashboardOverviewScreen({ data }: Props) {
  const stats = [
    { label: "Protected Score", value: data.protectedIdentityScore, hint: "", tone: "low" as const },
    { label: "Active Sessions", value: data.activeSessions, hint: "", tone: "low" as const },
    { label: "Trusted Devices", value: data.trustedDevices, hint: "", tone: "low" as const },
    { label: "Blocked Threats", value: data.blockedThreats, hint: "", tone: "low" as const },
    { label: "Pending Actions", value: data.pendingActions, hint: "", tone: "low" as const },
    { label: "Recent Scans", value: data.recentScans, hint: "", tone: "low" as const },
  ];

  return (
    <div className="space-y-6">
      <OverviewStatsGrid stats={stats} />
    </div>
  );
}
