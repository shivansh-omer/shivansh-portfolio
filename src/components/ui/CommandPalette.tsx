import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { navLinks, siteConfig, socialLinks } from "@/data/siteConfig";

interface CommandItem {
  label: string;
  hint: string;
  action: () => void;
  icon: React.ReactNode;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const items: CommandItem[] = useMemo(
    () => [
      ...navLinks.map((link) => ({
        label: `Go to ${link.label}`,
        hint: "Section",
        icon: <ArrowRight size={15} />,
        action: () => {
          document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
        },
      })),
      {
        label: "Open GitHub",
        hint: "External",
        icon: <GithubIcon size={15} />,
        action: () => {
          const href = socialLinks.find((l) => l.label === "GitHub")?.href || "https://github.com/shivansh-omer";
          window.open(href, "_blank");
        },
      },
      {
        label: "Open LinkedIn",
        hint: "External",
        icon: <LinkedInIcon size={15} />,
        action: () => {
          const href = socialLinks.find((l) => l.label === "LinkedIn")?.href || "https://www.linkedin.com/in/shivansh-omer-b738a9278";
          window.open(href, "_blank");
        },
      },
      {
        label: "Email Me",
        hint: "Contact",
        icon: <Mail size={15} />,
        action: () => (window.location.href = `mailto:${siteConfig.email}`),
      },
      {
        label: "Download Resume",
        hint: "PDF",
        icon: <FileText size={15} />,
        action: () => window.open(siteConfig.resumeUrl, "_blank"),
      },
    ],
    []
  );

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const runCommand = (action: () => void) => {
    action();
    setOpen(false);
    setQuery("");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/50 backdrop-blur-sm pt-[15vh]"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card w-full max-w-lg overflow-hidden rounded-2xl"
            role="dialog"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search size={16} className="text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search…"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
              />
              <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted">
                ESC
              </kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-muted">No results</li>
              )}
              {filtered.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => runCommand(item.action)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-card"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-primary">{item.icon}</span>
                      {item.label}
                    </span>
                    <span className="text-xs text-muted">{item.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
