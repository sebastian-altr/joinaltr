export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          ← Back Home
        </a>

        <div className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            About JoinAltr
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
            Why I Built JoinAltr
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-300">
            My name is Sebastian, and JoinAltr was built from a simple idea:
            self-improvement should bring people together, not tear them apart.
          </p>

          <div className="mt-12 space-y-8 text-lg leading-9 text-gray-400">
            <p>
              Throughout my life, I've been fascinated by performance,
              discipline, and personal growth. From competing as a collegiate
              athlete to working in New York City after
              graduation, I saw firsthand how much confidence, health, and
              community shape a person's life.
            </p>

            <p>
              Like millions of others, I've spent time on fitness forums,
              Reddit communities, YouTube channels, and self-improvement
              platforms. While many of them provide valuable advice, too often
              they are filled with unrealistic standards, negativity, and
              people competing against one another rather than supporting one
              another.
            </p>

            <p>
              I wanted to build something different.
            </p>

            <p>
              JoinAltr is designed to be the internet's home for healthy
              self-improvement—a place where people can become healthier,
              stronger, and more confident through accountability, progress
              tracking, and genuine human connection.
            </p>

            <p>
              Whether someone is overcoming acne, building muscle, improving
              their style, sleeping better, or simply trying to become more
              comfortable in their own skin, they deserve a community that
              wants to see them succeed.
            </p>

            <p>
              We're not building another social media platform. We're building
              a movement centered around one idea:
            </p>
          </div>

          <div className="mt-14 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-10">
            <blockquote className="text-3xl font-semibold leading-tight sm:text-5xl">
              Become more.
            </blockquote>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Help people become healthier, stronger, and more confident—one
              real conversation at a time.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-4xl font-bold">2026</p>
              <p className="mt-3 text-gray-400">
                The year JoinAltr was founded.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-4xl font-bold">1</p>
              <p className="mt-3 text-gray-400">
                Mission: Help people become more.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-4xl font-bold">∞</p>
              <p className="mt-3 text-gray-400">
                Potential lives positively impacted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}