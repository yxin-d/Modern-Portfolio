import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-turquoise/20 blur-[100px] dark:bg-turquoise/10"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-secondary dark:text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
