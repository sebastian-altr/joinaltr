const plannedFeatures = [
  "Workout tracking",
  "Progress photos",
  "Strength milestones",
  "Daily check-ins",
  "Fitness challenges",
  "Accountability groups",
];

export default function FitnessPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <a
          href="/communities"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          Back to Communities
        </a>

        <section className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Fitness Community
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
              Build strength.
              <br />
              Stay consistent.
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-400">
              A community for people building muscle, losing weight, improving
              performance, and creating sustainable fitness habits.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/waitlist"
                className="rounded-full bg-white px-8 py-4 text-center font-semibold text-black transition hover:bg-gray-200"
              >
                Join the Waitlist
              </a>

              <a
                href="#features"
                className="rounded-full border border-white/10 px-8 py-4 text-center font-semibold transition hover:border-white/40"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Community Preview
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-emerald-400">Daily Check-In</p>
                <h2 className="mt-3 text-xl font-semibold">
                  What did you train today?
                </h2>
                <p className="mt-3 leading-7 text-gray-400">
                  Log your workout, share progress, and keep your streak alive.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-emerald-400">Milestone</p>
                <h2 className="mt-3 text-xl font-semibold">
                  New personal best.
                </h2>
                <p className="mt-3 leading-7 text-gray-400">
                  Celebrate measurable progress with people who understand the
                  work behind it.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-emerald-400">Accountability</p>
                <h2 className="mt-3 text-xl font-semibold">
                  Consistency over motivation.
                </h2>
                <p className="mt-3 leading-7 text-gray-400">
                  Build habits alongside people committed to showing up.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mt-24 border-t border-white/10 pt-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Planned for launch
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Everything you need to keep moving forward.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {plannedFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xl font-semibold">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-[36px] border border-emerald-400/20 bg-emerald-400/10 px-8 py-14 text-center sm:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Join early
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Help shape the future of the Fitness community.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Join the waitlist and be among the first members when JoinAltr
            opens.
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