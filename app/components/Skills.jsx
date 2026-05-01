// Skills — grouped tag cards, one per category (monochrome + lime).
// Each category card has a black header strip with lime title prefix.

import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t-2 border-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          title="Skills"
          subtitle="ls -la ./stack/ — tools I reach for most often"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="overflow-hidden border-2 border-ink bg-surface shadow-brutal transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg"
            >
              {/* Category header — black bar with lime prefix */}
              <div className="border-b-2 border-ink bg-ink px-4 py-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-bg">
                  <span className="text-accent">{">"} </span>
                  {group.category}
                </h3>
              </div>

              {/* Tag list */}
              <ul className="flex flex-wrap gap-2 p-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-2 border-ink bg-bg px-2 py-0.5 text-xs font-bold text-ink transition hover:bg-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
