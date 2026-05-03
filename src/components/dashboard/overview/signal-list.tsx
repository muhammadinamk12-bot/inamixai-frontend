"use client";

type Signal = {
  code: string;
  title: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
  category: string;
};

function getColor(severity: string) {
  if (severity === "critical") return "border-red-500/30 text-red-300";
  if (severity === "high") return "border-orange-500/30 text-orange-300";
  if (severity === "medium") return "border-yellow-500/30 text-yellow-300";
  return "border-emerald-500/30 text-emerald-300";
}

export function SignalList({ signals }: { signals: Signal[] }) {
  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-[#0b1220]/90 p-6">
      <h2 className="mb-4 text-lg font-semibold text-white">Threat Signals</h2>

      <div className="space-y-3">
        {signals.map((signal, index) => (
          <div
            key={`${signal.code}-${index}`}
            className={`rounded-xl border bg-white/5 p-4 ${getColor(signal.severity)}`}
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">{signal.title}</p>
              <span className="text-xs uppercase opacity-70">
                {signal.category}
              </span>
            </div>

            <p className="mt-2 text-sm opacity-70">{signal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}