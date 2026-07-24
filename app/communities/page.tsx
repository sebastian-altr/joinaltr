const communities = [
  {
    title: "Fitness",
    description:
      "Build strength, improve performance, and stay accountable through consistent action.",
    href: "/communities/fitness",
    label: "Strength & consistency",
    accent: "text-emerald-400",
    border: "hover:border-emerald-400/60",
    glow: "from-emerald-400/15",
  },
  {
    title: "Confidence",
    description:
      "Build self-belief, face discomfort, and become more comfortable expressing who you are.",
    href: "/communities/confidence",
    label: "Growth & self-belief",
    accent: "text-violet-400",
    border: "hover:border-violet-400/60",
    glow: "from-violet-400/15",
  },
  {
    title: "Nutrition",
    description:
      "Create healthier eating habits, discover practical meals, and pursue your goals without chasing perfection.",
    href: "/communities/nutrition",
    label: "Habits & balance",
    accent: "text-orange-300",
    border: "hover:border-orange-300/60",
    glow: "from-orange-300/15",
  },
  {
    title: "Skincare",
    description:
      "Build routines, document progress, and learn from people navigating their own skincare journeys.",
    href: "/communities/skincare",
    label: "Routines & progress",
    accent: "text-rose-300",
    border: "hover:border-rose-300/60",
    glow: "from-rose-300/15",
  },
  
  
];

export default function CommunitiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] px-6 py-20 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <a
          href="/"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          ← Back Home
        </a>

        <section className="relative mt-12">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl" />
          <div className="absolute -right-40 top-32 h-96 w-96 rounded-full bg-violet-400/5 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Communities
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
              Find the community that moves you forward.
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-400">
              Every transformation looks different. Explore the core
              communities of JoinAltr and connect with people pursuing goals
              that matter to them.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          {communities.map((community, index) => (
            <a
              key={community.title}
              href={community.href}
              className={`group relative min-h-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${community.border}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${community.glow} via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100`}
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-6">
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.2em] ${community.accent}`}
                  >
                    {community.label}
                  </p>

                  <span className="text-sm text-gray-600">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="mt-12 text-4xl font-semibold tracking-tight sm:text-5xl">
                  {community.title}
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-gray-400">
                  {community.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-10">
                  <p className={`font-semibold ${community.accent}`}>
                    Explore Community
                  </p>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                    →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </section>

        <section className="mt-24 rounded-[36px] border border-white/10 bg-white/[0.03] px-8 py-14 text-center sm:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            More communities coming
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            JoinAltr will grow around the goals its members care about most.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Join early, explore the first communities, and help shape what gets
            built next.
          </p>

          <a
            href="/waitlist"
            className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
          >
            Join the Waitlist
          </a>
        </section>
      </div>
    </main>
  );
}