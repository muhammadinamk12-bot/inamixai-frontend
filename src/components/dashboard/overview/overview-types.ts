export type StatTone = "critical" | "high" | "medium" | "low" | "neutral";

export type OverviewStat = {
  label: string;
  value: string | number;
  hint: string;
  tone?: StatTone;
};