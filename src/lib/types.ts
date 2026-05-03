export type RiskLevel = "low" | "medium" | "high" | "critical";

export type SessionStatus =
  | "active"
  | "challenged"
  | "blocked"
  | "expired";

export type PreventionActionStatus =
  | "pending"
  | "completed"
  | "failed";

export type ScanVerdict = "safe" | "suspicious" | "dangerous";

export interface DashboardOverview {
  protectedIdentityScore: number;
  activeSessions: number;
  trustedDevices: number;
  blockedThreats: number;
  pendingActions: number;
  recentScans: number;
}

export interface RiskEvent {
  id: string;
  title: string;
  description: string;
  level: RiskLevel;
  score: number;
  recommendedAction: string;
  createdAt: string;
  source: string;
}

export interface DeviceItem {
  id: string;
  name: string;
  platform: string;
  browser: string;
  trustLevel: "trusted" | "watch" | "untrusted";
  lastSeenAt: string;
  location: string;
  isCurrentDevice?: boolean;
}

export interface SessionItem {
  id: string;
  deviceName: string;
  ipAddress: string;
  location: string;
  loginAt: string;
  lastActivityAt: string;
  riskScore: number;
  status: SessionStatus;
  anomalyFlags: string[];
  geo_city?: string;
  geo_country?: string;
  ip_address?: string;
  login_at?: string;
  anomaly_flags?: Record<string, boolean>;
  risk_score?: number;
  session_status?: string;
}

export interface LinkScanItem {
  id: string;
  url: string;
  domain: string;
  riskScore: number;
  verdict: ScanVerdict;
  reasons: string[];
  createdAt: string;
}

export interface PreventionActionItem {
  id: string;
  user_id: string;
  risk_event_id?: string | null;
  action_type: string;
  notes?: string | null;
  action_status: PreventionActionStatus;
  triggered_by: string;
  created_at: string;
}

export interface TimelineItem {
  id: string;
  type: "risk_event" | "session" | "scan" | "action";
  title: string;
  description: string;
  createdAt: string;
  level?: RiskLevel;
}

export interface ScanLinkPayload {
  url: string;
}

export interface CreateActionPayload {
  action_type: string;
  notes?: string;
  risk_event_id?: string;
}

export type SeverityBreakdownItem = {
  label: string;
  count: number;
  value?: number;
  percentage?: number;
  severity?: string;
};

export type SessionRecord = SessionItem;
