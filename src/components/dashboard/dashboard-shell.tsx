"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  ShieldCheck,
  LayoutDashboard,
  Activity,
  AlertTriangle,
  Bell,
  Settings,
  UserCircle2,
  Menu,
  X,
  ChevronRight,
  LogOut,
  Sparkles,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

type DashboardShellProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

type GoogleAccount = {
  connected: boolean;
  email: string;
  name: string;
  picture: string;
};

const primaryNav: NavItem[] = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Live Protection", href: "/dashboard/live-protection", icon: ShieldCheck },
  { label: "Risk Alerts", href: "/dashboard/risk-alerts", icon: AlertTriangle },
  { label: "Threat Activity", href: "/dashboard/threat-activity", icon: Activity },
];

const secondaryNav: NavItem[] = [
  { label: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function buildBreadcrumbs(pathname: string) {
  const cleaned = pathname.replace(/^\/+|\/+$/g, "");
  const parts = cleaned.split("/").filter(Boolean);

  if (parts.length === 0) return ["Dashboard"];

  return parts.map((part) =>
    part
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

function SidebarLink({
  item,
  pathname,
  onClick,
}: {
  item: NavItem;
  pathname: string;
  onClick?: () => void;
}) {
  const isActive =
    item.href === "/dashboard" ? pathname === "/dashboard" : pathname === item.href;

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cx(
        "group flex items-center justify-between rounded-2xl border px-3 py-3 transition-all duration-200",
        isActive
          ? "border-slate-800 bg-slate-900 text-white shadow-sm"
          : "border-transparent bg-transparent text-slate-600 hover:border-slate-200 hover:bg-white hover:text-slate-950"
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cx(
            "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
            isActive
              ? "bg-white/10 text-white"
              : "bg-slate-100 text-slate-700 group-hover:bg-slate-200"
          )}
        >
          <Icon size={18} />
        </div>

        <span className="text-sm font-medium">{item.label}</span>
      </div>
    </Link>
  );
}

export default function DashboardShell({
  children,
  title = "Digital identity prevention center",
  subtitle = "Prevent phishing, account takeover, and identity exposure before damage happens.",
}: DashboardShellProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [googleAccount, setGoogleAccount] = useState<GoogleAccount>({
    connected: false,
    email: "",
    name: "",
    picture: "",
  });

  const breadcrumbs = useMemo(() => buildBreadcrumbs(pathname), [pathname]);

  useEffect(() => {
    setGoogleAccount({
      connected: localStorage.getItem("inamix_google_connected") === "true",
      email: localStorage.getItem("inamix_google_email") || "",
      name: localStorage.getItem("inamix_google_name") || "",
      picture: localStorage.getItem("inamix_google_picture") || "",
    });
  }, [pathname]);

  function handleLogout() {
    localStorage.removeItem("inamix_token");
    localStorage.removeItem("inamix_google_connected");
    localStorage.removeItem("inamix_google_email");
    localStorage.removeItem("inamix_google_name");
    localStorage.removeItem("inamix_google_picture");

    router.replace("/login");
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="flex min-h-screen">
        {sidebarOpen ? (
          <button
            aria-label="Close sidebar overlay"
            className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        ) : null}

        <aside
          className={cx(
            "fixed inset-y-0 left-0 z-40 w-[290px] border-r border-slate-200 bg-[#f8fafc] transition-transform duration-300 lg:static lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex h-full flex-col">
            <div className="border-b border-slate-200 px-5 py-5">
              <div className="flex items-center justify-between">
                <Link href="/dashboard" className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      InamixAI
                    </p>
                    <h1 className="text-lg font-semibold text-slate-950">
                      Prevention Engine
                    </h1>
                  </div>
                </Link>

                <button
                  type="button"
                  className="rounded-xl p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-900 lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Sparkles size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Prevention mode active
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      InamixAI prevents identity attacks before damage happens.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-5">
              <div>
                <p className="px-2 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Core
                </p>

                <nav className="space-y-2">
                  {primaryNav.map((item) => (
                    <SidebarLink
                      key={`${item.label}-${item.href}`}
                      item={item}
                      pathname={pathname}
                      onClick={() => setSidebarOpen(false)}
                    />
                  ))}
                </nav>
              </div>

              <div className="mt-8">
                <p className="px-2 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Workspace
                </p>

                <nav className="space-y-2">
                  {secondaryNav.map((item) => (
                    <SidebarLink
                      key={`${item.label}-${item.href}`}
                      item={item}
                      pathname={pathname}
                      onClick={() => setSidebarOpen(false)}
                    />
                  ))}
                </nav>
              </div>
            </div>

            <div className="border-t border-slate-200 p-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="flex items-center gap-3">
                  {googleAccount.picture ? (
                    <img
                      src={googleAccount.picture}
                      alt="Connected Google account"
                      className="h-11 w-11 rounded-full border border-slate-200"
                    />
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                      <UserCircle2 size={22} />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      {googleAccount.name || "InamixAI User"}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {googleAccount.email || "No Google account connected"}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                    aria-label="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="flex h-[84px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
              <div className="flex min-w-0 items-center gap-3">
                <button
                  type="button"
                  className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm hover:bg-slate-50 lg:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu size={20} />
                </button>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    {breadcrumbs.map((crumb, index) => (
                      <div
                        key={`${crumb}-${index}`}
                        className="flex items-center gap-2"
                      >
                        {index > 0 ? <ChevronRight size={14} /> : null}
                        <span
                          className={
                            index === breadcrumbs.length - 1
                              ? "font-semibold text-slate-900"
                              : ""
                          }
                        >
                          {crumb}
                        </span>
                      </div>
                    ))}
                  </div>

                  <h2 className="mt-1 truncate text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    {title}
                  </h2>
                </div>
              </div>

              <div className="hidden items-center gap-3 lg:flex">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
                  System protected
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
            <div className="mb-6 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                  Prevention engine
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {title}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                  {subtitle}
                </p>
              </div>
            </div>

            <div className="min-h-[400px] rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}