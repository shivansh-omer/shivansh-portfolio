import type { NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Shivansh Omer",
  initials: "SO",
  roles: ["Software Developer", "AI Developer", "iOS Developer"],
  tagline: "Building AI-powered products and beautiful digital experiences.",
  summary:
    "I build modern web applications, AI-powered tools, and iOS applications. I enjoy solving real-world problems while focusing on clean UI, performance, and user experience.",
  status: "4th Year B.Tech CSE Student",
  location: "India",
  // TODO: replace with your real address before deploying
  email: "shivansh.omer@example.com",
  resumeUrl: "/resume.pdf",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  // TODO: replace these with your real profile URLs
  { label: "GitHub", href: "https://github.com/shivanshomer", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivanshomer", icon: "linkedin" },
  { label: "LeetCode", href: "https://leetcode.com/shivanshomer", icon: "leetcode" },
  { label: "Email", href: "mailto:shivansh.omer@example.com", icon: "mail" },
];
