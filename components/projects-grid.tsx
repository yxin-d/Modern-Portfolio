"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, List } from "lucide-react";
import { projects, projectCategories, tasks } from "@/lib/data";
import { ModeSwitch } from "./mode-switch";
import { ProjectCard, ProjectRow } from "./project-card";
import { TaskCard } from "./task-card";
import { cn } from "@/lib/utils";

type Mode = "projects" | "tasks";
type Layout = "grid" | "list";

/** Projects page body: Projects | Tasks switch, grid | list layout, category filter. */
export function ProjectsGrid() {
  const [mode, setMode] = React.useState<Mode>("projects");
  const [layout, setLayout] = React.useState<Layout>("grid");
  const [active, setActive] = React.useState<(typeof projectCategories)[number]>("All");

  // /projects#tasks opens the Tasks view (used by the overview panel).
  React.useEffect(() => {
    const sync = () => setMode(window.location.hash === "#tasks" ? "tasks" : "projects");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const changeMode = (m: Mode) => {
    setMode(m);
    history.replaceState(null, "", m === "tasks" ? "#tasks" : window.location.pathname);
  };

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const gridCls = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ModeSwitch<Mode>
          label="Show projects or tasks"
          value={mode}
          onChange={changeMode}
          options={[
            { value: "projects", label: `Projects · ${projects.length}` },
            { value: "tasks", label: `Tasks · ${tasks.length}` },
          ]}
        />
        <div role="group" aria-label="Layout" className="inline-flex rounded-full border border-border bg-muted/60 p-1">
          {(
            [
              { value: "grid", label: "Grid layout", Icon: LayoutGrid },
              { value: "list", label: "List layout", Icon: List },
            ] as const
          ).map(({ value, label, Icon }) => (
            <button
              key={value}
              type="button"
              aria-label={label}
              aria-pressed={layout === value}
              onClick={() => setLayout(value)}
              className={cn(
                "flex h-8 w-9 cursor-pointer items-center justify-center rounded-full transition-colors",
                layout === value ? "bg-surface text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4" aria-hidden />
            </button>
          ))}
        </div>
      </div>

      {mode === "projects" ? (
        <>
          <div role="tablist" aria-label="Filter projects by category" className="mt-6 flex flex-wrap gap-2">
            {projectCategories.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(category)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter-active"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{category}</span>
                </button>
              );
            })}
          </div>

          <div className={cn("mt-6", layout === "grid" ? gridCls : "flex flex-col gap-4")}>
            {filtered.map((project, i) =>
              layout === "grid" ? (
                <ProjectCard key={project.slug} project={project} index={i} />
              ) : (
                <ProjectRow key={project.slug} project={project} index={i} />
              ),
            )}
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-muted-foreground">
              Nothing here yet — check another category.
            </p>
          )}
        </>
      ) : (
        <>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            Migrations, configuration and deployment don&apos;t leave a product behind, so they&apos;re
            listed here as tasks.
          </p>
          <div className={cn("mt-6", layout === "grid" ? gridCls : "flex flex-col gap-3")}>
            {tasks.map((t) => (
              <TaskCard key={t.slug} task={t} layout={layout} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
