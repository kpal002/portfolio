// Projects — responsive grid of brutalist project cards (monochrome + lime).
// Each card has a thin accent strip on the left and a terminal-style index
// in the top-right. Hover lifts the card with a hard shadow.

import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t-2 border-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          title="Projects"
          subtitle="ls ./projects/ — recent shipped work"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative flex border-2 border-ink bg-surface shadow-brutal transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg ${
                p.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Vertical lime accent strip on the left */}
              <div aria-hidden className="w-1.5 shrink-0 bg-accent border-r-2 border-ink" />

              <div className="flex flex-1 flex-col p-6">
                {/* Top row — terminal-style index + outbound icons */}
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">
                      <span className="text-accent">{">"} </span>
                      project_{String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl font-bold text-ink">{p.title}</h3>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 text-ink">
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} on GitHub`}
                        className="border-2 border-ink p-1 transition hover:bg-accent"
                      >
                        <Github size={16} />
                      </a>
                    ) : null}
                    {p.demo ? (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} live demo`}
                        className="border-2 border-ink p-1 transition hover:bg-accent"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    ) : null}
                  </div>
                </div>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-ink/80">
                  {p.description}
                </p>

                {/* Tech stack tags pinned to the bottom */}
                <ul className="mt-auto flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="border-2 border-ink bg-bg px-2 py-0.5 text-[11px] font-bold text-ink transition group-hover:bg-accent"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
