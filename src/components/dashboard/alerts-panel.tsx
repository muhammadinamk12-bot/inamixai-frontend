"use client";

import { useEffect, useState } from "react";

type Alert = {
  id: string;
  title: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
  recommended_action: string;
  ai_explanation: string;
  created_at: string;
};

type AlertsResponse = {
  alerts: Alert[];
  total: number;
};

const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

function severityStyle(severity: Alert["severity"]) {
  if (severity === "critical") {
    return "border-red-500/30 bg-red-500/10 text-red-300";
  }

  if (severity === "high") {
    return "border-orange-500/30 bg-orange-500/10 text-orange-300";
  }

  if (severity === "medium") {
    return "border-amber-500/30 bg-amber-500/10 text-amber-300";
  }

  return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
}

export function AlertsPanel() {
  const [data, setData] = useState<AlertsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadAlerts() {
    try {
      const res = await fetch(`${API}/api/v1/alerts`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to load alerts");
      }

      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAlerts();
  }, []);

  if (loading) {
    return (
      <div className="rounded-[30px] border border-white/10 bg-[#0a1124] p-6 text-white/60">
        Loading live threat alerts...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-[30px] border border-red-500/20 bg-red-500/10 p-6 text-red-200">
        Could not load live threat alerts. Make sure backend is running.
      </div>
    );
  }

  return (
    <div className="rounded-[30px] border border-white/10 bg-[#0a1124] p-6 shadow-[0_0_60px_rgba(239,68,68,0.07)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-white/45">
            Auto alerts engine
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Live Threat Alerts
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-white/60">
            InamixAI automatically detects identity anomalies and explains what
            action should be taken before risk becomes damage.
          </p>
        </div>

        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-center">
          <p className="text-xs uppercase tracking-[0.14em] text-red-200/60">
            Active alerts
          </p>
          <p className="mt-1 text-3xl font-semibold text-red-300">
            {data.total}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {data.alerts.map((alert) => (
          <div
            key={alert.id}
            className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {alert.title}
                  </h3>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase ${severityStyle(
                      alert.severity
                    )}`}
                  >
                    {alert.severity}
                  </span>
                </div>

                <p className="mt-3 max-w-4xl text-sm leading-7 text-white/65">
                  {alert.description}
                </p>

                <div className="mt-4 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/60">
                    Recommended prevention action
                  </p>
                  <p className="mt-2 text-sm leading-7 text-cyan-100">
                    {alert.recommended_action}
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-violet-500/15 bg-violet-500/10 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-violet-200/60">
                    AI explanation
                  </p>
                  <p className="mt-2 text-sm leading-7 text-violet-100/90">
                    {alert.ai_explanation}
                  </p>
                </div>
              </div>

              <div className="min-w-[180px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/45">
                <p className="text-xs uppercase tracking-[0.14em]">
                  Created
                </p>
                <p className="mt-2 text-white/70">
                  {new Date(alert.created_at).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}