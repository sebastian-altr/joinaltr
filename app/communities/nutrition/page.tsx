const nutritionGoals = [
  {
    title: "Eat with intention",
    description:
      "Build meals around your goals without turning food into a constant source of stress.",
  },
  {
    title: "Stay consistent",
    description:
      "Create routines that work during busy weeks, travel, weekends, and everything in between.",
  },
  {
    title: "Learn together",
    description:
      "Share practical meals, strategies, and lessons with people working toward similar goals.",
  },
];

const plannedFeatures = [
  "Meal check-ins",
  "Recipe sharing",
  "Protein tracking",
  "Weekly meal planning",
  "Nutrition challenges",
  "Goal-based groups",
];

const sampleMeals = [
  {
    time: "Breakfast",
    meal: "Greek yogurt bowl",
    detail: "Berries, granola, honey, and chia seeds",
  },
  {
    time: "Lunch",
    meal: "Chicken rice bowl",
    detail: "Roasted vegetables, avocado, and tahini",
  },
  {
    time: "Dinner",
    meal: "Salmon and potatoes",
    detail: "Green beans, lemon, and herbs",
  },
];

export default function NutritionPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:px-10">
        <a
          href="/communities"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          Back to Communities
        </a>

        <section className="relative mt-12 grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
          <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Nutrition Community
            </p>

            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              Eat better.
              <br />
              Live stronger.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-400">
              A community for building healthier eating habits, finding meals
              that fit your life, and staying consistent without chasing
              perfection.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/waitlist"
                className="rounded-full bg-white px-8 py-4 text-center font-semibold text-black transition hover:bg-gray-200"
              >
                Join the Waitlist
              </a>

              <a
                href="#approach"
                className="rounded-full border border-white/10 px-8 py-4 text-center font-semibold transition hover:border-white/40"
              >
                Explore the Community
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-bold">Simple</p>
                <p className="mt-1 text-sm text-gray-500">Practical meals</p>
              </div>

              <div>
                <p className="text-2xl font-bold">Flexible</p>
                <p className="mt-1 text-sm text-gray-500">Real-life habits</p>
              </div>

              <div>
                <p className="text-2xl font-bold">Shared</p>
                <p className="mt-1 text-sm text-gray-500">Community support</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[36px] border border-orange-300/20 bg-gradient-to-b from-orange-300/10 to-white/[0.03] p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
                    Today&apos;s meals
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold">
                    A balanced day, made simple.
                  </h2>
                </div>

                <div className="rounded-full border border-orange-200/20 bg-orange-200/10 px-4 py-2 text-sm font-semibold text-orange-200">
                  3 of 3
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {sampleMeals.map((meal) => (
                  <div
                    key={meal.time}
                    className="rounded-[24px] border border-white/10 bg-black/25 p-5"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-sm font-semibold text-orange-300">
                          {meal.time}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold">
                          {meal.meal}
                        </h3>

                        <p className="mt-2 leading-6 text-gray-400">
                          {meal.detail}
                        </p>
                      </div>

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-300 text-sm font-bold text-black">
                        ✓
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                <div>
                  <p className="text-sm text-gray-500">Daily reflection</p>
                  <p className="mt-1 font-medium">
                    Energy felt steady throughout the day.
                  </p>
                </div>

                <span className="text-xl text-orange-300">↗</span>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-5 hidden w-52 rounded-[24px] border border-white/10 bg-[#111111] p-5 shadow-2xl sm:block">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Weekly goal
              </p>

              <p className="mt-3 text-2xl font-bold">5 home meals</p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-4/5 rounded-full bg-orange-300" />
              </div>

              <p className="mt-3 text-sm text-gray-500">4 completed</p>
            </div>
          </div>
        </section>

        <section id="approach" className="mt-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
                A better approach
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                Nutrition should support your life, not control it.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                JoinAltr helps members focus on realistic habits, practical
                meals, and steady progress rather than all-or-nothing thinking.
              </p>
            </div>

            <div className="space-y-5">
              {nutritionGoals.map((goal, index) => (
                <div
                  key={goal.title}
                  className="grid gap-5 rounded-[30px] border border-white/10 bg-white/[0.03] p-7 sm:grid-cols-[52px_1fr]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-300/20 bg-orange-300/10 font-semibold text-orange-300">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">{goal.title}</h3>

                    <p className="mt-3 max-w-2xl leading-7 text-gray-400">
                      {goal.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-28 rounded-[40px] border border-white/10 bg-white/[0.03] px-7 py-14 sm:px-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
                Community challenge
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
                Cook one more meal at home this week.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                Small, repeatable actions can change the way you eat more than a
                dramatic plan you cannot maintain.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {[
                  "Choose a recipe",
                  "Buy the ingredients",
                  "Share the result",
                ].map((step) => (
                  <span
                    key={step}
                    className="rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-gray-300"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-orange-300/20 bg-orange-300/10 p-7">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-sm text-orange-200">Community progress</p>
                  <p className="mt-3 text-5xl font-bold">72%</p>
                </div>

                <p className="max-w-32 text-right text-sm leading-6 text-gray-400">
                  of participating members completed the challenge
                </p>
              </div>

              <div className="mt-8 h-3 overflow-hidden rounded-full bg-black/30">
                <div className="h-full w-[72%] rounded-full bg-orange-300" />
              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-lg font-semibold">
                  “I made something easy enough that I will actually make it
                  again.”
                </p>

                <p className="mt-3 text-sm text-orange-200/70">
                  Anonymous community member
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
                Planned for launch
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
                Tools for building habits that last.
              </h2>
            </div>

            <p className="max-w-md text-lg leading-8 text-gray-400">
              Track what matters, discover new ideas, and stay connected to
              people pursuing similar goals.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {plannedFeatures.map((feature, index) => (
              <div
                key={feature}
                className={`min-h-48 rounded-[28px] border p-7 ${
                  index === 0 || index === 4
                    ? "border-orange-300/25 bg-orange-300/10"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <p className="text-sm font-semibold text-orange-300">
                  0{index + 1}
                </p>

                <p className="mt-16 text-2xl font-semibold">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mt-28 overflow-hidden rounded-[42px] border border-orange-300/20 bg-gradient-to-r from-orange-300/10 via-amber-300/[0.06] to-white/[0.03] px-8 py-16 sm:px-14 lg:px-20">
          <div className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-orange-300/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-200">
                Join early
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
                Build a healthier relationship with the way you eat.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                Join the waitlist and help shape a nutrition community built
                around realistic goals, useful ideas, and lasting progress.
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