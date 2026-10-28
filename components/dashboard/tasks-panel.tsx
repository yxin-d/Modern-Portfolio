import Link from "next/link";
import { ArrowUpRight, ListChecks } from "lucide-react";
import { tasks } from "@/lib/data";
import { Panel, PanelHeader, ViewAll } from "./panel";

/** Non-project work (migration, configuration, deployment) as its own overview card. */
export function TasksPanel({ className }: { className?: string }) {
  return (
    <Panel className={className} delay={0.1}>
      <PanelHeader icon={ListChecks} title="Tasks" action={<ViewAll href="/projects#tasks" />} />
      <div className="grid min-h-0 flex-1 auto-rows-fr gap-2 overflow-hidden">
        {tasks.map((t) => (
          <Link
            key={t.slug}
            href={`/projects#tasks`}
            className="tile group/tile flex min-h-0 flex-col justify-between justify-center gap-0.5 rounded-xl px-3 py-2 text-left"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-secondary dark:text-primary">
              {t.kind}
            </span>
            <span className="flex items-start justify-between gap-2">
              <span className="line-clamp-2 font-display text-[12.5px] font-semibold leading-tight">{t.title}</span>
              <ArrowUpRight
                className="mt-0.5 h-3 w-3 shrink-0 text-muted-foreground transition-transform group-hover/tile:-translate-y-0.5 group-hover/tile:translate-x-0.5"
                aria-hidden
              />
            </span>
          </Link>
        ))}
      </div>
    </Panel>
  );
}
