// Blog — vertical list of posts in brutalist cards (monochrome + lime).
// Drop real article URLs into lib/content.js → blogPosts.

import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { blogPosts } from "@/lib/content";

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-24 border-t-2 border-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          title="Blog"
          subtitle="cat ./posts/* — notes from building real AI systems"
        />

        <div className="grid gap-5">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target={post.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 border-2 border-ink bg-surface p-6 shadow-brutal transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-accent hover:shadow-brutal-lg sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            >
              {/* Left column — meta + title + excerpt */}
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-muted">
                  <span className="border-2 border-ink bg-accent px-2 py-0.5 text-ink shadow-brutal-sm">
                    {post.tag}
                  </span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-ink sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  {post.excerpt}
                </p>
              </div>

              {/* Right column — arrow icon */}
              <div className="shrink-0 self-start border-2 border-ink bg-bg p-2 transition group-hover:translate-x-0.5 group-hover:bg-ink group-hover:text-accent">
                <ArrowUpRight size={18} />
              </div>
            </a>
          ))}
        </div>

        {/* Footer line */}
        <p className="mt-8 text-center text-sm font-bold text-muted">
          <span className="text-accent">{">"} </span>
          more posts shipping soon — say hi via Get in Touch below.
        </p>
      </div>
    </section>
  );
}
