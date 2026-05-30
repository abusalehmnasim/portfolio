# Abu Saleh M Nasim — Personal Portfolio

A premium, production-ready personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui**-style components. Designed to look at home alongside the portfolios of top-tier finance, consulting, analytics, and research professionals.

## Features

- Modern App Router (Next.js 14) with TypeScript
- Tailwind CSS design system with dark / light mode (persistent)
- Framer Motion animations, scroll progress bar, animated rotating taglines
- Glassmorphism cards, soft gradients, premium typography (Inter + Instrument Serif)
- Fully responsive, accessible (WCAG-friendly), keyboard-navigable
- SEO: metadata, Open Graph, Twitter cards, JSON-LD `Person` schema, sitemap, robots
- Sections:
  - Hero with animated stats and rotating taglines
  - About + areas of interest
  - Education timeline (BUP + ICAB)
  - Experience & Leadership timeline
  - Projects (Dhaka Restaurant Directory, DSE Market Prediction)
  - Research & Publications (SSRN)
  - Skills (Finance, Analytics, Programming, Research)
  - Certifications (DataCamp)
  - Achievements (Talentpool Scholarship, Principal's Award)
  - Contact form (opens email client with prefilled subject + body)
- Mailto-based contact (no backend required) — easy to swap for Formspree/Resend later

## Tech stack

| Layer       | Choice                                |
| ----------- | ------------------------------------- |
| Framework   | Next.js 14 (App Router)               |
| Language    | TypeScript                            |
| Styling     | Tailwind CSS + custom design tokens   |
| Components  | shadcn/ui-style primitives            |
| Icons       | lucide-react                          |
| Animation   | Framer Motion                         |
| Theming     | next-themes (light / dark)            |
| Fonts       | Inter + Instrument Serif (next/font)  |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open
# http://localhost:3000
```

### Build for production

```bash
npm run build
npm run start
```

## Customization

All editorial content lives in **`src/lib/data.ts`** — update once and the whole site updates:

- `siteConfig` — name, tagline, email, phone, socials, CV URL
- `stats` — hero statistic tiles
- `education`, `experience`, `projects`, `publication`
- `skillGroups`, `certifications`, `achievements`, `interests`
- `navItems` — top nav anchors

### Replace the resume / CV

Drop your PDF into `public/cv.pdf`. The "Download CV" and "Resume" buttons point to `/cv.pdf`.

### Change the deployed URL

Update `siteConfig.url` in `src/lib/data.ts`. This URL is used for the canonical metadata base, Open Graph URL, sitemap, robots, and JSON-LD.

### Theme

`globals.css` exposes HSL design tokens (`--background`, `--foreground`, `--primary`, …) for both light and dark modes. Tweak there to rebrand.

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, theme provider, SEO, JSON-LD
    page.tsx          # Single-page composition of all sections
    globals.css       # Tailwind layers + design tokens
    sitemap.ts        # sitemap.xml
    robots.ts         # robots.txt
  components/
    navbar.tsx
    footer.tsx
    scroll-progress.tsx
    section-heading.tsx
    theme-provider.tsx
    theme-toggle.tsx
    sections/
      hero.tsx
      about.tsx
      education.tsx
      experience.tsx
      projects.tsx
      research.tsx
      skills.tsx
      certifications.tsx
      achievements.tsx
      contact.tsx
    ui/               # shadcn-style primitives
      button.tsx
      card.tsx
      badge.tsx
      input.tsx
      textarea.tsx
  lib/
    data.ts           # All editorial content (single source of truth)
    utils.ts          # cn() helper
public/
  favicon.svg
  cv.pdf              # ← drop your CV here
```

## Deployment

### Vercel (recommended)

1. Push the repo to GitHub.
2. Import it on [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js**. No env vars required.
4. Deploy. Vercel will serve `sitemap.xml`, `robots.txt`, and edge-cache static assets automatically.

Add a custom domain in Vercel → **Settings → Domains**, then update `siteConfig.url`.

### Other hosts

- **Netlify**: install the Next.js runtime, `npm run build`, publish `.next`.
- **Self-host**: `npm run build && npm run start` behind a reverse proxy (Nginx, Caddy). Node 18.17+.
- **Static export**: not used here — Framer Motion + next-themes work best server-rendered.

## Performance & accessibility

- Lighthouse targets ≥ 95 across Performance, SEO, Accessibility, Best Practices.
- All interactive elements have visible focus rings (`focus-visible:ring-*`).
- Color tokens chosen for AA contrast in both themes.
- Animations use `whileInView` with `once: true` to avoid jank.
- `prefers-reduced-motion` is respected by Framer Motion defaults — no infinite distracting motion.

## License

Personal portfolio content © Abu Saleh M Nasim. Code released under the MIT License — feel free to fork the structure for your own portfolio.
