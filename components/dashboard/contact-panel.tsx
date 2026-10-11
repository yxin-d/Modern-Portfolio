"use client";

import Link from "next/link";
import { Mail, Send } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { links, owner } from "@/lib/dashboard";
import { cn } from "@/lib/utils";
import { FacebookIcon, GitHubIcon, LinkedInIcon } from "./brand-icons";
import { Panel, PanelHeader } from "./panel";

const TILES = [
  { key: "email", ...links.email, Icon: Mail },
  { key: "github", ...links.github, Icon: GitHubIcon },
  { key: "linkedin", ...links.linkedin, Icon: LinkedInIcon },
  { key: "facebook", ...links.facebook, Icon: FacebookIcon },
];

export function ContactPanel({ className }: { className?: string }) {
  return (
    <Panel className={className} delay={0.3}>
      <PanelHeader icon={Send} title="Let's talk" />
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-2">
        {TILES.map(({ key, label, href, Icon }) => (
          <a
            key={key}
            href={href}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="tile flex min-w-0 items-center gap-2 rounded-xl px-3 py-2"
          >
            <Icon className="h-4 w-4 shrink-0 text-secondary dark:text-primary" />
            <span className="min-w-0 truncate text-xs">{label}</span>
          </a>
        ))}
      </div>
      <div className="mt-3 flex shrink-0 flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] text-muted-foreground">
          Hiring for <span className="text-foreground">{owner.targetRoles[0]}</span>{" "}
          &amp; more?
        </p>
        <Link href="/contact" className={cn(buttonVariants({ variant: "primary", size: "sm" }))}>
          <Send className="h-3.5 w-3.5" aria-hidden />
          Send a message
        </Link>
      </div>
    </Panel>
  );
}
