import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

export const metadata = {
  title: "σ-RAG — Kuntal Pal",
  description:
    "How particle physics significance testing eliminates RAG hallucinations — architecture, noise floor estimation, and benchmark results.",
};

function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="h-3 w-3 shrink-0 border-2 border-ink bg-accent" />
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted">
        {children}
      </p>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`border-2 border-ink bg-surface p-8 shadow-brutal ${className}`}>
      {children}
    </div>
  );
}

function Diagram({ src, alt, caption, maxWidth }) {
  return (
    <figure className="my-6 border-2 border-ink bg-bg p-4">
      <div
        className={`relative ${maxWidth ? "mx-auto" : "w-full"}`}
        style={maxWidth ? { maxWidth } : {}}
      >
        <Image
          src={src}
          alt={alt}
          width={900}
          height={500}
          style={{ width: "100%", height: "auto" }}
          className="block"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 border-t-2 border-ink pt-3 text-[11px] font-bold uppercase tracking-widest text-muted">
          <span className="text-accent">▸ </span>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function CodeBlock({ code, label }) {
  return (
    <div className="my-4 border-2 border-ink">
      {label && (
        <div className="border-b-2 border-ink bg-ink px-4 py-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
            {label}
          </span>
        </div>
      )}
      <pre className="overflow-x-auto bg-ink p-5 text-[12px] leading-relaxed text-accent">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink/90">
          <span className="mt-0.5 shrink-0 font-bold text-accent">→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="border-2 border-ink bg-bg p-5 text-center shadow-brutal-sm">
      <p className="text-3xl font-bold text-accent">{value}</p>
      <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}

export default function SigmaRAGPage() {
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

      <main className="mx-auto max-w-4xl space-y-8 px-6 py-16">

        {/* ── 1. Hero ── */}
        <Card>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">
            <span className="text-accent">{">"} </span>open source · PyPI package
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            σ-RAG: Significance-Threshold Retrieval
          </h1>
          <p className="mb-6 text-base leading-relaxed text-ink/80">
            Standard RAG always returns the top-k chunks — even when none of them are relevant.
            σ-RAG borrows a technique from particle physics: estimate the background noise distribution,
            set a significance threshold, and refuse to answer when the evidence isn&apos;t there.
          </p>
          <ul className="mb-6 flex flex-wrap gap-2">
            {["Python", "NumPy", "sentence-transformers", "Statistics", "RAG", "Open Source"].map((t) => (
              <li key={t} className="border-2 border-ink bg-bg px-2 py-0.5 text-[11px] font-bold">
                {t}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/kpal002/sigma-rag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-4 py-2 text-sm font-bold text-bg shadow-brutal-sm transition hover:text-accent"
            >
              <Github size={14} />
              View on GitHub
            </a>
            <a
              href="https://pypi.org/project/sigma-rag/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink bg-accent px-4 py-2 text-sm font-bold text-ink shadow-brutal-sm transition hover:bg-ink hover:text-accent"
            >
              <ArrowUpRight size={14} />
              PyPI
            </a>
          </div>
        </Card>

        {/* ── 2. Key Results ── */}
        <Card>
          <SectionLabel>Key Results</SectionLabel>
          <h2 className="mb-6 text-xl font-bold">The Numbers</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatCard value="100%" label="OOD queries suppressed @ 2σ" />
            <StatCard value="0" label="Hallucination risk on unanswerable queries" />
            <StatCard value="1.8" label="Avg. chunks passed vs top-k=3" />
            <StatCard value="pip" label="install sigma-rag" />
          </div>
          <div className="mt-6 border-l-4 border-accent pl-5">
            <p className="text-sm font-bold">σ-RAG matches standard RAG on answerable questions.</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/80">
              The difference shows up exactly where it matters: queries the system genuinely can&apos;t
              answer. Top-k always injects irrelevant context; σ-RAG suppresses it entirely.
            </p>
          </div>
        </Card>

        {/* ── 3. The Problem ── */}
        <Card>
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Why Top-k Retrieval Causes Hallucinations</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Standard RAG has a fundamental flaw: it always returns the top-k chunks regardless of
            whether any of them are actually relevant. When you ask a question about pasta carbonara
            and your corpus contains only physics papers, the retriever faithfully returns the three{" "}
            <em>least-irrelevant</em> physics papers — and the LLM has no way to know they&apos;re
            background noise.
          </p>
          <div className="my-6 border-l-4 border-accent pl-5">
            <p className="text-sm font-bold leading-relaxed">
              &ldquo;Most similar&rdquo; ≠ &ldquo;actually similar.&rdquo; Top-k has no concept of
              an absolute relevance threshold — it just ranks and returns.
            </p>
          </div>
          <p className="text-sm leading-relaxed text-ink/90">
            The result: the LLM receives irrelevant context, treats it as evidence, and generates a
            confident, detailed, completely fabricated answer. This is the hallucination problem that
            σ-RAG is designed to fix.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="border-2 border-ink bg-bg p-4">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">
                ✗ Standard top-k
              </p>
              <BulletList items={[
                "Always returns exactly k chunks",
                "No concept of absolute relevance",
                "Unanswerable queries still get context",
                "LLM hallucinates from background noise",
                "Context size grows linearly with k",
              ]} />
            </div>
            <div className="border-2 border-accent bg-bg p-4 shadow-brutal-sm">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted">
                ✓ σ-RAG
              </p>
              <BulletList items={[
                "Returns only statistically significant chunks",
                "Threshold set relative to background noise",
                "Zero chunks on unanswerable queries",
                "No context → no hallucination opportunity",
                "Context size adapts to actual evidence",
              ]} />
            </div>
          </div>
        </Card>

        {/* ── 4. The Physics Analogy ── */}
        <Card>
          <SectionLabel>Inspiration</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">What Particle Physics Taught Me About RAG</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-4">
            During my PhD in particle physics, one of the first things you learn is that you don&apos;t
            declare a new particle discovery just because you see &ldquo;the largest excess we&apos;ve found
            today.&rdquo; The ATLAS and CMS experiments at the LHC require a{" "}
            <strong>local significance of 5σ</strong> — meaning the probability that background
            processes alone could produce an excess at least as large is below 2.87 × 10⁻⁷.
          </p>
          <p className="text-sm leading-relaxed text-ink/90 mb-6">
            The procedure has two steps that are always kept separate:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                n: "01",
                title: "Background Estimation",
                body: "Measure the expected distribution from known processes in control regions before looking at the signal region. This is the null hypothesis.",
              },
              {
                n: "02",
                title: "Significance Gate",
                body: "Only if the observed excess clears the threshold (3σ evidence, 5σ discovery) do you report a new signal. Otherwise: consistent with background.",
              },
            ].map((s) => (
              <div key={s.n} className="border-2 border-ink bg-bg p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">{s.n}</p>
                <p className="text-sm font-bold mb-2">{s.title}</p>
                <p className="text-[12px] leading-relaxed text-ink/80">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink/90">
            Standard RAG has neither step. σ-RAG applies the same logic to embedding space: estimate
            the background distribution of cosine similarities between unrelated document pairs,
            then gate retrieval on whether a chunk clears the significance threshold.
          </p>
        </Card>

        {/* ── 5. How It Works ── */}
        <Card>
          <SectionLabel>Mechanism</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">How the Noise Floor Works</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-4">
            The key insight: cosine similarities between <em>random, unrelated document pairs</em> form
            a distribution — the background. Sample enough cross-document pairs from your corpus and
            you get a Gaussian with mean μ and standard deviation σ. This is the baseline — what a
            background-level (irrelevant) match looks like in your particular embedding space.
          </p>
          <CodeBlock
            label="threshold formula"
            code={`threshold = μ_background + n·σ_background   # default n = 2

# At n=2:  false-alarm rate ≈ 2.3%
# At n=3:  false-alarm rate ≈ 0.13%
# At n=5:  false-alarm rate ≈ 2.9 × 10⁻⁷  (LHC discovery bar)`}
          />
          <p className="text-sm leading-relaxed text-ink/90 mt-4">
            A chunk clears the bar only if its cosine similarity to the query exceeds the threshold.
            If zero chunks clear the bar, the pipeline returns a calibrated &ldquo;no evidence&rdquo; response
            and <strong>never calls the LLM</strong>. No background context → no hallucination opportunity.
          </p>
          <Diagram
            src="/projects/sigma-rag/fig1_noise_floor.png"
            alt="Background distribution of cosine similarities with threshold lines"
            caption="Figure 1 — The noise floor: background distribution (blue) vs. in-domain query similarities (orange). The 2σ, 3σ, and 5σ threshold lines divide background noise from genuine signal."
          />
          <p className="text-sm leading-relaxed text-ink/90">
            The background is estimated from <strong>cross-document pairs only</strong> — pairs from
            the same document are naturally more similar and would inflate the noise floor. This is
            analogous to measuring background in a sideband rather than in the signal region itself.
          </p>
        </Card>

        {/* ── 6. Quick Start ── */}
        <Card>
          <SectionLabel>Usage</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Getting Started</h2>
          <CodeBlock
            label="install"
            code={`pip install sigma-rag           # core (numpy only)
pip install "sigma-rag[local]"  # + sentence-transformers (recommended)`}
          />
          <CodeBlock
            label="quickstart.py"
            code={`from sigma_rag import SigmaIndex, SigmaRAGPipeline

# 1. Build index
index = SigmaIndex()
index.add_documents(corpus_docs)
index.calibrate()   # fits the noise floor from cross-document pairs

# 2. Query — only statistically significant chunks reach the LLM
pipeline = SigmaRAGPipeline(index, n_sigma=2.0)

# Answerable query
response = pipeline.query("What significance level was required for the Higgs discovery?")
print(response.has_evidence)          # True
print(len(response.retrieval.significant))  # e.g. 2

# Unanswerable query — suppressed before the LLM is ever called
response = pipeline.query("What is the best carbonara recipe?")
print(response.has_evidence)          # False  ← hallucination prevented`}
          />
        </Card>

        {/* ── 7. Benchmark Results ── */}
        <Card>
          <SectionLabel>Benchmark Results</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Suppression vs. Coverage Tradeoff</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-2">
            The key question: as you raise the σ threshold, how quickly do you suppress
            out-of-domain queries, and does in-domain coverage hold up? The sweet spot is where both
            curves sit at 100% simultaneously.
          </p>
          <Diagram
            src="/projects/sigma-rag/fig2_suppression_vs_sigma.png"
            alt="OOD suppression vs in-domain answer coverage across sigma levels"
            caption="Figure 2 — At ~3.1σ, 100% of OOD queries are suppressed while 100% of in-domain queries are still answered. The default 2σ already hits 100% OOD suppression on this corpus."
          />
          <div className="mt-4 border-l-4 border-accent pl-5">
            <p className="text-sm font-bold">Finding: 2σ is the right default for most corpora.</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/80">
              At 2σ, out-of-domain suppression is already 100% with essentially no loss on
              answerable queries. Higher thresholds trade recall for precision — useful when you want
              the system to be very conservative about answering.
            </p>
          </div>
        </Card>

        <Card>
          <SectionLabel>Context Size</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">How Much Context Reaches the LLM?</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-2">
            Top-k grows your LLM context linearly with k regardless of relevance. σ-RAG adapts —
            passing fewer chunks on in-domain queries (less noise) and zero on unanswerable ones.
          </p>
          <Diagram
            src="/projects/sigma-rag/fig3_context_size.png"
            alt="Average chunks passed to LLM: sigma-RAG vs top-k"
            caption="Figure 3 — Left: in-domain queries. Right: OOD queries. The right panel is the key result — top-k blindly passes k chunks of noise while σ-RAG flatlines at zero."
          />
        </Card>

        <Card>
          <SectionLabel>Precision & Recall</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Precision–Recall on In-Domain Queries</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-2">
            Varying σ traces a smooth precision-recall curve. Top-k collapses to a few discrete
            points. σ-RAG gives you a continuous operating point dial — tighten σ for higher
            precision, relax it for higher recall.
          </p>
          <Diagram
            src="/projects/sigma-rag/fig4_precision_recall.png"
            alt="Precision-recall curve: sigma-RAG vs top-k"
            caption="Figure 4 — σ-RAG traces a continuous curve as σ varies. The 3σ operating point achieves high precision at good recall, outperforming top-k=3 on both dimensions."
          />
        </Card>

        {/* ── 8. Architecture ── */}
        <Card>
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Package Design</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-6">
            Designed to be dependency-free at the core — only NumPy required. Heavier dependencies
            are optional extras that unlock progressively better embeddings.
          </p>
          <div className="space-y-3">
            {[
              {
                name: "SigmaIndex",
                description: "Core index. Manages chunks, embeddings, and the noise floor. Call .add_documents() then .calibrate().",
              },
              {
                name: "NoiseFloor",
                description: "Estimates the background distribution from random cross-document pairs. Exposes .threshold(n_sigma), .z_score(), and .false_alarm_rate().",
              },
              {
                name: "SigmaRetriever",
                description: "Returns only chunks that clear the significance threshold. Configurable n_sigma and max_results.",
              },
              {
                name: "SigmaRAGPipeline",
                description: "End-to-end pipeline. Retrieves significant chunks, calls the LLM, and returns a structured response with has_evidence flag.",
              },
              {
                name: "Embedder backends",
                description: "HashEmbedder (zero-dependency), SentenceTransformerEmbedder (local), OpenAIEmbedder (API). Auto-detected at runtime.",
              },
            ].map((item) => (
              <div key={item.name} className="border-2 border-ink bg-bg p-4 shadow-brutal-sm">
                <div className="mb-2 flex items-center gap-2">
                  <span className="border-2 border-ink bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ink">
                    class
                  </span>
                  <code className="text-sm font-bold text-ink">{item.name}</code>
                </div>
                <p className="text-sm leading-relaxed text-ink/80">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* ── 9. Implementation Notes ── */}
        <Card>
          <SectionLabel>Implementation Notes</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Interesting Engineering Decisions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Why zero-dependency core?",
                a: "scipy and sentence-transformers are heavy installs. Users who just want to try the concept shouldn't have to pull in gigabytes of ML dependencies. The HashEmbedder (bag-of-words with hashing) works with only numpy — it's less accurate but useful for prototyping and testing.",
              },
              {
                q: "Why cross-document pairs only for calibration?",
                a: "Chunks from the same document are naturally more similar than random — they share vocabulary, style, and topic. Using same-document pairs would inflate the noise floor estimate, making the threshold too conservative. Cross-document pairs give a cleaner null distribution, analogous to measuring background in a sideband region.",
              },
              {
                q: "What is the KS test warning for?",
                a: "After fitting, a Kolmogorov-Smirnov test checks whether the sampled similarities actually follow a Gaussian. With hash embedders on small corpora, they often don't — the distribution is multimodal or heavy-tailed. The warning flags when the threshold's false-alarm semantics are approximate, and suggests switching to sentence-transformers for production.",
              },
              {
                q: "What is the pure-numpy normal CDF?",
                a: "Computing threshold and false-alarm rate requires the Gaussian survival function. scipy provides this, but σ-RAG implements a pure-numpy version via the math.erfc identity so the core works without scipy. When scipy is installed, it's used automatically for better numerical precision.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-ink pl-5">
                <p className="text-sm font-bold">{item.q}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">{item.a}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* ── 10. Threshold Semantics ── */}
        <Card>
          <SectionLabel>Threshold Guide</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Choosing Your σ Level</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-6">
            The σ threshold directly controls the false-alarm rate — the probability a genuinely
            irrelevant chunk clears the bar. Lower σ = more recall, higher false-alarm rate.
            Higher σ = more precision, lower false-alarm rate.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-ink text-sm">
              <thead>
                <tr className="border-b-2 border-ink bg-ink text-bg">
                  <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest">σ Level</th>
                  <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest">False-alarm Rate</th>
                  <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest">Physics Analogy</th>
                  <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest">Use Case</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sigma: "1σ", far: "~15.9%", analogy: "Below evidence threshold", use: "High recall, tolerates noise" },
                  { sigma: "2σ", far: "~2.3%", analogy: "Borderline evidence", use: "Default — good balance" },
                  { sigma: "3σ", far: "~0.13%", analogy: "Evidence (3σ bar)", use: "High precision, conservative" },
                  { sigma: "5σ", far: "2.9 × 10⁻⁷", analogy: "Discovery (LHC bar)", use: "Only rock-solid matches" },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-ink/30 ${row.sigma === "2σ" ? "bg-accent/20" : ""}`}>
                    <td className="px-4 py-3 font-bold">{row.sigma} {row.sigma === "2σ" && <span className="ml-2 border-2 border-ink bg-accent px-1 text-[9px] uppercase tracking-widest">default</span>}</td>
                    <td className="px-4 py-3 font-mono text-ink/80">{row.far}</td>
                    <td className="px-4 py-3 text-ink/80">{row.analogy}</td>
                    <td className="px-4 py-3 text-ink/80">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* ── 11. What's Next ── */}
        <Card>
          <SectionLabel>What&apos;s Next</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Open Questions</h2>
          <div className="space-y-3">
            {[
              { tag: "Research", title: "Learned Background Models", body: "For very small corpora, the Gaussian approximation degrades. A kernel density estimate or normalizing flow might model the null distribution more accurately — the same trade-off between parametric and non-parametric background modelling in HEP analyses." },
              { tag: "Research", title: "Per-Query Calibration", body: "The background varies across query types (domain-specific vs. general). A query-conditional threshold might be more principled than a global one — similar to how physics analyses use different background models in different kinematic regions." },
              { tag: "Engineering", title: "Streaming & Async", body: "Large corpora benefit from streaming calibration rather than loading all embeddings into memory. An async pipeline would enable production-scale deployments." },
              { tag: "Engineering", title: "BEIR Benchmark Integration", body: "Systematic evaluation on standard IR benchmarks (BEIR, MTEB) to quantify the precision-recall tradeoff at different σ levels across diverse domains." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 border-2 border-ink bg-bg p-4">
                <div className={`shrink-0 border-2 border-ink px-2 py-1 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ${item.tag === "Research" ? "bg-accent text-ink" : "bg-bg text-muted"}`}>
                  {item.tag}
                </div>
                <div>
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-ink/80">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Footer nav */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-ink pt-8">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-bold text-ink transition hover:text-accent"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>
          <div className="flex gap-3">
            <a
              href="https://pypi.org/project/sigma-rag/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-ink bg-accent px-4 py-2 text-sm font-bold text-ink shadow-brutal-sm transition hover:bg-ink hover:text-accent"
            >
              <ArrowUpRight size={14} />
              PyPI
            </a>
            <a
              href="https://github.com/kpal002/sigma-rag"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-ink bg-ink px-4 py-2 text-sm font-bold text-bg shadow-brutal-sm transition hover:text-accent"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
