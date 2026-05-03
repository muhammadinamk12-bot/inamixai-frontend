import { LinkScanItem } from '@/lib/types';

export function LinkScanTable({ scans }: { scans: LinkScanItem[] }) {
  return (
    <div className="card p-5">
      <div className="mb-5 text-lg font-semibold text-slate-900">Scam link scanner</div>
      <div className="space-y-4">
        {scans.map((scan) => (
          <div key={scan.id} className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-medium break-all text-slate-900">{scan.url}</div>
                <div className="mt-1 text-sm text-slate-500">{scan.domain}</div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-500">
                  {scan.reasons.map((reason) => (
                    <li key={reason}>{reason}</li>
                  ))}
                </ul>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold text-slate-900">{scan.riskScore}</div>
                <div className="mt-2 badge bg-rose-50 text-rose-700 capitalize">{scan.verdict}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
