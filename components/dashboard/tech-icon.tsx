"use client";

import type { ComponentType } from "react";
import { Network, Puzzle, ShieldCheck, Sparkles } from "lucide-react";
import { FaCss3Alt, FaJava, FaMicrosoft } from "react-icons/fa6";
import {
  SiAngular, SiCloudflare, SiCpanel, SiGit, SiGithub, SiGoogle, SiHtml5, SiJavascript,
  SiLaravel, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPostman,
  SiPython, SiReact, SiSupabase, SiTailwindcss, SiTypescript, SiWordpress,
} from "react-icons/si";
import { cn } from "@/lib/utils";

type Icon = ComponentType<{ className?: string }>;

const ICONS: Record<string, Icon> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  Java: FaJava,
  Python: SiPython,
  HTML5: SiHtml5,
  CSS3: FaCss3Alt,
  "Next.js": SiNextdotjs,
  Angular: SiAngular,
  "React Native": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "React Bits": Sparkles,
  Laravel: SiLaravel,
  "Node.js": SiNodedotjs,
  "REST APIs": Network,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Supabase: SiSupabase,
  "Google Workspace Admin": SiGoogle,
  "Cloudflare DNS": SiCloudflare,
  cPanel: SiCpanel,
  "WordPress CMS": SiWordpress,
  "SPF / DKIM / DMARC": ShieldCheck,
  "Microsoft 365": FaMicrosoft,
  ACF: Puzzle,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
};

/** Icon-only tech tile; the name is available as a tooltip and to screen readers. */
export function TechIcon({ name, core, large }: { name: string; core?: boolean; large?: boolean }) {
  const Icon = ICONS[name];
  return (
    <span
      title={name}
      role="img"
      aria-label={name}
      className={cn(
        "tile relative flex items-center justify-center text-foreground/80 hover:text-foreground",
        large ? "h-11 w-full rounded-xl short:h-8 tiny:h-7 short:rounded-lg" : "h-8 w-8 rounded-lg",
        !Icon && "font-mono text-[10px]",
      )}
    >
      {Icon ? <Icon className={large ? "h-5 w-5 short:h-4 short:w-4" : "h-4 w-4"} /> : name.slice(0, 2)}
      {core && <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-accent" />}
    </span>
  );
}
