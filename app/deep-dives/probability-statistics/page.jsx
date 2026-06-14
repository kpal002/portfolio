import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import katex from "katex";

export const metadata = {
  title: "Probability & Statistics — Deep Dives — Kuntal Pal",
  description:
    "Complete probability and statistics study notes: Bayes' theorem, distributions, MLE, hypothesis testing, confidence intervals, A/B testing, Bayesian inference.",
};

function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="h-3 w-3 shrink-0 border-2 border-ink bg-accent" />
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted">{children}</p>
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
          <span><strong>{item.label}:</strong> {item.desc}</span>
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
              <th key={i} className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-ink/30">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 leading-relaxed ${j === 0 ? "font-bold text-ink" : "text-ink/80"}`}>{cell}</td>
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

function binomialPMF(n, p) {
  const probs = new Array(n + 1);
  probs[0] = Math.pow(1 - p, n);
  for (let k = 0; k < n; k++) {
    probs[k + 1] = probs[k] * ((n - k) / (k + 1)) * (p / (1 - p));
  }
  return probs;
}

function BinomialBarChart({ n, p, label, note }) {
  const probs = binomialPMF(n, p);
  const maxP = Math.max(...probs);
  const W = 300;
  const H = 80;
  const padL = 4;
  const padR = 4;
  const padB = 4;
  const chartW = W - padL - padR;
  const barW = chartW / probs.length;

  return (
    <div className="border-2 border-ink bg-bg p-4">
      <div className="flex items-baseline justify-between mb-2">
        <p className="text-[10px] font-bold font-mono text-ink">{label}</p>
        <p className="text-[10px] text-ink/50 font-mono">{note}</p>
      </div>
      <svg viewBox={`0 0 ${W} ${H + padB}`} className="w-full" style={{ display: "block" }}>
        {probs.map((prob, k) => {
          const barH = (prob / maxP) * H;
          const x = padL + k * barW;
          const y = H - barH;
          return (
            <rect
              key={k}
              x={x + 0.5}
              y={y}
              width={Math.max(barW - 1, 0.5)}
              height={barH}
              fill="#0a0a0a"
            />
          );
        })}
      </svg>
    </div>
  );
}

function BinomialConvergencePlot() {
  return (
    <div className="my-4 border-2 border-ink bg-bg p-5">
      <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">
        Visualising the convergence — Binomial(n, 0.5)
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <BinomialBarChart n={5}   p={0.5} label="n = 5"   note="discrete, lumpy" />
        <BinomialBarChart n={20}  p={0.5} label="n = 20"  note="smoother bell" />
        <BinomialBarChart n={100} p={0.5} label="n = 100" note="nearly Gaussian" />
      </div>
      <p className="mt-3 text-[11px] text-ink/50 font-mono">
        As n ↑: discrete mass concentrates into a continuous bell curve
      </p>
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

export default function ProbabilityStatisticsPage() {
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

        {/* Hero */}
        <Card>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">
            <span className="text-accent">{">"} </span>study notes · amazon applied scientist ii
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            Probability {"&"} Statistics
          </h1>
          <p className="mb-6 text-base leading-relaxed text-ink/80">
            The mathematical foundations everything in ML is built on — Bayes' theorem, key distributions,
            MLE, hypothesis testing, confidence intervals, A/B testing, and Bayesian inference.
          </p>
          <ul className="flex flex-wrap gap-2">
            {["Bayes' Theorem", "Distributions", "MLE", "Hypothesis Testing", "Confidence Intervals", "A/B Testing", "Bayesian Inference", "MAP"].map((t) => (
              <li key={t} className="border-2 border-ink bg-bg px-2 py-0.5 text-[11px] font-bold">{t}</li>
            ))}
          </ul>
        </Card>

        {/* ── 1. Conditional Probability ── */}
        <Card>
          <SectionLabel>Section 1</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Conditional Probability</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            A and B are two events (outcomes) of a random experiment. Conditional probability asks:
            given that B happened, how likely is A?
          </p>

          <MathBlock
            label="Definition"
            lines={[
              String.raw`P(A \mid B) = \frac{P(A \cap B)}{P(B)}`,
              String.raw`P(A \cap B) = P(A \mid B) \cdot P(B) \quad \text{(Multiplication Law)}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">The Inverse Problem — P(B|A) from P(A|B)</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            Given P(A|B), how do you get P(B|A)? Apply the multiplication law to both orderings of the
            joint probability P(A∩B):
          </p>
          <MathBlock
            label="Deriving Bayes' theorem from conditional probability"
            lines={[
              String.raw`P(A \cap B) = P(A \mid B) \cdot P(B) = P(B \mid A) \cdot P(A)`,
              String.raw`P(B \mid A) = \frac{P(A \mid B) \cdot P(B)}{P(A)} \quad \text{(Bayes' theorem)}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Law of Total Probability</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            If events B₁, B₂, …, Bₙ partition the sample space Ω (they are mutually exclusive and
            exhaustive: Ω = ∪Bᵢ, Bᵢ ∩ Bⱼ = ∅ for i ≠ j), then:
          </p>
          <MathBlock
            label="Law of total probability"
            lines={[
              String.raw`P(A) = \sum_i P(A \mid B_i) \cdot P(B_i)`,
              String.raw`P(A) = P(A \mid B) \cdot P(B) + P(A \mid B^c) \cdot P(B^c) \quad \text{(simplest case)}`,
              String.raw`P(A \mid B) = \frac{P(B \mid A) \cdot P(A)}{P(B \mid A)\cdot P(A) + P(B \mid \neg A)\cdot P(\neg A)}`,
            ]}
          />

          <Insight label="Why this matters for Bayes' theorem">
            The law of total probability shows where the denominator P(B) in Bayes{"'"} theorem comes from —
            it{"'"}s not mysterious, it{"'"}s just the sum over all ways B could have happened. It acts as a
            normalizing constant ensuring the posterior probabilities sum to 1.
          </Insight>
        </Card>

        {/* ── 2. Bayes' Theorem ── */}
        <Card>
          <SectionLabel>Section 2</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Bayes{"'"} Theorem</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Describes how to update a belief (probability) when new evidence arrives. The mathematical
            foundation of Bayesian inference, spam filters, medical diagnosis, and RAG fact verification.
          </p>

          <MathBlock
            label="The formula"
            lines={[
              String.raw`P(A \mid B) = \frac{P(B \mid A) \cdot P(A)}{P(B)}`,
              String.raw`P(B) = P(B \mid A)\cdot P(A) + P(B \mid \neg A)\cdot P(\neg A) \quad \text{(law of total probability)}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Worked Example — Supplier Fraud Detection</p>
          <CodeBlock
            label="P(Fraud | Flag) = ?"
            code={`Known:
  P(Fraud)        = 0.05   ← 5% of suppliers commit fraud (prior)
  P(Flag | Fraud) = 0.90   ← 90% of fraud cases get flagged
  P(Flag | Legit) = 0.10   ← 10% of legit cases also get flagged

Step 1: P(Flag) = P(Flag|Fraud)·P(Fraud) + P(Flag|Legit)·P(Legit)
              = 0.90×0.05 + 0.10×0.95  =  0.045 + 0.095  =  0.14

Step 2: P(Fraud | Flag) = 0.90 × 0.05 / 0.14  =  0.321

Even with a flag, only 32% chance of actual fraud.
Why? Fraud is rare (5%) — most flags are false positives.
This is the base rate fallacy — ignoring the prior destroys inference.`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">The Base Rate Fallacy</p>
          <CodeBlock
            label="99% accurate test on a rare disease"
            code={`P(Disease)           = 0.001   (1 in 1000)
P(Positive | Disease) = 0.99
P(Positive | Healthy) = 0.01

P(Disease | Positive) = 0.99×0.001 / (0.99×0.001 + 0.01×0.999)
                      = 0.00099 / 0.01098  =  0.09  =  9%

A 99% accurate test on a rare disease → positive is only 9% likely true.
The rarity of the disease dominates.`}
          />

          <InterviewCallout>
            Bayes{"'"} theorem updates a prior belief P(A) with new evidence B to get the posterior P(A|B).
            The key insight: you cannot ignore the prior — rare events remain unlikely even after positive
            tests (base rate fallacy). In sustainability this applies to supplier fraud detection, emissions
            claim verification, and any Bayesian risk model.
          </InterviewCallout>
        </Card>

        {/* ── 3. Independence ── */}
        <Card>
          <SectionLabel>Section 3</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Independence</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Two events A and B are <strong>independent</strong> if knowing one occurred gives no extra
            information about the other.
          </p>

          <MathBlock
            label="Definition — two equivalent forms"
            lines={[
              String.raw`P(A \mid B) = P(A) \;\Leftrightarrow\; P(B \mid A) = P(B)`,
              String.raw`P(A \cap B) = P(A) \cdot P(B) \quad \text{(product rule for independent events)}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Concrete Example — Cards</p>
          <CodeBlock
            label="A = spade, B = queen"
            code={`P(A) = 13/52 = 1/4    (13 spades in 52 cards)
P(B) = 4/52  = 1/13   (4 queens in 52 cards)

Are they independent? Check:
  P(A ∩ B) = P(queen of spades) = 1/52
  P(A)·P(B) = 1/4 × 1/13 = 1/52  ✓

They match → A and B are independent.
Knowing a card is a queen doesn't change the probability it's a spade.`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Independence vs Mutual Exclusivity</p>
          <div className="space-y-3">
            <div className="border-l-4 border-ink pl-5">
              <p className="text-sm font-bold">Independent: P(A∩B) = P(A)·P(B)</p>
              <p className="mt-1 text-sm text-ink/80">Knowing A happened tells you nothing about B. Both can happen simultaneously.</p>
            </div>
            <div className="border-l-4 border-ink pl-5">
              <p className="text-sm font-bold">Mutually exclusive: P(A∩B) = 0</p>
              <p className="mt-1 text-sm text-ink/80">They cannot both happen. Knowing A happened tells you B did NOT happen — the most extreme dependence.</p>
            </div>
          </div>

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Reliability — Independence in Practice</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            When components fail independently, the product rule gives exact reliability calculations.
          </p>
          <CodeBlock
            label="Series vs parallel systems (n=10, p=0.05 per component)"
            code={`SERIES — all must succeed (chain fails if any link fails):
  P(series success) = (1-p)ⁿ = (0.95)¹⁰ ≈ 0.60
  P(series failure) = 1 - (1-p)ⁿ = 1 - 0.95¹⁰ ≈ 0.40

  Even with 95% reliable components, a chain of 10
  has only 60% chance of working.

PARALLEL — any one succeeding is enough:
  P(parallel failure) = pⁿ = (0.05)¹⁰ ≈ 10⁻¹³
  P(parallel success) = 1 - pⁿ  ≈  1.0

  Redundancy drives failure probability to near zero.`}
          />

          <Insight label="ML Connection">
            Independence assumptions power most of ML. Naive Bayes classifies text by assuming words
            are independent given the class. MLE treats training examples as independent draws.
            Bootstrapping in Random Forests relies on approximate independence between trees.
            When independence is violated (e.g. time series), standard methods break.
          </Insight>
        </Card>

        {/* ── 4. PDF and CDF ── */}
        <Card>
          <SectionLabel>Section 4</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">PDF and CDF</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Two fundamental ways to describe a probability distribution. Every distribution you encounter
            in ML can be described by both.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Discrete vs Continuous Random Variables</p>
          <CompareTable
            headers={["Discrete", "Continuous"]}
            rows={[
              ["Takes countable values: 0, 1, 2, …", "Takes any value in an interval: x ∈ ℝ"],
              ["Described by PMF — Probability Mass Function", "Described by PDF — Probability Density Function"],
              ["P(X=k) gives exact probability of each value", "P(X=x) = 0 for any single point — only intervals have probability"],
              ["Example: coin flips, audit failure counts", "Example: emissions values, model scores, wait times"],
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">PMF — Probability Mass Function (discrete)</p>
          <MathBlock
            label="PMF — Definition and properties"
            lines={[
              String.raw`p(k) = P(X = k),\quad p(k) \geq 0,\quad \sum_k p(k) = 1`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">PDF — Probability Density Function (continuous)</p>
          <MathBlock
            label="PDF — Definition and properties"
            lines={[
              String.raw`f(x) \geq 0,\quad \int_{-\infty}^{+\infty} f(x)\,dx = 1`,
              String.raw`P(a \leq X \leq b) = \int_a^b f(x)\,dx \quad \text{(area under the curve)}`,
              String.raw`f(x) = \frac{1}{\sqrt{2\pi}}\exp\!\left(-\frac{x^2}{2}\right) \quad \text{(Gaussian } N(0,1)\text{)}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">CDF — Cumulative Distribution Function</p>
          <MathBlock
            label="CDF — Definition"
            lines={[
              String.raw`F(x) = P(X \leq x)`,
              String.raw`\text{Discrete:}\; F(x) = \sum_{k \leq x} p(k),\qquad \text{Continuous:}\; F(x) = \int_{-\infty}^{x} f(t)\,dt`,
              String.raw`f(x) = \frac{dF(x)}{dx},\quad P(a \leq X \leq b) = F(b) - F(a),\quad P(X > a) = 1 - F(a)`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">CDF in Practice</p>
          <MathBlock
            label="Z-score and hypothesis testing"
            lines={[
              String.raw`\Phi(z) = P(Z \leq z) \quad \text{(Standard Normal CDF)}`,
              String.raw`Z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}},\quad p\text{-value (two-tailed)} = 2(1 - \Phi(|Z|))`,
              String.raw`\Phi^{-1}(0.975) = 1.96 \;\text{(95\% CI)},\quad \Phi^{-1}(0.995) = 2.576 \;\text{(99\% CI)}`,
            ]}
          />

          <Insight label="Why PDF > 1 is not a problem">
            A PDF value of 3.0 at some point x just means the distribution is very concentrated there.
            It{"'"}s a density, not a probability. The probability of a tiny interval [x, x+dx] is
            f(x)·dx — and for small enough dx this is always ≤ 1. Only areas (integrals) are
            probabilities.
          </Insight>
        </Card>

        {/* ── 5. Key Distributions ── */}
        <Card>
          <SectionLabel>Section 5</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Key Probability Distributions</h2>

          <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Gaussian (Normal) — N(μ, σ²)</p>
          <MathBlock
            label="Gaussian PDF and properties"
            lines={[
              String.raw`f(x) = \frac{1}{\sigma\sqrt{2\pi}}\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)`,
              String.raw`Z = \frac{X - \mu}{\sigma} \sim N(0,1),\qquad \bar{X} \sim N\!\left(\mu,\,\frac{\sigma^2}{n}\right) \;\text{(CLT)}`,
            ]}
          />
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted/70 mt-3">Gaussian in ML</p>
          <BulletList items={[
            "Linear/Logistic Regression: assumes Gaussian errors (residuals)",
            "Gaussian Discriminant Analysis: models P(x|y) as Gaussian per class",
            "Bayesian inference: Gaussian prior + Gaussian likelihood = Gaussian posterior (conjugate)",
            "Neural network weights: initialized from N(0, σ²) by default",
          ]} />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Bernoulli — Bernoulli(p)</p>
          <MathBlock
            label="Bernoulli PMF"
            lines={[
              String.raw`P(X=x) = p^x(1-p)^{1-x} \quad x \in \{0,1\}`,
              String.raw`\mathbb{E}[X] = p,\quad \text{Var}(X) = p(1-p)`,
            ]}
          />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Binomial — Binomial(N, p)</p>
          <MathBlock
            label="Binomial PMF"
            lines={[
              String.raw`P(X=k) = \binom{N}{k} p^k (1-p)^{N-k}`,
              String.raw`\mathbb{E}[X] = Np,\quad \text{Var}(X) = Np(1-p)`,
            ]}
          />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Poisson — Poisson(λ)</p>
          <MathBlock
            label="Poisson PMF"
            lines={[
              String.raw`P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}`,
              String.raw`\mathbb{E}[X] = \lambda,\quad \text{Var}(X) = \lambda \quad \text{(both equal }\lambda\text{)}`,
            ]}
          />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Geometric — Geometric(p)</p>
          <MathBlock
            label="Geometric PMF"
            lines={[
              String.raw`P(X = k) = (1-p)^{k-1} \cdot p \quad k = 1, 2, 3, \ldots`,
              String.raw`\mathbb{E}[X] = \frac{1}{p},\quad \text{Var}(X) = \frac{1-p}{p^2}`,
            ]}
          />
          <div className="border-l-4 border-accent pl-5 mt-4">
            <p className="text-sm font-bold">Memoryless property</p>
            <p className="mt-1 text-sm text-ink/80">
              P(X {">"} m+n | X {">"} m) = P(X {">"} n). If fraud hasn{"'"}t been caught in the first m audits,
              the remaining wait has the same distribution as starting fresh — each trial is independent
              so the past gives no information about the future.
            </p>
          </div>

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Exponential — Exp(λ)</p>
          <p className="text-sm text-ink/90 mb-3">
            The continuous counterpart of the geometric — models the <em>time</em> until the first event
            in a Poisson process. Where geometric counts discrete trials, exponential measures continuous
            waiting time.
          </p>
          <MathBlock
            label="Exponential PDF and CDF"
            lines={[
              String.raw`f(x) = \lambda e^{-\lambda x},\quad F(x) = 1 - e^{-\lambda x} \quad (x \geq 0)`,
              String.raw`\mathbb{E}[X] = \frac{1}{\lambda},\quad \text{Var}(X) = \frac{1}{\lambda^2}`,
            ]}
          />
          <div className="border-l-4 border-accent pl-5 mt-4">
            <p className="text-sm font-bold">Memoryless property — unique among continuous distributions</p>
            <p className="mt-1 text-sm text-ink/80">
              P(X {">"} s+t | X {">"} s) = P(X {">"} t). Having already waited s seconds tells you nothing
              about how much longer you{"'"}ll wait. The exponential is the <em>only</em> continuous
              distribution with this property — the continuous analogue of geometric{"'"}s memorylessness.
            </p>
          </div>

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Geometric ↔ Exponential Bridge</p>
          <CompareTable
            headers={["Geometric(p)", "Exponential(λ)"]}
            rows={[
              ["Discrete — counts trials", "Continuous — measures time"],
              ["PMF: (1-p)^(k-1)·p", "PDF: λe^(-λx)"],
              ["E[X] = 1/p", "E[X] = 1/λ"],
              ["Var(X) = (1-p)/p²", "Var(X) = 1/λ²"],
              ["Memoryless: past trials irrelevant", "Memoryless: past wait time irrelevant"],
              ["Use: trials until first success", "Use: wait time between Poisson events"],
            ]}
          />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Gamma — Gamma(α, β)</p>
          <p className="text-sm text-ink/90 mb-3">
            Generalises the exponential — models the waiting time until the <em>α-th</em> event in a
            Poisson process. Where Exponential(λ) is the wait for the 1st event, Gamma(α, λ) is the
            wait for the α-th event.
          </p>
          <MathBlock
            label="Gamma PDF and properties"
            lines={[
              String.raw`f(x) = \frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha-1} e^{-\beta x} \quad (x \geq 0)`,
              String.raw`\mathbb{E}[X] = \frac{\alpha}{\beta},\quad \text{Var}(X) = \frac{\alpha}{\beta^2}`,
              String.raw`\Gamma(n) = (n-1)!\;,\quad \Gamma(1/2) = \sqrt{\pi}\;,\quad \Gamma(\alpha+1) = \alpha\,\Gamma(\alpha)`,
            ]}
          />

          <p className="mt-4 mb-1 text-[10px] font-bold uppercase tracking-widest text-muted/70">Special cases</p>
          <CodeBlock
            label="How Gamma generalises other distributions"
            code={`α = 1:          Gamma(1, β) = Exponential(β)
                ← wait for 1st event = exponential

α = k/2, β = 1/2: Gamma(k/2, 1/2) = Chi-squared(k)
                ← sum of k squared standard normals

α integer:      Erlang distribution
                ← used in queueing theory (call centre wait times)

As α → ∞:       Gamma → Gaussian  (by CLT — sum of α exponentials)`}
          />

          <CodeBlock
            label="Example — time until 3rd audit failure"
            code={`Supplier has audit failures at rate β = 2 per year → Poisson(2)
X = time until the 3rd failure  →  X ~ Gamma(α=3, β=2)

E[X] = 3/2 = 1.5 years until the 3rd failure
Var(X) = 3/4 = 0.75,   Std = 0.87 years

Compare to Exponential(2) — wait for 1st failure:
  E[X] = 1/2 = 0.5 years
  Each additional event adds 1/β = 0.5 years on average`}
          />

          <div className="border-l-4 border-accent pl-5 mt-4">
            <p className="text-sm font-bold">Conjugate prior for Poisson and Exponential</p>
            <p className="mt-1 text-sm text-ink/80">
              Gamma is the conjugate prior for both the Poisson rate λ and the Exponential rate λ.
              Prior Gamma(α, β) + n Poisson observations summing to Σxᵢ → Posterior Gamma(α + Σxᵢ, β + n).
              This is why Gamma appears throughout Bayesian inference.
            </p>
          </div>

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Chi-Squared — χ²(k)</p>
          <p className="text-sm text-ink/90 mb-3">
            The distribution of the sum of squares of k independent standard normal random variables.
            It is a special case of Gamma and appears everywhere hypothesis testing touches variance.
          </p>

          <CodeBlock
            label="Derivation from Normal — step by step"
            code={`Start with Z ~ N(0,1) — a standard normal.

Step 1: What is the distribution of Z²?

  Z is symmetric around 0, so Z² is always non-negative.
  For z > 0, the CDF of Z² is:
    P(Z² ≤ z) = P(-√z ≤ Z ≤ √z) = 2Φ(√z) - 1

  Differentiate to get the PDF of Z²:
    f(z) = (1/√z) · φ(√z) = (1/√(2πz)) · e^(-z/2)

  This is Gamma(1/2, 1/2) — also written χ²(1).

Step 2: Sum k independent Z²s.

  Let Z₁, Z₂, ..., Zₖ ~ N(0,1) independently.
  Define: X = Z₁² + Z₂² + ... + Zₖ²

  Each Zᵢ² ~ Gamma(1/2, 1/2)
  Sum of k independent Gammas with same β:
    Gamma(α₁,β) + Gamma(α₂,β) = Gamma(α₁+α₂, β)

  Therefore: X ~ Gamma(k/2, 1/2) = χ²(k)  ✓

PDF: f(x) = x^(k/2-1) · e^(-x/2) / (2^(k/2) · Γ(k/2))   for x ≥ 0`}
          />

          <CodeBlock
            label="Properties"
            code={`k = degrees of freedom

E[X] = k
Var(X) = 2k

Shape:
  k=1,2:  right-skewed, peak near 0
  k=3-10: moderate right skew
  k→∞:    approaches N(k, 2k)  by CLT

Additivity: χ²(m) + χ²(n) = χ²(m+n)  ← independent sums

Special cases:
  k=1: χ²(1) = Z²  (square of a standard normal)
  k=2: χ²(2) = Exponential(1/2)  (appears in survival analysis)`}
          />

          <p className="mt-4 mb-1 text-[10px] font-bold uppercase tracking-widest text-muted/70">Where Chi-squared appears in statistics</p>
          <BoldBulletList items={[
            { label: "Chi-squared test", desc: "H₀: no association between categorical variables. Test statistic χ² = Σ(O-E)²/E follows χ²(df) under H₀. Used for contingency tables, goodness-of-fit." },
            { label: "Sample variance", desc: "(n-1)S²/σ² ~ χ²(n-1). This is why hypothesis tests on variance use the chi-squared distribution." },
            { label: "Confidence interval for σ²", desc: "CI for population variance: [(n-1)S²/χ²(α/2), (n-1)S²/χ²(1-α/2)]." },
            { label: "Likelihood ratio tests", desc: "-2·log(likelihood ratio) → χ²(df) asymptotically. Standard test for model comparison in ML." },
          ]} />

          <CodeBlock
            label="Example — goodness-of-fit test"
            code={`Are supplier risk categories uniformly distributed?
Observed: Low=45, Medium=30, High=25  (n=100)
Expected under H₀ (uniform): 33.3, 33.3, 33.3

χ² = (45-33.3)²/33.3 + (30-33.3)²/33.3 + (25-33.3)²/33.3
   = 4.11 + 0.33 + 2.07
   = 6.51

df = categories - 1 = 2
Critical value χ²(0.05, df=2) = 5.99

6.51 > 5.99  →  reject H₀  →  distribution is not uniform`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Distribution Comparison</p>
          <CompareTable
            headers={["Distribution", "Models", "E[X]", "Var(X)"]}
            rows={[
              ["Bernoulli(p)", "Single binary outcome", "p", "p(1-p)"],
              ["Binomial(N,p)", "Count of successes in N trials", "Np", "Np(1-p)"],
              ["Geometric(p)", "Trials until first success (discrete)", "1/p", "(1-p)/p²"],
              ["Poisson(λ)", "Count of rare events in interval", "λ", "λ"],
              ["Exponential(λ)", "Wait time until first event (continuous)", "1/λ", "1/λ²"],
              ["Gamma(α,β)", "Wait time until α-th event", "α/β", "α/β²"],
              ["Chi-squared χ²(k)", "Sum of k squared standard normals", "k", "2k"],
              ["Gaussian(μ,σ²)", "Continuous symmetric outcomes", "μ", "σ²"],
            ]}
          />
        </Card>

        {/* ── 6. Central Limit Theorem ── */}
        <Card>
          <SectionLabel>Section 6</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Central Limit Theorem</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            One of the most powerful results in probability theory. It explains why the Gaussian
            distribution appears everywhere — and why statistical inference works even when you don{"'"}t
            know the underlying distribution.
          </p>

          <MathBlock
            label="The CLT theorem"
            lines={[
              String.raw`\bar{X}_n = \frac{1}{n}\sum_i X_i,\quad \mathbb{E}[X_i]=\mu,\quad \text{Var}(X_i)=\sigma^2`,
              String.raw`\frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \xrightarrow{d} N(0,1) \quad \text{as } n \to \infty`,
              String.raw`\bar{X}_n \sim N\!\left(\mu,\,\frac{\sigma^2}{n}\right) \quad \text{(approximately, large }n\text{)}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Why It Matters</p>
          <BulletList items={[
            "Hypothesis tests (Z-test, t-test) use normal/t distributions even when the data is not normal — valid for large n by CLT",
            "Confidence intervals are symmetric around the mean — justified by CLT",
            "MLE estimates are approximately Gaussian for large n — enables asymptotic inference",
            "With n ≥ 30, you can almost always use the normal approximation in practice",
          ]} />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Binomial → Gaussian</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            A Binomial(n, p) is the sum of n independent Bernoulli(p) random variables. By CLT, this
            sum converges to a Gaussian as n grows.
          </p>
          <CodeBlock
            label="The De Moivre–Laplace theorem"
            code={`X ~ Binomial(n, p)

E[X] = np
Var(X) = np(1-p)

CLT applies because X = X₁ + X₂ + ... + Xₙ, each Xᵢ ~ Bernoulli(p)

As n → ∞:
  X ~ N(np, np(1-p))   approximately

Standardized:
  Z = (X - np) / √(np(1-p))  →  N(0,1)

When does the approximation hold?
  Rule of thumb: np ≥ 5  AND  n(1-p) ≥ 5

Examples:
  n=10,  p=0.5:  np=5  ← borderline, still skewed
  n=30,  p=0.5:  np=15 ← good approximation
  n=100, p=0.1:  np=10 ← good (both conditions met)
  n=100, p=0.01: np=1  ← BAD — use Poisson instead`}
          />

          <BinomialConvergencePlot />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Poisson as a Limit of Binomial</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            Poisson is not just related to Binomial by analogy — it is exactly the Binomial in the limit
            n→∞, p→0 with the product np = λ held fixed. Here is the derivation.
          </p>
          <CodeBlock
            label="Setup"
            code={`X ~ Binomial(n, p)
P(X = k) = C(n,k) · pᵏ · (1-p)^(n-k)

Let p = λ/n  (so that np = λ is fixed as n → ∞)
Substitute:
P(X = k) = C(n,k) · (λ/n)ᵏ · (1 - λ/n)^(n-k)`}
          />
          <CodeBlock
            label="Step 1 — expand C(n,k) · (λ/n)ᵏ"
            code={`C(n,k) · (λ/n)ᵏ = [n! / (k!(n-k)!)] · λᵏ/nᵏ

             = λᵏ/k! · [n(n-1)(n-2)···(n-k+1)] / nᵏ

             = λᵏ/k! · [1 · (1-1/n) · (1-2/n) ··· (1-(k-1)/n)]

As n → ∞, each factor (1 - j/n) → 1  for fixed j, so:

             → λᵏ / k!`}
          />
          <CodeBlock
            label="Step 2 — handle (1 - λ/n)^(n-k)"
            code={`(1 - λ/n)^(n-k) = (1 - λ/n)ⁿ · (1 - λ/n)^(-k)

As n → ∞:
  (1 - λ/n)ⁿ  →  e^(-λ)       ← definition of e (or limit of compound interest)
  (1 - λ/n)^(-k) → 1           ← k is fixed, λ/n → 0

Together: (1 - λ/n)^(n-k)  →  e^(-λ)`}
          />
          <CodeBlock
            label="Step 3 — combine"
            code={`P(X = k) = C(n,k) · (λ/n)ᵏ · (1 - λ/n)^(n-k)

         →   (λᵏ / k!)  ·  e^(-λ)

         =   e^(-λ) λᵏ / k!   ← Poisson(λ) PMF  ✓

The Binomial(n, λ/n) converges to Poisson(λ) as n → ∞.`}
          />
          <div className="border-2 border-ink bg-bg p-4 my-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">The physical interpretation</p>
            <p className="text-sm text-ink/80">
              Divide a time interval into n tiny sub-intervals. In each, an event can happen with
              probability p = λ/n (small). Sub-intervals are independent. The total count of events
              is Binomial(n, λ/n). As n→∞ (continuous time, infinitesimally small intervals) with
              average rate λ fixed, the count converges to Poisson(λ). This is why Poisson models
              counts of rare independent events — server requests per second, audit violations per
              year, radioactive decays per minute.
            </p>
          </div>

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Poisson → Gaussian</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            A Poisson(λ) can be thought of as the sum of many independent rare events. As λ grows,
            CLT kicks in and the distribution becomes Gaussian.
          </p>
          <CodeBlock
            label="Poisson CLT limit"
            code={`X ~ Poisson(λ)

E[X] = λ,   Var(X) = λ   (both equal λ)

A Poisson(λ) is the limit of Binomial(n, p) as n→∞, p→0, np=λ.
Applying CLT to that Binomial:

As λ → ∞:
  X ~ N(λ, λ)   approximately

Standardized:
  Z = (X - λ) / √λ  →  N(0, 1)

When does the approximation hold?
  Rule of thumb: λ ≥ 10

Examples:
  λ = 1:   very skewed, right tail dominant — CLT has not kicked in
  λ = 5:   still noticeably skewed
  λ = 10:  reasonable approximation
  λ = 30:  excellent approximation, nearly symmetric bell`}
          />

          <div className="my-4 border-2 border-ink bg-bg p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3">Why Poisson is right-skewed for small λ</p>
            <p className="text-sm text-ink/80">
              Poisson(λ=1): P(X=0) = 0.368, P(X=1) = 0.368, P(X=2) = 0.184, P(X=3) = 0.061 …
              Most of the probability mass is near 0, with a long right tail. Mean = Variance = 1.
              As λ grows, the distribution can spread out symmetrically on both sides — the left tail
              has room to develop — and the bell shape emerges.
            </p>
          </div>

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">The Three Limits — Summary</p>
          <CompareTable
            headers={["Distribution", "Limit condition", "Approaches", "Approximation rule"]}
            rows={[
              ["Binomial(n, p)", "n → ∞, p fixed", "N(np, np(1-p))", "np ≥ 5 and n(1-p) ≥ 5"],
              ["Binomial(n, p)", "n → ∞, p → 0, np = λ", "Poisson(λ)", "n ≥ 20, p ≤ 0.05"],
              ["Poisson(λ)", "λ → ∞", "N(λ, λ)", "λ ≥ 10"],
            ]}
          />

          <InterviewCallout>
            CLT states that the sample mean of n iid variables with mean μ and variance σ² converges
            to N(μ, σ²/n) regardless of the original distribution. This is why normal approximations
            work: Binomial(n,p) → N(np, np(1-p)) when np≥5 and n(1-p)≥5, and Poisson(λ) → N(λ,λ)
            when λ≥10. In both cases the discrete distribution becomes a continuous bell curve because
            the sum of many small independent contributions — however distributed — always converges
            to Gaussian.
          </InterviewCallout>
        </Card>

        {/* ── 7. Information Theory ── */}
        <Card>
          <SectionLabel>Section 7</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Information Theory for ML</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            The mathematical backbone of cross-entropy loss, KL divergence, decision tree splits, and
            feature selection. Understanding these concepts lets you derive why standard ML losses
            are the right ones, not just memorize them.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">1. Information Content (Surprise)</p>
          <MathBlock
            label="Information content"
            lines={[String.raw`I(x) = -\log p(x)`]}
          />
          <p className="text-sm leading-relaxed text-ink/80 mt-2 mb-2">
            Three axioms uniquely determine this formula: certain events carry zero information <em>I(1)=0</em>;
            rarer events carry more; independent events are additive <em>I(p₁·p₂) = I(p₁)+I(p₂)</em>.
            Only −log p satisfies all three. Log base 2 → bits. Natural log → nats.
          </p>
          <CompareTable
            headers={["Event", "p", "Surprise (bits)"]}
            rows={[
              ["Fair coin heads", "0.5", "1.0"],
              ["Rolling a 6", "0.167", "2.58"],
              ["1-in-1000 event", "0.001", "9.97"],
              ["Certain event", "1.0", "0.0"],
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">2. Entropy — Average Surprise</p>
          <MathBlock
            label="Shannon entropy"
            lines={[
              String.raw`H(P) = -\sum_x p(x)\log p(x) = \mathbb{E}_P[-\log p(x)]`,
              String.raw`\text{Fair coin: } H = -(0.5\log_2 0.5 + 0.5\log_2 0.5) = 1.0 \text{ bit}`,
              String.raw`\text{Biased coin (99/1): } H = -(0.99\log_2 0.99 + 0.01\log_2 0.01) \approx 0.08 \text{ bits}`,
            ]}
          />
          <BulletList items={[
            "H(P) ≥ 0 always",
            "H(P) = 0 when outcome is certain",
            "H(P) maximized when distribution is uniform — maximum uncertainty",
            "Irreducible: you cannot compress data below H(P) (Shannon's source coding theorem)",
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">3. Cross-Entropy — Cost of Being Wrong</p>
          <MathBlock
            label="Cross-entropy"
            lines={[
              String.raw`H(P, Q) = -\sum_x p(x)\log q(x)`,
              String.raw`\text{One-hot P collapses to: } H(P,Q) = -\log q(y_{\text{true}})`,
            ]}
          />
          <p className="text-sm leading-relaxed text-ink/80 mt-2">
            Measures average surprise when model Q encodes events from true distribution P. Equal to H(P) only when Q=P exactly. Three equivalent justifications for using it as the classification loss:
          </p>
          <BoldBulletList items={[
            { label: "Information theory", desc: "Minimizes bits wasted encoding reality with your model." },
            { label: "Maximum likelihood", desc: "Minimizing cross-entropy = maximizing likelihood — same objective, two framings." },
            { label: "Gradient", desc: "Gradient of cross-entropy w.r.t. logits after softmax is simply (ŷ − y) — clean and stable." },
          ]} />
          <MathBlock
            label="Cross-entropy = MLE"
            lines={[
              String.raw`\mathcal{L} = \prod_i q(y_i) \;\Rightarrow\; \log\mathcal{L} = \sum_i \log q(y_i) \;\Rightarrow\; \text{NLL} = -\sum_i \log q(y_i) = H(P,Q)`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">4. NLL — Negative Log-Likelihood</p>
          <MathBlock
            label="NLL"
            lines={[
              String.raw`\text{NLL} = -\log P(D|\theta) = -\sum_{i=1}^{N}\log q_\theta(y_i|x_i)`,
            ]}
          />
          <BoldBulletList items={[
            { label: "NLL = Cross-Entropy for classification", desc: "Identical formula — MLE framing vs information theory framing." },
            { label: "NLL = MSE for regression", desc: "Under Gaussian noise assumption: taking the log of the Gaussian PDF and negating yields MSE plus a constant. If residuals aren't Gaussian, MSE is the wrong loss." },
          ]} />
          <MathBlock
            label="NLL = MSE under Gaussian assumption"
            lines={[
              String.raw`q_\theta(y_i|x_i) = \frac{1}{\sqrt{2\pi\sigma^2}}\exp\!\left(-\frac{(y_i-\hat{y}_i)^2}{2\sigma^2}\right)`,
              String.raw`\text{NLL} = \frac{N}{2}\log(2\pi\sigma^2) + \frac{1}{2\sigma^2}\sum_{i=1}^{N}(y_i-\hat{y}_i)^2`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">5. KL Divergence — Distance Between Distributions</p>
          <MathBlock
            label="KL divergence"
            lines={[
              String.raw`D_{KL}(P\|Q) = \sum_x p(x)\log\frac{p(x)}{q(x)} = H(P,Q) - H(P)`,
              String.raw`\min H(P,Q) \;\equiv\; \min D_{KL}(P\|Q) \quad \text{(H(P) is constant during training)}`,
            ]}
          />
          <p className="text-sm leading-relaxed text-ink/80 mt-2 mb-2">
            Extra surprise from using Q instead of P. <strong>Not symmetric:</strong> D<sub>KL</sub>(P‖Q) ≠ D<sub>KL</sub>(Q‖P) — not a true distance metric.
          </p>
          <MathBlock
            label="Asymmetry proof — P=[0.99,0.01], Q=[0.5,0.5]"
            lines={[
              String.raw`D_{KL}(P\|Q) = 0.99\log\tfrac{0.99}{0.5} + 0.01\log\tfrac{0.01}{0.5} \approx 0.637 \text{ nats}`,
              String.raw`D_{KL}(Q\|P) = 0.5\log\tfrac{0.5}{0.99} + 0.5\log\tfrac{0.5}{0.01} \approx 1.615 \text{ nats}`,
            ]}
          />
          <BoldBulletList items={[
            { label: "min D_KL(P‖Q)", desc: "Q covers all modes of P — mean seeking, spreads mass everywhere P has mass." },
            { label: "min D_KL(Q‖P)", desc: "Q collapses onto one mode of P — mode seeking, ignores regions where Q is near zero. VAEs minimize this direction." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">6. Conditional Entropy & Information Gain</p>
          <MathBlock
            label="Conditional entropy"
            lines={[
              String.raw`H(Y|X) = H(X,Y) - H(X)`,
              String.raw`\text{IG}(X) = H(Y) - H(Y|X)`,
            ]}
          />
          <p className="text-sm leading-relaxed text-ink/80 mt-2">
            Decision trees: at each node pick the feature X that maximizes IG — maximum label uncertainty removed.
            H(Y|X)=0 when X fully determines Y; H(Y|X)=H(Y) when X tells you nothing.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">7. Mutual Information</p>
          <MathBlock
            label="Mutual information"
            lines={[
              String.raw`I(X;Y) = H(X) - H(X|Y) = H(X)+H(Y)-H(X,Y) = \sum_{x,y}p(x,y)\log\frac{p(x,y)}{p(x)p(y)}`,
            ]}
          />
          <BulletList items={[
            "I(X;Y) ≥ 0 always",
            "I(X;Y) = 0 iff X and Y are independent — joint factorizes into product of marginals",
            "I(X;Y) = I(Y;X) — symmetric, unlike KL",
            "I(X;X) = H(X) — a variable shares all information with itself",
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Pearson Correlation</p>
          <p className="text-sm leading-relaxed text-ink/80 mb-2">Measures linear relationship between X and Y:</p>
          <MathBlock
            label="Pearson ρ"
            lines={[
              String.raw`\rho_{XY} = \frac{\text{Cov}(X,Y)}{\sigma_X\sigma_Y} = \frac{\sum_{i=1}^{N}(x_i-\bar{x})(y_i-\bar{y})}{\sqrt{\sum(x_i-\bar{x})^2}\sqrt{\sum(y_i-\bar{y})^2}}`,
            ]}
          />
          <BulletList items={[
            "Range: [−1, 1]  —  ρ=1 perfect positive linear, ρ=0 no linear relationship (nonlinear dependence can still exist)",
            "Assumes continuous variables; sensitive to outliers",
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Spearman Correlation</p>
          <p className="text-sm leading-relaxed text-ink/80 mb-2">Pearson applied to ranks instead of raw values:</p>
          <MathBlock
            label="Spearman ρₛ"
            lines={[
              String.raw`\rho_s = 1 - \frac{6\sum_{i=1}^{N}d_i^2}{N(N^2-1)}, \quad d_i = \text{rank}(x_i) - \text{rank}(y_i)`,
            ]}
          />
          <BulletList items={[
            "Catches any monotonic relationship — if X goes up, Y consistently goes up or down, regardless of linearity",
            "Robust to outliers (ranks are bounded); works on ordinal data",
            "Example: Y = X³ — perfectly monotonic, ρₛ = 1.0, but Pearson ρ < 1 because the relationship is nonlinear",
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Feature selection comparison</p>
          <CompareTable
            headers={["Method", "Formula", "Detects", "Categorical?", "Outlier Robust?"]}
            rows={[
              ["Pearson", "Cov(X,Y) / σₓσᵧ", "Linear only", "No", "No"],
              ["Spearman", "Pearson on ranks", "Monotonic", "Ordinal only", "Yes"],
              ["Mutual Information", "Σ p(x,y) log p(x,y)/p(x)p(y)", "Any dependency", "Yes", "Yes"],
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">8. Label Smoothing — Entropy as Regularization</p>
          <MathBlock
            label="Label smoothing"
            lines={[
              String.raw`\tilde{p}(k) = (1-\varepsilon)\cdot\mathbf{1}[k=y] + \frac{\varepsilon}{K}`,
              String.raw`\mathcal{L} = (1-\varepsilon)\cdot H(P_{\text{hard}},Q) + \varepsilon\cdot H(P_{\text{uniform}},Q)`,
            ]}
          />
          <p className="text-sm leading-relaxed text-ink/80 mt-2">
            Hard one-hot targets have H(P)=0 — cross-entropy pushes logits toward infinity, causing overconfidence.
            Label smoothing (ε=0.1) softens targets: [0,0,1,0] → [0.025, 0.025, 0.925, 0.025].
            The second term directly penalizes overconfident predictions — regularization through entropy.
            Prevents logits growing unbounded, improves calibration, reduces train/inference gap.
          </p>

          <div className="mt-6 border-l-4 border-accent pl-5">
            <p className="text-sm font-bold mb-1">Everything connected in one line</p>
            <MathBlock label="" lines={[String.raw`H(P,Q) = H(P) + D_{KL}(P\|Q)`]} />
            <p className="text-sm leading-relaxed text-ink/80">
              Cross-entropy = irreducible uncertainty + cost of model being wrong. Training minimizes
              the second term. H(P) is the floor you can never beat.
            </p>
          </div>
        </Card>

        {/* ── 8. MLE ── */}
        <Card>
          <SectionLabel>Section 8</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Maximum Likelihood Estimation (MLE)</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Finds the parameter values that make the observed data most probable. The foundation of
            most ML training — log loss, MSE, and cross-entropy all derive from MLE.
          </p>

          <MathBlock
            label="MLE core idea"
            lines={[
              String.raw`\theta^* = \arg\max_\theta P(X \mid \theta)`,
              String.raw`L(\theta) = \prod_i P(x_i \mid \theta) \quad \text{(likelihood)}`,
              String.raw`\ell(\theta) = \sum_i \log P(x_i \mid \theta) \quad \text{(log-likelihood)}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">MLE for Gaussian — Deriving Mean and Variance</p>
          <MathBlock
            label="MLE for Gaussian"
            lines={[
              String.raw`\mu_{\text{MLE}} = \frac{1}{n}\sum_i x_i = \bar{x}`,
              String.raw`\sigma^2_{\text{MLE}} = \frac{1}{n}\sum_i (x_i - \bar{x})^2 \quad \text{(biased; unbiased uses }n{-}1\text{)}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">MLE for Bernoulli — Why Log Loss</p>
          <MathBlock
            label="MLE for Bernoulli → binary cross-entropy"
            lines={[
              String.raw`P(y_i \mid x_i) = \hat{y}_i^{y_i}(1-\hat{y}_i)^{1-y_i} \quad \text{(Bernoulli)}`,
              String.raw`\ell(w) = \sum_i \bigl[y_i \log\hat{y}_i + (1-y_i)\log(1-\hat{y}_i)\bigr]`,
              String.raw`\text{Loss} = -\frac{1}{n}\sum_i \bigl[y_i \log\hat{y}_i + (1-y_i)\log(1-\hat{y}_i)\bigr] = \text{Binary Cross-Entropy}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Properties of MLE</p>
          <BoldBulletList items={[
            { label: "Consistency", desc: "As n→∞, θ_MLE → θ_true. Converges to truth with more data." },
            { label: "Asymptotic normality", desc: "For large n, θ_MLE ~ N(θ_true, I(θ)⁻¹) where I is Fisher information." },
            { label: "Efficiency", desc: "Achieves the Cramér-Rao lower bound — lowest possible variance among unbiased estimators." },
            { label: "Invariance", desc: "If θ_MLE is MLE of θ, then g(θ_MLE) is MLE of g(θ)." },
          ]} />

          <InterviewCallout>
            MLE finds parameters that maximize the probability of observing the training data. It connects
            directly to loss functions: MLE on Gaussian data gives MSE loss, MLE on Bernoulli data gives
            log loss. Log-likelihood is used in practice because products of probabilities underflow
            numerically and logs turn products into sums. MLE is consistent and asymptotically efficient
            but can overfit on small datasets — adding a prior gives MAP estimation.
          </InterviewCallout>
        </Card>

        {/* ── 9. Hypothesis Testing ── */}
        <Card>
          <SectionLabel>Section 9</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Hypothesis Testing</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            A formal framework for deciding whether observed data provides enough evidence to reject a
            default assumption. The foundation of A/B testing and scientific inference.
          </p>

          <CodeBlock
            label="The 5-step framework"
            code={`Step 1: State hypotheses
  H₀ (null):        default assumption — no effect, no difference
  H₁ (alternative): what you want to prove

Step 2: Choose significance level α
  α = P(reject H₀ | H₀ is true) = false positive rate
  Standard: α = 0.05

Step 3: Compute test statistic
  Summarize data into a single number.
  Under H₀ this statistic follows a known distribution.

Step 4: Compute p-value
  p-value = P(observing data this extreme | H₀ is true)
  Small p-value → data unlikely under H₀ → evidence against H₀

Step 5: Decision
  p-value < α  → reject H₀  (statistically significant)
  p-value ≥ α  → fail to reject H₀  (not enough evidence)

IMPORTANT: failing to reject H₀ ≠ proving H₀`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Type I and Type II Errors</p>
          <CompareTable
            headers={["", "Type I Error (α)", "Type II Error (β)"]}
            rows={[
              ["Also called", "False Positive", "False Negative"],
              ["Definition", "Reject H₀ when H₀ is true", "Fail to reject H₀ when H₁ is true"],
              ["Probability", "α (you choose this)", "β (depends on effect size, n)"],
              ["Fix", "Lower α", "Increase sample size"],
              ["Example", "Flag clean supplier as fraudulent", "Miss fraudulent supplier"],
            ]}
          />
          <Insight label="Power = 1 − β">
            P(correctly rejecting H₀ when H₁ is true). Increases with larger n, larger true effect size,
            lower data variance. Standard: aim for power ≥ 0.80.
          </Insight>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Common Test Statistics</p>
          <MathBlock
            label="Key test statistics"
            lines={[
              String.raw`Z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}} \sim N(0,1) \quad \text{(Z-test, known }\sigma\text{)}`,
              String.raw`t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}} \sim t(n-1) \quad \text{(t-test, unknown }\sigma\text{)}`,
              String.raw`t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{s_1^2/n_1 + s_2^2/n_2}} \quad \text{(two-sample t-test)}`,
              String.raw`Z = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})(1/n_1+1/n_2)}},\quad \hat{p} = \frac{x_1+x_2}{n_1+n_2} \quad \text{(proportions)}`,
              String.raw`\chi^2 = \sum \frac{(\text{observed}-\text{expected})^2}{\text{expected}} \sim \chi^2(\text{df}) \quad \text{(chi-squared)}`,
            ]}
          />

          <Insight label="p-value Misconception">
            p-value is NOT the probability that H₀ is true. It is P(data this extreme | H₀ is true).
            A p-value of 0.03 does not mean 97% chance the effect is real — it means the data would
            occur 3% of the time if H₀ were true.
          </Insight>
        </Card>

        {/* ── 10. Confidence Intervals ── */}
        <Card>
          <SectionLabel>Section 10</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Confidence Intervals</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            A 95% CI means: if we repeated this experiment many times, 95% of the constructed intervals
            would contain the true parameter. Not a probability statement about a single interval.
          </p>

          <MathBlock
            label="Confidence interval formulas"
            lines={[
              String.raw`\text{Mean (known }\sigma\text{):}\quad \bar{x} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}`,
              String.raw`\text{Mean (unknown }\sigma\text{):}\quad \bar{x} \pm t_{\alpha/2,\,n-1} \cdot \frac{s}{\sqrt{n}}`,
              String.raw`\text{Proportion:}\quad \hat{p} \pm z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Correct Interpretation</p>
          <div className="space-y-3">
            <div className="border-2 border-ink bg-bg p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-1">✗ Wrong</p>
              <p className="text-sm text-ink/80">"There is a 95% probability the true parameter is in this interval." — The true parameter is fixed, not random. This interval either contains it or it doesn{"'"}t.</p>
            </div>
            <div className="border-2 border-ink bg-accent p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-ink mb-1">✓ Correct</p>
              <p className="text-sm text-ink">"If we repeated this study many times and built a CI each time, 95% of those intervals would contain the true parameter." Or: "We are 95% confident this interval captures the true value."</p>
            </div>
          </div>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">CI Width Depends On</p>
          <BulletList items={[
            "Sample size n: larger n → narrower CI (√n in denominator)",
            "Variance σ²: higher variance → wider CI",
            "Confidence level: 99% CI is wider than 95% CI",
          ]} />

          <Insight label="CI vs Hypothesis Test — Equivalence">
            A 95% CI for μ₁−μ₂ that excludes 0 ↔ two-sample t-test rejects H₀: μ₁=μ₂ at α=0.05. CI is
            more informative: hypothesis test gives yes/no, CI gives effect size and uncertainty range.
          </Insight>
        </Card>

        {/* ── 11. A/B Testing ── */}
        <Card>
          <SectionLabel>Section 11</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">A/B Testing in Production</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            The gold standard for measuring causal effects of changes. Connects directly to hypothesis
            testing and is the primary tool for evaluating ML model changes in production.
          </p>

          <CodeBlock
            label="Full pipeline"
            code={`Step 1: Define hypothesis
  H₀: new model has same conversion rate as old
  H₁: new model has different conversion rate

Step 2: Choose metrics
  Primary: conversion rate, CTR, revenue (one only)
  Guardrail: latency, error rate (must not degrade)

Step 3: Calculate required sample size
  n = 2·(z_α + z_β)²·p̄(1-p̄) / δ²
  where p̄ = baseline rate, δ = minimum detectable effect

  Example: p̄=0.10, δ=0.01, z_α=1.96, z_β=0.84
  n = 2 × 7.84 × 0.09 / 0.0001 ≈ 14,112 per group

Step 4: Run experiment
  Randomly assign users; same user always gets same variant
  Run for full business cycles (at least 2 weeks)

Step 5: Analyze — compute p-value, CI, check guardrails
Step 6: Ship if p < α AND guardrails ok`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Common Pitfalls</p>
          <BoldBulletList items={[
            { label: "Peeking problem", desc: "Checking results before planned sample size inflates false positive rate. Checking 5 times at α=0.05 → true FPR ~23%. Fix: pre-register stopping rule, or use sequential testing." },
            { label: "Multiple testing", desc: "Testing 20 metrics at α=0.05 → expect 1 false positive by chance. Fix: Bonferroni correction (α/k) or use one primary metric." },
            { label: "Novelty effect", desc: "Users engage more with anything new. Treatment looks better in week 1, returns to baseline by week 3. Fix: run at least 2 full business cycles." },
            { label: "Network effects", desc: "Users in control and treatment interact. Randomizing individuals violates independence. Fix: cluster randomization." },
            { label: "Simpson's paradox", desc: "Aggregate results can reverse when segmented due to unequal group sizes. Fix: stratified randomization." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">A/B Testing ML Models Specifically</p>
          <BoldBulletList items={[
            { label: "Shadow mode first", desc: "Run new model in parallel, log both outputs, compare offline — no user impact, catches bugs before live traffic." },
            { label: "Canary deployment", desc: "Route 5% traffic to new model. Monitor latency, error rate, prediction distribution. Expand if guardrails hold." },
            { label: "Holdout groups", desc: "Keep permanent 10% holdout on old model to measure long-term impact after full rollout." },
            { label: "Offline ≠ online", desc: "Offline AUC/F1 on test set doesn't always predict online impact. Always run the A/B test even if offline metrics look great." },
          ]} />

          <InterviewCallout>
            A/B testing requires: pre-specifying hypotheses and metrics before looking at data, calculating
            sample size for desired power (80%) at chosen significance (α=0.05), randomizing correctly
            (same user always same variant), running for full business cycles to avoid novelty effects,
            and reporting confidence intervals not just p-values. The peeking problem is the most common
            mistake — checking early inflates false positives because you{"'"}re running multiple implicit tests.
          </InterviewCallout>
        </Card>

        {/* ── 12. Bayesian Inference ── */}
        <Card>
          <SectionLabel>Section 12</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Bayesian Inference</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            A framework for updating beliefs using data. Unlike frequentist statistics (fixed estimates),
            Bayesian inference gives a full distribution over parameters — capturing uncertainty explicitly.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Frequentist vs Bayesian</p>
          <CompareTable
            headers={["Frequentist", "Bayesian"]}
            rows={[
              ["Parameters are fixed, unknown constants", "Parameters are random variables with distributions"],
              ["Probability = long-run frequency of events", "Probability = degree of belief"],
              ["Point estimates + confidence intervals", "Full posterior distribution"],
              ["P(data | θ) — likelihood only", "P(θ | data) ∝ P(data | θ) · P(θ)"],
              ["No prior knowledge incorporated", "Prior encodes existing knowledge"],
              ["95% CI: 95% of intervals contain θ", "95% credible interval: P(θ in interval | data) = 0.95"],
            ]}
          />

          <CodeBlock
            label="The Bayesian update"
            code={`Posterior ∝ Likelihood × Prior

P(θ | X) = P(X | θ) · P(θ) / P(X)   ← P(X) is normalizing constant

Sequential update:
  Day 1: P(θ | X₁) ∝ P(X₁|θ) · P(θ)
  Day 2: P(θ | X₁,X₂) ∝ P(X₂|θ) · P(θ|X₁)

Bayesian inference is naturally online and sequential.`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Conjugate Priors</p>
          <p className="text-sm text-ink/90 mb-3">
            A conjugate prior gives a posterior with the same functional form — enabling closed-form
            updates without numerical integration.
          </p>
          <CodeBlock
            label="Key conjugate pairs"
            code={`BETA–BERNOULLI (most important for A/B testing):
  Prior:     θ ~ Beta(α, β)
  Posterior: θ|X ~ Beta(α + successes, β + failures)

  Example: Prior Beta(2,20) → 3 frauds in 50 audits
  Posterior: Beta(5, 67),  mean = 5/72 = 6.9%

GAMMA–POISSON:
  Prior:     λ ~ Gamma(α, β)
  Posterior: λ|X ~ Gamma(α + Σxᵢ, β + n)

GAUSSIAN–GAUSSIAN:
  Prior:     μ ~ N(μ₀, σ₀²)
  Posterior: μ|X ~ N(μₙ, σₙ²)
  μₙ = weighted average of prior mean and data mean`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Bayesian A/B Testing</p>
          <CodeBlock
            label="Direct probability statement about which variant is better"
            code={`After observing data:
  A: 1000 visitors, 100 conversions → θ_A ~ Beta(101, 901)
  B: 1000 visitors, 120 conversions → θ_B ~ Beta(121, 881)

Compute P(θ_B > θ_A | data) by Monte Carlo:
  samples_A = np.random.beta(101, 901, size=100000)
  samples_B = np.random.beta(121, 881, size=100000)
  P_B_better = (samples_B > samples_A).mean()
  # ≈ 0.87 → "B is better with 87% probability"

Also compute:
  Expected lift = (samples_B - samples_A).mean()
  P(lift > 1%) = (samples_B - samples_A > 0.01).mean()

Advantages over frequentist:
  Direct probability statement: "B is better with 87% probability"
  No sample size pre-specification needed
  Can stop early with full probability interpretation`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">MAP — Maximum A Posteriori</p>
          <MathBlock
            label="MAP = MLE + regularization"
            lines={[
              String.raw`\theta_{\text{MAP}} = \arg\max_\theta P(\theta \mid X) = \arg\max_\theta P(X \mid \theta)\cdot P(\theta)`,
              String.raw`\text{Gaussian prior} \Rightarrow L_2 \text{ regularization (Ridge)}`,
              String.raw`\text{Laplace prior} \Rightarrow L_1 \text{ regularization (Lasso)}`,
            ]}
          />

          <InterviewCallout>
            Bayesian inference treats parameters as distributions, not fixed unknowns. Start with a prior
            belief P(θ), observe data, update to posterior P(θ|data) ∝ P(data|θ)·P(θ). Conjugate priors
            (Beta-Bernoulli, Gaussian-Gaussian) give closed-form posteriors. Bayesian A/B testing gives
            direct probability statements ("variant B is better with 87% probability") unlike frequentist
            testing. MAP = MLE with regularization — Gaussian prior = L2, Laplace prior = L1.
          </InterviewCallout>
        </Card>

        {/* ── 13. Interview Q&A ── */}
        <Card>
          <SectionLabel>Section 13</SectionLabel>
          <h2 className="mb-6 text-xl font-bold">Interview Q{"&"}A — Quick Reference</h2>
          <p className="mb-6 text-sm text-ink/70">Practice answering each in under 90 seconds.</p>
          <div className="space-y-5">
            {[
              {
                q: "What is the difference between p-value and confidence interval?",
                a: "A p-value answers: 'Is the effect statistically different from zero?' (yes/no). A confidence interval answers: 'How large is the effect and how uncertain are we?' CI is more informative — a significant p-value on its own doesn't tell you if the effect is practically meaningful. Always report both: 'The conversion rate increased by 1.2% (95% CI: 0.3%–2.1%, p=0.008)'.",
              },
              {
                q: "How do you determine sample size for an A/B test?",
                a: "Specify: significance level α (usually 0.05), desired power 1-β (usually 0.80), baseline rate p̄, and minimum detectable effect δ. Formula: n = 2(z_α + z_β)²p̄(1-p̄)/δ². The MDE is the key practical decision — detecting a 1% lift requires far fewer samples than detecting 0.1%. Smaller effects require exponentially more samples.",
              },
              {
                q: "What is the difference between MLE and MAP?",
                a: "MLE maximizes the likelihood P(data|θ) — no prior. MAP maximizes the posterior P(θ|data) ∝ P(data|θ)·P(θ) — includes a prior. MAP is MLE with regularization: a Gaussian prior gives L2 regularization, a Laplace prior gives L1. With infinite data both converge to the same answer. With limited data, MAP gives better-regularized estimates.",
              },
              {
                q: "When would you use Bayesian A/B testing instead of frequentist?",
                a: "Bayesian when: you want direct probability statements about which variant is better, you have strong prior knowledge to incorporate, you need to stop early with valid inference, or you want to quantify expected lift not just significance. Frequentist when: you need strict Type I error control for regulatory purposes, the team is more familiar with p-values, or you're running many simultaneous tests where error rate control is critical.",
              },
              {
                q: "Explain the Central Limit Theorem and why it matters.",
                a: "CLT states that the sample mean X̄ of n iid random variables with mean μ and variance σ² converges in distribution to N(μ, σ²/n) as n→∞, regardless of the original distribution. This is why hypothesis tests use normal or t distributions even for non-normal data (large n), confidence intervals are symmetric, and MLE estimates are approximately Gaussian for large samples. With n≥30 you can almost always use the normal approximation.",
              },
            ].map((item, i) => (
              <div key={i} className="border-2 border-ink bg-bg p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Q{i + 1}</p>
                <p className="text-sm font-bold mb-3">{item.q}</p>
                <p className="text-sm leading-relaxed text-ink/80">{item.a}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* ── 14. Cheat Sheet ── */}
        <Card>
          <SectionLabel>Section 14</SectionLabel>
          <h2 className="mb-6 text-xl font-bold">Quick Reference Cheat Sheet</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Distributions",
                items: [
                  "Bernoulli(p): single binary. E=p, Var=p(1-p)",
                  "Binomial(N,p): count in N trials. E=Np, Var=Np(1-p)",
                  "Poisson(λ): rare events. E=λ, Var=λ (both equal λ)",
                  "Gaussian(μ,σ²): bell curve. 68-95-99.7 rule",
                ],
              },
              {
                title: "Key Formulas",
                items: [
                  "Bayes: P(A|B) = P(B|A)·P(A) / P(B)",
                  "MLE: θ* = argmax Σᵢ log P(xᵢ|θ)",
                  "MAP: θ* = argmax Σᵢ log P(xᵢ|θ) + log P(θ)",
                  "95% CI for mean: x̄ ± 1.96·σ/√n",
                  "95% CI for proportion: p̂ ± 1.96·√(p̂(1-p̂)/n)",
                ],
              },
              {
                title: "A/B Test Checklist",
                items: [
                  "Pre-register: hypothesis, metric, n, α — before peeking",
                  "One primary metric (avoid multiple testing)",
                  "Minimum 2 business cycles (novelty effect)",
                  "Same user → same variant always (hash on user_id)",
                  "Report CI + effect size, not just p-value",
                  "Check guardrail metrics (latency, errors)",
                ],
              },
              {
                title: "Bayesian One-Liners",
                items: [
                  "Prior + Likelihood → Posterior",
                  "Beta prior + Bernoulli likelihood → Beta posterior",
                  "MAP = MLE + regularization",
                  "Gaussian prior = L2 regularization",
                  "Laplace prior = L1 regularization",
                  "Bayesian CI = credible interval: P(θ in interval | data) = 95%",
                ],
              },
              {
                title: "Hypothesis Testing",
                items: [
                  "Type I (α): false positive — reject true H₀",
                  "Type II (β): false negative — miss real effect",
                  "Power = 1-β: target ≥ 0.80",
                  "p-value ≠ P(H₀ is true)",
                  "Fail to reject H₀ ≠ accept H₀",
                ],
              },
              {
                title: "Common Mistakes",
                items: [
                  "Base rate fallacy → ignoring the prior",
                  "Peeking → inflates false positive rate",
                  "p-value misinterpretation → not P(H₀ true)",
                  "CI misinterpretation → not a probability about one interval",
                  "Novelty effect → run 2+ business cycles",
                ],
              },
            ].map((group) => (
              <div key={group.title} className="border-2 border-ink bg-bg p-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-accent">{group.title}</p>
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

        <div className="flex items-center justify-start border-t-2 border-ink pt-8">
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
