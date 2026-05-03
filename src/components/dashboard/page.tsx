"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getToken } from "@/lib/auth";
import { DashboardOverviewClient } from "@/components/dashboard/overview/dashboard-overview-client";
import { TrustedDeviceList } from "@/components/dashboard/trusted-device-list";
import { fetchDashboardOverview } from "@/lib/dashboard-api";
import UrlScanner from "@/components/dashboard/url-scanner";

export default function DashboardPage() {
  const router = useRouter();

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setTokenState] = useState("");

  useEffect(() => {
    const token = getToken();

    if (!token) {
      router.replace("/login");
      return;
    }

    setTokenState(token);

    async function load() {
      try {
        const result = await fetchDashboardOverview(token || undefined)
        setData(result);
      } catch (err: any) {
        setError(err.message || "Failed to load dashboard.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 p-6 text-white">
        Loading dashboard...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-slate-950 p-6 text-white">
        <div className="mx-auto max-w-7xl rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
          <h1 className="text-2xl font-semibold">Dashboard failed to load</h1>

          <p className="mt-3 text-sm text-slate-300">
            {error || "Unknown dashboard error."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">

        <DashboardOverviewClient data={data} token={token || ""} />

        {/* 🔥 YOUR CORE PRODUCT */}
        <UrlScanner />

        {/* Optional — keep if real */}
        <TrustedDeviceList />
      </div>
    </div>
  );
}
