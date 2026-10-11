"use client";

import { Briefcase } from "lucide-react";
import { experience } from "@/lib/dashboard";
import { Panel, PanelHeader, SampleTag, Tag, ViewAll } from "./panel";

export function ExperiencePanel({ className, onOpen }: { className?: string; onOpen: () => void }) {
  return (
    <Panel className={className} delay={0.15}>
      <PanelHeader icon={Briefcase} title="Experience" action={<ViewAll onClick={onOpen} />} />
      <ol className="relative min-h-0 flex-1 space-y-4 overflow-hidden border-l pl-4">
        {experience.map((e) => (
          <li key={`${e.role}-${e.org}`} className="relative">
            <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-surface" />
            <h3 className="font-display text-sm font-semibold leading-tight">{e.org}</h3>
            <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
              <Tag>{e.type}</Tag>
              <span className="font-mono text-[11px] text-muted-foreground">{e.period}</span>
              {e.placeholder && <SampleTag />}
            </div>
          </li>
        ))}
      </ol>
    </Panel>
  );
}
