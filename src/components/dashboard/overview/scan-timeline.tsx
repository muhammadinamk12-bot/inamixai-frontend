"use client";

type TimelineEvent = {
  id: string;
  title: string;
  description: string;
  time: string;
  tone: "neutral" | "warning" | "danger" | "success";
};

function getToneClasses(tone: TimelineEvent["tone"]) {
  if (tone === "danger") {
    return {
      dot: "bg-red-400 shadow-[0_0_18px_rgba(248,113,113,0.8)]",
      border: "border-red-500/20",
      badge: "bg-red-500/10 text-red-300 border-red-500/20",
    };
  }

  if (tone === "warning") {
    return {
      dot: "bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.8)]",
      border: "border-orange-500/20",
      badge: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    };
  }

  if (tone === "success") {
    return {
      dot: "bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]",
      border: "border-emerald-500/20",
      badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    };
  }

  return {
    dot: "bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]",
    border: "border-cyan-500/20",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  };
}

export function ScanTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-[#0b1220]/90 p-6">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/70">
          Timeline
        </p>
        <h2 className="mt-2 text-lg font-semibold text-white">
          Scan Activity Feed
        </h2>
        <p className="mt-2 text-sm text-white/55">
          A structured sequence of what the prevention engine saw during this
          scan.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-[11px] top-0 h-full w-px bg-white/10" />

        <div className="space-y-5">
          {events.map((event) => {
            const tone = getToneClasses(event.tone);

            return (
              <div key={event.id} className="relative flex gap-4">
                <div className="relative z-10 mt-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#081120]">
                  <div className={`h-2.5 w-2.5 rounded-full ${tone.dot}`} />
                </div>

                <div
                  className={`flex-1 rounded-2xl border bg-white/[0.03] p-4 ${tone.border}`}
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/60">
                        {event.description}
                      </p>
                    </div>

                    <div
                      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tone.badge}`}
                    >
                      {event.time}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}