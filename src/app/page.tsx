"use client";

import Link from "next/link";

export default function InamixAILandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02040a] text-white">
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(1deg); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(500%); opacity: 0; }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes moveGrid {
          0% { background-position: 0 0; }
          100% { background-position: 90px 90px; }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 1; }
        }
        .cyber-grid {
          background-image:
            linear-gradient(rgba(34, 211, 238, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.08) 1px, transparent 1px);
          background-size: 90px 90px;
          animation: moveGrid 18s linear infinite;
        }
        .float-card {
          animation: float 6s ease-in-out infinite;
        }
        .scan-line {
          animation: scan 3.5s ease-in-out infinite;
        }
        .glow-pulse {
          animation: glow 2.5s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 -z-10 bg-[#02040a]" />
      <div className="fixed inset-0 -z-10 cyber-grid" />
      <div className="fixed left-1/2 top-[-220px] -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-500/25 blur-[150px]" />
      <div className="fixed bottom-[-220px] right-[-120px] -z-10 h-[520px] w-[520px] rounded-full bg-blue-700/30 blur-[150px]" />
      <div className="fixed left-[-120px] top-[40%] -z-10 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[140px]" />

      <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#02040a]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-11 rounded-2xl bg-cyan-300 shadow-[0_0_45px_rgba(34,211,238,0.75)]">
              <div className="absolute inset-0 rounded-2xl border border-white/40" />
            </div>
            <span className="text-2xl font-black tracking-tight">InamixAI</span>
          </Link>

          <nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#protection" className="hover:text-cyan-300">Protection</a>
            <a href="#engine" className="hover:text-cyan-300">Engine</a>
            <a href="#proof" className="hover:text-cyan-300">Proof</a>
            <a href="#access" className="hover:text-cyan-300">Access</a>
          </nav>

          <Link
            href="/login"
            className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2.5 text-sm font-bold text-cyan-100 hover:bg-cyan-300/20"
          >
            Login
          </Link>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1fr_560px] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.12)]">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.9)]" />
            LIVE IDENTITY PREVENTION ENGINE
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
            Your digital identity,
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
              protected before damage.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-400">
            InamixAI blocks phishing, suspicious sessions, fake login pages, and
            account-takeover signals with a real-time AI protection layer.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="rounded-2xl bg-cyan-300 px-8 py-4 text-lg font-black text-black shadow-[0_0_55px_rgba(34,211,238,0.45)] transition hover:scale-105"
            >
              Request Early Access
            </Link>

            <Link
              href="/dashboard"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
            >
              Open Dashboard
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
            <MiniStat value="24/7" label="Protection" />
            <MiniStat value="AI" label="Risk Engine" />
            <MiniStat value="Live" label="Browser Shield" />
            <MiniStat value="Auto" label="Prevention" />
          </div>
        </div>

        <CyberDashboard />
      </section>

      <section id="protection" className="border-y border-cyan-300/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              Protection Layer
            </p>
            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Built for the exact moments where people get hacked.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard title="Fake login blocking" text="Stops phishing pages before users type passwords." />
            <FeatureCard title="Risk scoring" text="Scores identity danger from browser, device, and session signals." />
            <FeatureCard title="Trusted devices" text="Separates safe devices from suspicious access attempts." />
            <FeatureCard title="Action engine" text="Moves from warning to real prevention workflows." />
          </div>
        </div>
      </section>

      <section id="engine" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              AI Command Center
            </p>
            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Not monitoring after the attack. Stopping the attack path.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              InamixAI watches identity signals in real time, then recommends or
              triggers protection before money, accounts, or private data are lost.
            </p>
          </div>

          <div className="rounded-[34px] border border-cyan-300/15 bg-slate-950/80 p-6 shadow-[0_0_80px_rgba(34,211,238,0.12)]">
            <EngineRow title="URL Protection" status="Scanning links" />
            <EngineRow title="Session Intelligence" status="Detecting unusual access" />
            <EngineRow title="Device Trust" status="Verifying known devices" />
            <EngineRow title="Identity Exposure" status="Checking breach risk" />
            <EngineRow title="Prevention Action" status="Ready to block" />
          </div>
        </div>
      </section>

      <section id="proof" className="border-y border-cyan-300/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-[40px] border border-cyan-300/20 bg-cyan-300/10 p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
                  Demo Moment
                </p>
                <h2 className="mt-5 text-4xl font-black md:text-5xl">
                  “InamixAI blocked a fake banking login before credentials were entered.”
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  This is the strongest product story: not passive alerts, but
                  prevention at the exact second risk appears.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-white/10 bg-black/45 p-6">
                <Timeline level="CRITICAL" text="Fake login page detected" />
                <Timeline level="BLOCKED" text="Password submission stopped" />
                <Timeline level="SAFE" text="Identity protected successfully" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
          Early Access
        </p>
        <h2 className="mt-5 text-5xl font-black">
          Build trust before the world gets more dangerous.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          InamixAI is designed for the next generation of identity attacks:
          phishing, AI scams, account takeover, and digital impersonation.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-2xl bg-cyan-300 px-8 py-4 text-lg font-black text-black transition hover:scale-105"
          >
            Join Early Access
          </Link>
          <Link
            href="/login"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-bold hover:bg-white/10"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}

function CyberDashboard() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[50px] bg-cyan-400/20 blur-3xl" />

      <div className="float-card relative rounded-[38px] border border-cyan-300/20 bg-[#050b18]/95 p-6 shadow-[0_0_100px_rgba(34,211,238,0.22)]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[38px]">
          <div className="scan-line absolute left-0 top-0 h-20 w-full bg-gradient-to-b from-cyan-300/0 via-cyan-300/25 to-cyan-300/0" />
        </div>

        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">
              InamixAI Shield
            </p>
            <h3 className="mt-2 text-2xl font-black">Threat Blocked</h3>
          </div>
          <span className="rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-black text-emerald-300">
            LIVE
          </span>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-[190px_1fr]">
          <div className="relative flex h-48 items-center justify-center rounded-3xl border border-cyan-300/15 bg-black/35">
            <div className="absolute h-28 w-28 rounded-full border border-cyan-300/40" />
            <div className="absolute h-28 w-28 rounded-full border border-cyan-300/30" style={{ animation: "pulseRing 2s infinite" }} />
            <div className="absolute h-40 w-40 rounded-full border border-cyan-300/15" />
            <div className="text-center">
              <p className="text-5xl font-black text-cyan-200">92</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                Safe Score
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Metric title="Browser Shield" value="ACTIVE" safe />
            <Metric title="Phishing Attempt" value="BLOCKED" danger />
            <Metric title="Trusted Device" value="VERIFIED" safe />
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-red-400/20 bg-red-500/10 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">
              Critical prevention
            </p>
            <span className="glow-pulse rounded-full bg-red-500/20 px-3 py-1 text-xs font-black text-red-300">
              STOPPED
            </span>
          </div>
          <h4 className="mt-3 text-xl font-black">Credential theft interrupted</h4>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Suspicious login page detected. InamixAI blocked the user action and
            activated identity protection.
          </p>
        </div>

        <div className="mt-6 h-28 rounded-3xl border border-white/10 bg-black/40 p-5">
          <div className="flex h-full items-end gap-2">
            {[35, 56, 42, 78, 50, 88, 63, 96, 70, 100, 76, 92].map((h, i) => (
              <div
                key={i}
                className="w-full rounded-t-xl bg-cyan-300/75 shadow-[0_0_18px_rgba(34,211,238,0.5)] transition-all duration-500 hover:bg-white"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-cyan-300/10 bg-white/[0.04] p-4 shadow-[0_0_30px_rgba(34,211,238,0.05)]">
      <p className="text-2xl font-black text-cyan-200">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-3 hover:border-cyan-300/40 hover:shadow-[0_0_55px_rgba(34,211,238,0.16)]">
      <div className="mb-6 h-12 w-12 rounded-2xl bg-cyan-300/15 shadow-[0_0_35px_rgba(34,211,238,0.25)] group-hover:bg-cyan-300/25" />
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-8 text-slate-400">{text}</p>
    </div>
  );
}

function Metric({
  title,
  value,
  safe,
  danger,
}: {
  title: string;
  value: string;
  safe?: boolean;
  danger?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        danger
          ? "border-red-400/20 bg-red-500/10 text-red-300"
          : safe
          ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
          : "border-cyan-300/20 bg-cyan-300/10 text-cyan-300"
      }`}
    >
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-lg font-black">{value}</p>
    </div>
  );
}

function EngineRow({ title, status }: { title: string; status: string }) {
  return (
    <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 last:mb-0">
      <div>
        <h3 className="text-xl font-black">{title}</h3>
        <p className="mt-1 text-sm text-slate-400">{status}</p>
      </div>
      <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.9)]" />
    </div>
  );
}

function Timeline({ level, text }: { level: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center justify-between gap-4">
        <p className="font-semibold text-slate-200">{text}</p>
        <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-300">
          {level}
        </span>
      </div>
    </div>
  );
}