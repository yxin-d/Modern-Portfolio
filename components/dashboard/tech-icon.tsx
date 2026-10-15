"use client";

import type { ComponentType } from "react";
import { Database, Sparkles } from "lucide-react";
import { FaCss3Alt, FaMicrosoft } from "react-icons/fa6";
import {
  SiAngular, SiBootstrap, SiCloudflare, SiCpanel, SiGit, SiGoogle, SiHtml5, SiJavascript,
  SiLaravel, SiMongodb, SiMysql, SiNextdotjs, SiPhp, SiPostgresql, SiPython, SiReact,
  SiSupabase, SiTailwindcss, SiTypescript, SiWordpress,
} from "react-icons/si";
import { cn } from "@/lib/utils";

type Icon = ComponentType<{ className?: string }>;

const ICONS: Record<string, Icon> = {
  PHP: SiPhp,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: FaCss3Alt,
  SQL: Database,
  Python: SiPython,
  Laravel: SiLaravel,
  "Next.js": SiNextdotjs,
  React: SiReact,
  Angular: SiAngular,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "React Bits": Sparkles,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Supabase: SiSupabase,
  Cloudflare: SiCloudflare,
  cPanel: SiCpanel,
  "Google Workspace": SiGoogle,
  "Microsoft 365": FaMicrosoft,
  WordPress: SiWordpress,
  Git: SiGit,
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
