import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useMousePosition } from "@/hooks/useMousePosition";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Container } from "@/components/ui/Container";

import profileImg from "@/assets/images/profile.png";

export function Hero() {
  const role = useTypewriter({ words: siteConfig.roles });
  const mouse = useMousePosition();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{ x: mouse.x * 30, y: mouse.y * 30 }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[110px]"
        />
        <motion.div
          animate={{ x: mouse.x * -25, y: mouse.y * -20 }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="absolute right-[-10%] top-1/3 h-[380px] w-[380px] rounded-full bg-secondary/25 blur-[110px]"
        />
        <motion.div
          animate={{ x: mouse.x * 20, y: mouse.y * 15 }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-accent/25 blur-[110px]"
        />
        <div className="absolute inset-0 noise-overlay opacity-[0.03]" />
      </div>

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {siteConfig.status} · Open to SDE roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I'm{" "}
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-4 h-10 text-2xl font-semibold text-muted sm:text-3xl"
          >
            <span className="text-foreground">{role}</span>
            <span className="ml-1 inline-block h-7 w-[2px] animate-pulse bg-primary align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <Button onClick={() => scrollTo("#projects")}>
                <FolderGit2 size={16} />
                View Projects
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                as="a"
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                <Download size={16} />
                Download Resume
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="ghost" onClick={() => scrollTo("#contact")}>
                <Mail size={16} />
                Contact Me
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: floating glass identity card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm mt-12 lg:mt-0"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card relative rounded-[2rem] p-6 sm:p-8"
            style={{
              transform: `perspective(1000px) rotateY(${mouse.x * 6}deg) rotateX(${-mouse.y * 6}deg)`,
            }}
          >
            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-primary/25 shadow-[var(--shadow-glow-primary)]">
              <img
                src={profileImg}
                alt={siteConfig.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="font-display text-xl font-semibold">{siteConfig.name}</p>
              <p className="mt-1 text-sm text-muted">{siteConfig.status}</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6 text-center">
              <div>
                <p className="font-display text-lg font-bold text-primary">2+</p>
                <p className="text-[11px] text-muted">Major Projects</p>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-secondary">1</p>
                <p className="text-[11px] text-muted">App Published</p>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-accent">4th</p>
                <p className="text-[11px] text-muted">Year CSE</p>
              </div>
            </div>
          </motion.div>

          {/* Floating badges — hidden on xs to avoid overflow, visible from sm up */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass absolute -left-6 top-8 hidden rounded-2xl px-4 py-2.5 text-xs font-medium shadow-[var(--shadow-soft)] sm:block"
          >
            ⚡ SwiftUI · ARKit
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="glass absolute -right-4 top-28 hidden rounded-2xl px-4 py-2.5 text-xs font-medium shadow-[var(--shadow-soft)] sm:block"
          >
            🤖 Gemini AI
          </motion.div>
        </motion.div>
      </Container>

      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs tracking-wide">Scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
