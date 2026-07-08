import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="Education" title="Where the fundamentals came from." />

        <div className="mt-14 flex flex-col gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
            >
              <GlassCard className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap size={26} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{item.institution}</h3>
                  <p className="mt-1 text-muted">{item.degree}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted">
                    <span className="font-mono">{item.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  </div>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start gap-1 rounded-2xl bg-card px-6 py-4 md:items-center">
                  <p className="font-display text-3xl font-bold gradient-text">{item.score}</p>
                  <p className="text-xs text-muted">{item.scoreLabel}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
