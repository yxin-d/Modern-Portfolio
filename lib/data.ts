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
      "cPanel",
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
  "cPanel",
  "WordPress",
  "Git",
  "Linux",
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
    slug: "google-workspace-migration",
    title: "Google Workspace Migration & Infrastructure Hardening",
    summary:
      "End-to-end migration from Microsoft to Google Workspace, including DNS configuration, email aliases, and security hardening.",
    description:
      "Executed a complete data migration for an organization, transferring emails, documents, and media to Google Workspace. Provisioned email aliases for branch offices, configured Cloudflare DNS records for email routing and DKIM authentication, and deployed custom WordPress sites via cPanel. Troubleshot complex post-migration email issues to ensure business continuity.",
    tags: ["Google Workspace", "Cloudflare DNS", "cPanel", "WordPress", "DKIM", "Email Migration"],
    category: "IT & Infrastructure",
    gradient: ["turquoise", "teal"],
    year: "2026",
  },
  {
    slug: "productivity-tools-suite",
    title: "Office Productivity Tools Suite",
    summary:
      "Developed two full-stack office productivity tools using Next.js and Laravel during internship.",
    description:
      "Built two applications: a Digital Queue Management system and an Intern Management system, managing both frontend and backend. Integrated MailerSend API for notifications, AI functionalities, and real‑time updates via WebSockets/Socket.io and Redis. Managed data across Supabase, MongoDB, and GridFS. Used Tailwind CSS, ShadCN UI, and React Bits for responsive design. Collaborated via GitHub and Discord, and pre‑hosted on Vercel.",
    tags: ["Next.js", "Laravel", "WebSockets", "Redis", "Supabase", "MongoDB", "Tailwind CSS"],
    category: "Full-Stack",
    gradient: ["gold", "coral"],
    year: "2026",
  },
  {
    slug: "wordpress-custom-theme",
    title: "Pace Property Group WordPress Website",
    summary:
      "Architected a WordPress site with an editor‑friendly, PHP‑locked theme structure for non‑technical clients.",
    description:
      "Built a custom WordPress theme tailored for non‑technical client use, ensuring the theme structure is locked down in PHP to prevent accidental breakage while providing an intuitive editor experience. This involved creating custom post types, flexible content blocks, and a robust admin interface, all while maintaining performance and security.",
    tags: ["WordPress", "PHP", "Custom Theme", "Editor‑Friendly"],
    category: "Frontend",
    gradient: ["lavender", "turquoise"],
    year: "2025",
  },
  {
    slug: "religious-org-information-system",
    title: "NLM: Connect, A web-based communication platform for a private religious organization",
    summary:
      "Web-based communication platform for a private religious organization. Capstone project.",
    description:
      "Developed a comprehensive information system to manage members, events, and communications for a private religious organization. The system included features for scheduling, reporting, and member engagement. Used PHP and MySQL, and was recognized for its practical impact. Also awarded Best in OJT for this and other projects.",
    tags: ["PHP", "MySQL", "Information System", "Web Development"],
    category: "Full-Stack",
    gradient: ["lime", "gold"],
    year: "2025",
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