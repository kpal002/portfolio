// InterviewPrep — grid of topic cards, each with an inline pipeline diagram.
// Links to /interview/[slug] detail pages for deep dives.

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { interviewTopics } from "@/lib/content";

function PipelineDiagram({ nodes }) {
  return (
    <div className="flex items-center gap-0 overflow-x-auto py-1 flex-wrap justify-center gap-y-2">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center shrink-0">
          <div className="border-2 border-ink bg-bg px-2 py-1 text-[10px] font-bold text-ink whitespace-nowrap">
            {node}
          </div>
          {i < nodes.length - 1 && (
            <div className="w-5 flex items-center justify-center shrink-0">
              <span className="text-accent font-bold text-sm">→</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function InterviewPrep() {
  return (
    <section id="interview-prep" className="scroll-mt-24 border-t-2 border-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          title="Deep Dives"
          subtitle="open ./deep-dives/ — ML & AI fundamentals, explained properly"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {interviewTopics.map((topic, i) => (
            <Link
              key={topic.slug}
              href={`/deep-dives/${topic.slug}`}
              className="group relative flex flex-col border-2 border-ink bg-surface shadow-brutal transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg"
            >
              {/* Diagram area */}
              <div className="border-b-2 border-ink bg-bg p-5 min-h-[90px] flex items-center justify-center">
                <PipelineDiagram nodes={topic.diagram} />
              </div>

              {/* Accent strip + content */}
              <div className="flex flex-1">
                <div aria-hidden className="w-1.5 shrink-0 bg-accent border-r-2 border-ink" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">
                    <span className="text-accent">{">"} </span>
                    topic_{String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-bold text-ink mb-2">{topic.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/75 mb-4">
                    {topic.description}
                  </p>

                  {/* Tags */}
                  <ul className="flex flex-wrap gap-1.5 mt-auto">
                    {topic.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border-2 border-ink bg-bg px-2 py-0.5 text-[10px] font-bold text-ink transition group-hover:bg-accent"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-4 border-t-2 border-ink">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-ink transition group-hover:text-accent">
                      Deep Dive →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
