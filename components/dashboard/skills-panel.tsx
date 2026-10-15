"use client";

import { Cpu } from "lucide-react";
import { isCore, skillGroups } from "@/lib/data";
import { Panel, PanelHeader, ViewAll } from "./panel";
import { TechIcon } from "./tech-icon";

const ALL = [...new Set(skillGroups.flatMap((g) => g.items))];

export function SkillsPanel({ className }: { className?: string }) {
  return (
    <Panel className={className} delay={0.1}>
      <PanelHeader icon={Cpu} title="Tech stack" action={<ViewAll href="/skills" />} />
      <div className="grid min-h-0 flex-1 grid-cols-[repeat(auto-fill,minmax(2.75rem,1fr))] content-center gap-2 short:grid-cols-[repeat(auto-fill,minmax(2.25rem,1fr))] short:gap-1.5 tiny:grid-cols-[repeat(auto-fill,minmax(1.9rem,1fr))] tiny:gap-1 overflow-hidden">
        {ALL.map((name) => (
          <TechIcon key={name} name={name} core={isCore(name)} large />
        ))}
      </div>
    </Panel>
  );
}
