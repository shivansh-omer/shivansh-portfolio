import type { Project } from "@/types";
import animalExplorerImage from "@/assets/AnimalExplorer.png";
import codeAtlasImage from "@/assets/codeAtlas.png";

export const projects: Project[] = [
  {
    id: "animal-explorer-ar",
    slug: "animal-explorer-ar",
    name: "Animal Explorer AR",
    tagline: "An augmented-reality field guide that turns any room into a zoo.",
    description:
      "An educational AR application built for children to explore animals in 3D through their own environment — placing interactive, sound-accurate creatures in the real world.",
    platform: "iOS",
    year: "2025",
    role: "Solo iOS Developer & Designer",
    cover: { gradientFrom: "#6366F1", gradientTo: "#06B6D4", image: animalExplorerImage },
    techStack: ["SwiftUI", "RealityKit", "ARKit", "MVVM", "Combine", "AVFoundation"],
    features: [
      "30+ animals rendered as detailed interactive 3D models",
      "Real recorded animal sounds tied to each species",
      "AR placement in the user's real environment via plane detection",
      "Food Chain Builder — a drag-and-connect ecosystem mini-game",
      "Quiz System that tests recall of species and habitats",
      "Reward system to keep young learners engaged over repeat sessions",
    ],
    problem:
      "Most educational apps for children about wildlife are flat, static, and easy to lose interest in within minutes. Kids retain more when they can physically interact with a subject rather than swipe through pictures of it.",
    solution:
      "I designed an AR-first experience where every animal is a full 3D model children can place on their floor, walk around, resize, and interact with. Learning is would through play — sound, motion, and a food-chain game — rather than through reading text.",
    challenges: [
      {
        title: "Stable AR plane tracking on entry-level devices",
        description:
          "Early prototypes had models jitter or drift on lower-end hardware. I tuned ARKit's plane detection confidence thresholds and added light anchoring smoothing to keep models visually stable during motion.",
      },
      {
        title: "Asset weight vs. visual fidelity",
        description:
          "30+ detailed 3D models risked bloating load times and memory. I set up on-demand loading per-animal with compressed USDZ assets so only the active model is fully resident in memory.",
      },
      {
        title: "Designing for a non-reading audience",
        description:
          "Because the core audience is young children, UI decisions leaned on icons, color, sound cues, and large tap targets over text-heavy instructions.",
      },
    ],
    architecture: [
      "SwiftUI Views",
      "MVVM ViewModels (Combine)",
      "RealityKit Scene & Anchors",
      "ARKit Session (Plane Detection)",
      "AVFoundation Audio Engine",
    ],
    results: [
      "Published and live on the App Store as an independent solo project",
      "Smooth 60fps AR interaction across supported devices",
      "Positive feedback on the Food Chain Builder as a repeat-play feature",
    ],
    lessonsLearned: [
      "How to structure a mid-size SwiftUI app with MVVM so views stay declarative and testable",
      "Real-world tradeoffs between 3D asset fidelity and mobile memory constraints",
      "Designing interaction patterns for users who can't yet read fluently",
    ],
    stats: [
      { label: "Animals", value: "30+" },
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Platform", value: "iOS / ARKit" },
    ],
    links: [
      { label: "View on GitHub", href: "https://github.com/shivanshomer/animal-explorer-ar", type: "github" },
      { label: "App Store", href: "#", type: "appstore" },
    ],
    featured: true,
  },
  {
    id: "codeatlas-ai",
    slug: "codeatlas-ai",
    name: "CodeAtlas AI",
    tagline: "Point it at a GitHub repo. Get back an architecture, explained.",
    description:
      "An AI-powered GitHub repository analyzer that detects a codebase's architecture and technologies, then uses Gemini to explain individual files in plain language through an interactive explorer.",
    platform: "AI / Web",
    year: "2025",
    role: "Full Stack Developer",
    cover: { gradientFrom: "#A855F7", gradientTo: "#6366F1", image: codeAtlasImage },
    techStack: ["React", "TypeScript", "Node.js", "GitHub API", "Gemini AI", "Tailwind CSS"],
    features: [
      "Repository analysis from just a GitHub URL",
      "Automatic architecture pattern detection",
      "Technology & framework detection across the codebase",
      "AI-generated, plain-language file explanations",
      "Interactive file explorer synced to the AI analysis",
      "Live GitHub API integration for metadata, structure, and commit context",
      "Gemini AI integration for natural-language reasoning about code",
    ],
    problem:
      "Understanding an unfamiliar codebase is one of the slowest parts of onboarding onto a project, contributing to open source, or reviewing a candidate's work — most repos have no map, just files.",
    solution:
      "CodeAtlas AI ingests a repository through the GitHub API, builds a structural picture of the project, and pairs it with Gemini-generated explanations so a developer can explore any file and immediately understand what it does and how it fits into the whole.",
    challenges: [
      {
        title: "Turning a raw file tree into an architecture diagram",
        description:
          "Repos don't come with a labeled architecture. I built heuristics based on folder conventions, config files, and import graphs to infer patterns like MVC, component-based, or service-oriented structures.",
      },
      {
        title: "Keeping AI explanations grounded in the real file",
        description:
          "Naively prompting an LLM with file contents produced generic summaries. I scoped prompts with surrounding context — imports, sibling files, and repo-level metadata — so explanations reference the actual codebase instead of guessing.",
      },
      {
        title: "GitHub API rate limits at scale",
        description:
          "Analyzing large repos file-by-file risked hitting API limits fast. I batched requests and cached repository metadata to stay within limits while keeping the explorer responsive.",
      },
    ],
    architecture: [
      "GitHub Repository",
      "GitHub API",
      "Backend (Node.js)",
      "Gemini AI",
      "Interactive Dashboard",
    ],
    results: [
      "Successfully analyzes multi-language repositories end-to-end",
      "Cuts the time to form a first mental model of a new codebase",
      "Interactive explorer makes architecture exploration self-serve",
    ],
    lessonsLearned: [
      "Prompt engineering matters more than model choice for grounded, non-generic AI output",
      "Designing around third-party API rate limits from day one saves painful rewrites later",
      "Visualizing abstract structure (architecture) is a UX problem as much as a data problem",
    ],
    stats: [
      { label: "AI Model", value: "Gemini" },
      { label: "Data Source", value: "GitHub API" },
      { label: "Output", value: "Live Dashboard" },
    ],
    links: [
      { label: "View on GitHub", href: "https://github.com/shivanshomer/codeatlas-ai", type: "github" },
      { label: "Live Demo", href: "#", type: "demo" },
    ],
    featured: true,
  },
];
