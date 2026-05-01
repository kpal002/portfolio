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
    "Before that, I spent seven years doing experimental and computational physics for my Ph.D. at UC Riverside, with research stints at Deepgram (multimodal audio embeddings), PI School in Rome (LLM evaluation for medical research), and Pocket FM (sequential prediction + comment ranking).",
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
export const projects = [
  {
    title: "Agentic RAG for Real-Time Analytics",
    description:
      "Production-grade agentic RAG system using LangChain and Postgres vector search. Translates natural language into SQL for real-time customer analytics — built and shipped at Beehive AI.",
    tech: ["LangChain", "Postgres", "pgvector", "Python"],
    href: null,
    demo: null,
    featured: true,
  },
  {
    title: "Multi-Agent Commerce System",
    description:
      "Architected a multi-agent commerce system on Vertex AI + LangGraph with semantic search, dynamic UI, and conversational interfaces for personalized product recommendations.",
    tech: ["Vertex AI", "LangGraph", "Semantic Search"],
    href: null,
    demo: null,
    featured: true,
  },
  {
    title: "LLM-Powered QA Framework",
    description:
      "Data categorization framework that validates and refines category labels using LLM-driven evaluation — drove 80% automation and reduced manual labeling effort.",
    tech: ["LLMs", "Evaluation", "Python"],
    href: null,
    demo: null,
    featured: false,
  },
  {
    title: "Virtual Persona Simulator",
    description:
      "Scalable persona simulation framework using LLMs, contextual retrieval, and memory systems to model user behavior and inform product decisions.",
    tech: ["LLMs", "Memory Systems", "RAG"],
    href: null,
    demo: null,
    featured: false,
  },
  {
    title: "Multimodal Audio Embeddings",
    description:
      "Self-supervised audio embedding model trained on 35K+ hours of audio. Reached 86% downstream accuracy and beat BERT-based text-only baselines by 5 points (work at Deepgram).",
    tech: ["Self-supervised", "Audio", "Multimodal"],
    href: null,
    demo: null,
    featured: false,
  },
  {
    title: "LLM Reliability Eval for Medical Papers",
    description:
      "LLM-based pipeline assessing medical research paper quality. GPT-4 hit 75% eval accuracy via prompt optimization; Mixtral reached 69% via QLoRA fine-tuning (PI School fellowship).",
    tech: ["GPT-4", "Mixtral", "QLoRA"],
    href: null,
    demo: null,
    featured: false,
  },
];

// Blog posts — replace `href` with real article URLs as you publish.
// The Blog section renders these as a vertical post list.
export const blogPosts = [
  {
    title: "Building Production-Grade Agentic RAG Systems",
    excerpt:
      "What actually breaks when you ship a RAG agent past the demo — schema drift, query routing, eval, and the rest.",
    date: "Coming soon",
    readTime: "8 min read",
    href: "#",
    tag: "RAG",
  },
  {
    title: "LLM Evaluation Without the Hand-Waving",
    excerpt:
      "A practical look at building evaluation frameworks that catch regressions and actually move quality numbers.",
    date: "Coming soon",
    readTime: "6 min read",
    href: "#",
    tag: "Evaluation",
  },
  {
    title: "Multi-Agent Systems: Patterns That Survive Production",
    excerpt:
      "Lessons from building agentic commerce and analytics systems — orchestration, memory, fallbacks, and observability.",
    date: "Coming soon",
    readTime: "10 min read",
    href: "#",
    tag: "Agents",
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
