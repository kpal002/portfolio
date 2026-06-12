import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { interviewTopics } from "@/lib/content";

export function generateStaticParams() {
  return interviewTopics.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }) {
  const topic = interviewTopics.find((t) => t.slug === params.slug);
  if (!topic) return {};
  return {
    title: `${topic.title} — Deep Dives — Kuntal Pal`,
    description: topic.description,
  };
}

function Card({ children, className = "" }) {
  return (
    <div className={`border-2 border-ink bg-surface p-8 shadow-brutal ${className}`}>
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="h-3 w-3 shrink-0 border-2 border-ink bg-accent" />
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted">{children}</p>
    </div>
  );
}

function PipelineDiagram({ nodes }) {
  return (
    <div className="my-6 border-2 border-ink bg-bg p-6 flex flex-wrap items-center justify-center gap-y-3">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center shrink-0">
          <div className="border-2 border-ink bg-surface px-3 py-2 text-sm font-bold text-ink shadow-brutal-sm">
            {node}
          </div>
          {i < nodes.length - 1 && (
            <div className="w-8 flex items-center justify-center">
              <span className="text-accent font-bold text-lg">→</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Placeholder({ label }) {
  return (
    <div className="my-4 border-2 border-dashed border-ink/30 bg-bg/50 p-6 text-center">
      <p className="text-[11px] font-bold uppercase tracking-widest text-muted">
        <span className="text-accent">{">"} </span>
        {label} — content coming soon
      </p>
    </div>
  );
}

export default function InterviewTopicPage({ params }) {
  const topic = interviewTopics.find((t) => t.slug === params.slug);
  if (!topic) notFound();

  return (
    <div className="min-h-screen bg-bg font-mono text-ink">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/#deep-dives"
            className="flex items-center gap-2 border-2 border-ink px-3 py-1.5 text-sm font-bold transition hover:bg-accent hover:shadow-brutal-sm"
          >
            <ArrowLeft size={14} />
            Back
          </Link>
          <span className="text-sm font-bold text-muted">
            <span className="text-accent">$</span> deep dives
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16 space-y-8">

        {/* Hero */}
        <Card>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">
            <span className="text-accent">{">"} </span>deep dives · ml fundamentals
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {topic.title}
          </h1>
          <p className="mb-6 text-base leading-relaxed text-ink/80">
            {topic.description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {topic.tags.map((tag) => (
              <li key={tag} className="border-2 border-ink bg-bg px-2 py-0.5 text-[11px] font-bold">
                {tag}
              </li>
            ))}
          </ul>
          <PipelineDiagram nodes={topic.diagram} />
        </Card>

        {/* Overview */}
        <Card>
          <SectionLabel>Overview</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">The Big Picture</h2>
          <Placeholder label="Overview — explain the concept from first principles" />
        </Card>

        {/* Core Concepts */}
        <Card>
          <SectionLabel>Core Concepts</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Key Ideas to Know</h2>
          <Placeholder label="Core concepts — break down each key idea with diagrams" />
        </Card>

        {/* How It Works */}
        <Card>
          <SectionLabel>Deep Dive</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">How It Actually Works</h2>
          <Placeholder label="Deep dive — step-by-step walkthrough with math or code" />
        </Card>

        {/* Common Interview Questions */}
        <Card>
          <SectionLabel>Interview Questions</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Common Questions & Answers</h2>
          <Placeholder label="Q&A — frequently asked questions with model answers" />
        </Card>

        {/* Gotchas */}
        <Card>
          <SectionLabel>Gotchas</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">What Trips People Up</h2>
          <Placeholder label="Gotchas — subtle points, common misconceptions, edge cases" />
        </Card>

        {/* Footer */}
        <div className="flex items-center justify-between border-t-2 border-ink pt-8">
          <Link
            href="/#deep-dives"
            className="flex items-center gap-2 text-sm font-bold text-ink transition hover:text-accent"
          >
            <ArrowLeft size={14} />
            All Topics
          </Link>
        </div>
      </main>
    </div>
  );
}
