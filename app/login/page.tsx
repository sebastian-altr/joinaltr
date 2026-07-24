"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setIsSubmitting(false);
      return;
    }

    router.push("/profile");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-xl">
        <a
          href="/"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          ← Back home
        </a>

        <section className="mt-10 rounded-[32px] border border-white/10 bg-white/[0.03] p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">
            Welcome back
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Log in to JoinAltr.
          </h1>

          <p className="mt-5 leading-8 text-gray-400">
            Continue building your profile, mission, and community presence.
          </p>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5">
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
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition placeholder:text-gray-600 focus:border-emerald-400 disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                disabled={isSubmitting}
                placeholder="Your password"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition placeholder:text-gray-600 focus:border-emerald-400 disabled:opacity-60"
              />
            </div>

            {message && (
              <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-gray-500">
            Need an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-white transition hover:text-emerald-400"
            >
              Sign up
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}