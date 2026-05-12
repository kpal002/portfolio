"use client";

// Blog — paginated grid, 3 posts per page (monochrome + lime).
// Drop real article URLs into lib/content.js → blogPosts.

import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { blogPosts } from "@/lib/content";

const PER_PAGE = 3;

export default function Blog() {
  const totalPages = Math.ceil(blogPosts.length / PER_PAGE);
  const [page, setPage] = useState(0);

  const posts = blogPosts.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="blog" className="scroll-mt-24 border-t-2 border-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          title="Blog"
          subtitle="cat ./posts/* — notes from building real AI systems"
        />

        {/* Post list */}
        <div className="grid gap-5">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 border-2 border-ink bg-surface p-6 shadow-brutal transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-accent hover:shadow-brutal-lg sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            >
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-muted">
                  <span className="border-2 border-ink bg-accent px-2 py-0.5 text-ink shadow-brutal-sm group-hover:bg-ink group-hover:text-accent">
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
              <div className="shrink-0 self-start border-2 border-ink bg-bg p-2 transition group-hover:bg-ink group-hover:text-accent">
                <ArrowUpRight size={18} />
              </div>
            </a>
          ))}
        </div>

        {/* Pagination — only show if more than one page */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-between">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`h-2.5 w-2.5 border-2 border-ink transition-all ${
                    i === page ? "bg-accent" : "bg-bg hover:bg-ink/20"
                  }`}
                />
              ))}
            </div>

            {/* Arrows + counter */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-muted">
                <span className="text-accent">{String(page + 1).padStart(2, "0")}</span>
                {" / "}
                {String(totalPages).padStart(2, "0")}
              </span>
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                aria-label="Previous page"
                className="border-2 border-ink bg-bg p-2 shadow-brutal-sm transition hover:bg-accent hover:-translate-x-0.5 hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                aria-label="Next page"
                className="border-2 border-ink bg-bg p-2 shadow-brutal-sm transition hover:bg-accent hover:-translate-x-0.5 hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="mt-8 text-center text-sm font-bold text-muted">
          <span className="text-accent">{">"} </span>
          more posts shipping soon — say hi via Get in Touch below.
        </p>
      </div>
    </section>
  );
}
