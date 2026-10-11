import {
  Mail,
  Code2,
  Server,
  Cloud,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const site = {
  name: "Rezin Dotimas",
  role: "Junior Web3 Developer & Technological Virtual Assistant",
  location: "Sison, Pangasinan, Philippines",
  tagline:
    "I build and maintain the systems businesses run on — from the interfaces people click through to the DNS records quietly keeping their mail alive.",
  about: [
    "I'm an IT graduate with a strong foundation in full-stack development and IT support. I've managed live client environments end-to-end, from building full-stack applications with Next.js and Laravel to configuring DNS, email migrations, and Google Workspace administration.",
    "Most of my hands-on experience comes from my internship and current role, where I developed office productivity tools, migrated email systems, and deployed WordPress sites. I enjoy solving problems that span both code and infrastructure, and I'm comfortable translating technical fixes into plain-language updates for non-technical stakeholders.",
    "I'm looking for a role that combines development and IT support — where my breadth of skills is an asset, not a compromise."
  ],
  resumeUrl: "public\\resume.docx",
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
  icon: LucideIcon;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    items: ["TypeScript", "JavaScript", "PHP", "Java", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: Server,
    items: ["Next.js", "Angular", "React Native", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    icon: Wrench,
    items: ["Laravel", "Node.js", "REST APIs", "MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    title: "IT & Infrastructure",
    icon: Cloud,
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
  liveUrl?: string;
  repoUrl?: string;
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
    title: "WordPress Custom Theme with PHP‑Locked Structure",
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
    title: "Information System for Religious Organization",
    summary:
      "Built an information system for a private religious organization as a capstone project.",
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