"use client";

import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { certifications, education, externalHref } from "@/lib/data";
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
          {/* <Tag className="bg-accent/25 text-foreground">{education.award}</Tag> */}
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
          <li key={c.title}>
            {c.url ? (
              <a
                href={externalHref(c.url)}
                target="_blank"
                rel="noopener noreferrer"
                title="View certificate"
                className="group/cert -mx-1.5 flex items-start gap-2 rounded-lg px-1.5 py-1 transition-colors hover:bg-primary/10"
              >
                <CertBody title={c.title} issuer={c.issuer} />
                <ExternalLink
                  className="mt-0.5 h-3 w-3 shrink-0 text-muted-foreground transition-colors group-hover/cert:text-foreground"
                  aria-label="Opens certificate"
                />
              </a>
            ) : (
              <div className="flex items-start gap-2">
                <CertBody title={c.title} issuer={c.issuer} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </Panel>
  );
}

function CertBody({ title, issuer }: { title: string; issuer: string }) {
  return (
    <>
      <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
      <span className="min-w-0 flex-1 text-xs leading-snug">
        {title}
        <span className="block font-mono text-[10.5px] text-muted-foreground">{issuer}</span>
      </span>
    </>
  );
}
