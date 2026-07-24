export default function FitnessPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <a
          href="/"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          ← Back Home
        </a>

        <div className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Community
          </p>

          <h1 className="mt-5 text-6xl font-bold tracking-tight sm:text-7xl">
            Fitness
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-400">
            Build muscle, lose weight, improve performance, and stay
            accountable alongside thousands of people pursuing the same goals.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-widest text-emerald-400">
              Daily Check-In
            </p>

            <h2 className="mt-5 text-2xl font-semibold">
              Did you train today?
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              Share your workout, track your consistency, and build momentum
              one day at a time.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-widest text-emerald-400">
              Progress Tracking
            </p>

            <h2 className="mt-5 text-2xl font-semibold">
              Measure what matters.
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              Log body weight, strength milestones, habits, and transformation
              photos over time.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-widest text-emerald-400">
              Community Support
            </p>

            <h2 className="mt-5 text-2xl font-semibold">
              Never train alone.
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              Receive encouragement, advice, and accountability from people
              who understand the journey.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Coming Soon
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            Features Planned for Launch
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Workout tracking",
              "Transformation timelines",
              "Fitness challenges",
              "Streak tracking",
              "Community leaderboards",
              "Verified coaches",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold">
            Ready to become more?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Join the waitlist and help shape the future of healthy
            self-improvement.
          </p>

          <a
            href="/waitlist"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </main>
  );
}