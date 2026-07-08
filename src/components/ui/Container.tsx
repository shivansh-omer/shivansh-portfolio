import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div className={cn("container-page", className)} {...props}>
      {children}
    </div>
  );
}
