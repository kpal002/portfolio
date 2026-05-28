import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

        {/* ── 8. Retrieval Strategies ── */}
        <Card>
          <SectionLabel>Section 6</SectionLabel>
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
          <CodeBlock
            label="BM25 Formula"
            code={`score(D,Q) = Σ IDF(qᵢ) × [f(qᵢ,D) × (k1+1)] / [f(qᵢ,D) + k1 × (1 - b + b × |D|/avgdl)]

f(qᵢ,D) = term frequency of query term qᵢ in doc D
|D|      = document length
avgdl    = average document length in corpus`}
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

        {/* ── 9. IR Evaluation Metrics ── */}
        <Card>
          <SectionLabel>Section 7</SectionLabel>
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

        {/* ── 10. RAGAS Evaluation ── */}
        <Card>
          <SectionLabel>Section 8</SectionLabel>
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

        {/* ── 11. Failure Modes ── */}
        <Card>
          <SectionLabel>Section 9</SectionLabel>
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

        {/* ── 12. Advanced RAG ── */}
        <Card>
          <SectionLabel>Section 10</SectionLabel>
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

        {/* ── 13. Production Considerations ── */}
        <Card>
          <SectionLabel>Section 11</SectionLabel>
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

        {/* ── 14. Interview Q&A ── */}
        <Card>
          <SectionLabel>Section 12</SectionLabel>
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

        {/* ── 15. Quick Reference Cheat Sheet ── */}
        <Card>
          <SectionLabel>Section 13</SectionLabel>
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
