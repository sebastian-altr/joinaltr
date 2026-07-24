export default function WaitlistPage() {
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

          <form
            action="https://formsubmit.co/hello@joinaltr.com"
            method="POST"
            className="mt-10 space-y-5"
          >
            <input
              type="hidden"
              name="_subject"
              value="New JoinAltr waitlist signup"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

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
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400"
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
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="goal"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                What are you working on?
              </label>

              <select
                id="goal"
                name="goal"
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
              >
                <option value="">Choose one</option>
                <option value="Fitness">Fitness</option>
                <option value="Skincare">Skincare</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Sleep">Sleep</option>
                <option value="Style">Style</option>
                <option value="Confidence">Confidence</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
            >
              Join the Waitlist
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}