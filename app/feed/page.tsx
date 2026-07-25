const posts = [
  {
    community: "Habits",
    title: "What actually helped you stop checking your phone before bed?",
    body:
      "I have tried leaving it across the room, but I always end up getting it again. Looking for something that worked long term.",
    author: "Maya",
    time: "12 min ago",
    answers: 14,
    helped: 8,
  },
  {
    community: "Career",
    title: "How did you become more confident speaking in meetings?",
    body:
      "I know my work well, but I hesitate to speak unless someone asks me directly. What helped you get past that?",
    author: "Daniel",
    time: "38 min ago",
    answers: 9,
    helped: 5,
  },
  {
    community: "Fitness",
    title: "What made you finally stay consistent with working out?",
    body:
      "I can stay motivated for two or three weeks, then I fall out of the routine. I would rather hear what genuinely worked than generic motivation advice.",
    author: "Jordan",
    time: "1 hr ago",
    answers: 22,
    helped: 16,
  },
];

const communities = [
  { name: "Habits", posts: "128 posts" },
  { name: "Fitness", posts: "94 posts" },
  { name: "Career", posts: "81 posts" },
  { name: "Relationships", posts: "67 posts" },
];

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-20">
        {/* Soft background lighting */}
        <div className="pointer-events-none absolute left-1/3 top-0 h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-violet-500/[0.07] blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-emerald-400/[0.045] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Feed introduction */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Community Feed
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
              Find out what{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                actually helped.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Explore real questions, honest experiences, and answers that
              people found genuinely useful.
            </p>
          </div>

          {/* Feed layout */}
          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main feed */}
            <div>
              {/* Feed controls */}
              <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
                  >
                    For You
                  </button>

                  <button
                    type="button"
                    className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-gray-400 transition hover:border-white/20 hover:text-white"
                  >
                    New
                  </button>

                  <button
                    type="button"
                    className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-gray-400 transition hover:border-white/20 hover:text-white"
                  >
                    Most Helpful
                  </button>
                </div>

                <a
                  href="/posts/new"
                  className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-center text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/15"
                >
                  Ask a Question
                </a>
              </div>

              {/* Posts */}
              <div className="space-y-5">
                {posts.map((post) => (
                  <article
                    key={post.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition hover:border-white/20 sm:p-8"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 font-medium text-violet-300">
                        {post.community}
                      </span>

                      <span className="text-gray-600">•</span>

                      <span className="text-gray-500">
                        Asked by {post.author}
                      </span>

                      <span className="text-gray-600">•</span>

                      <span className="text-gray-500">{post.time}</span>
                    </div>

                    <h2 className="mt-5 text-2xl font-semibold tracking-tight transition hover:text-violet-200">
                      <a href="/posts">{post.title}</a>
                    </h2>

                    <p className="mt-4 max-w-3xl leading-7 text-gray-400">
                      {post.body}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                      <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
                        <span>
                          <strong className="font-semibold text-gray-200">
                            {post.answers}
                          </strong>{" "}
                          answers
                        </span>

                        <span className="flex items-center gap-2">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/10 text-xs text-emerald-300">
                            ✓
                          </span>

                          <span>
                            <strong className="font-semibold text-emerald-300">
                              {post.helped}
                            </strong>{" "}
                            marked helpful
                          </span>
                        </span>
                      </div>

                      <a
                        href="/posts"
                        className="text-sm font-semibold text-white transition hover:text-violet-300"
                      >
                        View answers →
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-full border border-white/10 bg-white/[0.025] px-6 py-4 font-semibold text-gray-300 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                Load More
              </button>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Start a question */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <h2 className="text-xl font-semibold">
                  What are you trying to figure out?
                </h2>

                <p className="mt-3 leading-7 text-gray-400">
                  Ask people who have already been through something similar.
                </p>

                <a
                  href="/posts/new"
                  className="mt-6 block rounded-full bg-white px-5 py-3.5 text-center font-semibold text-black transition hover:bg-gray-200"
                >
                  Ask the Community
                </a>
              </div>

              {/* Communities */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold">Communities</h2>

                  <a
                    href="/communities"
                    className="text-sm font-medium text-gray-400 transition hover:text-white"
                  >
                    See all
                  </a>
                </div>

                <div className="mt-5 divide-y divide-white/10">
                  {communities.map((community) => (
                    <a
                      key={community.name}
                      href="/communities"
                      className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="font-medium text-gray-200 transition hover:text-violet-300">
                        {community.name}
                      </span>

                      <span className="text-sm text-gray-500">
                        {community.posts}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Helpful explanation */}
              <div className="rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.055] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                  ✓
                </div>

                <h2 className="mt-5 text-lg font-semibold">
                  Look for answers people marked helpful.
                </h2>

                <p className="mt-3 leading-7 text-gray-400">
                  These marks show that an answer made a genuine difference to
                  someone.
                </p>

                <a
                  href="/how-it-works"
                  className="mt-5 inline-block text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  See how it works →
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}