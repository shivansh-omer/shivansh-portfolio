import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="No corporate title yet — just a track record of shipping."
          description="Here's the real timeline: what I learned, what I built with it, and what's next."
        />

        <div className="relative mt-16">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[23px]" />

          <ul className="flex flex-col gap-10">
            {experience.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                className="relative flex gap-6 pl-0 sm:gap-8"
              >
                <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border bg-background sm:h-12 sm:w-12">
                  {item.status === "completed" ? (
                    <CheckCircle2 size={18} className="text-success" />
                  ) : (
                    <Loader2 size={18} className="animate-spin text-primary" />
                  )}
                </div>

                <div className="glass-card flex-1 rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="font-mono text-xs text-muted">{item.period}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
