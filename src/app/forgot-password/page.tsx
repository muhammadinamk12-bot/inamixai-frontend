import Link from "next/link";

const navItems = [
  { label: "What it is", href: "#what-it-is" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why different", href: "#why-different" },
  { label: "Why now", href: "#why-now" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Trust", href: "#trust" },
];

const featureCards = [
  {
    title: "Real-time identity prevention",
    description:
      "InamixAI is built to stop identity misuse before it spreads across email, phone, documents, public web surfaces, and suspicious digital touchpoints.",
  },
  {
    title: "One prevention layer across your identity",
    description:
      "Instead of fragmented tools, InamixAI gives one control system that watches, explains, and helps contain risk across the identity surfaces that matter.",
  },
  {
    title: "Action, not passive monitoring",
    description:
      "The product is designed around prevention actions, response guidance, and protective workflows rather than static dashboards full of noise.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Connect your identity surfaces",
    description:
      "Add the email addresses, phone numbers, names, documents, and digital surfaces you want protected.",
  },
  {
    step: "02",
    title: "Scan for risky exposure and misuse",
    description:
      "InamixAI checks for suspicious signals, exposure patterns, impersonation risks, and identity weaknesses.",
  },
  {
    step: "03",
    title: "Prioritize what matters most",
    description:
      "The system highlights the most important risks first so users can act on the highest-impact issues immediately.",
  },
  {
    step: "04",
    title: "Prevent before damage spreads",
    description:
      "Users receive guided actions, protective recommendations, and a central prevention workflow to reduce real-world identity harm.",
  },
];

const differentiators = [
  "Built around prevention, not just alerts",
  "Designed for real people and modern digital identity surfaces",
  "One clean product instead of fragmented security tools",
  "Focuses on clarity, speed, and meaningful actions",
];

const whyNowPoints = [
  "Identity misuse is spreading across more digital surfaces than ever before.",
  "Most people still do not have a simple prevention layer for personal identity risk.",
  "Existing products are often reactive, fragmented, or too technical for normal users.",
  "AI now makes it possible to unify detection, explanation, and prevention in one system.",
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    description: "For basic personal identity awareness and first protection setup.",
    points: [
      "Basic identity surface setup",
      "Core risk scans",
      "Limited alerts",
      "Basic dashboard access",
    ],
  },
  {
    name: "Personal",
    price: "$19/mo",
    description: "For individuals who want stronger, ongoing prevention coverage.",
    points: [
      "Expanded monitoring coverage",
      "Priority prevention alerts",
      "Deeper scan history",
      "Faster recommended actions",
    ],
  },
  {
    name: "Pro",
    price: "$49/mo",
    description: "For serious users who need broader protection and deeper control.",
    points: [
      "Advanced monitoring and investigations",
      "Document and exposure controls",
      "Higher scan limits",
      "Advanced prevention workflows",
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            InamixAI
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-950 sm:inline-flex"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Prevention Engine for Digital Identity
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-6xl">
                Prevent identity misuse before it becomes damage.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                InamixAI is a digital identity protection layer built for the
                prevention era. It helps people detect exposure, understand
                risks, and take action before identity misuse spreads.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Start protecting your identity
              </Link>
              <a
                href="#what-it-is"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                See how it works
              </a>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-semibold">1 layer</p>
                <p className="mt-1 text-sm text-slate-600">
                  One prevention system across key identity surfaces.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-semibold">Real-time</p>
                <p className="mt-1 text-sm text-slate-600">
                  Designed to surface risk early, not after damage.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-semibold">Action-first</p>
                <p className="mt-1 text-sm text-slate-600">
                  Focused on prevention steps, not just passive alerts.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl">
            <div className="rounded-[1.5rem] bg-slate-900 p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">InamixAI Preview</p>
                  <h2 className="text-xl font-semibold">Prevention Command</h2>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                  Protection active
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Protection score</p>
                  <p className="mt-2 text-3xl font-semibold">92%</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Overall identity prevention strength
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Critical signals</p>
                  <p className="mt-2 text-3xl font-semibold">12</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Risks requiring immediate review
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Scans completed</p>
                  <p className="mt-2 text-3xl font-semibold">1,284</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Identity and exposure checks processed
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Open investigations</p>
                  <p className="mt-2 text-3xl font-semibold">09</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Active misuse or impersonation cases
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
                <p className="text-sm font-medium text-amber-200">
                  Alert: suspicious identity impersonation domain detected
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  InamixAI recommends immediate review and protective action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-it-is" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            What InamixAI is
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
            A prevention layer for the modern identity surface.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            InamixAI is designed to protect people from identity misuse in a
            world where personal exposure stretches across email, phone, public
            web pages, leaked data, documents, and connected digital systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              How it works
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              Simple flow. Serious protection.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              The product is built to make identity protection understandable,
              fast, and practical for real people.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7"
              >
                <p className="text-sm font-semibold text-slate-500">
                  Step {item.step}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-different" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why different
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              Not another noisy security dashboard.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              InamixAI is being built around prevention, clarity, and action.
              The goal is not to overwhelm users with technical noise, but to
              help them understand risk and move early.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <div className="space-y-4">
              {differentiators.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why-now" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Why now
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Identity risk is growing faster than protection tools.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              The world has moved into a period where digital identity is used
              everywhere, but prevention is still fragmented. That gap is the
              opportunity InamixAI is built for.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {whyNowPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 text-sm leading-7 text-slate-200"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Features
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
            Built for a real prevention workflow.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            "Identity surface connection",
            "Exposure and misuse scanning",
            "Risk prioritization",
            "Protective action guidance",
            "Case-based investigations",
            "Real-time prevention dashboard",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7"
            >
              <p className="text-lg font-semibold tracking-tight text-slate-950">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Pricing
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              Start simple. Upgrade when your protection needs grow.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-[2rem] border border-slate-200 bg-white p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {tier.name}
                </p>
                <p className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
                  {tier.price}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {tier.description}
                </p>

                <div className="mt-6 space-y-3">
                  {tier.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <Link
                  href="/signup"
                  className="mt-8 inline-flex rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Choose {tier.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              About / Trust
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              Built to make identity protection understandable and credible.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              InamixAI is being designed as a serious, clear, prevention-focused
              product that helps people protect one of the most important things
              they own: their identity.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Clear risk communication",
              "Action-oriented design",
              "Professional SaaS experience",
              "Structured around prevention trust",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Start now
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Make identity prevention your default layer.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Join the next generation of users who want identity protection to be
            proactive, clear, and built for the real digital world.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Create account
            </Link>
            <Link
              href="/login"
              className="inline-flex rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Log in
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 InamixAI. Digital identity prevention layer.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#pricing" className="transition hover:text-slate-900">
              Pricing
            </a>
            <a href="#trust" className="transition hover:text-slate-900">
              Trust
            </a>
            <a href="#features" className="transition hover:text-slate-900">
              Features
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}