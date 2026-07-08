# Shivansh Omer — Premium Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF00C1?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A highly polished, premium, and fully responsive developer portfolio built from scratch. It features rich visual aesthetics, custom smooth scrolling, fluid micro-interactions, theme preservation, and a custom command palette.

---

## ⚡ Key Features

*   **Premium Visuals & Motion:** Implemented with a sleek dark-mode-first styling, fine-tuned glassmorphism layouts, custom grid patterns, and fluid animations powered by **Framer Motion** and **GSAP**.
*   **Lenis Smooth Scroll Sync:** Seamless integration of smooth scrolling with scroll-triggered animations via a custom hook (`useLenis.ts`) mapped onto the GSAP ticker.
*   **Theme Manager:** Fully customizable light/dark themes with system preference synchronization, persisted preferences, and zero-flash rendering on load.
*   **Command Palette (⌘K / Ctrl+K):** A fully accessible command menu that allows visitors to quickly navigate sections, search projects, toggle themes, or download your resume using only their keyboard.
*   **Dynamic Project Filtering:** Clean search and filter interface to segment projects by platform (iOS, Web, AI) and key technologies.
*   **Live GitHub Stats Integration:** Dynamic data fetching from the public GitHub REST API to render real-time profile statistics and an interactive, client-side contribution graph.
*   **Secure Contact Engine:** Validated form inputs built with **React Hook Form** and **Zod**, communicating directly with **EmailJS** to deliver messages without requiring a dedicated backend service.
*   **Fully Accessible & SEO-Optimized:** Structured semantic HTML5, keyboard navigation support, high tap-target sizes, JSON-LD schema integration, and structured metadata for modern search crawlers.

---

## 🛠 Tech Stack

*   **Core:** React 19, TypeScript, Vite
*   **Styling:** Tailwind CSS v4 (configured completely via CSS variables & `@theme` tokens in `src/index.css` without requiring a legacy `tailwind.config.js` file)
*   **Routing:** React Router v7 (with lazy-loaded component routes)
*   **Animation:** Framer Motion, GSAP, Lenis
*   **Form Management:** React Hook Form + Zod validation
*   **APIs & Services:** GitHub REST API, EmailJS

---

## 📂 Folder Structure

```text
src/
├── assets/          # Project screenshots, logos, and raw visual assets
├── components/      # Reusable UI primitives and layout structures
│   ├── layout/      # Shared shells: Navbar, Footer, Section containers
│   └── ui/          # Primitives: Button, GlassCard, Badge, ProjectCard, CustomCursor
├── data/            # Static config & content models (skills, projects, achievements, etc.)
├── hooks/           # Custom React hooks (useLenis, useTheme, useGitHubStats, useTypewriter)
├── lib/             # Third-party configurations & utilities (cn helper, zod schemas)
├── pages/           # Route-level views (Home, ProjectDetail, NotFound)
├── sections/        # Homepage section layouts (Hero, About, Skills, Projects, Experience, Contact)
├── types/           # Shared TypeScript interfaces
├── App.tsx          # Main route controller & core app layout
├── index.css        # Main stylesheet containing theme overrides and base styles
└── main.tsx         # Application mount point
```

---

## 🚀 Getting Started

To run this project locally, execute the following commands in your terminal:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shivanshomer/shivansh-omer-portfolio.git
    cd shivansh-omer-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    *Open your browser and navigate to `http://localhost:5173`.*

4.  **Production build & preview:**
    ```bash
    npm run build     # Compiles the TypeScript code and bundles assets to /dist
    npm run preview   # Launches a local server hosting the compiled production build
    ```

---

## ⚙️ Configuration & Customization

This portfolio is designed to be highly modular. Update the files in `src/data/` to match your own profile and projects:

| Configuration Area | File Location | What to Update |
| :--- | :--- | :--- |
| **Site Profile** | [`src/data/siteConfig.ts`](file:///Users/shivanshomer/Desktop/shivansh-omer-portfolio/src/data/siteConfig.ts) | Personal information, tagline, email, biography summary, social handles, and primary nav links. |
| **Project Showcase** | [`src/data/projects.ts`](file:///Users/shivanshomer/Desktop/shivansh-omer-portfolio/src/data/projects.ts) | Dynamic list of projects featuring role details, technical stack list, feature descriptions, and repository URLs. |
| **Skill Metrics** | [`src/data/skills.ts`](file:///Users/shivanshomer/Desktop/shivansh-omer-portfolio/src/data/skills.ts) | Custom tags grouped by category (Frontend, Backend, Languages, Mobile, Tools) along with competency levels. |
| **Chronology Timeline** | [`src/data/experience.ts`](file:///Users/shivanshomer/Desktop/shivansh-omer-portfolio/src/data/experience.ts) | Education and professional milestones with tags indicating active status. |
| **GitHub Stats** | [`src/data/github.ts`](file:///Users/shivanshomer/Desktop/shivansh-omer-portfolio/src/data/github.ts) | Update `GITHUB_USERNAME` to automatically pull stats from your own profile. |
| **LeetCode Statistics** | [`src/data/leetcode.ts`](file:///Users/shivanshomer/Desktop/shivansh-omer-portfolio/src/data/leetcode.ts) | Static fallback numbers representing your LeetCode problem counts. |
| **Achievements** | [`src/data/achievements.ts`](file:///Users/shivanshomer/Desktop/shivansh-omer-portfolio/src/data/achievements.ts) | Certifications, hackathons, and medals with associated Lucide icons. |

---

## 📧 Setting Up the Contact Form (EmailJS)

The contact form is pre-configured with React Hook Form validation and is fully ready to connect to **EmailJS** without requiring any backend code:

1.  Sign up for a free account at [emailjs.com](https://www.emailjs.com/).
2.  Add a new **Email Service** (e.g., via Gmail) and copy your **Service ID**.
3.  Design an **Email Template** using the following input fields:
    *   `{{name}}`
    *   `{{email}}`
    *   `{{message}}`
    *   *Copy your **Template ID**.*
4.  Navigate to **Account -> General** and copy your **Public Key**.
5.  Open [`src/data/emailjsConfig.ts`](file:///Users/shivanshomer/Desktop/shivansh-omer-portfolio/src/data/emailjsConfig.ts) and replace the placeholder keys:
    ```typescript
    export const emailjsConfig = {
      serviceId: "YOUR_SERVICE_ID",
      templateId: "YOUR_TEMPLATE_ID",
      publicKey: "YOUR_PUBLIC_KEY",
    };
    ```

*Note: Until these values are configured, the form will gracefully trigger a user-friendly error dialog redirecting visitors to your email directly.*

---

## 🌐 Deployment to Vercel

The project contains a pre-configured `vercel.json` file to support clean Client-Side Routing (SPA router fallback redirections).

To deploy:

1.  **Using Vercel CLI:**
    ```bash
    npm i -g vercel
    vercel
    ```
2.  **Using GitHub Integration:**
    *   Connect your repository to the Vercel Dashboard.
    *   Select **Vite** as the framework preset.
    *   Use `npm run build` as the build command and `dist` as the output directory.

---

## 📝 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to fork and customize it as your own!
