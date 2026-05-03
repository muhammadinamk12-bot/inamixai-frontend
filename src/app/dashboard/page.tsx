"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import UrlScanner from "@/components/dashboard/url-scanner";

type GoogleAccount = {
  connected: boolean;
  email: string;
  name: string;
  picture: string;
};

type ActivityEvent = {
  id: string;
  title: string;
  description: string;
  severity: string;
  created_at: string;
};

function DashboardContent() {
  const searchParams = useSearchParams();

  const [metrics, setMetrics] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [timeline, setTimeline] = useState<ActivityEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const [googleAccount, setGoogleAccount] = useState<GoogleAccount>({
    connected: false,
    email: "",
    name: "",
    picture: "",
  });

  function clearGoogleAccount() {
    localStorage.removeItem("inamix_google_connected");
    localStorage.removeItem("inamix_google_email");
    localStorage.removeItem("inamix_google_name");
    localStorage.removeItem("inamix_google_picture");

    setGoogleAccount({
      connected: false,
      email: "",
      name: "",
      picture: "",
    });

    window.history.replaceState({}, "", "/dashboard");
  }

  async function loadData() {
    try {
      const [metricsRes, historyRes, timelineRes] = await Promise.all([
        fetch("https://inamixai-wave1.vercel.app/api/v1/metrics"),
        fetch("https://inamixai-wave1.vercel.app/api/v1/scan-history"),
        fetch("https://inamixai-wave1.vercel.app/api/v1/activity-timeline"),
      ]);

      setMetrics(await metricsRes.json());
      setHistory(await historyRes.json());
      setTimeline(await timelineRes.json());
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const connectedFromGoogle =
      searchParams.get("google_connected") === "true";

    if (connectedFromGoogle) {
      const account = {
        connected: true,
        email: searchParams.get("google_email") || "",
        name: searchParams.get("google_name") || "",
        picture: searchParams.get("google_picture") || "",
      };

      localStorage.setItem("inamix_google_connected", "true");
      localStorage.setItem("inamix_google_email", account.email);
      localStorage.setItem("inamix_google_name", account.name);
      localStorage.setItem("inamix_google_picture", account.picture);

      setGoogleAccount(account);
    } else {
      const connected =
        localStorage.getItem("inamix_google_connected") === "true";

      setGoogleAccount({
        connected,
        email: localStorage.getItem("inamix_google_email") || "",
        name: localStorage.getItem("inamix_google_name") || "",
        picture: localStorage.getItem("inamix_google_picture") || "",
      });
    }

    loadData();

    const interval = setInterval(loadData, 5000);

    return () => clearInterval(interval);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 p-10 text-white">
        Loading InamixAI...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                InamixAI Prevention Engine
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight">
                Stop phishing and identity attacks before damage happens.
              </h1>

              <p className="mt-4 max-w-2xl text-slate-400">
                Real-time identity defense, browser protection, live prevention
                actions, connected Google intelligence, and attack monitoring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <MetricCard
                title="Total scans"
                value={metrics?.total_scans || 0}
              />

              <MetricCard
                title="Blocked links"
                value={metrics?.blocked_links || 0}
                danger
              />

              <MetricCard
                title="Safe links"
                value={metrics?.safe_links || 0}
                safe
              />

              <MetricCard
                title="Protection"
                value={`${metrics?.coverage || 92}%`}
              />
            </div>
          </div>
        </section>

        <UrlScanner />
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  danger,
  safe,
}: {
  title: string;
  value: number | string;
  danger?: boolean;
  safe?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        danger
          ? "border-red-500/20 bg-red-500/10"
          : safe
          ? "border-emerald-500/20 bg-emerald-500/10"
          : "border-white/10 bg-slate-900"
      }`}
    >
      <p className="text-sm text-slate-400">{title}</p>

      <p className="mt-3 text-3xl font-bold">{value}</p>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 p-10 text-white">
          Loading...
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
