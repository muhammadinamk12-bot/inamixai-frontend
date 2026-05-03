'use client';

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export function RiskBarChart({ data }: { data: Array<{ severity: string; count: number }> }) {
  return (
    <div className="card h-[320px] p-5">
      <div className="mb-4 text-lg font-semibold text-slate-900">Threat distribution</div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <XAxis dataKey="severity" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
