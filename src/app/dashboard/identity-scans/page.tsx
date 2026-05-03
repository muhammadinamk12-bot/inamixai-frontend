"use client";

import { useState } from "react";

export default function IdentityScanPage() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function runScan() {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/breach/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({
        message: "Error connecting to backend",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#0a1124] p-6">
        <h1 className="text-2xl font-semibold mb-4">
          Identity Breach Scan
        </h1>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 mb-4 outline-none"
        />

        <button
          onClick={runScan}
          disabled={loading || !email}
          className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-xl"
        >
          {loading ? "Scanning..." : "Run Scan"}
        </button>

        {result && (
          <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <p>{result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}