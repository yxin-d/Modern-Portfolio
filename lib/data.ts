import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

// Single source of truth for everything the portfolio shows.
// Content is based on the "Rezin Dotimas - Resume" doc. Items flagged
// `placeholder: true` are samples to replace.

/* ── Profile ──────────────────────────────────────────────────────── */

export const site = {
  name: "Rezin Dotimas",
  initials: "RD",
  role: "Junior Web Developer",
  tagline:
    "Full-stack developer building web applications with Laravel and Next.js, backed by hands-on IT support and deployment experience with real clients.",
  location: "Sison, Pangasinan, Philippines",
  availability: "Open to full-time roles",
  email: "drzen.work@gmail.com",
  // Put your CV in /public with this exact name.
  resumeUrl: "/resume.docx",
};

export const links = {
  email: { label: "drzen.work@gmail.com", href: `mailto:${site.email}` },
  github: { label: "yxin-d", href: "https://github.com/yxin-d" },
  linkedin: {
    label: "rezin-dotimas",
    href: "https://www.linkedin.com/in/rezin-dotimas-48130924b",
  },
  facebook: { label: "rzen.dotimas", href: "https://www.facebook.com/rzen.dotimas" },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export type Social = {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  handle: string;
};

export const socials: Social[] = [
  { label: "GitHub", href: links.github.href, icon: GithubIcon, handle: links.github.label },
  { label: "LinkedIn", href: links.linkedin.href, icon: LinkedinIcon, handle: "Rezin Dotimas" },
  { label: "Email", href: links.email.href, icon: Mail, handle: links.email.label },
];

/* ── Skills ───────────────────────────────────────────────────────── */

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["PHP", "TypeScript", "JavaScript", "HTML", "CSS", "SQL", "Python"] },
  {
    title: "Frameworks & Libraries",
    items: ["Laravel", "Next.js", "React", "Angular", "Tailwind CSS", "Bootstrap", "React Bits"],
  },
  { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"] },
  {
    title: "Infrastructure & Tools",
    items: ["Cloudflare", "cPanel", "Google Workspace", "Microsoft 365", "WordPress", "Git"],
  },
];

const CORE = new Set(["Laravel", "Next.js"]);
export const isCore = (name: string) => CORE.has(name);

export const techMarquee = [
  "Laravel",
  "Next.js",
  "React",
  "Angular",
  "TypeScript",
  "PHP",
  "Tailwind CSS",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Cloudflare",
  "Google Workspace",
  "WordPress",
  "cPanel",
  "Git",
];

/* ── Projects ─────────────────────────────────────────────────────── */

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  category: "Full-Stack" | "IT & Infrastructure" | "Frontend";
  gradient: [string, string];
  /** Where / for whom, e.g. "DCG Advisory · Remote". */
  context?: string;
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
    context: "Personal project · Alumni intramural softball",
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
    context: "Makerspace InnovHub OPC · Mapandan, Pangasinan",
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
    context: "DCG Advisory · Remote",
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
    context: "DCG Advisory · Gold Coast, Australia (Remote)",
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
    context: "Makerspace InnovHub OPC · Mapandan, Pangasinan",
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
    context: "Capstone · Sison, Pangasinan",
    year: "2026",
  },
];

export const projectCategories = ["All", "Full-Stack", "IT & Infrastructure", "Frontend"] as const;

/* ── Experience, education, certifications ────────────────────────── */

export type Experience = {
  role: string;
  org: string;
  location: string;
  type: "Contract" | "Internship" | "Full-time";
  period: string;
  highlights: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Tech Support",
    org: "DCG Advisory",
    location: "Australia (Remote)",
    type: "Contract",
    period: "May 2026 — Present",
    highlights: [
      "Led the migration from Microsoft 365 to Google Workspace: planned and executed the email migration, rerouted mail flows and updated DNS via Cloudflare to keep downtime minimal.",
      "Created alternate email aliases and forwards to preserve communication continuity.",
      "Built and maintain a WordPress site for the client's property and real estate management and sales from scratch, using custom themes and native plugins.",
      "Configured the company's other website to reflect a shift from financial advisory to offshoring and outsourcing services.",
      "Designed the brand logo and standardized official document templates.",
      "Provide ongoing technical support: triage, troubleshoot and resolve staff IT issues.",
    ],
    tech: ["Google Workspace", "Microsoft 365", "Cloudflare", "WordPress"],
  },
  {
    role: "Web3 Developer Intern",
    org: "Makerspace InnovHub OPC",
    location: "Mapandan, Pangasinan",
    type: "Internship",
    period: "Mar 2026 — May 2026",
    highlights: [
      "Optimized web pages with SEO best practices and built responsive, schema-enhanced comparison pages for an auto-dealer website.",
      "Contributed as Database Administrator and QA Tester on an office productivity tool built with Laravel Inertia + React and Supabase.",
      "Authored and pitched a digital workplace solution and, after approval, led the team to build it as Full-Stack Developer using Next.js and MongoDB.",
      "Took part in a Base on-chain blockchain workshop and developed a professional portfolio.",
    ],
    tech: ["Next.js", "MongoDB", "Laravel", "React", "Supabase"],
  },
];

export const education = {
  degree: "BS in Information Technology",
  school: "Northern Luzon Adventist College",
  years: "2022 — 2026",
  capstone: "NLM: Connect",
};

export const certifications = [
  { title: "Base Workshop Participant", issuer: "Base.ph" },
  { title: "Foundational C# with Microsoft", issuer: "freeCodeCamp" },
];

/* ── KPIs ─────────────────────────────────────────────────────────── */

export const stats = {
  projects: projects.length,
  experienceMonths: 6,
  clients: 2,
  technologies: new Set(skillGroups.flatMap((g) => g.items)).size,
};

/* ── Client feedback ──────────────────────────────────────────────── */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  placeholder?: boolean;
};

export const testimonialsEmbedUrl = "";

export const testimonials: Testimonial[] = [
  {
    quote: "Rezin has worked with me for six months, starting 21 April 2026, as a fresh graduate with no professional experience.In that time he took on the Pace Property Group website, handling the WordPress site and the technical side behind it, and he has been quick and reliable on updates, including the Unit 119 price change. He works out how to do things himself, explains what he has done clearly, and deals with technical problems without needing hand-holding. I'm happy to keep working with him.",
    name: "Adam Stewart",
    role: "Director, Pace Property Group / DCG Advisory",
    placeholder: true,
  },
  {
    quote: "An excellent intern who approaches every task with thoroughness and accuracy. Rezin completes assignments well within deadlines and shows great resourcefulness under minimal supervision. Combined with their perfect punctuality, teamwork, and professionalism, he has a very bright career ahead..",
    name: "Carl Estrada",
    role: "Associate Software Engineer, Makerspace InnovHub OPC",
    placeholder: true,
  },
  // {
  //   quote: "A third one rounds out the rotation — mention results or reliability.",
  //   name: "Client name",
  //   role: "Role, Company",
  //   placeholder: true,
  // },
];
