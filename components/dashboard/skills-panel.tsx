"use client";

import { Cpu } from "lucide-react";
import { isCore, skillGroups } from "@/lib/dashboard";
import { Panel, PanelHeader, ViewAll } from "./panel";
import { TechIcon } from "./tech-icon";

const ALL = [...new Set(skillGroups.flatMap((g) => g.items))];

export function SkillsPanel({ className }: { className?: string }) {
  return (
    <Panel className={className} delay={0.1}>
      <PanelHeader icon={Cpu} title="Tech stack" action={<ViewAll href="/skills" />} />
      <div className="flex min-h-0 flex-1 flex-wrap content-start gap-1.5 overflow-hidden">
        {ALL.map((name) => (
          <TechIcon key={name} name={name} core={isCore(name)} />
        ))}
      </div>
    </Panel>
  );
}
