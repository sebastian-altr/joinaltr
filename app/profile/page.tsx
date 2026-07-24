const communities = [
  {
    name: "Fitness",
    description: "Building strength and staying consistent.",
    href: "/communities/fitness",
    accent: "text-emerald-400",
    background: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    name: "Nutrition",
    description: "Creating healthier, sustainable eating habits.",
    href: "/communities/nutrition",
    accent: "text-orange-300",
    background: "bg-orange-300/10",
    border: "border-orange-300/20",
  },
  {
    name: "Confidence",
    description: "Becoming more comfortable taking action.",
    href: "/communities/confidence",
    accent: "text-violet-400",
    background: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
];

const milestones = [
  {
    date: "July 2026",
    title: "Joined JoinAltr",
    description: "Started building a more consistent version of myself.",
  },
  {
    date: "July 2026",
    title: "Completed a 7-day streak",
    description: "Checked in every day for one full week.",
  },
  {
    date: "August 2026",
    title: "First community milestone",
    description: "Completed a personal fitness goal.",
  },
];

const recentActivity = [
  {
    type: "Daily check-in",
    title: "Completed today’s fitness check-in",
    detail: "Upper-body workout and 20 minutes of cardio.",
    time: "Today",
  },
  {
    type: "Goal progress",
    title: "Updated current mission",
    detail: "Build strength while maintaining a sustainable routine.",
    time: "2 days ago",
  },
  {
    type: "Community",
    title: "Joined the Confidence community",
    detail: "Working on speaking up and taking action sooner.",
    time: "5 days ago",
  },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] px-7 py-10 sm:px-12 lg:px-16 lg:py-14">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-emerald-400/20 to-violet-400/20 text-4xl font-bold">
                SE
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Sebastian
                  </h1>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                    Builder
                  </span>
                </div>

                <p className="mt-2 text-gray-500">@sebastian</p>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                  Building strength, confidence, and better habits one day at a
                  time.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-400">
                  <span>Member since July 2026</span>
                  <span className="text-gray-700">•</span>
                  <span>New York, United States</span>
                </div>
              </div>
            </div>

            <a
              href="/profile/edit"
              className="rounded-full border border-white/10 px-7 py-3 text-center font-semibold transition hover:border-white/30 hover:bg-white/[0.05]"
            >
              Edit Profile
            </a>
          </div>
        </section>

        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-500">Current streak</p>
            <p className="mt-3 text-4xl font-bold">12</p>
            <p className="mt-2 text-sm text-emerald-400">days in a row</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-500">Days active</p>
            <p className="mt-3 text-4xl font-bold">37</p>
            <p className="mt-2 text-sm text-gray-400">since joining</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-500">Milestones</p>
            <p className="mt-3 text-4xl font-bold">6</p>
            <p className="mt-2 text-sm text-gray-400">completed</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-500">Communities</p>
            <p className="mt-3 text-4xl font-bold">3</p>
            <p className="mt-2 text-sm text-gray-400">currently joined</p>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                Current mission
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Build a stronger body and a more consistent life.
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-gray-400">
                My focus is building strength, improving nutrition, and getting
                more comfortable taking action before I feel completely ready.
              </p>

              <div className="mt-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Mission progress</span>
                  <span className="font-semibold text-emerald-400">64%</span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[64%] rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                    Communities
                  </p>

                  <h2 className="mt-4 text-3xl font-bold tracking-tight">
                    Where I am growing
                  </h2>
                </div>

                <a
                  href="/communities"
                  className="hidden text-sm font-semibold text-gray-400 transition hover:text-white sm:block"
                >
                  Explore all →
                </a>
              </div>

              <div className="mt-8 grid gap-4">
                {communities.map((community) => (
                  <a
                    key={community.name}
                    href={community.href}
                    className={`group rounded-[24px] border p-6 transition hover:-translate-y-0.5 ${community.border} ${community.background}`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-2xl font-semibold">
                          {community.name}
                        </h3>

                        <p className="mt-3 leading-7 text-gray-400">
                          {community.description}
                        </p>
                      </div>

                      <span
                        className={`text-xl transition group-hover:translate-x-1 ${community.accent}`}
                      >
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                Recent activity
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Showing up consistently
              </h2>

              <div className="mt-8 divide-y divide-white/10">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.title}
                    className="grid gap-4 py-6 sm:grid-cols-[140px_1fr_auto]"
                  >
                    <p className="text-sm font-semibold text-emerald-400">
                      {activity.type}
                    </p>

                    <div>
                      <h3 className="font-semibold">{activity.title}</h3>
                      <p className="mt-2 leading-7 text-gray-400">
                        {activity.detail}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[32px] border border-violet-400/20 bg-violet-400/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
                Profile identity
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight">
                Level 4 Builder
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Earned by consistently checking in, completing milestones, and
                contributing to communities.
              </p>

              <div className="mt-7">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Next level</span>
                  <span className="font-semibold text-violet-300">
                    320 / 500 XP
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/30">
                  <div className="h-full w-[64%] rounded-full bg-violet-400" />
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                Milestone timeline
              </p>

              <div className="mt-8 space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={`${milestone.date}-${milestone.title}`}
                    className="relative pl-8"
                  >
                    {index !== milestones.length - 1 && (
                      <div className="absolute left-[7px] top-5 h-[calc(100%+32px)] w-px bg-white/10" />
                    )}

                    <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-emerald-400/40 bg-emerald-400" />

                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
                      {milestone.date}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">
                      {milestone.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
                Profile principles
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Progress over popularity",
                  "Consistency over perfection",
                  "Contribution over attention",
                ].map((principle) => (
                  <div
                    key={principle}
                    className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                  >
                    <p className="font-medium">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}