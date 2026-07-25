"use client";

import { useCallback, useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "../../../lib/supabase/client";

type Community = {
  id: string;
  name: string;
  slug: string;
};

type Post = {
  id: string;
  author_id: string;
  community_id: string;
  title: string;
  body: string;
  status: "open" | "resolved";
  worked_reply_id: string | null;
  created_at: string;
};

type Reply = {
  id: string;
  post_id: string;
  author_id: string;
  body: string;
  created_at: string;
};

type Profile = {
  id: string;
  display_name: string | null;
  username: string | null;
  profile_picture: string | null;
};

export default function PostPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const postId = params.id;

  const [supabase] = useState(() => createClient());

  const [post, setPost] = useState<Post | null>(null);
  const [community, setCommunity] = useState<Community | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [profiles, setProfiles] = useState<Record<string, Profile>>({});
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const loadPost = useCallback(async () => {
    setIsLoading(true);
    setMessage(null);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    setCurrentUserId(user?.id ?? null);

    const { data: postData, error: postError } = await supabase
      .from("posts")
      .select(
        "id, author_id, community_id, title, body, status, worked_reply_id, created_at"
      )
      .eq("id", postId)
      .single();

    if (postError || !postData) {
      setMessage("This post could not be found.");
      setIsLoading(false);
      return;
    }

    const typedPost = postData as Post;
    setPost(typedPost);

    const [communityResult, repliesResult] = await Promise.all([
      supabase
        .from("communities")
        .select("id, name, slug")
        .eq("id", typedPost.community_id)
        .single(),

      supabase
        .from("replies")
        .select("id, post_id, author_id, body, created_at")
        .eq("post_id", typedPost.id)
        .order("created_at", { ascending: true }),
    ]);

    if (communityResult.data) {
      setCommunity(communityResult.data as Community);
    }

    const loadedReplies = (repliesResult.data ?? []) as Reply[];
    setReplies(loadedReplies);

    const authorIds = Array.from(
      new Set([
        typedPost.author_id,
        ...loadedReplies.map((reply) => reply.author_id),
      ])
    );

    if (authorIds.length > 0) {
      const { data: profileData } = await supabase
        .from("profiles")
        .select("id, display_name, username, profile_picture")
        .in("id", authorIds);

      const profileMap: Record<string, Profile> = {};

      for (const profile of (profileData ?? []) as Profile[]) {
        profileMap[profile.id] = profile;
      }

      setProfiles(profileMap);
    }

    setIsLoading(false);
  }, [postId, supabase]);

  useEffect(() => {
    void loadPost();
  }, [loadPost]);

  async function handleReply(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = String(formData.get("reply") ?? "").trim();

    if (!body) {
      setMessage("Please write a reply before submitting.");
      setIsSubmitting(false);
      return;
    }

    if (body.length < 3) {
      setMessage("Your reply is too short.");
      setIsSubmitting(false);
      return;
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      router.push("/login");
      router.refresh();
      return;
    }

    const { error: replyError } = await supabase.from("replies").insert({
      post_id: postId,
      author_id: user.id,
      body,
    });

    if (replyError) {
      setMessage(replyError.message);
      setIsSubmitting(false);
      return;
    }

    form.reset();
    setIsSubmitting(false);
    await loadPost();
  }
  async function deletePost() {
  if (!post || !isOriginalPoster) return;

  const confirmed = window.confirm(
    "Delete this post? This will permanently delete the post and all of its replies."
  );

  if (!confirmed) return;

  setIsSubmitting(true);
  setMessage(null);

  const { error } = await supabase
    .from("posts")
    .delete()
    .eq("id", post.id)
    .eq("author_id", currentUserId);

  if (error) {
    setMessage(error.message);
    setIsSubmitting(false);
    return;
  }

  router.push(
    community ? `/communities/${community.slug}` : "/communities"
  );
  router.refresh();
}
async function markAsWorked(replyId: string) {
  if (!post) return;

  const { error } = await supabase
    .from("posts")
    .update({
      worked_reply_id: replyId,
      status: "resolved",
    })
    .eq("id", post.id);

  if (error) {
    setMessage(error.message);
    return;
  }

  await loadPost();
}
  function getProfile(userId: string) {
    return profiles[userId];
  }

  function getDisplayName(userId: string) {
    const profile = getProfile(userId);

    return (
      profile?.display_name ||
      (profile?.username ? `@${profile.username}` : "Community member")
    );
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#050505] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-gray-500">Loading discussion...</p>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-[#050505] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.025] p-10 text-center">
          <h1 className="text-3xl font-semibold">Post not found</h1>

          <p className="mt-4 text-gray-500">
            This discussion may have been removed.
          </p>

          <Link
            href="/communities"
            className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            Browse communities
          </Link>
        </div>
      </main>
    );
  }

  const isOriginalPoster = currentUserId === post.author_id;

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-10">
          <Link
            href={
              community
                ? `/communities/${community.slug}`
                : "/communities"
            }
            className="text-sm text-gray-500 transition hover:text-white"
          >
            ← Back to {community?.name ?? "community"}
          </Link>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-[110px]" />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={
                    community
                      ? `/communities/${community.slug}`
                      : "/communities"
                  }
                  className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-xs font-semibold text-violet-300"
                >
                  {community?.name ?? "Community"}
                </Link>

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

              <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span>
                  Asked by{" "}
                  <span className="font-medium text-gray-300">
                    {getDisplayName(post.author_id)}
                  </span>
                </span>

                <span className="h-1 w-1 rounded-full bg-gray-700" />

                <span>
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>

                {isOriginalPoster && (
  <>
    <span className="h-1 w-1 rounded-full bg-gray-700" />

    <span className="text-violet-300">Your post</span>

    <span className="h-1 w-1 rounded-full bg-gray-700" />

    <button
      type="button"
      onClick={() => void deletePost()}
      disabled={isSubmitting}
      className="font-medium text-red-400 transition hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isSubmitting ? "Deleting..." : "Delete post"}
    </button>
  </>
)}
              </div>

              <p className="mt-9 whitespace-pre-wrap text-lg leading-8 text-gray-300">
                {post.body}
              </p>
            </div>
          </article>

          <section className="mt-14">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Discussion
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  {replies.length}{" "}
                  {replies.length === 1 ? "reply" : "replies"}
                </h2>
              </div>
            </div>

            {replies.length === 0 ? (
              <div className="mt-8 rounded-[2rem] border border-dashed border-white/15 bg-white/[0.02] px-6 py-14 text-center">
                <h3 className="text-xl font-semibold">No replies yet.</h3>

                <p className="mt-3 text-gray-500">
                  Be the first person to share something that might help.
                </p>
              </div>
            ) : (
              <div className="mt-8 space-y-4">
                {replies.map((reply) => {
                  const isWorkedReply =
                    post.worked_reply_id === reply.id;

                  return (
                    <article
                      key={reply.id}
                      className={
                        isWorkedReply
                          ? "rounded-[2rem] border border-emerald-400/30 bg-emerald-400/[0.06] p-6 sm:p-8"
                          : "rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8"
                      }
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-white">
                            {getDisplayName(reply.author_id)}
                          </p>

                          <p className="mt-1 text-xs text-gray-600">
                            {new Date(reply.created_at).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </p>
                        </div>

                        {isWorkedReply && (
                          <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                            ✓ Marked as what worked
                          </span>
                        )}
                      </div>

                      <p className="mt-6 whitespace-pre-wrap leading-8 text-gray-300">
                        {reply.body}
                      </p>
                      {isOriginalPoster &&
  post.status !== "resolved" &&
  !isWorkedReply && (
    <button
      onClick={() => void markAsWorked(reply.id)}
      className="mt-6 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/20"
    >
      ✓ Mark as What Worked
    </button>
)}
                    </article>
                  );
                })}
              </div>
            )}
          </section>

          <section className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Add a reply
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Share what you tried.
            </h2>

            <p className="mt-3 leading-7 text-gray-500">
              Focus on your experience, what changed, and what genuinely
              helped.
            </p>

            <form onSubmit={handleReply} className="mt-7">
              <textarea
                name="reply"
                required
                rows={7}
                maxLength={5000}
                disabled={isSubmitting}
                placeholder="What worked for you?"
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/35 px-5 py-4 leading-7 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-400 disabled:opacity-60"
              />

              {message && (
                <div className="mt-4 rounded-2xl border border-red-400/30 bg-red-400/10 px-5 py-4 text-sm text-red-300">
                  {message}
                </div>
              )}

              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Posting reply..." : "Post Reply"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}