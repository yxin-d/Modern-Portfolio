"use client";

import { AuroraBackground } from "@/components/aurora-background";
import { ThemeToggle } from "@/components/theme-toggle";
import { owner } from "@/lib/dashboard";
import { CertificationsPanel, EducationPanel } from "./education-panel";
import { ExperiencePanel } from "./experience-panel";
import { FloatingNav } from "./floating-nav";
import { StatusDot } from "./panel";
import { ProfilePanel } from "./profile-panel";
import { ProjectsPanel } from "./projects-panel";
import { SkillsPanel } from "./skills-panel";
import { TestimonialsPanel } from "./testimonials-panel";

export function Dashboard() {
  return (
    <div className="relative isolate min-h-dvh lg:h-[max(100dvh,44rem)] lg:overflow-hidden">
      <AuroraBackground />

      <div className="flex h-full min-h-dvh flex-col gap-3 p-3 lg:min-h-0">
        {/* floating nav row */}
        <header className="relative z-10 flex h-12 shrink-0 items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">
              {owner.initials}
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight xl:block">
              {owner.name}
            </span>
          </div>
          <FloatingNav />
          <div className="flex items-center gap-3">
            <span className="glass hidden items-center gap-2 rounded-full px-3 py-2 text-xs font-medium xl:inline-flex">
              <StatusDot />
              {owner.availability}
            </span>
            <ThemeToggle />
          </div>
        </header>

        <main className="grid min-h-0 flex-1 grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.8fr)]">
          <ProfilePanel className="md:col-span-2 lg:col-span-4 lg:row-span-2" />
          <ProjectsPanel className="md:col-span-2 lg:col-span-8" />
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
