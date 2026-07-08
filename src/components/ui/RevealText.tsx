import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "p";
}

export function RevealText({ children, className, delay = 0, as = "div" }: RevealTextProps) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
