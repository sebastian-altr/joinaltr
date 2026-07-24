export default function ConfidencePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-gray-500 hover:text-white">
          ← Back Home
        </a>

        <h1 className="mt-12 text-6xl font-bold sm:text-7xl">
          Confidence
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-400">
          Confidence isn't something you're born with—it's built. Develop
          habits, improve your mindset, and become more comfortable being
          yourself.
        </p>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Mindset</h2>
            <p className="mt-4 text-gray-400">
              Learn how successful people think, act, and overcome adversity.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Communication</h2>
            <p className="mt-4 text-gray-400">
              Improve social skills, public speaking, and personal presence.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Growth</h2>
            <p className="mt-4 text-gray-400">
              Build confidence through consistent action and measurable
              progress.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}