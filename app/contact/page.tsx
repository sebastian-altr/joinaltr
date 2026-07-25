export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-emerald-500/[0.06] blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Contact
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-semibold tracking-tight sm:text-6xl">
              Help us build something that{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                genuinely helps.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-400">
              Share feedback, report an issue, suggest an idea, or ask us
              anything about JoinAltr.
            </p>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Email us directly
              </p>

              <a
                href="mailto:hello@joinaltr.com"
                className="mt-3 block text-xl font-semibold transition hover:text-emerald-300"
              >
                hello@joinaltr.com
              </a>

              <p className="mt-3 leading-7 text-gray-400">
                For partnerships, feedback, technical issues, or general
                questions.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
            <form className="space-y-6">
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
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-400/60 focus:bg-black/50"
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
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-400/60 focus:bg-black/50"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-400/60 focus:bg-black/50"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Tell us what is on your mind."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-400/60 focus:bg-black/50"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:bg-gray-200"
              >
                Send Message
              </button>

              <p className="text-center text-sm text-gray-500">
                We will only use your email to respond to your message.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}