import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Smartphone, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { PhoneMockup, BrowserMockup } from "@/components/ui/ProjectMockup";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isMobile = project.platform === "iOS";
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card grid gap-10 rounded-[2rem] p-8 lg:grid-cols-2 lg:p-12"
    >
      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
        {isMobile ? (
          <PhoneMockup
            gradientFrom={project.cover.gradientFrom}
            gradientTo={project.cover.gradientTo}
            icon={<Smartphone className="text-white" size={28} />}
            label={project.name}
            image={project.cover.image}
          />
        ) : (
          <BrowserMockup
            gradientFrom={project.cover.gradientFrom}
            gradientTo={project.cover.gradientTo}
            icon={<Cpu className="text-white" size={26} />}
            label={project.name}
            image={project.cover.image}
          />
        )}
      </div>

      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <Badge variant="primary">{project.platform}</Badge>
          <span>{project.year}</span>
          <span>·</span>
          <span>{project.role}</span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-bold">{project.name}</h3>
        <p className="mt-2 text-base text-primary">{project.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-y border-border py-5">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            View Case Study
            <ArrowUpRight size={15} />
          </Link>
          {project.links
            .filter((link) => link.type === "github")
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground"
              >
                <GithubIcon size={15} />
                Source
              </a>
            ))}
        </div>
      </div>
    </motion.article>
  );
}
