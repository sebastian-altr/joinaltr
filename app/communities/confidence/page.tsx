const confidencePaths = [
  {
    number: "01",
    title: "Social confidence",
    description:
      "Become more comfortable starting conversations, meeting new people, and expressing yourself clearly.",
  },
  {
    number: "02",
    title: "Self-belief",
    description:
      "Challenge negative thought patterns and build trust in your own judgment, abilities, and progress.",
  },
  {
    number: "03",
    title: "Personal growth",
    description:
      "Set meaningful goals, take uncomfortable steps, and become the person you know you can be.",
  },
];

const communityPrompts = [
  "What is one thing you did today that made you proud?",
  "What situation are you currently avoiding?",
  "What would you attempt if you trusted yourself more?",
];

export default function ConfidencePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:px-10">
        <a
          href="/communities"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          Back to Communities
        </a>

        <section className="relative mt-12">
          <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute -left-48 top-72 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <div className="relative max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Confidence Community
            </p>

            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              Become harder
              <br />
              to hold back.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-400">
              A community for people learning to trust themselves, speak with
              conviction, face discomfort, and stop letting fear make their
              decisions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/waitlist"
                className="rounded-full bg-white px-8 py-4 text-center font-semibold text-black transition hover:bg-gray-200"
              >
                Join the Waitlist
              </a>

              <a
                href="#inside"
                className="rounded-full border border-white/10 px-8 py-4 text-center font-semibold transition hover:border-white/40"
              >
                See Inside
              </a>
            </div>
          </div>

          <div className="relative mt-20 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-[32px] border border-violet-400/20 bg-violet-400/10 p-8">
              <p className="text-sm font-semibold text-violet-300">
                Today&apos;s challenge
              </p>

              <h2 className="mt-6 text-3xl font-bold tracking-tight">
                Do one thing before you feel ready.
              </h2>

              <p className="mt-5 leading-7 text-gray-300">
                Send the message. Introduce yourself. Share the idea. Apply for
                the opportunity. Confidence is built through action, not
                waiting.
              </p>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm text-gray-400">Community progress</p>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-violet-400" />
                </div>

                <p className="mt-3 text-sm text-gray-500">
                  68% completed today&apos;s challenge
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                    Community reflection
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold">
                    What did you prove to yourself this week?
                  </h2>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 text-xl sm:flex">
                  ↗
                </div>
              </div>

              <div className="mt-10 space-y-6">
                <div className="border-l-2 border-violet-400 pl-5">
                  <p className="leading-7 text-gray-300">
                    “I spoke up during a meeting instead of waiting for someone
                    else to say what I was thinking.”
                  </p>
                  <p className="mt-3 text-sm text-gray-500">
                    Anonymous community member
                  </p>
                </div>

                <div className="border-l-2 border-fuchsia-400 pl-5">
                  <p className="leading-7 text-gray-300">
                    “I went to an event alone and introduced myself to three
                    people.”
                  </p>
                  <p className="mt-3 text-sm text-gray-500">
                    Anonymous community member
                  </p>
                </div>

                <div className="border-l-2 border-purple-400 pl-5">
                  <p className="leading-7 text-gray-300">
                    “I stopped overexplaining myself and gave an honest answer.”
                  </p>
                  <p className="mt-3 text-sm text-gray-500">
                    Anonymous community member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="inside"
          className="mt-28 border-t border-white/10 pt-20"
        >
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
                Choose your path
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                Confidence looks different for everyone.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                Join conversations and challenges that match the areas of your
                life where you want to grow.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {confidencePaths.map((path) => (
                <div
                  key={path.number}
                  className="grid gap-5 py-8 sm:grid-cols-[70px_1fr]"
                >
                  <p className="text-sm font-semibold text-violet-400">
                    {path.number}
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold">{path.title}</h3>

                    <p className="mt-3 max-w-2xl leading-7 text-gray-400">
                      {path.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-28">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Daily prompts
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
              Real growth begins with honest reflection.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {communityPrompts.map((prompt, index) => (
              <div
                key={prompt}
                className={`rounded-[28px] border p-7 ${
                  index === 1
                    ? "border-violet-400/30 bg-violet-400/10 md:-translate-y-5"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <p className="text-sm font-semibold text-violet-400">
                  Prompt {index + 1}
                </p>

                <p className="mt-8 text-2xl font-semibold leading-9">
                  {prompt}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-28 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] px-8 py-16 sm:px-14 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
                Join early
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
                Stop waiting to become confident before you begin.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                Join the waitlist and help shape a community built around real
                action, honest conversations, and measurable personal growth.
              </p>
            </div>

            <a
              href="/waitlist"
              className="rounded-full bg-white px-9 py-4 text-center font-semibold text-black transition hover:bg-gray-200"
            >
              Join the Waitlist
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}