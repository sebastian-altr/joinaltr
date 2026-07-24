const routineSteps = [
  {
    step: "01",
    title: "Build your routine",
    description:
      "Create a simple morning and evening routine based on your goals, preferences, and current products.",
  },
  {
    step: "02",
    title: "Track your consistency",
    description:
      "Log your routine, record changes, and understand what you are actually using over time.",
  },
  {
    step: "03",
    title: "Reflect on progress",
    description:
      "Document your journey and share lessons with people working toward similar goals.",
  },
];

const plannedFeatures = [
  "Routine builder",
  "Progress journals",
  "Product discussions",
  "Daily check-ins",
  "Ingredient guides",
  "Community recommendations",
];

export default function SkincarePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:px-10">
        <a
          href="/communities"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          Back to Communities
        </a>

        <section className="relative mt-12 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />
          <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-pink-400/10 blur-3xl" />

          <div className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">
                Skincare Community
              </p>

              <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
                Better routines.
                <br />
                Real progress.
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 text-gray-400">
                A community for building consistent skincare habits, learning
                from shared experiences, and navigating the process without
                doing it alone.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/waitlist"
                  className="rounded-full bg-white px-8 py-4 text-center font-semibold text-black transition hover:bg-gray-200"
                >
                  Join the Waitlist
                </a>

                <a
                  href="#routine"
                  className="rounded-full border border-white/10 px-8 py-4 text-center font-semibold transition hover:border-white/40"
                >
                  Explore the Community
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-[32px] border border-rose-300/20 bg-rose-300/10 p-7 shadow-2xl shadow-rose-950/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-200">
                      Evening routine
                    </p>

                    <p className="mt-2 text-sm text-gray-400">
                      Tuesday check-in
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-black">
                    3
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {["Cleanse", "Treat", "Moisturize"].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-300 text-xs font-bold text-black">
                          ✓
                        </div>

                        <p className="font-medium">{item}</p>
                      </div>

                      <p className="text-sm text-gray-500">
                        Step {index + 1}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-rose-200">Reflection</p>

                  <p className="mt-3 leading-7 text-gray-300">
                    My skin felt less dry today. Keeping the routine simple has
                    made it much easier to stay consistent.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 shadow-xl sm:block">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Current streak
                </p>

                <p className="mt-2 text-2xl font-bold">12 days</p>
              </div>
            </div>
          </div>
        </section>

        <section id="routine" className="mt-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">
                Your routine
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                Keep it simple enough to keep going.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                Skincare can become overwhelming quickly. JoinAltr is designed
                to help members focus on consistency, reflection, and practical
                conversations.
              </p>
            </div>

            <div className="space-y-4">
              {routineSteps.map((item) => (
                <div
                  key={item.step}
                  className="group grid gap-5 rounded-[28px] border border-white/10 bg-white/[0.03] p-7 transition hover:border-rose-300/30 hover:bg-rose-300/[0.05] sm:grid-cols-[60px_1fr]"
                >
                  <p className="text-sm font-semibold text-rose-300">
                    {item.step}
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>

                    <p className="mt-3 max-w-2xl leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-28 border-y border-white/10 py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">
                Community conversations
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
                Learn from journeys that are still in progress.
              </h2>
            </div>

            <p className="max-w-md text-lg leading-8 text-gray-400">
              Honest discussions about routines, setbacks, products, habits,
              and what members learn along the way.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm font-semibold text-rose-300">
                Routine feedback
              </p>

              <h3 className="mt-6 text-2xl font-semibold">
                How do you keep your routine manageable?
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Share what you use, how often you use it, and where you are
                struggling with consistency.
              </p>

              <p className="mt-8 text-sm text-gray-500">24 responses</p>
            </article>

            <article className="rounded-[28px] border border-rose-300/25 bg-rose-300/10 p-7 lg:-translate-y-6">
              <p className="text-sm font-semibold text-rose-200">
                Weekly reflection
              </p>

              <h3 className="mt-6 text-2xl font-semibold">
                What changed after simplifying your routine?
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                Reflect on what became easier, what you stopped using, and what
                you want to continue.
              </p>

              <p className="mt-8 text-sm text-rose-200/60">41 responses</p>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm font-semibold text-rose-300">
                Product discussion
              </p>

              <h3 className="mt-6 text-2xl font-semibold">
                Which product has earned a permanent place?
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Discuss personal experiences and why a product fits your
                routine, preferences, or lifestyle.
              </p>

              <p className="mt-8 text-sm text-gray-500">36 responses</p>
            </article>
          </div>
        </section>

        <section className="mt-28">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">
              Planned for launch
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
              Tools for understanding your own journey.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[32px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {plannedFeatures.map((feature, index) => (
              <div
                key={feature}
                className="min-h-44 bg-[#080808] p-7 transition hover:bg-[#101010]"
              >
                <p className="text-sm font-semibold text-rose-300">
                  0{index + 1}
                </p>

                <p className="mt-10 text-2xl font-semibold">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mt-28 overflow-hidden rounded-[40px] border border-rose-300/20 bg-rose-300/10 px-8 py-16 text-center sm:px-14">
          <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-rose-300/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-200">
              Join early
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
              Build a routine you can actually stick with.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Join the waitlist and help shape a skincare community centered on
              consistency, shared learning, and honest progress.
            </p>

            <a
              href="/waitlist"
              className="mt-9 inline-block rounded-full bg-white px-9 py-4 font-semibold text-black transition hover:bg-gray-200"
            >
              Join the Waitlist
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}