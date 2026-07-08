import type { Achievement, Certification } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "ncc-a",
    title: "NCC 'A' Certificate",
    issuer: "National Cadet Corps",
    year: "2022",
    description:
      "Earned for discipline, leadership training, and service commitment during the first stage of NCC.",
    icon: "medal",
  },
  {
    id: "ncc-b",
    title: "NCC 'B' Certificate",
    issuer: "National Cadet Corps",
    year: "2023",
    description:
      "Advanced NCC certification recognizing continued leadership development and physical training.",
    icon: "shield",
  },
  {
    id: "competitive-programming",
    title: "Competitive Programming",
    issuer: "Self-driven practice",
    year: "2023 – Present",
    description:
      "Consistent problem solving across arrays, graphs, trees, and dynamic programming to build interview-grade DSA fluency.",
    icon: "code",
  },
  {
    id: "app-store",
    title: "Published App Store Application",
    issuer: "Apple App Store",
    year: "2025",
    description:
      "Independently designed, built, and shipped Animal Explorer AR — a full AR education app — to the public App Store.",
    icon: "smartphone",
  },
];

export const certifications: Certification[] = [
  {
    id: "oracle-sql",
    title: "Oracle SQL",
    issuer: "Oracle",
    year: "2024",
    icon: "database",
  },
  {
    id: "ios-bootcamp",
    title: "iOS Development Bootcamp",
    issuer: "Independent Bootcamp",
    year: "2024",
    icon: "smartphone",
  },
  {
    id: "gcp-genai",
    title: "Generative AI Internship",
    issuer: "Google Cloud",
    year: "2025",
    icon: "sparkles",
  },
  {
    id: "sih",
    title: "Smart India Hackathon",
    issuer: "Government of India",
    year: "2024",
    icon: "trophy",
  },
];
