// Experience — vertical timeline in brutalist style.
// Single lime accent for all timeline dots (consistent, AI/terminal feel).

import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t-2 border-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          title="Experience"
          subtitle="git log --all --oneline"
        />

        <ol className="relative ml-3 border-l-3 border-ink">
          {experience.map((entry, i) => (
            <li key={i} className="relative mb-8 pl-8 last:mb-0">
              {/* Lime square dot on the timeline */}
              <span className="absolute -left-[10px] top-2 h-4 w-4 border-2 border-ink bg-accent shadow-brutal-sm" />

              <div className="border-2 border-ink bg-surface p-5 shadow-brutal">
                {/* Period — small mono label */}
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted">
                  <span className="text-accent">{">"} </span>
                  {entry.period}
                </p>

                {/* Role + company */}
                <h3 className="text-lg font-bold text-ink">
                  {entry.role}
                  <span className="text-muted"> @ </span>
                  <span className="border-b-2 border-accent">{entry.company}</span>
                </h3>

                {/* Summary */}
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/80">
                  {entry.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
