import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  tone = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "primary" | "accent";
}) {
  const tones = {
    default: "bg-muted/70 text-foreground",
    primary: "bg-primary/15 text-secondary dark:text-primary",
    accent: "bg-accent/20 text-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-mono text-xs tracking-tight",
        tones[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
