import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

/* ── Profile ──────────────────────────────────────────────────────── */

export const site = {
  name: "Rezin Dotimas",
  initials: "RD",
  role: "Junior Web Developer",
  tagline:
    "Full-stack developer building web applications with Laravel and Next.js, backed by hands-on IT support and deployment experience with real clients.",
  location: "Sison, Pangasinan, Philippines",
  availability: "Open to full-time roles",
  email: "rezin@yxin.dev",
  resumeUrl: "/resume.docx",
};

export const links = {
  email: { label: "rezin@yxin.dev", href: `mailto:${site.email}` },
  github: { label: "yxin-d", href: "https://github.com/yxin-d" },
  linkedin: {
    label: "rezin-dotimas",
    href: "https://www.linkedin.com/in/rezin-dotimas-48130924b",
  },
  facebook: { label: "rzen.dotimas", href: "https://www.facebook.com/rzen.dotimas" },
  instagram: { label: "rezin.dotimas", href: "https://www.instagram.com/yxin_d" },
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
  { label: "Instagram", href: links.instagram.href, icon: Mail, handle: links.instagram.label },
  { label: "Facebook", href: links.facebook.href, icon: Mail, handle: links.facebook.label },
];

/* ── Skills ───────────────────────────────────────────────────────── */

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["HTML", "CSS", "PHP", "Python", "TypeScript", "JavaScript", "Java", "C#"] },
  {
    title: "Frameworks & Libraries",
    items: ["Laravel", "Angular", "Next.js", "React", "Tailwind CSS", "Bootstrap", "Livewire", "Inertia.js", "React Bits", "Zustand"],
  },
  { title: "Databases", items: ["MySQL", "MongoDB", "Supabase", "PostgreSQL", "Redis"] },
  {
    title: "Infrastructure & Tools",
    items: ["Cloudflare", "cPanel", "Google Workspace", "Microsoft 365", "WordPress", "Git", "GitHub", "Vercel", "MailerSend", "ACF"],
  },
  {
    title: "Practices & Integrations",
    items: ["REST APIs", "MVC", "Responsive Design", "WebSockets", "Agile", "OAuth 2.0", "third-party API integration", "CI/CD"],
  }
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
  "C#",
  "Python",
  "Bootstrap",
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
  /** What you did on it, e.g. "Full-Stack Developer · Team lead". Shown on the project page. */
  role?: string;
  /** Deployed site — shows a "View live" button. */
  liveUrl?: string;
  /** Demo (video, sandbox, prototype) for projects with no public site — "View demo". */
  demoUrl?: string;
  /**
   * How to present the source code:
   *  - "public": show a "View repo" button (needs `repoUrl`)
   *  - "private": show "Private repo — walkthrough on request"
   *  - "unavailable": show "Repo unavailable"
   * Leave unset to show nothing. If only `repoUrl` is set it counts as "public".
   */
  repoStatus?: "public" | "private" | "unavailable";
  /** Source code link, used when the repo is public. */
  repoUrl?: string;
  /** Screenshots: put files in /public/projects/<slug>/ and list them like "/projects/<slug>/1.png". */
  images?: string[];
  year: string;
};

/** Resolves how a project's repo should be shown. */
export function repoState(p: Pick<Project, "repoStatus" | "repoUrl">) {
  if (p.repoStatus === "private" || p.repoStatus === "unavailable") return p.repoStatus;
  if (p.repoStatus === "public" || p.repoUrl) return p.repoUrl ? "public" : null;
  return null;
}

/** Adds https:// to links typed without a scheme, so "scorebunt.yxin.dev" stays an absolute URL. */
export function externalHref(url: string) {
  return /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(url) ? url : `https://${url}`;
}

export const projects: Project[] = [
  {
    slug: "scorebunt",
    title: "ScoreBunt — Live Softball Scoring App",
    summary:
      "A scoring and lineup tracker for intramural softball that replaces the pen-and-paper scoresheet and runs entirely on one phone.",
    description:
      "Casual intramural games have no official scorer, and lineups change inning by inning. ScoreBunt keeps the batting order and the score straight from a single phone, with no backend or sign-in. The batting order is derived from the nine field positions, so there is no separate lineup to maintain, and substitutions support re-entry the way casual intramural rules allow. An autoscore baserunner tracker advances every runner when a batter reaches base, with a confirmation step and undo on any scored run. Rosters, lineups and match history are saved on the device.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Vercel"],
    category: "Frontend",
    gradient: ["turquoise", "lime"],
    context: "Personal project · Alumni intramural softball",
    role: "Solo developer",
    year: "2026",
    liveUrl: "https://scorebunt.yxin.dev",
    repoStatus: "public",
    repoUrl: "https://github.com/yxin-dev/scorebunt",
    images: [
      "/projects/scorebunt/cover.png",
      "/projects/scorebunt/playerlist.png",
      "/projects/scorebunt/playerLineUp.png",
      "/projects/scorebunt/gameScoreScreen.png",
      "/projects/scorebunt/outModal.png",
      "/projects/scorebunt/scorerModal.png",
      "/projects/scorebunt/autoScorerModal.png",
      "/projects/scorebunt/conclusion.png",
      "/projects/scorebunt/gameStats.png",
      "/projects/scorebunt/postMatchLobby.png",
    ],
  },
  {
    slug: "questflow-resource-management",
    title: "QuestFlow — Gamified Resource Management Platform",
    summary:
      "A platform that matches idle interns with unassigned work, built during my internship from a pitch I wrote.",
    description:
      "Interns could sit idle while tasks went unassigned, because availability and open work were buried in chat threads. I pitched QuestFlow as a fix and, once it was approved, led the team that built it. It pairs skill-based task matching with real-time availability so the right person and the right task find each other. It has three role-scoped surfaces (admin, supervisor and worker) with role-based permissions, covering quests, guilds, leaderboards, a help desk, learning modules and file uploads. A live availability board runs on a custom Node WebSocket server and pushes status changes to supervisor dashboards without a refresh. It was delivered as a working MVP before the internship ended.",
    tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "WebSockets", "Tailwind CSS"],
    category: "Full-Stack",
    gradient: ["gold", "coral"],
    context: "Makerspace InnovHub OPC · Mapandan, Pangasinan",
    role: "Full-Stack Developer · Team lead",
    year: "2026",
  },
  {
    slug: "wordpress-custom-theme",
    title: "Pace Property Group WordPress Website",
    summary:
      "A WordPress site for a Gold Coast real estate agency that its non-technical staff can update without touching code.",
    description:
      "The client needed to publish property listings and job openings on their own, without a developer. I built a custom WordPress theme where the page layout is locked down in PHP while the content stays fully editable. Properties are a custom post type with a fill-in-the-blanks admin form (bedrooms, bathrooms, parking, address, price, photo gallery and floorplan), and each listing renders through the template automatically when published. A Careers page works the same way, with open roles managed through an ACF repeater. The site is responsive and follows SEO best practices.",
    tags: ["WordPress", "PHP", "ACF", "Custom Post Types", "Custom Theme", "SEO"],
    category: "Frontend",
    gradient: ["lavender", "turquoise"],
    context: "DCG Advisory · Gold Coast, Australia (Remote)",
    role: "Developer · Solo build for the client",
    year: "2026",
    liveUrl: "https://pacepropertygroup.com.au",
    images: [
      "/projects/pace/cover.png",
      "/projects/pace/1.png",
      "/projects/pace/2.png",
      "/projects/pace/3.png",
      "/projects/pace/4.png",
      "/projects/pace/5.png",
      "/projects/pace/6.png",
    ],
  },
  {
    slug: "Outsourcing-Website",
    title: "Outsourcing & Offshoring Services Website",
    summary:
      "A rework of DCG Advisory's website to reposition the business from general advisory to offshoring and outsourcing.",
    description:
      "DCG Advisory's main service is offshoring and outsourcing, but its site still presented the business as general advisory. I reworked the site's content and structure around that service: a repositioned home page, an About page reframed around the owner, and dedicated How It Works and Services pages. It is built with the native WordPress block editor, so the owner can keep editing the pages himself.",
    tags: ["WordPress", "Gutenberg", "Responsive Design"],
    category: "Frontend",
    gradient: ["lavender", "turquoise"],
    context: "DCG Advisory · Remote",
    role: "Developer · Content and structure",
    year: "2026",
    liveUrl: "https://dcgadvisory.com",
    images: [
      "/projects/dcg/cover.png",
      "/projects/dcg/1.png",
      "/projects/dcg/2.png",
      "/projects/dcg/3.png",
      "/projects/dcg/4.png",
      "/projects/dcg/5.png",
      "/projects/dcg/6.png",
    ],
  },
  {
    slug: "nlm-connect",
    title: "NLM Connect — Communication Portal (Capstone)",
    summary:
      "A web portal that centralizes announcements, messaging and events for a church organization spanning six provinces.",
    description:
      "The organization's announcements were scattered across social media and group chats. As a five-person capstone team we built a single portal to replace them, with role-based access for four types of users: admin, worker, communication representative and public. It has a central announcement feed organized by department and date, structured role-based messaging, a calendar-based event board, and a public inquiry form routed to the right office. We followed an iterative waterfall process, from stakeholder interviews through unit, integration and system testing. It is not currently hosted.",
    tags: ["Laravel", "Livewire", "Blade", "Tailwind CSS", "MySQL"],
    category: "Full-Stack",
    gradient: ["lime", "gold"],
    context: "Capstone · Sison, Pangasinan",
    role: "Developer · Capstone team of five",
    year: "2026",
  },
  {
    slug: "queue-management-system",
    title: "Digital Queue Management System",
    summary:
      "A queue management system built as a Systems Analysis and Design course project, before my capstone.",
    description:
      "A digital queue management system built for a Systems Analysis and Design course, before my capstone project.",
    tags: [],
    category: "Full-Stack",
    gradient: ["coral", "gold"],
    context: "Systems Analysis & Design project · Northern Luzon Adventist College",
    year: "2025",
  },
];

/** Filter chips for the projects page: only categories that have a project. */
export const projectCategories = [
  "All",
  ...new Set(projects.map((p) => p.category)),
] as ("All" | Project["category"])[];

/* ── Tasks ────────────────────────────────────────────────────────── */

/**
 * Procedural work with no product to show: migrations, configuration, deployment, support.
 * Each task lists the procedure that was followed instead of screenshots and links.
 */
export type Task = {
  slug: string;
  title: string;
  kind: "Migration" | "Configuration" | "Deployment" | "Support";
  summary: string;
  /** The procedure, in order. */
  steps: string[];
  tools: string[];
  context: string;
  year: string;
};

export const tasks: Task[] = [
  {
    slug: "m365-to-google-workspace-migration",
    title: "Microsoft 365 → Google Workspace migration",
    kind: "Migration",
    summary:
      "Moved an organization's email, documents and media from Microsoft 365 to Google Workspace with minimal downtime.",
    steps: [
      "Planned the migration and the cutover.",
      "Transferred emails, documents and media into Google Workspace.",
      "Rerouted mail flow by updating the domain's DNS records in Cloudflare.",
      "Created alternate email aliases and forwards so no address stopped working.",
      "Set up DKIM so outgoing mail stayed authenticated.",
      "Troubleshot post-migration email issues until mail was stable.",
    ],
    tools: ["Google Workspace", "Microsoft 365", "Cloudflare", "DKIM"],
    context: "DCG Advisory · Remote",
    year: "2026",
  },
  {
    slug: "email-dns-authentication",
    title: "Email DNS & authentication setup",
    kind: "Configuration",
    summary:
      "Configured a domain's DNS so its email is delivered and its sender identity is verified.",
    steps: [
      "Pointed the domain's MX records at the mail provider.",
      "Published an SPF record listing the servers allowed to send for the domain.",
      "Generated a DKIM key in Google Workspace and published it in DNS.",
      "Added a DMARC policy to tell receiving servers how to treat failed checks.",
    ],
    tools: ["Cloudflare", "Google Workspace", "SPF", "DKIM", "DMARC"],
    context: "DCG Advisory · Remote",
    year: "2026",
  },
  {
    slug: "wordpress-cpanel-deployment",
    title: "WordPress deployment & hosting upkeep",
    kind: "Deployment",
    summary:
      "Deployed the client's WordPress sites to production on cPanel hosting and kept the environment stable.",
    steps: [
      "Set up the site on the cPanel hosting account.",
      "Deployed the finished WordPress site to production.",
      "Kept the hosting environment and the site up to date.",
    ],
    tools: ["cPanel", "WordPress"],
    context: "DCG Advisory · Remote",
    year: "2026",
  },
];

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
    period: "April 2026 — Present",
    highlights: [
      "Migrated the client’s organization from Microsoft 365 to Google Workspace, rerouting mail flows and updating DNS records to keep downtime minimal.",
      "Administered domain and email accounts, including aliases and forwarding, to preserve communication continuity.",
      "Built and deployed the client’s website to production, and maintained the hosting environment to keep it stable and up to date.",
      "Provided remote technical support with minimal supervision, triaging and resolving staff IT issues across development, hosting, and support tasks."
    ],
    tech: ["Google Workspace", "Microsoft 365", "Cloudflare", "WordPress", "cPanel", "DNS", "Email Migration", "DKIM", "PHP", "ACF"],
  },
  {
    role: "Web3 Developer Intern",
    org: "Makerspace InnovHub OPC",
    location: "Mapandan, Pangasinan",
    type: "Internship",
    period: "Mar 2026 — May 2026",
    highlights: [
      "Authored and pitched a digital workplace solution; after approval, led the team implementing it as Full-Stack Developer using Next.js and MongoDB.",
      "Optimized web pages and built responsive, schema-enhanced comparison pages for an auto-dealer website, applying SEO best practices.",
      "Contributed as Database Administrator and QA Tester on an office productivity tool built with Laravel Inertia, React, and Supabase.",
      "Documented system architecture and setup procedures in an Agile team environment to support a clean project handover.",
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

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  /** Link to the certificate / credential. When set, the entry becomes clickable. */
  url?: string;
};

export const certifications: Certification[] = [
  { title: "Base Workshop Participant", issuer: "Base.ph", year: "2026" },
  { title: "Foundational C# with Microsoft", issuer: "freeCodeCamp", year: "2026" },
  { title: "CLICK 2025: IT Education Conference", issuer: "CHED Region 1 | PSITE", year: "2025" },
];

/* ── KPIs ─────────────────────────────────────────────────────────── */

const MONTHS = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];

/** "April 2026" / "Mar 2026" / "Present" -> absolute month index (year * 12 + month). */
function monthIndex(label: string, now = new Date()) {
  const text = label.trim().toLowerCase();
  if (text === "present" || text === "now" || text === "current") {
    return now.getFullYear() * 12 + now.getMonth();
  }
  const [mon, year] = text.split(/\s+/);
  const m = MONTHS.indexOf(mon?.slice(0, 3));
  const y = Number(year);
  return m < 0 || !Number.isFinite(y) ? null : y * 12 + m;
}

/** Start of an experience period as a sortable month index (0 if unreadable). */
export function periodStart(period: string) {
  return monthIndex(period.split(/\s*[—–-]\s*/)[0] ?? "") ?? 0;
}

/** Total months worked, counting overlapping roles only once. */
function totalExperienceMonths(list: Experience[]) {
  const spans = list
    .map((e) => {
      const [from, to] = e.period.split(/\s*[—–-]\s*/);
      const a = monthIndex(from ?? "");
      const b = monthIndex(to ?? "");
      return a === null || b === null || b < a ? null : ([a, b] as const);
    })
    .filter((x): x is readonly [number, number] => x !== null)
    .sort((x, y) => x[0] - y[0]);

  let total = 0;
  let cur: [number, number] | null = null;
  for (const [a, b] of spans) {
    if (cur && a <= cur[1]) cur[1] = Math.max(cur[1], b);
    else {
      if (cur) total += cur[1] - cur[0];
      cur = [a, b];
    }
  }
  if (cur) total += cur[1] - cur[0];
  return total;
}

export const stats = {
  projects: projects.length,
  experienceMonths: totalExperienceMonths(experience),
  clients: 3,
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
