// About — prose on the left, quick facts + education on the right.
// Brutalist + AI: monochrome cards, single lime accent on left borders.

import SectionHeading from "./SectionHeading";
import { about, education } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t-2 border-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04" title="About" subtitle="cat ./about.md" />

        <div className="grid gap-10 md:grid-cols-3">
          {/* Prose paragraphs (2/3 width on desktop) */}
          <div className="space-y-5 text-lg leading-relaxed text-ink/85 md:col-span-2">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Education block beneath the prose */}
            <div className="!mt-10 border-2 border-ink bg-surface p-6 shadow-brutal">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-ink">
                <span className="text-accent">{">"} </span>
                Education
              </h3>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li
                    key={e.school}
                    className="flex flex-col gap-1 border-l-3 border-accent pl-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <div>
                      <p className="text-base font-bold text-ink">{e.school}</p>
                      <p className="text-sm text-muted">{e.degree}</p>
                    </div>
                    <p className="shrink-0 text-xs font-bold uppercase text-muted">
                      {e.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick facts panel (1/3 width on desktop) */}
          <aside className="border-2 border-ink bg-surface p-6 shadow-brutal h-fit">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-ink">
              <span className="text-accent">{">"} </span>
              Quick Facts
            </h3>
            <dl className="space-y-3">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-l-3 border-accent pl-3 pb-2"
                >
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-bold text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
