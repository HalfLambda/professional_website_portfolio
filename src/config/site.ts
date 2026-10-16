export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  role: string;
  academic: string;
  description: string;
  url: string;
  author: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    youtube: string;
    twitter?: string;
  };
  topmateUrl: string;
  nav: Array<{
    label: string;
    href: string;
    badge?: string;
  }>;
  impactMetrics: Array<{
    title: string;
    highlight: string;
    description: string;
    tag: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Ozair Khan",
  title: "Ozair Khan | Senior Data & AI Platform Engineer",
  tagline: "Architecting Enterprise Data Platforms & Applied AI Workflows",
  role: "Senior Data & AI Platform Engineer",
  academic: "UIUC Master of Computer Science (MCS) Candidate",
  description:
    "Bridging production-scale distributed data engineering (BigQuery, Spark, Airflow) with modern Information Retrieval, RAG, and Agentic AI workflows.",
  url: "https://ozairkhan.dev",
  author: "Ozair Khan",
  email: "contact@ozairkhan.dev",
  socials: {
    github: "https://github.com/ozair-khan",
    linkedin: "https://linkedin.com/in/ozairkhan",
    youtube: "https://youtube.com/@ozairkhan-tech",
  },
  topmateUrl: "https://topmate.io/ozair_khan",
  nav: [
    { label: "Overview", href: "/" },
    { label: "Case Studies", href: "/architecture" },
    { label: "AI & Data Labs", href: "/labs", badge: "New" },
    { label: "Advisory & 1:1", href: "/mentorship" },
    { label: "Dossier & CV", href: "/dossier" },
  ],
  impactMetrics: [
    {
      title: "Enterprise DW Migration",
      highlight: "Oracle → BigQuery",
      description: "Cloud Migration Lead architecting scalable ELT, partitioning & slot optimization.",
      tag: "High Impact",
    },
    {
      title: "Unified Data Product",
      highlight: "Cost of Deal Platform",
      description: "Consolidated multi-stream commercial, pricing, and ticketing telemetry.",
      tag: "Production",
    },
    {
      title: "Applied AI & Automation",
      highlight: "DuckDB + Polars + MCP",
      description: "Engineered local LLM metadata pipelines and diagnostic agentic workflows.",
      tag: "Bleeding Edge",
    },
  ],
};
