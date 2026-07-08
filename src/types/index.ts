export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "leetcode" | "mail" | "twitter" | "instagram";
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Programming Languages"
  | "Mobile"
  | "Tools & Platforms";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: string;
  level: "Learning" | "Proficient" | "Advanced";
}

export interface ProjectLink {
  label: string;
  href: string;
  type: "github" | "demo" | "case-study" | "appstore";
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  platform: "iOS" | "Web" | "AI / Web";
  year: string;
  role: string;
  cover: {
    gradientFrom: string;
    gradientTo: string;
    image?: string;
  };
  techStack: string[];
  features: string[];
  problem: string;
  solution: string;
  challenges: { title: string; description: string }[];
  architecture?: string[];
  results: string[];
  lessonsLearned: string[];
  stats: ProjectStat[];
  links: ProjectLink[];
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
  status: "completed" | "in-progress";
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreLabel: string;
  location: string;
  highlights: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  icon: string;
}

export interface GitHubStats {
  username: string;
  followers: number;
  publicRepos: number;
  totalStars: number;
  topLanguages: { name: string; percentage: number; color: string }[];
}

export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  totalProblems: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  contestRating: number;
  favoriteTopics: string[];
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}
