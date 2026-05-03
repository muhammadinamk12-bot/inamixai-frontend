"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import UrlScanPanel from "./url-scan-panel";
import GlobalThreatDashboard from "./global-threat-dashboard";

import {
  ShieldCheck,
  LayoutDashboard,
  Activity,
  AlertTriangle,
  FileSearch,
  ScanLine,
  Bell,
  Settings,
  UserCircle2,
  Menu,
  X,
  ChevronRight,
  Search,
  LogOut,
  Sparkles,
  Database,
  LockKeyhole,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
};

type DashboardShellProps = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  activePath?: string;
};

const primaryNav: NavItem[] = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Live Protection", href: "/dashboard/live-protection", icon: ShieldCheck },
  { label: "Identity Scans", href: "/dashboard/identity-scans", icon: ScanLine },
  { label: "Threat Activity", href: "/dashboard/threat-activity", icon: Activity },
  { label: "Risk Alerts", href: "/dashboard/risk-alerts", icon: AlertTriangle, badge: "12" },
  { label: "Investigations", href: "/dashboard/investigations", icon: FileSearch },
];

const secondaryNav: NavItem[] = [
  { label: "Data Sources", href: "/dashboard/data-sources", icon: Database },
  { label: "Privacy Controls", href: "/dashboard/privacy-controls", icon: LockKeyhole },
  { label: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function buildBreadcrumbs(activePath?: string) {
  if (!activePath) return ["Dashboard", "Overview"];

  const cleaned = activePath.replace(/^\/+|\/+$/g, "");
  const parts = cleaned.split("/").filter(Boolean);

  if (parts.length === 0) return ["Dashboard", "Overview"];

  return parts.map((part) =>
    part
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

function SidebarLink({
  item,
  activePath,
  onClick,
}: {
  item: NavItem;
  activePath?: string;
  onClick?: () => void;
}) {
  const isActive = activePath === item.href;
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cx(
        "group flex items-center justify-between rounded-2xl border px-3 py-3 transition-all duration-200",
        isActive
          ? "border-slate-800 bg-slate-900 text-white"
          : "text-slate-600 hover:bg-white hover:text-slate-950"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
          <Icon size={18} />
        </div>
        <span className="text-sm font-medium">{item.label}</span>
      </div>

      {item.badge && (
        <span className="rounded-full px-2 py-1 text-xs bg-amber-100 text-amber-700">
          {item.badge}
        </span>
      )}
    </Link>
  );
}

export default function DashboardShell({
  children,
  title = "Digital identity prevention center",
  subtitle = "Prevent fraud before damage happens.",
  activePath = "/dashboard",
}: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const breadcrumbs = useMemo(() => buildBreadcrumbs(activePath), [activePath]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="w-[260px] border-r border-slate-200 bg-white p-4 hidden lg:block">
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck />
            <div>
              <div className="text-xs text-slate-500">InamixAI</div>
              <div className="font-semibold">Prevention Engine</div>
            </div>
          </div>

          <nav className="space-y-2">
            {primaryNav.map((item) => (
              <SidebarLink key={item.href} item={item} activePath={activePath} />
            ))}
          </nav>
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col">

          {/* Header */}
          <header className="border-b bg-white px-6 py-4 flex justify-between">
            <div>
              <div className="text-xs text-slate-500">
                {breadcrumbs.join(" / ")}
              </div>
              <h1 className="text-xl font-semibold">{title}</h1>
            </div>
          </header>

          {/* Content */}
          <main className="p-6 space-y-6">

            {/* Existing content */}
            <div className="bg-white p-6 rounded-xl border">
              {children}
            </div>

            {/* 🔥 Global Threat Dashboard */}
            <GlobalThreatDashboard />

            {/* 🔐 URL Scanner */}
            <div className="bg-white p-6 rounded-xl border">
              <UrlScanPanel />
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}