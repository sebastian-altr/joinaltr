"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "../../../../lib/supabase/client";

export default function CreatePostPage() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const supabase = createClient();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const title = String(formData.get("title") ?? "").trim();
    const body = String(formData.get("body") ?? "").trim();

    if (!title || !body) {
      setMessage("Please enter both a title and a description.");
      setIsSubmitting(false);
      return;
    }

    if (title.length < 8) {
      setMessage("Your title must be at least 8 characters.");
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

    const { data: community, error: communityError } = await supabase
      .from("communities")
      .select("id, name")
      .eq("slug", slug)
      .single();

    if (communityError || !community) {
      setMessage("This community could not be found.");
      setIsSubmitting(false);
      return;
    }

    const { error: postError } = await supabase.from("posts").insert({
      author_id: user.id,
      community_id: community.id,
      title,
      body,
      status: "open",
    });

    if (postError) {
      setMessage(postError.message);
      setIsSubmitting(false);
      return;
    }

    router.push(`/communities/${slug}`);
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/communities/${slug}`}
          className="text-sm text-gray-500 transition hover:text-white"
        >
          ← Back to community
        </Link>

        <section className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              Create a post
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Ask a real question.
            </h1>

            <p className="mt-5 max-w-2xl leading-8 text-gray-400">
              Explain what you are dealing with, what you have already tried,
              and what kind of help you are looking for.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-7">
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Question
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  minLength={8}
                  maxLength={160}
                  disabled={isSubmitting}
                  placeholder="How did you finally stay consistent with working out?"
                  className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-400 disabled:opacity-60"
                />

                <p className="mt-2 text-xs text-gray-600">
                  Make the question specific enough that people understand what
                  you are trying to solve.
                </p>
              </div>

              <div>
                <label
                  htmlFor="body"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Details
                </label>

                <textarea
                  id="body"
                  name="body"
                  required
                  rows={10}
                  maxLength={5000}
                  disabled={isSubmitting}
                  placeholder="Share the situation, what you have already tried, and where you are getting stuck..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/35 px-5 py-4 leading-7 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-400 disabled:opacity-60"
                />
              </div>

              {message && (
                <div className="rounded-2xl border border-red-400/30 bg-red-400/10 px-5 py-4 text-sm text-red-300">
                  {message}
                </div>
              )}

              <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-7 sm:flex-row sm:justify-end">
                <Link
                  href={`/communities/${slug}`}
                  className="rounded-full border border-white/10 px-7 py-3.5 text-center text-sm font-semibold text-gray-300 transition hover:border-white/25 hover:text-white"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Publishing..." : "Publish Post"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}