import Link from "next/link";

const communities = [
  {
    name: "Fitness",
    description:
      "Share workouts, build better routines, and stay accountable with people working toward similar goals.",
    accent: "text-emerald-300",
    background: "from-emerald-400/20 to-emerald-400/[0.02]",
    border: "border-emerald-400/20",
  },
  {
    name: "Confidence",
    description:
      "Practice taking action, speaking up, and becoming more comfortable being seen.",
    accent: "text-violet-300",
    background: "from-violet-400/20 to-violet-400/[0.02]",
    border: "border-violet-400/20",
  },
  {
    name: "Nutrition",
    description:
      "Build healthier eating habits through practical advice, shared experiences, and support.",
    accent: "text-orange-300",
    background: "from-orange-300/20 to-orange-300/[0.02]",
    border: "border-orange-300/20",
  },
  {
    name: "Skincare",
    description:
      "Discuss routines, products, setbacks, and progress with people who understand the process.",
    accent: "text-sky-300",
    background: "from-sky-300/20 to-sky-300/[0.02]",
    border: "border-sky-300/20",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Share what you are working on, what you have learned, and where you want to improve.",
  },
  {
    number: "02",
    title: "Join relevant communities",
    description:
      "Find people dealing with similar goals, questions, setbacks, and experiences.",
  },
  {
    number: "03",
    title: "Post and participate",
    description:
      "Ask questions, share progress, offer useful advice, and take part in real discussions.",
  },
  {
    number: "04",
    title: "Build a meaningful reputation",
    description:
      "Earn appreciation when other members find your posts, replies, and encouragement helpful.",
  },
];

const profileSignals = [
  {
    label: "Helpful replies",
    value: "__",
  },
  {
    label: "Communities joined",
    value: "__",
  },
  {
    label: "Days active",
    value: "__",
  },
];

const tiers = [
  {
    name: "New Member",
    range: "0–24 👍",
    border: "border-white/10",
    background: "bg-white/[0.03]",
    badge: "border-white/10 bg-white/[0.06] text-gray-300",
    glow: "",
  },
  {
    name: "Bronze",
    range: "25–99 👍",
    border: "border-orange-700/30",
    background: "bg-orange-900/10",
    badge: "border-orange-700/30 bg-orange-700/15 text-orange-300",
    glow: "shadow-orange-950/20",
  },
  {
    name: "Silver",
    range: "100–249 👍",
    border: "border-slate-300/20",
    background: "bg-slate-300/[0.06]",
    badge: "border-slate-300/20 bg-slate-300/10 text-slate-200",
    glow: "shadow-slate-950/20",
  },
  {
    name: "Gold",
    range: "250–499 👍",
    border: "border-yellow-400/25",
    background: "bg-yellow-400/[0.07]",
    badge: "border-yellow-400/25 bg-yellow-400/10 text-yellow-200",
    glow: "shadow-yellow-950/20",
  },
  {
    name: "Platinum",
    range: "500–999 👍",
    border: "border-cyan-300/25",
    background: "bg-cyan-300/[0.07]",
    badge: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
    glow: "shadow-cyan-950/20",
  },
  {
    name: "Legend",
    range: "1000+ 👍",
    border: "border-violet-400/30",
    background:
      "bg-gradient-to-br from-violet-400/10 via-fuchsia-400/[0.06] to-amber-300/[0.06]",
    badge:
      "border-violet-400/30 bg-violet-400/10 text-violet-200",
    glow: "shadow-violet-950/30",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <section className="relative">
        <div className="absolute left-1/2 top-0 h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-emerald-400/[0.07] blur-[150px]" />

        <div className="absolute -right-52 top-80 h-[500px] w-[500px] rounded-full bg-violet-400/[0.08] blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 sm:px-10 lg:grid-cols-[1fr_0.88fr] lg:items-center lg:pb-32 lg:pt-28">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              A social platform built around becoming better
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[0.97] tracking-[-0.06em] sm:text-6xl lg:text-[80px]">
              Become the person you&apos;ve been trying to become.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              Join communities where people share honest experiences, helpful
              advice, real progress, and support that makes it easier to move
              forward.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-full bg-white px-8 py-4 text-center font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-200"
              >
                Create your profile
              </Link>

              <Link
                href="/communities"
                className="rounded-full border border-white/10 px-8 py-4 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.04]"
              >
                Explore communities
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-500">
              <span>No follower counts</span>
              <span>No popularity contests</span>
              <span>Helpful contributions matter</span>
            </div>
          </div>

          <div className="relative lg:pl-6">
            <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-emerald-400/10 to-violet-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0a0a0a] p-5 shadow-2xl shadow-black/50 sm:p-7">
              <div className="absolute right-6 top-6 z-10 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                Coming soon
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex items-center gap-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-emerald-400/20 to-violet-400/20 text-2xl font-bold">
                    JA
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3 pr-20">
                      <h2 className="text-2xl font-bold">
                        Community Member
                      </h2>

                      <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gray-300">
                        New Member
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                      @yourusername
                    </p>

                    <p className="mt-3 font-semibold text-gray-300">__ 👍</p>
                  </div>
                </div>

                <p className="mt-7 leading-7 text-gray-300">
                  Working on building healthier habits, becoming more
                  confident, and sharing what I learn along the way.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  {profileSignals.map((signal) => (
                    <div
                      key={signal.label}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="text-2xl font-bold">{signal.value}</p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {signal.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
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

                <div className="mt-7 rounded-[22px] border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
                  <p className="text-sm font-semibold text-emerald-300">
                    Recent contribution
                  </p>

                  <p className="mt-3 leading-7 text-gray-300">
                    Shared a practical answer that helped another member take
                    their next step.
                  </p>

                  <p className="mt-4 text-sm text-gray-500">
                    __ members found this helpful
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
              A different kind of social platform
            </p>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              People aren&apos;t looking for more followers.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              They are looking for useful answers, people who understand what
              they are going through, and support that helps them take action.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[28px] border border-white/10 bg-[#080808] p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-gray-400">Traditional platforms</p>

                <p className="text-sm text-gray-600">Measure attention</p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {["Followers", "Views", "Likes"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-5 text-center text-sm text-gray-400 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-emerald-400/20 bg-emerald-400/[0.06] p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="font-semibold text-white">JoinAltr</p>

                <p className="text-sm text-emerald-300">
                  Measures contribution
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {["Helpful replies", "People supported", "Useful posts"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-emerald-400/20 bg-black/20 px-3 py-5 text-center text-sm font-semibold text-emerald-100"
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

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              Find people who understand
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Communities for the person you&apos;ve been trying to become.
            </h2>
          </div>

          <Link
            href="/communities"
            className="font-semibold text-gray-400 transition hover:text-white"
          >
            Explore all communities →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {communities.map((community) => (
            <Link
              key={community.name}
              href={`/communities/${community.name.toLowerCase()}`}
              className={`group rounded-[32px] border bg-gradient-to-br p-7 transition duration-300 hover:-translate-y-1 sm:p-9 ${community.border} ${community.background}`}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.18em] ${community.accent}`}
                  >
                    __ members
                  </p>

                  <h3 className="mt-5 text-3xl font-bold tracking-tight">
                    {community.name}
                  </h3>

                  <p className="mt-4 max-w-lg leading-7 text-gray-400">
                    {community.description}
                  </p>
                </div>

                <span
                  className={`text-2xl transition group-hover:translate-x-1 ${community.accent}`}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
              How it works
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Becoming better is easier when you stop doing it alone.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[32px] border border-white/10 bg-white/10 lg:grid-cols-4">
            {journeySteps.map((step) => (
              <div key={step.number} className="bg-[#080808] p-8 lg:p-9">
                <p className="text-sm font-semibold text-emerald-400">
                  {step.number}
                </p>

                <h3 className="mt-10 text-2xl font-bold">{step.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-yellow-200">
            Reputation with meaning
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Earn recognition by helping people move forward.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Your tier is based on the appreciation you receive for useful
            posts, thoughtful replies, practical advice, and genuine support.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-[28px] border p-6 shadow-2xl ${tier.border} ${tier.background} ${tier.glow}`}
            >
              <div className="flex items-center justify-between gap-5">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold ${tier.badge}`}
                >
                  {index + 1}
                </div>

                <p className="text-sm text-gray-500">{tier.range}</p>
              </div>

              <h3 className="mt-8 text-2xl font-bold">{tier.name}</h3>

              <p className="mt-3 leading-7 text-gray-400">
                Earned through positive contributions that other members find
                helpful.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] px-7 py-16 text-center sm:px-12 lg:py-24">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[100px]" />

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-400/10 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Progress over popularity
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Start becoming the person you&apos;ve been trying to become.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              Find people who understand your goals, share what you learn, and
              build a reputation based on how you help.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-200"
              >
                Create your profile
              </Link>

              <Link
                href="/communities"
                className="rounded-full border border-white/10 px-8 py-4 font-semibold transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.04]"
              >
                Explore communities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}