import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Kuntal Pal`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const { details } = project;

  return (
    <div className="min-h-screen bg-bg font-mono text-ink">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="flex items-center gap-2 border-2 border-ink px-3 py-1.5 text-sm font-bold transition hover:bg-accent hover:shadow-brutal-sm"
          >
            <ArrowLeft size={14} />
            Back
          </Link>
          <span className="text-sm font-bold text-muted">
            <span className="text-accent">$</span> kuntal_pal
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Project header */}
        <div className="mb-12 border-2 border-ink bg-surface p-8 shadow-brutal-lg">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">
            <span className="text-accent">{">"} </span>project
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {project.title}
          </h1>
          <p className="mb-6 text-base leading-relaxed text-ink/80">
            {project.description}
          </p>

          {/* Tech tags */}
          <ul className="mb-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="border-2 border-ink bg-bg px-2 py-0.5 text-[11px] font-bold text-ink"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-ink bg-ink px-4 py-2 text-sm font-bold text-bg shadow-brutal-sm transition hover:bg-ink/90 hover:text-accent"
              >
                <Github size={14} />
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-ink px-4 py-2 text-sm font-bold text-ink shadow-brutal-sm transition hover:bg-accent"
              >
                <ArrowUpRight size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Detail sections */}
        {details && (
          <div className="space-y-8">
            {/* Overview */}
            <section className="border-2 border-ink bg-surface p-8 shadow-brutal">
              <div className="mb-1 flex items-center gap-2">
                <div className="h-3 w-3 bg-accent border-2 border-ink" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-muted">
                  Overview
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/90">
                {details.overview}
              </p>
            </section>

            {/* Dynamic sections */}
            {details.sections.map((section, i) => (
              <section
                key={section.heading}
                className="border-2 border-ink bg-surface p-8 shadow-brutal"
              >
                <div className="mb-1 flex items-center gap-2">
                  <div className="h-3 w-3 bg-accent border-2 border-ink" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-muted">
                    {section.heading}
                  </h2>
                </div>
                {section.body && (
                  <p className="mt-4 text-sm leading-relaxed text-ink/90">
                    {section.body}
                  </p>
                )}
                {section.items && (
                  <ul className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-ink/90"
                      >
                        <span className="mt-0.5 shrink-0 text-accent font-bold">
                          {"→"}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        )}

        {/* Footer nav */}
        <div className="mt-12 flex items-center justify-between border-t-2 border-ink pt-8">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-bold text-ink transition hover:text-accent"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-ink transition hover:text-accent"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </main>
    </div>
  );
}
