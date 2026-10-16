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
    slug: "pace-property-group-website",
    title: "Pace Property Group WordPress Website",
    summary:
      "Dynamic WordPress property-listings site for a Gold Coast real estate agency, with an editor-friendly, PHP-locked theme so non-technical staff can update it without breaking anything.",
    description:
      "Developed a dynamic WordPress property listings site for a Gold Coast real estate agency, creating editable property and careers interfaces so non-technical staff can publish updates without code. Implemented responsive design and SEO best practices to improve discoverability and user experience.",
    tags: ["WordPress", "PHP", "ACF", "Custom Theme", "SEO", "Responsive"],
    category: "Full-Stack",
    gradient: ["lime", "turquoise"],
    context: "DCG Advisory · Gold Coast, Australia (Remote)",
    year: "2026",
  },
  {
    slug: "questflow",
    title: "QuestFlow",
    summary:
      "Gamified OJT management platform with leaderboards, group chat, task verification and AI-assisted learning.",
    description:
      "Designed and built QuestFlow, a gamified OJT management platform (Next.js/MongoDB) featuring idle alerts, group chat, leaderboards, task management and verification, point-based rewards, public challenges, and AI-assisted learning. Led feature design and implementation to increase trainee engagement and simplify supervisor oversight.",
    tags: ["Next.js", "MongoDB", "AI-assisted", "Gamification"],
    category: "Full-Stack",
    gradient: ["gold", "coral"],
    context: "Makerspace InnovHub OPC · Mapandan, Pangasinan",
    year: "2026",
  },
  {
    slug: "m365-to-google-workspace-migration",
    title: "Microsoft 365 → Google Workspace Migration",
    summary:
      "Led an email migration, rerouting mail flows and updating Cloudflare DNS with minimal downtime.",
    description:
      "Planned and executed an organization's migration from Microsoft 365 to Google Workspace, rerouting mail flows and updating DNS records via Cloudflare to keep downtime minimal. Created alternate email aliases and forwards to preserve communication continuity.",
    tags: ["Google Workspace", "Microsoft 365", "Cloudflare", "DNS", "Email Migration"],
    category: "IT & Infrastructure",
    gradient: ["turquoise", "teal"],
    context: "DCG Advisory · Remote",
    year: "2026",
  },
  {
    slug: "nlm-connect",
    title: "NLM: Connect",
    summary:
      "Secure web-based communication platform for a private religious organization. Capstone project.",
    description:
      "Designed and implemented a secure, web-based communication platform for a private religious organization with announcements, messaging, member management, and event scheduling. Built a responsive UI and role-based access controls to improve member engagement and streamline event coordination.",
    tags: ["PHP", "MySQL", "Role-based access", "Responsive UI"],
    category: "Full-Stack",
    gradient: ["lavender", "turquoise"],
    context: "Capstone · Sison, Pangasinan",
    year: "2025",
  },
  {
    slug: "auto-dealer-comparison-pages",
    title: "Auto-Dealer Comparison Pages",
    summary:
      "SEO-optimized, schema-enhanced and responsive comparison pages for an auto-dealer website.",
    description:
      "Optimized web pages applying SEO best practices and implemented responsive, schema-enhanced comparison pages for an auto-dealer website during my internship.",
    tags: ["SEO", "Schema markup", "Responsive"],
    category: "Frontend",
    gradient: ["coral", "gold"],
    context: "Makerspace InnovHub OPC · Mapandan, Pangasinan",
    year: "2026",
  },
  {
    slug: "office-productivity-tool",
    title: "Office Productivity Tool",
    summary:
      "Internal productivity tool built with Laravel Inertia, React and Supabase; I handled the database and QA.",
    description:
      "Contributed as Database Administrator and Quality Assurance Tester on an office productivity tool built with Laravel Inertia + React and Supabase.",
    tags: ["Laravel", "Inertia", "React", "Supabase", "QA"],
    category: "Full-Stack",
    gradient: ["night", "teal"],
    context: "Makerspace InnovHub OPC · Mapandan, Pangasinan",
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
  award: "Best in OJT",
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

// SAMPLE entries — replace with real client feedback (or a Trustpilot feed).
export const testimonials: Testimonial[] = [
  {
    quote: "Replace this with real feedback from a client. Short, specific quotes work best.",
    name: "Client name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote: "Add a second testimonial here. The slideshow shows one at a time.",
    name: "Client name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote: "A third one rounds out the rotation — mention results or reliability.",
    name: "Client name",
    role: "Role, Company",
    placeholder: true,
  },
];
