"use client";

import { useState } from "react";
import Image from "next/image";
const links = [
  { label: "Communities", href: "/communities" },
  { label: "Profile", href: "/profile" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="/"
          className="flex items-center gap-0.001 text-xl font-bold tracking-tight text-white"
        >
          <Image
            src="/joinaltr-logo.png"
            alt="JoinAltr Logo"
            width={66}
            height={66}
            priority
            className="object-contain"
          />
          JoinAltr
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/waitlist"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Join the Waitlist
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/30 md:hidden"
        >
          <span className="text-xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
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
              href="/waitlist"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-white px-6 py-4 text-center font-semibold text-black transition hover:bg-gray-200"
            >
              Join the Waitlist
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}