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

/** PlugPakka mark: map pin + plug prongs + check (source: D:/ev station/brand). `size` is the height. */
export function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg height={size} width={(size * 300) / 430} viewBox="106 36 300 430" aria-hidden="true" className="shrink-0">
      <rect x="209" y="36" width="30" height="80" rx="15" fill="#b4f544" />
      <rect x="273" y="36" width="30" height="80" rx="15" fill="#b4f544" />
      <path d="M256 452 L149 312 A136 136 0 1 1 363 312 Z" fill="#b4f544" stroke="#b4f544" strokeWidth="28" strokeLinejoin="round" />
      <path d="M196 232 L239 275 L318 196" fill="none" stroke="#06080d" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
