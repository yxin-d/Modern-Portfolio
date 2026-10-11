import { projects as baseProjects, site, techStack } from "@/lib/data";

// Content for the single-screen dashboard. Real project write-ups come from
// lib/data.ts; anything marked `placeholder: true` is sample content to replace.

export const owner = {
  name: site.name,
  initials: "RD",
  role: "IT Support | Web3 Developer",
  tagline: site.tagline,
  location: "Pangasinan, Philippines",
  availability: "Open to full-time roles",
  email: site.email,
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

/* ── Skills ───────────────────────────────────────────────────────── */

export type SkillGroup = { title: string; items: string[] };

const CORE = new Set(["Laravel", "Next.js"]);
const EXTRAS: Record<string, string[]> = {
  Frontend: ["React Bits"],
  "IT & Infrastructure": ["Microsoft 365", "ACF"],
};

export const skillGroups: SkillGroup[] = [
  ...techStack.map((g) => ({
    title: g.title,
    // core strengths first, then the rest in their original order
    items: [...g.items, ...(EXTRAS[g.title] ?? [])].sort(
      (a, b) => Number(CORE.has(b)) - Number(CORE.has(a)),
    ),
  })),
  { title: "Tools", items: ["Git", "GitHub", "Postman"] },
];

export const isCore = (name: string) => CORE.has(name);

/* ── Stats ────────────────────────────────────────────────────────── */

const technologyCount = new Set(skillGroups.flatMap((g) => g.items)).size;

export const stats = {
  projects: 6,
  experienceMonths: 6,
  clients: 2,
  technologies: technologyCount,
};

/* ── Projects ─────────────────────────────────────────────────────── */

export type DashProject = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  category: string;
  year: string;
  liveUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  images?: string[];
  placeholder?: boolean;
};

const real: DashProject[] = baseProjects.map((p) => ({ ...p }));

// The KPI says 6 projects; two slots are samples until you add them.
const samples: DashProject[] = [5, 6].map((n) => ({
  slug: `sample-${n}`,
  title: "Add your next project",
  summary: "Replace this slot with a project you've built.",
  description: "",
  tags: [],
  category: "Sample",
  year: "",
  placeholder: true,
}));

export const projects: DashProject[] = [...real, ...samples];

/* ── Experience ───────────────────────────────────────────────────── */

export type Experience = {
  role: string;
  org: string;
  type: "Contract" | "Internship" | "Full-time";
  period: string;
  highlights: string[];
  tech: string[];
  placeholder?: boolean;
};

export const experience: Experience[] = [
  {
    role: "IT Support Technician",
    org: "Vinro VA",
    type: "Contract",
    period: "2026 — Present", // TODO: confirm start date
    highlights: [
      "Migrated an organization from Microsoft to Google Workspace, including email aliases and security hardening.",
      "Configured Cloudflare DNS (MX, SPF, DKIM, DMARC) for reliable mail delivery.",
      "Deployed and customized WordPress sites through cPanel for client accounts.",
    ],
    tech: ["Google Workspace", "Cloudflare DNS", "cPanel", "WordPress", "ACF"],
  },
  {
    role: "Full-Stack Developer Intern",
    org: "Company name", // TODO
    type: "Internship",
    period: "Dates", // TODO
    highlights: [
      "Built a Digital Queue Management system and an Intern Management system with Next.js and Laravel.",
      "Added real-time updates with WebSockets and Redis; managed data in Supabase and MongoDB.",
    ],
    tech: ["Next.js", "Laravel", "Angular", "Redis", "Supabase", "MongoDB"],
    placeholder: true,
  },
];

/* ── Education, certifications, feedback ──────────────────────────── */

export const education = {
  degree: "BS in Information Technology",
  school: "NLAC",
  years: "2022 — 2026",
  capstone: "NLM: Connect",
  award: "Best in OJT",
};

export const certifications = [
  { title: "Base Workshop Participant", issuer: "Base.ph" },
  { title: "Foundational C# with Microsoft", issuer: "freeCodeCamp" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  placeholder?: boolean;
};

// SAMPLE entries — replace with real client feedback, then remove `placeholder`.
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
