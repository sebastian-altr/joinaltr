import Link from "next/link";

const communities = [
  {
    name: "Fitness",
    description:
      "Build strength, improve your routine, and learn from people working toward similar goals.",
    href: "/communities/fitness",
    label: "Build strength",
    accent: "text-emerald-300",
    border: "border-emerald-400/20",
    background:
      "from-emerald-400/[0.16] via-emerald-400/[0.05] to-transparent",
    glow: "group-hover:shadow-emerald-950/40",
  },
  {
    name: "Confidence",
    description:
      "Take action, speak up, and become more comfortable doing the things you usually overthink.",
    href: "/communities/confidence",
    label: "Take action",
    accent: "text-violet-300",
    border: "border-violet-400/20",
    background:
      "from-violet-400/[0.16] via-violet-400/[0.05] to-transparent",
    glow: "group-hover:shadow-violet-950/40",
  },
  {
    name: "Nutrition",
    description:
      "Build healthier eating habits through practical advice and shared experience.",
    href: "/communities/nutrition",
    label: "Eat better",
    accent: "text-orange-300",
    border: "border-orange-300/20",
    background:
      "from-orange-300/[0.16] via-orange-300/[0.05] to-transparent",
    glow: "group-hover:shadow-orange-950/40",
  },
  {
    name: "Skincare",
    description:
      "Discuss routines, products, setbacks, and progress with people who understand.",
    href: "/communities/skincare",
    label: "Feel confident",
    accent: "text-sky-300",
    border: "border-sky-300/20",
    background:
      "from-sky-300/[0.16] via-sky-300/[0.05] to-transparent",
    glow: "group-hover:shadow-sky-950/40",
  },
];

const activityItems = [
  {
    initials: "FM",
    member: "Fitness member",
    community: "Fitness",
    post: "Went to the gym even though I really didn’t feel like going. Glad I did.",
    helpful: "__",
    accent: "from-emerald-400/20 to-teal-400/10",
  },
  {
    initials: "CM",
    member: "Confidence member",
    community: "Confidence",
    post: "Did something today I would normally overthink for a week.",
    helpful: "__",
    accent: "from-violet-400/20 to-fuchsia-400/10",
  },
  {
    initials: "NM",
    member: "Nutrition member",
    community: "Nutrition",
    post: "Meal prepping twice a week made eating well feel much less complicated.",
    helpful: "__",
    accent: "from-orange-300/20 to-amber-300/10",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Share what you are working on, what you have learned, and where you want to improve.",
  },
  {
    number: "02",
    title: "Join communities",
    description:
      "Find people dealing with similar goals, questions, setbacks, and experiences.",
  },
  {
    number: "03",
    title: "Take part",
    description:
      "Ask questions, share progress, offer useful advice, and support other members.",
  },
  {
    number: "04",
    title: "Build your reputation",
    description:
      "Earn appreciation when people find your posts, replies, and encouragement helpful.",
  },
];

const tiers = [
  {
    name: "New Member",
    range: "0–24 👍",
    description: "The beginning of your JoinAltr journey.",
    border: "border-white/10",
    background: "bg-white/[0.025]",
    badge: "border-white/10 bg-white/[0.06] text-gray-300",
    title: "text-white",
    glow: "",
  },
  {
    name: "Bronze",
    range: "25–99 👍",
    description: "Recognized for beginning to help other members.",
    border: "border-orange-700/35",
    background:
      "bg-gradient-to-br from-orange-800/[0.16] via-orange-950/[0.08] to-transparent",
    badge: "border-orange-600/30 bg-orange-700/15 text-orange-300",
    title: "text-orange-200",
    glow: "shadow-orange-950/30",
  },
  {
    name: "Silver",
    range: "100–249 👍",
    description: "A trusted and increasingly helpful contributor.",
    border: "border-slate-300/25",
    background:
      "bg-gradient-to-br from-slate-200/[0.11] via-slate-400/[0.04] to-transparent",
    badge: "border-slate-200/25 bg-slate-200/10 text-slate-100",
    title: "text-slate-100",
    glow: "shadow-slate-950/30",
  },
  {
    name: "Gold",
    range: "250–499 👍",
    description: "Known for consistently useful contributions.",
    border: "border-yellow-400/30",
    background:
      "bg-gradient-to-br from-yellow-400/[0.15] via-amber-500/[0.06] to-transparent",
    badge: "border-yellow-400/30 bg-yellow-400/10 text-yellow-200",
    title: "text-yellow-200",
    glow: "shadow-yellow-950/30",
  },
  {
    name: "Platinum",
    range: "500–999 👍",
    description: "A highly respected member of the community.",
    border: "border-cyan-300/30",
    background:
      "bg-gradient-to-br from-cyan-300/[0.14] via-sky-400/[0.06] to-transparent",
    badge: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
    title: "text-cyan-100",
    glow: "shadow-cyan-950/30",
  },
  {
    name: "Legend",
    range: "1000+ 👍",
    description: "For members whose positive impact is impossible to miss.",
    border: "border-violet-400/35",
    background:
      "bg-gradient-to-br from-violet-400/[0.18] via-fuchsia-400/[0.08] to-amber-300/[0.08]",
    badge:
      "border-violet-300/35 bg-violet-300/10 text-violet-100 shadow-lg shadow-violet-950/40",
    title: "text-violet-100",
    glow: "shadow-violet-950/50",
  },
];

const principles = [
  "Progress over popularity",
  "Contribution over attention",
  "Honesty over performance",
  "People before metrics",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <section className="relative isolate min-h-[calc(100vh-80px)]">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />

        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[640px] w-[950px] -translate-x-1/2 rounded-full bg-emerald-400/[0.08] blur-[150px]" />

        <div className="pointer-events-none absolute -right-56 top-64 -z-10 h-[520px] w-[520px] rounded-full bg-violet-400/[0.09] blur-[150px]" />

        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 pb-24 pt-20 sm:px-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:pb-32 lg:pt-28">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              Open private beta — anyone can join
            </div>

            <h1 className="mt-9 max-w-5xl text-5xl font-bold leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-[88px]">
              Become the person you&apos;ve been trying to be.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400 sm:text-xl">
              Find people who understand what you&apos;re working on. Share
              what you learn. Build a reputation by helping others move
              forward.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
              >
                Join the beta
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/communities"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.025] px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
              >
                Explore communities
              </Link>
            </div>

            <div className="mt-14 grid max-w-2xl gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-white">
                  No follower counts
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Less performance. More progress.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Useful recognition
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Earn status by helping people.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Shared experience
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Connect around real goals.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="pointer-events-none absolute -inset-16 rounded-full bg-gradient-to-br from-emerald-400/10 via-transparent to-violet-400/10 blur-3xl" />

            <div className="relative rounded-[42px] border border-white/10 bg-black/50 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl">
              <div className="absolute -right-4 -top-4 z-20 rounded-full border border-violet-400/25 bg-[#0b0710] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-200 shadow-lg shadow-violet-950/40">
                Product preview
              </div>

              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[#0a0a0a]">
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  </div>

                  <p className="text-xs font-medium text-gray-600">
                    joinaltr.com/profile
                  </p>

                  <div className="w-[50px]" />
                </div>

                <div className="relative p-6 sm:p-8">
                  <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-emerald-400/[0.07] blur-[80px]" />

                  <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-emerald-400/20 to-violet-400/20 text-3xl font-bold">
                      JA
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-2xl font-bold tracking-tight">
                          Community Member
                        </h2>

                        <span className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-yellow-200">
                          Gold
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-gray-500">
                        @yourusername
                      </p>

                      <p className="mt-3 font-semibold text-gray-300">__ 👍</p>
                    </div>
                  </div>

                  <p className="relative mt-7 max-w-xl leading-7 text-gray-300">
                    Sharing what I learn while building healthier habits,
                    greater confidence, and a more consistent life.
                  </p>

                  <div className="relative mt-7 grid grid-cols-3 gap-3">
                    {[
                      ["__", "Helpful replies"],
                      ["__", "Communities"],
                      ["__", "Days active"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-black/30 p-4"
                      >
                        <p className="text-2xl font-bold">{value}</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-7">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
                      Communities
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Fitness", "Confidence", "Nutrition"].map(
                        (community) => (
                          <span
                            key={community}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300"
                          >
                            {community}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="relative mt-7 overflow-hidden rounded-[24px] border border-emerald-400/20 bg-emerald-400/[0.055] p-5">
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-emerald-400/10 blur-[50px]" />

                    <div className="relative">
                      <div className="flex items-center justify-between gap-5">
                        <p className="text-sm font-semibold text-emerald-300">
                          Recent contribution
                        </p>

                        <span className="text-xs text-gray-600">
                          Illustrative
                        </span>
                      </div>

                      <p className="mt-3 leading-7 text-gray-300">
                        Shared a practical answer that helped another member
                        take their next step.
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                        <span>👍</span>
                        <span>__ members found this helpful</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-xs leading-5 text-gray-600">
                    Illustrative product preview showing features planned as
                    JoinAltr develops.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 hidden rounded-2xl border border-white/10 bg-black/70 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-600">
                Reputation
              </p>
              <p className="mt-2 font-semibold">
                Built through contribution
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-32">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-400">
              A different kind of social platform
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl">
              People aren&apos;t looking for more followers.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              They&apos;re looking for useful answers, people who understand
              what they&apos;re going through, and support that helps them move
              forward.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[30px] border border-white/10 bg-[#080808] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="font-semibold text-gray-300">
                  Traditional platforms
                </p>

                <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-gray-600">
                  Attention
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {["Followers", "Views", "Likes"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] px-3 py-6 text-center text-sm text-gray-500 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[30px] border border-emerald-400/25 bg-emerald-400/[0.055] p-6 sm:p-7">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-[70px]" />

              <div className="relative flex items-center justify-between gap-4">
                <p className="font-semibold">JoinAltr</p>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Contribution
                </span>
              </div>

              <div className="relative mt-6 grid grid-cols-3 gap-3">
                {["Helpful replies", "Useful posts", "People supported"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-emerald-400/20 bg-black/20 px-3 py-6 text-center text-sm font-semibold text-emerald-100"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-300">
              Illustrative activity
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl">
              A feed built around people actually moving forward.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-500">
            Honest progress, useful lessons, meaningful questions, and support
            from people who understand.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {activityItems.map((item) => (
            <article
              key={item.post}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div
                className={`absolute right-0 top-0 h-44 w-44 rounded-full bg-gradient-to-br ${item.accent} blur-[70px]`}
              />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br ${item.accent} font-bold`}
                  >
                    {item.initials}
                  </div>

                  <div>
                    <p className="font-semibold">{item.member}</p>
                    <p className="mt-1 text-xs text-gray-600">
                      {item.community}
                    </p>
                  </div>
                </div>

                <p className="mt-7 text-lg leading-8 text-gray-300">
                  “{item.post}”
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-gray-500">
                    {item.helpful} found this helpful
                  </span>

                  <span className="text-lg transition group-hover:scale-110">
                    👍
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs text-gray-600">
          Illustrative posts showing how community activity may appear as the
          platform grows.
        </p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:py-32">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-300">
                Find people who understand
              </p>

              <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl">
                Communities for the person you&apos;ve been trying to become.
              </h2>
            </div>

            <Link
              href="/communities"
              className="group inline-flex items-center gap-2 font-semibold text-gray-400 transition hover:text-white"
            >
              Explore all communities
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {communities.map((community) => (
              <Link
                key={community.name}
                href={community.href}
                className={`group relative overflow-hidden rounded-[34px] border bg-gradient-to-br p-7 shadow-2xl transition duration-300 hover:-translate-y-1 sm:p-9 ${community.border} ${community.background} ${community.glow}`}
              >
                <div className="relative z-10 flex items-start justify-between gap-8">
                  <div>
                    <p
                      className={`text-xs font-bold uppercase tracking-[0.2em] ${community.accent}`}
                    >
                      {community.label}
                    </p>

                    <h3 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                      {community.name}
                    </h3>

                    <p className="mt-5 max-w-xl leading-7 text-gray-400">
                      {community.description}
                    </p>

                    <p className="mt-7 text-sm text-gray-600">__ members</p>
                  </div>

                  <span
                    className={`text-2xl transition duration-300 group-hover:translate-x-1 ${community.accent}`}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-5 text-xs text-gray-600">
            Member totals will appear as people join each community.
          </p>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:py-32"
      >
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-400">
            How it works
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl">
            Becoming better is easier when you stop doing it alone.
          </h2>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[34px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative bg-[#080808] p-8 transition hover:bg-white/[0.035] lg:min-h-[320px] lg:p-9"
            >
              <div className="absolute bottom-0 left-0 h-px w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />

              <p className="text-sm font-bold text-emerald-400">
                {step.number}
              </p>

              <h3 className="mt-14 text-2xl font-bold tracking-tight">
                {step.title}
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
                Reputation with meaning
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-[1.03] tracking-[-0.055em] sm:text-5xl">
                Earn recognition by helping people move forward.
              </h2>

              <p className="mt-7 text-lg leading-8 text-gray-400">
                Your tier reflects appreciation for useful posts, thoughtful
                replies, practical advice, and genuine encouragement.
              </p>

              <div className="mt-9 rounded-[28px] border border-white/10 bg-black/20 p-6">
                <p className="text-sm text-gray-500">The principle</p>

                <p className="mt-3 text-xl font-semibold leading-8">
                  Status should show how much value you create—not how much
                  attention you attract.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {tiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className={`group rounded-[30px] border p-6 shadow-2xl transition duration-300 hover:-translate-y-1 ${tier.border} ${tier.background} ${tier.glow}`}
                >
                  <div className="flex items-center justify-between gap-5">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold ${tier.badge}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="text-sm text-gray-500">{tier.range}</p>
                  </div>

                  <h3 className={`mt-9 text-2xl font-bold ${tier.title}`}>
                    {tier.name}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:py-32">
        <div className="rounded-[34px] border border-white/10 bg-[#080808] px-7 py-10 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-300">
                What JoinAltr stands for
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Better incentives create a better social platform.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4"
                >
                  <span className="text-xs font-bold text-violet-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="font-semibold">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:pb-32">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[44px] border border-white/10 bg-white/[0.035] px-7 py-16 text-center sm:px-12 lg:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:55px_55px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />

          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-40 right-0 h-[380px] w-[380px] rounded-full bg-violet-400/10 blur-[110px]" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-400">
              Progress over popularity
            </p>

            <h2 className="mx-auto mt-7 max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-7xl">
              Become the person you&apos;ve been trying to be.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Find people who understand your goals, share what you learn, and
              build a reputation based on how you help.
            </p>

            <div className="mt-11 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
              >
                Join the beta
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/communities"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/20 px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.05]"
              >
                Explore communities
              </Link>
            </div>

            <p className="mt-7 text-sm text-gray-600">
              Open private beta. Anyone can join.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}