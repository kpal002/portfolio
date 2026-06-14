import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import katex from "katex";

export const metadata = {
  title: "Classical ML — Deep Dives — Kuntal Pal",
  description:
    "Complete classical machine learning study notes: Decision Trees, Random Forests, Gradient Boosting, SVMs, Logistic Regression, Regularization, Bias-Variance, Cross-Validation, Feature Engineering.",
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

export default function ClassicalMLPage() {
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
            <span className="text-accent">$</span> kuntal_pal
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-8 px-6 py-16">

        {/* ── Hero ── */}
        <Card>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">
            <span className="text-accent">{">"} </span>study notes · amazon applied scientist ii
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            Classical Machine Learning
          </h1>
          <p className="mb-6 text-base leading-relaxed text-ink/80">
            The algorithms that still dominate tabular data and production ML: decision trees,
            random forests, gradient boosting, SVMs, logistic regression, regularization,
            bias-variance, cross-validation, and feature engineering.
          </p>
          <ul className="flex flex-wrap gap-2">
            {["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forests", "XGBoost", "LightGBM", "SVMs", "L1/L2", "Bias-Variance", "Cross-Validation", "Feature Engineering"].map((t) => (
              <li key={t} className="border-2 border-ink bg-bg px-2 py-0.5 text-[11px] font-bold">
                {t}
              </li>
            ))}
          </ul>
        </Card>

        {/* ── 1. Linear Regression ── */}
        <Card>
          <SectionLabel>Section 1</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Linear Regression</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Models a continuous output as a linear combination of input features. The simplest supervised
            learning algorithm and the foundation of logistic regression, regularization, and most of the
            statistical thinking behind ML.
          </p>

          <MathBlock
            label="The model"
            lines={[
              String.raw`\hat{y} = w_1 x_1 + w_2 x_2 + \cdots + w_n x_n + b \;=\; w^\top x + b`,
              String.raw`\text{Simple (1 feature):}\quad \hat{y} = wx + b \;\to\; \text{a straight line}`,
              String.raw`\text{Multiple (}n\text{ features):}\quad \hat{y} = w^\top x + b \;\to\; \text{hyperplane in }n{+}1\text{ dims}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Loss Function — MSE vs MAE</p>
          <MathBlock
            label="Loss functions"
            lines={[
              String.raw`\text{MSE} = \frac{1}{N} \sum_i (y_i - \hat{y}_i)^2`,
              String.raw`\text{MAE} = \frac{1}{N} \sum_i |y_i - \hat{y}_i|`,
            ]}
          />

          <p className="mt-6 mb-2 text-[11px] font-bold uppercase tracking-widest text-muted">What each optimizes toward</p>
          <CompareTable
            headers={["", "MSE", "MAE"]}
            rows={[
              ["Optimal estimator", "Mean of target distribution", "Median of target distribution"],
              ["Sensitivity to outliers", "High — squares large errors", "Low — linear penalty"],
              ["Gradient behavior", "Smooth everywhere", "Non-differentiable at zero"],
              ["Optimization", "Easier — smooth gradients", "Harder — needs subgradients or IRLS"],
            ]}
          />

          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            Gradient behavior matters for linear regression specifically:
          </p>
          <MathBlock
            label="MSE gradient (smooth)"
            lines={[
              String.raw`\frac{\partial \,\text{MSE}}{\partial \hat{y}} = -\frac{2}{n}(y_i - \hat{y}_i)`,
            ]}
          />
          <p className="mt-2 mb-4 text-sm leading-relaxed text-ink/80">
            MAE gradient is discontinuous at zero — requires subgradient methods or iterative reweighted
            least squares (IRLS). This makes closed-form solutions unavailable for MAE.
          </p>
          <MathBlock
            label="MSE — closed-form normal equation"
            lines={[
              String.raw`\hat{\theta} = (X^\top X)^{-1} X^\top y`,
            ]}
          />
          <p className="mt-2 mb-4 text-sm leading-relaxed text-ink/80">MAE has no closed-form equivalent.</p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Huber loss — the practical middle ground</p>
          <MathBlock
            label="Huber Loss"
            lines={[
              String.raw`L_\delta(y, \hat{y}) = \begin{cases} \tfrac{1}{2}(y - \hat{y})^2 & |y - \hat{y}| \leq \delta \\ \delta\,|y - \hat{y}| - \tfrac{1}{2}\delta^2 & \text{otherwise} \end{cases}`,
            ]}
          />
          <p className="mt-2 text-sm leading-relaxed text-ink/80">
            Quadratic for small errors like MSE, linear for large errors like MAE. Smooth gradients +
            outlier robustness. <em>δ</em> is a tunable threshold that defines what counts as a "small" error.
          </p>

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Solving — Two Approaches</p>
          <MathBlock
            label="Normal Equation vs Gradient Descent"
            lines={[
              String.raw`\textbf{Approach 1 — Normal Equation:}\quad w^* = (X^\top X)^{-1} X^\top y`,
              String.raw`\textbf{Approach 2 — Gradient Descent:}\quad \frac{\partial \text{MSE}}{\partial w} = \frac{-2}{N} X^\top(y - Xw)`,
              String.raw`w \leftarrow w - \eta \cdot \frac{\partial \text{MSE}}{\partial w}, \qquad b \leftarrow b - \eta \cdot \frac{\partial \text{MSE}}{\partial b}`,
            ]}
          />

          {/* Normal Equation derivation */}
          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Normal Equation — Full Derivation</p>
          <p className="text-sm leading-relaxed text-ink/80 mb-3">
            Where <em>X ∈ ℝⁿˣᵈ</em> is the design matrix, <em>y ∈ ℝⁿ</em> the target vector, and <em>θ ∈ ℝᵈ</em> the parameters.
          </p>

          <MathBlock
            label="Step 1 — Setup: minimize MSE loss"
            lines={[
              String.raw`L(\theta) = \|y - X\theta\|^2 = (y - X\theta)^\top(y - X\theta)`,
            ]}
          />

          <MathBlock
            label="Step 2 — Expand"
            lines={[
              String.raw`L(\theta) = y^\top y - y^\top X\theta - (X\theta)^\top y + (X\theta)^\top X\theta`,
              String.raw`= y^\top y - 2\theta^\top X^\top y + \theta^\top X^\top X\theta`,
            ]}
          />
          <p className="text-[11px] text-ink/60 mb-2 pl-1">
            (Since <em>y⊤Xθ</em> is a scalar it equals its own transpose, so the two middle terms merge.)
          </p>

          <MathBlock
            label="Step 3 — Gradient w.r.t. θ  (using ∂/∂θ(θᵀAθ) = 2Aθ for symmetric A)"
            lines={[
              String.raw`\frac{\partial L}{\partial \theta} = -2X^\top y + 2X^\top X\theta`,
            ]}
          />

          <MathBlock
            label="Step 4 — Set to zero → Normal Equations"
            lines={[
              String.raw`-2X^\top y + 2X^\top X\theta = 0`,
              String.raw`X^\top X\theta = X^\top y`,
            ]}
          />

          <MathBlock
            label="Step 5 — Solve (assuming XᵀX invertible)"
            lines={[
              String.raw`\boxed{\hat{\theta} = (X^\top X)^{-1} X^\top y}`,
            ]}
          />

          <div className="mt-4 border-l-4 border-accent pl-5">
            <p className="text-sm font-bold mb-1">Geometric intuition</p>
            <p className="text-sm leading-relaxed text-ink/80">
              <em>X⊤X</em> is invertible only when X has full column rank — no multicollinearity.
              Geometrically, <em>ŷ = Xθ̂</em> is the <strong>orthogonal projection</strong> of y onto
              the column space of X. The residual <em>y − Xθ̂</em> is perpendicular to every column of
              X, which is exactly what the normal equations encode:
            </p>
            <MathBlock
              label=""
              lines={[String.raw`X^\top(y - X\hat{\theta}) = 0`]}
            />
          </div>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Key Assumptions (LINE)</p>
          <BoldBulletList items={[
            { label: "Linearity", desc: "Relationship between X and y is linear. Check: residual plot should show no pattern." },
            { label: "Independence", desc: "Observations are independent. Violated by time series data → use time series models." },
            { label: "Homoscedasticity", desc: "Constant variance of residuals across all X values. Fix if violated: log-transform the target y." },
            { label: "No Multicollinearity", desc: "Features should not be highly correlated. Check: Variance Inflation Factor (VIF > 10 = problem). Fix: remove one correlated feature, or use Ridge." },
            { label: "Normality of residuals", desc: "Required for valid hypothesis tests on coefficients. Less important for pure prediction tasks." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Evaluation Metrics</p>
          <MathBlock
            label="Regression metrics"
            lines={[
              String.raw`\text{MSE} = \frac{1}{N}\sum(y - \hat{y})^2`,
              String.raw`\text{RMSE} = \sqrt{\text{MSE}}`,
              String.raw`\text{MAE} = \frac{1}{N}\sum|y - \hat{y}|`,
              String.raw`R^2 = 1 - \frac{SS_{\text{res}}}{SS_{\text{tot}}}, \quad SS_{\text{res}} = \sum(y-\hat{y})^2,\quad SS_{\text{tot}} = \sum(y-\bar{y})^2`,
              String.raw`R^2_{\text{adj}} = 1 - \frac{(1-R^2)(N-1)}{N-p-1} \quad (p = \text{num features})`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Linear vs Logistic Regression</p>
          <CompareTable
            headers={["Linear Regression", "Logistic Regression"]}
            rows={[
              ["Predicts a continuous value", "Predicts a probability (0 to 1)"],
              ["Output: ŷ = wᵀx + b (unbounded)", "Output: σ(wᵀx + b) ∈ (0, 1)"],
              ["Loss: Mean Squared Error", "Loss: Binary Cross-Entropy"],
              ["Use: predicting emissions values, revenue", "Use: classifying high/low risk suppliers"],
              ["Assumptions: normality, homoscedasticity", "Fewer distributional assumptions"],
            ]}
          />

          <InterviewCallout>
            Linear regression models continuous outputs as a weighted sum of features. The MSE loss is
            convex so gradient descent always finds the global minimum. For small feature sets the Normal
            Equation gives an exact closed-form solution. Key diagnostics: check residual plots for linearity,
            VIF for multicollinearity, and use Adjusted R² when comparing models. For sustainability use
            cases — predicting supplier emissions values, estimating carbon footprint from product attributes
            — linear regression with feature engineering is often a strong, interpretable baseline.
          </InterviewCallout>

        </Card>

        {/* ── 2. Logistic Regression ── */}
        <Card>
          <SectionLabel>Section 2</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Logistic Regression</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            A linear classifier that models the probability of a binary outcome. Despite the name it is a
            classification algorithm. It is the foundation of many neural network concepts and the
            standard strong baseline.
          </p>

          <MathBlock
            label="How it works — the math"
            lines={[
              String.raw`z = w^\top x + b`,
              String.raw`\sigma(z) = \frac{1}{1 + e^{-z}} \;\in\; (0,1) \;=\; P(y=1 \mid x)`,
              String.raw`L = -\bigl[y \log(\hat{y}) + (1-y)\log(1-\hat{y})\bigr] \quad \text{(Binary Cross-Entropy)}`,
              String.raw`\frac{\partial L}{\partial w} = (\hat{y} - y) \cdot x`,
            ]}
          />

          <p className="mt-4 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Key Properties</p>
          <BoldBulletList items={[
            { label: "Linear decision boundary", desc: "Can only separate classes with a straight line (hyperplane in N dims). Cannot learn XOR or circular boundaries without feature engineering." },
            { label: "Probabilistic output", desc: "Unlike SVMs, gives calibrated probabilities. Useful when you need P(class), not just the class label." },
            { label: "Interpretable", desc: "Each weight wᵢ tells you how much feature i contributes to the log-odds. Can audit which features drive predictions." },
            { label: "Fast to train", desc: "Convex loss function — gradient descent always finds the global minimum. No local optima." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Decision Boundary</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            The decision boundary is the set of points where ŷ = 0.5, which means{" "}
            <span className="font-mono">σ(z) = 0.5</span> → <span className="font-mono">z = 0</span> →{" "}
            <span className="font-mono">Xw + b = 0</span>. This is a <strong>hyperplane</strong> in
            feature space — a line in 2D, a plane in 3D.
          </p>
          <CodeBlock
            label="Why it's called a linear classifier"
            code={`Decision boundary: wᵀx + b = 0  →  a hyperplane

  σ(wᵀx + b) = 0.5  ←→  wᵀx + b = 0  ←→  Xw + b = 0

The sigmoid is nonlinear, but the boundary it creates is linear.
That's why logistic regression is a linear classifier.

Can only separate:   ✓ linearly separable classes
Cannot separate:     ✗ XOR  ✗ concentric circles  ✗ spirals

For non-linear boundaries:
  → Feature engineering: add polynomial features x₁², x₂², x₁x₂
  → More powerful model: SVM with RBF kernel, neural network`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Multiclass Extension — Softmax</p>
          <MathBlock
            label="Softmax regression (K > 2 classes)"
            lines={[
              String.raw`P(y=k \mid x) = \frac{\exp(w_k^\top x)}{\sum_j \exp(w_j^\top x)}`,
              String.raw`L = -\sum_k y_k \cdot \log P(y=k \mid x) \quad \text{(Categorical cross-entropy)}`,
            ]}
          />

          <InterviewCallout>
            Logistic regression models P(y=1|x) by applying a sigmoid to a linear combination of features.
            The log loss penalizes confident wrong predictions. It is convex so always finds the global
            optimum. I use it as a strong baseline — if it performs well, the problem is likely linearly
            separable and you don{"'"}t need a complex model.
          </InterviewCallout>

          {/* Assumptions */}
          <div className="mt-8 border-t-2 border-ink pt-8">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-muted">Assumptions</p>
            <p className="text-sm leading-relaxed text-ink/90 mb-4">
              Fewer than linear regression — no normally distributed residuals, no homoscedasticity.
              But it has its own set.
            </p>
            <div className="space-y-3">
              {[
                {
                  label: "Binary outcome",
                  body: "Dependent variable must be categorical (binary for standard logistic regression). Can't predict continuous values like emissions tonnage.",
                },
                {
                  label: "Independence of observations",
                  body: "Each example must be independent. Violated by time series, clustered data (suppliers within regions), or repeated measures. Fix: mixed effects models or account for the grouping structure.",
                },
                {
                  label: "Linearity of log-odds",
                  body: "The key assumption. Linear relationship between features and the log-odds of the outcome — not the probability directly.",
                  code: `log(P(y=1) / P(y=0)) = wᵀx + b   ← log-odds is linear in x

Probability: S-shaped (sigmoid) relationship with x
Log-odds:    LINEAR relationship with x

Check: plot log-odds against each continuous feature
Fix:   add polynomial terms or bin the feature if non-linear`,
                },
                {
                  label: "No multicollinearity",
                  body: "Correlated features cause unstable coefficient estimates — the model can't determine which deserves credit. Check VIF > 10. Fix: drop one, use Ridge (L2), or PCA.",
                },
                {
                  label: "No extreme outliers",
                  body: "A single extreme point can heavily shift the decision boundary. Check: z-scores (|z| > 3). Fix: remove true errors, robust scaling, or winsorization.",
                },
                {
                  label: "Large enough sample size",
                  body: "Rule of thumb: 10–20 events (minority class samples) per predictor variable. With D features need at least 10D minority class examples. Use L2 regularization to stabilize estimates when N is small.",
                },
              ].map((item) => (
                <div key={item.label} className="border-l-4 border-ink pl-5">
                  <p className="text-sm font-bold">{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/80">{item.body}</p>
                  {item.code && (
                    <pre className="mt-2 overflow-x-auto bg-ink p-4 text-[11px] leading-relaxed text-accent">
                      <code>{item.code}</code>
                    </pre>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-2 border-ink text-sm">
                <thead>
                  <tr className="border-b-2 border-ink bg-ink text-bg">
                    <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest">Assumption</th>
                    <th className="px-4 py-3 text-center text-[11px] font-bold uppercase tracking-widest">Linear Reg</th>
                    <th className="px-4 py-3 text-center text-[11px] font-bold uppercase tracking-widest">Logistic Reg</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Binary/categorical outcome", "✗", "✓ required"],
                    ["Independence", "✓", "✓"],
                    ["Linear relationship", "in y", "in log-odds"],
                    ["Normally distributed errors", "✓", "✗ not needed"],
                    ["Homoscedasticity", "✓", "✗ not needed"],
                    ["No multicollinearity", "✓", "✓"],
                    ["No extreme outliers", "✓", "✓"],
                    ["Large N", "✓", "✓"],
                  ].map(([assumption, lin, log]) => (
                    <tr key={assumption} className="border-b border-ink/30">
                      <td className="px-4 py-2 text-sm font-bold text-ink">{assumption}</td>
                      <td className="px-4 py-2 text-center text-sm text-ink/80">{lin}</td>
                      <td className="px-4 py-2 text-center text-sm text-ink/80">{log}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 border-l-4 border-accent pl-5">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">
                <span className="text-accent">▸ </span>Interview One-Liner
              </p>
              <p className="text-sm leading-relaxed text-ink/80">
                Logistic regression assumes: binary outcome, independent observations, linearity in the
                log-odds (not the probability), no severe multicollinearity, no extreme outliers, and
                sufficient sample size — roughly 10–20 events per feature. It does <strong>not</strong> require
                normally distributed residuals or homoscedasticity — those are linear regression
                assumptions. The most commonly violated in practice is log-odds linearity, which you
                check by plotting log-odds against each continuous feature and fix by adding polynomial terms.
              </p>
            </div>
          </div>

          {/* MLE Proof */}
          <div className="mt-8 border-t-2 border-ink pt-8">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-muted">
              Why Log Loss? — The MLE Derivation
            </p>
            <p className="text-sm leading-relaxed text-ink/90 mb-4">
              Log loss isn{"'"}t an arbitrary choice. It is the unique loss that follows from modeling labels
              as Bernoulli random variables and applying maximum likelihood estimation.
            </p>

            <div className="space-y-4">

              {/* Step 1 */}
              <div className="border-2 border-ink bg-bg p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Step 1 — Probabilistic model</p>
                <p className="text-sm text-ink/80 mb-3">
                  Model each label as a Bernoulli random variable. Both cases in one expression:
                </p>
                <pre className="overflow-x-auto bg-ink p-4 text-[11px] leading-relaxed text-accent">
                  <code>{`P(y | x) = ŷʸ · (1-ŷ)^(1-y)

y=1: ŷ¹ · (1-ŷ)⁰ = ŷ       ✓
y=0: ŷ⁰ · (1-ŷ)¹ = (1-ŷ)   ✓`}</code>
                </pre>
              </div>

              {/* Step 2 */}
              <div className="border-2 border-ink bg-bg p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Step 2 — Write the likelihood</p>
                <p className="text-sm text-ink/80 mb-3">
                  Assuming N examples are independent, the probability of observing all of them is:
                </p>
                <pre className="overflow-x-auto bg-ink p-4 text-[11px] leading-relaxed text-accent">
                  <code>{`L(w) = ∏ᵢ P(yᵢ | xᵢ)  =  ∏ᵢ ŷᵢʸⁱ · (1-ŷᵢ)^(1-yᵢ)`}</code>
                </pre>
              </div>

              {/* Step 3 */}
              <div className="border-2 border-ink bg-bg p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Step 3 — Take the log</p>
                <p className="text-sm text-ink/80 mb-3">
                  Log turns products into sums. Maximizing log L(w) is equivalent to maximizing L(w).
                </p>
                <pre className="overflow-x-auto bg-ink p-4 text-[11px] leading-relaxed text-accent">
                  <code>{`log L(w) = Σᵢ log [ ŷᵢʸⁱ · (1-ŷᵢ)^(1-yᵢ) ]   ← log(∏) = Σlog

         = Σᵢ [ yᵢ·log(ŷᵢ) + (1-yᵢ)·log(1-ŷᵢ) ]   ← log(aᵇ) = b·log(a)`}</code>
                </pre>
              </div>

              {/* Step 4 */}
              <div className="border-2 border-ink bg-bg p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Step 4 — Negate to get a loss</p>
                <p className="text-sm text-ink/80 mb-3">
                  ML frameworks minimize, not maximize. Negate and average:
                </p>
                <pre className="overflow-x-auto bg-ink p-4 text-[11px] leading-relaxed text-accent">
                  <code>{`Loss = -(1/N) Σᵢ [ yᵢ·log(ŷᵢ) + (1-yᵢ)·log(1-ŷᵢ) ]

This is exactly binary cross-entropy.  ✓`}</code>
                </pre>
              </div>

              {/* Intuition */}
              <div className="border-2 border-ink bg-bg p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Intuition — penalty grows exponentially for confident mistakes</p>
                <pre className="overflow-x-auto bg-ink p-4 text-[11px] leading-relaxed text-accent">
                  <code>{`y=1, ŷ=0.99  (correct, confident)  →  -log(0.99) ≈ 0.01   tiny
y=1, ŷ=0.50  (correct, uncertain)  →  -log(0.50) ≈ 0.69   moderate
y=1, ŷ=0.01  (wrong,   confident)  →  -log(0.01) ≈ 4.60   huge

As ŷ → 0 when y=1:  -log(ŷ)   → +∞
As ŷ → 1 when y=0:  -log(1-ŷ) → +∞`}</code>
                </pre>
              </div>

              {/* Full chain */}
              <div className="border-2 border-ink bg-bg p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">The full chain</p>
                <pre className="overflow-x-auto bg-ink p-4 text-[11px] leading-relaxed text-accent">
                  <code>{`Bernoulli model for binary labels
           ↓
L(w) = ∏ ŷʸ(1-ŷ)^(1-y)
           ↓
log L(w) = Σ [y·log(ŷ) + (1-y)·log(1-ŷ)]
           ↓
Negate + average
           ↓
Log Loss = -(1/N) Σ [y·log(ŷ) + (1-y)·log(1-ŷ)]`}</code>
                </pre>
              </div>

            </div>

            <div className="mt-4 border-l-4 border-accent pl-5">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted">
                <span className="text-accent">▸ </span>Interview One-Liner
              </p>
              <p className="text-sm leading-relaxed text-ink/80">
                MLE asks: what weights make the observed training data most probable? If we model each
                label as a Bernoulli random variable with P(y=1|x) = σ(wᵀx), the joint likelihood of all
                N observations is a product of Bernoullis. Taking the log turns that product into a sum.
                Negating to convert maximization to minimization gives exactly binary cross-entropy. Log
                loss isn{"'"}t an arbitrary choice — it{"'"}s the unique loss that follows from assuming
                Bernoulli labels and applying MLE.
              </p>
            </div>
          </div>
        </Card>

        {/* ── 3. Decision Trees ── */}
        <Card>
          <SectionLabel>Section 3</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Decision Trees</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            A decision tree recursively partitions the feature space by asking binary questions.
            Each internal node is a feature threshold; each leaf is a prediction.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Splitting Criterion</p>
          <MathBlock
            label="Gini impurity (sklearn default)"
            lines={[
              String.raw`\text{Gini}(S) = 1 - \sum_k p_k^2 \quad (p_k = \text{fraction of class } k)`,
              String.raw`\text{Split gain} = \text{Gini}(\text{parent}) - \left[\frac{|\text{left}|}{|S|}\text{Gini}(\text{left}) + \frac{|\text{right}|}{|S|}\text{Gini}(\text{right})\right]`,
            ]}
          />
          <MathBlock
            label="Entropy / Information Gain (alternative)"
            lines={[
              String.raw`H(S) = -\sum_k p_k \log_2(p_k)`,
              String.raw`\text{Information Gain} = H(\text{parent}) - \text{weighted } H(\text{children})`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Overfitting — The Main Problem</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            An unconstrained tree grows until every leaf is pure — perfectly memorizing training data.
          </p>
          <BoldBulletList items={[
            { label: "max_depth", desc: "Limit tree depth (e.g., max_depth=5). Most important hyperparameter." },
            { label: "min_samples_split", desc: "Minimum samples required to split a node." },
            { label: "min_samples_leaf", desc: "Minimum samples required at a leaf." },
            { label: "min_impurity_decrease", desc: "Only split if the gain exceeds this threshold." },
            { label: "Post-pruning", desc: "Grow full tree, then remove branches that don't improve validation performance (cost-complexity pruning)." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Strengths and Weaknesses</p>
          <CompareTable
            headers={["Strengths", "Weaknesses"]}
            rows={[
              ["Interpretable — visualize every decision", "High variance — small data changes → very different tree"],
              ["Handles mixed feature types (numeric + categorical)", "Biased toward high-cardinality features"],
              ["No feature scaling needed", "Cannot extrapolate beyond training data range"],
              ["Fast inference — O(depth) per sample", "Only axis-aligned splits — no diagonal boundaries"],
            ]}
          />

          <InterviewCallout>
            Decision trees split the feature space recursively using Gini impurity or information gain.
            Interpretable and handle mixed types, but suffer from high variance — small changes in data
            produce very different trees. This is why they are almost always used inside ensemble methods
            (Random Forests, Gradient Boosting) rather than alone.
          </InterviewCallout>
        </Card>

        {/* ── 4. Random Forests ── */}
        <Card>
          <SectionLabel>Section 4</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Random Forests</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Random Forests fix the high variance of individual trees by training many trees on different
            random subsets of data and features, then averaging predictions.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Two Sources of Randomness</p>
          <CodeBlock
            label="Bagging + feature randomness"
            code={`1. BAGGING (Bootstrap Aggregating):
   Each tree trains on a bootstrap sample — N samples drawn WITH replacement.
   ~63% of samples appear, ~37% are never seen (out-of-bag).

2. FEATURE RANDOMNESS:
   At each split, consider only a random subset of features:
   Classification: sqrt(n_features) features per split
   Regression:     n_features/3 features per split

Why this helps:
   Trees on different data → different errors
   Trees on different features → decorrelated predictions
   Averaging decorrelated errors → variance drops by ~1/N
   Bias stays the same.`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Out-of-Bag (OOB) Error</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            The ~37% of samples not seen by each tree form a free validation set. Average OOB predictions
            across all trees for an unbiased generalization estimate — no separate validation set needed.
          </p>
          <div className="mb-4 border-l-4 border-accent pl-5">
            <p className="text-sm font-bold">Why exactly 37%?</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/80">
              Each bootstrap sample draws N times with replacement from N samples. The probability a
              specific sample is <em>never</em> drawn is{" "}
              <span className="font-mono">(1 - 1/N)ᴺ</span>. As N grows this converges to{" "}
              <span className="font-mono">1/e ≈ 0.368</span> — the same limit that defines Euler{"'"}s
              number. So roughly 37% of samples are out-of-bag in every bootstrap, guaranteed by
              probability theory rather than by design.
            </p>
          </div>
          <CodeBlock
            label="OOB score in sklearn"
            code={`rf = RandomForestClassifier(oob_score=True)
rf.fit(X_train, y_train)
print(rf.oob_score_)  # free validation accuracy estimate`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Feature Importance</p>
          <CodeBlock
            label="MDI vs permutation importance"
            code={`# Mean Decrease in Impurity (MDI) — built-in but biased toward high-cardinality
importances = rf.feature_importances_

# Permutation importance — more reliable
from sklearn.inspection import permutation_importance
result = permutation_importance(rf, X_val, y_val)
# Measures accuracy drop when a feature is randomly shuffled`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Key Hyperparameters</p>
          <CompareTable
            headers={["Parameter", "Default", "Effect"]}
            rows={[
              ["n_estimators", "100", "Number of trees. More = better, diminishing returns after ~200."],
              ["max_depth", "None", "None = grow until pure. Intentional here — fully grown trees have low bias and high variance, and averaging many of them cancels the variance while preserving the low bias. Setting max_depth introduces bias that averaging cannot fix."],
              ["max_features", "sqrt(n)", "Features per split. Lower = more decorrelation, higher bias."],
              ["min_samples_leaf", "1", "Min samples at leaf. Higher = smoother, less overfit."],
              ["n_jobs", "-1", "Use all CPU cores for parallel training."],
            ]}
          />

          <InterviewCallout>
            Random Forests train N trees, each on a bootstrap sample with random feature subsets. Averaging
            their predictions cancels individual tree errors — variance drops by ~1/N while bias stays constant.
            Key advantages: OOB error estimate, built-in feature importance, robust to outliers, no scaling needed.
            Disadvantage: less interpretable than a single tree, can still overfit noisy data.
          </InterviewCallout>
        </Card>

        {/* ── 5. Gradient Boosting ── */}
        <Card>
          <SectionLabel>Section 5</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Gradient Boosting — XGBoost {"&"} LightGBM</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Gradient boosting builds trees sequentially, each correcting the errors of all previous trees.
            Unlike Random Forests (parallel, variance reduction), boosting reduces bias by iteratively fixing mistakes.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">The Core Idea — Fitting Residuals</p>
          <CodeBlock
            label="Iterative residual fitting"
            code={`Iteration 0: Start with a simple prediction (mean of y)
  F₀(x) = mean(y) = 50
  Residuals = y - F₀(x)

Iteration 1: Fit a tree to the RESIDUALS
  F₁(x) = F₀(x) + η·Tree₁(x)
  η = learning rate (e.g., 0.1) — shrinks each tree's contribution

Iteration 2: Fit a tree to NEW residuals = y - F₁(x)
  F₂(x) = F₁(x) + η·Tree₂(x)

...repeat for M iterations...
Final: F_M(x) = F₀(x) + η·Σᵢ Treeᵢ(x)

Connection to gradient descent:
  Residuals = negative gradient of MSE loss
  Each tree steps in the direction of steepest descent
  η controls step size (like learning rate in neural nets)`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">XGBoost — Key Innovations</p>
          <BoldBulletList items={[
            { label: "Built-in regularization", desc: "Adds L1 (α) and L2 (λ) penalty on leaf weights directly into the objective. Prevents overfitting at the tree level." },
            { label: "Second-order gradients", desc: "Uses both gradient (first derivative) and Hessian (second derivative) of the loss. More accurate step direction than vanilla gradient boosting." },
            { label: "Sparsity awareness", desc: "Handles missing values natively by learning the best default direction for missing data at each split." },
            { label: "Parallel split finding", desc: "Sorts features once and caches them. Split finding is parallelized across features (not trees — boosting is inherently sequential)." },
          ]} />
          <CodeBlock
            label="XGBoost — key parameters"
            code={`model = xgb.XGBClassifier(
    n_estimators=500,         # number of trees
    learning_rate=0.05,       # η — smaller = more trees, better generalization
    max_depth=6,              # tree depth
    subsample=0.8,            # row subsampling (like bagging)
    colsample_bytree=0.8,     # feature subsampling per tree
    reg_alpha=0.1,            # L1 regularization
    reg_lambda=1.0,           # L2 regularization
    early_stopping_rounds=50, # stop if no improvement
)`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">LightGBM vs XGBoost</p>
          <BoldBulletList items={[
            { label: "Leaf-wise vs level-wise growth", desc: "LightGBM always splits the highest-gain leaf next; XGBoost completes each full depth level before going deeper. Leaf-wise reaches lower loss faster but can overfit more aggressively." },
            { label: "Histogram-based split finding", desc: "LightGBM bins N samples into K=255 buckets, reducing split computation from O(N log N) to O(K). This is the main source of its speed advantage." },
            { label: "GOSS (Gradient-based One-Side Sampling)", desc: "LightGBM focuses training on high-gradient samples (the ones the model is getting wrong) and downsamples low-gradient ones — further improving speed with minimal accuracy loss." },
            { label: "EFB (Exclusive Feature Bundling)", desc: "LightGBM bundles sparse mutually exclusive features into single features, reducing effective feature count and speeding up split finding." },
            { label: "Second-order gradients", desc: "XGBoost uses both gradient and Hessian by default for a more accurate step direction — its main accuracy advantage over LightGBM." },
          ]} />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Critical Hyperparameters</p>
          <CompareTable
            headers={["Parameter", "Range", "Effect"]}
            rows={[
              ["n_estimators", "100–1000", "More trees = lower bias. Use early stopping to find optimal."],
              ["learning_rate", "0.01–0.3", "Lower η → need more trees but better generalization. Set η=0.05 with 1000 trees."],
              ["max_depth", "3–8", "Controls tree complexity. Boosting typically uses shallow trees (3–6)."],
              ["subsample", "0.6–1.0", "Row sampling per tree. Adds randomness, reduces overfitting."],
              ["min_child_weight", "1–10", "Min sum of instance weights in a leaf. Higher = more conservative."],
            ]}
          />

          <InterviewCallout>
            Gradient boosting builds trees sequentially, each fitting the residuals of the previous ensemble.
            It reduces bias through iterative error correction — the opposite of Random Forests which reduce
            variance through averaging. XGBoost adds second-order gradients and regularization for better
            convergence. LightGBM uses histogram-based splitting and leaf-wise growth for 10–100× speedup on
            large datasets. In practice gradient boosting almost always outperforms Random Forests on tabular data.
          </InterviewCallout>
        </Card>

        {/* ── 6. SVMs ── */}
        <Card>
          <SectionLabel>Section 6</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Support Vector Machines</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            SVMs find the hyperplane that maximally separates two classes — the decision boundary with the
            largest margin. Training points closest to the boundary are called support vectors.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Maximum Margin — Hard Margin SVM</p>
          <MathBlock
            label="Optimization objective"
            lines={[
              String.raw`\text{Margin} = \frac{2}{\|w\|}`,
              String.raw`\text{minimize:}\quad \tfrac{1}{2}\|w\|^2`,
              String.raw`\text{subject to:}\quad y_i(w^\top x_i + b) \geq 1 \quad \forall i`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Soft Margin — Handling Non-Separable Data</p>
          <MathBlock
            label="Soft margin with slack variables"
            lines={[
              String.raw`\text{minimize:}\quad \tfrac{1}{2}\|w\|^2 + C \sum_i \xi_i`,
              String.raw`\text{subject to:}\quad y_i(w^\top x_i + b) \geq 1 - \xi_i,\quad \xi_i \geq 0`,
              String.raw`C = 1/\lambda \;\text{(think of }C\text{ as inverse regularization strength)}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">The Kernel Trick — Non-Linear Boundaries</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-3">
            SVMs only need dot products between points. Replace with a kernel K(xᵢ, xⱼ) that computes dot
            products in a higher-dimensional space without explicitly mapping there.
          </p>
          <CodeBlock
            label="Common kernels"
            code={`Linear:      K(x,z) = xᵀz                      → linear boundary
Polynomial:  K(x,z) = (xᵀz + c)ᵈ               → degree-d boundary
RBF/Gaussian: K(x,z) = exp(-γ||x-z||²)          → infinite-dimensional space
                                                   → most powerful, default choice

γ controls locality:
  High γ → complex boundary, each support vector has narrow influence
  Low γ  → smooth boundary, wide influence`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">SVM Hyperparameters</p>
          <CompareTable
            headers={["Parameter", "Values", "Effect"]}
            rows={[
              ["C", "0.001, 0.01, 0.1, 1, 10, 100", "Regularization. Start at C=1, tune via cross-validation."],
              ["kernel", "rbf, linear, poly", "rbf is default and usually best. Use linear for high-D sparse data (text)."],
              ["gamma", "scale, auto, 0.001–1", "RBF width. scale = 1/(n_features × X.var()) is a good default."],
              ["degree", "2, 3, 4", "Polynomial kernel degree only."],
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">When SVMs Excel</p>
          <BulletList items={[
            "High-dimensional sparse data: Text classification with TF-IDF features — linear SVM is extremely fast and effective.",
            "Small datasets: Good generalization on small training sets where neural networks would overfit.",
            "Clear margin of separation: When classes are well-separated, SVMs find the optimal boundary by definition.",
          ]} />

          <InterviewCallout>
            SVMs find the maximum-margin hyperplane — the decision boundary furthest from all training points.
            Only the support vectors (closest points to the boundary) determine the solution. The kernel trick
            enables non-linear boundaries by implicitly mapping to higher dimensions. SVMs work best on
            small-to-medium datasets with high-dimensional features (e.g., text). They scale poorly to large
            datasets (O(N²) to O(N³) training time) — use gradient boosting or neural networks instead.
          </InterviewCallout>
        </Card>

        {/* ── 7. Regularization ── */}
        <Card>
          <SectionLabel>Section 7</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Regularization — L1, L2, Elastic Net</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Regularization adds a penalty on model weights to the loss function, discouraging the model from
            fitting noise. It is the primary tool for reducing overfitting.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">L2 Regularization — Ridge</p>
          <MathBlock
            label="L2 math"
            lines={[
              String.raw`\text{Loss} = \text{Original Loss} + \lambda \sum_i w_i^2 = \text{Original Loss} + \lambda \|w\|^2`,
              String.raw`w_i \leftarrow w_i(1 - 2\eta\lambda) - \eta \cdot \nabla \quad \text{(weight decay every step)}`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">L1 Regularization — Lasso</p>
          <MathBlock
            label="L1 math"
            lines={[
              String.raw`\text{Loss} = \text{Original Loss} + \lambda \sum_i |w_i| = \text{Original Loss} + \lambda \|w\|_1`,
              String.raw`\frac{\partial L}{\partial w_i} \mathrel{+}= \lambda \cdot \text{sign}(w_i) \quad (\text{sign}(w_i) = +1 \text{ if } w_i > 0,\; -1 \text{ if } w_i < 0)`,
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">L1 vs L2 vs Elastic Net</p>
          <CompareTable
            headers={["", "L1 (Lasso)", "L2 (Ridge)", "Elastic Net"]}
            rows={[
              ["Penalty", "λ·||w||₁", "λ·||w||₂²", "λ₁·||w||₁ + λ₂·||w||₂²"],
              ["Effect on weights", "Can push to exactly 0", "Shrinks, rarely zero", "Sparse + stable"],
              ["Feature selection", "Yes — automatic", "No — keeps all features", "Grouped selection"],
              ["Use when", "Few features are relevant", "Many features contribute a little", "Correlated features"],
              ["sklearn", "Lasso, penalty='l1'", "Ridge, penalty='l2'", "ElasticNet(l1_ratio=0.5)"],
            ]}
          />

          <CodeBlock
            label="Choosing λ via cross-validation"
            code={`# Note: sklearn uses C = 1/λ, so SMALL C = STRONG regularization
from sklearn.model_selection import GridSearchCV

param_grid = {'C': [0.001, 0.01, 0.1, 1, 10, 100]}
gs = GridSearchCV(LogisticRegression(), param_grid, cv=5)
gs.fit(X_train, y_train)
print(gs.best_params_)`}
          />

          <InterviewCallout>
            L2 (Ridge) shrinks all weights toward zero — smooth solution, keeps all features. L1 (Lasso) can
            push weights to exactly zero — sparse solution, automatic feature selection. Use L1 when most
            features are irrelevant. Use L2 when many features contribute a little. Use Elastic Net for
            correlated features (L1 arbitrarily picks one from a correlated group; Elastic Net selects the
            group together). λ is always tuned via cross-validation.
          </InterviewCallout>
        </Card>

        {/* ── 8. Bias-Variance ── */}
        <Card>
          <SectionLabel>Section 8</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Bias-Variance Trade-off</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            The fundamental tension in supervised learning between underfitting (high bias) and overfitting
            (high variance). Every modeling decision involves this trade-off.
          </p>

          <MathBlock
            label="The decomposition"
            lines={[
              String.raw`\mathbb{E}[\text{test error}] = \text{Bias}^2 + \text{Variance} + \text{Irreducible Noise}`,
            ]}
          />

          <p className="mt-8 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">The Proof</p>
          <p className="text-sm leading-relaxed text-ink/90 mb-4">
            Setup: the true target is <span className="font-mono">y = f(x) + ε</span> where{" "}
            <span className="font-mono">E[ε] = 0</span> and{" "}
            <span className="font-mono">E[ε²] = σ²</span>. Let{" "}
            <span className="font-mono">f̄ = E[f̂]</span> be the expected prediction of the model.
          </p>

          <div className="space-y-0 border-2 border-ink">
            {/* Step 1 */}
            <div className="border-b-2 border-ink p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Step 1 — Add and subtract f̄</p>
              <pre className="text-[12px] leading-relaxed text-ink font-mono whitespace-pre-wrap">{`E[(y − f̂)²]

= E[(y − f̄  +  f̄ − f̂)²]

= E[(y − f̄)²]  +  2E[(y − f̄)(f̄ − f̂)]  +  E[(f̄ − f̂)²]`}</pre>
            </div>

            {/* Step 2 */}
            <div className="border-b-2 border-ink p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Step 2 — Cross term vanishes</p>
              <p className="text-sm text-ink/80 mb-2">
                <span className="font-mono">E[f̄ − f̂] = 0</span> because <span className="font-mono">f̄</span> is defined as <span className="font-mono">E[f̂]</span>, so the middle term is zero.
              </p>
              <pre className="text-[12px] leading-relaxed text-ink font-mono whitespace-pre-wrap">{`= E[(y − f̄)²]  +  E[(f̄ − f̂)²]

= E[(f(x) + ε − f̄)²]  +  Var(f̂)`}</pre>
            </div>

            {/* Step 3 */}
            <div className="border-b-2 border-ink p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Step 3 — Expand the first term</p>
              <pre className="text-[12px] leading-relaxed text-ink font-mono whitespace-pre-wrap">{`= E[(f(x) − f̄)²]  +  2E[ε(f(x) − f̄)]  +  E[ε²]  +  Var(f̂)`}</pre>
            </div>

            {/* Step 4 */}
            <div className="p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Step 4 — Middle term vanishes, collect terms</p>
              <p className="text-sm text-ink/80 mb-2">
                <span className="font-mono">E[ε] = 0</span> and <span className="font-mono">ε</span> is independent of <span className="font-mono">f(x) − f̄</span>, so the cross term is zero.
              </p>
              <pre className="text-[12px] leading-relaxed text-ink font-mono whitespace-pre-wrap">{`= (f(x) − f̄)²  +  Var(f̂)  +  σ²

= Bias²  +  Variance  +  Irreducible Noise`}</pre>
            </div>
          </div>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Algorithm Positions on the Spectrum</p>
          <CompareTable
            headers={["Algorithm", "Bias", "Variance"]}
            rows={[
              ["Logistic Regression", "High (assumes linearity)", "Low (stable predictions)"],
              ["Decision Tree (deep)", "Low (flexible)", "High (sensitive to data)"],
              ["Decision Tree (shallow)", "Medium", "Medium"],
              ["Random Forest", "Low–Medium", "Low (averaging reduces variance)"],
              ["Gradient Boosting", "Low (iterative correction)", "Medium (needs tuning)"],
              ["SVM (linear)", "High", "Low"],
              ["SVM (RBF, high γ)", "Low", "High"],
              ["Large Neural Network", "Very Low", "High (needs regularization)"],
              ["Neural Network + Dropout", "Low", "Lower"],
            ]}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Diagnosing Your Model</p>
          <CodeBlock
            label="Four diagnostic patterns"
            code={`High train error + High test error   → HIGH BIAS (underfitting)
  Fix: increase model complexity, add features, use more powerful algorithm

Low train error + High test error    → HIGH VARIANCE (overfitting)
  Fix: more training data, reduce complexity, regularization,
       ensemble methods, feature selection

Low train error + Low test error     → GOOD MODEL ✓

High train error + Low test error    → Impossible
  (would mean test is easier than training)`}
          />

          <InterviewCallout>
            Bias is error from wrong model assumptions — the model is too simple to capture the pattern.
            Variance is error from sensitivity to training data — the model learned noise. High bias →
            underfitting. High variance → overfitting. Random Forests reduce variance by averaging many
            decorrelated trees. Boosting reduces bias by iteratively correcting errors. Regularization
            reduces variance by penalizing complexity. The goal is the model complexity that minimizes
            bias² + variance.
          </InterviewCallout>
        </Card>

        {/* ── 9. Cross-Validation ── */}
        <Card>
          <SectionLabel>Section 9</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Cross-Validation</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            The standard way to estimate model generalization and tune hyperparameters using only training
            data — without touching the test set.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">K-Fold Cross-Validation</p>
          <CodeBlock
            label="K=5 example"
            code={`Split training data into K equal folds:

Fold 1: [VAL][TRN][TRN][TRN][TRN] → score₁
Fold 2: [TRN][VAL][TRN][TRN][TRN] → score₂
Fold 3: [TRN][TRN][VAL][TRN][TRN] → score₃
Fold 4: [TRN][TRN][TRN][VAL][TRN] → score₄
Fold 5: [TRN][TRN][TRN][TRN][VAL] → score₅

CV Score = mean(score₁, ..., score₅)
Std Dev  = std(score₁, ..., score₅)   ← tells you stability

from sklearn.model_selection import cross_val_score
scores = cross_val_score(model, X_train, y_train, cv=5)
print(f'{scores.mean():.3f} ± {scores.std():.3f}')`}
          />

          <CompareTable
            headers={["K value", "Bias", "Variance / Cost"]}
            rows={[
              ["K=5", "Slightly higher (trains on 80%)", "Lower variance, 5 model fits"],
              ["K=10", "Lower (trains on 90%)", "Higher variance, 10 model fits"],
              ["K=N (LOO)", "Lowest (trains on N-1)", "Very high variance, N model fits — expensive"],
            ]}
          />
          <p className="mt-2 text-sm text-ink/80">K=5 or K=10 are the standard choices. K=10 for smaller datasets.</p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Stratified K-Fold</p>
          <p className="text-sm text-ink/90 mb-3">
            For classification, always use Stratified K-Fold — ensures each fold has the same class
            distribution as the full dataset. Critical for imbalanced data.
          </p>
          <CodeBlock
            label="Stratified + nested CV"
            code={`from sklearn.model_selection import StratifiedKFold, GridSearchCV, cross_val_score

# Standard stratified CV
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X, y, cv=skf)

# Nested CV — unbiased estimate when tuning hyperparameters
# If you tune params using CV then report that score → optimistic bias
inner_cv = StratifiedKFold(n_splits=5)
outer_cv = StratifiedKFold(n_splits=5)
clf = GridSearchCV(estimator=model, param_grid=params, cv=inner_cv)
nested_score = cross_val_score(clf, X, y, cv=outer_cv)  # unbiased`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Time Series Cross-Validation</p>
          <CodeBlock
            label="TimeSeriesSplit — prevent future leakage"
            code={`Standard K-Fold LEAKS future data into training.
For time series, always use TimeSeriesSplit:

Split 1: [TRN] [VAL]
Split 2: [TRN TRN] [VAL]
Split 3: [TRN TRN TRN] [VAL]

Training always precedes validation in time.

from sklearn.model_selection import TimeSeriesSplit
tscv = TimeSeriesSplit(n_splits=5)`}
          />

          <InterviewCallout>
            Cross-validation estimates generalization by training and evaluating on K different splits of
            training data. Use Stratified K-Fold for classification to preserve class ratios. Use Nested CV
            when tuning hyperparameters to avoid optimistic bias. Use TimeSeriesSplit for temporal data to
            prevent leakage. K=5 or K=10 are the standard choices.
          </InterviewCallout>
        </Card>

        {/* ── 10. Feature Engineering ── */}
        <Card>
          <SectionLabel>Section 10</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Feature Engineering</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Transforming raw data into features that better represent the underlying pattern.
            Often the highest-leverage activity in a classical ML project — better features beat better algorithms.
          </p>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Numerical Features — Scaling</p>
          <p className="text-sm text-ink/90 mb-3">
            Most algorithms (SVMs, logistic regression, KNN) require scaled features. Tree-based models
            (Random Forests, XGBoost) do <strong>not</strong> need scaling.
          </p>
          <CodeBlock
            label="Scaling options"
            code={`StandardScaler:  z = (x - mean) / std
  → mean=0, std=1. Use for normally distributed features. Affected by outliers.

MinMaxScaler:    x' = (x - min) / (max - min)
  → Scales to [0,1]. Very sensitive to outliers.

RobustScaler:    x' = (x - median) / IQR
  → Uses median and IQR. Best for skewed distributions with outliers.

Log transform:   x' = log(x + 1)
  → For right-skewed distributions (income, emissions values).
  → Makes multiplicative relationships additive.`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Categorical Features</p>
          <CodeBlock
            label="Encoding strategies"
            code={`ONE-HOT ENCODING:
  Color = [red, blue, green]  →  is_red, is_blue, is_green
  Use for nominal (unordered) categories with low cardinality (<20).
  Drop one category to avoid multicollinearity (drop_first=True).

ORDINAL ENCODING:
  Size = [small, medium, large]  →  [0, 1, 2]
  Use when categories have a natural order.

TARGET ENCODING (Mean Encoding):
  Replace each category with the mean target for that category.
  Very powerful for high-cardinality categories.
  DANGER: use within CV folds to prevent leakage.

HASH ENCODING:
  For very high cardinality (millions of categories).
  Hash category to a fixed number of buckets.`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Feature Interactions</p>
          <CodeBlock
            label="Manual interactions + polynomial features"
            code={`# Domain-specific interaction terms
df['emissions_per_revenue'] = df['emissions'] / df['revenue']
df['high_emissions_low_audit'] = (
    (df['emissions_score'] > 70) & (df['audit_score'] < 30)
).astype(int)

# Polynomial features (for logistic regression / SVM)
from sklearn.preprocessing import PolynomialFeatures
poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)  # adds x₁², x₂², x₁x₂ etc.

# Note: XGBoost learns interactions automatically
# Polynomial features are mainly for linear models`}
          />

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Handling Missing Values</p>
          <CodeBlock
            label="Imputation strategies"
            code={`Simple imputation:
  Mean/Median: for numerical, when data is MAR (Missing at Random)
  Mode:        for categorical
  Constant:    fill with 0 or 'Unknown'

Advanced imputation:
  KNN imputation:        fill based on K nearest complete samples
  Iterative (MICE):      model each feature from all others

Missingness as a feature:
  df['emissions_is_missing'] = df['emissions'].isnull().astype(int)
  Often the fact that data is missing is itself informative.
  (e.g., supplier refusing to disclose emissions = high risk signal)

XGBoost/LightGBM handle missing values natively — no imputation needed.`}
          />

          <InterviewCallout>
            Feature engineering is often more impactful than algorithm choice. Scale numerical features for
            linear models and SVMs (not needed for trees). One-hot encode low-cardinality categoricals,
            target-encode high-cardinality ones (within CV folds). Create domain-specific interaction
            features (e.g., emissions per dollar of revenue). Treat missingness as a feature when absence
            is itself informative.
          </InterviewCallout>
        </Card>

        {/* ── 11. Classical vs Deep Learning ── */}
        <Card>
          <SectionLabel>Section 11</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">When Classical ML Beats Deep Learning</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-6">
            The 6 scenarios where you should reach for classical models over neural networks.
          </p>

          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Small Datasets (< 10K samples)",
                body: "Deep learning requires large amounts of data to learn useful representations. On small datasets it memorizes training examples rather than learning patterns.",
                code: `< 1,000 samples:   Logistic Regression or SVM
1K - 10K samples:  Random Forest or XGBoost
10K - 100K:        XGBoost usually competitive with DL
> 100K samples:    Deep learning starts to win

Exception: Transfer learning (fine-tuned BERT) can work on small datasets.`,
              },
              {
                n: "2",
                title: "Tabular / Structured Data",
                body: "On tabular data, gradient boosting consistently outperforms deep learning. 2022 NeurIPS paper 'Why tree-based models still outperform deep learning on tabular data' (Grinsztajn et al.): XGBoost outperformed all DL methods on 45/45 tabular datasets. Sustainability data is almost entirely tabular — supplier scorecards, emissions inventories, regulatory filings.",
                code: null,
              },
              {
                n: "3",
                title: "Interpretability Required",
                body: "In regulated domains (finance, healthcare, sustainability auditing) you need to explain WHY a model made a prediction.",
                code: `Logistic Regression:  weights show feature contribution
Decision Tree:        visualize the exact decision path
XGBoost + SHAP:       best of both worlds — power + explanations

Example: 'Why is this supplier flagged as high-risk?'
  Decision tree: 'emissions_score > 70 AND audit_failures > 2'
  Neural network: 512 weights across 8 layers → hard to explain`,
              },
              {
                n: "4",
                title: "Training Speed and Compute Constraints",
                body: null,
                code: `XGBoost on CPU:     seconds to minutes
Random Forest:      trivially parallelizable on CPU
Neural network:     requires GPU, hours to days

Use classical ML when: rapid prototyping, limited budget,
need to retrain frequently, edge deployment without GPU.`,
              },
              {
                n: "5",
                title: "Explicit Domain Features Available",
                body: "When domain experts can hand-craft meaningful features, classical models use them directly. Neural networks have to rediscover these features from raw inputs.",
                code: `emissions_per_dollar_revenue  ← you engineered this
yoy_emissions_change          ← you engineered this
audit_failure_rate            ← you engineered this

A logistic regression with 3 good features may outperform a neural
network on raw supplier data.`,
              },
              {
                n: "6",
                title: "Causal Inference and Statistical Testing",
                body: "When you need causal effects, hypothesis tests, or confidence intervals — classical statistical models are required.",
                code: `Neural networks:    predict well, cannot estimate causal effects
Logistic regression: coefficients with p-values and CIs
Decision trees:      transparent enough for causal interpretation

Example: 'Does this intervention reduce supplier emissions?'
  → Causal inference (DiD, IV, RDD), not deep learning`,
              },
            ].map((item) => (
              <div key={item.n} className="border-2 border-ink bg-bg p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="border-2 border-ink bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ink">
                    {item.n}
                  </span>
                  <p className="text-sm font-bold">{item.title}</p>
                </div>
                {item.body && <p className="text-sm text-ink/80 mb-3">{item.body}</p>}
                {item.code && (
                  <pre className="overflow-x-auto bg-ink p-4 text-[11px] leading-relaxed text-accent">
                    <code>{item.code}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>

          <p className="mt-6 mb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Summary Table</p>
          <CompareTable
            headers={["Use Classical ML When…", "Use Deep Learning When…"]}
            rows={[
              ["Small dataset (< 10K samples)", "Large dataset (> 100K samples)"],
              ["Tabular/structured data", "Unstructured data (images, text, audio)"],
              ["Interpretability required", "Raw perceptual inputs (pixels, waveforms)"],
              ["Limited compute budget", "GPU/TPU available"],
              ["Domain features available", "Features must be learned from scratch"],
              ["Causal inference needed", "Pattern recognition / generation tasks"],
              ["Fast iteration required", "Long-running training is acceptable"],
            ]}
          />

          <InterviewCallout label="Interview One-Liner">
            My default for tabular data is always XGBoost first — it wins on tabular benchmarks, trains fast,
            handles missing values, and SHAP makes it explainable. I reach for deep learning when the data
            is unstructured (text, images), the dataset is very large ({">"} 100K), or I need representation
            learning. For sustainability data — supplier tables, emissions inventories, regulatory filings —
            classical ML is almost always the right first choice.
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
                q: "What is the difference between bagging and boosting?",
                a: "Bagging (Random Forests) trains many models in parallel on bootstrap samples and averages predictions — reduces variance while keeping bias the same. Boosting trains sequentially where each model corrects the errors of the previous one — reduces bias while keeping variance roughly the same. Bagging is more robust to noisy data. Boosting achieves lower error on clean data but can overfit noise.",
              },
              {
                q: "When would you use L1 vs L2 regularization?",
                a: "L1 (Lasso) when you believe most features are irrelevant and want automatic feature selection — produces sparse solutions with exact zeros. L2 (Ridge) when you believe most features contribute a little and want to keep all of them with smaller weights. Elastic Net when you have correlated features — L1 tends to arbitrarily pick one from a correlated group while Elastic Net selects the group together.",
              },
              {
                q: "How does XGBoost handle missing values?",
                a: "During training, for each split XGBoost learns the optimal default direction for missing values — it tries sending missing values left and right and picks whichever direction reduces loss more. This learned default is stored in the tree. At inference time, missing values are automatically routed down the learned direction. No imputation needed.",
              },
              {
                q: "Why does Random Forest reduce variance but not bias?",
                a: "Variance of an average of N uncorrelated variables = σ²/N. By training on different bootstrap samples with random feature subsets, the trees are decorrelated — their errors don't all go in the same direction. Averaging N decorrelated trees reduces variance by approximately 1/N. Bias doesn't change because each individual tree is just as biased as before — averaging doesn't make each tree less biased.",
              },
              {
                q: "What is the kernel trick in SVMs?",
                a: "The SVM optimization only needs dot products between training points, never the raw feature vectors. The kernel trick replaces the dot product xᵢᵀxⱼ with a kernel function K(xᵢ,xⱼ) that computes the dot product in a higher-dimensional space without actually mapping there. The RBF kernel corresponds to an infinite-dimensional space. This enables non-linear decision boundaries at the computational cost of the original space.",
              },
              {
                q: "You have a dataset with 5,000 rows and 200 features. Which model do you start with?",
                a: "I'd start with a Random Forest or XGBoost baseline. 5K rows is small enough that deep learning would likely overfit. I'd use 5-fold stratified cross-validation to evaluate, check OOB error as a sanity check, and use permutation importance to identify the most predictive features. If interpretability matters, I'd also fit a logistic regression with L2 regularization for comparison.",
              },
              {
                q: "Can you fit non-linear data with linear regression?",
                a: "Yes — by adding non-linear transformations of the features as new inputs. The model remains linear in its weights so all the math still works, but it can now fit curves. Common approaches: polynomial features (add x², x³), log transforms for exponential relationships, and explicit interaction terms. The risk is overfitting with high-degree polynomials and feature explosion with many inputs — degree-2 on 100 features produces 5,050 columns. This is why tree-based models are usually preferred for complex non-linear relationships: they learn interactions automatically without manual feature engineering.",
              },
              {
                q: "Using L1 or L2 regularization in regression — does it give you the true minimizer? Can ridge achieve a lower loss than OLS?",
                a: "No on both counts. Linear regression minimizes L(w) = ||y - Xw||² with minimizer w* = (XᵀX)⁻¹Xᵀy. Ridge minimizes a different objective entirely: L_ridge(w) = ||y - Xw||² + λ||w||², whose minimizer is w_ridge = (XᵀX + λI)⁻¹Xᵀy. Adding λ||w||² reshapes the loss landscape — it pulls the solution toward the origin. w_ridge is a biased estimate of w*; regularization deliberately trades the true minimizer for a smaller-norm solution that generalises better. For L1 the constraint region is a diamond and the solution hits a corner, producing sparse weights — also not the true minimizer. On the second question: if the base problem is well-posed with a unique minimizer w*, then by definition L(w*) ≤ L(w) for all w. w_ridge is just another point in ℝᵈ, so L(w*) ≤ L(w_ridge) always. Ridge cannot achieve lower unregularized training loss. What it does achieve is a lower value of its own regularized objective — L_ridge(w_ridge) ≤ L_ridge(w*) = L(w*) + λ||w*||². In concrete terms: if OLS loss = 100 and ||w*||² = 25 with λ = 2, then L_ridge(w*) = 150. Ridge finds w_ridge with say unregularized loss 110 but norm 8, giving L_ridge = 126 — lower regularized loss, higher plain loss. The one edge case: as λ → 0 the constraint becomes non-binding, w_ridge → w*, and both losses converge.",
              },
              {
                q: "What happens when you fit logistic regression to perfectly linearly separable data? What about SVM?",
                a: "The two models behave in completely opposite ways. Logistic regression fails — the weights diverge to infinity. Because the data is separable, every training point is correctly classified for any sufficiently large w. The log loss for a correct prediction is -log(ŷ), which is minimized by pushing ŷ → 1, which requires wᵀx → +∞, which requires ||w|| → ∞. The optimizer keeps scaling up weights indefinitely: the decision boundary direction stabilises but the magnitude never stops growing, gradient descent never converges, and sklearn emits a 'max_iter reached' warning. Probabilities collapse to exactly 0 or 1 with no meaningful confidence. Fix: add L2 regularization — the penalty λ||w||² prevents weights growing to infinity and forces convergence to a finite solution. SVM was literally designed for this case. It finds the unique maximum margin hyperplane — the one decision boundary that is as far as possible from all training points. While logistic regression weights blow up, SVM minimizes ||w|| subject to correct classification, so its weights converge to the smallest possible value. The solution is finite, unique, and geometrically optimal. Only the support vectors (points on the margin) determine it. An interesting theoretical result: as L2-regularized logistic regression's regularization goes to zero (C → ∞ in sklearn), its solution converges to the SVM solution — they are the same classifier in the separable limit.",
              },
              {
                q: "Does boosting work with linear models?",
                a: "Technically yes, but the result collapses into a single linear model — you gain nothing over just training one linear model better. Boosting builds an additive ensemble F(x) = Σᵢ αᵢ·hᵢ(x). If each weak learner hᵢ is linear — hᵢ(x) = wᵢᵀx + bᵢ — then F(x) = (Σᵢ αᵢwᵢ)ᵀx + Σᵢ αᵢbᵢ = Wᵀx + B. The sum of linear models is just another linear model with combined weights. You're in the same function class you started in — boosting adds no expressive power. This is why boosting is always paired with weak learners that are non-linear, typically shallow decision trees (stumps). Trees can capture interactions and non-linearities that linear models can't, so each boosting round genuinely reduces a residual the previous model couldn't fit. The whole point of boosting is to escape the limitations of a single weak learner — and you can only do that if the weak learner has some non-linearity to contribute.",
              },
              {
                q: "How do you make the output of binary logistic regression generative, or better reflect confidence?",
                a: "Logistic regression is discriminative — it models P(y|x) directly and outputs a single score. It can't generate new samples or quantify uncertainty in its weights. Three approaches address this. (1) Make it generative: add a model of P(x|y) and recover P(y|x) via Bayes' theorem — P(y=1|x) = P(x|y=1)·P(y=1) / P(x), where P(x) = P(x|y=1)·P(y=1) + P(x|y=0)·P(y=0) is the normalising constant that drops out when computing class ratios. If you assume Gaussian features per class you get GDA — each class gets its own Gaussian N(μₖ, Σₖ) with a quadratic boundary. LDA is the special case where all classes share one covariance Σ, which makes the quadratic terms cancel and gives a linear boundary identical to logistic regression. LDA/GDA can generate new samples by drawing from N(μₖ, Σₖ). (2) Better confidence via Bayesian logistic regression: treat weights as a distribution rather than a point estimate. You get a mean prediction and a std per input — two inputs can both output 0.85 but one has std=0.02 (confident) and the other std=0.20 (uncertain). (3) Conformal prediction: output a set of classes guaranteed to contain the true label with user-defined probability (e.g. 90% coverage). High-confidence inputs get a singleton set {class 1}; uncertain inputs get {class 0, class 1}.",
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
                title: "Algorithm One-Liners",
                items: [
                  "Logistic Regression → linear classifier, sigmoid output, convex loss, use as baseline",
                  "Decision Tree → recursive binary splits on Gini/entropy, interpretable but high variance",
                  "Random Forest → N trees on bootstrap + random features, variance ↓ by ~1/N",
                  "XGBoost → sequential trees fitting residuals, L1/L2 built in, best for tabular",
                  "LightGBM → leaf-wise boosting, histogram splits, 10–100× faster on large data",
                  "SVM → maximum margin hyperplane, kernel trick, best for small high-D data",
                ],
              },
              {
                title: "Regularization",
                items: [
                  "L1 (Lasso) → sparse weights, feature selection, diamond constraint",
                  "L2 (Ridge) → small weights, keeps all features, sphere constraint",
                  "Elastic Net → L1 + L2, best for correlated features",
                  "λ tuning → always use cross-validation",
                  "sklearn: C = 1/λ → small C = strong regularization",
                ],
              },
              {
                title: "Bias-Variance Diagnostics",
                items: [
                  "High train + high test error → High Bias → increase complexity",
                  "Low train + high test error → High Variance → regularize, more data",
                  "Random Forest → fixes variance by averaging",
                  "Boosting → fixes bias by correcting errors",
                  "Regularization → always reduces variance, may increase bias",
                ],
              },
              {
                title: "Feature Scaling Rules",
                items: [
                  "SVM, Logistic Regression, KNN → ALWAYS scale (StandardScaler)",
                  "Decision Trees, Random Forest, XGBoost → scaling NOT needed",
                  "Skewed distributions → log transform first",
                  "Outliers → use RobustScaler not StandardScaler",
                ],
              },
              {
                title: "When Classical Beats DL",
                items: [
                  "Tabular data → XGBoost (always try first)",
                  "Small dataset < 10K → Logistic Regression or RF",
                  "Interpretability required → Logistic Regression + SHAP",
                  "Causal inference → linear models only",
                  "Limited compute → tree models on CPU",
                ],
              },
              {
                title: "Cross-Validation Rules",
                items: [
                  "Always stratify for classification",
                  "K=5 or K=10 are standard — K=10 for small data",
                  "Nested CV when tuning params to avoid optimistic bias",
                  "TimeSeriesSplit for temporal data — never standard K-Fold",
                  "OOB score in Random Forest = free K-Fold equivalent",
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
