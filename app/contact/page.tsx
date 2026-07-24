export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          Back Home
        </a>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
          Contact
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
          Let&apos;s build something meaningful.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
          Interested in joining the early community, partnering with JoinAltr,
          investing, or helping build the platform? Reach out directly.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="text-sm font-medium text-gray-500">Email</p>

          <a
            href="mailto:hello@joinaltr.com"
            className="mt-3 inline-block text-2xl font-semibold transition hover:text-emerald-400 sm:text-3xl"
          >
            hello@joinaltr.com
          </a>

          <p className="mt-6 max-w-2xl leading-7 text-gray-400">
            Include a brief note about who you are and why you&apos;re reaching
            out. We&apos;ll respond as soon as possible.
          </p>
        </div>

        <a
          href="/waitlist"
          className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
        >
          Join the Waitlist
        </a>
      </div>
    </main>
  );
}