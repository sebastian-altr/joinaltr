export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-12 text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-10 lg:flex-row lg:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">JoinAltr</h3>

          <p className="mt-3 max-w-sm leading-7">
            Find the community that moves you forward.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-white">Communities</p>

            <div className="mt-4 space-y-2">
              <a href="/communities/fitness" className="block hover:text-white">
                Fitness
              </a>

              <a
                href="/communities/confidence"
                className="block hover:text-white"
              >
                Confidence
              </a>

              <a
                href="/communities/skincare"
                className="block hover:text-white"
              >
                Skincare
              </a>

              <a
                href="/communities/nutrition"
                className="block hover:text-white"
              >
                Nutrition
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Company</p>

            <div className="mt-4 space-y-2">
              <a href="/waitlist" className="block hover:text-white">
                Waitlist
              </a>

              <a href="/privacy" className="block hover:text-white">
                Privacy
              </a>

              <a href="/terms" className="block hover:text-white">
                Terms
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Follow</p>

            <div className="mt-4 space-y-2">
              <a
                href="https://www.linkedin.com"
                className="block hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://twitter.com"
                className="block hover:text-white"
              >
                X / Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-8 text-sm sm:px-10">
        © 2026 JoinAltr. All rights reserved.
      </div>
    </footer>
  );
}