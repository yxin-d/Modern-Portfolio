import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const site = {
  name: "Rezin Dotimas",
  role: "Junior Web3 Developer & Technological Virtual Assistant",
  location: "Sison, Pangasinan, Philippines",
  tagline:
    "I build and maintain the systems businesses run on — from the interfaces people click through to the DNS records quietly keeping their mail alive.",
  email: "drzen.work@gmail.com",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export type TechCategory = {
  title: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "Java", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "Angular", "React Native", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    items: ["Laravel", "Node.js", "REST APIs", "MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    title: "IT & Infrastructure",
    items: [
      "Google Workspace Admin",
      "Cloudflare DNS",
      "WordPress CMS",
      "SPF / DKIM / DMARC",
    ],
  },
];

export const techMarquee = [
  "Next.js",
  "Laravel",
  "Angular",
  "TypeScript",
  "PHP",
  "Tailwind CSS",
  "Google Workspace",
  "Cloudflare",
  "MySQL",
  "PostgreSQL",
  "WordPress",
  "Git",
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  category: "Full-Stack" | "IT & Infrastructure" | "Frontend";
  gradient: [string, string];
  /** Deployed site — shows a "View live" button. */
  liveUrl?: string;
  /** Demo (video, sandbox, prototype) for projects with no public site — "View demo". */
  demoUrl?: string;
  /** Source code — "View source". */
  repoUrl?: string;
  /** Screenshots: put files in /public/projects/<slug>/ and list them like "/projects/<slug>/1.png". */
  images?: string[];
  year: string;
};

export const projects: Project[] = [
  {
    slug: "scorebunt",
    title: "ScoreBunt — Live Softball Scoring App",
    summary:
      "Live scoring and lineup tracker for intramural softball, replacing the pen-and-paper scoresheet. Built solo and deployed on Vercel.",
    description:
      "Built and deployed a live softball scoring web app for alumni intramural games. The batting order is derived from the nine field positions, so there is no separate lineup to maintain, and mid-game substitutions support re-entry the way casual intramural rules allow. An autoscore baserunner tracker advances every runner when a batter reaches base, with a confirmation step and undo on any scored run. Rosters, lineups, and match history persist on the device, so a full game can be scored from a single phone with no backend or sign-in.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Vercel"],
    category: "Frontend",
    gradient: ["turquoise", "lime"],
    year: "2026",
  },
  {
    slug: "questflow-resource-management",
    title: "QuestFlow — Gamified Resource Management Platform",
    summary:
      "Pitched, designed, and led the build of a platform that matches idle interns to unassigned work through skill matching and real-time availability.",
    description:
      "Authored and pitched a digital workplace solution during an internship and, after approval, led the team implementing it as Full-Stack Developer. The platform pairs skill-based task matching with real-time availability tracking so available talent and unassigned work find each other instead of getting lost in chat threads. Delivered three role-scoped surfaces (admin, supervisor, worker) with role-based permissions, covering quests, guilds, leaderboards, a help desk, learning modules, and file uploads. A live availability board runs over a custom Node WebSocket server, pushing status changes to supervisor dashboards without a refresh.",
    tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "WebSockets", "Tailwind CSS"],
    category: "Full-Stack",
    gradient: ["gold", "coral"],
    year: "2026",
  },
  {
    slug: "google-workspace-migration",
    title: "Google Workspace Migration & Infrastructure Hardening",
    summary:
      "End-to-end migration from Microsoft 365 to Google Workspace, including DNS configuration, email aliases, and security hardening.",
    description:
      "Executed a complete data migration for an organization, transferring emails, documents, and media to Google Workspace. Provisioned email aliases for branch offices, configured Cloudflare DNS records for email routing and DKIM authentication, and deployed custom WordPress sites via cPanel. Troubleshot complex post-migration email issues to ensure business continuity.",
    tags: ["Google Workspace", "Cloudflare DNS", "cPanel", "WordPress", "DKIM", "Email Migration"],
    category: "IT & Infrastructure",
    gradient: ["turquoise", "teal"],
    year: "2026",
  },
  {
    slug: "wordpress-custom-theme",
    title: "Pace Property Group WordPress Website",
    summary:
      "A WordPress site for a Gold Coast real estate agency, with an editor-friendly theme structure that lets non-technical staff publish without touching code.",
    description:
      "Built a custom WordPress theme for a property management and sales business, structured so the layout is locked down in PHP while content stays fully editable. Created custom post types for property listings, flexible ACF-backed content blocks, and a structured admin interface covering listings and careers, so staff can publish updates without risking the template. Implemented responsive design and SEO best practices to improve discoverability.",
    tags: ["WordPress", "PHP", "ACF", "Custom Theme", "SEO"],
    category: "Frontend",
    gradient: ["lavender", "turquoise"],
    year: "2026",
  },
  {
    slug: "queue-management-system",
    title: "Digital Queue Management System",
    summary:
      "Contributed as Database Administrator and QA Tester on an office productivity tool built during an internship.",
    description:
      "Worked on an internal office productivity application built with Laravel Inertia, React, and Supabase. Owned the database layer — schema design, queries, and data integrity — and ran quality assurance testing across the application, reporting and verifying fixes ahead of handover. Integrated MailerSend for transactional notifications and collaborated with the team through GitHub, with builds pre-hosted on Vercel.",
    tags: ["Laravel", "Inertia", "React", "Supabase", "MailerSend", "QA Testing"],
    category: "Full-Stack",
    gradient: ["coral", "gold"],
    year: "2026",
  },
  {
    slug: "nlm-connect",
    title: "NLM Connect — Communication Portal (Capstone)",
    summary:
      "A web portal centralizing announcements, messaging, and events for a regional church organization spanning six provinces.",
    description:
      "Developed a web-based communication portal as a five-person capstone team, replacing fragmented announcements scattered across social media and group chats. Built role-based access for four user types — admin, worker, communication representative, and public — with a centralized announcement feed organized by department and date, structured role-based messaging, a calendar-based event board, and a public inquiry form routed to the right office. Delivered using an iterative waterfall approach, from stakeholder interviews through unit, integration, and system testing.",
    tags: ["Laravel", "Livewire", "Blade", "Tailwind CSS", "MySQL", "MVC"],
    category: "Full-Stack",
    gradient: ["lime", "gold"],
    year: "2026",
  },
];

export const projectCategories = ["All", "Full-Stack", "IT & Infrastructure", "Frontend"] as const;

export type Social = {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  handle: string;
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/yxin-d", icon: GithubIcon, handle: "@Yxin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rezin-dotimas-48130924b/", icon: LinkedinIcon, handle: "Rezin Dotimas" },
  { label: "Email", href: "mailto:drzen.work@gmail.com", icon: Mail, handle: "drzen.work@gmail.com" },
];