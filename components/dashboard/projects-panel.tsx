"use client";

import { FolderKanban } from "lucide-react";
import { projects } from "@/lib/dashboard";
import { cn } from "@/lib/utils";
import { Panel, PanelHeader, SampleTag, Tag, ViewAll } from "./panel";

const DOT: Record<string, string> = {
  "Full-Stack": "bg-primary",
  "IT & Infrastructure": "bg-accent",
  Frontend: "bg-lavender",
};

export function ProjectsPanel({
  className,
  onOpen,
}: {
  className?: string;
  onOpen: (slug?: string) => void;
}) {
  return (
    <Panel className={className} delay={0.05}>
      <PanelHeader
        icon={FolderKanban}
        title="Projects"
        action={<ViewAll onClick={() => onOpen()} />}
      />
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2">
        {projects.map((p) => (
          <button
            key={p.slug}
            type="button"
            disabled={p.placeholder}
            onClick={() => onOpen(p.slug)}
            className={cn(
              "tile flex min-h-0 cursor-pointer flex-col rounded-xl p-3 text-left disabled:cursor-default",
              p.placeholder && "tile-dashed opacity-70",
            )}
          >
            <span className="flex items-center justify-between gap-2 text-[11px] text-muted-foreground">
              <span className="flex min-w-0 items-center gap-1.5">
                <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", DOT[p.category] ?? "bg-muted")} />
                <span className="truncate">{p.category}</span>
              </span>
              {p.placeholder ? <SampleTag /> : <span className="font-mono">{p.year}</span>}
            </span>
            <span className="mt-2 line-clamp-2 [@media(max-height:820px)]:line-clamp-1 font-display text-[13px] font-semibold leading-snug">
              {p.title}
            </span>
            {p.tags.length > 0 && (
              <span className="mt-auto flex flex-wrap gap-1 pt-2 [@media(max-height:820px)]:hidden">
                {p.tags.slice(0, 2).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
                {p.tags.length > 2 && <Tag>+{p.tags.length - 2}</Tag>}
              </span>
            )}
          </button>
        ))}
      </div>
    </Panel>
  );
}
