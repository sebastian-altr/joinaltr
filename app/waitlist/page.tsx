import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "Ask real questions",
    description:
      "Share something you are genuinely trying to improve and hear from people with relevant experience.",
  },
  {
    number: "02",
    title: "Try practical answers",
    description:
      "Compare lived experiences instead of relying only on the advice that received the most attention.",
  },
  {
    number: "03",
    title: "Return with an outcome",
    description:
      "Come back after trying the advice and identify what actually helped.",
  },
];

const communities = [
  {
    name: "Fitness",
    description: "Training, consistency, strength, and recovery.",
    style: "border-violet-400/20 bg-violet-400/10 text-violet-300",
  },
  {
    name: "Nutrition",
    description: "Sustainable eating habits and practical routines.",
    style: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  },
  {
    name: "Confidence",
    description: "Social confidence, communication, and self-belief.",
    style: "border-sky-400/20 bg-sky-400/10 text-sky-300",
  },
  {
    name: "Skincare",
    description: "Acne, routines, products, and long-term consistency.",
    style: "border-rose-400/20 bg-rose-400/10 text-rose-300",
  },
];

export default function WaitlistPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Hero */}
      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[600px] w-[850px] -translate-x-1/2 rounded-full bg-violet-500/12 blur-[160px]" />
          <div className="absolute -right-24 top-52 h-[360px] w-[360px] rounded-full bg-emerald-500/[0.08] blur-[120px]" />
          <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-fuchsia-500/[0.06] blur-[110px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Open Beta
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Join a community built around{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                what actually worked.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              Ask real questions, learn from people who have been there, and
              help the next person understand which answers produced a real
              outcome.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Create Your Account
              </Link>

              <Link
                href="/communities"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                Explore Communities
              </Link>
            </div>

            <p className="mt-5 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-gray-300 transition hover:text-white"
              >
                Log in
              </Link>
            </p>
          </div>

          {/* Signup preview */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-violet-500/10 via-transparent to-emerald-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#0b0b0d]/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                    JoinAltr
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Your experience can help someone.
                  </h2>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-lg text-emerald-300">
                  ✓
                </span>
              </div>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-gray-500">
                    Ask
                  </p>

                  <p className="mt-3 font-medium text-gray-200">
                    How did you finally make your routine sustainable?
                  </p>
                </div>

                <div className="ml-5 rounded-2xl border border-violet-400/20 bg-violet-400/[0.06] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-violet-300">
                    Try
                  </p>

                  <p className="mt-3 leading-7 text-gray-300">
                    “I made the routine smaller until I could repeat it
                    consistently, then added more over time.”
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-xs font-bold text-emerald-300">
                      ✓
                    </span>

                    <p className="text-xs font-semibold uppercase tracking-[0.17em] text-emerald-300">
                      Mark what worked
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    The answer becomes a more meaningful starting point for the
                    next person.
                  </p>
                </div>
              </div>

              <Link
                href="/signup"
                className="mt-7 flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Join Open Beta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              Why join early
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Help shape a better way to find useful advice.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              JoinAltr is in its earliest stage. The people who join now will
              help determine how communities, profiles, reputation, and
              resolution signals develop.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] sm:p-8"
              >
                <span className="text-sm font-semibold text-violet-300">
                  {benefit.number}
                </span>

                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Start where you are
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Join conversations centered on real goals.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-gray-400 lg:justify-self-end">
              You do not need to be an expert. Share what you have experienced,
              ask what you are struggling with, and help the community learn
              from the outcome.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {communities.map((community) => (
              <Link
                key={community.name}
                href={`/communities/${community.name.toLowerCase()}`}
                className="group flex items-center gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-sm font-bold ${community.style}`}
                >
                  {community.name[0]}
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-white">
                    {community.name}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {community.description}
                  </p>
                </div>

                <span className="ml-auto text-lg text-gray-600 transition group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product promise */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-emerald-400/20 bg-emerald-400/[0.045] px-7 py-14 sm:px-10 sm:py-16 lg:px-14">
            <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[110px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-500/[0.08] blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  Reputation with meaning
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white">
                  Helpful should mean more than popular.
                </h2>

                <p className="mt-6 max-w-xl leading-7 text-gray-400">
                  JoinAltr is being designed so credibility grows through
                  answers that people return to and identify as what genuinely
                  helped.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      A few days later
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      Did anything help?
                    </h3>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-gray-300">
                    ?
                  </span>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white px-5 py-4 text-center text-sm font-semibold text-black">
                    Yes, something helped
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-sm font-semibold text-gray-300">
                    Not yet
                  </div>
                </div>

                <p className="mt-5 text-xs leading-5 text-gray-600">
                  Only confirmed outcomes build resolution-based reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              JoinAltr Open Beta
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Become one of the people who helps build it from the beginning.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Create your profile, explore the first communities, and help
              shape a platform designed to remember what actually worked.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Create Your Account
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                Learn About JoinAltr
              </Link>
            </div>

            <p className="mt-5 text-xs text-gray-600">
              Open Beta · Early features remain under development
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}