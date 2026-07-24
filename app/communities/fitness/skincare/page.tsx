export default function SkincarePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-gray-500 hover:text-white">
          ← Back Home
        </a>

        <h1 className="mt-12 text-6xl font-bold sm:text-7xl">
          Skincare
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-400">
          Clear skin isn't vanity—it's confidence. Learn routines, document
          progress, and connect with others working toward healthier skin.
        </p>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Routine Tracking</h2>
            <p className="mt-4 text-gray-400">
              Track your morning and evening skincare routines over time.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Progress Photos</h2>
            <p className="mt-4 text-gray-400">
              Document your journey and celebrate meaningful improvements.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Expert Advice</h2>
            <p className="mt-4 text-gray-400">
              Learn from dermatologists and people who have been through it.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}