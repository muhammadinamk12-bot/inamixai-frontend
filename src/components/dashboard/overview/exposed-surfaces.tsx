import {
  Globe,
  Mail,
  Phone,
  FileText,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";

const surfaces = [
  {
    label: "Email identities",
    value: "14",
    status: "3 exposed",
    description:
      "Connected email identities being watched for leaks, misuse, and breach signals.",
    icon: Mail,
  },
  {
    label: "Phone numbers",
    value: "06",
    status: "1 high-risk",
    description:
      "Phone-linked identity surfaces monitored for fraud attempts and suspicious activity.",
    icon: Phone,
  },
  {
    label: "Public web mentions",
    value: "28",
    status: "5 flagged",
    description:
      "Open web and indexed pages where identity details may appear or be misused.",
    icon: Globe,
  },
  {
    label: "Sensitive documents",
    value: "11",
    status: "2 reviewed",
    description:
      "Documents under watch for exposure, unauthorized access, or risky sharing patterns.",
    icon: FileText,
  },
];

export default function ExposedSurfaces() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
            <ShieldAlert size={14} />
            Exposure map
          </div>

          <h3 className="mt-4 text-lg font-semibold text-slate-950">
            Linked identities and exposed surfaces
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            A structured view of the identity surfaces connected to this
            workspace and where preventive attention is needed first.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-100"
        >
          Open full surface map
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {surfaces.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-[22px] border border-slate-200 bg-white p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
                  <Icon size={20} />
                </div>

                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                  {item.status}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}