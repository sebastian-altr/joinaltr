export default function NutritionPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-gray-500 hover:text-white">
          ← Back Home
        </a>

        <h1 className="mt-12 text-6xl font-bold sm:text-7xl">
          Nutrition
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-400">
          Food is the foundation of performance. Build healthier habits,
          improve your relationship with nutrition, and learn what works.
        </p>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Meal Planning</h2>
            <p className="mt-4 text-gray-400">
              Share recipes, meal prep ideas, and nutrition strategies.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Habit Building</h2>
            <p className="mt-4 text-gray-400">
              Build sustainable eating habits that last a lifetime.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Performance</h2>
            <p className="mt-4 text-gray-400">
              Optimize your energy, recovery, and overall health.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}