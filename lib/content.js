// -----------------------------------------------------------
// Site content — the single source of truth.
// Edit values here to update your portfolio. Components import
// from this file, so no JSX needs to be touched for content tweaks.
// -----------------------------------------------------------

export const profile = {
  name: "Kuntal Pal",
  // Short tagline shown under the hero name.
  role: "AI Engineer",
  // Hero one-liner.
  headline:
    "I build production-grade LLM systems, agentic infrastructure, and real-time AI that drive measurable impact on automation and user engagement.",
  location: "Riverside, CA",
  email: "kuntal.beehiveai@gmail.com",
  phone: "+1 (951) 202-8635",
  // Drop the PDF in /public and the Resume button below will serve it.
  resumeUrl: "/Kuntal-Pal-Resume.pdf",
  // Profile photo path — drop your photo at /public/profile.jpg
  // (or change the filename here to match what you save).
  profileImage: "/profile.jpg",
};

// External links — used in the navbar, hero, contact, and footer.
export const socials = [
  { label: "GitHub",   href: "https://github.com/kpal002" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kuntal-pal/" },
  { label: "Blog",     href: "https://substack.com/@tokenizeduniverse" },
  { label: "Email",    href: "mailto:kuntal.beehiveai@gmail.com" },
];

// In-page navigation links — match the screenshot you shared.
// `href` should match each section's id (or "/" for Home).
export const navLinks = [
  { label: "Home",     href: "#hero",     id: "hero" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Blog",     href: "#blog",     id: "blog" },
  { label: "About",    href: "#about",    id: "about" },
];

// About-section paragraphs.
export const about = {
  paragraphs: [
    "I’m Kuntal — an AI engineer working on LLM systems, retrieval pipelines, and multi-agent infrastructure. I like turning messy, ambiguous problems into clean, production-shaped products.",
    "Right now I’m at Beehive AI, where I build agentic RAG systems, LLM-powered evaluation frameworks, and virtual persona simulators that help product teams make sharper decisions.",
    "Before that, I spent seven years doing theoretical and computational particle physics for my Ph.D. at UC Riverside, with valuable research experiences at Deepgram (multimodal audio embeddings), PI School in Rome (LLM evaluation for medical research), and Pocket FM (sequential prediction + comment ranking).",
  ],
  // Quick facts displayed alongside the prose.
  facts: [
    { label: "Based in",   value: "Riverside, CA" },
    { label: "Currently",  value: "AI Engineer @ Beehive AI" },
    { label: "Previously", value: "Pocket FM · PI School · Deepgram" },
    { label: "Education",  value: "Ph.D. Physics, UC Riverside" },
    { label: "Open to",    value: "AI/ML roles & collaborations" },
  ],
};

// Skills grouped by category — rendered as tag cards.
export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "Go"],
  },
  {
    category: "ML & AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "LLMs",
      "RAG",
      "Vector DBs",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    category: "Deployment & MLOps",
    items: ["Docker", "Kubernetes", "GCP", "Vertex AI"],
  },
  {
    category: "Specializations",
    items: [
      "Multi-Agent Systems",
      "Multimodal Learning",
      "LLM Fine-tuning",
      "Predictive Modeling",
    ],
  },
];

// Projects shown in the Projects section.
// Mark `featured: true` to make a card span 2 columns on desktop.
// `slug` powers the /projects/[slug] detail page.
export const projects = [
  {
    title: "Agentic Forecaster for sktime",
    slug: "sktime-agentic-forecaster",
    description:
      "Drop-in sktime forecaster that uses a ReAct agent loop to automatically select and configure time series pipelines from natural language descriptions. Supports Claude, GPT-4o, and Gemini backends.",
    tech: ["Python", "sktime", "Claude API", "FastMCP", "ReAct"],
    href: "https://github.com/kpal002/sktime-agentic-forecaster",
    demo: null,
    featured: true,
    details: {
      overview:
        "AgenticForecaster is an open-source contribution to the sktime ecosystem. It wraps a ReAct agent loop inside a standard sktime interface — call .fit() and .predict() like any other model, but under the hood an LLM is reasoning about your data, fitting candidate models, and selecting the best pipeline. Every decision comes with a human-readable explanation.",
      sections: [
        {
          heading: "The Problem",
          body: "Picking the right forecasting model is hard. Should you use ExponentialSmoothing or ARIMA? Does the series have seasonality, and if so what period? Traditionally this requires domain expertise or expensive AutoML sweeps. This project delegates that reasoning to an LLM agent that reads natural language descriptions of the data and explains every choice it makes.",
        },
        {
          heading: "Architecture",
          body: "The agent runs a ReAct loop during .fit() that coordinates five tool-constrained steps:",
          items: [
            "Summarize the time series — length, frequency, detected patterns",
            "Enumerate available forecasters from a YAML-configurable registry (8 built-in models)",
            "Fit candidate models and score them on a held-out window",
            "Reason over the results and commit to the best pipeline",
            "Return a rationale alongside the fitted model",
          ],
        },
        {
          heading: "Key Features",
          body: null,
          items: [
            "Tool-constrained agent — no free-form code execution, safe and auditable",
            "MCP-native design — runs in-process or as a remote FastMCP server",
            "Multi-backend — Claude, GPT-4o, Gemini 2.0 Flash",
            "First-class rationale output — every model selection is explained",
            "Drop-in compatible with existing sktime pipelines and ensembles",
            "Deterministic mock backend for offline testing",
          ],
        },
        {
          heading: "Results",
          body: "Testing on real time series demonstrates correct seasonality detection — the agent identifies weekly patterns (sp=7) and selects appropriate models like ExponentialSmoothing or SeasonalNaiveForecaster with realistic accuracy metrics. Model selection rationale is logged alongside every forecast.",
        },
      ],
    },
  },
  {
    title: "Agentic RAG for Real-Time Analytics",
    slug: "agentic-rag-analytics",
    description:
      "Production-grade agentic RAG system using LangChain and Postgres vector search. Translates natural language into SQL for real-time customer analytics — built and shipped at Beehive AI.",
    tech: ["LangChain", "Postgres", "pgvector", "Python"],
    href: null,
    demo: null,
    featured: true,
    details: {
      overview:
        "Built and shipped at Beehive AI, this system lets non-technical users query complex customer analytics data using plain English. The agent translates natural language into SQL, executes against a Postgres + pgvector backend, and returns structured insights — no SQL knowledge required.",
      sections: [
        {
          heading: "The Problem",
          body: "Analytics teams at Beehive AI needed a way to query customer data without writing SQL. The challenge was bridging natural language with a complex schema reliably enough to deploy in production.",
        },
        {
          heading: "How It Works",
          body: null,
          items: [
            "User submits a natural language question",
            "LangChain agent decomposes the query and retrieves relevant schema context via pgvector",
            "Agent generates and validates SQL before execution",
            "Results are returned as structured data with a plain-English summary",
          ],
        },
        {
          heading: "Stack",
          body: null,
          items: [
            "LangChain for agent orchestration and tool routing",
            "Postgres + pgvector for hybrid keyword + semantic search",
            "Python backend with LLM-driven SQL generation",
          ],
        },
      ],
    },
  },
  {
    title: "Multi-Agent Commerce System",
    slug: "multi-agent-commerce",
    description:
      "Architected a multi-agent commerce system on Vertex AI + LangGraph with semantic search, dynamic UI, and conversational interfaces for personalized product recommendations.",
    tech: ["Vertex AI", "LangGraph", "Semantic Search"],
    href: null,
    demo: null,
    featured: true,
    details: {
      overview:
        "A multi-agent commerce system built on Vertex AI and LangGraph, enabling personalized product discovery through conversational interfaces. Agents handle intent parsing, semantic search, dynamic UI generation, and recommendation ranking in a coordinated pipeline.",
      sections: [
        {
          heading: "Architecture",
          body: null,
          items: [
            "Intent agent — parses user queries and routes to the right specialist",
            "Search agent — semantic product retrieval via vector embeddings",
            "Recommendation agent — ranks candidates based on user context and history",
            "UI agent — generates dynamic interface components from structured agent output",
          ],
        },
        {
          heading: "Stack",
          body: null,
          items: [
            "Vertex AI for model serving and agent infrastructure",
            "LangGraph for multi-agent orchestration and state management",
            "Semantic search with vector embeddings for product retrieval",
          ],
        },
      ],
    },
  },
  {
    title: "LLM-Powered QA Framework",
    slug: "llm-qa-framework",
    description:
      "Data categorization framework that validates and refines category labels using LLM-driven evaluation — drove 80% automation and reduced manual labeling effort.",
    tech: ["LLMs", "Evaluation", "Python"],
    href: null,
    demo: null,
    featured: false,
    details: {
      overview:
        "An LLM-driven evaluation framework that validates and refines data category labels at scale. Built at Beehive AI to replace manual QA, the system reached 80% automation on categorization tasks and significantly reduced analyst labeling time.",
      sections: [
        {
          heading: "How It Works",
          body: null,
          items: [
            "Ingests labeled data samples alongside category definitions",
            "LLM evaluator scores label accuracy and flags uncertain cases",
            "Refinement loop re-labels low-confidence samples with chain-of-thought reasoning",
            "Human review queue limited to genuinely ambiguous edge cases",
          ],
        },
        {
          heading: "Impact",
          body: "Achieved 80% automation on categorization QA, reducing manual analyst workload substantially while maintaining label quality.",
        },
      ],
    },
  },
  {
    title: "Virtual Persona Simulator",
    slug: "virtual-persona-simulator",
    description:
      "Scalable persona simulation framework using LLMs, contextual retrieval, and memory systems to model user behavior and inform product decisions.",
    tech: ["LLMs", "Memory Systems", "RAG"],
    href: null,
    demo: null,
    featured: false,
    details: {
      overview:
        "A framework for simulating synthetic user personas at scale. Built at Beehive AI to help product teams test hypotheses and model user behavior without requiring live user studies. Each persona is grounded in contextual retrieval and maintains a persistent memory across interactions.",
      sections: [
        {
          heading: "How It Works",
          body: null,
          items: [
            "Persona profiles defined from real behavioral data and product context",
            "RAG retrieval grounds each response in relevant context",
            "Memory system maintains persona consistency across multi-turn interactions",
            "Outputs structured behavioral signals for product decision-making",
          ],
        },
      ],
    },
  },
  {
    title: "Multimodal Audio Embeddings",
    slug: "multimodal-audio-embeddings",
    description:
      "Self-supervised audio embedding model trained on 35K+ hours of audio. Reached 86% downstream accuracy and beat BERT-based text-only baselines by 5 points (work at Deepgram).",
    tech: ["Self-supervised Learning", "Audio", "Multimodal", "PyTorch"],
    href: null,
    demo: null,
    featured: false,
    details: {
      overview:
        "Research internship project at Deepgram. Trained a self-supervised multimodal embedding model that aligns audio and text representations in a shared latent space. The model outperformed text-only BERT baselines on downstream tasks by 5 percentage points.",
      sections: [
        {
          heading: "Approach",
          body: null,
          items: [
            "Self-supervised contrastive training on 35K+ hours of audio-text pairs",
            "Joint audio-text embedding space learned without manual labels",
            "86% downstream accuracy on classification benchmarks",
            "Beats BERT text-only baseline by 5 points on audio-grounded tasks",
          ],
        },
      ],
    },
  },
  {
    title: "LLM Reliability Eval for Medical Papers",
    slug: "llm-medical-eval",
    description:
      "LLM-based pipeline assessing medical research paper quality. GPT-4 hit 75% eval accuracy via prompt optimization; Mixtral reached 69% via QLoRA fine-tuning (PI School fellowship).",
    tech: ["GPT-4", "Mixtral", "QLoRA", "Python"],
    href: null,
    demo: null,
    featured: false,
    details: {
      overview:
        "Fellowship project at PI School in Rome. Built an automated pipeline to assess the reliability of medical research papers using LLMs — reducing the bottleneck of expert manual review. Explored both prompt engineering and fine-tuning approaches.",
      sections: [
        {
          heading: "Approach",
          body: null,
          items: [
            "GPT-4 with iterative prompt optimization — reached 75% eval accuracy",
            "Mixtral fine-tuned with QLoRA on a labeled medical paper dataset — reached 69%",
            "Evaluated against expert human assessments as ground truth",
          ],
        },
        {
          heading: "Key Finding",
          body: "Prompt optimization on a stronger base model (GPT-4) outperformed fine-tuning a smaller open-source model (Mixtral) for this task, suggesting data efficiency matters more than model ownership for niche evaluation pipelines.",
        },
      ],
    },
  },
];

// Blog posts — replace `href` with real article URLs as you publish.
// The Blog section renders these as a vertical post list.
export const blogPosts = [
  {
    title: "BPE Tokenizer From Scratch: How LLMs Read Text",
    excerpt:
      "The first step every LLM takes — implemented from scratch. Before a Transformer can process text, it has to be turned into numbers.",
    date: "Apr 28, 2026",
    readTime: "8 min read",
    href: "https://tokenizeduniverse.substack.com/p/bpe-tokenizer-from-scratch",
    tag: "Tokenization",
  },
  {
    title: "What Is Generative Modeling?",
    excerpt:
      "The mathematical foundations of generative modeling — divergence measures, latent variable models, and the theory behind GANs and diffusion models.",
    date: "2025",
    readTime: "10 min read",
    href: "https://kpal002.github.io/blog/2025/GAN/",
    tag: "Generative Models",
  },
];

// Experience timeline — most recent first.
export const experience = [
  {
    role: "AI Engineer",
    company: "Beehive AI, Inc.",
    period: "Jul 2024 — Present",
    summary:
      "Engineered an agentic RAG system (LangChain + Postgres pgvector) for natural-language → SQL analytics. Built an LLM-powered QA framework reaching 80% automation, a virtual persona simulation framework, and architected a multi-agent commerce system on Vertex AI + LangGraph.",
  },
  {
    role: "AI Research Scientist",
    company: "Pocket FM",
    period: "Jan 2024 — Jul 2024",
    summary:
      "Shipped an LSTM-based sequential prediction model for long-term content performance. Led a comment ranking system using semantic embeddings + LLM summaries that lifted CTR by 4.5% and comment volume by 4.0%.",
  },
  {
    role: "AI Fellow",
    company: "PI School, Rome",
    period: "Dec 2023 — Feb 2024",
    summary:
      "Automated reliability assessment of medical research papers using LLM-based algorithms. Improved GPT-4 evaluation accuracy to 75% via prompt optimization and pushed Mixtral to 69% with QLoRA fine-tuning.",
  },
  {
    role: "Research Scientist Intern",
    company: "Deepgram, Inc.",
    period: "Jun 2023 — Sep 2023",
    summary:
      "Trained a self-supervised audio embedding model on 35K+ hours of audio (86% downstream accuracy). Engineered a multimodal embedding space aligning audio and text, beating text-only baselines by 5 points.",
  },
];

// Education entries shown in the About section.
export const education = [
  {
    school: "University of California, Riverside",
    degree: "Ph.D., Physics",
    period: "Sep 2017 — Jun 2024",
  },
  {
    school: "Indian Institute of Science Education and Research, Kolkata",
    degree: "BS-MS Dual Degree, Physics",
    period: "Aug 2012 — May 2017",
  },
];
