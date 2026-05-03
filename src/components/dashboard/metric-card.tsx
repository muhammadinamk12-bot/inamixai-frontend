import { ReactNode } from 'react';

export function MetricCard({ label, value, hint, accent }: { label: string; value: string | number; hint: string; accent?: ReactNode }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-slate-500">{label}</div>
          <div className="mt-3 text-3xl font-semibold text-slate-900">{value}</div>
          <div className="mt-2 text-sm text-slate-500">{hint}</div>
        </div>
        {accent}
      </div>
    </div>
  );
}
