import { SessionRecord } from '@/lib/types';

export function SessionTable({ sessions }: { sessions: SessionRecord[] }) {
  return (
    <div className="card p-5">
      <div className="mb-5 flex items-center justify-between">
        <div className="text-lg font-semibold text-slate-900">Session watch</div>
        <div className="text-sm text-slate-500">Real-time identity activity</div>
      </div>
      <div className="space-y-3">
        {sessions.map((session) => (
          <div key={session.id} className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-medium text-slate-900">{session.geo_city || 'Unknown city'}, {session.geo_country || 'Unknown country'}</div>
                <div className="mt-1 text-sm text-slate-500">IP {session.ip_address} · {session.login_at ? new Date(session.login_at).toLocaleString() : "Unknown time"}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {Object.entries(session.anomaly_flags || {}).map(([key, value]) => (
                    value ? <span key={key} className="badge bg-rose-50 text-rose-700">{key.replaceAll('_', ' ')}</span> : null
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold text-slate-900">{session.risk_score}</div>
                <div className="mt-1 text-sm capitalize text-slate-500">{session.session_status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
