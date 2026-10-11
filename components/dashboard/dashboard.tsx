"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Briefcase, Cpu, FolderKanban, LayoutDashboard, Mail, PanelsTopLeft } from "lucide-react";
import { AuroraBackground } from "@/components/aurora-background";
import { ThemeToggle } from "@/components/theme-toggle";
import { owner } from "@/lib/dashboard";
import { cn } from "@/lib/utils";
import { DetailDialog, type Detail } from "./detail-dialog";
import { CertificationsPanel, EducationPanel } from "./education-panel";
import { ExperiencePanel } from "./experience-panel";
import { StatusDot } from "./panel";
import { ProfilePanel } from "./profile-panel";
import { ProjectsPanel } from "./projects-panel";
import { SkillsPanel } from "./skills-panel";
import { TestimonialsPanel } from "./testimonials-panel";

const railItem =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-primary/15 hover:text-foreground";

export function Dashboard() {
  const [detail, setDetail] = useState<Detail>(null);
  const close = useCallback(() => setDetail(null), []);

  return (
    <div className="relative isolate min-h-dvh lg:h-[max(100dvh,44rem)] lg:overflow-hidden">
      <AuroraBackground />

      <div className="flex h-full min-h-dvh gap-3 p-3 lg:min-h-0">
        {/* left rail */}
        <nav
          aria-label="Dashboard"
          className="glass hidden w-14 shrink-0 flex-col items-center gap-2 rounded-2xl py-3 lg:flex"
        >
          <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">
            {owner.initials}
          </span>
          <span className={cn(railItem, "bg-primary/15 text-foreground")} title="Overview" aria-current="page">
            <LayoutDashboard className="h-4 w-4" />
          </span>
          <button type="button" className={railItem} title="Projects" aria-label="Projects" onClick={() => setDetail({ kind: "projects" })}>
            <FolderKanban className="h-4 w-4" />
          </button>
          <button type="button" className={railItem} title="Skills" aria-label="Skills" onClick={() => setDetail({ kind: "skills" })}>
            <Cpu className="h-4 w-4" />
          </button>
          <button type="button" className={railItem} title="Experience" aria-label="Experience" onClick={() => setDetail({ kind: "experience" })}>
            <Briefcase className="h-4 w-4" />
          </button>
          <Link href="/contact" className={railItem} title="Contact" aria-label="Contact">
            <Mail className="h-4 w-4" />
          </Link>
          <Link href="/classic" className={cn(railItem, "mt-auto")} title="Classic view" aria-label="Classic view">
            <PanelsTopLeft className="h-4 w-4" />
          </Link>
        </nav>

        <div className="flex min-w-0 flex-1 flex-col gap-3">
          {/* top bar */}
          <header className="glass flex h-14 shrink-0 items-center justify-between gap-3 rounded-2xl px-4">
            <p className="truncate font-mono text-xs text-muted-foreground">
              <span className="text-secondary dark:text-primary">~/portfolio</span> / rezin-dotimas
            </p>
            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-2 rounded-full bg-surface/70 px-3 py-1.5 text-xs font-medium sm:inline-flex">
                <StatusDot />
                {owner.availability}
              </span>
              <Link href="/classic" className="text-xs text-muted-foreground hover:text-foreground lg:hidden">
                Classic
              </Link>
              <ThemeToggle />
            </div>
          </header>

          {/* grid */}
          <main className="grid min-h-0 flex-1 grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.8fr)]">
            <ProfilePanel className="md:col-span-2 lg:col-span-4 lg:row-span-2" />
            <ProjectsPanel
              className="md:col-span-2 lg:col-span-8"
              onOpen={(slug) => setDetail({ kind: "projects", slug })}
            />
            <SkillsPanel className="lg:col-span-4" onOpen={() => setDetail({ kind: "skills" })} />
            <ExperiencePanel className="lg:col-span-4" onOpen={() => setDetail({ kind: "experience" })} />
            <EducationPanel className="lg:col-span-4" />
            <CertificationsPanel className="lg:col-span-3" />
            <TestimonialsPanel className="md:col-span-2 lg:col-span-5" />
          </main>
        </div>
      </div>

      <DetailDialog detail={detail} onClose={close} />
    </div>
  );
}
