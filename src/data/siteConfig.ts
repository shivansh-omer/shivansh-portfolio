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
  email: "shivanshomer24@gmail.com",
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
  { label: "GitHub", href: "https://github.com/shivansh-omer", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivansh-omer-b738a9278 ", icon: "linkedin" },
  { label: "LeetCode", href: "https://leetcode.com/u/shivanshomer/", icon: "leetcode" },
  { label: "Email", href: "mailto:shivanshomer24@gmail.com", icon: "mail" },
];
