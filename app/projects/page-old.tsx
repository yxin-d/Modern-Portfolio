import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectsGrid } from "@/components/projects-grid";
// import { site } from "@/lib/data";

export const metadata: Metadata = {
  // title: `Projects — ${site.name}`,
  description: "A showcase of full-stack, frontend, and IT infrastructure projects.",
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
        description="A mix of client infrastructure work and personal builds — filter by what you're after."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ProjectsGrid />
        </div>
      </section>
    </>
  );
}
