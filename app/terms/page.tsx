export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white sm:px-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold">Terms of Service</h1>

        <p className="mt-6 text-gray-400">
          Last updated: July 24, 2026
        </p>

        <div className="mt-12 space-y-8 text-gray-300 leading-8">
          <section>
            <h2 className="text-2xl font-semibold">
              Acceptance of Terms
            </h2>

            <p>
              By accessing or using JoinAltr, you agree to these Terms of
              Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Use of the Website
            </h2>

            <p>
              JoinAltr is intended to provide information about our mission,
              products, and services. Users agree not to misuse, disrupt, or
              attempt to gain unauthorized access to the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Intellectual Property
            </h2>

            <p>
              All content, branding, logos, text, and materials on JoinAltr
              are the property of JoinAltr unless otherwise stated and may not
              be copied or distributed without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Limitation of Liability
            </h2>

            <p>
              JoinAltr is provided on an "as is" basis. We make no guarantees
              regarding availability, accuracy, or uninterrupted access to the
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Changes to These Terms
            </h2>

            <p>
              JoinAltr reserves the right to update these Terms of Service at
              any time. Continued use of the website constitutes acceptance of
              any modifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Contact Information
            </h2>

            <p>
              Questions regarding these Terms of Service may be directed to
              hello@joinaltr.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}