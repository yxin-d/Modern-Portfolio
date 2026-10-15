"use client";

import { Download, Mail, MapPin } from "lucide-react";
import BlurText from "@/components/react-bits/BlurText";
import CountUp from "@/components/react-bits/CountUp";
import { TypingText } from "@/components/typing-text";
import { buttonVariants } from "@/components/ui/button";
import { links, site, stats } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FacebookIcon, GitHubIcon, LinkedInIcon } from "./brand-icons";
import { Panel, StatusDot } from "./panel";

const SOCIALS = [
  { label: "GitHub", href: links.github.href, Icon: GitHubIcon },
  { label: "LinkedIn", href: links.linkedin.href, Icon: LinkedInIcon },
  { label: "Facebook", href: links.facebook.href, Icon: FacebookIcon },
  { label: "Email", href: links.email.href, Icon: Mail },
];

const KPIS = [
  { label: "Projects", value: stats.projects, suffix: "" },
  { label: "Experience", value: stats.experienceMonths, suffix: "mo" },
  { label: "Clients", value: stats.clients, suffix: "" },
  { label: "Technologies", value: stats.technologies, suffix: "" },
];

export function ProfilePanel({ className }: { className?: string }) {
  return (
    <Panel className={cn("justify-between gap-3 p-5", className)}>
      <div>
        <div className="flex items-center justify-between gap-3 [@media(max-height:820px)]:hidden">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary font-display text-base font-bold text-primary-foreground transition-transform duration-300 group-hover:rotate-3">
            {site.initials}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-surface/70 px-3 py-1.5 text-xs font-medium">
            <StatusDot />
            {site.availability}
          </span>
        </div>

        <p className="mt-5 font-mono text-xs [@media(max-height:820px)]:mt-0 text-muted-foreground">
          <span className="text-secondary dark:text-primary">~/portfolio</span> $ whoami
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold leading-[1.05] tracking-tight xl:text-[2.6rem]">
          Hi, I&apos;m <span className="text-gradient">{site.name}</span>
        </h1>
        <div className="mt-3 font-mono text-sm">
          <TypingText text={site.role} className="text-foreground" />
        </div>

        <BlurText
          text={site.tagline}
          delay={40}
          animateBy="words"
          direction="top"
          className="mt-4 text-sm leading-relaxed text-muted-foreground [@media(max-height:820px)]:hidden"
        />
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden />
            {site.location}
          </span>
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="tile flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <a
          href={site.resumeUrl}
          download
          className={cn(buttonVariants({ variant: "primary", size: "sm" }), "w-full sm:w-auto")}
        >
          <Download className="h-4 w-4" aria-hidden />
          Download resume
        </a>

        <dl className="grid grid-cols-4 gap-2 border-t pt-4">
          {KPIS.map(({ label, value, suffix }, i) => (
            <div key={label}>
              <dd className="font-display text-2xl font-bold leading-none tabular-nums">
                <CountUp to={value} duration={1.6} delay={0.2 + i * 0.08} />
                {suffix && (
                  <span className="ml-0.5 font-sans text-xs font-medium text-muted-foreground">
                    {suffix}
                  </span>
                )}
              </dd>
              <dt className="mt-1.5 text-[11px] text-muted-foreground">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </Panel>
  );
}
