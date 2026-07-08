import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Server,
  Terminal,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { 
  SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiCss, 
  SiNodedotjs, SiExpress, SiMongodb, SiCplusplus, 
  SiPython, SiSwift, SiGit, SiGithub, 
  SiXcode, SiPostman, SiFigma
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava, FaDatabase } from "react-icons/fa";
import { MdOutlineViewInAr } from "react-icons/md";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills, skillCategories } from "@/data/skills";
import type { SkillCategory } from "@/types";
import { cn } from "@/lib/utils";

const categoryIcons: Record<SkillCategory, LucideIcon> = {
  Frontend: Layout,
  Backend: Server,
  "Programming Languages": Terminal,
  Mobile: Smartphone,
  "Tools & Platforms": Wrench,
};

const skillIcons: Record<string, React.ElementType> = {
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  sql: FaDatabase,
  cpp: SiCplusplus,
  java: FaJava,
  python: SiPython,
  swift: SiSwift,
  arkit: MdOutlineViewInAr,
  realitykit: MdOutlineViewInAr,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  xcode: SiXcode,
  postman: SiPostman,
  figma: SiFigma,
};

const levelDots: Record<string, number> = {
  Learning: 1,
  Proficient: 2,
  Advanced: 3,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? skills
        : skills.filter((skill) => skill.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="skills" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for building real things."
          description="From pixel-level frontend polish to AR frameworks and backend plumbing — here's what I reach for."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {(["All", ...skillCategories] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => {
              const Icon = skillIcons[skill.icon] || categoryIcons[skill.category];
              const dots = levelDots[skill.level];
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card group cursor-default rounded-2xl p-5 hover:border-primary/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon size={18} />
                  </div>
                  <p className="mt-4 text-sm font-semibold">{skill.name}</p>
                  <div className="mt-3 flex gap-1" aria-label={`Level: ${skill.level}`}>
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className={cn(
                          "h-1 flex-1 rounded-full",
                          i < dots ? "bg-primary" : "bg-border"
                        )}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
