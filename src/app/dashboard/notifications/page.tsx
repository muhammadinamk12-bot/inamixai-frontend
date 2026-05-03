export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-950">Notifications</h1>
      <p className="text-slate-600">
        Security notifications and protection updates will appear here.
      </p>

      <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
        <h2 className="text-xl font-bold text-cyan-800">
          System protected
        </h2>
        <p className="mt-2 text-cyan-700">
          InamixAI will notify users when risky activity is detected.
        </p>
      </div>
    </div>
  );
}