// Hero — first viewport-height section.
// Brutalist + AI futuristic: blueprint grid background with horizontal scan
// lines, single lime accent. Right column shows a terminal-style stats panel.
// (Profile photo lives in the navbar — see Navbar.jsx.)

import { ArrowRight, MapPin, Download, Terminal } from "lucide-react";
import { profile, socials } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden"
    >
      {/* Layered backgrounds — fine grid + faint horizontal scan lines */}
      <div aria-hidden className="absolute inset-0 bg-grid-fine" />
      <div aria-hidden className="absolute inset-0 bg-scanlines" />

      {/* Content container */}
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.6fr_1fr] lg:items-center">
        {/* LEFT — primary copy */}
        <div className="max-w-2xl">
          {/* Status pill */}
          <div className="mb-8 inline-flex animate-fade-in items-center gap-2 border-2 border-ink bg-accent px-3 py-1.5 text-xs font-bold text-ink shadow-brutal-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            STATUS: AVAILABLE FOR NEW OPPORTUNITIES
          </div>

          {/* Greeting — terminal-style */}
          <p
            className="mb-2 animate-fade-up text-base font-bold text-muted"
            style={{ animationDelay: "100ms" }}
          >
            <span className="text-accent">{">"} </span>
            init --user
          </p>

          {/* Name */}
          <h1
            className="animate-fade-up text-6xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl"
            style={{ animationDelay: "200ms" }}
          >
            {profile.name}
            <span className="text-accent">_</span>
          </h1>

          {/* Sub-headline */}
          <h2
            className="mt-6 animate-fade-up text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
            style={{ animationDelay: "300ms" }}
          >
            <span className="border-b-3 border-accent">{profile.role}</span>
            <span className="ml-1 inline-block w-[3px] -translate-y-1 bg-accent align-middle h-[0.9em] animate-blink" />
          </h2>

          {/* Tagline */}
          <p
            className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-ink/80"
            style={{ animationDelay: "400ms" }}
          >
            {profile.headline}
          </p>

          {/* Location */}
          {profile.location ? (
            <p
              className="mt-4 flex animate-fade-up items-center gap-1.5 text-sm font-bold text-muted"
              style={{ animationDelay: "500ms" }}
            >
              <MapPin size={14} />
              {profile.location}
            </p>
          ) : null}

          {/* CTAs */}
          <div
            className="mt-10 flex animate-fade-up flex-wrap items-center gap-4"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-bg shadow-brutal-acc transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-accent"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-2 border-ink bg-bg px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-ink shadow-brutal transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-accent"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social row */}
          <div
            className="mt-12 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-2 text-sm font-bold text-ink"
            style={{ animationDelay: "700ms" }}
          >
            {socials.map((s, i) => (
              <span key={s.label} className="flex items-center gap-6">
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="transition underline-offset-4 hover:text-accent hover:underline"
                >
                  {s.label} ↗
                </a>
                {i < socials.length - 1 ? (
                  <span className="text-muted/50">/</span>
                ) : null}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — terminal-style stats panel (hidden on mobile) */}
        <aside
          className="hidden animate-fade-up lg:block"
          style={{ animationDelay: "500ms" }}
        >
          <div className="border-2 border-ink bg-ink text-bg shadow-brutal-acc">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b-2 border-bg/30 bg-ink px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-bg/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-bg/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              </div>
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-bg/60">
                <Terminal size={10} />
                kuntal@ai:~
              </span>
            </div>

            {/* Body — terminal output */}
            <div className="space-y-2 px-4 py-4 text-xs leading-relaxed">
              <p>
                <span className="text-accent">$</span> whoami
              </p>
              <p className="pl-3 text-bg/80">→ ai-engineer · llm-systems</p>

              <p className="mt-3">
                <span className="text-accent">$</span> cat focus.txt
              </p>
              <p className="pl-3 text-bg/80">→ agentic_rag</p>
              <p className="pl-3 text-bg/80">→ multi_agent_systems</p>
              <p className="pl-3 text-bg/80">→ multimodal_learning</p>
              <p className="pl-3 text-bg/80">→ llm_evaluation</p>

              <p className="mt-3">
                <span className="text-accent">$</span> stack --short
              </p>
              <p className="pl-3 text-bg/80">
                → python · langchain · pytorch
              </p>
              <p className="pl-3 text-bg/80">→ pgvector · vertex ai · gcp</p>

              <p className="mt-3">
                <span className="text-accent">$</span> status
              </p>
              <p className="pl-3 text-accent">
                → READY <span className="animate-blink">▋</span>
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Scroll cue */}
      <a
        href="#projects"
        aria-label="Scroll to projects section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-muted hover:text-ink"
      >
        ↓ SCROLL
      </a>
    </section>
  );
}
