"use client";

export function AlertBanner({
  riskLevel,
  decision,
}: {
  riskLevel: string;
  decision: string;
}) {
  if (riskLevel !== "high" && riskLevel !== "critical") return null;

  return (
    <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wider opacity-80">
            Security Alert
          </p>
          <p className="text-lg font-semibold mt-1">
            {riskLevel.toUpperCase()} risk detected — action required
          </p>
        </div>

        <div className="text-sm uppercase opacity-70">
          Decision: {decision}
        </div>
      </div>
    </div>
  );
}