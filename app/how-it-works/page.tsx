const steps = [
  {
    number: "01",
    title: "Ask a real question",
    description:
      "Share what you are going through and ask people who have experienced something similar.",
  },
  {
    number: "02",
    title: "Learn from real experience",
    description:
      "Read honest answers about what helped, what did not, and what someone learned along the way.",
  },
  {
    number: "03",
    title: "Mark what actually helped",
    description:
      "When an answer helps you, mark it. This gives credit to the person who shared it and helps useful answers rise.",
  },
  {
    number: "04",
    title: "Pass your experience forward",
    description:
      "Share what worked for you so the next person can find a better answer faster.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden px-6 py-20 sm:px-10 sm:py-28">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald-400/[0.05] blur-[130px]" />

        <div className="relative mx-auto max-w-6xl">
          {/* Intro */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                How It Works
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-6xl">
              Ask what worked.
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                Share what helped.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              JoinAltr helps people find useful answers from others who have
              already been through something similar.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-20 space-y-5">
            {steps.map((step) => (
              <article
                key={step.number}
                className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm transition hover:border-white/20 sm:p-9 md:grid-cols-[90px_1fr] md:items-start"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-semibold text-gray-400">
                  {step.number}
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-gray-400">
                    {step.description}
                  </p>

                  {step.number === "03" && (
                    <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-5">
                      <p className="text-sm leading-6 text-gray-300">
                        “Creating a simple evening routine helped me stop
                        checking my phone in bed and sleep more consistently.”
                      </p>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.14em] text-gray-500">
                            Was this useful?
                          </p>

                          <p className="mt-1 text-sm text-gray-400">
                            Let the person know their answer helped.
                          </p>
                        </div>

                        <button
                          type="button"
                          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300/50 hover:bg-emerald-400/15"
                        >
                          <span aria-hidden="true">✓</span>
                          Mark what actually helped
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Closing section */}
          <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.04] px-7 py-12 text-center backdrop-blur-sm sm:px-12 sm:py-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Useful experience should not get lost.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
              Join the community, ask a question, and help make the best answers
              easier for everyone to find.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/signup"
                className="rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-gray-200"
              >
                Join Now
              </a>

              <a
                href="/feed"
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                Explore the Feed
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}