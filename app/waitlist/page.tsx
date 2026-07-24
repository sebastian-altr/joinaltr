"use client";

import { FormEvent, useState } from "react";

export default function WaitlistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const submission = {
      name: formData.get("name"),
      email: formData.get("email"),
      goal: formData.get("goal"),
      comments: formData.get("comments"),
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      setStatus({
        type: "success",
        message: "You’re on the waitlist! We’ll be in touch.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl">
        <a
          href="/"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          Back to home
        </a>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Join early
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Join the JoinAltr waitlist.
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            Be among the first to test the platform and help shape the future
            of healthy self-improvement.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={isSubmitting}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="goal"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Which community interests you most?
              </label>

              <select
                id="goal"
                name="goal"
                required
                defaultValue=""
                disabled={isSubmitting}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option value="Fitness">Fitness</option>
                <option value="Skincare">Skincare</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Confidence">Confidence</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="comments"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Anything else you would like us to know?
              </label>

              <textarea
                id="comments"
                name="comments"
                rows={5}
                disabled={isSubmitting}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
                placeholder="Tell us what you would like to see from JoinAltr..."
              />
            </div>

            {status && (
              <div
                role="status"
                className={`rounded-xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    : "border-red-400/30 bg-red-400/10 text-red-300"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}