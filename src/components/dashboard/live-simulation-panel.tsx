"use client";

import { useState } from "react";

type SimulationEvent = {
  id: string;
  title: string;
  severity: "low" | "medium" | "high" | "critical";
  risk_delta: number;
  surface: string;
  ai_summary: string;
  recommended_action: string;
  created_at: string;
};

type SimulationResponse = {
  current_risk_score: number;
  previous_risk_score: number;
  risk_direction: "up" | "down" | "stable";
  event: SimulationEvent;
  timeline_event: string;
  case_update: string;
};

type Props = {
  onTimelineEvent?: (event: string) => void;
  onCaseUpdate?: (event: string) => void;
};

const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

function severityClass(severity: SimulationEvent["severity"]) {
  if (severity === "critical") return "border-red-500/30 bg-red-500/10 text-red-300";
  if (severity === "high") return "border-orange-500/30 bg-orange-500/10 text-orange-300";
  if (severity === "medium") return "border-amber-500/30 bg-amber-500/10 text-amber-300";
  return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
}

export function LiveSimulationPanel({ onTimelineEvent, onCaseUpdate }: Props) {
  const [data, setData] = useState<SimulationResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function runSimulation() {
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/v1/simulation/live-event`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to run simulation");
      }

      const json: SimulationResponse = await res.json();

      setData(json);
      onTimelineEvent?.(json.timeline_event);
      onCaseUpdate?.(json.case_update);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[30px] border border-white/10 bg-[#0a1124] p-6 shadow-[0_0_70px_rgba(239,68,68,0.08)]">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-white/45">
            Live attack simulation
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Continuous Risk Movement Engine
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-white/60">
            Simulate identity attacks, suspicious sessions, phishing exposure,
            and trusted-device improvements to show how InamixAI responds in
            real time.
          </p>
        </div>

        <button
          type="button"
          onClick={runSimulation}
          disabled={loading}
          className="rounded-2xl bg-red-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-red-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Running simulation..." : "Run live simulation"}
        </button>
      </div>

      {data ? (
        <div className="mt-6 grid gap-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-white/35">
                Previous risk
              </p>
              <p className="mt-2 text-3xl font-semibold text-white">
                {data.previous_risk_score}
              </p>
            </div>

            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-red-200/60">
                Current risk
              </p>
              <p className="mt-2 text-3xl font-semibold text-red-300">
                {data.current_risk_score}
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-cyan-200/60">
                Direction
              </p>
              <p className="mt-2 text-3xl font-semibold capitalize text-cyan-300">
                {data.risk_direction}
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-semibold text-white">
                {data.event.title}
              </h3>

              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase ${severityClass(
                  data.event.severity
                )}`}
              >
                {data.event.severity}
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/50">
                {data.event.surface}
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/65">
              {data.event.ai_summary}
            </p>

            <div className="mt-4 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/60">
                Recommended prevention action
              </p>
              <p className="mt-2 text-sm leading-7 text-cyan-100">
                {data.event.recommended_action}
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-violet-500/15 bg-violet-500/10 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-violet-200/60">
                Timeline sync
              </p>
              <p className="mt-2 text-sm leading-7 text-violet-100/90">
                {data.timeline_event}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/55">
          Run a simulation to generate a live risk event.
        </div>
      )}
    </div>
  );
}