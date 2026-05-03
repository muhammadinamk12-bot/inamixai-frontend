import { Brain, ArrowRight, Sparkles } from "lucide-react";

const recommendations = [
  {
    title: "Rotate exposed credentials immediately",
    priority: "Critical",
    description:
      "A matched exposure signal suggests one or more credentials may already be circulating in risky environments.",
  },
  {
    title: "Enable stronger verification on sensitive flows",
    priority: "High",
    description:
      "Suspicious access behavior indicates sensitive identity flows should be protected with stronger checks.",
  },
  {
    title: "Review recently flagged web surfaces",
    priority: "Medium",
    description:
      "Several indexed pages and public references may require takedown, correction, or active monitoring.",
  },
];

function priorityClasses(priority: string) {
  if (priority === "Critical") {
    return "border-rose-200 bg-rose-50 text-rose-700";
  }

  if (priority === "High") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-sky-200 bg-sky-50 text-sky-700";
}

export default function AiRecommendations() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
            <Sparkles size={14} />
            AI prevention guidance
          </div>

          <h3 className="mt-4 text-lg font-semibold text-slate-950">
            Recommended next actions
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            The system is prioritizing the highest-leverage actions that can
            reduce identity risk before damage spreads.
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
          <Brain size={20} />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {recommendations.map((item) => (
          <div
            key={item.title}
            className="rounded-[22px] border border-slate-200 bg-white p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h4 className="text-sm font-semibold text-slate-950">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>

              <span
                className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${priorityClasses(
                  item.priority
                )}`}
              >
                {item.priority}
              </span>
            </div>

            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
            >
              Apply recommendation
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}