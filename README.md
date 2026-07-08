# Shivansh Omer — Portfolio

A premium, from-scratch portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, GSAP, and Lenis.

## Stack

- **React 19 + TypeScript + Vite** — app shell and build tooling
- **Tailwind CSS v4** — design system via `@theme` tokens in `src/index.css` (no `tailwind.config.js` needed)
- **Framer Motion** — scroll reveals, hover states, page transitions
- **GSAP** — powers the Lenis smooth-scroll sync (`src/hooks/useLenis.ts`)
- **React Router v7** — routing, with lazy-loaded project case-study pages
- **React Hook Form + Zod** — validated contact form
- **EmailJS** — contact form delivery (no backend required)
- **Lenis** — smooth scrolling

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Before You Deploy — Replace Placeholder Content

This project ships with realistic placeholders wherever real content couldn't be inferred from a prompt alone. Search for `TODO` comments, or update these directly:

| What | File |
|---|---|
| Email address | `src/data/siteConfig.ts` |
| GitHub / LinkedIn / LeetCode URLs | `src/data/siteConfig.ts` (`socialLinks`) |
| GitHub username (powers the live stats + contribution graph) | `src/data/github.ts` |
| LeetCode stats (no public LeetCode API exists — these are static) | `src/data/leetcode.ts` |
| Resume file | Add your PDF at `public/resume.pdf` |
| Project GitHub/demo/App Store links | `src/data/projects.ts` |
| Canonical URL, OG image, structured data | `index.html` |
| Real project screenshots (optional — currently uses CSS-built device mockups) | `src/components/ui/ProjectMockup.tsx`, drop images in `src/assets/images/` |

## Setting Up the Contact Form (EmailJS)

The form is fully wired up with validation and a success/error state — it just needs your EmailJS credentials:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an **Email Service** → copy the **Service ID**
3. Create an **Email Template** with `{{name}}`, `{{email}}`, `{{message}}` variables → copy the **Template ID**
4. Go to **Account → General** → copy your **Public Key**
5. Paste all three into `src/data/emailjsConfig.ts`

Until configured, the form will show a friendly error state pointing people to your email directly instead of failing silently.

## Design System

All color, font, radius, and shadow tokens live in `src/index.css` under `@theme` and `.dark`. Both a dark theme (default) and light theme are implemented via CSS variables + a `.dark` class toggle, persisted to `localStorage` and applied before first paint (no flash).

## Folder Structure

```
src/
  components/
    ui/        Reusable primitives (Button, GlassCard, Badge, ProjectCard, ...)
    layout/    Navbar, Footer
  sections/    One file per homepage section (Hero, About, Skills, ...)
  pages/       Route-level pages (Home, ProjectDetail, NotFound)
  hooks/       useTheme, useLenis, useTypewriter, useGitHubStats, ...
  data/        All content as typed data (projects, skills, experience, ...)
  types/       Shared TypeScript interfaces
  lib/         cn() class helper, Zod validation schemas
```

## Extra Features Implemented

- Dark/light theme toggle with persisted preference
- Command palette (⌘K / Ctrl+K) for quick navigation
- Scroll progress bar, back-to-top button, custom cursor (desktop only)
- Active-section highlighting in the navbar
- Live GitHub stats + contribution graph pulled from the public GitHub REST API
- Project search/filter
- Reduced-motion support throughout (respects `prefers-reduced-motion`)

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the repo directly in the Vercel dashboard — `vercel.json` already includes the SPA rewrite rule so client-side routes like `/projects/codeatlas-ai` work on direct load/refresh.

## SEO Checklist

- [x] Meta description, keywords, canonical URL
- [x] Open Graph + Twitter Card tags
- [x] JSON-LD `Person` structured data
- [x] `robots.txt` + `sitemap.xml`
- [ ] Replace `https://shivanshomer.dev` with your real domain everywhere (`index.html`, `robots.txt`, `sitemap.xml`)
- [ ] Add a real `og-image.png` (1200×630) to `public/`
