"use client";

import { useState } from "react";
import { scanLink } from "@/lib/api";
import { LinkScanItem } from "@/lib/types";

export default function ScanLinkForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LinkScanItem | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!url.trim()) {
      setError("Please enter a link.");
      return;
    }

    setLoading(true);
    try {
      const data = await scanLink({ url: url.trim() });
      setResult(data);
    } catch {
      setError("Unable to scan this link right now.");
    } finally {
      setLoading(false);
    }
  }

  const verdictStyles: Record<string, string> = {
    safe: "bg-green-50 text-green-700 border-green-200",
    suspicious: "bg-yellow-50 text-yellow-700 border-yellow-200",
    dangerous: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-zinc-900">Scan a suspicious link</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Paste any URL to get a risk verdict, score, and threat reasons.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:opacity-60"
        >
          {loading ? "Scanning..." : "Scan link"}
        </button>
      </form>

      {error ? (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {result ? (
        <div className="mt-5 space-y-4">
          <div
            className={`rounded-xl border px-4 py-3 text-sm font-medium ${
              verdictStyles[result.verdict] || "bg-zinc-50 text-zinc-700 border-zinc-200"
            }`}
          >
            Verdict: {result.verdict.toUpperCase()} · Risk score: {result.riskScore}
          </div>

          <div className="rounded-xl bg-zinc-50 p-4">
            <div className="mb-2 text-sm font-medium text-zinc-900">Domain</div>
            <div className="text-sm text-zinc-600">{result.domain}</div>
          </div>

          <div className="rounded-xl bg-zinc-50 p-4">
            <div className="mb-2 text-sm font-medium text-zinc-900">Reasons</div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600">
              {result.reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}