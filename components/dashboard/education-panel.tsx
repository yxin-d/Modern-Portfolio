"use client";

import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/lib/dashboard";
import { Panel, PanelHeader, Tag } from "./panel";

export function EducationPanel({ className }: { className?: string }) {
  return (
    <Panel className={className} delay={0.2}>
      <PanelHeader icon={GraduationCap} title="Education" />
      <div className="min-h-0 flex-1 overflow-hidden">
        <p className="font-display text-sm font-semibold leading-snug">{education.degree}</p>
        <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
          {education.school} · {education.years}
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          <Tag>Capstone: {education.capstone}</Tag>
          <Tag className="bg-accent/25 text-foreground">{education.award}</Tag>
        </div>
      </div>
    </Panel>
  );
}

export function CertificationsPanel({ className }: { className?: string }) {
  return (
    <Panel className={className} delay={0.22}>
      <PanelHeader icon={Award} title="Certifications" />
      <ul className="min-h-0 flex-1 space-y-2 overflow-hidden">
        {certifications.map((c) => (
          <li key={c.title} className="flex items-start gap-2">
            <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
            <span className="min-w-0 text-xs leading-snug">
              {c.title}
              <span className="block font-mono text-[10.5px] text-muted-foreground">{c.issuer}</span>
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
