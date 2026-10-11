"use client";

import { Cpu } from "lucide-react";
import { isCore, skillGroups } from "@/lib/dashboard";
import { Panel, PanelHeader, Tag, ViewAll } from "./panel";
import { TechIcon } from "./tech-icon";

export function SkillChip({ name }: { name: string }) {
  return (
    <Tag className="transition-colors hover:bg-primary/20">
      {isCore(name) && <span className="h-1.5 w-1.5 rounded-full bg-accent" title="Core strength" />}
      {name}
    </Tag>
  );
}

const ALL = [...new Set(skillGroups.flatMap((g) => g.items))];

export function SkillsPanel({ className, onOpen }: { className?: string; onOpen: () => void }) {
  return (
    <Panel className={className} delay={0.1}>
      <PanelHeader icon={Cpu} title="Tech stack" action={<ViewAll onClick={onOpen} />} />
      <div className="flex min-h-0 flex-1 flex-wrap content-start gap-1.5 overflow-hidden">
        {ALL.map((name) => (
          <TechIcon key={name} name={name} core={isCore(name)} />
        ))}
      </div>
    </Panel>
  );
}
