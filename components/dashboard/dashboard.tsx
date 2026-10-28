"use client";

import { AuroraBackground } from "@/components/aurora-background";
import { SiteHeader } from "@/components/site-header";
import { CertificationsPanel, EducationPanel } from "./education-panel";
import { ExperiencePanel } from "./experience-panel";
import { ProfilePanel } from "./profile-panel";
import { ProjectsPanel } from "./projects-panel";
import { SkillsPanel } from "./skills-panel";
import { TasksPanel } from "./tasks-panel";
import { TestimonialsPanel } from "./testimonials-panel";

export function Dashboard() {
  return (
    <div className="relative isolate min-h-dvh lg:h-[max(100dvh,44rem)] lg:overflow-hidden">
      <AuroraBackground />

      <div className="flex h-full min-h-dvh flex-col gap-3 p-3 pb-24 md:pb-3 lg:min-h-0">
        <SiteHeader />

        <main className="grid min-h-0 flex-1 grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.8fr)]">
          <ProfilePanel className="md:col-span-2 lg:col-span-4 lg:row-span-2" />
          <ProjectsPanel className="md:col-span-1 lg:col-span-5" />
          <TasksPanel className="md:col-span-1 lg:col-span-3" />
          <SkillsPanel className="lg:col-span-4" />
          <ExperiencePanel className="lg:col-span-4" />
          <EducationPanel className="lg:col-span-4" />
          <CertificationsPanel className="lg:col-span-3" />
          <TestimonialsPanel className="md:col-span-2 lg:col-span-5" />
        </main>
      </div>
    </div>
  );
}
