"use client";

import { useState } from "react";

type BreachResult = {
  breached: boolean;
  message: string;
};

type Props = {
  onBreachChecked?: () => void;
  onTimelineEvent?: (event: string) => void;
};

const API = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export function BreachCheckPanel({
  onBreachChecked,
  onTimelineEvent,
}: Props) {
  const [email, setEmail] = useState("test@yahoo.com");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BreachResult | null>(null);

  async function runBreachCheck() {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(`${API}/api/v1/breach/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const json = await res.json();
      setResult(json);

      if (json.breached) {
        onTimelineEvent?.(
          `Real breach signal detected for ${email}. Alert saved to PostgreSQL.`
        );
      } else {
        onTimelineEvent?.(
          `Breach scan completed for ${email}. No known exposure found.`
        );
      }

      onBreachChecked?.();
    } catch (error) {
      console.error(error);
      setResult({
        breached: false,
        message: "Breach check failed. Make sure backend is running.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[30px] border border-white/10 bg-[#0a1124] p-6 shadow-[0_0_60px_rgba(34,211,238,0.08)]">
      <div>
        <p className="text-sm uppercase tracking-[0.16em] text-white/45">
          Real signal engine
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
          Email Breach Check
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-white/60">
          Enter an email to trigger a real identity-risk signal. If exposure is
          detected, InamixAI creates a persistent alert in PostgreSQL.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          className="min-h-12 flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
        />

        <button
          type="button"
          onClick={runBreachCheck}
          disabled={loading || !email.includes("@")}
          className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Scanning..." : "Run breach check"}
        </button>
      </div>

      {result ? (
        <div
          className={`mt-6 rounded-2xl border p-4 ${
            result.breached
              ? "border-red-500/20 bg-red-500/10 text-red-100"
              : "border-emerald-500/20 bg-emerald-500/10 text-emerald-100"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.16em] opacity-70">
            Scan result
          </p>
          <p className="mt-2 text-sm leading-7">{result.message}</p>
          {result.breached ? (
            <p className="mt-2 text-sm leading-7">
              A new alert has been saved. Refresh or check Live Threat Alerts.
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}