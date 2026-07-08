import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedInIcon, LeetCodeIcon } from "@/components/ui/BrandIcons";
import { socialLinks, siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  leetcode: LeetCodeIcon,
  mail: Mail,
  twitter: GithubIcon,
  instagram: GithubIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <a href="#home" className="font-display text-2xl font-bold gradient-text">
            {siteConfig.initials}
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              );
            })}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm text-muted transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>

          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. Designed &amp; built from scratch.
          </p>
        </div>
      </Container>
    </footer>
  );
}
