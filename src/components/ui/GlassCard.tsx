import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-3xl p-6 transition-all duration-300",
        hover && "hover:border-primary/40 hover:-translate-y-1 hover:shadow-[var(--shadow-soft-lg)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
