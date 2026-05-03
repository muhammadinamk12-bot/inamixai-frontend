import { DeviceItem } from '@/lib/types';

export function DeviceTable({ devices }: { devices: DeviceItem[] }) {
  return (
    <div className="card p-5">
      <div className="mb-5 flex items-center justify-between">
        <div className="text-lg font-semibold text-slate-900">Trusted device center</div>
        <div className="text-sm text-slate-500">{devices.length} devices</div>
      </div>
      <div className="space-y-3">
        {devices.map((device) => (
          <div key={device.id} className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-medium text-slate-900">{device.name}</div>
                <div className="mt-1 text-sm text-slate-500">
                  {device.platform} · {device.browser}
                </div>
              </div>
              <div className="text-right">
                <div className="badge bg-slate-100 text-slate-700 capitalize">{device.trustLevel}</div>
                <div className="mt-2 text-xs text-slate-400">Last seen {new Date(device.lastSeenAt).toLocaleString()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
