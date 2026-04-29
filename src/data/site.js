export const trackMeta = {
  professional: {
    label: "Research / Build",
    description: "Durable notes on AI systems, evaluation, and implementation.",
  },
  personal: {
    label: "Personal",
    description: "Thoughts, journal-like reflections, and life updates.",
  },
  culture: {
    label: "Culture",
    description: "Sports, LCK, news reactions, and cultural observations.",
  },
  creative: {
    label: "Creative",
    description: "Short fiction, sketches, and experimental writing.",
  },
};

export const workKindMeta = {
  project: "Project",
  paper: "Paper",
  talk: "Talk",
};

export const siteConfig = {
  title: "Sunguk Jang",
  role: "AI Researcher",
  description:
    "AI researcher at AITRICS with a KAIST AI background, focused on long-tailed learning, trustworthy machine learning, and practical healthcare AI systems.",
  siteUrl: "https://aitrics-tom.github.io",
  githubPages: {
    type: "user",
    repository: "aitrics-tom.github.io",
  },
  email: "tommy9773@aitrics.com",
  location: "Seoul, South Korea",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/cv" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
  ],
  profileImage: "/media/profile-about.png",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/aitrics-tom" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sunguk-jang-9587301a2/" },
    { label: "Instagram", href: "https://instagram.com/__yellow_gradient" },
    { label: "RSS", href: "/rss.xml" },
  ],
  featuredWorkSlugs: [
    "scad-long-tailed-semi-supervised-learning",
    "decoupled-training-long-tailed-classification",
    "aitrics-iclr-2026-highlight",
  ],
  featuredProfessionalPostSlugs: [
    "agents-need-observation-not-more-hype",
    "how-i-structure-eval-notebooks",
    "what-research-portfolios-should-feel-like",
  ],
  hero: {
    title: "Hello, I'm Sunguk Jang",
    primaryCta: { label: "Blog", href: "/blog" },
    secondaryCta: { label: "Portfolio", href: "/portfolio" },
    alt:
      "A warm desk scene with code, charts, paper notes, a baseball glove, manga art, a lamp, and a monitor full of research work.",
  },
  researchThemes: [
    {
      title: "Evaluation as Product Infrastructure",
      body:
        "I care about evaluation loops that help teams make decisions, not just benchmark dashboards that look impressive in a slide deck.",
    },
    {
      title: "Agent Reliability in Messy Environments",
      body:
        "My interest is in how agentic systems behave when context is partial, user intent is fuzzy, and failure modes are socially expensive.",
    },
    {
      title: "Research Interfaces for Builders",
      body:
        "I like making research artifacts legible to builders: notebooks, internal tooling, explainers, and narratives that lower the cost of understanding.",
    },
  ],
  blogIntro:
    "Blog is split into two lanes: a lighter photo journal for visual moments, and a writing archive for essays, reflections, sports notes, and research-adjacent posts.",
  about: {
    intro:
      "AI researcher at AITRICS working on long-tailed learning, trustworthy machine learning, and practical healthcare AI systems.",
    roleLine: "AI Researcher",
    shortBio: [
      "I build machine learning systems that learn from the long tail and make a real impact in healthcare.",
      "My research background comes from the KAIST Kim Jaechul Graduate School of AI and SIML Lab, advised by Prof. Juho Lee.",
    ],
    interests: [
      "Long-tailed Learning",
      "Healthcare AI",
      "Trustworthy ML",
      "Evaluation",
    ],
    affiliations: [
      { label: "Affiliation", value: "AITRICS" },
      { label: "Graduate School", value: "KAIST Kim Jaechul Graduate School of AI" },
      { label: "Undergraduate", value: "Korea University, Computer Science & Statistics" },
      { label: "Location", value: "Seoul, South Korea" },
    ],
    quickFacts: [
      { label: "Affiliation", value: "AITRICS" },
      { label: "Background", value: "KAIST AI, SIML Lab" },
      { label: "Location", value: "South Korea" },
      { label: "Interests", value: "Long-tailed learning, trustworthy ML, medical AI" },
      { label: "Contact", value: "tommy9773@aitrics.com" },
    ],
    paragraphs: [
      "My research path connects AITRICS, KAIST AI, and Korea University, with work around long-tailed classification, semi-supervised learning, and trustworthy machine learning for healthcare settings. That combination gives the site a more academic and publication-aware tone than a generic startup portfolio.",
      "I still want the site to feel human. The blog remains broader on purpose, but the core portfolio now foregrounds affiliations, selected research outputs, and a resume structure that reads more like a personal academic homepage.",
    ],
    focusAreas: [
      {
        title: "Long-tailed and data-imbalanced learning",
        body:
          "I am interested in models that stay reliable when the real distribution is skewed, sparse, and expensive to label.",
      },
      {
        title: "Healthcare AI with practical constraints",
        body:
          "Medical settings make robustness, explainability, and shift-awareness feel less optional and more like baseline requirements.",
      },
      {
        title: "Readable research artifacts",
        body:
          "I care about the design of research communication itself, especially notebooks, visual summaries, and interfaces that reduce interpretation cost.",
      },
    ],
    principles: [
      "Prefer evidence to hype.",
      "Treat interfaces as part of the research method.",
      "Make durable artifacts, not just momentary demos.",
    ],
  },
  cv: {
    pdfPath: "/files/sunguk-cv.pdf",
    summary:
      "This resume centers on research experience connected to AITRICS, KAIST Kim Jaechul Graduate School of AI, and Korea University, especially work on long-tailed learning and practical healthcare AI.",
    highlights: [
      "Current public affiliation with AITRICS, a medical AI company",
      "M.S. in AI from KAIST Kim Jaechul Graduate School of AI, SIML Lab",
      "B.S. in Computer Science with a double major in Statistics from Korea University",
      "ICLR 2023 publication on long-tailed classification with stochastic representations",
      "ICLR 2026 Poster on SCAD for long-tailed semi-supervised learning",
    ],
    experience: [
      {
        period: "2023 — Present",
        title: "AI Researcher, AITRICS",
        detail:
          "Public-facing work associated with AITRICS centers on trustworthy and data-efficient AI, especially in medical settings where explainability, robustness, and class imbalance matter in practice.",
      },
      {
        period: "2021 — 2023",
        title: "M.S. Research, KAIST Kim Jaechul Graduate School of AI",
        detail:
          "Graduate research in SIML Lab advised by Prof. Juho Lee, connected to long-tailed classification and stochastic representations.",
      },
    ],
    education: [
      {
        period: "2021 — 2023",
        title: "KAIST Kim Jaechul Graduate School of AI",
        detail: "M.S. in Artificial Intelligence, SIML Lab, advised by Prof. Juho Lee",
      },
      {
        period: "2016 — 2021",
        title: "Korea University",
        detail: "B.S. in Computer Science, double major in Statistics",
      },
    ],
    talks: [
      "ICLR 2023 — Decoupled Training for Long-Tailed Classification With Stochastic Representations",
      "SCAD — Super-Class-Aware Debiasing for Long-Tailed Semi-Supervised Learning",
      "AITRICS team announcement: three papers accepted at ICLR 2026",
    ],
  },
  contact: {
    intro:
      "I am most interested in conversations about research collaborations, evaluation infrastructure, agent workflows, and thoughtful product-facing AI work.",
    opportunities: [
      "Research collaboration and independent projects",
      "Speaking, workshops, and writing commissions",
      "Early-stage advisory conversations around evaluation and agent UX",
    ],
  },
};
