import type { LucideIcon } from "lucide-react";

export type OverviewStat = {
  title: string;
  value: string;
  change: string;
  description: string;
  icon?: LucideIcon;
};

export type PriorityAction = {
  title: string;
  impact: string;
  priority: "Critical" | "High" | "Medium";
};

export type ActivityItem = {
  type: string;
  title: string;
  description: string;
  time: string;
  icon?: LucideIcon;
};

export type PreventionSignal = {
  label: string;
  value: string;
};

export type ExposedSurface = {
  label: string;
  value: string;
  status: string;
  description: string;
  icon?: LucideIcon;
};

export type AiRecommendation = {
  title: string;
  priority: "Critical" | "High" | "Medium";
  description: string;
};

export type RiskAlert = {
  level: "Critical" | "High" | "Medium";
  title: string;
  description: string;
  action: string;
};

export type QuickAction = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export type MonitoringCoverageItem = {
  label: string;
  value: string;
  detail: string;
  icon?: LucideIcon;
};

export type SystemStatusItem = {
  label: string;
  value: string;
  detail: string;
  icon?: LucideIcon;
};

export type RecentCase = {
  id: string;
  title: string;
  status: string;
  priority: "Critical" | "High" | "Medium";
};

export type DashboardOverviewResponse = {
  stats: OverviewStat[];
  priorityActions: PriorityAction[];
  activities: ActivityItem[];
  preventionBars: number[];
  preventionSignals: PreventionSignal[];
  exposedSurfaces: ExposedSurface[];
  aiRecommendations: AiRecommendation[];
  riskAlerts: RiskAlert[];
  quickActions: QuickAction[];
  monitoringCoverage: MonitoringCoverageItem[];
  systemStatus: SystemStatusItem[];
  recentCases: RecentCase[];
};