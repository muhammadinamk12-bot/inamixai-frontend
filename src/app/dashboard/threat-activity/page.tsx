export default function ThreatActivityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-950">Threat Activity</h1>
      <p className="text-slate-600">
        Recent identity protection events, scan results, and prevention actions.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-bold text-slate-900">
          Activity timeline connected
        </h2>
        <p className="mt-2 text-slate-600">
          Google connection and phishing prevention events are now tracked.
        </p>
      </div>
    </div>
  );
}