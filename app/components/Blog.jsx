"use client";

// Blog — horizontal scrolling card carousel (monochrome + lime).
// Cards scroll left/right with prev/next buttons and a dot indicator.
// Drop real article URLs into lib/content.js → blogPosts.

import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { blogPosts } from "@/lib/content";

export default function Blog() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? blogPosts.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === blogPosts.length - 1 ? 0 : i + 1));

  const post = blogPosts[index];

  return (
    <section id="blog" className="scroll-mt-24 border-t-2 border-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          title="Blog"
          subtitle="cat ./posts/* — notes from building real AI systems"
        />

        <div className="relative">
          {/* Card */}
          <a
            key={post.title}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 border-2 border-ink bg-surface p-8 shadow-brutal transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-muted">
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
            <div className="shrink-0 self-start border-2 border-ink bg-bg p-2 transition group-hover:bg-ink group-hover:text-accent">
              <ArrowUpRight size={18} />
            </div>
          </a>

          {/* Prev / Next buttons */}
          <div className="mt-5 flex items-center justify-between">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {blogPosts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to post ${i + 1}`}
                  className={`h-2.5 w-2.5 border-2 border-ink transition-all ${
                    i === index ? "bg-accent" : "bg-bg hover:bg-ink/20"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous post"
                className="border-2 border-ink bg-bg p-2 font-bold shadow-brutal-sm transition hover:bg-accent hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next post"
                className="border-2 border-ink bg-bg p-2 font-bold shadow-brutal-sm transition hover:bg-accent hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Counter */}
          <p className="mt-3 text-right text-[11px] font-bold uppercase tracking-widest text-muted">
            <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
            {" / "}
            {String(blogPosts.length).padStart(2, "0")}
          </p>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm font-bold text-muted">
          <span className="text-accent">{">"} </span>
          more posts shipping soon — say hi via Get in Touch below.
        </p>
      </div>
    </section>
  );
}
