"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import type { Task } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Tag } from "@/components/dashboard/panel";

/** Non-project work. Collapsed: title + kind. Expanded: what was done, how, and with which tools. */
export function TaskCard({ task, layout = "grid" }: { task: Task; layout?: "grid" | "list" }) {
  const [open, setOpen] = React.useState(false);
  const id = `task-${task.slug}`;

  return (
    <article
      className={cn(
        "rounded-2xl border border-border bg-surface transition-colors hover:border-primary",
        open && layout === "grid" && "sm:col-span-2 lg:col-span-3",
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex w-full cursor-pointer text-left",
          layout === "grid" && !open
            ? "flex-col justify-between gap-6 p-5"
            : "items-center justify-between gap-4 px-5 py-4",
        )}
      >
        <h3 className="font-display text-base font-semibold leading-snug">{task.title}</h3>
        <span className="flex shrink-0 items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-wider text-secondary dark:text-primary">
            {task.kind}
          </span>
          <ChevronDown
            className={cn("h-4 w-4 text-muted-foreground transition-transform", open && "rotate-180")}
            aria-hidden
          />
        </span>
      </button>

      {open && (
        <div id={id} className="grid gap-6 border-t border-border px-5 pb-5 pt-4 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm leading-relaxed text-muted-foreground">{task.summary}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {task.context} · {task.year}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {task.tools.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">How it was done</h4>
            <ol className="mt-2 space-y-2 text-sm leading-relaxed">
              {task.steps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-xs text-secondary dark:text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </article>
  );
}
