export default function CommunitiesPage() {
  const communities = [
    {
      title: "Fitness",
      description:
        "Build muscle, improve performance, and stay accountable.",
      href: "/communities/fitness",
    },
    {
      title: "Skincare",
      description:
        "Track routines, document progress, and improve your skin.",
      href: "/communities/skincare",
    },
    {
      title: "Nutrition",
      description:
        "Build healthier habits and optimize your performance.",
      href: "/communities/nutrition",
    },
    {
      title: "Confidence",
      description:
        "Develop your mindset, communication, and personal growth.",
      href: "/communities/confidence",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <a
          href="/"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          ← Back Home
        </a>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
          Communities
        </p>

        <h1 className="mt-5 text-6xl font-bold sm:text-7xl">
          Find Your People.
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-400">
          Every transformation starts with a community. Explore the pillars of
          JoinAltr and connect with people pursuing the same goals.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {communities.map((community) => (
            <a
              key={community.title}
              href={community.href}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-emerald-400 hover:bg-white/[0.05]"
            >
              <h2 className="text-3xl font-semibold">
                {community.title}
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                {community.description}
              </p>

              <p className="mt-8 font-medium text-emerald-400">
                Explore Community →
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}