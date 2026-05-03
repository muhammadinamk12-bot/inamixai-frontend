"use client";

import { useState } from "react";

export default function UrlScanPanel() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleScan = async () => {
    if (!url.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/url-scan/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.detail || "Something went wrong");
      } else {
        setResult(data);
      }
    } catch {
      setError("Backend connection failed");
    }

    setLoading(false);
  };

  const getStatusColor = () => {
    if (!result) return "";

    return result.is_safe
      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
      : "bg-red-500/20 text-red-300 border border-red-500/30";
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-[#0f172a] p-6 shadow-2xl">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            InamixAI Prevention Engine
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            URL Protection Scanner
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Detect phishing, malware, and dangerous websites before users open them.
          </p>
        </div>

        {result && (
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusColor()}`}
          >
            {result.is_safe ? "SAFE" : "BLOCKED"}
          </span>
        )}
      </div>

      {/* Input Area */}
      <div className="mb-5 flex gap-3">
        <input
          type="text"
          placeholder="https://suspicious-website.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 rounded-2xl border border-cyan-400/40 bg-white px-4 py-3 text-sm font-semibold text-black outline-none placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/30"
        />

        <button
          onClick={handleScan}
          className="rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
        >
          {loading ? "Scanning..." : "Scan"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-4 text-sm text-white">
          {/* Risk Score */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
            <div className="mb-1 text-xs uppercase tracking-wide text-slate-500">
              Risk Score
            </div>

            <div className="text-3xl font-bold text-white">
              {result.prevention?.risk_score}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Risk Level
              </div>

              <div className="mt-2 capitalize text-white">
                {result.risk_level}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Threat Type
              </div>

              <div className="mt-2 text-white">
                {result.threat_types?.join(", ") || "None"}
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
            <div className="mb-1 text-xs uppercase tracking-wide text-slate-500">
              Recommendation
            </div>

            <div className="text-slate-200">
              {result.recommendation}
            </div>
          </div>

          {/* Actions */}
          <div>
            <div className="mb-2 text-sm font-semibold text-white">
              Recommended Actions
            </div>

            <div className="space-y-3">
              {result.prevention?.actions?.length > 0 ? (
                result.prevention.actions.map((action: any) => (
                  <div
                    key={action.id}
                    className="rounded-2xl border border-slate-700 bg-slate-900 p-4"
                  >
                    <div className="font-semibold text-white">
                      {action.title}
                    </div>

                    <div className="mt-1 text-xs text-slate-400">
                      Priority: {action.priority} • Risk Reduction:{" "}
                      {action.risk_reduction}
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 text-slate-400">
                  No prevention actions required.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}