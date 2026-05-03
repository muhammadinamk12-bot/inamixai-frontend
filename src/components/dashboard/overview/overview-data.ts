import type { DashboardOverview } from "@/lib/types";
import {
  Activity,
  AlertTriangle,
  FileSearch,
  Globe,
  Mail,
  Phone,
  ScanLine,
  ShieldCheck,
  FileText,
  ShieldAlert,
  Clock3,
  Shield,
  Zap,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";

export const overviewStats: any[] = [
  {
    title: "Protection score",
    value: "92%",
    change: "+4.8%",
    description: "Overall prevention strength across monitored identity surfaces.",
    icon: ShieldCheck,
  },
  {
    title: "Critical alerts",
    value: "12",
    change: "-2 today",
    description: "High-priority risks that need immediate review or auto-action.",
    icon: AlertTriangle,
  },
  {
    title: "Identity scans",
    value: "1,284",
    change: "+126",
    description: "Scans completed across links, pages, leaked records, and signals.",
    icon: ScanLine,
  },
  {
    title: "Open investigations",
    value: "09",
    change: "+3 new",
    description: "Active investigations related to suspicious identity misuse patterns.",
    icon: FileSearch,
  },
];

export const priorityActions: any[] = [
  {
    title: "Revoke exposed credentials",
    impact: "Prevents immediate account takeover risk",
    priority: "Critical",
  },
  {
    title: "Block suspicious domain",
    impact: "Stops impersonation attempts and phishing vectors",
    priority: "High",
  },
  {
    title: "Restrict document access",
    impact: "Reduces risk of sensitive data misuse",
    priority: "Medium",
  },
];

export const activities: any[] = [
  {
    type: "alert",
    title: "Suspicious identity usage detected",
    description:
      "Your email appeared in a newly indexed breach dataset from a third-party source.",
    time: "2 min ago",
    icon: AlertTriangle,
  },
  {
    type: "protection",
    title: "Auto-block executed",
    description:
      "A malicious domain attempting to impersonate your identity was blocked.",
    time: "18 min ago",
    icon: ShieldCheck,
  },
  {
    type: "scan",
    title: "Deep scan completed",
    description:
      "Identity scan across public sources and leak databases completed successfully.",
    time: "1 hour ago",
    icon: Activity,
  },
];

export const preventionBars: any[] = [
  42, 58, 49, 72, 64, 81, 76, 88, 69, 91, 84, 96,
];

export const preventionSignals: any[] = [
  {
    label: "Threat interception",
    value: "96%",
  },
  {
    label: "Exposure reduction",
    value: "73%",
  },
  {
    label: "Response speed",
    value: "1.8m",
  },
];

export const exposedSurfaces: any[] = [
  {
    label: "Email identities",
    value: "14",
    status: "3 exposed",
    description:
      "Connected email identities being watched for leaks, misuse, and breach signals.",
    icon: Mail,
  },
  {
    label: "Phone numbers",
    value: "06",
    status: "1 high-risk",
    description:
      "Phone-linked identity surfaces monitored for fraud attempts and suspicious activity.",
    icon: Phone,
  },
  {
    label: "Public web mentions",
    value: "28",
    status: "5 flagged",
    description:
      "Open web and indexed pages where identity details may appear or be misused.",
    icon: Globe,
  },
  {
    label: "Sensitive documents",
    value: "11",
    status: "2 reviewed",
    description:
      "Documents under watch for exposure, unauthorized access, or risky sharing patterns.",
    icon: FileText,
  },
];

export const aiRecommendations: any[] = [
  {
    title: "Rotate exposed credentials immediately",
    priority: "Critical",
    description:
      "A matched exposure signal suggests one or more credentials may already be circulating in risky environments.",
  },
  {
    title: "Enable stronger verification on sensitive flows",
    priority: "High",
    description:
      "Suspicious access behavior indicates sensitive identity flows should be protected with stronger checks.",
  },
  {
    title: "Review recently flagged web surfaces",
    priority: "Medium",
    description:
      "Several indexed pages and public references may require takedown, correction, or active monitoring.",
  },
];

export const riskAlerts: any[] = [
  {
    level: "Critical",
    title: "Possible identity impersonation domain",
    description:
      "A newly detected domain appears to imitate your brand or personal identity profile.",
    action: "Review now",
  },
  {
    level: "High",
    title: "Leaked credential exposure signal",
    description:
      "An email-password pairing linked to this workspace was matched with an external leak source.",
    action: "Contain risk",
  },
  {
    level: "Medium",
    title: "Unusual document access pattern",
    description:
      "A suspicious access pattern suggests possible identity misuse or unauthorized document interaction.",
    action: "Investigate",
  },
];

export const quickActions: any[] = [
  {
    title: "Start identity investigation",
    description: "Open a new case and trace suspicious identity misuse signals.",
    icon: FileSearch,
  },
  {
    title: "Run emergency scan",
    description: "Launch a priority scan across critical identity surfaces.",
    icon: ScanLine,
  },
  {
    title: "Review critical alerts",
    description: "Move through the most urgent risks before they escalate.",
    icon: ShieldAlert,
  },
  {
    title: "Open privacy controls",
    description: "Adjust exposure settings, controls, and prevention rules.",
    icon: SlidersHorizontal,
  },
];

export const monitoringCoverage: any[] = [
  {
    label: "Email coverage",
    value: "14 / 14",
    detail: "All connected email identities are under active monitoring.",
    icon: Mail,
  },
  {
    label: "Phone coverage",
    value: "6 / 6",
    detail: "Phone-linked identity signals are being watched continuously.",
    icon: Phone,
  },
  {
    label: "Web surface coverage",
    value: "28 / 34",
    detail: "Most public web mentions and indexed references are covered.",
    icon: Globe,
  },
  {
    label: "Document coverage",
    value: "11 / 15",
    detail: "Sensitive files are partially covered and need expansion.",
    icon: FileText,
  },
];

export const systemStatus: any[] = [
  {
    label: "Protection engine",
    value: "Active",
    detail: "All core prevention rules are running normally.",
    icon: Shield,
  },
  {
    label: "Scan queue",
    value: "28 pending",
    detail: "Priority scans are being processed continuously.",
    icon: Clock3,
  },
  {
    label: "Auto-response",
    value: "Enabled",
    detail: "High-confidence actions can be triggered automatically.",
    icon: Zap,
  },
  {
    label: "System health",
    value: "98.9%",
    detail: "Infrastructure and detection services are stable.",
    icon: CheckCircle2,
  },
];

export const recentCases: any[] = [
  {
    id: "CASE-1042",
    title: "Credential exposure follow-up",
    status: "In progress",
    priority: "Critical",
  },
  {
    id: "CASE-1041",
    title: "Suspicious web impersonation review",
    status: "Pending review",
    priority: "High",
  },
  {
    id: "CASE-1038",
    title: "Document misuse trace",
    status: "Resolved",
    priority: "Medium",
  },
];