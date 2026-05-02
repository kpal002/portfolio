import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github } from "lucide-react";

export const metadata = {
  title: "Agentic Forecaster for sktime — Kuntal Pal",
  description:
    "A deep dive into AgenticForecaster — architecture, ReAct loop, tool surface, and deployment modes.",
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
      <div className={`relative ${maxWidth ? "mx-auto" : "w-full"}`} style={maxWidth ? { maxWidth } : {}}>
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

function ToolCard({ name, description, detail }) {
  return (
    <div className="border-2 border-ink bg-bg p-4 shadow-brutal-sm">
      <div className="mb-2 flex items-center gap-2">
        <span className="border-2 border-ink bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ink">
          tool
        </span>
        <code className="text-sm font-bold text-ink">{name}</code>
      </div>
      <p className="text-sm leading-relaxed text-ink/80">{description}</p>
      {detail && (
        <p className="mt-2 text-[11px] leading-relaxed text-muted">{detail}</p>
      )}
    </div>
  );
}

export default function SkTimeAgenticPage() {
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
            <span className="text-accent">{">"} </span>open source · sktime ecosystem
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            Agentic Forecaster for sktime
          </h1>
          <p className="mb-6 text-base leading-relaxed text-ink/80">
            A drop-in sktime forecaster that uses an LLM-powered ReAct agent loop to
            automatically select and configure time series pipelines — from a plain
            English description of your data.
          </p>
          <ul className="mb-6 flex flex-wrap gap-2">
            {["Python", "sktime", "Claude API", "OpenAI", "Gemini", "FastMCP", "ReAct"].map((t) => (
              <li key={t} className="border-2 border-ink bg-bg px-2 py-0.5 text-[11px] font-bold">
                {t}
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/kpal002/sktime-agentic-forecaster"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-4 py-2 text-sm font-bold text-bg shadow-brutal-sm transition hover:text-accent"
          >
            <Github size={14} />
            View on GitHub
          </a>
        </Card>

        {/* ── 2. Background ── */}
        <Card>
          <SectionLabel>Background</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">What is sktime?</h2>
          <p className="text-sm leading-relaxed text-ink/90">
            <strong>sktime</strong> is a Python library for time series machine learning —
            think scikit-learn, but for sequential data. It provides a unified interface
            across forecasting, classification, regression, and transformation tasks. Every
            model follows the same <code className="bg-ink text-accent px-1">fit()</code> /
            <code className="bg-ink text-accent px-1 ml-1">predict()</code> contract,
            making models composable in pipelines and ensembles.
          </p>
          <div className="my-6 border-l-4 border-accent pl-5">
            <p className="text-sm font-bold leading-relaxed text-ink">
              The challenge: sktime has dozens of forecasters — ARIMA, ExponentialSmoothing,
              Prophet, Theta, TBATS, and more. Choosing the right one for your data requires
              expertise in time series analysis. Most practitioners just pick one arbitrarily
              or run a slow grid search.
            </p>
          </div>
          <p className="text-sm leading-relaxed text-ink/90">
            This project asks: <em>what if an LLM could reason about your data and pick the
            right model for you?</em>
          </p>
        </Card>

        {/* ── 3. The Big Picture ── */}
        <Card>
          <SectionLabel>Architecture Overview</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">The Big Picture</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-2">
            From the outside, <code className="bg-ink text-accent px-1">AgenticForecaster</code> looks
            like any sktime model. You call <code className="bg-ink text-accent px-1">.fit()</code> with
            your time series and a natural language description of the data. Under the hood, an LLM
            agent takes over — reasoning through available models, fitting candidates, scoring them,
            and committing to the best one before returning control.
          </p>
          <Diagram
            src="/projects/sktime/01_big_picture.png"
            alt="Big picture architecture of AgenticForecaster"
            caption="Figure 1 — The AgenticForecaster sits inside the standard sktime interface. Users interact with it like any other model; the agent runs internally during .fit()."
          />
          <p className="text-sm leading-relaxed text-ink/90">
            The key design constraint: the LLM never executes arbitrary code. It can only call
            a predefined set of six tools. This makes the system safe to deploy in a library
            context and keeps every decision auditable.
          </p>
        </Card>

        {/* ── 4. Core Design Principle ── */}
        <Card>
          <SectionLabel>Design Principle</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Constrained Tools, Not Free-Form Code</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-4">
            Most "LLM picks a model" demos work like this: prompt the model, get back a code
            snippet, run it with <code className="bg-ink text-accent px-1">exec()</code>. That
            isn't shippable in a library — you can't audit it, test it, or guarantee it won't
            import <code className="bg-ink text-accent px-1">os</code> and do something
            unexpected.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border-2 border-ink p-4 bg-bg">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">
                ✗ Naive approach
              </p>
              <BulletList items={[
                "LLM returns free-form Python code",
                "Code is exec()'d at runtime",
                "Unpredictable — can import anything",
                "Untestable — can't mock deterministically",
                "Not composable with sktime pipelines",
              ]} />
            </div>
            <div className="border-2 border-accent border-2 p-4 bg-bg shadow-brutal-sm" style={{borderColor: '#a3e635'}}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">
                ✓ This approach
              </p>
              <BulletList items={[
                "LLM calls only 6 predefined tools",
                "Tools are auditable Python functions",
                "Deterministic — mockable in CI",
                "Every decision is logged in a transcript",
                "Drop-in compatible with sktime",
              ]} />
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink/90">
            This is the same principle behind function calling in modern LLM APIs — instead of
            letting the model generate raw code, you give it a structured action space and let
            it reason within those constraints.
          </p>
        </Card>

        {/* ── 5. The Tool Surface ── */}
        <Card>
          <SectionLabel>Tool Surface</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">The Six Tools</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-6">
            The agent has exactly six tools available during <code className="bg-ink text-accent px-1">.fit()</code>.
            Each tool maps to a concrete action: inspect the data, enumerate models, fit a candidate,
            score it, or commit. Nothing outside this surface can be called.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <ToolCard
              name="summarize_data"
              description="Returns a fingerprint of the time series: length, min/max/mean/std, missing values, detected seasonal period, and trend slope."
              detail="This is always the first tool called — the agent needs to understand the data before reasoning about models."
            />
            <ToolCard
              name="list_forecasters"
              description="Returns available models from the YAML registry, with optional tag-based filtering (e.g. only seasonal models, only probabilistic)."
              detail="The registry is configurable — you can add custom models or restrict the search space."
            />
            <ToolCard
              name="inspect_forecaster"
              description="Returns tags, default parameters, and a one-line description for a named forecaster."
              detail="Used to check if a model supports the required features before committing to fitting it."
            />
            <ToolCard
              name="fit_candidate"
              description="Trains a named forecaster on the in-sample portion of the data with specified hyperparameters."
              detail="Multiple candidates can be fitted and compared before committing to one."
            />
            <ToolCard
              name="score"
              description="Evaluates a fitted candidate using MAPE, MAE, or RMSE on either a held-out window or expanding-window cross-validation."
              detail="Scoring results inform the agent's final decision — it uses these numbers to reason about which model to commit."
            />
            <ToolCard
              name="commit"
              description='Locks in the chosen forecaster and parameters. Must be called exactly once — calling it triggers a final refit on the full dataset.'
              detail="After commit, the AgenticForecaster is fully fitted and .predict() can be called."
            />
          </div>
        </Card>

        {/* ── 6. ReAct Loop ── */}
        <Card>
          <SectionLabel>Core Mechanism</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">The ReAct Loop</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-2">
            <strong>ReAct</strong> (Reasoning + Acting) is a prompting pattern where the LLM
            alternates between reasoning steps (<em>"I should check if this series has seasonality
            before picking a model"</em>) and action steps (<em>"call summarize_data"</em>). This
            back-and-forth continues until the agent calls <code className="bg-ink text-accent px-1">commit</code>.
          </p>
          <Diagram
            src="/projects/sktime/03_react_loop.png"
            alt="ReAct loop diagram showing the reasoning and acting cycle"
            caption="Figure 2 — The ReAct loop. Each iteration: the LLM reasons about what to do next, picks a tool, receives the result, and reasons again. This continues until commit() is called."
          />
          <BulletList items={[
            "The LLM maintains a message history — each tool result becomes part of the context for the next step.",
            "Max steps is configurable (default 12). If the limit approaches without a commit, the loop emits a warning and the agent is given hints about its best candidates so far.",
            "A three-tier fallback fires if steps exhaust: use highest-scored candidate → attempt quick scoring on fitted candidates → use any fitted candidate.",
            "The full transcript (every tool call and response) is stored in forecaster.transcript_ for inspection.",
          ]} />
          <div className="mt-6 border-l-4 border-accent pl-5">
            <p className="text-sm font-bold leading-relaxed">
              Why not just ask the LLM to pick in one shot?
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink/80">
              One-shot prompting can't observe actual data characteristics or fit results.
              The agent needs to see real scores on real data to make a defensible selection —
              not guess from a description alone.
            </p>
          </div>
        </Card>

        {/* ── 7. Fit Stages ── */}
        <Card>
          <SectionLabel>Execution Flow</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">What Happens During .fit()</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-2">
            Calling <code className="bg-ink text-accent px-1">.fit(y, fh=h)</code> triggers
            four distinct stages. The first three happen inside the ReAct loop; the last
            happens once the agent commits.
          </p>
          <Diagram
            src="/projects/sktime/02_fit_stages.png"
            alt="The four stages of the fit() call"
            caption="Figure 3 — Fit stages. Stage 4 (refit on full data) only runs after the agent commits — this is what makes predict() possible."
            maxWidth="480px"
          />
          <div className="grid gap-3 md:grid-cols-4 mt-4">
            {[
              { n: "01", title: "Data Summary", body: "Agent calls summarize_data to get a statistical fingerprint of the series." },
              { n: "02", title: "Enumerate", body: "Agent calls list_forecasters to see what's available, optionally filtered by tags." },
              { n: "03", title: "Evaluate", body: "Agent fits and scores multiple candidates, comparing their held-out performance." },
              { n: "04", title: "Commit + Refit", body: "Agent calls commit(), which triggers a full refit on the complete dataset." },
            ].map((s) => (
              <div key={s.n} className="border-2 border-ink bg-bg p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">{s.n}</p>
                <p className="text-sm font-bold mb-2">{s.title}</p>
                <p className="text-[11px] leading-relaxed text-ink/80">{s.body}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* ── 8. Deployment Modes ── */}
        <Card>
          <SectionLabel>Deployment</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Two Transport Modes</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-2">
            The six tools can be invoked in two ways, controlled by the{" "}
            <code className="bg-ink text-accent px-1">transport</code> parameter. This is a
            key architectural decision that makes the system work both as a Python library and
            as a backend for AI tools like Claude Desktop or Cursor.
          </p>
          <Diagram
            src="/projects/sktime/04_transports.png"
            alt="In-process vs MCP transport modes"
            caption="Figure 4 — In-process mode calls tools as direct Python functions. MCP mode exposes them over a FastMCP server — enabling external clients to use the same tool surface."
          />
          <div className="grid gap-4 md:grid-cols-2 mt-2">
            <div className="border-2 border-ink p-5 bg-bg">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">
                In-Process (default)
              </p>
              <p className="text-sm leading-relaxed text-ink/90 mb-3">
                Tools are called as regular Python functions in the same process. Zero setup,
                fast, and works anywhere Python runs.
              </p>
              <CodeBlock
                label="usage"
                code={`forecaster = AgenticForecaster(
    prompt="Monthly data, yearly seasonality",
    transport="in-process",
)`}
              />
            </div>
            <div className="border-2 border-ink p-5 bg-bg">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">
                MCP Mode
              </p>
              <p className="text-sm leading-relaxed text-ink/90 mb-3">
                Tools are exposed via a FastMCP server over stdio. Enables Claude Desktop,
                Cursor, or any MCP-compatible client to use sktime as a tool backend.
              </p>
              <CodeBlock
                label="usage"
                code={`forecaster = AgenticForecaster(
    prompt="Monthly data, yearly seasonality",
    transport="mcp",
)`}
              />
            </div>
          </div>
          <div className="mt-4 border-l-4 border-accent pl-5">
            <p className="text-sm font-bold">What is MCP?</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/80">
              The Model Context Protocol (MCP) is an open standard for connecting AI models to
              external tools. Think of it as a USB-C port for AI — any MCP-compatible client
              (Claude, Cursor, etc.) can connect to any MCP server and use its tools, without
              custom integration code.
            </p>
          </div>
        </Card>

        {/* ── 9. LLM Backends ── */}
        <Card>
          <SectionLabel>Backends</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Supported LLM Backends</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-2">
            The LLM client is swappable — the agent logic is the same regardless of which
            model powers it. This is important for cost management: you might use a cheaper
            model in development and a stronger one in production.
          </p>
          <Diagram
            src="/projects/sktime/05_backends.png"
            alt="Supported LLM backends diagram"
            caption="Figure 5 — Four backends share the same tool-calling interface. The mock backend runs deterministically without any API calls — critical for CI/CD."
          />
          <div className="grid gap-3 md:grid-cols-2 mt-2">
            {[
              { name: "anthropic", detail: 'Claude (claude-sonnet-4-5 default). Supports prompt caching — reduces input token cost by 60-80% after the first ReAct step by caching the tool schema and system prompt.' },
              { name: "openai", detail: "GPT-4o and compatible models. Uses OpenAI's function calling interface." },
              { name: "gemini", detail: "Google Gemini 2.0 Flash. Lightweight option with fast response times." },
              { name: "mock", detail: "Deterministic fake client. Runs predefined scenarios without any API calls. Used in CI and for offline demos." },
            ].map((b) => (
              <div key={b.name} className="border-2 border-ink bg-bg p-4">
                <code className="text-sm font-bold text-ink">{b.name}</code>
                <p className="mt-2 text-[12px] leading-relaxed text-ink/80">{b.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-l-4 border-accent pl-5">
            <p className="text-sm font-bold">Prompt Caching (Anthropic only)</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/80">
              The tool schema and system prompt are marked with{" "}
              <code className="bg-ink text-accent px-1">cache_control: ephemeral</code>. After the
              first ReAct step, Anthropic caches these tokens for 5 minutes — cutting the cost of
              subsequent steps by 60–80%. This matters because a full fit() run can involve
              10+ LLM calls.
            </p>
          </div>
        </Card>

        {/* ── 10. Full Flow ── */}
        <Card>
          <SectionLabel>End-to-End</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Full System Flow</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-2">
            Putting it all together — from the user's <code className="bg-ink text-accent px-1">.fit()</code>{" "}
            call to a fitted model ready for <code className="bg-ink text-accent px-1">.predict()</code>.
          </p>
          <Diagram
            src="/projects/sktime/06_full_flow.png"
            alt="Full end-to-end system flow"
            caption="Figure 6 — Complete flow from .fit() through the ReAct loop to a committed, refitted model. The same flow applies regardless of transport mode or LLM backend."
            maxWidth="480px"
          />
        </Card>

        {/* ── 11. Usage Example ── */}
        <Card>
          <SectionLabel>Code Example</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Using AgenticForecaster</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-4">
            The interface is intentionally identical to any other sktime forecaster.
            The only additions are the <code className="bg-ink text-accent px-1">prompt</code> parameter
            (your natural language data description) and the post-fit attributes that expose
            the agent's reasoning.
          </p>
          <CodeBlock
            label="basic_usage.py"
            code={`from sktime_agentic import AgenticForecaster
import pandas as pd

# Your time series — a standard pandas Series with a DatetimeIndex
y = load_your_data()

# Describe what you know about the data in plain English
forecaster = AgenticForecaster(
    prompt="Monthly passenger counts with linear trend and yearly seasonality.",
    backend="anthropic",   # "openai" | "gemini" | "mock"
    transport="in-process",
    holdout=12,            # months held out for candidate scoring
    metric="mape",         # "mae" | "rmse"
    max_steps=12,          # max ReAct iterations
)

# Standard sktime interface — nothing special here
forecaster.fit(y, fh=12)

# Inspect what the agent decided and why
print(forecaster.selected_)
# → "ExponentialSmoothing"

print(forecaster.selected_params_)
# → {"trend": "add", "seasonal": "add", "sp": 12}

print(forecaster.rationale_)
# → "The series shows a clear linear trend and strong yearly seasonality
#    (sp=12). ExponentialSmoothing with additive trend and seasonal
#    components achieved MAPE=4.2% on the holdout — better than
#    NaiveForecaster (11.3%) and AutoARIMA (5.8%)."

# Generate forecast — same as any other sktime forecaster
forecast = forecaster.predict()
print(forecast)
`}
          />
          <p className="text-sm leading-relaxed text-ink/90 mt-4">
            The <code className="bg-ink text-accent px-1">rationale_</code> attribute is the
            agent's explanation in plain English — not a log dump, but the reasoning it used
            to justify its selection. This is stored alongside the full{" "}
            <code className="bg-ink text-accent px-1">transcript_</code> (every tool call and
            response) for full auditability.
          </p>
        </Card>

        {/* ── 12. Key Design Decisions ── */}
        <Card>
          <SectionLabel>Design Decisions</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Why These Choices?</h2>
          <div className="space-y-5">
            {[
              {
                q: "Why YAML for the model registry?",
                a: "A YAML registry means adding a new forecaster requires no Python code changes — you just add an entry. It also makes the registry inspectable by the LLM as plain text, which is important for the list_forecasters tool to work reliably."
              },
              {
                q: "Why held-out scoring instead of cross-validation by default?",
                a: "Cross-validation is more statistically robust but much slower, especially for seasonal models that need to run many folds. Held-out scoring is fast enough for the agent's interactive loop. Expanding-window CV is available as an option for when accuracy matters more than speed."
              },
              {
                q: "Why store the transcript?",
                a: "Reproducibility and debugging. If the agent makes a bad selection, you can inspect the exact sequence of tool calls and LLM reasoning that led to it. This is critical for a library — you need to be able to explain why a model was chosen."
              },
              {
                q: "Why a fallback strategy at max_steps?",
                a: "LLMs can get stuck in loops — repeatedly calling the same tool without committing. The three-tier fallback (scored candidate → fitted candidate → any candidate) ensures fit() always completes, even if the agent doesn't behave ideally."
              },
              {
                q: "Why prompt caching with ephemeral TTL?",
                a: "The tool schema is large (all six tool definitions). Without caching, it would be sent with every single ReAct step — potentially 10+ times per fit() call. Ephemeral cache (5 min TTL) covers a full fit() run and cuts input token cost by 60-80%."
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-ink pl-5">
                <p className="text-sm font-bold">{item.q}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">{item.a}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* ── 13. Future Plans ── */}
        <Card>
          <SectionLabel>Future Plans</SectionLabel>
          <h2 className="mb-4 text-xl font-bold">Where This Is Going</h2>
          <p className="text-sm leading-relaxed text-ink/90 mb-6">
            The current prototype handles univariate selection with a fixed tool surface.
            Several natural extensions would make it production-ready.
          </p>
          <div className="space-y-3">
            {[
              { tag: "Next", title: "Probabilistic Forecasting", body: "Extend the tool surface to support prediction intervals and quantile forecasts — not just point predictions." },
              { tag: "Next", title: "AgenticPipeline", body: "Let the agent compose forecasters with pre-processing transformers (detrending, deseasonalizing, differencing) as a full pipeline, not just a single model." },
              { tag: "Later", title: "Exogenous Variables", body: "Support for covariates — the agent would need to reason about which external features are relevant and which models can use them." },
              { tag: "Later", title: "Benchmarking Harness", body: "Systematic comparison against AutoARIMA, ETS, and other AutoML baselines across standard datasets to measure when the agent adds value and when it doesn't." },
              { tag: "Later", title: "Hyperparameter Search", body: "Currently the agent picks parameters based on reasoning. A tighter loop where it proposes ranges and scores variants would improve accuracy on complex series." },
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
        <div className="flex items-center justify-between border-t-2 border-ink pt-8">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-bold text-ink transition hover:text-accent"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>
          <a
            href="https://github.com/kpal002/sktime-agentic-forecaster"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-ink bg-ink px-4 py-2 text-sm font-bold text-bg shadow-brutal-sm transition hover:text-accent"
          >
            <Github size={14} />
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
