import type { Task } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Title-only entry for non-project work (migration, configuration, deployment). */
export function TaskCard({ task, layout = "grid" }: { task: Task; layout?: "grid" | "list" }) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-border bg-surface transition-colors hover:border-primary",
        layout === "grid" ? "flex flex-col justify-between gap-6 p-5" : "flex items-center justify-between gap-4 px-5 py-4",
      )}
    >
      <h3 className="font-display text-base font-semibold leading-snug">{task.title}</h3>
      <p className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-secondary dark:text-primary">
        {task.kind}
      </p>
    </article>
  );
}
