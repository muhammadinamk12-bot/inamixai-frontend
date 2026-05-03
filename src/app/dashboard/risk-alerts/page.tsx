export default function RiskAlertsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-950">Risk Alerts</h1>
      <p className="text-slate-600">
        High-risk threats and blocked identity attacks will appear here.
      </p>

      <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
        <h2 className="text-xl font-bold text-red-800">
          Critical phishing protection enabled
        </h2>
        <p className="mt-2 text-red-700">
          InamixAI blocks dangerous phishing links before users open them.
        </p>
      </div>
    </div>
  );
}