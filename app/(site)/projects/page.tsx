import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectsGrid } from "@/components/projects-grid";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Projects & Tasks — ${site.name}`,
  description: "Web projects I built, plus the migration, configuration and deployment work behind them.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title={
          <>
            Projects <span className="text-gradient">&amp; tasks.</span>
          </>
        }
        description="Things I built, and the migration, configuration and deployment work behind them. Use the switch to move between the two."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ProjectsGrid />
        </div>
      </section>
    </>
  );
}
