import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", icon: "react", level: "Advanced" },
  { name: "TypeScript", category: "Frontend", icon: "typescript", level: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", icon: "tailwind", level: "Advanced" },
  { name: "HTML5", category: "Frontend", icon: "html5", level: "Advanced" },
  { name: "CSS3", category: "Frontend", icon: "css3", level: "Advanced" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "nodejs", level: "Proficient" },
  { name: "Express", category: "Backend", icon: "express", level: "Proficient" },
  { name: "MongoDB", category: "Backend", icon: "mongodb", level: "Proficient" },
  { name: "SQL", category: "Backend", icon: "sql", level: "Proficient" },

  // Programming Languages
  { name: "C++", category: "Programming Languages", icon: "cpp", level: "Advanced" },
  { name: "Java", category: "Programming Languages", icon: "java", level: "Proficient" },
  { name: "Python", category: "Programming Languages", icon: "python", level: "Advanced" },

  // Mobile
  { name: "SwiftUI", category: "Mobile", icon: "swift", level: "Advanced" },
  { name: "ARKit", category: "Mobile", icon: "arkit", level: "Proficient" },
  { name: "RealityKit", category: "Mobile", icon: "realitykit", level: "Proficient" },

  // Tools
  { name: "Git", category: "Tools & Platforms", icon: "git", level: "Advanced" },
  { name: "GitHub", category: "Tools & Platforms", icon: "github", level: "Advanced" },
  { name: "VS Code", category: "Tools & Platforms", icon: "vscode", level: "Advanced" },
  { name: "Xcode", category: "Tools & Platforms", icon: "xcode", level: "Proficient" },
  { name: "Postman", category: "Tools & Platforms", icon: "postman", level: "Proficient" },
  { name: "Figma", category: "Tools & Platforms", icon: "figma", level: "Proficient" },
];

export const skillCategories = [
  "Frontend",
  "Backend",
  "Programming Languages",
  "Mobile",
  "Tools & Platforms",
] as const;
