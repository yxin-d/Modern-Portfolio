// All portfolio content lives here. Items marked `placeholder: true` are sample
// content — replace them with real details (the UI flags them with a dashed
// border / "SAMPLE" tag until you remove the flag).

export const profile = {
  name: "Rezin Dotimas",
  initials: "RD",
  headline: "IT Support | Web3 Developer",
  // DRAFT — rewrite in your own words.
  pitch:
    "IT support specialist and web developer building reliable systems with Laravel, Next.js and Angular.",
  location: "Pangasinan, Philippines",
  availability: "Open to full-time roles",
  targetRoles: [
    "Associate Web Developer",
    "Junior Software Developer",
    "Laravel / Angular / Next.js Programmer",
  ],
  // Drop your PDF into /public with this exact name.
  cvUrl: "/Rezin-Dotimas-CV.pdf",
};

export const links = {
  email: "drzen.work@gmail.com",
  github: { label: "yxin-d", url: "https://github.com/yxin-d" },
  linkedin: {
    label: "rezin-dotimas",
    url: "https://www.linkedin.com/in/rezin-dotimas-48130924b",
  },
  facebook: { label: "rzen.dotimas", url: "https://www.facebook.com/rzen.dotimas" },
};

export type SkillGroup = {
  title: string;
  icon: "frontend" | "backend" | "cms" | "tools";
  items: { name: string; core?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "frontend",
    items: [
      { name: "Next.js", core: true },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "React Bits" },
    ],
  },
  {
    title: "Backend & Data",
    icon: "backend",
    items: [
      { name: "Laravel", core: true },
      { name: "PHP" },
      { name: "Supabase" },
      { name: "MongoDB" },
      { name: "MySQL" },
    ],
  },
  {
    title: "CMS & Admin",
    icon: "cms",
    items: [
      { name: "WordPress" },
      { name: "ACF" },
      { name: "Google Workspace" },
      { name: "Microsoft 365" },
      { name: "cPanel" },
    ],
  },
  {
    title: "Tools",
    icon: "tools",
    items: [{ name: "Postman" }, { name: "GitHub" }],
  },
];

const technologyCount = skillGroups.reduce((n, g) => n + g.items.length, 0);

export const stats = {
  projects: 6,
  experienceMonths: 6,
  clients: 2,
  technologies: technologyCount,
};

export type Project = {
  title: string;
  blurb: string;
  status: "Capstone" | "Client work" | "Live" | "In progress";
  stack: string[];
  live?: string;
  repo?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "NLM: Connect",
    blurb:
      "Web-based communication platform for a private religious organization. Capstone project.",
    status: "Capstone",
    stack: [], // TODO: add the stack you used
  },
  {
    title: "Real Estate Agency Website",
    blurb:
      "WordPress build and redesign for a real estate agency, with ACF-driven content.",
    status: "Client work",
    stack: ["WordPress", "ACF"],
  },
  {
    title: "Advisory Firm Website Overhaul",
    blurb: "Content overhaul and updates for a professional advisory firm's WordPress site.",
    status: "Client work",
    stack: ["WordPress"],
  },
  {
    title: "Project 04 — add yours",
    blurb: "Replace this card with a project: what it does and what you built.",
    status: "In progress",
    stack: ["Laravel"],
    placeholder: true,
  },
  {
    title: "Project 05 — add yours",
    blurb: "Replace this card with a project: what it does and what you built.",
    status: "In progress",
    stack: ["Next.js"],
    placeholder: true,
  },
  {
    title: "Project 06 — add yours",
    blurb: "Replace this card with a project: what it does and what you built.",
    status: "In progress",
    stack: ["Angular"],
    placeholder: true,
  },
];

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
      "Administer Google Workspace for client accounts.",
      "Configure Cloudflare DNS (MX, SPF, DKIM, DMARC) for reliable email delivery.",
      "Deploy and maintain sites on cPanel; customize WordPress builds.",
    ],
    tech: ["Google Workspace", "Cloudflare", "cPanel", "WordPress", "ACF"],
  },
  {
    role: "Full-Stack Developer Intern",
    org: "Company name", // TODO
    type: "Internship",
    period: "Dates", // TODO
    highlights: [
      "Full-stack work across Next.js, Laravel and Angular.",
      "Real-time and data layers with WebSockets, Redis, Supabase and MongoDB.",
    ],
    tech: ["Next.js", "Laravel", "Angular", "Redis", "Supabase", "MongoDB"],
    placeholder: true,
  },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "NLAC",
  years: "2022 — 2026",
  capstone: {
    title: "NLM: Connect",
    description: "Web-based communication platform for a private religious organization.",
  },
};

export const certifications = [
  { title: "Base Workshop Participant", issuer: "Base.ph" },
  { title: "Foundational C# with Microsoft Certification", issuer: "freeCodeCamp" },
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