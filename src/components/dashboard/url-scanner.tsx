"use client";

import { useState } from "react";

export default function UrlScanner() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleScan() {
    if (!url.trim()) return;

    const token = localStorage.getItem("inamix_token");

    if (!token) {
      setError("You are not logged in.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/v1/url-scan/check",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({ url }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.detail || "Scan failed");
        return;
      }

      setResult(data);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleProtect(targetUrl: string) {
    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/v1/block-url",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: targetUrl }),
        }
      );

      const data = await res.json();

      alert(data.message || "Protected successfully");
    } catch (err) {
      alert("Failed to protect URL");
    }
  }

  return (
    <div className="rounded-[28px] border border-slate-800 bg-[#0f172a] p-6 shadow-2xl">
      {/* Header */}
      <div className="mb-6">
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

      {/* Input */}
      <div className="mt-4 flex gap-3">
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 rounded-2xl border border-cyan-400/40 bg-white px-4 py-3 text-sm font-semibold text-black outline-none placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/30"
        />

        <button
          onClick={handleScan}
          disabled={loading}
          className="rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400 disabled:opacity-60"
        >
          {loading ? "Scanning..." : "Scan"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Scan Result
              </p>

              <p
                className={`mt-2 text-2xl font-bold ${
                  result.is_safe ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {result.is_safe ? "SAFE" : "BLOCKED"}
              </p>
            </div>

            <div
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                result.is_safe
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-red-500/20 text-red-300 border border-red-500/30"
              }`}
            >
              {result.risk_level}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-700 bg-[#111827] p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Threat Type
              </p>

              <p className="mt-2 text-sm text-white">
                {result.threat_types?.join(", ") || "None"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-[#111827] p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Status
              </p>

              <p className="mt-2 text-sm text-white">
                {result.is_safe
                  ? "No active threat detected"
                  : "Dangerous website detected"}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-700 bg-[#111827] p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Recommendation
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              {result.recommendation}
            </p>
          </div>

          {!result.is_safe && (
            <button
              onClick={() => handleProtect(result.original_url)}
              className="mt-5 rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Protect (Block this URL)
            </button>
          )}
        </div>
      )}
    </div>
  );
}