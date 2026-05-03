"use client";

type Action = {
  action: string;
  title: string;
  description: string;
  priority: "now" | "today" | "soon";
};

function getPriorityStyle(priority: string) {
  if (priority === "now")
    return "border-red-500/30 text-red-300 bg-red-500/10";
  if (priority === "today")
    return "border-orange-500/30 text-orange-300 bg-orange-500/10";
  return "border-cyan-500/30 text-cyan-300 bg-cyan-500/10";
}

export function ActionCenter({ actions }: { actions: Action[] }) {
  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-[#0b1220]/90 p-6">
      <h2 className="text-lg font-semibold text-white mb-4">
        Prevention Actions
      </h2>

      <div className="space-y-4">
        {actions.map((a, i) => (
          <div
            key={i}
            className={`rounded-xl border p-4 ${getPriorityStyle(
              a.priority
            )}`}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">{a.title}</p>
              <span className="text-xs uppercase opacity-70">
                {a.priority}
              </span>
            </div>

            <p className="text-sm mt-2 opacity-80">{a.description}</p>

            <button className="mt-3 rounded-lg bg-white/10 px-4 py-1 text-sm hover:bg-white/20 transition">
              Take Action
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}