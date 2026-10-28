import { ChevronDown } from "lucide-react";
import type { Task } from "@/lib/data";
import { Badge } from "./ui/badge";

/** Procedural work (migration, configuration, deployment): shows the steps instead of a gallery. */
export function TaskCard({ task }: { task: Task }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-wider text-secondary dark:text-primary">
          {task.kind}
        </p>
        <span className="font-mono text-[11px] text-muted-foreground">{task.year}</span>
      </div>
      <h3 className="mt-2 font-display text-lg font-semibold">{task.title}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{task.context}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{task.summary}</p>

      <details className="group mt-4 rounded-xl border border-border bg-background/40 open:bg-background/60">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium [&::-webkit-details-marker]:hidden">
          Procedure · {task.steps.length} steps
          <ChevronDown
            className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180"
            aria-hidden
          />
        </summary>
        <ol className="space-y-2.5 px-4 pb-4 pt-1">
          {task.steps.map((step, n) => (
            <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-[11px] text-foreground">
                {n + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </details>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {task.tools.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </article>
  );
}
