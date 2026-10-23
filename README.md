# Ozair Khan — Professional Portfolio & Engineering Evidence Hub

> **Senior Data & AI Platform Engineer**  
> *UIUC Master of Computer Science (MCS) Candidate*  
> Architecting Enterprise Data Platforms & Applied AI Pipelines.

This repository powers the personal website, technical engineering showcase, and public evidence dossier for **Ozair Khan**, optimized for:
1. **Engineering Showcase & Authority:** High-performance, zero-JS baseline, dark-mode first design (Linear / Vercel style).
2. **US O-1A (Extraordinary Ability) & UK Global Talent Visa (Tech Nation) Evidence Hub:** Verifiable RFC case studies, academic research artifacts, and technical benchmarks.
3. **1-on-1 Mentorship & Advisory Funnel:** Embedded Topmate booking integration for junior/mid-level data engineers and career switchers.
4. **YouTube & Open-Source Companion Guides:** Deep-dive companion breakdowns for videos and repositories.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Astro 5** | Static site generation (SSG) with zero runtime JS overhead and 100/100 Lighthouse performance. |
| **Styling** | **Tailwind CSS + Typography** | Minimalist high-tech dark theme, monospace accents, responsive grid. |
| **Content Engine** | **Astro Content Collections (MDX)** | Type-safe Markdown/MDX with Zod schemas for `/architecture` and `/labs`. |
| **Diagrams** | **Mermaid.js** | Code-driven system topology and pipeline flowcharts rendered dynamically. |
| **Code Highlighting** | **Shiki** | IDE-grade syntax highlighting (`github-dark-dimmed`). |
| **Advisory Funnel** | **Topmate Integration** | Integrated booking cards and modals for 1-on-1 mentorship sessions. |
| **Deployment** | **Cloudflare Pages / GitHub Pages** | $0 global edge deployment with continuous delivery from GitHub. |

---

## 📂 Project Structure

```text
├── public/
│   ├── favicon.svg             # Custom monogram favicon
│   └── og-image.png            # Open Graph social preview
├── src/
│   ├── components/
│   │   ├── ArchitectureCard.astro   # Case study preview with impact metrics
│   │   ├── LabCard.astro            # AI lab preview with GitHub/YouTube tags
│   │   ├── Mermaid.astro            # Code-driven system architecture renderer
│   │   ├── Navbar.astro             # Sticky header with status light & mobile menu
│   │   ├── Footer.astro             # Technical footer with sitemap & O-1/GTV note
│   │   ├── ThemeToggle.astro        # Dark/light theme switch
│   │   └── TopmateEmbed.astro       # 1-on-1 session tier booking cards
│   ├── config/
│   │   └── site.ts                  # Centralized profile, socials & metrics config
│   ├── content/
│   │   ├── config.ts                # Type-safe Zod schema for Content Collections
│   │   ├── architecture/            # Production Case Studies (MDX)
│   │   │   ├── oracle-to-bigquery-migration.mdx
│   │   │   └── cost-of-deal-platform.mdx
│   │   └── labs/                    # Applied AI & Open-Source Labs (MDX)
│   │       ├── youtube-metadata-pipeline.mdx
│   │       ├── hybrid-search-bm25-rag.mdx
│   │       └── mcp-server-data-pipeline-triage.mdx
│   ├── layouts/
│   │   └── Layout.astro             # Base HTML, SEO tags, JSON-LD Schema.org
│   ├── pages/
│   │   ├── index.astro              # The Command Center (Homepage)
│   │   ├── architecture/            # Case studies directory & slug routes
│   │   ├── labs/                    # AI & Data Labs directory & slug routes
│   │   ├── mentorship.astro         # 1-on-1 Mentorship & Advisory page
│   │   └── dossier.astro            # Living CV, UIUC MCS coursework & visa hub
│   └── styles/
│       └── global.css               # Global CSS & Tailwind design tokens
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 🚀 Local Development

1. **Clone and install dependencies:**
   ```bash
   git clone git@github.com:HalfLambda/professional_website_portfolio.git
   cd professional_website_portfolio
   npm install
   ```

2. **Run local dev server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   Generates optimized static HTML in `./dist/`.

4. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🚢 Zero-Cost Deployment

### Deploying to Cloudflare Pages (Recommended)
1. Push this repository to GitHub.
2. In Cloudflare Dashboard, go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repository and configure:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Your site is now live on Cloudflare's global edge network at \$0 monthly cost.

---

## ✍️ Adding New Content

- **Add a new Production Case Study:**  
  Create a new `.mdx` file in `src/content/architecture/your-case-study.mdx` adhering to the Zod schema defined in `src/content/config.ts`.
- **Add a new AI & Data Lab:**  
  Create a new `.mdx` file in `src/content/labs/your-lab-name.mdx`.
- **Update Profile / Links:**  
  Modify `src/config/site.ts` to update Topmate username, social links, or impact metrics.
