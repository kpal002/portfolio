import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Probability & Statistics — Interview Prep — Kuntal Pal",
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

export default function ProbabilityStatisticsPage() {
  return (
    <div className="min-h-screen bg-bg font-mono text-ink">
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

          <CodeBlock
            label="Definition"
            code={`P(A | B) = P(A ∩ B) / P(B)

Restrict the sample space to B, then ask what fraction of B also contains A.

Rearranged → Multiplication Law:
  P(A ∩ B) = P(A | B) · P(B)`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">The Inverse Problem — P(B|A) from P(A|B)</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            Given P(A|B), how do you get P(B|A)? Apply the multiplication law to both orderings of the
            joint probability P(A∩B):
          </p>
          <CodeBlock
            label="Deriving Bayes' theorem from conditional probability"
            code={`P(A ∩ B) = P(A | B) · P(B)   ← one way to write the joint
P(A ∩ B) = P(B | A) · P(A)   ← the other way

Set them equal:
  P(A | B) · P(B) = P(B | A) · P(A)

Solve for P(B | A):
  P(B | A) = P(A | B) · P(B) / P(A)   ← Bayes' theorem ✓`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Law of Total Probability</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            If events B₁, B₂, …, Bₙ partition the sample space Ω (they are mutually exclusive and
            exhaustive: Ω = ∪Bᵢ, Bᵢ ∩ Bⱼ = ∅ for i ≠ j), then:
          </p>
          <CodeBlock
            label="Law of total probability"
            code={`P(A) = Σᵢ P(A | Bᵢ) · P(Bᵢ)

Simplest case — B and Bᶜ partition Ω:
  P(A) = P(A | B) · P(B) + P(A | Bᶜ) · P(Bᶜ)

This is the P(B) denominator in Bayes' theorem:
  P(A | B) = P(B | A) · P(A) / [P(B|A)·P(A) + P(B|¬A)·P(¬A)]`}
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

          <CodeBlock
            label="The formula"
            code={`P(A | B) = P(B | A) · P(A) / P(B)

P(A | B) = Posterior  — probability of A given we observed B
P(B | A) = Likelihood — probability of observing B if A is true
P(A)     = Prior      — our belief in A before seeing B
P(B)     = Evidence   — total probability of observing B

P(B) = P(B|A)·P(A) + P(B|¬A)·P(¬A)   ← law of total probability`}
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

          <CodeBlock
            label="Definition — two equivalent forms"
            code={`P(A | B) = P(A)   ← B gives no info about A
P(B | A) = P(B)   ← A gives no info about B

Plug into the multiplication law P(A∩B) = P(A|B)·P(B):
  P(A ∩ B) = P(A) · P(B)   ← the product rule for independent events`}
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
          <CodeBlock
            label="Definition and properties"
            code={`PMF: p(k) = P(X = k)

Properties:
  p(k) ≥ 0  for all k
  Σₖ p(k) = 1   ← probabilities sum to 1

Example — Binomial(3, 0.5):
  P(X=0) = 1/8,  P(X=1) = 3/8,  P(X=2) = 3/8,  P(X=3) = 1/8
  Sum = 8/8 = 1  ✓`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">PDF — Probability Density Function (continuous)</p>
          <CodeBlock
            label="Definition and properties"
            code={`PDF: f(x) ≥ 0,   integral from -inf to +inf of f(x) dx = 1

P(a ≤ X ≤ b) = integral from a to b of f(x) dx   ← area under the curve

Key insight:
  f(x) is NOT a probability — it can be > 1
  Only integrals (areas) are probabilities
  P(X = x) = 0 for any single point

Example — Gaussian N(0,1):
  f(x) = (1/√2π) · exp(-x²/2)
  P(-1 ≤ X ≤ 1) = integral from -1 to 1 of f(x) dx ≈ 0.68   ← 68% rule`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">CDF — Cumulative Distribution Function</p>
          <CodeBlock
            label="Definition — works for both discrete and continuous"
            code={`CDF: F(x) = P(X ≤ x)

For discrete:    F(x) = Σₖ≤ₓ p(k)   ← sum up to x
For continuous:  F(x) = integral from -inf to x of f(t) dt   ← area up to x

Properties:
  F(-inf) = 0,   F(+inf) = 1
  F is non-decreasing
  F is right-continuous

Relationship between PDF and CDF:
  f(x) = dF(x)/dx   ← PDF is the derivative of the CDF
  F(x) = integral from -inf to x of f(t) dt   ← CDF is the integral of the PDF

Computing probabilities from CDF:
  P(a ≤ X ≤ b) = F(b) - F(a)
  P(X > a)     = 1 - F(a)`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">CDF in Practice</p>
          <CodeBlock
            label="Z-score and hypothesis testing"
            code={`Standard Normal CDF: Φ(z) = P(Z ≤ z)

Z-test: test statistic Z = (x̄ - μ₀) / (σ/√n)
p-value (one-tailed) = 1 - Φ(Z)
p-value (two-tailed) = 2·(1 - Φ(|Z|))

Example: Z = 2.0
  p-value (two-tailed) = 2·(1 - Φ(2.0)) = 2·(1 - 0.977) = 0.046
  → Reject H₀ at α = 0.05

Critical values come from the inverse CDF (quantile function):
  Φ⁻¹(0.975) = 1.96  ← 95% CI uses ±1.96σ
  Φ⁻¹(0.995) = 2.576 ← 99% CI uses ±2.576σ`}
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
          <CodeBlock
            label="PDF and properties"
            code={`PDF: f(x) = (1/σ√2π) · exp(-(x-μ)²/2σ²)

68% of data within μ ± 1σ
95% of data within μ ± 2σ         ← the 68-95-99.7 rule
99.7% of data within μ ± 3σ

Standard Normal: Z ~ N(0,1)   →   Z = (X - μ) / σ

Central Limit Theorem: X̄ ~ N(μ, σ²/n) for large n
regardless of the original distribution of X`}
          />
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted/70 mt-3">Gaussian in ML</p>
          <BulletList items={[
            "Linear/Logistic Regression: assumes Gaussian errors (residuals)",
            "Gaussian Discriminant Analysis: models P(x|y) as Gaussian per class",
            "Bayesian inference: Gaussian prior + Gaussian likelihood = Gaussian posterior (conjugate)",
            "Neural network weights: initialized from N(0, σ²) by default",
          ]} />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Bernoulli — Bernoulli(p)</p>
          <CodeBlock
            label="Single binary outcome"
            code={`PMF: P(X=x) = pˣ(1-p)^(1-x)   for x ∈ {0, 1}

E[X] = p
Var(X) = p(1-p)   ← maximized at p=0.5

Connection to logistic regression:
  Each label y ~ Bernoulli(σ(wᵀx))
  Log loss = -log likelihood of Bernoulli distribution`}
          />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Binomial — Binomial(N, p)</p>
          <CodeBlock
            label="Count of successes in N trials"
            code={`PMF: P(X=k) = C(N,k) · pᵏ · (1-p)^(N-k)

E[X] = Np
Var(X) = Np(1-p)

Example: audit 100 suppliers, each 15% chance of high-risk
  X ~ Binomial(100, 0.15)
  E[X] = 15,   Std = √12.75 ≈ 3.57

A/B testing: Conversions ~ Binomial(N_visitors, p_conversion_rate)`}
          />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Poisson — Poisson(λ)</p>
          <CodeBlock
            label="Count of rare events in a fixed interval"
            code={`PMF: P(X=k) = (λᵏ · e^(-λ)) / k!

E[X] = λ
Var(X) = λ   ← mean AND variance both equal λ (special property)

Use when: count data, events are rare relative to opportunities,
          events are independent.

Example: supplier averages λ=2 audit violations per year
  P(X=0) = e^(-2) ≈ 0.135   (13.5% chance zero violations)
  P(X=2) = e^(-2)×4/2 ≈ 0.271

Poisson = limit of Binomial as N→∞, p→0, Np=λ
Use Poisson when N is large and p is small.`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Distribution Comparison</p>
          <CompareTable
            headers={["Distribution", "Models", "E[X]", "Var(X)"]}
            rows={[
              ["Bernoulli(p)", "Single binary outcome", "p", "p(1-p)"],
              ["Binomial(N,p)", "Count of successes in N trials", "Np", "Np(1-p)"],
              ["Poisson(λ)", "Count of rare events in interval", "λ", "λ"],
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

          <CodeBlock
            label="The theorem"
            code={`Let X₁, X₂, ..., Xₙ be iid random variables with:
  E[Xᵢ] = μ   (finite mean)
  Var(Xᵢ) = σ²  (finite variance)

Define the sample mean: X̄ₙ = (1/n) Σᵢ Xᵢ

Then as n → ∞:

  √n · (X̄ₙ - μ) / σ  →  N(0, 1)   in distribution

Or equivalently:
  X̄ₙ ~ N(μ, σ²/n)   approximately, for large n

The distribution of the MEAN converges to Gaussian,
regardless of the original distribution of Xᵢ.`}
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

          <div className="my-4 border-2 border-ink bg-bg p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3">Visualising the convergence</p>
            <div className="space-y-2 font-mono text-[11px] text-ink/80">
              <p>Binomial(n=5,  p=0.5): <span className="text-ink">▁▄█▄▁</span>  — discrete, lumpy, symmetric</p>
              <p>Binomial(n=20, p=0.5): <span className="text-ink">▁▂▄▆██▆▄▂▁</span>  — smoother bell</p>
              <p>Binomial(n=100,p=0.5): <span className="text-ink">▁▂▄▆████▆▄▂▁</span>  — nearly Gaussian</p>
              <p className="mt-2 text-ink/60">As n ↑: discrete mass concentrates into a continuous bell curve</p>
            </div>
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

        {/* ── 7. MLE ── */}
        <Card>
          <SectionLabel>Section 7</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Maximum Likelihood Estimation (MLE)</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Finds the parameter values that make the observed data most probable. The foundation of
            most ML training — log loss, MSE, and cross-entropy all derive from MLE.
          </p>

          <CodeBlock
            label="Core idea"
            code={`Given: data X = {x₁,...,xₙ}, model P(X|θ) parameterized by θ
Find:  θ* = argmax P(X | θ)
               θ

Likelihood:     L(θ) = ∏ᵢ P(xᵢ | θ)   ← assumes independence
Log-likelihood: ℓ(θ) = Σᵢ log P(xᵢ | θ)

Why log-likelihood?
  1. Log turns products into sums (easier to differentiate)
  2. Same maximizer (log is monotonically increasing)
  3. Products of small probabilities underflow numerically`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">MLE for Gaussian — Deriving Mean and Variance</p>
          <CodeBlock
            label="Result"
            code={`Data: x₁,...,xₙ iid from N(μ, σ²)

Maximize ℓ(μ,σ²) w.r.t. μ:
  ∂ℓ/∂μ = 0   →   μ_MLE = (1/n)Σᵢ xᵢ = x̄   ← sample mean ✓

Maximize w.r.t. σ²:
  ∂ℓ/∂σ² = 0  →   σ²_MLE = (1/n)Σᵢ(xᵢ-x̄)²   ← biased (uses n, not n-1)

MLE gives sample mean and biased variance.
Unbiased variance uses n-1 (Bessel's correction).`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">MLE for Bernoulli — Why Log Loss</p>
          <CodeBlock
            label="MLE on binary labels → binary cross-entropy"
            code={`Model: P(yᵢ=1|xᵢ) = σ(wᵀxᵢ) = ŷᵢ
Each label: P(yᵢ|xᵢ) = ŷᵢ^yᵢ · (1-ŷᵢ)^(1-yᵢ)   ← Bernoulli

Log-likelihood:  ℓ(w) = Σᵢ [yᵢ log(ŷᵢ) + (1-yᵢ)log(1-ŷᵢ)]

Minimize negative log-likelihood:
  Loss = -(1/n)Σᵢ [yᵢ log(ŷᵢ) + (1-yᵢ)log(1-ŷᵢ)]
       = Binary Cross-Entropy ✓

Every loss function has a probabilistic interpretation.`}
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

        {/* ── 8. Hypothesis Testing ── */}
        <Card>
          <SectionLabel>Section 8</SectionLabel>
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
          <CodeBlock
            label="Key tests to know"
            code={`ONE-SAMPLE Z-TEST (known σ, large n):
  Z = (x̄ - μ₀) / (σ/√n)   ~  N(0,1) under H₀

ONE-SAMPLE T-TEST (unknown σ, small n):
  t = (x̄ - μ₀) / (s/√n)   ~  t(n-1) under H₀

TWO-SAMPLE T-TEST (compare two means):
  t = (x̄₁ - x̄₂) / √(s₁²/n₁ + s₂²/n₂)   ~  t(df) under H₀

TWO-PROPORTION Z-TEST (A/B testing — most common):
  p̂ = (x₁+x₂)/(n₁+n₂)   ← pooled proportion
  Z = (p̂₁-p̂₂) / √(p̂(1-p̂)(1/n₁+1/n₂))   ~  N(0,1) under H₀

CHI-SQUARED TEST (categorical data):
  χ² = Σ (observed-expected)²/expected   ~  χ²(df) under H₀`}
          />

          <Insight label="p-value Misconception">
            p-value is NOT the probability that H₀ is true. It is P(data this extreme | H₀ is true).
            A p-value of 0.03 does not mean 97% chance the effect is real — it means the data would
            occur 3% of the time if H₀ were true.
          </Insight>
        </Card>

        {/* ── 9. Confidence Intervals ── */}
        <Card>
          <SectionLabel>Section 9</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Confidence Intervals</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            A 95% CI means: if we repeated this experiment many times, 95% of the constructed intervals
            would contain the true parameter. Not a probability statement about a single interval.
          </p>

          <CodeBlock
            label="Formulas"
            code={`Mean, known σ (Z-interval):
  CI = x̄ ± z_(α/2) · σ/√n
  z = 1.645 (90%),  z = 1.960 (95%),  z = 2.576 (99%)

Mean, unknown σ (t-interval):
  CI = x̄ ± t_(α/2, n-1) · s/√n
  Use t(n-1); for n > 30: t ≈ z

Proportion (A/B testing):
  CI = p̂ ± z_(α/2) · √(p̂(1-p̂)/n)

Example: 500 visitors, 50 conversions
  p̂ = 0.10,  SE = √(0.10×0.90/500) = 0.0134
  95% CI = 0.10 ± 1.96×0.0134 = (0.074, 0.126)
  → True conversion rate is between 7.4% and 12.6%`}
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

        {/* ── 10. A/B Testing ── */}
        <Card>
          <SectionLabel>Section 10</SectionLabel>
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

        {/* ── 11. Bayesian Inference ── */}
        <Card>
          <SectionLabel>Section 11</SectionLabel>
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
          <CodeBlock
            label="MAP = MLE + regularization"
            code={`θ_MAP = argmax P(θ|X) = argmax P(X|θ)·P(θ)
           θ               θ

MLE:          maximize P(X|θ)            — no prior
MAP:          maximize P(X|θ)·P(θ)       — point estimate with prior
Full Bayesian: compute full P(θ|X)       — distribution over θ

MAP connection to regularization:
  Gaussian prior on weights  →  L2 regularization (Ridge)
  Laplace prior on weights   →  L1 regularization (Lasso)

This is why regularization has a Bayesian interpretation:
  Adding a prior = adding regularization
  Strong prior (large λ) = heavy regularization`}
          />

          <InterviewCallout>
            Bayesian inference treats parameters as distributions, not fixed unknowns. Start with a prior
            belief P(θ), observe data, update to posterior P(θ|data) ∝ P(data|θ)·P(θ). Conjugate priors
            (Beta-Bernoulli, Gaussian-Gaussian) give closed-form posteriors. Bayesian A/B testing gives
            direct probability statements ("variant B is better with 87% probability") unlike frequentist
            testing. MAP = MLE with regularization — Gaussian prior = L2, Laplace prior = L1.
          </InterviewCallout>
        </Card>

        {/* ── 12. Interview Q&A ── */}
        <Card>
          <SectionLabel>Section 12</SectionLabel>
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

        {/* ── 13. Cheat Sheet ── */}
        <Card>
          <SectionLabel>Section 13</SectionLabel>
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
