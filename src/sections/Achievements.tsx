import { motion } from "framer-motion";
import {
  Medal,
  Shield,
  Code,
  Smartphone,
  Database,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { achievements, certifications } from "@/data/achievements";

const iconMap: Record<string, LucideIcon> = {
  medal: Medal,
  shield: Shield,
  code: Code,
  smartphone: Smartphone,
  database: Database,
  sparkles: Sparkles,
  trophy: Trophy,
};

export function Achievements() {
  return (
    <section id="achievements" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Achievements & Certifications"
          title="Recognition earned outside the classroom too."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {achievements.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              >
                <GlassCard className="flex h-full gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold">{item.title}</h3>
                      <span className="font-mono text-xs text-muted">{item.year}</span>
                    </div>
                    <p className="text-sm text-primary">{item.issuer}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <h3 className="mt-20 mb-8 font-display text-2xl font-bold">Certifications</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon] ?? Sparkles;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 text-center hover:border-primary/40"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <p className="mt-4 text-sm font-semibold">{cert.title}</p>
                <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
                <p className="mt-1 font-mono text-[11px] text-muted">{cert.year}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
