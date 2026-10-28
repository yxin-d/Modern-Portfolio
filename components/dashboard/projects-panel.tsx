"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, FolderKanban, ListChecks } from "lucide-react";
import { projects, tasks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ModeSwitch } from "@/components/mode-switch";
import { Panel, PanelHeader, ViewAll } from "./panel";

const DOT: Record<string, string> = {
  "Full-Stack": "bg-primary",
  "IT & Infrastructure": "bg-accent",
  Frontend: "bg-lavender",
};

type Mode = "projects" | "tasks";

const tile =
  "tile group/tile flex min-h-0 flex-col justify-between gap-2 rounded-xl p-3 text-left short:p-2.5";

/** Title-only tiles for projects, with a switch to flip to non-project tasks. */
export function ProjectsPanel({ className }: { className?: string }) {
  const [mode, setMode] = React.useState<Mode>("projects");

  return (
    <Panel className={className} delay={0.05}>
      <PanelHeader
        icon={mode === "projects" ? FolderKanban : ListChecks}
        title={mode === "projects" ? "Projects" : "Tasks"}
        action={
          <div className="flex items-center gap-2">
            <ModeSwitch<Mode>
              size="sm"
              label="Show projects or tasks"
              value={mode}
              onChange={setMode}
              options={[
                { value: "projects", label: "Projects" },
                { value: "tasks", label: "Tasks" },
              ]}
            />
            <ViewAll href={mode === "projects" ? "/projects" : "/projects#tasks"} />
          </div>
        }
      />
      <div className="grid min-h-0 flex-1 auto-rows-fr grid-cols-2 gap-2 overflow-hidden lg:grid-cols-3">
        {mode === "projects"
          ? projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className={tile}>
                <span className="flex items-center justify-between gap-2 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className={cn("h-1.5 w-1.5 rounded-full", DOT[p.category] ?? "bg-muted")} />
                    {p.category}
                  </span>
                  <span className="font-mono">{p.year}</span>
                </span>
                <span className="flex items-end justify-between gap-2">
                  <span className="line-clamp-2 font-display text-[13px] font-semibold leading-snug">
                    {p.title}
                  </span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover/tile:-translate-y-0.5 group-hover/tile:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))
          : tasks.map((t) => (
              <Link key={t.slug} href="/projects#tasks" className={tile}>
                <span className="font-mono text-[11px] uppercase tracking-wider text-secondary dark:text-primary">
                  {t.kind}
                </span>
                <span className="line-clamp-3 font-display text-[13px] font-semibold leading-snug">
                  {t.title}
                </span>
              </Link>
            ))}
      </div>
    </Panel>
  );
}
