"use client";

import { useEffect, useState } from "react";

type AIDecision = {
  id: string;
  title: string;
  decision_type: string;
  priority: "low" | "medium" | "high" | "critical";
  confidence: number;
  risk_before: number;
  expected_risk_after: number;
  recommended_action: string;
  why_it_matters: string;
  ai_reasoning: string;
  auto_action_allowed: boolean;
  created_at: string;
};

type AIDecisionResponse = {
  total: number;
  auto_action_ready: number;
  manual_review_required: number;
  decisions: AIDecision[];
  updated_at: string;
};

const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

function priorityClass(priority: AIDecision["priority"]) {
  if (priority === "critical") {
    return "border-red-500/30 bg-red-500/10 text-red-300";
  }

  if (priority === "high") {
    return "border-orange-500/30 bg-orange-500/10 text-orange-300";
  }

  if (priority === "medium") {
    return "border-amber-500/30 bg-amber-500/10 text-amber-300";
  }

  return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
}

export function AIDecisionsPanel() {
  const [data, setData] = useState<AIDecisionResponse | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadDecisions() {
    try {
      const res = await fetch(`${API}/api/v1/ai-decisions`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to load AI decisions");
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
    loadDecisions();
  }, []);

  if (loading) {
    return (
      <div className="rounded-[30px] border border-white/10 bg-[#0a1124] p-6 text-white/60">
        Loading AI decision engine...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-[30px] border border-red-500/20 bg-red-500/10 p-6 text-red-200">
        AI Decision Engine could not load. Make sure backend is running.
      </div>
    );
  }

  return (
    <div className="rounded-[30px] border border-white/10 bg-[#0a1124] p-6 shadow-[0_0_60px_rgba(139,92,246,0.08)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-white/45">
            Auto AI decision layer
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            AI Prevention Decisions
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-white/60">
            InamixAI evaluates active identity risk and recommends whether to
            trust, block, review, or harden protection before damage happens.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs text-white/40">Decisions</p>
            <p className="mt-1 text-xl font-semibold text-white">
              {data.total}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
            <p className="text-xs text-emerald-200/60">Auto-ready</p>
            <p className="mt-1 text-xl font-semibold text-emerald-300">
              {data.auto_action_ready}
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3">
            <p className="text-xs text-red-200/60">Review</p>
            <p className="mt-1 text-xl font-semibold text-red-300">
              {data.manual_review_required}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {data.decisions.map((decision) => (
          <div
            key={decision.id}
            className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {decision.title}
                  </h3>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase ${priorityClass(
                      decision.priority
                    )}`}
                  >
                    {decision.priority}
                  </span>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {decision.confidence}% confidence
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                      decision.auto_action_allowed
                        ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-300"
                        : "border-red-500/25 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {decision.auto_action_allowed
                      ? "Auto action allowed"
                      : "Manual review required"}
                  </span>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-red-500/15 bg-red-500/10 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-red-200/60">
                      Risk before
                    </p>
                    <p className="mt-1 text-3xl font-semibold text-red-300">
                      {decision.risk_before}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/10 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-emerald-200/60">
                      Expected after
                    </p>
                    <p className="mt-1 text-3xl font-semibold text-emerald-300">
                      {decision.expected_risk_after}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/60">
                    Recommended action
                  </p>
                  <p className="mt-2 text-sm leading-7 text-cyan-100">
                    {decision.recommended_action}
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-violet-500/15 bg-violet-500/10 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-violet-200/60">
                    AI reasoning
                  </p>
                  <p className="mt-2 text-sm leading-7 text-violet-100/90">
                    {decision.ai_reasoning}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {decision.why_it_matters}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}