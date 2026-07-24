export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white sm:px-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold">Privacy Policy</h1>

        <p className="mt-6 text-gray-400">
          Last updated: July 24, 2026
        </p>

        <div className="mt-12 space-y-8 text-gray-300 leading-8">
          <section>
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p>
              JoinAltr respects your privacy and is committed to protecting
              your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Information We Collect
            </h2>
            <p>
              We may collect information that you voluntarily provide,
              including your name and email address when joining the waitlist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              How We Use Information
            </h2>
            <p>
              We use collected information to communicate updates, improve
              JoinAltr, and provide access to future products and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Analytics
            </h2>
            <p>
              JoinAltr uses analytics tools to better understand website usage
              and improve the user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Contact Us
            </h2>
            <p>
              Questions regarding this Privacy Policy may be directed to
              hello@joinaltr.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}