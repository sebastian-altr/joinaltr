"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Feed", href: "/feed" },
  { label: "Communities", href: "/communities" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Waitlist", href: "/waitlist" },
  { label: "Contact", href: "/contact" },
  { label: "Profile", href: "/profile" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-10">
        {/* Brand */}
        <a
          href="/"
          aria-label="JoinAltr home"
          className="flex items-center gap-3"
        >
          <Image
            src="/joinaltr-logo.png"
            alt="JoinAltr Logo"
            width={72}
            height={72}
            priority
            className="h-16 w-16 shrink-0 object-contain brightness-0 invert sm:h-[72px] sm:w-[72px]"
          />

          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Open Beta
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-gray-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/signup"
            className="ml-2 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Join Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/30 lg:hidden"
        >
          <span className="text-xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <nav className="border-t border-white/10 px-6 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-gray-300 transition hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-full bg-white px-6 py-4 text-center font-semibold text-black transition hover:bg-gray-200"
            >
              Join Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}