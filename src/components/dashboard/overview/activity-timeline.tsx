import { activities } from "./overview-data";

export function ActivityTimeline() {
  const timelineItems = Array.isArray(activities) ? activities : [];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="space-y-1">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
          Recent activity
        </p>
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Prevention timeline
        </h2>
        <p className="text-sm text-slate-600">
          Latest risk detections, automated protections, and scan activity.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {timelineItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.title}-${index}`}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200">
                <Icon className="h-5 w-5 text-slate-700" />
              </div>

              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <span className="text-xs font-medium text-slate-500">
                    {item.time}
                  </span>
                </div>

                <p className="text-sm text-slate-600">{item.description}</p>

                <span className="inline-flex rounded-full bg-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700">
                  {item.type}
                </span>
              </div>
            </div>
          );
        })}

        {timelineItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500">
            No recent activity available.
          </div>
        ) : null}
      </div>
    </section>
  );
}