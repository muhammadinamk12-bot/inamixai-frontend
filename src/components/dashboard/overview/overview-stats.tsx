"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Shield,
  Radar,
  LockKeyhole,
  Activity,
} from "lucide-react";

type OverviewStatsProps = {
  riskScore?: number;
  confidenceScore?: number;
  decision?: "allow" | "review" | "challenge" | "block";
  activeSignals?: number;
};

const decisionConfig = {
  allow: {
    label: "Allow",
    tone:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    icon: CheckCircle2,
  },
  review: {
    label: "Review",
    tone:
      "border-yellow-500/30 bg-yellow-500/10 text-yellow-300 shadow-[0_0_30px_rgba(234,179,8,0.15)]",
    icon: Activity,
  },
  challenge: {
    label: "Challenge",
    tone:
      "border-orange-500/30 bg-orange-500/10 text-orange-300 shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    icon: AlertTriangle,
  },
  block: {
    label: "Block",
    tone:
      "border-red-500/30 bg-red-500/10 text-red-300 shadow-[0_0_30px_rgba(239,68,68,0.18)]",
    icon: LockKeyhole,
  },
};

function getRiskTone(score: number) {
  if (score >= 85) {
    return "text-red-300";
  }
  if (score >= 65) {
    return "text-orange-300";
  }
  if (score >= 35) {
    return "text-yellow-300";
  }
  return "text-emerald-300";
}

function getRiskLabel(score: number) {
  if (score >= 85) return "Critical";
  if (score >= 65) return "High";
  if (score >= 35) return "Medium";
  return "Low";
}

export function OverviewStats({
  riskScore = 84,
  confidenceScore = 52,
  decision = "challenge",
  activeSignals = 6,
}: OverviewStatsProps) {
  const decisionItem = decisionConfig[decision];
  const DecisionIcon = decisionItem.icon;

  const cards = [
    {
      title: "Risk Score",
      value: `${riskScore}/100`,
      subtext: `${getRiskLabel(riskScore)} identity exposure`,
      icon: Shield,
      valueTone: getRiskTone(riskScore),
    },
    {
      title: "Confidence",
      value: `${confidenceScore}%`,
      subtext: "Trust in current identity state",
      icon: Radar,
      valueTone: "text-cyan-300",
    },
    {
      title: "Decision",
      value: decisionItem.label,
      subtext: "Current prevention outcome",
      icon: DecisionIcon,
      chipTone: decisionItem.tone,
    },
    {
      title: "Active Signals",
      value: `${activeSignals}`,
      subtext: "Live warning signals detected",
      icon: AlertTriangle,
      valueTone: activeSignals >= 5 ? "text-orange-300" : "text-emerald-300",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/90 p-5 backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-[#0d1526]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.10),transparent_30%)]" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  {card.title}
                </p>

                {"chipTone" in card ? (
                  <div
                    className={`mt-4 inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm font-semibold ${card.chipTone}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{card.value}</span>
                  </div>
                ) : (
                  <p
                    className={`mt-4 text-3xl font-semibold tracking-tight ${card.valueTone}`}
                  >
                    {card.value}
                  </p>
                )}

                <p className="mt-2 text-sm text-white/55">{card.subtext}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white/70">
                <Icon className="h-5 w-5" />
              </div>
            </div>

            <div className="relative mt-5 h-px w-full bg-white/10" />
            <div className="relative mt-3 text-xs text-white/35">
              Prevention Engine Signal Layer
            </div>
          </div>
        );
      })}
    </section>
  );
}