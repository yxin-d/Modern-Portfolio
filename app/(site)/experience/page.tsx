import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Experience — ${site.name}`,
  description: "Professional and internship experience.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <span className="text-gradient">put the work in.</span>
          </>
        }
        description="IT support for client accounts and full-stack development from my internship. Hover or tap a role for the details."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ExperienceTimeline />
        </div>
      </section>
    </>
  );
}
