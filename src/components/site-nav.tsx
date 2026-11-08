"use client";

import { SpotlightNavbar } from "@/components/ui/spotlight-navbar";

const ITEMS = [
  { label: "How it works", href: "#how" },
  { label: "Who it's for", href: "#who" },
  { label: "Why trust it", href: "#trust" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-[min(1120px,100%-32px)] items-center gap-4">
        <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-bold" aria-label="PlugPakka home">
          <Logo />
          <span>
            Plug<span className="text-lime">Pakka</span>
          </span>
        </a>
        <SpotlightNavbar
          items={ITEMS}
          defaultActiveIndex={-1}
          className="mx-auto hidden pt-0 md:flex"
        />
        <a
          href="#early"
          className="ml-auto whitespace-nowrap rounded-full bg-lime px-3 py-2 text-sm sm:px-4 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgb(180_245_68/0.6)] md:ml-0"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}

export function Logo({ size = 30 }: { size?: number }) {
  return (
    <span className="grid place-items-center rounded-lg bg-lime" style={{ width: size, height: size }} aria-hidden="true">
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24">
        <path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="#06080d" />
      </svg>
    </span>
  );
}
