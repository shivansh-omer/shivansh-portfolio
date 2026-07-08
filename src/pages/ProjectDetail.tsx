import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { PhoneMockup, BrowserMockup } from "@/components/ui/ProjectMockup";
import { RevealText } from "@/components/ui/RevealText";

const linkIcon = {
  github: GithubIcon,
  demo: ExternalLink,
  "case-study": ExternalLink,
  appstore: Smartphone,
};

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  const isMobile = project.platform === "iOS";
  const otherProject = projects.find((p) => p.id !== project.id);

  return (
    <article className="pb-28 pt-36 sm:pt-40">
      <Container className="max-w-4xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
        >
          <ArrowLeft size={15} />
          Back to projects
        </Link>

        <RevealText className="mt-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
            <Badge variant="primary">{project.platform}</Badge>
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.role}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{project.name}</h1>
          <p className="mt-3 text-lg text-primary">{project.tagline}</p>
        </RevealText>

        <RevealText delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {project.links.map((link) => {
            const Icon = linkIcon[link.type];
            return (
              <Button key={link.href} as="a" href={link.href} target="_blank" rel="noreferrer" variant="secondary" size="sm">
                <Icon size={14} />
                {link.label}
              </Button>
            );
          })}
        </RevealText>

        <RevealText delay={0.15} className="mt-10">
          <div className="mx-auto max-w-sm">
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
                icon={<ExternalLink className="text-white" size={24} />}
                label={project.name}
                image={project.cover.image}
              />
            )}
          </div>
        </RevealText>

        <RevealText delay={0.2} className="mt-14 grid grid-cols-3 gap-4">
          {project.stats.map((stat) => (
            <GlassCard key={stat.label} hover={false} className="text-center">
              <p className="font-display text-xl font-bold sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </GlassCard>
          ))}
        </RevealText>

        <div className="mt-16 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <Section title="The Problem">
          <p className="leading-relaxed text-muted">{project.problem}</p>
        </Section>

        <Section title="The Solution">
          <p className="leading-relaxed text-muted">{project.solution}</p>
        </Section>

        <Section title="Key Features">
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </Section>

        {project.architecture && (
          <Section title="Architecture">
            <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
              {project.architecture.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-2 sm:flex-1"
                >
                  <div className="glass-card w-full rounded-xl px-4 py-3 text-center text-sm font-medium">
                    {step}
                  </div>
                  {index < project.architecture!.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="hidden flex-shrink-0 text-muted sm:block"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </Section>
        )}

        <Section title="Challenges & How I Solved Them">
          <div className="flex flex-col gap-5">
            {project.challenges.map((challenge) => (
              <GlassCard key={challenge.title} hover={false}>
                <h3 className="font-semibold">{challenge.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{challenge.description}</p>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section title="Results">
          <ul className="flex flex-col gap-2.5">
            {project.results.map((result) => (
              <li key={result} className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-success" />
                {result}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Lessons Learned">
          <ul className="flex flex-col gap-2.5">
            {project.lessonsLearned.map((lesson) => (
              <li key={lesson} className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {lesson}
              </li>
            ))}
          </ul>
        </Section>

        {otherProject && (
          <div className="mt-24 border-t border-border pt-10">
            <p className="text-sm text-muted">Next project</p>
            <Link
              to={`/projects/${otherProject.slug}`}
              className="mt-2 flex items-center justify-between gap-4 text-2xl font-bold hover:text-primary"
            >
              {otherProject.name}
              <ArrowRight size={22} />
            </Link>
          </div>
        )}
      </Container>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <RevealText className="mt-16">
      <h2 className="mb-5 font-display text-2xl font-bold">{title}</h2>
      {children}
    </RevealText>
  );
}
