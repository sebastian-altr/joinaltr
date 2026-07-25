"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createClient } from "../../lib/supabase/client";
type CommunityCounts = Record<
  string,
  {
    questions: number;
    answersWorked: number;
  }
>;
const featuredQuestions = [
  {
    community: "Fitness",
    communityHref: "/communities/fitness",
    accent: "text-violet-300",
    accentBg: "bg-violet-400/10",
    accentBorder: "border-violet-400/20",
    question: "How did you finally stop quitting the gym after a few weeks?",
    excerpt:
      "I always start motivated, but once work gets busy I fall out of the routine completely.",
    replies: "__",
    related: "__",
    status: "Resolved",
    outcome:
      "I reduced my plan to three short sessions a week and stopped relying on motivation.",
    author: "Maya",
    time: "Illustrative example",
  },
  {
    community: "Skincare",
    communityHref: "/communities/skincare",
    accent: "text-rose-300",
    accentBg: "bg-rose-400/10",
    accentBorder: "border-rose-400/20",
    question: "What actually helped clear your persistent acne?",
    excerpt:
      "I have tried complicated routines, but I am wondering whether simplifying everything would work better.",
    replies: "__",
    related: "__",
    status: "Resolved",
    outcome:
      "Keeping the routine simple and consistently using sunscreen and tretinoin made the biggest difference.",
    author: "Daniel",
    time: "Illustrative example",
  },
  {
    community: "Confidence",
    communityHref: "/communities/confidence",
    accent: "text-sky-300",
    accentBg: "bg-sky-400/10",
    accentBorder: "border-sky-400/20",
    question: "How did you stop caring so much about what other people think?",
    excerpt:
      "I overanalyze almost every interaction and replay conversations long after they happen.",
    replies: "__",
    related: "__",
    status: "Open",
    outcome: null,
    author: "Jordan",
    time: "Illustrative example",
  },
];

const communities = [
  {
    name: "Fitness",
    slug: "fitness",
    href: "/communities/fitness",
    description:
      "Training, consistency, strength, recovery, and building routines that last.",
    icon: "F",
    gradient: "from-violet-500/20 to-fuchsia-500/5",
    iconStyle:
      "border-violet-400/20 bg-violet-400/10 text-violet-300",
    stats: ["__ questions", "__ answers worked"],
  },
  {
    name: "Nutrition",
    slug: "nutrition",
    href: "/communities/nutrition",
    description:
      "Practical eating habits, meal planning, energy, and sustainable nutrition.",
    icon: "N",
    gradient: "from-emerald-500/20 to-teal-500/5",
    iconStyle:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
   
  },
  {
    name: "Confidence",
    slug: "confidence",
    href: "/communities/confidence",
    description:
      "Social confidence, self-belief, communication, and overcoming fear.",
    icon: "C",
    gradient: "from-sky-500/20 to-cyan-500/5",
    iconStyle: "border-sky-400/20 bg-sky-400/10 text-sky-300",
    stats: ["__ questions", "__ answers worked"],
  },
  {
    name: "Skincare",
    slug: "skincare",
    href: "/communities/skincare",
    description:
      "Simple routines, acne, products, consistency, and experiences over hype.",
    icon: "S",
    gradient: "from-rose-500/20 to-pink-500/5",
    iconStyle: "border-rose-400/20 bg-rose-400/10 text-rose-300",
    stats: ["__ questions", "__ answers worked"],
  },
];

const filters = ["Recent", "Unresolved", "Resolved", "Most helpful"];

export default function CommunitiesPage() {
  const supabase = useMemo(() => createClient(), []);

  const [communityCounts, setCommunityCounts] =
    useState<CommunityCounts>({});

  useEffect(() => {
    let isMounted = true;

    async function loadCommunityCounts() {
      const { data: communityRows, error: communitiesError } =
        await supabase
          .from("communities")
          .select("id, slug");

      if (!isMounted) {
        return;
      }

      if (communitiesError) {
        console.error(
          "Could not load communities:",
          communitiesError,
        );
        return;
      }

      const { data: postRows, error: postsError } = await supabase
        .from("posts")
        .select("community_id, status, worked_reply_id");

      if (!isMounted) {
        return;
      }

      if (postsError) {
        console.error(
          "Could not load community post counts:",
          postsError,
        );
        return;
      }

      const slugByCommunityId = new Map(
        (communityRows ?? []).map((community) => [
          community.id,
          community.slug,
        ]),
      );

      const nextCounts: CommunityCounts = {};

      for (const community of communityRows ?? []) {
        nextCounts[community.slug] = {
          questions: 0,
          answersWorked: 0,
        };
      }

      for (const post of postRows ?? []) {
        const slug = slugByCommunityId.get(post.community_id);

        if (!slug) {
          continue;
        }

        if (!nextCounts[slug]) {
          nextCounts[slug] = {
            questions: 0,
            answersWorked: 0,
          };
        }

        nextCounts[slug].questions += 1;

        if (
          post.status === "resolved" ||
          Boolean(post.worked_reply_id)
        ) {
          nextCounts[slug].answersWorked += 1;
        }
      }

      setCommunityCounts(nextCounts);
    }

    void loadCommunityCounts();

    return () => {
      isMounted = false;
    };
  }, [supabase]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Hero */}
      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]" />
          <div className="absolute -right-32 top-36 h-[380px] w-[380px] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
                JoinAltr Communities
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Find people who have already faced{" "}
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                  what you are facing.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-lg leading-8 text-gray-400">
                Ask a real question, compare practical answers, and return to
                mark what actually helped.
              </p>

              <Link
                href="/signup"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Join the Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community cards */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-28">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
                Explore communities
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Start with what you are working on.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Member totals will appear as people begin asking questions and
              marking answers that worked.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {communities.map((community) => (
              <Link
                key={community.name}
                href={community.href}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${community.gradient} p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-8`}
              >
                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-bold ${community.iconStyle}`}
                    >
                      {community.icon}
                    </div>

                    <span className="text-xl text-gray-600 transition group-hover:translate-x-1 group-hover:text-white">
                      →
                    </span>
                  </div>

                  <h3 className="mt-9 text-2xl font-semibold tracking-tight text-white">
                    {community.name}
                  </h3>

                  <p className="mt-3 max-w-lg leading-7 text-gray-400">
                    {community.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-gray-400">
    {communityCounts[community.slug]?.questions ?? 0}{" "}
    {(communityCounts[community.slug]?.questions ?? 0) === 1
      ? "question"
      : "questions"}
  </span>

  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-gray-400">
    {communityCounts[community.slug]?.answersWorked ?? 0}{" "}
    {(communityCounts[community.slug]?.answersWorked ?? 0) === 1
      ? "answer worked"
      : "answers worked"}
  </span>
</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feed preview */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Questions with outcomes
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Advice should not disappear after it is posted.
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
                JoinAltr follows questions beyond the first response, so the
                next person can see which advice actually helped.
              </p>

              <div className="mt-9 flex flex-wrap gap-2">
                {filters.map((filter, index) => (
                  <button
                    key={filter}
                    type="button"
                    className={
                      index === 0
                        ? "rounded-full bg-white px-4 py-2 text-xs font-semibold text-black"
                        : "rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs font-semibold text-gray-400 transition hover:border-white/20 hover:text-white"
                    }
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-gray-600">
                Preview filters are illustrative until community posting is
                live.
              </p>
            </div>

            <div className="space-y-5">
              {featuredQuestions.map((post) => (
                <article
                  key={post.question}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href={post.communityHref}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${post.accent} ${post.accentBg} ${post.accentBorder}`}
                    >
                      {post.community}
                    </Link>

                    <span className="text-xs text-gray-600">{post.time}</span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold leading-snug tracking-[-0.02em] text-white">
                    {post.question}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span>{post.replies} replies</span>
                    <span className="h-1 w-1 rounded-full bg-gray-700" />
                    <span>{post.related} people related</span>
                    <span className="h-1 w-1 rounded-full bg-gray-700" />

                    {post.status === "Resolved" ? (
                      <span className="font-medium text-emerald-300">
                        ✓ Resolved
                      </span>
                    ) : (
                      <span className="font-medium text-amber-300">
                        Open question
                      </span>
                    )}
                  </div>

                  {post.outcome && (
                    <div className="mt-7 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.055] p-5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-xs font-semibold text-emerald-300">
                          ✓
                        </span>

                        <p className="text-xs font-semibold uppercase tracking-[0.17em] text-emerald-300">
                          Answer marked as what worked
                        </p>
                      </div>

                      <p className="mt-4 leading-7 text-gray-300">
                        “{post.outcome}”
                      </p>
                    </div>
                  )}

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <p className="text-sm text-gray-500">
                      Asked by{" "}
                      <span className="font-medium text-gray-300">
                        {post.author}
                      </span>
                    </p>

                    <span className="text-sm font-semibold text-gray-300">
                      View discussion →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resolution explanation */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-emerald-400/20 bg-emerald-400/[0.04] p-7 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[110px]" />

            <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  The JoinAltr difference
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white">
                  The conversation continues after the advice.
                </h2>

                <p className="mt-6 leading-7 text-gray-400">
                  A few days after asking, members can return and tell the
                  community whether anything genuinely helped.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6 sm:p-8">
                <p className="text-sm text-gray-500">A few days later</p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Did anything help?
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Your response helps the next person find a better place to
                  begin.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white px-5 py-4 text-center text-sm font-semibold text-black">
                    Yes, something helped
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-center text-sm font-semibold text-gray-300">
                    Not yet
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                    If yes
                  </p>

                  <p className="mt-2 font-medium text-gray-200">
                    Which answer worked?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              Open Beta
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Ask the question you have been searching everywhere else to
              answer.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Join a community built around lived experience, clear outcomes,
              and advice that earns trust by helping.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Join Open Beta
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}