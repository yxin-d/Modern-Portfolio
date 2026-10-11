"use client";

import { Cpu } from "lucide-react";
import { isCore, skillGroups } from "@/lib/dashboard";
import { Panel, PanelHeader, Tag, ViewAll } from "./panel";

const SHOWN = 3;

export function SkillChip({ name }: { name: string }) {
  return (
    <Tag className="transition-colors hover:bg-primary/20">
      {isCore(name) && <span className="h-1.5 w-1.5 rounded-full bg-accent" title="Core strength" />}
      {name}
    </Tag>
  );
}

export function SkillsPanel({
  className,
  onOpen,
}: {
  className?: string;
  onOpen: () => void;
}) {
  return (
    <Panel className={className} delay={0.1}>
      <PanelHeader icon={Cpu} title="Tech stack" action={<ViewAll onClick={onOpen} />} />
      <dl className="min-h-0 flex-1 space-y-2 overflow-hidden">
        {skillGroups.map((g) => (
          <div key={g.title} className="flex items-start gap-3">
            <dt className="w-[74px] shrink-0 pt-1 text-[11px] font-medium leading-tight text-muted-foreground">
              {g.title}
            </dt>
            <dd className="flex min-w-0 flex-1 flex-wrap gap-1">
              {g.items.slice(0, SHOWN).map((name) => (
                <SkillChip key={name} name={name} />
              ))}
              {g.items.length > SHOWN && <Tag>+{g.items.length - SHOWN}</Tag>}
            </dd>
          </div>
        ))}
      </dl>
    </Panel>
  );
}
