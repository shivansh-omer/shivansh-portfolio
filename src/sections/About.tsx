import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Smartphone, Repeat, Puzzle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const storyPoints = [
  {
    icon: GraduationCap,
    title: "CS student, by way of curiosity",
    text: "Currently a 4th year B.Tech CSE student — but the real education has come from shipping things, not just studying for exams.",
  },
  {
    icon: Sparkles,
    title: "I'd rather build than just learn",
    text: "Every new concept I pick up — AI, AR, backend systems — turns into a working product within weeks, not just a tutorial I finished.",
  },
  {
    icon: Smartphone,
    title: "Shipped to the App Store",
    text: "Animal Explorer AR went from an idea to a published, independent iOS application — built solo, end to end.",
  },
  {
    icon: Puzzle,
    title: "AI as a tool, not a buzzword",
    text: "CodeAtlas AI puts Gemini to work explaining real codebases — I care about AI that solves a concrete problem, not novelty.",
  },
  {
    icon: Repeat,
    title: "Never the same stack twice",
    text: "React, SwiftUI, Node — I pick the tool the problem actually needs, and I'm comfortable being a beginner again when it doesn't.",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Not just studying computer science — practicing it."
          description="A quick look at how I got here, and what actually drives the way I build."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {storyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
              className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <GlassCard className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <point.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
