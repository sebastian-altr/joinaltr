"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";
export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const displayName = String(formData.get("displayName") ?? "").trim();
    const username = String(formData.get("username") ?? "")
      .trim()
      .toLowerCase();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(
      formData.get("confirmPassword") ?? ""
    );

    if (!displayName || !username || !email || !password) {
      setMessage({
        type: "error",
        text: "Please complete every required field.",
      });
      setIsSubmitting(false);
      return;
    }

    if (!/^[a-z0-9_]{3,24}$/.test(username)) {
      setMessage({
        type: "error",
        text: "Username must be 3–24 characters and use only letters, numbers, or underscores.",
      });
      setIsSubmitting(false);
      return;
    }

    if (password.length < 8) {
      setMessage({
        type: "error",
        text: "Password must contain at least 8 characters.",
      });
      setIsSubmitting(false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage({
        type: "error",
        text: "Passwords do not match.",
      });
      setIsSubmitting(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
          username,
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage({
        type: "error",
        text: error.message,
      });
      setIsSubmitting(false);
      return;
    }

    if (data.session) {
      router.push("/profile/edit");
      router.refresh();
      return;
    }

    setMessage({
      type: "success",
      text: "Account created. Check your email and confirm your address.",
    });

    form.reset();
    setIsSubmitting(false);
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
            Create an account
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Start building your profile.
          </h1>

          <p className="mt-5 leading-8 text-gray-400">
            Track your mission, communities, milestones, and consistency
            without chasing followers.
          </p>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5">
            <div>
              <label
                htmlFor="displayName"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Display name
              </label>

              <input
                id="displayName"
                name="displayName"
                type="text"
                required
                disabled={isSubmitting}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition placeholder:text-gray-600 focus:border-emerald-400 disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Username
              </label>

              <div className="flex rounded-xl border border-white/10 bg-black/40 focus-within:border-emerald-400">
                <span className="flex items-center pl-4 text-gray-600">@</span>

                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  minLength={3}
                  maxLength={24}
                  disabled={isSubmitting}
                  placeholder="username"
                  className="w-full bg-transparent px-2 py-3 outline-none placeholder:text-gray-600 disabled:opacity-60"
                />
              </div>
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
                minLength={8}
                disabled={isSubmitting}
                placeholder="At least 8 characters"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition placeholder:text-gray-600 focus:border-emerald-400 disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                minLength={8}
                disabled={isSubmitting}
                placeholder="Enter the password again"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition placeholder:text-gray-600 focus:border-emerald-400 disabled:opacity-60"
              />
            </div>

            {message && (
              <div
                role="status"
                className={`rounded-xl border px-4 py-3 text-sm ${
                  message.type === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    : "border-red-400/30 bg-red-400/10 text-red-300"
                }`}
              >
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-white transition hover:text-emerald-400"
            >
              Log in
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
