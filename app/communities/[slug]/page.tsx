import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";

type CommunityPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Community = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
};

type Post = {
  id: string;
  title: string;
  body: string;
  status: "open" | "resolved";
  created_at: string;
};

export default async function CommunityPage({
  params,
}: CommunityPageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: community, error: communityError } = await supabase
    .from("communities")
    .select("id, name, slug, description")
    .eq("slug", slug)
    .single<Community>();

  if (communityError || !community) {
    notFound();
  }

  const { data: posts, error: postsError } = await supabase
    .from("posts")
    .select("id, title, body, status, created_at")
    .eq("community_id", community.id)
    .order("created_at", { ascending: false });

  if (postsError) {
    console.error("Unable to load posts:", postsError.message);
  }

  const communityPosts = (posts ?? []) as Post[];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
          <Link
            href="/communities"
            className="text-sm text-gray-500 transition hover:text-white"
          >
            ← All communities
          </Link>

          <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
                JoinAltr Community
              </p>

              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
                {community.name}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                {community.description ??
                  "Ask real questions, compare practical answers, and mark what actually worked."}
              </p>
            </div>

            <Link
              href={`/communities/${community.slug}/new`}
              className="inline-flex w-fit rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Create Post
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Community feed
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                Questions from the community
              </h2>
            </div>

            <p className="text-sm text-gray-500">
              {communityPosts.length}{" "}
              {communityPosts.length === 1 ? "post" : "posts"}
            </p>
          </div>

          {communityPosts.length === 0 ? (
            <div className="mt-12 rounded-[2rem] border border-dashed border-white/15 bg-white/[0.025] px-6 py-20 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-xl text-violet-300">
                ?
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                No posts here yet.
              </h3>

              <p className="mx-auto mt-3 max-w-md leading-7 text-gray-500">
                Be the first person to ask a real question in the{" "}
                {community.name} community.
              </p>

              <Link
                href={`/communities/${community.slug}/new`}
                className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Create the first post
              </Link>
            </div>
          ) : (
            <div className="mt-12 space-y-5">
              {communityPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.id}`}
                  className="group block rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04] sm:p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-gray-400">
                      {community.name}
                    </span>

                    {post.status === "resolved" ? (
                      <span className="text-sm font-semibold text-emerald-300">
                        ✓ Answer worked
                      </span>
                    ) : (
                      <span className="text-sm font-semibold text-amber-300">
                        Open question
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] transition group-hover:text-violet-200">
                    {post.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 leading-7 text-gray-400">
                    {post.body}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-sm text-gray-600">
                      {new Date(post.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>

                    <span className="text-sm font-semibold text-gray-300">
                      View discussion →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}