const communities = [
  {
    name: "Fitness",
    label: "Build strength",
    description:
      "Training, consistency, recovery, and routines that people actually maintained.",
    href: "/communities",
    style:
      "border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.10] to-transparent",
    labelStyle: "text-emerald-300",
  },
  {
    name: "Confidence",
    label: "Take action",
    description:
      "Overthinking, social confidence, difficult moments, and what helped people move forward.",
    href: "/communities",
    style:
      "border-violet-400/15 bg-gradient-to-br from-violet-400/[0.10] to-transparent",
    labelStyle: "text-violet-300",
  },
  {
    name: "Nutrition",
    label: "Eat better",
    description:
      "Realistic approaches to eating well from people who tested them in everyday life.",
    href: "/communities",
    style:
      "border-amber-400/15 bg-gradient-to-br from-amber-400/[0.10] to-transparent",
    labelStyle: "text-amber-300",
  },
  {
    name: "Skincare",
    label: "Find what works",
    description:
      "Routines, products, setbacks, and approaches that produced meaningful results.",
    href: "/communities",
    style:
      "border-sky-400/15 bg-gradient-to-br from-sky-400/[0.10] to-transparent",
    labelStyle: "text-sky-300",
  },
];

const differences = [
  {
    number: "01",
    title: "Advice you can come back to",
    description:
      "Answers stay connected to the original question, making it easy to return after you have tried them.",
  },
  {
    number: "02",
    title: "A follow-up that matters",
    description:
      "JoinAltr asks whether anything helped instead of assuming the most popular answer was the best one.",
  },
  {
    number: "03",
    title: "Reputation based on impact",
    description:
      "Members earn trust when people return and say their guidance genuinely worked.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      {/* Hero */}
      <section className="relative border-b border-white/[0.07]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[12%] top-20 h-[520px] w-[520px] rounded-full bg-emerald-500/[0.07] blur-[150px]" />
          <div className="absolute right-[4%] top-28 h-[560px] w-[560px] rounded-full bg-violet-500/[0.08] blur-[170px]" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(to bottom, black, transparent 88%)",
          }}
        />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl gap-16 px-6 py-20 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-24">
          {/* Hero copy */}
          <div className="max-w-2xl">
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Real answers.
              <br />

              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                Proven by follow-up.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400 sm:text-xl">
              Ask people who have been there. Try what they suggest. Return and
              mark what actually worked.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/signup"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-gray-200"
              >
                Join the beta
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/feed"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.035] px-7 py-4 font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.07]"
              >
                Explore the feed
              </a>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-white">Ask honestly</p>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Share the real problem.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Try real advice
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Learn from experience.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Confirm the result
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Mark what worked.
                </p>
              </div>
            </div>
          </div>

          {/* Product preview */}
          <div className="relative mx-auto w-full max-w-[610px]">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-violet-500/[0.10] via-transparent to-emerald-500/[0.10] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0b0b]/95 shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>

                <span className="text-xs text-gray-600">
                  JoinAltr community
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/10 text-sm font-semibold text-violet-200">
                    M
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Maya asked
                    </p>

                    <p className="text-xs text-gray-500">
                      Skincare · 3 days ago
                    </p>
                  </div>
                </div>

                <h2 className="mt-6 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                  What helped you stop constantly changing your skincare
                  routine?
                </h2>

                <p className="mt-4 leading-7 text-gray-400">
                  I keep switching products whenever my skin gets worse. I want
                  to know what helped other people stay consistent long enough
                  to see results.
                </p>

                <div className="mt-7 space-y-3">
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-medium text-gray-300">
                        Alex answered
                      </p>

                      <span className="text-xs text-gray-600">
                        12 people related
                      </span>
                    </div>

                    <p className="mt-3 leading-7 text-gray-400">
                      “I stopped adding new products and kept the same basic
                      routine for six weeks.”
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.075] p-5 shadow-lg shadow-emerald-950/20">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-emerald-200">
                        Answer marked as what worked
                      </p>

                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                        Confirmed
                      </span>
                    </div>

                    <p className="mt-3 leading-7 text-gray-300">
                      “Keeping the routine simple made it easier to understand
                      what was helping instead of starting over every week.”
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-300">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15">
                        ✓
                      </span>

                      Marked as what worked
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-center text-xs text-gray-600">
                  Advice becomes more useful when someone returns with the
                  result.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="relative px-6 py-24 sm:px-10 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.04] blur-[170px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
                Built differently
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                The best answer is not always the one that gets attention.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-gray-400 lg:justify-self-end">
              JoinAltr gives advice time to prove itself. People can try an
              answer, return later, and identify what genuinely helped.
            </p>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] lg:grid-cols-3">
            {differences.map((item, index) => (
              <article
                key={item.number}
                className={`group relative overflow-hidden p-8 transition-colors duration-300 hover:bg-white/[0.025] sm:p-10 ${
                  index !== differences.length - 1
                    ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-emerald-500 via-emerald-300 to-teal-300 transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <span className="text-sm font-semibold text-emerald-300">
                  {item.number}
                </span>

                <h3 className="mt-10 text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-emerald-100">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Simple loop */}
      <section className="border-y border-white/[0.07] bg-white/[0.015] px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              The JoinAltr loop
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Ask. Try. Return. Help the next person.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              A simple process turns personal experience into something useful
              for the whole community.
            </p>
          </div>

          <div className="relative mt-16 grid gap-4 md:grid-cols-4">
            <div className="hidden md:absolute md:left-[12%] md:right-[12%] md:top-8 md:block md:border-t md:border-dashed md:border-white/15" />

            {[
              {
                number: "1",
                title: "Ask",
                text: "Describe what is happening and what you are trying to solve.",
              },
              {
                number: "2",
                title: "Try",
                text: "Learn from people who have faced something similar.",
              },
              {
                number: "3",
                title: "Return",
                text: "Come back after you have had time to test the advice.",
              },
              {
                number: "4",
                title: "Confirm",
                text: "Choose the answer that actually made a difference.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="relative rounded-3xl border border-white/[0.08] bg-[#090a0a] p-7"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] text-sm font-semibold text-emerald-300">
                  {step.number}
                </div>

                <h3 className="mt-7 text-2xl font-semibold">{step.title}</h3>

                <p className="mt-3 leading-7 text-gray-400">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
            >
              See exactly how it works
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="relative px-6 py-24 sm:px-10 sm:py-32">
        <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-emerald-500/[0.04] blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                Find people who have been there
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Learn from experience that resembles your own.
              </h2>
            </div>

            <a
              href="/communities"
              className="inline-flex items-center gap-2 font-semibold text-gray-400 transition hover:text-white"
            >
              Explore all communities
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {communities.map((community) => (
              <a
                key={community.name}
                href={community.href}
                className={`group min-h-[260px] rounded-[2rem] border p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-10 ${community.style}`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.2em] ${community.labelStyle}`}
                    >
                      {community.label}
                    </p>

                    <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                      {community.name}
                    </h3>
                  </div>

                  <span className="text-2xl text-gray-500 transition group-hover:translate-x-1 group-hover:text-white">
                    →
                  </span>
                </div>

                <p className="mt-7 max-w-xl leading-7 text-gray-400">
                  {community.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-20 sm:px-10 sm:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090b0a] px-7 py-20 text-center sm:px-12 sm:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(circle at center, black, transparent 76%)",
            }}
          />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.09] blur-[150px]" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Find out what actually worked
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
              Your experience could become someone else&apos;s answer.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Ask a question, learn from people who have been there, and return
              with what made a real difference.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/signup"
                className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
              >
                Join the beta
              </a>

              <a
                href="/feed"
                className="rounded-full border border-white/15 bg-white/[0.035] px-8 py-4 font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.07]"
              >
                Explore the feed
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}