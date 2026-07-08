import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (project) =>
        project.name.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section id="projects" className="py-28 sm:py-36">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured Work"
            title="Projects I've taken from idea to shipped."
            description="Two projects, two very different stacks — an AR education app and an AI-powered developer tool."
          />
          <div className="relative w-full sm:w-64">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech…"
              aria-label="Search projects"
              className="glass w-full rounded-full py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-10">
          {filtered.length > 0 ? (
            filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <p className="py-16 text-center text-muted">
              No projects match “{query}”. Try a different search.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
