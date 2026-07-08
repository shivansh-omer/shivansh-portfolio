import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface MockupProps {
  gradientFrom: string;
  gradientTo: string;
  icon: ReactNode;
  label: string;
  image?: string;
}

/** iPhone-style device frame for the AR / iOS project. */
export function PhoneMockup({ gradientFrom, gradientTo, icon, label, image }: MockupProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 4, rotateX: -2 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: "1200px" }}
      className="relative mx-auto w-[180px] max-w-full sm:w-[220px]"
    >
      <div className="relative rounded-[2.2rem] border-[6px] border-zinc-900 bg-zinc-900 shadow-[var(--shadow-soft-lg)]">
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-zinc-900" />
        <div
          className="relative flex h-[440px] w-full flex-col items-center justify-center overflow-hidden rounded-[1.7rem]"
          style={{ background: `linear-gradient(160deg, ${gradientFrom}, ${gradientTo})` }}
        >
          {image ? (
            <img
              src={image}
              alt={label}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <>
              <div className="absolute inset-0 noise-overlay opacity-[0.06]" />
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-md">
                {icon}
              </div>
              <p className="mt-4 px-6 text-center text-sm font-semibold text-white/90">{label}</p>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/** Browser / dashboard style frame for the web / AI project. */
export function BrowserMockup({ gradientFrom, gradientTo, icon, label, image }: MockupProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft-lg)]"
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-card px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <div
        className="relative flex h-[280px] w-full flex-col items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(150deg, ${gradientFrom}18, ${gradientTo}18)` }}
      >
        {image ? (
          <img
            src={image}
            alt={label}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <>
            <div className="absolute inset-0 noise-overlay opacity-[0.04]" />
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-[var(--shadow-glow-primary)]"
              style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
            >
              {icon}
            </div>
            <p className="text-sm font-semibold mt-4 text-foreground">{label}</p>
          </>
        )}
      </div>
    </motion.div>
  );
}
