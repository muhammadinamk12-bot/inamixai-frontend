import {
  DashboardOverview,
  RiskEvent,
  DeviceItem,
  SessionItem,
  LinkScanItem,
  PreventionActionItem,
} from "./types";

export const demoOverview: DashboardOverview = {
  protectedIdentityScore: 82,
  activeSessions: 3,
  trustedDevices: 2,
  blockedThreats: 5,
  pendingActions: 1,
  recentScans: 4,
};

export const demoRiskEvents: RiskEvent[] = [
  {
    id: "risk-1",
    title: "Suspicious Login Attempt",
    description: "Login detected from a new device in another country.",
    level: "high",
    score: 72,
    recommendedAction: "challenge",
    createdAt: new Date().toISOString(),
    source: "session",
  },
  {
    id: "risk-2",
    title: "Phishing Link Detected",
    description: "User scanned a known phishing domain.",
    level: "critical",
    score: 88,
    recommendedAction: "block",
    createdAt: new Date().toISOString(),
    source: "link_scan",
  },
];

export const demoDevices: DeviceItem[] = [
  {
    id: "device-1",
    name: "MacBook Pro",
    platform: "macOS",
    browser: "Chrome",
    trustLevel: "trusted",
    lastSeenAt: new Date().toISOString(),
    location: "Australia",
    isCurrentDevice: true,
  },
  {
    id: "device-2",
    name: "iPhone 14",
    platform: "iOS",
    browser: "Safari",
    trustLevel: "watch",
    lastSeenAt: new Date().toISOString(),
    location: "Pakistan",
  },
];

export const demoSessions: SessionItem[] = [
  {
    id: "session-1",
    deviceName: "MacBook Pro",
    ipAddress: "192.168.1.1",
    location: "Melbourne",
    loginAt: new Date().toISOString(),
    lastActivityAt: new Date().toISOString(),
    riskScore: 18,
    status: "active",
    anomalyFlags: [],
  },
  {
    id: "session-2",
    deviceName: "Unknown Windows Device",
    ipAddress: "103.25.55.21",
    location: "Unknown Region",
    loginAt: new Date().toISOString(),
    lastActivityAt: new Date().toISOString(),
    riskScore: 78,
    status: "challenged",
    anomalyFlags: ["new_device", "location_mismatch"],
  },
];

export const demoScans: LinkScanItem[] = [
  {
    id: "scan-1",
    url: "http://secure-login-bank.xyz",
    domain: "secure-login-bank.xyz",
    riskScore: 85,
    verdict: "dangerous",
    reasons: ["new domain", "phishing pattern"],
    createdAt: new Date().toISOString(),
  },
  {
    id: "scan-2",
    url: "https://google.com",
    domain: "google.com",
    riskScore: 5,
    verdict: "safe",
    reasons: ["trusted domain"],
    createdAt: new Date().toISOString(),
  },
];

export const demoActions: PreventionActionItem[] = [
  {
    id: "action-1",
    user_id: "demo-user",
    risk_event_id: "risk-1",
    action_type: "challenge_session",
    notes: "User verification required",
    action_status: "pending",
    triggered_by: "system",
    created_at: new Date().toISOString(),
  },
  {
    id: "action-2",
    user_id: "demo-user",
    risk_event_id: "risk-2",
    action_type: "block_session",
    notes: "Blocked suspicious login",
    action_status: "completed",
    triggered_by: "system",
    created_at: new Date().toISOString(),
  },
];