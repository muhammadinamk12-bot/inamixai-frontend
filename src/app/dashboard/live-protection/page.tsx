export default function LiveProtectionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-950">Live Protection</h1>
      <p className="text-slate-600">
        InamixAI browser protection is active and scanning risky links in real time.
      </p>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-xl font-bold text-emerald-800">
          Protection Active
        </h2>
        <p className="mt-2 text-emerald-700">
          Browser extension, URL scanning, and prevention engine are running.
        </p>
      </div>
    </div>
  );
}