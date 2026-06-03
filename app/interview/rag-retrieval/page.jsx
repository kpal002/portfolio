import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import katex from "katex";

export const metadata = {
  title: "RAG Architecture & Evaluation — Kuntal Pal",
  description:
    "Comprehensive study notes on RAG: pipeline architecture, chunking strategies, embedding models, vector databases, retrieval methods, evaluation metrics, failure modes, and production considerations.",
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

function BoldBulletList({ items }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink/90">
          <span className="mt-0.5 shrink-0 font-bold text-accent">→</span>
          <span>
            <strong>{item.label}:</strong> {item.desc}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CompareTable({ headers, rows }) {
  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full border-2 border-ink text-sm">
        <thead>
          <tr className="border-b-2 border-ink bg-ink text-bg">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-ink/30">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 leading-relaxed ${j === 0 ? "font-bold text-ink" : "text-ink/80"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBlock({ code, label }) {
  return (
    <div className="my-4 border-2 border-ink">
      {label && (
        <div className="border-b-2 border-ink bg-ink px-4 py-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{label}</span>
        </div>
      )}
      <pre className="overflow-x-auto bg-ink p-5 text-[12px] leading-relaxed text-accent">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function InterviewCallout({ label = "Interview Answer", children }) {
  return (
    <div className="mt-6 border-l-4 border-accent pl-5">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">
        <span className="text-accent">▸ </span>{label}
      </p>
      <p className="text-sm leading-relaxed text-ink/80">{children}</p>
    </div>
  );
}

function Insight({ label = "Key Insight", children }) {
  return (
    <div className="mt-6 border-l-4 border-accent pl-5">
      <p className="text-sm font-bold">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-ink/80">{children}</p>
    </div>
  );
}

function KatexLine({ tex }) {
  const html = katex.renderToString(tex, { throwOnError: false, displayMode: false });
  return (
    <div
      className="text-accent [&_.katex]:text-accent [&_.katex-html]:text-accent overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function MathBlock({ label, lines }) {
  return (
    <div className="my-4 border-2 border-ink">
      {label && (
        <div className="border-b-2 border-ink bg-ink px-4 py-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{label}</span>
        </div>
      )}
      <div className="bg-ink px-6 py-5 space-y-4 overflow-x-auto">
        {lines.map((line, i) =>
          line === "" ? (
            <div key={i} className="h-1" />
          ) : (
            <KatexLine key={i} tex={line} />
          )
        )}
      </div>
    </div>
  );
}

export default function RAGStudyNotesPage() {
  return (
    <div className="min-h-screen bg-bg font-mono text-ink">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/#interview-prep"
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
            <span className="text-accent">{">"} </span>study notes · amazon applied scientist ii
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            RAG Architecture {"&"} Evaluation
          </h1>
          <p className="mb-6 text-base leading-relaxed text-ink/80">
            Comprehensive notes covering retrieval-augmented generation end-to-end: pipeline
            architecture, chunking strategies, embedding models, vector databases, retrieval methods,
            evaluation metrics, failure modes, and production considerations.
          </p>
          <ul className="flex flex-wrap gap-2">
            {["RAG", "Embeddings", "Vector DBs", "BM25", "NDCG", "RAGAS", "Agentic RAG", "Production ML"].map((t) => (
              <li key={t} className="border-2 border-ink bg-bg px-2 py-0.5 text-[11px] font-bold">
                {t}
              </li>
            ))}
          </ul>
        </Card>

        {/* ── 2. Why LLMs Hallucinate ── */}
        <Card>
          <SectionLabel>Background</SectionLabel>
          <h2 className="mb-6 text-xl font-bold">Why LLMs Hallucinate: 3-Point Summary</h2>
          <div className="space-y-5">
            {[
              {
                n: "01",
                title: "Next-Token Prediction Without Ground Truth or Labels",
                body: "LLMs work by predicting the next word based on patterns in pretraining data — but crucially, there are no true/false labels. The model only learns to mimic the language distribution of fluent text, not to distinguish valid facts from false ones. This means hallucinations are built in: when uncertain, it generates whatever sounds most plausible statistically, with no mechanism to verify against reality.",
              },
              {
                n: "02",
                title: "Training Data Contains Noise and Incomplete Coverage",
                body: "Models learn from training data that includes misinformation, outdated facts, rare knowledge gaps, and conflicting sources. They can't distinguish between common in my training and true, so they hallucinate when filling gaps with statistically plausible but incorrect information.",
              },
              {
                n: "03",
                title: "Evaluation Metrics Reward Guessing Over Uncertainty",
                body: "Standard benchmarks measure accuracy only, which incentivizes models to guess rather than admit uncertainty — guessing a birthday has a 1-in-365 chance of being right, while saying I don't know scores zero. This creates perverse incentives during training where confident hallucinations are rewarded over honest abstention.",
              },
            ].map((item) => (
              <div key={item.n} className="border-2 border-ink bg-bg p-5 shadow-brutal-sm">
                <div className="mb-2 flex items-center gap-3">
                  <span className="border-2 border-ink bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ink">
                    {item.n}
                  </span>
                  <p className="text-sm font-bold">{item.title}</p>
                </div>
                <p className="text-sm leading-relaxed text-ink/80">{item.body}</p>
              </div>
            ))}
          </div>
          <Insight label="RAG addresses the gap these failures expose.">
            By grounding the model in externally retrieved documents at inference time, RAG replaces
            statistical guessing with evidence-backed generation — and makes answers auditable.
          </Insight>
        </Card>

        {/* ── 3. What is RAG ── */}
        <Card>
          <SectionLabel>Section 1</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">What is RAG and Why It Exists</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Retrieval-Augmented Generation (RAG) is a framework that enhances LLMs by grounding their
            outputs in externally retrieved documents. Instead of relying purely on parametric knowledge
            baked into model weights during training, RAG retrieves relevant context at inference time
            and injects it into the prompt.
          </p>
          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">The Core Problem RAG Solves</p>
          <BoldBulletList items={[
            { label: "Knowledge cutoff", desc: "LLMs have a training cutoff date and cannot answer questions about recent events without retrieval." },
            { label: "Hallucination", desc: "LLMs generate plausible-sounding but factually incorrect text. Retrieved documents ground the answer in real sources." },
            { label: "Domain specificity", desc: "General-purpose LLMs lack proprietary or niche domain knowledge (e.g., sustainability emissions factors, internal policy documents)." },
            { label: "Auditability", desc: "RAG outputs can be traced back to source documents — critical for sustainability claims verification." },
          ]} />
          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">RAG Generations</p>
          <CompareTable
            headers={["Generation", "Key Characteristics"]}
            rows={[
              ["Naive RAG", "Index → Retrieve → Generate. Simple pipeline, brittle on complex queries."],
              ["Advanced RAG", "Pre-retrieval (query rewriting) + post-retrieval (re-ranking, filtering). Better precision."],
              ["Modular RAG", "Plug-and-play components. Routing, fusion, self-correction loops. Most production systems."],
            ]}
          />
          <InterviewCallout>
            RAG combines the parametric knowledge of an LLM with non-parametric retrieval from an
            external corpus. This lets the model answer questions about recent, proprietary, or
            domain-specific information while reducing hallucination by grounding responses in
            retrieved evidence.
          </InterviewCallout>
        </Card>

        {/* RAG vs Fine-tuning */}
        <Card>
          <SectionLabel>Decision Framework</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">RAG vs Fine-tuning</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-6">
            One of the most common interview questions in applied LLM roles. The answer isn't
            either/or — but knowing when each is the right tool matters.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            {/* Choose RAG */}
            <div className="border-2 border-ink bg-bg p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">
                ✓ Choose RAG when
              </p>
              <ul className="space-y-3">
                {[
                  { bold: "Knowledge changes frequently", rest: " — re-indexing is cheap; retraining is expensive." },
                  { bold: "You need source attribution", rest: " — answers can be traced back to specific documents. Critical for claims verification." },
                  { bold: "Domain knowledge is large", rest: " — fine-tuning can't realistically encode millions of documents into weights." },
                  { bold: "You need to reduce hallucination", rest: " — grounding in retrieved documents is more reliable than parametric memory." },
                  { bold: "Limited compute budget", rest: " — no GPU training required, just inference + vector search." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink/90">
                    <span className="shrink-0 text-accent font-bold mt-0.5">→</span>
                    <span><strong>{item.bold}</strong>{item.rest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Choose Fine-tuning */}
            <div className="border-2 border-ink bg-bg p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-4">
                ✓ Choose Fine-tuning when
              </p>
              <ul className="space-y-3">
                {[
                  { bold: "You need a specific style or output format", rest: " — RAG can't change how the model writes." },
                  { bold: "Teaching a new task or behavior", rest: " — structured JSON extraction, domain-specific reasoning, custom instruction formats." },
                  { bold: "Specialized vocabulary", rest: " — fine-tuning embeds domain terms into weights that the base model doesn't understand." },
                  { bold: "Latency is critical", rest: " — no retrieval step means faster inference." },
                  { bold: "Knowledge is stable and bounded", rest: " — if facts don't change, baking them into weights is fine." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink/90">
                    <span className="shrink-0 text-accent font-bold mt-0.5">→</span>
                    <span><strong>{item.bold}</strong>{item.rest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* In practice callout */}
          <div className="border-2 border-ink bg-accent p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-ink mb-3">
              In practice — the answer is usually both
            </p>
            <p className="text-sm leading-relaxed text-ink">
              <strong>Fine-tune the model to behave correctly in your domain</strong> — output format,
              reasoning style, instruction following. Then <strong>add RAG on top</strong> to supply
              current, specific factual knowledge. This is the production pattern at most mature ML teams.
            </p>
          </div>
        </Card>

        {/* ── 4. Pipeline Architecture ── */}
        <Card>
          <SectionLabel>Section 2</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">RAG Pipeline Architecture — End to End</h2>
          <p className="mb-6 text-sm leading-relaxed text-ink/90">
            A production RAG pipeline has two distinct phases: offline indexing and online retrieval-generation.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border-2 border-ink bg-bg p-5">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-muted">Phase 1 — Offline Indexing</p>
              <div className="space-y-3">
                {[
                  { step: "01", label: "Document ingestion", desc: "Load raw documents (PDFs, HTML, JSON, CSVs, internal databases)." },
                  { step: "02", label: "Preprocessing", desc: "Clean text — remove boilerplate, normalize whitespace, handle special characters." },
                  { step: "03", label: "Chunking", desc: "Split documents into smaller, semantically coherent pieces." },
                  { step: "04", label: "Embedding", desc: "Encode each chunk into a dense vector using an embedding model." },
                  { step: "05", label: "Indexing", desc: "Store vectors in a vector database with metadata (source, date, document ID, chunk ID)." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-3 text-sm">
                    <span className="shrink-0 font-bold text-accent">{s.step}</span>
                    <span><strong>{s.label}:</strong> {s.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 border-accent bg-bg p-5">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-muted">Phase 2 — Online Retrieval-Generation</p>
              <div className="space-y-3">
                {[
                  { step: "01", label: "Query processing", desc: "Optionally rewrite or expand the user query." },
                  { step: "02", label: "Query embedding", desc: "Encode the query using the same embedding model used at index time." },
                  { step: "03", label: "Retrieval", desc: "Perform ANN search to find top-K relevant chunks." },
                  { step: "04", label: "Re-ranking", desc: "Apply a cross-encoder to re-score top-K candidates more precisely." },
                  { step: "05", label: "Context assembly", desc: "Select and format retrieved chunks into a prompt context window." },
                  { step: "06", label: "Generation", desc: "Pass query + context to the LLM. The model generates a grounded answer." },
                  { step: "07", label: "Post-processing", desc: "Citation extraction, answer validation, faithfulness checking." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-3 text-sm">
                    <span className="shrink-0 font-bold text-accent">{s.step}</span>
                    <span><strong>{s.label}:</strong> {s.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Insight>
            The embedding model used at query time MUST be identical to the one used at indexing time.
            Switching embedding models requires re-indexing the entire corpus.
          </Insight>
        </Card>

        {/* ── 5. Chunking Strategies ── */}
        <Card>
          <SectionLabel>Section 3</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Chunking Strategies</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Chunking is one of the highest-impact decisions in RAG. Too large = diluted relevance signal,
            context overflow. Too small = loses context, incomplete answers.
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                title: "Fixed-Size Chunking",
                body: "Split document every N tokens (e.g., 512) with optional overlap (e.g., 50 tokens). Simple, fast, predictable chunk sizes — but cuts mid-sentence or mid-paragraph, breaking semantic units. Use when documents are uniform and structured (database records, short product descriptions).",
              },
              {
                title: "Sentence-Based Chunking",
                body: "Use sentence boundary detection (spaCy, NLTK) to split at natural breaks. Preserves semantic units better than fixed-size, but chunks vary widely in size and very short sentences create noisy small chunks.",
              },
              {
                title: "Semantic / Embedding-Based Chunking",
                body: "Embed each sentence and group consecutive sentences whose embeddings are similar (cosine similarity above threshold). Split when similarity drops sharply. Produces semantically coherent chunks but is computationally expensive. Best for long heterogeneous documents (research papers, sustainability reports, legal docs).",
              },
              {
                title: "Hierarchical / Parent-Child Chunking",
                body: "Index small child chunks (e.g., 128 tokens) for retrieval precision but return larger parent chunks (e.g., 512 tokens) to the LLM for context richness. Best of both worlds — precise retrieval + rich context for generation. Store parent_id as metadata on each child chunk; fetch parent on retrieval.",
              },
              {
                title: "Document-Structure-Aware Chunking",
                body: "Use document structure signals — headings, sections, tables, figures — to define chunk boundaries. Markdown: split at ## heading boundaries. PDF: use layout analysis to detect section breaks. HTML: use tag structure (div, section, article) as split points.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-ink pl-5">
                <p className="text-sm font-bold">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Strategy Comparison</p>
          <CompareTable
            headers={["Strategy", "Best For", "Watch Out For"]}
            rows={[
              ["Fixed-size", "Uniform short docs", "Mid-sentence cuts"],
              ["Sentence-based", "Narrative text", "Size variance"],
              ["Semantic", "Research papers, reports", "Compute cost"],
              ["Hierarchical", "Production RAG", "Complex retrieval logic"],
              ["Structure-aware", "PDFs, HTML, Markdown", "Parser fragility"],
            ]}
          />
          {/* Chunk size callout */}
          <div className="mt-6 mb-2 flex items-center gap-2">
            <div className="h-3 w-3 shrink-0 border-2 border-ink bg-accent" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Chunk Size Matters More Than People Think</p>
          </div>
          <div className="space-y-3 mb-6">
            {[
              {
                range: "Too small (64–128 tokens)",
                verdict: "bad",
                body: `Each chunk lacks context. "It increased 15% last quarter" means nothing without knowing what "it" refers to.`,
              },
              {
                range: "Too large (2048+ tokens)",
                verdict: "bad",
                body: "Each chunk covers multiple topics, diluting relevance. When you search for revenue data, you get a chunk that's 10% about revenue and 90% about headcount.",
              },
              {
                range: "Sweet spot (256–512 tokens)",
                verdict: "good",
                body: "Enough context to be self-contained, focused enough to be relevant. Most production RAG systems use 256–512 token chunks with 50-token overlap. Anthropic's RAG guidelines recommend this range.",
              },
            ].map((item) => (
              <div
                key={item.range}
                className={`border-2 border-ink p-4 flex gap-4 items-start ${item.verdict === "good" ? "bg-accent" : "bg-bg"}`}
              >
                <span className={`shrink-0 font-bold text-sm ${item.verdict === "good" ? "text-ink" : "text-red-600"}`}>
                  {item.verdict === "good" ? "✓" : "✗"}
                </span>
                <div>
                  <p className={`text-sm font-bold mb-1 ${item.verdict === "good" ? "text-ink" : "text-ink"}`}>{item.range}</p>
                  <p className={`text-sm leading-relaxed ${item.verdict === "good" ? "text-ink/90" : "text-ink/75"}`}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <InterviewCallout label="Interview Answer — Chunking Trade-off">
            Smaller chunks improve retrieval precision because the embedding focuses on a narrow topic.
            But smaller chunks give the LLM less context, risking incomplete answers. Hierarchical
            chunking is the production best practice: retrieve small, generate with large.
          </InterviewCallout>
        </Card>

        {/* ── 6. Embedding Models ── */}
        <Card>
          <SectionLabel>Section 4</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Embedding Models</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Embedding models convert text into dense vectors. The quality of embeddings directly
            determines retrieval quality — garbage embeddings mean garbage retrieval, no matter how
            good your LLM is.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Evolution of Text Embeddings</p>
          <BoldBulletList items={[
            { label: "TF-IDF / BM25 (sparse)", desc: "Bag-of-words representation. High-dimensional sparse vectors. No semantic understanding — 'car' and 'automobile' are unrelated." },
            { label: "Word2Vec / GloVe (dense, word-level)", desc: "Each word gets a fixed vector learned from co-occurrence statistics. Cannot handle polysemy ('bank' = riverbank or financial bank?). No context-sensitivity." },
            { label: "BERT-based (contextual, token-level)", desc: "Each token gets a vector that depends on surrounding context. Handles polysemy. But designed for classification, not retrieval." },
            { label: "Sentence Transformers / SBERT", desc: "Fine-tuned BERT with siamese/triplet network to produce sentence-level embeddings optimized for semantic similarity. State of the art for RAG retrieval." },
            { label: "OpenAI text-embedding-3", desc: "API-based, 1536 or 3072 dimensions, strong performance. No control over training, cost per token." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Bi-Encoder vs. Cross-Encoder</p>
          <CompareTable
            headers={["Bi-Encoder", "Cross-Encoder"]}
            rows={[
              ["Encodes query and document independently", "Encodes query and document together (concatenated)"],
              ["Can pre-compute document embeddings offline", "Must run at query time — cannot pre-compute"],
              ["O(1) query time with vector DB (ANN search)", "O(N) — must score every candidate"],
              ["Less accurate — context-free comparison", "More accurate — attends to query-doc interaction"],
              ["Use for: first-stage retrieval (top-K)", "Use for: re-ranking the top-K results"],
            ]}
          />
          <Insight label="Key Interview Point">
            Bi-encoders and cross-encoders are almost always used together. Bi-encoder retrieves
            top-100 candidates fast. Cross-encoder re-ranks those 100 to find the best 5. This is
            the standard two-stage retrieval pipeline.
          </Insight>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Contrastive Learning Objectives</p>
          <BoldBulletList items={[
            { label: "InfoNCE loss", desc: "For a positive pair (query, relevant doc), maximize similarity relative to N negative pairs. Softmax over all pairs. Used in DPR, E5." },
            { label: "Triplet loss", desc: "Anchor + positive + negative. Minimize distance(anchor, positive) minus distance(anchor, negative) + margin." },
            { label: "SimCLR", desc: "Self-supervised contrastive learning. Augmentations of the same input are positive pairs. Useful for multimodal embeddings." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Similarity Metrics</p>
          <CompareTable
            headers={["Metric", "When to Use"]}
            rows={[
              ["Cosine similarity", "When magnitude doesn't matter — only direction. Works well for normalized embeddings. Most common for text retrieval."],
              ["Dot product", "When magnitude matters. Faster than cosine (no normalization). Used in MIPS (Maximum Inner Product Search)."],
              ["Euclidean distance", "When absolute position in space matters. Less common for text. Used in image embeddings."],
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Dimensionality Reduction</p>
          <BoldBulletList items={[
            { label: "PCA", desc: "Linear projection onto principal components. Preserves global variance. Fast but loses non-linear structure." },
            { label: "UMAP", desc: "Non-linear. Preserves local neighborhood structure better than t-SNE. Good for visualization and approximate compression." },
            { label: "Matryoshka embeddings", desc: "Train embeddings so that the first D dimensions are a good representation — allows truncating at inference time for speed/storage trade-offs." },
          ]} />
        </Card>

        {/* ── 7. Vector Databases ── */}
        <Card>
          <SectionLabel>Section 5</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Vector Databases — Trade-offs</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Vector databases are purpose-built for Approximate Nearest Neighbor (ANN) search over
            dense embeddings. The key trade-off in all of them: recall vs. speed vs. memory.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Core ANN Index Types</p>
          <BoldBulletList items={[
            { label: "HNSW (Hierarchical Navigable Small World)", desc: "Graph-based index. High recall, fast queries, but high memory usage. Default in Weaviate, Qdrant, Milvus. Best general-purpose choice." },
            { label: "IVF (Inverted File Index)", desc: "Cluster-based. Divides space into Voronoi cells. Fast build, lower memory. Must tune nprobe (how many clusters to search). Used in FAISS." },
            { label: "PQ (Product Quantization)", desc: "Compresses vectors by quantizing sub-spaces. 8–32x compression. Combined with IVF as IVF+PQ for large-scale deployment. Lower recall." },
            { label: "Flat Index", desc: "Exact brute-force search. Perfect recall. Only viable for small corpora (< 1M vectors)." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Vector Database Comparison</p>
          <CompareTable
            headers={["DB", "Best For", "Key Trade-off"]}
            rows={[
              ["FAISS", "Research, offline batch search, when you own infra", "No built-in persistence/filtering; library not a server"],
              ["Pinecone", "Managed cloud, fast setup, production SaaS", "Cost at scale; less control over index tuning"],
              ["Weaviate", "Hybrid search (dense + sparse), filtering, GraphQL API", "Higher ops complexity; self-hosted by default"],
              ["Chroma", "Local dev, prototyping, small-scale apps", "Not production-grade at large scale"],
              ["pgvector", "Already using PostgreSQL; want SQL + vector in one place", "Slower than dedicated vector DBs at scale"],
              ["Qdrant", "High-performance, Rust-based, great filtering", "Newer, smaller ecosystem"],
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Key Parameters to Tune</p>
          <BoldBulletList items={[
            { label: "ef_construction (HNSW)", desc: "Controls index build quality. Higher = better recall, slower build." },
            { label: "ef (HNSW query)", desc: "Controls search quality at query time. Higher = better recall, slower query." },
            { label: "nprobe (IVF)", desc: "Number of clusters searched per query. Higher = better recall, slower." },
            { label: "m (HNSW)", desc: "Number of connections per node. Higher = better recall, more memory." },
          ]} />
          <InterviewCallout label="Interview Answer — Vector DB Choice">
            For prototyping: Chroma or FAISS. For production with filtering and hybrid search: Weaviate
            or Qdrant. If the team is already on AWS/GCP with managed infra preferences: Pinecone.
            The key question is: do you need metadata filtering alongside vector search? If yes,
            avoid FAISS (no filtering) and use a server-based DB.
          </InterviewCallout>
        </Card>

        {/* ── 8. ANN Algorithms ── */}
        <Card>
          <SectionLabel>Section 6</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">ANN Algorithms — How Vector Search Actually Works</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-6">
            Every vector database under the hood uses an Approximate Nearest Neighbor (ANN) index. Understanding
            these algorithms is essential for production RAG — they control the recall/speed/memory triangle
            that governs retrieval performance.
          </p>

          {/* Why ANN Exists */}
          <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Why ANN Exists — The Scaling Problem</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-4">
            The naive approach — compare the query against every stored vector — is called exact nearest neighbor search.
          </p>
          <div className="mb-4 border-2 border-ink bg-bg p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Exact Search Complexity</p>
            <div className="space-y-1 text-sm font-mono text-ink/80">
              <p>N = number of vectors · D = embedding dimension</p>
              <p>Cost per query = O(N × D)</p>
              <p className="mt-2">OpenAI text-embedding-3-large: N=1M docs, D=3,072</p>
              <p>Operations per query = <strong>3,000,000,000</strong> — infeasible at scale</p>
            </div>
          </div>
          <Insight label="The ANN Solution">
            Accept a small, controlled drop in recall (e.g., 95–99% instead of 100%) in exchange for
            10–1000× speed improvement. Build data structures that skip the vast majority of vectors and
            only check a small promising subset.
          </Insight>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">The Core Trade-off Triangle</p>
          <CompareTable
            headers={["Dimension", "What It Means", "How to Tune"]}
            rows={[
              ["Recall", "% of true nearest neighbors found. 100% = exact search.", "Increase ef (HNSW), nprobe (IVF), L (LSH)"],
              ["Speed", "Query latency — how fast you get an answer.", "Decrease ef, nprobe, or L"],
              ["Memory", "RAM needed to store the index.", "Use PQ compression, reduce M (HNSW)"],
            ]}
          />

          {/* KD-Trees */}
          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">KD-Trees — Space Partitioning</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            Recursively partitions the vector space by splitting on one dimension at a time, building a binary tree.
            At query time, traverse the tree and prune branches that cannot possibly contain a nearer neighbor.
          </p>
          <BoldBulletList items={[
            { label: "Building", desc: "At each node, split on the dimension with highest variance. Recursively partition left/right subtrees until leaf size is small." },
            { label: "Pruning rule", desc: "Skip a subtree if the distance from the query to the split hyperplane is greater than the current best distance." },
          ]} />
          <div className="mt-4 border-2 border-ink bg-bg p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Curse of Dimensionality</p>
            <p className="text-sm text-ink/80">
              In high dimensions, points are spread so far apart that the distance to any split hyperplane is almost
              always smaller than the best distance found — so almost no branches get pruned. The tree degenerates
              to brute force.
            </p>
            <div className="mt-3 space-y-1 text-sm font-mono">
              <p><span className="text-accent font-bold">✓</span> D {"<"} 20 → KD-tree works well</p>
              <p><span className="text-accent font-bold">~</span> D = 50 → starts degrading</p>
              <p><span className="text-red-500 font-bold">✗</span> D {">"} 100 → essentially brute force</p>
              <p><span className="text-red-500 font-bold">✗</span> Modern embeddings: D = 384–3072 → useless</p>
            </div>
          </div>
          <InterviewCallout label="Interview Answer — KD-Trees">
            KD-trees work great for GPS coordinates or simple feature vectors (D{"<"}20). Modern text embeddings
            have D=768–3072. The curse of dimensionality means almost no branches get pruned — the tree degenerates
            to brute force. HNSW or IVF are the right choices for embedding search.
          </InterviewCallout>

          {/* Ball Trees */}
          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Ball Trees — Hypersphere Partitioning</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            Like KD-trees but partition space into hyperspheres instead of hyperplanes. Handles non-axis-aligned
            clusters better and works in slightly higher dimensions.
          </p>
          <BoldBulletList items={[
            { label: "Building", desc: "Each node defines a ball: (center=centroid, radius=max distance to any point). Split by picking two furthest seeds, assign points to nearest seed, recurse." },
            { label: "Pruning rule", desc: "Skip a ball if: dist(query, center) - radius > best_dist_so_far. I.e., even the closest possible point in the ball can't beat the current best." },
          ]} />
          <CompareTable
            headers={["Ball Trees", "KD-Trees"]}
            rows={[
              ["Partition into hyperspheres", "Partition into axis-aligned hyperrectangles"],
              ["Better for non-axis-aligned clusters", "Better for axis-aligned data"],
              ["Works up to D ≈ 50", "Works up to D ≈ 20"],
              ["Slower to build", "Faster to build"],
              ["Both fail above D ≈ 50–100 — use HNSW", "Both fail above D ≈ 50–100 — use HNSW"],
            ]}
          />

          {/* LSH */}
          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">LSH — Locality Sensitive Hashing</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            Design hash functions where <strong>similar vectors are more likely to produce the same hash value</strong>.
            Opposite of cryptographic hashes which deliberately make similar inputs produce different hashes.
          </p>
          <BoldBulletList items={[
            { label: "Random Projection LSH", desc: "Project vectors onto random unit vectors. Similar vectors land near each other on the line. Divide into buckets — similar vectors fall into the same bucket." },
            { label: "K hash functions per table", desc: "Use K hash functions and require all K to agree. Higher K → fewer false positives but more false negatives (similar vectors split across bucket boundaries)." },
            { label: "L tables", desc: "Repeat with L independent sets of K hash functions. At query time, look up in all L tables and union candidates. Higher L → better recall, more memory." },
          ]} />
          <div className="mt-4 border-2 border-ink bg-bg p-4 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted">LSH Variants</p>
            <p className="text-sm text-ink/80"><strong>Random Projection LSH:</strong> For cosine similarity. Project onto random lines.</p>
            <p className="text-sm text-ink/80"><strong>MinHash LSH:</strong> For Jaccard similarity (set overlap). Near-duplicate document detection.</p>
            <p className="text-sm text-ink/80"><strong>SimHash:</strong> Google{"'"}s near-duplicate web page detection. Compact binary signature, small Hamming distance = near-duplicate.</p>
          </div>
          <InterviewCallout label="Interview Answer — LSH">
            LSH uses random projections to create hash functions where similar vectors land in the same bucket.
            Multiple hash tables (L tables, K hashes each) improve recall. HNSW generally outperforms LSH on
            recall-speed for dense embeddings, but LSH remains the standard for near-duplicate detection and
            set-similarity tasks (MinHash).
          </InterviewCallout>

          {/* IVF */}
          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">IVF — Inverted File Index (KMeans-Based)</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            Divide the vector space into k clusters using KMeans. Each vector is assigned to its nearest centroid.
            At query time, find the nearest cluster centroids and only search vectors within those clusters.
          </p>
          <BoldBulletList items={[
            { label: "Building", desc: "Run KMeans with k clusters on all N vectors. Build inverted lists: inverted_list[i] = all vectors assigned to cluster i. Build time: O(N × k × D × iterations)." },
            { label: "nprobe", desc: "The main recall-speed knob. Controls how many clusters you search per query. nprobe=1 → fastest, ~80-90% recall. nprobe=k → exact search (same as brute force)." },
          ]} />
          <CompareTable
            headers={["nprobe", "Recall", "Speed"]}
            rows={[
              ["1", "~80–90% (misses cluster boundary vectors)", "Fastest"],
              ["4", "~95% (covers most boundary cases)", "Fast"],
              ["16", "~99% (near-exact)", "Moderate"],
              ["k (all clusters)", "100% (exact search)", "Same as brute force"],
            ]}
          />
          <div className="mt-4 border-2 border-ink bg-bg p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">IVF + PQ — Scaling to Billions</p>
            <p className="text-sm text-ink/80 mb-2">
              Product Quantization (PQ) compresses vectors to save memory. Split each D-dim vector into M sub-vectors,
              run KMeans (256 centroids) on each sub-space, replace each sub-vector with its nearest centroid ID (1 byte).
            </p>
            <p className="text-sm font-mono text-ink/80">
              D=128, M=8: Original = 128×4 = 512 bytes → PQ = 8 bytes → <strong>64× compression</strong>
            </p>
            <p className="mt-2 text-sm text-ink/80">Trade-off: 64× memory savings at the cost of some recall drop (IVF+PQ: 90–95% vs IVF: 95–99%).</p>
          </div>
          <InterviewCallout label="Interview Answer — IVF">
            IVF partitions the vector space into k clusters using KMeans. At query time, you only search the nprobe
            nearest clusters, skipping the rest. nprobe is the recall-speed knob — higher nprobe = better recall but
            slower. IVF+PQ adds compression for billion-scale search. I{"'"}d use IVF when memory is constrained and
            HNSW when I need the best recall-speed trade-off.
          </InterviewCallout>

          {/* HNSW */}
          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">HNSW — Hierarchical Navigable Small World</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            The best general-purpose ANN algorithm for production. Used by Weaviate, Qdrant, Milvus, and FAISS.
            Builds a multi-layer graph where upper layers have sparse long-range connections for fast navigation,
            lower layers have dense short-range connections for precise search.
          </p>
          <BoldBulletList items={[
            { label: "Layer assignment", desc: "When inserting a vector, randomly assign its max layer using exponential decay: max_layer = floor(-ln(random()) × mL). ~63% of vectors land only in Layer 0. A vector appears in ALL layers 0 to max_layer." },
            { label: "Upper layers", desc: "Express highways — sparse, long-range connections. Lets you navigate to the right region of the space in a few hops." },
            { label: "Layer 0", desc: "Local streets — dense, short-range connections. Precise search within the right neighborhood." },
            { label: "ef parameter", desc: "Controls how many candidates you track during search. ef=50 is typical production starting point. ef must be ≥ k. Tune this first — it's the main production knob." },
          ]} />
          <div className="mt-4 border-2 border-ink bg-bg p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">HNSW Parameters — Complete Reference</p>
            <CompareTable
              headers={["Parameter", "Default", "Effect"]}
              rows={[
                ["M", "16", "Connections per node. Higher = better recall, more memory, slower build."],
                ["ef_construction", "200", "Build-time search width. Higher = better index quality, slower build."],
                ["ef (query)", "50", "Query-time search width. THE main production tuning knob."],
                ["Mmax", "32 (2×M)", "Max connections at Layer 0. Usually left at 2×M."],
              ]}
            />
          </div>
          <InterviewCallout label="Interview Answer — HNSW">
            HNSW builds a hierarchical graph. Upper layers are sparse with long-range connections — express highways
            to navigate to the right region quickly. Lower layers are dense with local connections for precise search.
            Layer assignment is random with exponential decay, so most vectors are only in Layer 0. At query time you
            navigate greedily top-to-bottom, checking only ~30–50 nodes out of millions. The recall-speed trade-off
            is controlled by ef — tune this at inference time against a recall benchmark until you hit the latency budget.
          </InterviewCallout>

          {/* Algorithm Comparison */}
          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Algorithm Comparison</p>
          <CompareTable
            headers={["Algorithm", "Recall", "Speed", "Memory", "Best Use Case"]}
            rows={[
              ["Exact / Flat", "100%", "O(N×D) slowest", "Low", "Corpus <100K, eval baseline"],
              ["KD-Tree", "100%", "Fast (D<20), brute force (D>50)", "Low", "GPS, low-D geometric data"],
              ["Ball Tree", "100%", "Fast (D<50), slow (D>100)", "Low", "Non-axis-aligned clusters, D<50"],
              ["LSH", "~85–95%", "Fast", "Medium", "Near-duplicate detection, set similarity"],
              ["IVF", "~95–99%", "Fast", "Medium", "Large corpus, memory-constrained"],
              ["IVF+PQ", "~90–95%", "Very fast", "Very low (64×)", "Billion-scale, extreme memory constraints"],
              ["HNSW", "~97–99%", "Very fast", "High", "General production RAG — best default"],
            ]}
          />

          <div className="mt-6 border-2 border-ink bg-bg p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3">Decision Guide</p>
            <div className="space-y-2 text-sm text-ink/80">
              <p><span className="text-accent font-bold">→</span> D {"<"} 20? <strong>KD-Tree or Ball Tree</strong></p>
              <p><span className="text-accent font-bold">→</span> D {">"} 20 and corpus {"<"} 100K? <strong>Exact search (FAISS flat index)</strong></p>
              <p><span className="text-accent font-bold">→</span> Corpus {">"} 100K and memory constrained? <strong>IVF or IVF+PQ</strong></p>
              <p><span className="text-accent font-bold">→</span> Corpus {">"} 100K and memory available? <strong>HNSW (best default for production RAG)</strong></p>
              <p><span className="text-accent font-bold">→</span> Near-duplicate detection? <strong>LSH (MinHash for text)</strong></p>
              <p><span className="text-accent font-bold">→</span> Corpus {">"} 1 billion vectors? <strong>IVF+PQ or HNSW+PQ</strong></p>
            </div>
          </div>
        </Card>

        {/* ── 9. Retrieval Strategies ── */}
        <Card>
          <SectionLabel>Section 7</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Retrieval Strategies</h2>

          <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Sparse Retrieval — TF-IDF and BM25</p>
          <p className="text-sm leading-relaxed text-ink/90">
            Sparse retrieval represents documents as high-dimensional sparse vectors (one dimension per
            vocabulary term). No ML required.
          </p>
          <BoldBulletList items={[
            { label: "TF-IDF", desc: "Term Frequency × Inverse Document Frequency. Upweights rare terms that are specific to a document. Downweights common words. Simple but no length normalization." },
            { label: "BM25", desc: "The dominant sparse retrieval model. Extends TF-IDF with saturation (TF gains diminish as term frequency increases) and length normalization. Parameters: k1 (TF saturation, typically 1.2–2.0) and b (length normalization, typically 0.75)." },
          ]} />
          <MathBlock
            label="BM25 Formula"
            lines={[
              String.raw`\text{score}(D,Q) = \sum_i \text{IDF}(q_i) \cdot \frac{f(q_i,D)\cdot(k_1+1)}{f(q_i,D) + k_1\!\left(1 - b + b\cdot\dfrac{|D|}{\text{avgdl}}\right)}`,
            ]}
          />
          <p className="text-sm leading-relaxed text-ink/80">
            <strong>Strength:</strong> Exact keyword matching — critical when domain has specialized
            terminology (emissions factor codes, regulatory identifiers, chemical names).{" "}
            <strong>Weakness:</strong> No semantic understanding. &ldquo;CO₂ emissions&rdquo; and
            &ldquo;carbon footprint&rdquo; are unrelated to BM25.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Dense Retrieval</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-2">
            Embed both query and documents into the same dense vector space. Retrieve by nearest neighbor
            search. Captures semantic similarity that sparse methods miss.
          </p>
          <BoldBulletList items={[
            { label: "DPR (Dense Passage Retrieval)", desc: "Two separate BERT encoders — one for questions, one for passages — trained with contrastive loss on QA pairs." },
            { label: "ColBERT", desc: "Late interaction model. Stores one vector per token. At query time, computes MaxSim — max similarity between each query token and all document tokens. Higher recall than single-vector methods but larger index." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Hybrid Retrieval</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-2">
            Combine sparse (BM25) and dense (embedding) retrieval for best of both worlds.
          </p>
          <BoldBulletList items={[
            { label: "Reciprocal Rank Fusion (RRF)", desc: "Combine rankings from multiple retrieval systems without needing score normalization. score(d) = Σ 1/(k + rankᵢ(d)) where k=60 is a smoothing constant. Simple and effective." },
            { label: "Linear combination", desc: "Weighted sum of normalized BM25 and cosine similarity scores. Requires careful normalization and weight tuning." },
          ]} />
          <InterviewCallout label="Interview Answer — When to Use Hybrid">
            In production I almost always default to hybrid retrieval. Dense retrieval is great for
            semantic queries but misses exact matches. BM25 is great for technical terms, product
            codes, or regulatory IDs that must match exactly. RRF fusion is my default because it
            requires no score normalization.
          </InterviewCallout>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Re-ranking</p>
          <BoldBulletList items={[
            { label: "Cross-encoder re-ranking", desc: "Concatenate query + document, run through BERT. Produces a single relevance score. O(K) inference calls at query time. High quality but slow." },
            { label: "ColBERT re-ranking", desc: "More efficient late-interaction. Precompute token embeddings offline, do MaxSim at query time." },
            { label: "LLM re-ranking", desc: "Use the LLM itself to judge relevance. Highest quality, highest latency." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Query Expansion</p>
          <BoldBulletList items={[
            { label: "HyDE (Hypothetical Document Embeddings)", desc: "Use the LLM to generate a hypothetical answer to the query, then retrieve using that answer. The hypothesis is often closer to real documents in embedding space than the original question." },
            { label: "Multi-query", desc: "Generate multiple paraphrases of the query. Retrieve for each. Union the results. Improves recall." },
            { label: "Step-back prompting", desc: "Generalize the specific query to a broader question before retrieval. Useful when the question is too specific to match documents." },
          ]} />
        </Card>

        {/* ── 10. IR Evaluation Metrics ── */}
        <Card>
          <SectionLabel>Section 8</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Information Retrieval Evaluation Metrics</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-6">
            Be able to compute NDCG by hand. These metrics are standard in IR and search evaluation,
            and directly apply to measuring RAG retrieval quality.
          </p>

          <div className="space-y-6">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-muted">Precision@K and Recall@K</p>
              <BoldBulletList items={[
                { label: "Precision@K", desc: "Of the K retrieved documents, what fraction are relevant? P@K = (# relevant in top K) / K" },
                { label: "Recall@K", desc: "Of all relevant documents in the corpus, what fraction appear in the top K? R@K = (# relevant in top K) / (total relevant)" },
              ]} />
              <div className="mt-3 border-l-4 border-ink/30 pl-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Example</p>
                <p className="text-sm text-ink/80">
                  Corpus has 10 relevant docs. You retrieve 5. 3 of those 5 are relevant.
                  P@5 = 3/5 = 0.6. R@5 = 3/10 = 0.3.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-muted">Mean Reciprocal Rank (MRR)</p>
              <p className="text-sm leading-relaxed text-ink/90 mb-2">
                For queries where only the first relevant result matters.
                RR = 1 / rank_of_first_relevant_doc. MRR = mean over all queries.
              </p>
              <div className="border-l-4 border-ink/30 pl-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Example</p>
                <p className="text-sm text-ink/80">
                  Query 1: first relevant doc at rank 2 → RR = 0.5.
                  Query 2: first relevant doc at rank 1 → RR = 1.0.
                  MRR = (0.5 + 1.0) / 2 = 0.75.
                </p>
              </div>
              <p className="mt-2 text-sm text-ink/80">
                <strong>Use MRR when:</strong> You only care about the single best answer (e.g., factoid QA).
              </p>
            </div>

            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-muted">Mean Average Precision (MAP)</p>
              <p className="text-sm leading-relaxed text-ink/90 mb-2">
                Extends Precision@K to consider the order of all relevant documents. AP = mean of P@K
                at each rank where a relevant doc appears.
              </p>
              <div className="border-l-4 border-ink/30 pl-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Example</p>
                <p className="text-sm text-ink/80">
                  5 retrieved docs. Relevant ones at ranks 1, 3, 5.
                  P@1 = 1.0, P@3 = 0.67, P@5 = 0.6. AP = (1.0 + 0.67 + 0.6) / 3 = 0.76.
                  MAP = mean AP across queries.
                </p>
              </div>
              <p className="mt-2 text-sm text-ink/80">
                <strong>Use MAP when:</strong> You want to reward systems that rank ALL relevant documents highly, not just the first one.
              </p>
            </div>

            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-muted">Normalized Discounted Cumulative Gain (NDCG)</p>
              <p className="text-sm leading-relaxed text-ink/90 mb-2">
                The most comprehensive IR metric. Handles graded relevance (highly relevant, somewhat
                relevant, irrelevant — not just binary).
              </p>
              <BoldBulletList items={[
                { label: "DCG", desc: "Σ (2^relᵢ − 1) / log₂(i + 1) where relᵢ is the relevance score at rank i. Higher ranks get more weight." },
                { label: "IDCG", desc: "Ideal DCG — the DCG you'd get if results were in perfect order (most relevant first)." },
                { label: "NDCG", desc: "DCG / IDCG. Normalized to [0, 1]. 1.0 = perfect ranking." },
              ]} />
              <div className="mt-4 border-2 border-ink bg-bg p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">Hand Calculation Example</p>
                <p className="text-sm text-ink/80 mb-1">Relevance scores at ranks 1–4: [3, 2, 3, 0]</p>
                <p className="text-sm font-mono text-ink/80 mb-1">
                  DCG = 7/log₂(2) + 3/log₂(3) + 7/log₂(4) + 0 = 7 + 1.89 + 3.5 = 12.39
                </p>
                <p className="text-sm font-mono text-ink/80 mb-1">
                  Ideal order [3,3,2,0]: IDCG = 7 + 7/1.585 + 3/2 + 0 = 12.92
                </p>
                <p className="text-sm font-mono font-bold text-ink">
                  NDCG = 12.39 / 12.92 = 0.96
                </p>
              </div>
              <p className="mt-3 text-sm text-ink/80">
                <strong>Use NDCG when:</strong> Relevance is graded — the standard metric for search and recommendation systems.
              </p>
            </div>
          </div>
        </Card>

        {/* ── 11. RAGAS Evaluation ── */}
        <Card>
          <SectionLabel>Section 9</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">RAG Evaluation — RAGAS Framework</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-4">
            Evaluating RAG requires assessing both retrieval quality AND generation quality. RAGAS
            (RAG Assessment) is the standard framework for end-to-end evaluation.
          </p>

          <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">The Four Core RAGAS Metrics</p>
          <CompareTable
            headers={["Metric", "What It Measures", "What It Catches"]}
            rows={[
              ["Faithfulness", "Do generated claims appear in retrieved context? Score = (# claims supported by context) / (total claims in answer).", "Hallucination — model adding facts not in context"],
              ["Answer Relevance", "Does the answer address the question asked? Measured by generating reverse-questions from the answer.", "Off-topic answers — model answering a different question"],
              ["Context Precision", "Of retrieved chunks, what proportion are actually relevant to answering the question?", "Noisy retrieval — irrelevant chunks confusing the model"],
              ["Context Recall", "Of the claims in the ground-truth answer, what fraction can be attributed to retrieved context?", "Incomplete retrieval — missing chunks containing needed info"],
            ]}
          />

          <div className="mt-4 space-y-4">
            <div className="border-l-4 border-ink/30 pl-4">
              <p className="text-sm font-bold">Answer Correctness (vs. Ground Truth)</p>
              <p className="mt-1 text-sm text-ink/80">
                When you have labeled ground-truth answers: F1 score between generated answer and
                reference answer at the semantic level (using embedding similarity), not exact string match.
              </p>
            </div>
            <div className="border-l-4 border-ink/30 pl-4">
              <p className="text-sm font-bold">Component-Level Evaluation</p>
              <BoldBulletList items={[
                { label: "Retrieval-only eval", desc: "Evaluate using NDCG, MAP, MRR against labeled relevant docs. Isolates retrieval quality from generation quality." },
                { label: "Generation-only eval", desc: "Feed gold-standard retrieved context, evaluate output only. Isolates LLM quality from retrieval." },
                { label: "End-to-end eval", desc: "Full pipeline evaluation. Harder to debug when it fails." },
              ]} />
            </div>
          </div>
          <InterviewCallout label="Interview Answer — How to Evaluate a RAG System">
            I evaluate RAG at two levels. First, retrieval quality using NDCG@10 against a labeled
            eval set — this tells me if the right chunks are being retrieved. Second, end-to-end using
            RAGAS metrics: faithfulness to catch hallucination, context precision to catch noisy
            retrieval, and answer relevance to catch topic drift. If faithfulness drops, I look at the
            generation prompt. If context precision drops, I look at chunking or retrieval.
          </InterviewCallout>
        </Card>

        {/* ── 12. Failure Modes ── */}
        <Card>
          <SectionLabel>Section 10</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">RAG Failure Modes and How to Fix Them</h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Retrieval Failure — Wrong Chunks Retrieved",
                desc: "The most common failure. The model generates a confident-sounding answer from irrelevant context.",
                diagnosis: "Low Context Precision or Context Recall in RAGAS. Check retrieval logs — are the right source documents appearing?",
                fix: "Fine-tune embedding model on domain data; use hybrid retrieval (BM25 + dense); improve chunking; add metadata filtering to narrow the search space.",
              },
              {
                n: "2",
                title: "Hallucination — Model Adds Facts Not in Context",
                desc: "The LLM ignores retrieved context and generates from its parametric memory, or blends retrieved facts with invented ones.",
                diagnosis: "Low Faithfulness score in RAGAS. Cross-reference each claim in the answer against retrieved chunks.",
                fix: "Stronger system prompt ('Answer ONLY using the provided context. If unsure, say I don't know.'); add citation enforcement — require the model to cite chunk IDs for each claim.",
              },
              {
                n: "3",
                title: "Context Window Overflow",
                desc: "Retrieved chunks exceed the LLM's context window. Later chunks are silently truncated.",
                diagnosis: "Long documents, high K. Check token counts before sending to LLM.",
                fix: "Reduce K; use smaller chunks; apply re-ranking and keep only top-3; use models with longer context windows; apply 'Lost in the Middle' awareness — most important context at start or end.",
              },
              {
                n: "4",
                title: "Semantic Drift / Query-Document Mismatch",
                desc: "The query is semantically distant from how information is expressed in documents. E.g., user asks a question but documents contain statements.",
                diagnosis: "Low context recall on queries that should have answers in the corpus.",
                fix: "HyDE — generate a hypothetical answer and use that as the retrieval query; multi-query retrieval with paraphrases.",
              },
              {
                n: "5",
                title: "Outdated or Conflicting Information",
                desc: "Multiple retrieved chunks contain contradictory information (e.g., different emission factors from different years).",
                diagnosis: "Answer inconsistencies or explicit contradictions across retrieved chunks.",
                fix: "Add date metadata to chunks and filter by recency; add source reliability scoring; instruct the LLM to prefer the most recent source when conflicts arise.",
              },
              {
                n: "6",
                title: "Over-Retrieval / Distraction",
                desc: "Retrieving too many chunks dilutes the signal. Irrelevant chunks distract the model.",
                diagnosis: "Low faithfulness despite a seemingly relevant corpus.",
                fix: "Reduce K; apply re-ranking to filter aggressively; use relevance score thresholds to drop low-scoring chunks even if K = 10.",
              },
            ].map((item) => (
              <div key={item.n} className="border-2 border-ink bg-bg p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="border-2 border-ink bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ink">
                    {item.n}
                  </span>
                  <p className="text-sm font-bold">{item.title}</p>
                </div>
                <p className="text-sm text-ink/80 mb-3">{item.desc}</p>
                <p className="text-xs text-ink/70 mb-1">
                  <strong className="text-ink/90">Diagnosis:</strong> {item.diagnosis}
                </p>
                <p className="text-xs text-ink/70">
                  <strong className="text-ink/90">Fix:</strong> {item.fix}
                </p>
              </div>
            ))}
          </div>
          <Insight label="Production Rule of Thumb">
            Always log: (1) what was retrieved for each query, (2) the relevance scores, and
            (3) whether the answer was faithful. Without this, debugging production failures is
            nearly impossible.
          </Insight>
        </Card>

        {/* ── 13. Advanced RAG ── */}
        <Card>
          <SectionLabel>Section 11</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Advanced RAG Techniques</h2>
          <div className="space-y-4">
            {[
              {
                tag: "Selective",
                title: "Self-RAG",
                body: "The model learns to decide when to retrieve (not every query needs retrieval), critiques its own outputs, and selects the best generation among candidates. Uses special tokens: [Retrieve], [IsRel], [IsSup], [IsUse]. Key insight: unconditional retrieval hurts when the query doesn't need external knowledge.",
              },
              {
                tag: "Robust",
                title: "Corrective RAG (CRAG)",
                body: "After initial retrieval, a lightweight evaluator scores retrieval quality. If low, it triggers a web search fallback to augment with fresh information. If very low, it discards retrieved context entirely. Key insight: gracefully handles the case where the vector DB doesn't have the answer.",
              },
              {
                tag: "Agentic",
                title: "Agentic RAG",
                body: "An LLM agent orchestrates multi-step retrieval. It can decompose complex questions into sub-questions, iteratively retrieve, check if it has enough information, and decide to search again if not. ReAct pattern: Reason → Act → Observe loop.",
              },
              {
                tag: "Multi-hop",
                title: "Multi-Hop RAG",
                body: "Some questions require chaining multiple retrievals. E.g., 'What is the emissions intensity of the top supplier of product X?' requires: (1) find top supplier, (2) retrieve emissions data for that supplier. IRCoT (Interleaved Retrieval + Chain of Thought) interleaves reasoning steps with retrieval steps.",
              },
              {
                tag: "Fusion",
                title: "RAG Fusion",
                body: "Generate multiple query variants → retrieve for each → fuse results using Reciprocal Rank Fusion → generate from fused context. Higher recall than single-query RAG.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 border-2 border-ink bg-bg p-4">
                <div className="shrink-0 border-2 border-ink bg-accent px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-ink whitespace-nowrap">
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

        {/* ── 14. Advanced RAG — Multi-Hop, Graph, Adaptive ── */}
        <Card>
          <SectionLabel>Section 12</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Advanced RAG Concepts — Deep Dives</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-8">
            Three techniques that separate production-grade RAG from toy demos: multi-hop retrieval for
            questions that span multiple documents, structured knowledge handling for tables and
            relationships, and adaptive strategies that route queries to the right pipeline.
          </p>

          {/* ── Multi-Hop ── */}
          <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">1 · Multi-Hop and Cross-Document Retrieval</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-4">
            Standard RAG works when the answer lives in one chunk. Multi-hop handles questions that require
            chaining facts across multiple documents — each retrieval step informs the next query.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <div className="border-2 border-ink bg-bg p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Single-hop (standard RAG)</p>
              <p className="text-sm text-ink/80">
                <em>"What is Amazon's Scope 1 emissions?"</em><br />
                → Retrieve one chunk from the sustainability report → done.
              </p>
            </div>
            <div className="border-2 border-ink bg-bg p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Multi-hop (chained retrieval)</p>
              <p className="text-sm text-ink/80">
                <em>"What is the emissions intensity of Amazon's top supplier in electronics?"</em><br />
                → Hop 1: find top supplier → Hop 2: get their emissions → Hop 3: get their revenue → calculate.
              </p>
            </div>
          </div>

          <CodeBlock
            label="Multi-hop retrieval — step by step"
            code={`Query: "What is the emissions intensity of Amazon's top electronics supplier?"

Step 1: Retrieve for original query
  → "Foxconn is Amazon's largest electronics supplier"

Step 2: Reformulate with what was found
  → new query: "Foxconn annual emissions"
  → "Foxconn emitted 9.2M tonnes CO2e in 2023"

Step 3: Reformulate again
  → new query: "Foxconn annual revenue 2023"
  → "Foxconn revenue was $214B in 2023"

Step 4: Generate final answer
  → emissions intensity = 9.2M / 214B = 43 tonnes per $M revenue`}
          />

          <CodeBlock
            label="Implementation patterns"
            code={`IRCoT (Interleaved Retrieval + Chain of Thought):
  Interleave reasoning steps with retrieval steps.
  Reason: "I need the top supplier first"
  Retrieve: "Foxconn is top supplier"
  Reason: "Now I need Foxconn's emissions"
  Retrieve: "9.2M tonnes CO2e"
  Reason: "Now I need revenue to compute intensity"
  Retrieve: "$214B revenue"
  Generate: "Emissions intensity = 43 tonnes per $M"

ReAct pattern:
  Thought → Action (retrieve) → Observation → Thought → ...
  Loop until sufficient information to answer.`}
          />

          <Insight label="Why this matters for sustainability">
            Sustainability questions are inherently multi-hop. "Which of our top 10 suppliers has the
            highest emissions per dollar of spend?" requires supplier data, emissions data, and spend
            data — all from different sources. Cross-document retrieval is the core challenge: facts
            are spread across supplier lists, emissions disclosures, and financial reports.
          </Insight>

          {/* ── Table Extraction and Graph RAG ── */}
          <p className="mt-10 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">2 · Table Extraction and Graph RAG</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-4">
            Standard RAG embeds text chunks. But huge amounts of sustainability data live in tables and
            relationship graphs — structures that text embeddings can't represent well.
          </p>

          <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-muted/70">Table Extraction</p>
          <CodeBlock
            label="The problem — raw table as text loses structure"
            code={`Raw table embedded as text (bad):
"Scope 1 2021 45000 Scope 2 2021 123000 Scope 3 2021 890000
 Scope 1 2022 42000 Scope 2 2022 118000..."

The embedding has no idea this is a 2D structure.
Rows and columns that have meaning are flattened away.`}
          />
          <BoldBulletList items={[
            { label: "Table-to-text verbalization", desc: "Convert each cell to natural language before embedding. \"In 2021, Scope 1 emissions were 45,000 tonnes. In 2022, Scope 1 decreased to 42,000 tonnes.\" The embedding now captures meaning." },
            { label: "Row-per-chunk", desc: "Each row becomes its own chunk with column headers prepended. \"Year: 2021 | Category: Scope 1 | Value: 45,000 tonnes CO2e\"" },
            { label: "SQL / structured retrieval", desc: "Parse the table into a database. Convert natural language questions to SQL at query time. Most reliable for numerical questions and comparisons." },
            { label: "Multimodal embedding", desc: "Embed the table as an image. Models like GPT-4V can reason about table structure visually — useful when tables have complex merged cells or visual formatting." },
          ]} />

          <p className="mt-6 mb-2 text-[11px] font-bold uppercase tracking-widest text-muted/70">Graph RAG</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-4">
            Standard RAG treats documents as isolated chunks with no explicit connections. Graph RAG builds a
            knowledge graph where entities are nodes and relationships are edges — then uses graph traversal
            for retrieval.
          </p>
          <CodeBlock
            label="Standard RAG vs Graph RAG"
            code={`Standard RAG index (disconnected chunks):
  Chunk 1: "Amazon partners with Rivian for electric delivery vans"
  Chunk 2: "Rivian produces zero-emission vehicles"
  Chunk 3: "Amazon's Scope 3 transport emissions fell 8% in 2023"
  → No explicit link between them.

Graph RAG index (explicit relationships):
  [Amazon] --PARTNERS_WITH--> [Rivian]
  [Rivian] --PRODUCES--> [Electric Delivery Vans]
  [Electric Delivery Vans] --REDUCES--> [Scope 3 Emissions]
  [Amazon] --HAS--> [Scope 3 Emissions]

Query: "How is Amazon reducing transport emissions?"
  → Graph traversal: Amazon → partners → Rivian
    → produces → electric vans → reduces → Scope 3`}
          />
          <p className="mb-1 mt-4 text-[11px] font-bold uppercase tracking-widest text-muted">Microsoft GraphRAG (2024)</p>
          <BulletList items={[
            "Extracts entities and relationships from all documents using an LLM",
            "Builds a community structure — clusters of related entities",
            "Generates summaries for each community",
            "At query time uses both graph traversal and vector search",
          ]} />
          <CompareTable
            headers={["Graph RAG wins when…", "Standard RAG wins when…"]}
            rows={[
              ["Questions about relationships between entities", "Specific factual lookups"],
              ["Corpus-wide summarization (\"main themes across all reports\")", "Small corpus where graph construction overhead isn't worth it"],
              ["Questions requiring global understanding", "Keyword-based queries without relational structure"],
            ]}
          />

          {/* ── Adaptive Retrieval ── */}
          <p className="mt-10 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">3 · Adaptive Retrieval Strategies</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-4">
            A fixed pipeline treats every query the same way. Adaptive retrieval detects the query type and
            routes it to the right strategy — avoiding wasted retrieval for simple questions and under-powered
            retrieval for complex ones.
          </p>

          <CodeBlock
            label="Why a fixed strategy fails"
            code={`Query A: "What is CO2?"
→ General knowledge. LLM already knows this.
  Retrieval wastes time and adds noise. Don't retrieve.

Query B: "What were our Scope 3 emissions in Q3 2024?"
→ Specific factual lookup. Needs retrieval.
  Dense retrieval is fine — straightforward semantic match.

Query C: "Compare emissions reduction strategies across
          all suppliers in Southeast Asia"
→ Multi-document synthesis. Needs multi-hop retrieval.

Query D: "Verify this supplier's claimed 30% reduction"
→ Targeted evidence retrieval + citation checking.

A fixed pipeline applies the same strategy to all four.`}
          />

          <CodeBlock
            label="Adaptive retrieval — routing logic"
            code={`Step 1: Query classification
  - Does this need retrieval at all?
  - Is it simple (single-hop) or complex (multi-hop)?
  - Is it a lookup, comparison, or verification task?

Step 2: Route to the right strategy
  No retrieval needed  → straight to LLM
  Simple factual       → dense retrieval, top-3 chunks
  Complex multi-part   → multi-hop retrieval pipeline
  Comparison           → retrieve from multiple sources, synthesize
  Verification         → targeted retrieval + citation extraction

Step 3: Adjust K dynamically
  Simple query  → K=3 (less context needed)
  Complex query → K=10 (more context needed)

Step 4: Confidence-based fallback
  Retrieval confidence low → trigger web search (CRAG)`}
          />

          <p className="mb-2 mt-4 text-[11px] font-bold uppercase tracking-widest text-muted">Self-RAG — the model decides when to retrieve</p>
          <CodeBlock
            label="Self-RAG special tokens"
            code={`The model learns to emit special tokens:
  [Retrieve]    → "I need to retrieve for this"
  [No Retrieve] → "I already know this, skip retrieval"
  [IsRel]       → "Is this retrieved chunk relevant?"
  [IsSup]       → "Does this chunk support my answer?"
  [IsUse]       → "Is this retrieval useful overall?"

The model scores its own retrievals and decides whether
to use them, retry, or generate without retrieval.`}
          />

          <InterviewCallout label="Interview One-Liner — All Three">
            Multi-hop handles questions where the answer requires chaining facts across multiple documents —
            each retrieval informs the next query. Table extraction and Graph RAG handle structured knowledge
            that text embeddings can{"'"}t represent well — tables need verbalization or SQL, and
            relationship-heavy corpora benefit from a knowledge graph. Adaptive retrieval routes different
            query types to different strategies — simple factual queries get basic dense retrieval, complex
            analytical queries get multi-hop pipelines, and queries the model already knows skip retrieval
            entirely. In a sustainability context all three are critical because the data is heterogeneous,
            highly relational, and spans very different query types.
          </InterviewCallout>
        </Card>

        {/* ── 15. Production Considerations ── */}
        <Card>
          <SectionLabel>Section 13</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Production RAG Considerations</h2>

          <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Latency vs. Throughput Trade-offs</p>
          <CompareTable
            headers={["Component", "Latency Optimization"]}
            rows={[
              ["Embedding (query)", "Cache frequent queries; use smaller/distilled embedding model; GPU inference"],
              ["ANN Search", "Tune HNSW ef parameter; use IVF for larger corpora; horizontal scaling"],
              ["Re-ranking", "Limit K for re-ranking (top-20, not top-100); use distilled cross-encoder"],
              ["LLM generation", "Use streaming; smaller model for simple queries; cache common answers"],
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Caching</p>
          <BoldBulletList items={[
            { label: "Query embedding cache", desc: "Cache query embeddings for repeated queries. LRU cache with TTL." },
            { label: "Semantic cache", desc: "Cache (query_embedding → answer) pairs. On new query, check if a semantically similar query was answered recently. Hit rate depends on query distribution." },
            { label: "Document embedding cache", desc: "Document embeddings are computed offline — no runtime cost." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Monitoring and Drift Detection</p>
          <BoldBulletList items={[
            { label: "Retrieval drift", desc: "Monitor Context Precision/Recall over time. Drop = embedding drift or corpus change." },
            { label: "Answer quality", desc: "Monitor faithfulness and user feedback signals (thumbs up/down, follow-up questions)." },
            { label: "Latency SLAs", desc: "P50, P95, P99 latency for each pipeline stage. Alert on P99 spikes." },
            { label: "Data freshness", desc: "Track when documents were last updated. Stale corpus = stale answers." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">MLOps for RAG</p>
          <BoldBulletList items={[
            { label: "Index versioning", desc: "Treat the vector index like a model artifact. Version it with DVC or a custom registry." },
            { label: "Embedding model registry", desc: "Never change the embedding model without re-indexing. Track model version as metadata." },
            { label: "Eval-driven development", desc: "Run RAGAS eval suite on every pipeline change before deploying. Gate on faithfulness > 0.85 and NDCG > 0.7 (example thresholds)." },
            { label: "A/B testing RAG", desc: "Test chunking strategies, K values, or embedding models by routing traffic. Use NDCG and answer correctness as guardrail metrics." },
          ]} />
        </Card>

        {/* ── 16. Interview Q&A ── */}
        <Card>
          <SectionLabel>Section 14</SectionLabel>
          <h2 className="mb-6 text-xl font-bold">Interview Q{"&"}A — Quick Reference</h2>
          <p className="mb-6 text-sm text-ink/70">Practice answering each in under 90 seconds.</p>
          <div className="space-y-5">
            {[
              {
                q: "What are the biggest failure modes in RAG and how do you detect them?",
                a: "The three I've seen most: (1) Retrieval failure — wrong chunks retrieved, detected via low Context Recall in RAGAS or by logging what was retrieved. Fix: hybrid retrieval or fine-tune embeddings. (2) Hallucination — model adds facts not in context, detected via Faithfulness score. Fix: stronger system prompt, citation enforcement. (3) Context overflow — chunks silently truncated. Fix: token counting before LLM call, reduce K, apply re-ranking.",
              },
              {
                q: "How do you choose between dense and sparse retrieval?",
                a: "Default to hybrid. Dense retrieval excels at semantic queries where the user's words differ from document vocabulary. Sparse (BM25) excels at exact keyword matching — technical codes, proper nouns, domain-specific terms that must match exactly. In a sustainability context, supplier IDs and emissions factor codes must match exactly — BM25 is essential there. RRF fusion combines both without needing score normalization.",
              },
              {
                q: "How do you evaluate a RAG system without ground-truth labels?",
                a: "Two approaches. First, LLM-as-judge: use a separate LLM to score faithfulness (does the answer contradict the context?) and relevance (does the answer address the question?). This is the basis of RAGAS. Second, generate synthetic eval sets: use an LLM to generate question-answer pairs from your corpus, then evaluate retrieval against those. Neither is perfect but both are far better than no evaluation.",
              },
              {
                q: "How does chunking affect RAG quality?",
                a: "Chunking is one of the highest-impact decisions. Small chunks improve retrieval precision but lose context for generation. Large chunks preserve context but dilute the retrieval signal. In production I use hierarchical chunking: index small child chunks for retrieval, but return the parent chunk to the LLM. For sustainability reports, I'd also use structure-aware chunking — split at section boundaries since each section covers a distinct topic.",
              },
              {
                q: "What's the difference between faithfulness and answer correctness?",
                a: "Faithfulness measures whether the answer is grounded in the retrieved context — it can be faithful but still wrong if the retrieved context itself was wrong or incomplete. Answer correctness measures whether the answer matches a ground-truth reference. You need both: a faithful answer built on wrong retrieved information is still a wrong answer.",
              },
              {
                q: "How would you build a RAG system for sustainability claim verification?",
                a: "Pipeline: ingest sustainability reports, regulatory filings, and emissions databases → chunk by document section → embed with a domain-adapted model → index with hybrid retrieval. For a claim like 'Supplier X reduced emissions by 30%', retrieve relevant sections → use a cross-encoder to rank by relevance → feed to LLM with instruction to verify the claim and cite the exact passage. Output includes: verified/not-verified/insufficient-evidence, plus source citations with page numbers.",
              },
            ].map((item, i) => (
              <div key={i} className="border-2 border-ink bg-bg p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">
                  Q{i + 1}
                </p>
                <p className="text-sm font-bold mb-3">{item.q}</p>
                <p className="text-sm leading-relaxed text-ink/80">{item.a}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* ── 17. Quick Reference Cheat Sheet ── */}
        <Card>
          <SectionLabel>Section 15</SectionLabel>
          <h2 className="mb-6 text-xl font-bold">Quick Reference Cheat Sheet</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Chunking",
                items: [
                  "Fixed-size → simple, cuts mid-sentence",
                  "Semantic → coherent but expensive",
                  "Hierarchical → best for production (retrieve small, generate with large)",
                ],
              },
              {
                title: "Retrieval",
                items: [
                  "BM25 → exact keyword match, no semantics",
                  "Dense (bi-encoder) → semantic, pre-computable",
                  "Hybrid + RRF → default production choice",
                  "Cross-encoder → re-ranking only, too slow for first-stage",
                ],
              },
              {
                title: "Metrics",
                items: [
                  "NDCG → graded relevance, order-aware, standard for search",
                  "MRR → only first relevant result matters",
                  "MAP → all relevant results matter, binary relevance",
                  "Faithfulness → hallucination detection",
                  "Context Precision → noisy retrieval detection",
                ],
              },
              {
                title: "Vector DBs",
                items: [
                  "FAISS → research/offline, no server",
                  "Chroma → dev/prototyping",
                  "Weaviate/Qdrant → production with filtering",
                  "Pinecone → managed cloud SaaS",
                ],
              },
              {
                title: "Failure Modes → Fix",
                items: [
                  "Wrong chunks → hybrid retrieval, fine-tune embeddings",
                  "Hallucination → stronger system prompt, citation enforcement",
                  "Context overflow → reduce K, re-rank, token count before LLM",
                  "Query mismatch → HyDE, multi-query",
                ],
              },
              {
                title: "Advanced RAG",
                items: [
                  "Self-RAG → selective retrieval",
                  "CRAG → fallback to web search",
                  "Agentic RAG → multi-step ReAct retrieval",
                  "HyDE → generate hypothesis, retrieve on hypothesis",
                ],
              },
            ].map((group) => (
              <div key={group.title} className="border-2 border-ink bg-bg p-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-accent">
                  {group.title}
                </p>
                <ul className="space-y-1">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink/80">
                      <span className="shrink-0 text-accent">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Footer nav */}
        <div className="flex items-center justify-start border-t-2 border-ink pt-8">
          <Link
            href="/#interview-prep"
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
