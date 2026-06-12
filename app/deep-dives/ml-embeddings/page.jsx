import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import katex from "katex";

export const metadata = {
  title: "ML Embeddings & Representations — Kuntal Pal",
  description:
    "Word2Vec, GloVe, Sentence Transformers, contrastive learning, embedding geometry, similarity metrics, PCA, and UMAP — with worked exercises.",
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

function InterviewQ({ q, children }) {
  return (
    <div className="border-2 border-ink bg-bg p-5">
      <p className="mb-3 text-sm font-bold text-ink">{q}</p>
      <div className="border-l-4 border-accent pl-4">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">
          <span className="text-accent">▸ </span>Answer
        </p>
        <div className="text-sm leading-relaxed text-ink/80 space-y-2">{children}</div>
      </div>
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

export default function MLEmbeddingsPage() {
  return (
    <div className="min-h-screen bg-bg font-mono text-ink">
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
            <span className="text-accent">$</span> kuntal_pal
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-8 px-6 py-16">

        {/* ── Hero ── */}
        <Card>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">
            <span className="text-accent">{">"} </span>study notes · ml fundamentals
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            ML Embeddings {"&"} Representations
          </h1>
          <p className="mb-6 text-base leading-relaxed text-ink/80">
            Word2Vec, GloVe, Sentence Transformers, contrastive learning, embedding geometry,
            similarity metrics, PCA, and UMAP. Every section opens with core theory then moves
            into worked exercises that test whether you actually understand it.
          </p>
          <ul className="flex flex-wrap gap-2">
            {["Word2Vec", "GloVe", "SBERT", "SimCLR", "InfoNCE", "Hubness", "PCA", "UMAP", "Matryoshka", "CLIP"].map((t) => (
              <li key={t} className="border-2 border-ink bg-bg px-2 py-0.5 text-[11px] font-bold">
                {t}
              </li>
            ))}
          </ul>
        </Card>

        {/* ── 1. Word2Vec ── */}
        <Card>
          <SectionLabel>Section 1</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Word2Vec</h2>

          {/* Intuition block */}
          <div className="mb-8 space-y-4 border-l-4 border-accent pl-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Intuition first</p>
            <p className="text-sm leading-relaxed text-ink/90">
              Word2Vec trains a shallow neural network on a simple prediction task: given a word, predict
              its neighbors (Skip-Gram), or given neighbors, predict the center word (CBOW). The network
              never actually uses its predictions — the weights themselves become the word vectors. Every
              word gets two vectors: an input vector <strong>v</strong> (used at inference) and an output
              vector <strong>u</strong> (discarded after training). A score between a center-context pair
              is just their dot product: <code className="bg-ink/10 px-1">v_sat · u_cat</code>. High dot
              product = model thinks they co-occur.
            </p>
            <p className="text-sm leading-relaxed text-ink/90">
              The full softmax over all V words is too slow (O(V) per step), so <strong>Negative
              Sampling</strong> replaces it with binary classification: for each real pair (sat, cat),
              sample K fake pairs — (sat, the), (sat, mat) — and train the model to score real pairs high
              and fake pairs low. Cost drops to O(K).
            </p>
            <p className="text-sm leading-relaxed text-ink/90">
              <strong>The gradient is the engine.</strong> For a real pair (sat→cat):{" "}
              <code className="bg-ink/10 px-1">∂J/∂v_sat = (σ(score) − 1) · u_cat</code>. If the model
              is wrong (score is low, σ ≈ 0.1), the error is −0.9 — a large nudge pushing{" "}
              <code className="bg-ink/10 px-1">v_sat</code> toward <code className="bg-ink/10 px-1">u_cat</code>.
              For a fake pair (sat→the), the gradient pushes <code className="bg-ink/10 px-1">v_sat</code>{" "}
              away from <code className="bg-ink/10 px-1">u_the</code>. Do this millions of times and
              vectors self-organize: "cat" and "mat" both appear next to "the" and "a" constantly, so
              both get nudged toward the same output vectors repeatedly — ending up geometrically close.
              No labels needed. Similarity emerges purely from shared context.
            </p>
            <p className="text-sm leading-relaxed text-ink/90">
              At inference, cosine similarity between input vectors is your similarity score. The famous
              result — <code className="bg-ink/10 px-1">king − man + woman ≈ queen</code> — works because
              the "gender" relationship encodes as a consistent linear direction in the space (Levy {"&"}{" "}
              Goldberg proved Word2Vec implicitly factorizes the PMI matrix, so linear structure in
              co-occurrence statistics maps to linear offsets in vector space).
            </p>
            <div className="border-2 border-ink bg-bg p-4 text-sm">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-accent">Two things to nail in an interview</p>
              <div className="space-y-2 text-ink/80">
                <p><span className="font-bold text-accent">1.</span> You use the <strong>input matrix V</strong>, not U — the output matrix is discarded after training.</p>
                <p><span className="font-bold text-accent">2.</span> The noise distribution is{" "}
                  <code className="bg-ink/10 px-1">P_n(w) = f(w)^(3/4) / Z</code> — raising frequencies
                  to the 3/4 power stops "the" and "a" from dominating negative samples by compressing
                  the frequency range without flattening it entirely.</p>
              </div>
            </div>
          </div>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Skip-Gram Objective</p>
          <MathBlock
            label="Skip-Gram Objective"
            lines={[
              String.raw`J = \frac{1}{T} \sum_{t=1}^{T} \sum_{\substack{-c \leq j \leq c \\ j \neq 0}} \log P(w_{t+j} \mid w_t)`,
              String.raw`P(w_O \mid w_I) = \frac{\exp({v'}_{w_O}^{\top} \, v_{w_I})}{\sum_{w} \exp({v'}_w^{\top} \, v_{w_I})}`,
            ]}
          />

          <p className="mt-4 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Negative Sampling (NEG)</p>
          <p className="text-sm leading-relaxed text-ink/80 mb-2">
            Full softmax over vocabulary is O(V) — prohibitive. NEG approximates it with a binary
            classification task over K noise samples. Noise distribution P_n(w) = U(w)^3/4 / Z
            downsamples frequent words and upsamples rare ones.
          </p>
          <MathBlock
            label="NEG Objective"
            lines={[
              String.raw`J_\text{NEG} = \log \sigma({v'}_{w_O}^{\top} v_{w_I}) + \sum_{k=1}^{K} \mathbb{E}_{w_k \sim P_n}\!\left[\log \sigma(-{v'}_{w_k}^{\top} v_{w_I})\right]`,
              String.raw`\frac{\partial J}{\partial v_c} = \underbrace{(\sigma(u_o \cdot v_c) - 1) \cdot u_o}_{\text{push toward positive}} + \underbrace{\sum_k \sigma(u_{w_k} \cdot v_c) \cdot u_{w_k}}_{\text{push away from negatives}}`,
            ]}
          />

          <div className="mt-6 space-y-4">
            <InterviewQ q="Q1: Why does Skip-Gram outperform CBOW on rare words, while CBOW tends to be faster and better on frequent words?">
              <p>
                Skip-Gram makes K separate prediction tasks per word (one per context word). Each rare word
                gets many gradient updates — one for every window position in which it appears. CBOW averages
                context vectors before predicting, smoothing the signal. That averaging helps frequent words
                get stable gradients, but for rare words seen only a few times, the averaging loses information.
                Skip-Gram preserves the individual word-context relationships, giving each rare word more
                discriminative signal per occurrence.
              </p>
              <p className="mt-2 text-ink/70">
                <strong>In practice:</strong> use Skip-Gram when vocabulary has a heavy tail (domain-specific
                text); use CBOW when speed matters and vocabulary is balanced.
              </p>
            </InterviewQ>

            <InterviewQ q="Q2: What bias does Negative Sampling introduce, and how does it affect downstream tasks?">
              <p>
                NEG trains each word pair as an independent binary classification problem rather than
                multi-class. The learned P(w_O | w_I) is not a valid probability distribution (doesn&apos;t
                sum to 1 over vocab). Frequency bias: words sampled more often as negatives have embeddings
                pushed away from more other vectors, causing their norms to be systematically smaller — so
                high-frequency function words cluster near the origin.
              </p>
              <p className="mt-2 text-ink/70">
                <strong>Downstream impact:</strong> for retrieval using cosine similarity, this bias is largely
                harmless since cosine normalizes norms. For tasks requiring calibrated probabilities, the
                embeddings should not be used directly.
              </p>
            </InterviewQ>

            <InterviewQ q="Q3: The analogy 'king - man + woman ≈ queen' works in Word2Vec. Derive algebraically what linguistic property the model must have learned.">
              <p>
                The analogy holds when: v(king) - v(man) + v(woman) ≈ v(queen). Rearranging: v(king) -
                v(queen) ≈ v(man) - v(woman). This means the vector difference between &apos;king&apos; and
                &apos;queen&apos; equals the difference between &apos;man&apos; and &apos;woman&apos; — the model encoded
                the &apos;gender&apos; concept as a consistent linear direction in embedding space.
              </p>
              <p className="mt-2 text-ink/70">
                <strong>Limitations:</strong> works ~65% of the time on Google&apos;s analogy test set. Fails for
                irregular mappings, polysemous words, and when the analogy direction interacts with frequency biases.
              </p>
            </InterviewQ>

            <InterviewQ q="Q4 (Advanced): Levy & Goldberg (2014) proved Word2Vec with NEG implicitly factorizes the shifted PMI matrix. What does this imply about when analogy arithmetic fails?">
              <p>
                With K negatives, the optimal Word2Vec solution satisfies: v_w · v_c = PMI(w,c) - log K.
                So Word2Vec performs a low-rank factorization of the shifted PMI matrix — the same family
                as GloVe. Analogy arithmetic fails when:
              </p>
              <ul className="mt-2 space-y-1">
                {[
                  "Low-frequency words: PMI estimates are noisy, so the linear direction is unreliable.",
                  "Polysemous words: 'bank' averages over financial/river senses — analogy fails because the vector is not in a consistent semantic subspace.",
                  "Non-linear relationships: antonyms appear in identical contexts ('hot'/'cold'), so they cluster together rather than being linearly separated.",
                  "Domain shift: the gender direction in news text differs from social media — analogies are corpus-specific.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-ink/80">
                    <span className="text-accent font-bold shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </InterviewQ>
          </div>

          <Insight label="fastText Extension">
            fastText extends Word2Vec with subword n-gram embeddings: v(w) = mean of all character
            n-gram vectors. This enables OOV handling (any unseen word decomposes into known n-grams)
            and improves morphologically rich languages (Turkish, Finnish, German) by sharing parameters
            across inflected forms.
          </Insight>
        </Card>

        {/* ── 2. GloVe ── */}
        <Card>
          <SectionLabel>Section 2</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">GloVe — Global Vectors for Word Representation</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            GloVe (Pennington et al., 2014) directly factorizes the global word-word co-occurrence matrix
            instead of using a predictive local-context model. The intuition: the ratio of co-occurrence
            probabilities encodes semantic relationships more reliably than raw counts.
          </p>

          <MathBlock
            label="GloVe Objective"
            lines={[
              String.raw`J = \sum_{i,j=1}^{V} f(X_{ij})\,\bigl(w_i^\top \tilde{w}_j + b_i + \tilde{b}_j - \log X_{ij}\bigr)^2`,
              String.raw`f(x) = \begin{cases} (x/x_{\max})^\alpha & x < x_{\max} \\ 1 & \text{otherwise} \end{cases} \qquad \alpha = 0.75,\; x_{\max} = 100`,
              String.raw`v_{\text{final}} = w + \tilde{w} \quad \text{(average of word + context vectors)}`,
            ]}
          />

          <div className="mt-6 space-y-4">
            <InterviewQ q="Q5: GloVe uses weighted least-squares loss on log co-occurrence counts. Justify every design choice from first principles.">
              <BoldBulletList items={[
                { label: "Log transformation", desc: "Raw counts span many orders of magnitude. Log compresses this range, preventing dominant pairs from drowning out informative rare pairs." },
                { label: "Weighting f(X_ij)", desc: "Without weighting, a pair co-occurring 10,000× contributes 10,000× more to the loss. f caps contribution at x_max and uses α=0.75 (empirically better than 1) to soft-cap without hard thresholding." },
                { label: "Bias terms b_i, b_j", desc: "Absorb word-specific frequency effects, freeing vector dimensions to encode purely semantic content." },
                { label: "Sum of w and w̃", desc: "The symmetry X_ij = X_ji means averaging the two embedding matrices exploits this, halving variance without adding bias." },
              ]} />
            </InterviewQ>

            <InterviewQ q="Q6: Compare Word2Vec (Skip-Gram + NEG) and GloVe theoretically and empirically. When would you choose one over the other?">
              <CompareTable
                headers={["Dimension", "Word2Vec (Skip-Gram + NEG)", "GloVe"]}
                rows={[
                  ["Training", "Online — one pair at a time, SGD", "Batch — full co-occurrence matrix, then weighted LS"],
                  ["Weighting", "Implicit (sampling frequency)", "Explicit via f(X) — more principled"],
                  ["Scaling", "Scales better with very large corpora", "Faster convergence on fixed corpora"],
                  ["Rare words", "Better — noise distribution oversamples rare words", "Worse — f(X_ij)→0 for rare pairs, near-zero gradient"],
                ]}
              />
              <p className="mt-3 text-ink/80">
                <strong>Choose GloVe:</strong> fixed corpus, train once quickly, corpus &lt;10B tokens.{" "}
                <strong>Choose Word2Vec:</strong> streaming/growing corpus, incremental fine-tuning, very large data.
              </p>
            </InterviewQ>

            <InterviewQ q="Q7 (Advanced): GloVe often trains faster yet struggles more with rare words. Explain both from the objective function.">
              <p>
                <strong>Faster training:</strong> GloVe trains on non-zero entries of the sparse co-occurrence
                matrix X — far fewer than T corpus tokens. Plus the weighted LS objective has better curvature
                than binary classification in NEG, converging in fewer epochs.
              </p>
              <p className="mt-2">
                <strong>Rare word struggle:</strong> For rare pairs, X_ij is small. Plugging into
                f(X_ij) = (X_ij/100)^0.75 ≈ near zero — their gradient contribution is near zero.
                Word2Vec&apos;s noise distribution P_n(w) ∝ f(w)^3/4 deliberately oversamples rare words;
                a rare word appearing once still gets sampled as a negative many times.
              </p>
              <p className="mt-2 text-ink/70">
                <strong>Practical implication:</strong> on domain-specific corpora with many rare technical
                terms (biomedical), Word2Vec generally produces better rare-word embeddings.
              </p>
            </InterviewQ>
          </div>
        </Card>

        {/* ── 3. Sentence Transformers ── */}
        <Card>
          <SectionLabel>Section 3</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Sentence Transformers (SBERT)</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            SBERT (Reimers {"&"} Gurevych, 2019) adapts BERT to produce fixed-size sentence embeddings via a
            pooling layer and contrastive fine-tuning. Vanilla BERT is unsuitable for sentence similarity
            out of the box: mean-pooling BERT embeddings is outperformed by GloVe mean-pooling, because
            BERT&apos;s pre-training (MLM + NSP) doesn&apos;t optimize for geometric similarity.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">SBERT Architecture & Training Objectives</p>
          <MathBlock
            label="SBERT Training Objectives"
            lines={[
              String.raw`\text{Classification:} \quad J = -\log \operatorname{softmax}\!\bigl(W \cdot [u;\, v;\, |u-v|]\bigr)`,
              String.raw`\text{Cosine loss:} \quad J = \operatorname{MSE}\!\bigl(\cos(u,v),\; \text{gold\_score}\bigr)`,
              String.raw`\text{Triplet loss:} \quad J = \max\!\bigl(0,\; \|u - v_+\| - \|u - v_-\| + \varepsilon\bigr)`,
            ]}
          />

          <div className="mt-6 space-y-4">
            <InterviewQ q="Q8: Why is mean-pooling over BERT token embeddings a poor sentence representation without fine-tuning?">
              <p>
                BERT is trained with MLM and NSP. Neither requires sentences with similar meanings to have nearby
                representations. MLM pushes each token&apos;s representation to be predictable from local context —
                the resulting sentence embedding is dominated by high-frequency tokens like &apos;the&apos;.
              </p>
              <p className="mt-2">
                <strong>Geometric issue — anisotropy:</strong> BERT representations occupy a narrow cone in
                high-dimensional space. Nearly all sentence embeddings have high cosine similarity (~0.99) with
                each other regardless of semantic content, because dominant directions are captured by the most
                frequent tokens. After SBERT fine-tuning, the model learns to spread representations across the
                cone, making cosine similarity meaningful.
              </p>
            </InterviewQ>

            <InterviewQ q="Q9: Build a semantic search system over 100M documents with sub-50ms P99 latency. Full system design.">
              <BoldBulletList items={[
                { label: "Embedding model", desc: "Distilled SBERT (all-MiniLM-L6-v2, d=384). 5× speedup over full BERT with <5% accuracy loss. Quantize to INT8 for 2× memory reduction." },
                { label: "Offline indexing", desc: "Batch encode (GPU cluster, ~1M docs/hour). Store in float16. Build HNSW index (ef_construction=200, M=48) → >95% recall@10 at <5ms." },
                { label: "Two-stage serving", desc: "HNSW returns top-1000 candidates (~5ms) → cross-encoder re-ranks (~20ms). Total <30ms P50." },
                { label: "Scaling", desc: "Shard HNSW across 10 nodes (10M vectors each). Merge top-K results per shard. Use Weaviate/Milvus if incremental updates are needed (HNSW re-indexing is expensive)." },
                { label: "Failure mode", desc: "Embedding drift when model updates. Maintain versioned indexes and do zero-downtime blue-green deployment." },
              ]} />
            </InterviewQ>

            <InterviewQ q="Q10: Bi-encoders vs. cross-encoders — derive computational complexity and explain when to use each.">
              <CompareTable
                headers={["", "Bi-Encoder (SBERT)", "Cross-Encoder"]}
                rows={[
                  ["Encoding", "Query and doc independently", "Query + doc concatenated"],
                  ["Pre-compute", "Yes — offline document embeddings", "No — must run at query time"],
                  ["Query cost", "O(1) encoder + O(N·d) dot products", "O(N·L²) — N full BERT passes"],
                  ["Accuracy", "Lower (no token-level interaction)", "Higher (full cross-attention)"],
                  ["Use for", "First-stage retrieval (top-K)", "Re-ranking the top-K results"],
                ]}
              />
              <p className="mt-3 text-ink/80">
                <strong>Production pattern:</strong> bi-encoder retrieves top-100 candidates fast → cross-encoder
                re-ranks those 100. The recall-speed tradeoff parameter is K — larger K improves recall but
                increases re-ranking cost.
              </p>
            </InterviewQ>
          </div>

          <Insight label="Matryoshka Representation Learning (MRL)">
            MRL (Kusupati et al., 2022) trains a single model so any prefix of the embedding is itself a good
            representation. Loss: L_MRL = Sum_m w_m * L(e_1:m, labels) for m in {"{"}64,128,256,512,1024{"}"}. A d=1024
            MRL embedding can be truncated to d=64 at inference for fast first-stage retrieval — no separate
            models, no extra storage. MRL at d=128 achieves ~97-99% of the recall@10 of a dedicated d=128 model.
          </Insight>
        </Card>

        {/* ── 4. Contrastive Learning ── */}
        <Card>
          <SectionLabel>Section 4</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Contrastive Learning — SimCLR {"&"} InfoNCE</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Contrastive learning learns representations by pulling together positive pairs and pushing apart
            negative pairs, without hand-labeled classes. SimCLR and InfoNCE are the foundational frameworks.
          </p>

          <div className="mt-6 border-l-4 border-accent pl-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Core Idea</p>
            <p className="text-sm leading-relaxed text-ink/90">
              For each anchor, define a positive (same sample, different augmentation) and negatives (different
              samples). The loss maximizes similarity to the positive while minimizing similarity to all negatives.
              Structurally identical to cross-entropy softmax, but with no fixed labels — the{" "}
              <em>"correct class"</em> is dynamically defined per anchor.
            </p>
          </div>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">SimCLR — NT-Xent Loss</p>
          <p className="text-sm leading-relaxed text-ink/80 mb-2">
            Given a batch of N samples, create 2 augmented views each → 2N total. For anchor{" "}
            <em>z_i</em>, its positive is <em>z_j</em> (other view of same sample). Negatives are all other
            2N−2 samples in the batch. Loss is computed symmetrically (both <em>z_i→z_j</em> and{" "}
            <em>z_j→z_i</em>) then averaged.
          </p>
          <MathBlock
            label="SimCLR NT-Xent Loss"
            lines={[
              String.raw`\mathcal{L}_{i,j} = -\log \frac{\exp\!\bigl(\operatorname{sim}(z_i, z_j)/\tau\bigr)}{\displaystyle\sum_{k=1,\, k\neq i}^{2N} \exp\!\bigl(\operatorname{sim}(z_i, z_k)/\tau\bigr)}`,
              String.raw`\operatorname{sim}(u,v) = \frac{u^\top v}{\|u\|\,\|v\|}, \quad \tau \approx 0.07`,
            ]}
          />
          <BulletList items={[
            "Same encoder for both views",
            "Nonlinear projection head on top of encoder before loss — key finding from the SimCLR paper",
            "Requires large batches (4096+) for enough negatives",
          ]} />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">InfoNCE — as used in MoCo</p>
          <p className="text-sm leading-relaxed text-ink/80 mb-2">
            Query <em>q</em> is contrasted against 1 positive key <em>k⁺</em> and K negatives from a memory
            bank. Loss is computed in one direction only (query → key).
          </p>
          <MathBlock
            label="InfoNCE Loss (MoCo)"
            lines={[
              String.raw`\mathcal{L} = -\log \frac{\exp\!\bigl(\operatorname{sim}(q, k^+)/\tau\bigr)}{\exp\!\bigl(\operatorname{sim}(q, k^+)/\tau\bigr) + \displaystyle\sum_{i=1}^{K}\exp\!\bigl(\operatorname{sim}(q, k_i)/\tau\bigr)}`,
            ]}
          />
          <BulletList items={[
            "Asymmetric: query encoder updated by backprop, key encoder updated by momentum (moving average)",
            "Memory bank stores negatives from previous batches → K can be 65 536+",
            "Loss computed in one direction only (query → key)",
            "Negatives more diverse but slightly stale",
          ]} />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">SimCLR vs InfoNCE / MoCo</p>
          <CompareTable
            headers={["", "SimCLR", "InfoNCE / MoCo"]}
            rows={[
              ["Negatives", "In-batch (2N−2)", "Memory bank (65 536+)"],
              ["Encoder", "Symmetric, same weights", "Asymmetric, momentum key encoder"],
              ["Loss direction", "Symmetric (both views)", "Asymmetric (query → key only)"],
              ["Projection head", "Yes — key contribution of SimCLR paper", "MoCo v2+ borrowed this from SimCLR"],
              ["Compute requirement", "Large batch / TPUs needed", "Scalable; smaller batches fine"],
            ]}
          />

          <div className="mt-6 space-y-4">
            <InterviewQ q="Q11: Derive why temperature τ in the InfoNCE loss matters. What happens as τ → 0 and τ → ∞?">
              <p>
                τ acts as a sharpness parameter on the similarity softmax.
              </p>
              <div className="mt-2 space-y-2">
                <div className="border-l-4 border-ink/30 pl-3">
                  <p className="font-bold text-ink/90">τ → 0:</p>
                  <p>Softmax → hard argmax. Only the hardest negative receives gradient. Training becomes numerically unstable, causing collapse or very slow convergence.</p>
                </div>
                <div className="border-l-4 border-ink/30 pl-3">
                  <p className="font-bold text-ink/90">τ → ∞:</p>
                  <p>Softmax → uniform over all negatives. Every negative contributes equally, including easy ones. Gradient is spread so thin the model barely learns to discriminate.</p>
                </div>
                <div className="border-l-4 border-accent pl-3">
                  <p className="font-bold text-ink/90">Optimal τ (~0.07):</p>
                  <p>Concentrates gradient on the top few hard negatives while remaining numerically stable. Also implicitly maximizes uniformity of the embedding distribution on the hypersphere (Wang {"&"} Isola 2020).</p>
                </div>
              </div>
            </InterviewQ>

            <InterviewQ q="Q12: SimCLR requires very large batch sizes (4096+). Explain why, and describe two methods to make contrastive learning work with small batches.">
              <p>
                The InfoNCE denominator sums over 2N-2 negatives. With small N, the hardest negative is far
                from the positive (providing weak gradient). Also false negatives become proportionally larger
                at small N.
              </p>
              <BoldBulletList items={[
                { label: "Memory bank (MoCo)", desc: "Maintain a FIFO queue of embeddings from previous batches (K=65536 negatives without GPU memory overhead). A momentum encoder (β=0.999) ensures queue consistency." },
                { label: "Hard negative mining", desc: "Maintain a FAISS ANN index and mine negatives close to the anchor. A small batch of 64 with hand-picked hard negatives can outperform a random batch of 4096. Apply a similarity threshold to filter false negatives." },
              ]} />
            </InterviewQ>

            <InterviewQ q="Q13: What is representation collapse? How do SimCLR, BYOL, and Barlow Twins each address it?">
              <p>
                Collapse: the encoder maps all inputs to the same constant vector. The loss is minimized
                trivially — positive and negative pairs are all at the same point.
              </p>
              <div className="mt-3 space-y-2">
                {[
                  { method: "SimCLR", approach: "Explicit negatives penalize any two identical embeddings unless they are augmentations of each other. Requires large batches." },
                  { method: "BYOL", approach: "Removes negatives entirely. Uses online + target (momentum-updated) networks with a predictor. Batch normalization implicitly prevents collapse by whitening the representation distribution." },
                  { method: "Barlow Twins", approach: "Cross-correlation matrix of embeddings from two views should be the identity: diagonal (invariance) = 1, off-diagonal (redundancy) = 0. Directly penalizes dimensional collapse." },
                ].map((item) => (
                  <div key={item.method} className="flex gap-3 text-sm">
                    <span className="shrink-0 font-bold text-accent border-2 border-ink bg-accent px-2 py-0.5 text-[10px] uppercase tracking-widest text-ink whitespace-nowrap">{item.method}</span>
                    <span className="text-ink/80">{item.approach}</span>
                  </div>
                ))}
              </div>
            </InterviewQ>

            <InterviewQ q="Q14 (Advanced): SimCLR discards the projection head g(·) at inference, keeping only f(·). Why does this consistently improve downstream task performance?">
              <p>
                The projection head g(·) must make z = g(f(x)) invariant to augmentations. If augmentations
                include color jitter, z must discard color information. If they include cropping, z discards
                spatial layout. The projection head is the layer that discards this information — but
                augmentation-specific features (color, spatial layout) are often task-relevant.
              </p>
              <p className="mt-2 text-ink/70">
                <strong>Information bottleneck view:</strong> g maximizes I(z; augmentation-invariant features)
                while minimizing I(z; augmentation-specific features). f(·) retains the richer, more linearly
                separable representation. Design implication: the projection head can be aggressive (small
                bottleneck) without harming downstream performance, since it is discarded.
              </p>
            </InterviewQ>
          </div>
        </Card>

        {/* ── 5. Embedding Geometry ── */}
        <Card>
          <SectionLabel>Section 5</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Embedding Space Geometry</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Embedding spaces are Euclidean (R^d), but distances, angles, and norms behave in surprising
            ways at high dimension. Understanding the geometry is critical for debugging retrieval systems.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Isotropy vs. Anisotropy</p>
          <p className="text-sm text-ink/80 mb-4">
            Isotropic embeddings are uniformly distributed across the unit hypersphere — maximizes the
            expressiveness of cosine similarity. Anisotropic embeddings (raw BERT) cluster in a narrow
            cone: most pairs appear highly similar regardless of semantic content. Measure: average cosine
            similarity of random pairs. Isotropic → ~0. Anisotropic → much greater than 0.
          </p>

          <div className="mt-6 space-y-4">
            <InterviewQ q="Q15: Explain the 'hubness' phenomenon in high-dimensional spaces. Derive why it occurs and describe two mitigations.">
              <p>
                Hubness: as dimensionality d increases, a small fraction of points become the nearest neighbor
                of O(N^{1/2}) other points. This causes top-K retrieval to return the same few hub points for
                most queries, degrading diversity and accuracy.
              </p>
              <p className="mt-2">
                <strong>Why it occurs:</strong> In R^d, for random unit vectors, Var[sim(x,y)] = 1/d. Points
                near the centroid of the data distribution have systematically smaller average distance to all
                other points, making them hubs. The effect grows with dimensionality.
              </p>
              <BoldBulletList items={[
                { label: "Mitigation 1 — Mutual k-NN", desc: "Only count x_j as a neighbor of x_i if x_i is also a neighbor of x_j. Hubs can be neighbors of many, but few are neighbors of hubs. Reduces hubness but reduces recall." },
                { label: "Mitigation 2 — CSLS score", desc: "sim_CSLS(x,y) = 2·cos(x,y) - r_k(x) - r_k(y), where r_k(x) is mean similarity of x to its k nearest neighbors. Normalizes by neighborhood crowdedness, penalizing hubs. Standard in cross-lingual word translation." },
              ]} />
            </InterviewQ>

            <InterviewQ q="Q16: Your embedding model produces L2 norms that correlate strongly with word frequency. What geometric problem does this cause and how do you fix it?">
              <p>
                If ||v_w|| correlates with frequency, then dot product s(u,v) = u^T v ∝ ||u||·||v||·cos(θ).
                High-frequency words get large dot products with everything, biasing retrieval toward frequent words.
                Cosine similarity (cosine = u^Tv / (||u||·||v||)) is norm-invariant, so it is unaffected.
              </p>
              <BoldBulletList items={[
                { label: "Fix 1", desc: "L2-normalize all embeddings before indexing. Projects everything onto the unit hypersphere. Cosine and dot product become equivalent." },
                { label: "Fix 2", desc: "Whitening transform: subtract mean, multiply by Σ^{-1/2}. Projects embeddings into an isotropic space. More expensive but removes both norm bias and anisotropy (effective for post-processing BERT embeddings)." },
              ]} />
            </InterviewQ>
          </div>
        </Card>

        {/* ── 6. Similarity Metrics ── */}
        <Card>
          <SectionLabel>Section 6</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Similarity Metrics — When to Use What</h2>
          <CompareTable
            headers={["Metric", "Formula", "When to Use", "Watch Out For"]}
            rows={[
              ["Cosine", "u·v / (||u||·||v||)", "Default for normalized embeddings; norm-invariant", "Hubness still present; doesn't use magnitude info"],
              ["Dot Product", "u·v", "Normalized embeddings; recommendation systems (MIPS)", "Biased by norm/frequency if embeddings not normalized"],
              ["Euclidean", "||u - v||₂", "After PCA/UMAP; metric-space trained embeddings", "Curse of dimensionality; bad for raw high-d embeddings"],
            ]}
          />

          <div className="mt-6 space-y-4">
            <InterviewQ q="Q17: When does dot product outperform cosine similarity? Derive the condition formally.">
              <p>
                Dot product = ||u||·||v||·cos(θ). Cosine = cos(θ). Dot product adds the magnitude term
                ||u||·||v||. So dot product outperforms cosine when magnitude carries task-relevant signal.
              </p>
              <p className="mt-2">
                This happens in <strong>recommendation systems</strong>: item popularity (encoded in the embedding
                norm) is itself a signal — a popular item should rank higher all else equal. In MIPS (Maximum
                Inner Product Search), you explicitly want the item with the highest norm-weighted similarity.
              </p>
              <p className="mt-2 text-ink/70">
                <strong>Condition:</strong> use dot product when embeddings are L2-normalized (then dot product
                = cosine, no difference) OR when magnitude encodes task-relevant information. Use cosine when
                you want pure directional similarity independent of training-time frequency effects.
              </p>
            </InterviewQ>
          </div>
        </Card>

        {/* ── 7. PCA ── */}
        <Card>
          <SectionLabel>Section 7</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">PCA — Dimensionality Reduction for Embeddings</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            PCA finds orthogonal directions of maximum variance in the embedding space. The first k principal
            components capture the most variance, compressing the embedding while losing the least information.
          </p>

          <MathBlock
            label="PCA"
            lines={[
              String.raw`\Sigma = \frac{1}{N} X^\top X \quad [d \times d]`,
              String.raw`\Sigma = V \Lambda V^\top \quad \text{(eigendecomposition)}`,
              String.raw`x_k = V_k^\top x \quad \text{(k-dimensional projection)}`,
              String.raw`\text{Explained variance ratio:} \quad \frac{\lambda_i}{\sum_j \lambda_j}`,
            ]}
          />

          <div className="mt-4 space-y-4">
            <InterviewQ q="Q18: When does PCA hurt retrieval quality rather than help it?">
              <p>
                PCA removes the directions of lowest variance. But low-variance dimensions can still be
                semantically important for retrieval — a dimension that rarely varies across your corpus
                might be the exact signal that distinguishes relevant from irrelevant documents for a
                specific query.
              </p>
              <BoldBulletList items={[
                { label: "Problem 1", desc: "Top PCs may capture noise or frequency effects (e.g., document length), not semantic content. The first principal component of BERT embeddings often tracks sentence length." },
                { label: "Problem 2", desc: "PCA is linear — it cannot capture non-linear structure in the embedding manifold." },
                { label: "Problem 3", desc: "PCA truncation distorts relative distances between documents. Two documents close in the original space may be far apart after truncation if they differ mainly in low-variance dimensions." },
                { label: "Fix", desc: "Apply PCA after whitening (normalizing variance per dimension). This prevents frequency/length effects from dominating PCs. Alternatively, use PCA only as a post-processing step before HNSW indexing, not for the retrieval representation itself." },
              ]} />
            </InterviewQ>
          </div>
        </Card>

        {/* ── 8. UMAP ── */}
        <Card>
          <SectionLabel>Section 8</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">UMAP — Non-Linear Dimensionality Reduction</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            UMAP (McInnes et al., 2018) preserves local topological structure using fuzzy simplicial
            complexes. It constructs a weighted k-NN graph in the high-dimensional space, then minimizes
            the cross-entropy between the high-d and low-d fuzzy sets via SGD.
          </p>

          <CompareTable
            headers={["", "PCA", "UMAP"]}
            rows={[
              ["Type", "Linear", "Non-linear"],
              ["New point projection", "O(d·k) matrix multiply — fast", "Requires re-running on full dataset (Parametric UMAP fixes this)"],
              ["Distance meaning", "Approx. preserves global Euclidean structure", "Local distances meaningful; global distances are NOT"],
              ["Deterministic", "Yes (up to sign flips)", "No — random initialization"],
              ["Hyperparameters", "k (explained variance threshold)", "n_neighbors, min_dist — sensitive, no principled choice"],
              ["Use for", "Compression before indexing; production retrieval", "Visualization; cluster diagnostics"],
            ]}
          />

          <div className="mt-6 space-y-4">
            <InterviewQ q="Q19 (Advanced): List the specific ways UMAP fails in production retrieval systems that PCA does not. When is Parametric UMAP a valid middle ground?">
              <div className="space-y-2">
                {[
                  { n: "1", title: "Not parametric by default", body: "You cannot embed a new point without re-running the full algorithm (O(N log N) per batch). For a streaming system ingesting 1M new embeddings/day, completely infeasible. PCA: new point projection is a single O(d·k) matrix multiply." },
                  { n: "2", title: "Global distances are meaningless", body: "UMAP optimizes local neighborhood preservation. Two semantically close clusters can appear far apart in UMAP space. Any retrieval using UMAP distances for cross-cluster queries will silently fail. PCA preserves global Euclidean structure (approximately)." },
                  { n: "3", title: "Non-deterministic", body: "Random initialization produces different layouts each run. Breaks reproducibility requirements in regulated industries (finance, healthcare)." },
                  { n: "4", title: "Hyperparameter sensitivity", body: "n_neighbors and min_dist dramatically alter cluster structure with no principled way to choose them for retrieval quality." },
                ].map((item) => (
                  <div key={item.n} className="flex gap-3 text-sm">
                    <span className="shrink-0 font-bold text-accent">{item.n}.</span>
                    <span><strong>{item.title}:</strong> {item.body}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-ink/80">
                <strong>Parametric UMAP:</strong> trains a neural network to approximate the UMAP embedding
                function — new points embedded via a forward pass (O(1)). Solves problems 1 and 3, but
                retains global distance distortion and hyperparameter sensitivity, plus adds neural approximation
                error.
              </p>
              <p className="mt-2 text-ink/70">
                <strong>Decision rule:</strong> PCA for production retrieval/compression. UMAP for visualization
                and cluster diagnostics only. Parametric UMAP for monitoring embedding drift where visual
                fidelity matters more than retrieval accuracy.
              </p>
            </InterviewQ>
          </div>
        </Card>

        {/* ── 9. Quick Reference ── */}
        <Card>
          <SectionLabel>Quick Reference</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Method Comparison Table</h2>
          <CompareTable
            headers={["Method", "Key Mechanism", "Weakness", "When to Use"]}
            rows={[
              ["Word2Vec (SG+NEG)", "Local context prediction; noise contrastive training", "No subword; frequency bias in norms", "Static word embeddings on large corpora"],
              ["GloVe", "Weighted factorization of log co-occurrence matrix", "Requires full corpus upfront; no subword", "Fixed corpus, fast training, interpretable"],
              ["Sentence Transformers", "Siamese BERT with similarity fine-tuning", "Expensive encoding; fixed context window", "Semantic search, clustering, retrieval"],
              ["SimCLR / InfoNCE", "Pull positives, push negatives via temperature softmax", "Large batch required; augmentation design critical", "Self-supervised vision/NLP pretraining"],
              ["Cosine Similarity", "Angle between vectors, norm-invariant", "Hubness still present", "Default for normalized embeddings"],
              ["Dot Product", "Unnormalized inner product", "Biased by norm/frequency if not normalized", "Normalized embeddings; recommendation systems"],
              ["PCA", "Linear projection maximizing variance", "Linear only; top PCs may capture noise", "Compression before indexing; visualization baseline"],
              ["UMAP", "Fuzzy topological structure preservation", "No quantitative distance meaning; non-deterministic", "Visualization; manifold-aware cluster diagnostics"],
            ]}
          />
        </Card>

      </main>
    </div>
  );
}
