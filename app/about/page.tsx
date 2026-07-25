import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Real questions",
    description:
      "Ask about something you are genuinely trying to improve—not something designed to attract attention.",
  },
  {
    number: "02",
    title: "Lived experience",
    description:
      "Receive practical answers from people who have faced similar problems themselves.",
  },
  {
    number: "03",
    title: "Clear outcomes",
    description:
      "Return after trying the advice and mark the answer that actually helped.",
  },
  {
    number: "04",
    title: "Meaningful reputation",
    description:
      "Build credibility through answers that produce results, not likes, followers, or popularity.",
  },
];

const communities = [
  "Fitness",
  "Nutrition",
  "Confidence",
  "Skincare",
  "Career",
  "Relationships",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Hero */}
      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />
          <div className="absolute right-0 top-48 h-[350px] w-[350px] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:py-40">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Open Beta
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              We&apos;re building a place that remembers{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                what actually worked.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              Most platforms reward what gets attention. JoinAltr is being
              built to reward what genuinely helps someone.
            </p>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              Why JoinAltr exists
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Advice is everywhere.
              <br />
              Outcomes are not.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-400">
            <p>
              Every day, people search Reddit threads, watch videos, browse
              forums, and scroll through thousands of opinions looking for one
              answer that might help.
            </p>

            <p>
              Eventually, they try something. Sometimes it works. Sometimes it
              changes their routine, their confidence, or even the direction of
              their life.
            </p>

            <p className="font-medium text-gray-200">
              But the internet rarely finds out what happened next.
            </p>

            <p>
              The advice remains online. The outcome disappears. JoinAltr is
              designed to close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* Core comparison */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              A different signal
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Popular is not the same as useful.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Likes and upvotes show what sounded good in the moment. They do
              not necessarily show what produced a real result.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-10">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl text-gray-400">
                ×
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                Traditional platforms
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                Remember what was popular.
              </h3>

              <div className="mt-8 space-y-4">
                {["Likes", "Upvotes", "Followers", "Shares"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/10 pb-4"
                  >
                    <span className="text-gray-400">{item}</span>
                    <span className="text-sm text-gray-600">
                      Attention signal
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-emerald-400/[0.055] p-8 sm:p-10">
              <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-emerald-400/10 blur-[90px]" />

              <div className="relative">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-xl text-emerald-300">
                  ✓
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  JoinAltr
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  Remembers what worked.
                </h3>

                <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-black/20 p-5">
                  <p className="text-sm text-gray-400">A few days later</p>

                  <p className="mt-3 text-lg font-semibold text-white">
                    Did anything help?
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black">
                      Yes
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm font-semibold text-gray-300">
                      Not yet
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-7 text-gray-400">
                  When something helps, the person who asked can identify the
                  answer that made the difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="scroll-mt-24 border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              How it works
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              The question is only the beginning.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              JoinAltr follows the advice beyond the moment it is posted.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <span className="text-sm font-semibold text-violet-300">
                  {principle.number}
                </span>

                <h3 className="mt-10 text-xl font-semibold text-white">
                  {principle.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reputation */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:items-center lg:py-32">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
              Reputation with meaning
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Credibility should be earned through impact.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              On JoinAltr, reputation is intended to grow when your answer is
              marked as the one that worked—not simply because people agreed
              with it.
            </p>

            <p className="mt-5 leading-7 text-gray-500">
              A resolution mark reflects one person&apos;s experience. It does
              not mean the advice will work for everyone, but it gives the next
              person a more meaningful place to begin.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 text-lg font-bold text-white">
                A
              </div>

              <div>
                <p className="text-lg font-semibold text-white">Alex</p>
                <p className="text-sm text-gray-500">@alexbuilds</p>
              </div>

              <span className="ml-auto rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                Gold
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 py-7">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-2xl font-semibold text-white">__</p>
                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Answers that worked
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-2xl font-semibold text-white">__</p>
                <p className="mt-2 text-xs leading-5 text-gray-500">
                  People related
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-2xl font-semibold text-white">__</p>
                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Days shown up
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Answer marked as what worked
              </p>

              <p className="mt-3 leading-7 text-gray-300">
                “I made the routine smaller until it was easy enough to repeat,
                then built from there.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
                Built around real goals
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Find people who have been where you are.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-gray-400 lg:justify-self-end">
              Join communities centered on the things people are genuinely
              trying to improve, and learn from experiences that continue
              beyond the original post.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            {communities.map((community) => (
              <span
                key={community}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-gray-300"
              >
                {community}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Open beta */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.035] px-7 py-16 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/15 blur-[110px]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                We&apos;re just getting started
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Help build something you wish already existed.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                JoinAltr is currently in Open Beta. Every question, answer, and
                piece of feedback from our earliest members helps shape what
                the platform becomes.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/signup"
                  className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                  Join Open Beta
                </Link>

                <Link
                  href="/communities"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  Explore Communities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}