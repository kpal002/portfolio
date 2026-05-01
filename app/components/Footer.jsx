// Footer — credit line + back-to-top link, brutalist + AI style.
// Black bar with a thin lime accent strip on top.

import { profile } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink bg-ink text-bg">
      {/* Thin lime accent strip on top */}
      <div aria-hidden className="h-1 bg-accent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs font-bold uppercase tracking-widest sm:flex-row">
        <p>
          <span className="text-accent">{">"} </span>
          © {year} {profile.name} · BUILT WITH NEXT.JS + TAILWIND
        </p>
        <a href="#hero" className="transition hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
