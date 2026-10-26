"use client";

import { useState } from "react";
import Link from "next/link";
import { Wordmark } from "./wordmark";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#terms", label: "Terms" },
  { href: "/#brokers", label: "Brokers" },
  { href: "/#team", label: "Team" },
];

export function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 border-b border-line bg-bone/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-2 underline-offset-4 hover:text-ink hover:underline"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/sign-in"
            className="text-sm font-medium text-ink-2 underline-offset-4 hover:text-ink hover:underline"
          >
            Sign in
          </Link>
          <Link
            href="/#brokers"
            className="border border-ink bg-ink px-4 py-2 text-sm font-semibold text-bone transition-colors hover:bg-forest hover:border-forest"
          >
            Become a partner
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden eyebrow border border-line px-3 py-2 text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-line md:hidden" aria-label="Main">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {[...links, { href: "/sign-in", label: "Sign in" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-base font-medium text-ink last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#brokers"
              onClick={() => setOpen(false)}
              className="my-3 bg-ink px-4 py-3 text-center text-sm font-semibold text-bone"
            >
              Become a partner
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
