import Link from 'next/link';
import { ShieldCheck, Radar, Link2, Laptop, BellRing } from 'lucide-react';

const items = [
  { href: '/dashboard', label: 'Overview', icon: ShieldCheck },
  { href: '/dashboard/sessions', label: 'Sessions', icon: Radar },
  { href: '/dashboard/scans', label: 'Scans', icon: Link2 },
  { href: '/dashboard/devices', label: 'Devices', icon: Laptop },
  { href: '/dashboard/actions', label: 'Actions', icon: BellRing },
];

export function Sidebar() {
  return (
    <aside className="card flex min-h-[720px] w-full max-w-[260px] flex-col p-5">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">InamixAI</div>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">Prevention Engine</h1>
        <p className="mt-2 text-sm text-slate-500">Identity defense built for prevention, not passive alerts.</p>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl bg-slate-950 p-5 text-white">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Wave 1</div>
        <div className="mt-2 text-lg font-semibold">Active identity firewall</div>
        <p className="mt-2 text-sm text-slate-300">Score, explain, and prevent suspicious sessions in real time.</p>
      </div>
    </aside>
  );
}
