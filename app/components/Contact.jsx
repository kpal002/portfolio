// Contact (Get in Touch) — closing CTA, monochrome with lime accent.
// Subtle dot-grid background gives it a technical / blueprint feel.

import { Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile, socials } from "@/lib/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t-2 border-ink bg-dots py-32"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading
          index="06"
          title="Get in Touch"
          subtitle="open inbox — reply latency: low"
        />

        <h3 className="text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
          Let’s build
          <span className="text-accent">_</span>
        </h3>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/80">
          My inbox is always open — whether you have a project in mind, a
          research collaboration, or just want to say hi, I’ll do my best to
          reply.
        </p>

        {/* Primary CTA — black with lime shadow */}
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex items-center gap-2 border-2 border-ink bg-ink px-7 py-4 text-base font-bold uppercase tracking-wider text-bg shadow-brutal-acc transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-accent"
        >
          <Mail size={18} />
          Say Hello
        </a>

        {/* Email + phone row */}
        <p className="mt-6 text-sm font-bold text-muted">
          <span className="text-accent">{">"} </span>
          {profile.email} · {profile.phone}
        </p>

        {/* Social row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold text-ink">
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
    </section>
  );
}
