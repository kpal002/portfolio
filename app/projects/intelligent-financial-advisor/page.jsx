import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

export const metadata = {
  title: "Intelligent Financial Advisor — Kuntal Pal",
  description:
    "A deep dive into Finley — multi-agent LangGraph pipeline, ARIMA forecasting, Markowitz optimisation, VaR risk metrics, and a FastAPI chat UI.",
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
    <ul className="space-y-2 mt-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink/90">
          <span className="mt-0.5 shrink-0 font-bold text-accent">→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
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

function AgentNode({ step, title, body }) {
  return (
    <div className="border-2 border-ink bg-bg p-4 shadow-brutal-sm">
      <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">{step}</p>
      <p className="text-sm font-bold mb-2">{title}</p>
      <p className="text-[11px] leading-relaxed text-ink/80">{body}</p>
    </div>
  );
}

function PipelineArrow() {
  return (
    <div className="hidden md:flex items-center justify-center shrink-0 w-8">
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
        <path d="M0 8 H22" stroke="#1a1a1a" strokeWidth="2"/>
        <path d="M16 2 L26 8 L16 14" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
      </svg>
    </div>
  );
}

function PipelineStep({ step, name, icon, accent = false }) {
  return (
    <div className={`flex flex-col items-center gap-1 border-2 border-ink px-3 py-3 text-center shadow-brutal-sm min-w-[100px] ${accent ? "bg-accent" : "bg-bg"}`}>
      <span className="text-xl">{icon}</span>
      <p className="text-[9px] font-bold uppercase tracking-widest text-muted">{step}</p>
      <p className="text-[11px] font-bold leading-tight">{name}</p>
    </div>
  );
}

function AgentDeepDive({ step, name, icon, badge, inputs, tools, outputs, design }) {
  return (
    <div className="border-2 border-ink bg-bg">
      {/* Header */}
      <div className="flex items-center gap-4 border-b-2 border-ink bg-ink px-5 py-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Node {step}</p>
          <p className="text-base font-bold text-bg">{name}</p>
        </div>
        <span className="ml-auto border border-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent">{badge}</span>
      </div>
      {/* Body */}
      <div className="grid gap-0 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-ink">
        <div className="p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">Inputs</p>
          <ul className="space-y-1.5">
            {inputs.map((i, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink/80">
                <span className="text-muted shrink-0">▸</span>{i}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">Tools & Algorithms</p>
          <ul className="space-y-1.5">
            {tools.map((t, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink/80">
                <span className="text-accent shrink-0 font-bold">→</span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">Outputs</p>
          <ul className="space-y-1.5">
            {outputs.map((o, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink/80">
                <span className="text-accent shrink-0 font-bold">✓</span>{o}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Design note */}
      <div className="border-t-2 border-ink bg-surface px-5 py-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Design Note</p>
        <p className="text-[12px] leading-relaxed text-ink/80">{design}</p>
      </div>
    </div>
  );
}

export default function FinancialAdvisorPage() {
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

      <main className="mx-auto max-w-4xl px-6 py-16 space-y-8">

        {/* ── 1. Hero ── */}
        <Card>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">
            <span className="text-accent">{">"} </span>personal project · fintech
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            Intelligent Financial Advisor — Finley
          </h1>
          <p className="mb-6 text-base leading-relaxed text-ink/80">
            A production-grade multi-agent financial advisor that runs a full quantitative
            pipeline — ARIMA forecasting, Markowitz optimisation, VaR risk metrics, and
            Isolation Forest anomaly detection — then synthesises the results into a
            structured advisory report via Claude.
          </p>
          <ul className="mb-6 flex flex-wrap gap-2">
            {["LangGraph", "Claude API", "ARIMA", "Markowitz", "Isolation Forest", "FastAPI", "Docker", "Python"].map((t) => (
              <li key={t} className="border-2 border-ink bg-bg px-2 py-0.5 text-[11px] font-bold">
                {t}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/kpal002/intelligent-financial-advisor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-4 py-2 text-sm font-bold text-bg shadow-brutal-sm transition hover:text-accent"
            >
              <Github size={14} />
              View on GitHub
            </a>
            <a
              href="https://huggingface.co/spaces/kpal002/intelligent-financial-advisor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink bg-accent px-4 py-2 text-sm font-bold text-ink shadow-brutal-sm transition hover:bg-ink hover:text-accent"
            >
              <ArrowUpRight size={14} />
              Live Demo
            </a>
          </div>
        </Card>

        {/* ── 2. Live Demo embed ── */}
        <Card>
          <SectionLabel>Live Demo</SectionLabel>
          <h2 className="mb-2 text-xl font-bold">Try It</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-5">
            Enter a portfolio (e.g. <code className="bg-ink text-accent px-1">AAPL, MSFT, JPM</code>),
            optional weights, and ask Finley for an analysis. The first message triggers the
            full ML pipeline; follow-ups are answered directly from the prior context.
          </p>
          <div className="border-2 border-ink overflow-auto" style={{ height: "900px" }}>
            <iframe
              src="https://kpal002-intelligent-financial-advisor.hf.space"
              title="Finley Financial Advisor live demo"
              width="100%"
              height="100%"
              scrolling="yes"
              style={{ border: "none", display: "block", minHeight: "900px" }}
            />
          </div>
          <p className="mt-3 text-[11px] text-muted">
            <span className="text-accent font-bold">↗ </span>
            Open in full screen at{" "}
            <a
              href="https://huggingface.co/spaces/kpal002/intelligent-financial-advisor"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent"
            >
              huggingface.co/spaces/kpal002/intelligent-financial-advisor
            </a>
          </p>
        </Card>

        {/* ── 3. The Problem ── */}
        <Card>
          <SectionLabel>Background</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">The Problem</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            Institutional trading desks run quantitative analysis as routine — ARIMA-based
            trend forecasting, mean-variance optimisation, Value-at-Risk calculations, and
            anomaly detection on return distributions. Retail investors don't have access to
            any of it. They get a number (their portfolio return) and a guess.
          </p>
          <div className="my-6 border-l-4 border-accent pl-5">
            <p className="text-sm font-bold leading-relaxed text-ink">
              The goal: make that institutional analysis accessible through a conversational
              interface that explains every number it produces, in plain English, referenced
              back to the user's actual holdings.
            </p>
          </div>
          <p className="text-sm leading-relaxed text-ink/90">
            The harder design challenge is making this <em>interactive</em> — not just a one-shot
            report, but a system that can answer drill-down questions about its own output
            without re-running the expensive pipeline on every turn.
          </p>
        </Card>

        {/* ── 4. Pipeline Architecture ── */}
        <Card>
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">The 5-Node LangGraph Pipeline</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-8">
            The first user message triggers a LangGraph state machine with five specialist
            nodes arranged in a sequential graph. Each node reads the accumulated{" "}
            <code className="bg-ink text-accent px-1">AdvisorState</code> TypedDict, performs
            its computation, and writes its outputs back — creating a typed, inspectable
            data contract between every stage of the pipeline.
          </p>

          {/* Visual pipeline diagram */}
          <div className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-4">Pipeline Flow</p>
            <div className="overflow-x-auto pb-2">
              <div className="flex items-center gap-0 min-w-max">
                {/* START */}
                <div className="flex flex-col items-center gap-1 border-2 border-ink bg-ink px-3 py-2 text-center min-w-[72px]">
                  <p className="text-[10px] font-bold text-accent">START</p>
                  <p className="text-[10px] text-bg/70">user query</p>
                </div>
                <PipelineArrow />
                <PipelineStep step="01" name="market_research" icon="📡" />
                <PipelineArrow />
                <PipelineStep step="02" name="risk_analysis" icon="📊" />
                <PipelineArrow />
                <PipelineStep step="03" name="recommendation" icon="🔍" />
                <PipelineArrow />
                <PipelineStep step="04" name="synthesize" icon="🧠" accent />
                <PipelineArrow />
                <PipelineStep step="05" name="validate" icon="✅" />
                <PipelineArrow />
                {/* END */}
                <div className="flex flex-col items-center gap-1 border-2 border-ink bg-ink px-3 py-2 text-center min-w-[72px]">
                  <p className="text-[10px] font-bold text-accent">END</p>
                  <p className="text-[10px] text-bg/70">report</p>
                </div>
              </div>
              {/* Re-route annotation */}
              <div className="mt-3 flex items-center gap-2 ml-4">
                <div className="h-px w-16 bg-ink/30 border-t-2 border-dashed border-ink/40" />
                <p className="text-[10px] text-muted italic">
                  validate re-routes to synthesize on confidence &lt; threshold
                </p>
              </div>
            </div>
          </div>

          {/* State object */}
          <CodeBlock
            label="langgraph_pipeline.py — typed state contract"
            code={`class AdvisorState(TypedDict):
    user_query: str
    portfolio_symbols: list[str]
    current_allocation: dict[str, float]
    # ↓ populated progressively as nodes execute
    market_data: dict          # → market_research
    risk_metrics: dict         # → risk_analysis
    recommendations: dict      # → recommendation
    advisory_report: str       # → synthesize
    validation_result: dict    # → validate`}
          />

          <p className="text-sm leading-relaxed text-ink/90 mt-6 mb-10">
            The graph is compiled once at startup with{" "}
            <code className="bg-ink text-accent px-1">workflow.compile()</code> and reused
            across all requests — keeping cold-start overhead to a single import cycle. Each
            node function is a pure Python callable that accepts and returns{" "}
            <code className="bg-ink text-accent px-1">AdvisorState</code>; LangGraph handles
            the execution, error propagation, and conditional edge routing.
          </p>

          {/* Per-agent deep dives */}
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-4">Node Deep Dives</p>
          <div className="space-y-4">
            <AgentDeepDive
              step="01"
              name="market_research"
              icon="📡"
              badge="Data & Forecasting"
              inputs={[
                "portfolio_symbols — list of ticker strings",
                "current_allocation — user-supplied weight map",
                "user_query — raw question string",
              ]}
              tools={[
                "yfinance — 1-year daily OHLCV price history per symbol",
                "statsmodels ARIMA — AIC-minimising order selection (p,d,q)",
                "30-day point forecast + 95% confidence interval",
                "RSI (14-day Wilder) — trend classification: bullish / bearish / range-bound",
                "Trend slope from linear regression on log-returns",
              ]}
              outputs={[
                "market_data dict keyed by symbol",
                "forecast_30d — expected price in 30 days",
                "trend — bullish | bearish | neutral",
                "rsi — current RSI value",
                "price_history — DataFrame passed downstream",
              ]}
              design="ARIMA order selection runs per-symbol rather than using a fixed (1,1,1) model. AIC minimisation picks the best-fitting model for each asset's autocorrelation structure. This adds ~2s per symbol but produces confidence intervals that actually reflect the asset's volatility rather than a generic band."
            />
            <AgentDeepDive
              step="02"
              name="risk_analysis"
              icon="📊"
              badge="Portfolio Risk"
              inputs={[
                "price_history DataFrames from market_research",
                "current_allocation — existing weights",
                "portfolio_symbols — for joint covariance estimation",
              ]}
              tools={[
                "PortfolioRiskAnalyzer — custom class wrapping scipy + numpy",
                "Historical VaR at 95th percentile on daily log-returns",
                "CVaR — mean of losses exceeding the VaR threshold (tail risk)",
                "Sharpe ratio — excess return / total volatility (annualised)",
                "Sortino ratio — excess return / downside deviation only",
                "scipy.optimize — constrained max-Sharpe on the efficient frontier",
                "Max drawdown — peak-to-trough on the equity curve",
              ]}
              outputs={[
                "risk_metrics — full metric dict per portfolio",
                "recommended_allocation — Markowitz-optimal weight vector",
                "portfolio_risk_level — LOW | MEDIUM | HIGH | VERY HIGH",
                "expected_return and volatility (annualised)",
              ]}
              design="Markowitz optimisation is solved as a minimisation of negative Sharpe (rather than maximising Sharpe directly) so scipy's constrained minimiser can be used without a separate maximiser. Weights are constrained to [0, 1] with sum=1 to prevent short positions, which keeps the output valid for retail investors who can't short."
            />
            <AgentDeepDive
              step="03"
              name="recommendation"
              icon="🔍"
              badge="Signal Generation"
              inputs={[
                "market_data — forecasts, RSI, trend slopes",
                "risk_metrics — Sharpe, VaR, portfolio risk level",
                "price_history — rolling return matrices per symbol",
              ]}
              tools={[
                "scikit-learn IsolationForest — anomaly detection on 90-day normalised returns",
                "Contamination parameter tuned to flag ~10% of observations",
                "Composite scoring: ARIMA trend + RSI + anomaly score → signal",
                "Confidence calibration — score mapped to [0, 1] via sigmoid",
              ]}
              outputs={[
                "recommendations dict per symbol",
                "action — BUY | HOLD | SELL",
                "confidence — float [0, 1]",
                "reasoning — short string explaining the signal",
              ]}
              design="Isolation Forest detects anomalous return behaviour without predefined thresholds — a stock behaving unusually relative to its own 90-day history gets flagged regardless of whether it's technically overbought or oversold. This catches momentum breaks and volatility regime shifts that RSI-only systems miss. The final signal is a weighted composite, not a single-model output."
            />
            <AgentDeepDive
              step="04"
              name="synthesize"
              icon="🧠"
              badge="Claude LLM"
              inputs={[
                "market_data — all ARIMA forecasts, RSI values, trend labels",
                "risk_metrics — VaR, CVaR, Sharpe, Sortino, max drawdown, allocation",
                "recommendations — BUY/HOLD/SELL signals with confidence",
                "user_query — original question to answer directly",
              ]}
              tools={[
                "Claude claude-haiku-4-5 via Anthropic SDK",
                "Structured prompt with quantitative data serialised as JSON",
                "Embedded FINLEY_METRICS HTML comment for frontend dashboard extraction",
                "Instruction to produce markdown tables, plain-English explanations, actionable steps",
              ]}
              outputs={[
                "advisory_report — full markdown string",
                "<!-- FINLEY_METRICS {...} --> comment block at report head",
                "Structured sections: Executive Summary, Asset Analysis, Risk, Allocation, Outlook",
              ]}
              design="Claude's prompt receives all quantitative outputs as a structured JSON block — not as prose. This forces the model to reason from numbers rather than pattern-matching to generic financial advice. The FINLEY_METRICS comment block is a machine-readable channel embedded in the text response: the frontend strips it before rendering, parses the JSON, and builds the visual dashboard above the markdown."
            />
            <AgentDeepDive
              step="05"
              name="validate"
              icon="✅"
              badge="Quality Gate"
              inputs={[
                "advisory_report — synthesize node output",
                "recommendations — expected signals to cross-check",
                "risk_metrics — expected metric ranges",
              ]}
              tools={[
                "Claude claude-haiku-4-5 — lightweight validation call",
                "Cross-check: report mentions all portfolio symbols",
                "Cross-check: BUY/HOLD/SELL signals match recommendations dict",
                "Confidence score extraction from validation response",
                "Conditional edge: re-route to synthesize if score < 0.7",
              ]}
              outputs={[
                "validation_result — {confidence: float, issues: list[str]}",
                "Graph terminates at END if confidence ≥ 0.7",
                "Graph re-routes to synthesize node if confidence < 0.7",
              ]}
              design="The validation node is a lightweight second Claude call — it reads the report and the raw quantitative outputs and checks for internal consistency. The conditional re-route is a core LangGraph feature: add_conditional_edges() lets the graph branch dynamically based on node output without any ad-hoc if-statements in the orchestration layer. In practice the re-route fires rarely, but it catches hallucinated tickers or reversed signals."
            />
          </div>
        </Card>

        {/* ── 5. ML Pipeline ── */}
        <Card>
          <SectionLabel>Quantitative Methods</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">What the Numbers Mean</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-6">
            Every metric in the report is computed from real price data on each request.
            No cached or synthetic figures.
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold mb-2">ARIMA Forecasting</p>
              <p className="text-sm leading-relaxed text-ink/80">
                Auto-fits an ARIMA(p,d,q) model per symbol using AIC-minimising order selection.
                Produces a 30-day point forecast plus upper and lower 95% confidence bands.
                The RSI (14-day) is overlaid to classify the current trend as bullish, bearish,
                or range-bound.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold mb-2">Risk Metrics (VaR / CVaR / Sharpe / Sortino)</p>
              <p className="text-sm leading-relaxed text-ink/80">
                Historical VaR at the 95th percentile gives the worst expected daily loss with
                5% probability. CVaR (Conditional VaR) averages the losses beyond that threshold —
                it captures tail risk that VaR misses. Sharpe ratio measures risk-adjusted return
                against the risk-free rate; Sortino uses only downside deviation, penalising
                volatility that hurts the investor rather than volatility in general.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold mb-2">Markowitz Optimisation</p>
              <p className="text-sm leading-relaxed text-ink/80">
                Solves for the max-Sharpe portfolio on the efficient frontier using scipy's
                constrained minimiser. The output is an optimal weight vector that the report
                compares against the user's current allocation — surfacing over- and
                under-weight positions.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold mb-2">Isolation Forest Anomaly Detection</p>
              <p className="text-sm leading-relaxed text-ink/80">
                Fits an Isolation Forest on the rolling 90-day normalised return matrix.
                Anomaly scores drive the BUY / HOLD / SELL signals — symbols with highly
                anomalous recent returns (relative to their own history) get flagged for
                attention regardless of their ARIMA trend.
              </p>
            </div>
          </div>
        </Card>

        {/* ── 6. Multi-turn Memory ── */}
        <Card>
          <SectionLabel>Conversation Design</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Multi-Turn Memory Without Re-Running the Pipeline</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-6">
            Running the full ML pipeline on every message would be slow and expensive.
            The routing strategy keeps follow-up responses fast while preserving full
            conversational depth.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border-2 border-ink p-5 bg-bg">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">
                First message — full pipeline
              </p>
              <BulletList items={[
                "History array is empty → trigger LangGraph graph",
                "All 5 nodes run: market data → risk → signals → Claude synthesis → validation",
                "Full advisory report returned as the first assistant turn",
                "Report content becomes the context for all future follow-ups",
              ]} />
            </div>
            <div className="border-2 border-accent p-5 bg-bg shadow-brutal-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">
                Follow-up messages — Claude direct
              </p>
              <BulletList items={[
                "History array is non-empty → skip LangGraph entirely",
                "Full conversation history reconstructed as LangChain messages",
                "Claude (claude-haiku-4-5) answers with the prior report as context",
                "Sub-second response time — no data fetching, no ML inference",
              ]} />
            </div>
          </div>
          <CodeBlock
            label="main.py — routing logic"
            code={`@app.post("/chat")
async def chat(req: ChatRequest):
    symbols, allocation = _parse_portfolio(req.symbols, req.weights)

    # Follow-up: history present → Claude answers directly
    if req.history:
        return ChatResponse(
            response=_followup_response(req, symbols),
            live=True,
        )

    # First message: run the full LangGraph pipeline
    result = get_advisor().invoke(
        user_query=req.message,
        portfolio_symbols=symbols,
        current_allocation=allocation,
    )`}
          />
        </Card>

        {/* ── 6. Design Decisions ── */}
        <Card>
          <SectionLabel>Design Decisions</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Why These Choices?</h2>
          <div className="space-y-5">
            {[
              {
                q: "Why LangGraph instead of a simpler sequential script?",
                a: "LangGraph gives the pipeline a typed state object that flows between nodes, built-in graph compilation, and a clear extension point for adding parallel branches or conditional re-routing (the validation node already re-routes to synthesize on low confidence). A raw sequential script would need to reinvent that plumbing.",
              },
              {
                q: "Why route follow-ups to Claude directly instead of re-running the pipeline?",
                a: "The full pipeline takes 15–30 seconds depending on the number of symbols — acceptable for the initial report, not for a follow-up question like 'what does my Sharpe ratio mean?' Claude already has the report in its context window and can answer instantly. The routing decision (empty history vs. non-empty history) is a single if-statement in the backend.",
              },
              {
                q: "Why Isolation Forest for buy/hold/sell signals?",
                a: "Most retail-facing tools use rule-based signals (RSI thresholds, moving average crossovers). Isolation Forest detects anomalies without requiring predefined thresholds — a symbol that's behaving unusually relative to its own recent history gets flagged regardless of whether it's overbought or oversold. That's a more useful signal for portfolios with diverse assets.",
              },
              {
                q: "Why abandon Gradio in favour of vanilla HTML?",
                a: "Gradio's Svelte-scoped styles make deep UI customisation unreliable — CSS overrides that work in isolation get silently dropped by Svelte's component scoping. After exhausting all theme and CSS approaches, a self-contained HTML file gave deterministic styling with zero framework overhead.",
              },
              {
                q: "Why no ANTHROPIC_API_KEY in the demo mode path?",
                a: "HF Spaces can run without secrets set. The demo mode returns a realistic sample report so the UI, layout, and interaction flow can be evaluated even without a valid API key — useful for showing the project to people who can't set a secret.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-ink pl-5">
                <p className="text-sm font-bold">{item.q}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">{item.a}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* ── 10. Future Plans ── */}
        <Card>
          <SectionLabel>Future Plans</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Where This Is Going</h2>
          <div className="space-y-3">
            {[
              { tag: "Next", title: "Streaming Responses", body: "Stream Claude's synthesis token-by-token via server-sent events so the report appears progressively rather than after a full pipeline run." },
              { tag: "Next", title: "Sector & Macro Context", body: "Add a macro_context node that fetches Fed rate decisions, sector performance, and earnings calendar as additional signals for the synthesize node." },
              { tag: "Later", title: "Persistent Sessions", body: "Store conversation history server-side (Redis or Postgres) so users can return to a previous analysis session from any device." },
              { tag: "Later", title: "Options & Derivatives", body: "Extend the market_research node to include options chain data — implied volatility surface, put/call ratios — for portfolios that use derivatives for hedging." },
              { tag: "Later", title: "Backtesting Node", body: "Add a backtesting node that runs the Markowitz-optimal allocation against historical data and reports actual vs. expected Sharpe over rolling windows." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 border-2 border-ink bg-bg p-4">
                <div className={`shrink-0 border-2 border-ink px-2 py-1 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ${item.tag === "Next" ? "bg-accent text-ink" : "bg-bg text-muted"}`}>
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
              href="https://huggingface.co/spaces/kpal002/intelligent-financial-advisor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-ink bg-accent px-4 py-2 text-sm font-bold text-ink shadow-brutal-sm transition hover:bg-ink hover:text-accent"
            >
              <ArrowUpRight size={14} />
              Live Demo
            </a>
            <a
              href="https://github.com/kpal002/intelligent-financial-advisor"
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
