"use client";

import type { ComponentType } from "react";
import {
  Blocks, Database, KeyRound, Layers, LayoutTemplate, Mail, MonitorSmartphone, Plug, Radio,
  RefreshCcw, Sparkles, Webhook,
} from "lucide-react";
import { FaCss3Alt, FaJava, FaMicrosoft } from "react-icons/fa6";
import {
  SiAngular, SiBootstrap, SiCloudflare, SiCpanel, SiDotnet, SiGit, SiGithub, SiGithubactions,
  SiGoogle, SiHtml5, SiInertia, SiJavascript, SiLaravel, SiLivewire, SiMongodb, SiMysql,
  SiNextdotjs, SiPhp, SiPostgresql, SiPython, SiReact, SiRedis, SiSupabase, SiTailwindcss,
  SiTypescript, SiVercel, SiWordpress,
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
  Java: FaJava,
  "C#": SiDotnet,
  Livewire: SiLivewire,
  "Inertia.js": SiInertia,
  Zustand: Layers,
  Redis: SiRedis,
  GitHub: SiGithub,
  Vercel: SiVercel,
  MailerSend: Mail,
  ACF: Blocks,
  "REST APIs": Webhook,
  MVC: LayoutTemplate,
  "Responsive Design": MonitorSmartphone,
  WebSockets: Radio,
  Agile: RefreshCcw,
  "OAuth 2.0": KeyRound,
  "third-party API integration": Plug,
  "CI/CD": SiGithubactions,
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
