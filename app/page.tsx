const pillars = [
  "Fitness",
  "Skincare",
  "Nutrition",
  "Sleep",
  "Style",
  "Confidence",
];

const features = [
  {
    number: "01",
    title: "Find your people",
    description:
      "Join communities built around the goals that matter to you—from fitness and skincare to style, sleep, and confidence.",
  },
  {
    number: "02",
    title: "Track real progress",
    description:
      "Document habits, routines, milestones, photos, and transformations without chasing likes or fake perfection.",
  },
  {
    number: "03",
    title: "Improve together",
    description:
      "Get practical advice, join challenges, and stay accountable alongside people who genuinely want to see you succeed.",
  },
];

const communities = [
  {
    initials: "BM",
    title: "Build Muscle",
    members: "0 members",
  },
  {
    initials: "CS",
    title: "Clear Skin",
    members: "0 members",
  },
  {
    initials: "HH",
    title: "Healthy Habits",
    members: "0 members",
  },
  {
    initials: "BS",
    title: "Better Style",
    members: "0 members",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <section className="relative min-h-screen border-b border-white/10">
      <div className="relative z-20 border-b border-emerald-400/20 bg-emerald-400/10 py-3 text-center">
  <p className="text-sm font-medium text-emerald-300">
    JoinAltr is currently in private beta. Join the waitlist to get early
    access.
  </p>
</div>
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[180px]" />
        <div className="absolute right-[-220px] top-[260px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-10">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-black">
              A
            </div>
            <span className="text-xl font-bold tracking-tight">JoinAltr</span>
          </a>

         <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
  <a href="/" className="transition hover:text-white">
    Home
  </a>

  <a href="/about" className="transition hover:text-white">
    About
  </a>

  <a href="/communities" className="transition hover:text-white">
    Communities
  </a>

  <a href="/contact" className="transition hover:text-white">
    Contact
  </a>
</div>

          <a
            href="/waitlist"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            Join the Waitlist
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-16 px-6 py-16 sm:px-10 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              The home of healthy self-improvement
            </div>

            <h1 className="max-w-4xl text-6xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-8xl">
              Become
              <br />
              More.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
              Join a community of people becoming healthier, stronger, and more
              confident through real progress, accountability, and support.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/waitlist"
                className="rounded-full bg-white px-8 py-4 text-center font-semibold text-black transition hover:bg-gray-200"
              >
                Join the Waitlist
              </a>

              <a
                href="#how"
                className="rounded-full border border-white/10 px-8 py-4 text-center font-semibold transition hover:border-white/40"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                    Community activity
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Improve alongside others.
                  </h2>
                </div>

                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Live
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {communities.map((community) => (
                  <div
                    key={community.title}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold">
                        {community.initials}
                      </div>

                      <div>
                        <h3 className="font-semibold">{community.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {community.members}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm text-gray-500">View</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                  This week
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-2xl font-bold">8.4K</p>
                    <p className="mt-1 text-xs text-gray-400">Check-ins</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold">2.1K</p>
                    <p className="mt-1 text-xs text-gray-400">Milestones</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold">642</p>
                    <p className="mt-1 text-xs text-gray-400">Challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how"
        className="border-b border-white/10 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            How it works
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
              Real progress starts with the right people around you.
            </h2>

            <p className="max-w-md text-lg leading-8 text-gray-400">
              JoinAltr gives you the structure, community, and accountability
              needed to keep improving long after motivation fades.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <p className="text-sm font-semibold text-emerald-400">
                  {feature.number}
                </p>

                <h3 className="mt-8 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="communities"
        className="border-b border-white/10 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Built around your goals
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                One platform. Every part of becoming better.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                Whether you are building muscle, improving your skin, fixing
                your sleep, upgrading your style, or rebuilding confidence,
                you will find people pursuing the same goal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-sm text-gray-500">
                    0{index + 1}
                  </p>
                  <p className="mt-8 text-xl font-semibold">{pillar}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="mission"
        className="border-b border-white/10 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Our mission
          </p>

          <blockquote className="mt-8 max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Help people become healthier, stronger, and more confident—one real
            conversation at a time.
          </blockquote>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            No follower-count obsession. No fake perfection. No toxic
            comparison. Just real people helping real people improve their
            lives.
          </p>
        </div>
      </section>

      <section id="waitlist" className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] px-8 py-16 text-center sm:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Join early
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Be part of something built around real growth.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Join the early community and help shape the internet&apos;s home for
            healthy self-improvement.
          </p>

          <a
            href="/waitlist"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
          >
            Join the Waitlist
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
  <div className="mx-auto max-w-6xl text-center">
    <h3 className="text-lg font-semibold text-white">
      JoinAltr
    </h3>

    <p className="mt-3 text-gray-400">
      The internet&apos;s home for healthy self-improvement.
    </p>

    <a
      href="mailto:hello@joinaltr.com"
      className="mt-4 block text-gray-400 transition hover:text-white"
    >
      hello@joinaltr.com
    </a>

    <p className="mt-6 text-sm text-gray-500">
      © 2026 JoinAltr. All rights reserved.
    </p>
  </div>
</footer>
    </main>
  );
}