import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectsGrid } from "@/components/projects-grid";
import { TaskCard } from "@/components/task-card";
import { site, tasks } from "@/lib/data";

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
  description: "Web projects I built, plus the migrations, configuration and deployment work behind them.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title={
          <>
            Projects &amp; <span className="text-gradient">case studies.</span>
          </>
        }
        description="Things I built, from client sites to personal apps. Migrations, configuration and deployment work is listed below as tasks."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ProjectsGrid />
        </div>
      </section>

      <section id="tasks" className="scroll-mt-24 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-secondary dark:text-primary">
            Tasks &amp; procedures
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            The work with no product to show.
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Migrations, configuration and deployment don&apos;t leave a screenshot behind, so
            these list the procedure I followed instead.
          </p>
          <div className="mt-8 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tasks.map((t) => (
              <TaskCard key={t.slug} task={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
