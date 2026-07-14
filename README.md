# Yzin — Portfolio

A three-page developer/IT-support portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**, in your turquoise / gold / indigo brand palette with light mode as the default and a persistent dark mode toggle.

## Stack & why

| Concern | Choice |
|---|---|
| Framework | Next.js 16, App Router, TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config.js` needed) |
| Animation | Framer Motion (page-load reveals, hover states, the aurora blobs, marquee) |
| Theming | `next-themes`, class strategy, `defaultTheme="light"`, `enableSystem={false}` |
| Icons | `lucide-react` + 3 hand-rolled brand SVGs (`components/icons.tsx`) — recent `lucide-react` versions dropped brand/logo icons (GitHub, LinkedIn, X), so those three are inlined instead of pulled from a brand-icon package |
| Forms | `react-hook-form` + `zod` validation, posting to a Next.js Route Handler |

**About "React Bits":** React Bits is normally consumed via a copy-paste CLI that pulls component source from their live registry. I couldn't reach that registry from this sandboxed environment, so instead I hand-built the same *category* of components in-house, in that spirit — `AuroraBackground` (animated gradient blobs), `Marquee` (infinite tech-stack scroller), and `TypingText` (terminal-style text reveal) all live in `components/` as plain, dependency-free Framer Motion components. Swap any of them for the real React Bits version later if you'd like; they're isolated on purpose.

## Structure

```
app/
  layout.tsx             Root layout: fonts, ThemeProvider, Navbar, Footer
  page.tsx                Landing page (Hero, About, TechStack, CTA)
  projects/page.tsx        Projects Showcase (filterable grid)
  contact/page.tsx         Contact page (form + socials)
  api/contact/route.ts      Validates + logs submissions (wire up email below)
  globals.css               Theme tokens, dark-mode variant, fonts, keyframes
components/
  hero.tsx, about.tsx, tech-stack.tsx, cta-section.tsx
  navbar.tsx, footer.tsx, page-header.tsx
  aurora-background.tsx, marquee.tsx, typing-text.tsx   <- signature animated bits
  project-card.tsx, projects-grid.tsx
  contact-form.tsx, social-links.tsx
  theme-provider.tsx, theme-toggle.tsx
  icons.tsx              GitHub / LinkedIn / X brand icons
  ui/button.tsx, ui/badge.tsx
lib/
  data.ts                 ALL editable content lives here: name, bio, tech
                            stack, projects, socials, nav links
  validations.ts           zod schema for the contact form
  utils.ts                  cn() helper
```

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Personalize it

Almost everything you'll want to change lives in **`lib/data.ts`**:

- `site` — your name, role, tagline, about paragraphs, resume link, email
- `techStack` / `techMarquee` — categorized skills + the scrolling strip
- `projects` — title, summary, description, tags, category, gradient, links
- `socials` — GitHub / LinkedIn / X / email links and handles

Swap `resumeUrl: "#"` for a real PDF once you have one in `/public`.

### Colors

All brand colors are defined once, as CSS variables, in `app/globals.css` under `@theme inline` and the `:root` / `.dark` blocks — change a hex there and it updates everywhere (buttons, gradients, blobs, focus rings). Semantic tokens (`background`, `primary`, `accent`, `secondary`, `muted`, `surface`, `success`, `error`) map to the raw palette so light/dark mode never needs per-component overrides.

### Wiring up the contact form

`app/api/contact/route.ts` currently validates the payload and `console.log`s it. To actually receive messages, add an email step there — Resend, Postmark, or Nodemailer + SMTP all drop in cleanly. Keep the `zod` validation as-is; it's already guarding the route.

### Fonts

Headings use **Sora**, body text uses **Inter**, and mono/CLI-styled bits (the `whoami` line, tags, badges) use **JetBrains Mono** — loaded via a Google Fonts `@import` in `globals.css` rather than `next/font`, so no build-time network access is required. If you'd rather self-host, swap that `@import` for `next/font/google` imports in `app/layout.tsx`.

## Deploying

Works out of the box on Vercel:

```bash
npm run build
```

then push to a repo and import it on vercel.com/new, or run `npm start` after `npm run build` to serve it yourself.
