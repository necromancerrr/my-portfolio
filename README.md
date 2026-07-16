# Yitbarek Ejigu — Portfolio

Personal portfolio site: projects, experience, skills, and resume.

**Live:** [my-portfolio-eta-mocha-48.vercel.app](https://my-portfolio-eta-mocha-48.vercel.app)

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Framer Motion](https://www.framer.com/motion/) for animations (respects `prefers-reduced-motion`)
- Light/dark theme with system preference detection
- Self-hosted fonts via `next/font` (Inter, JetBrains Mono)

## Development

```bash
npm install
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build
npm run lint    # lint
```

## Structure

```
src/
  app/
    page.tsx          # home (about, skills, projects, experience, contact)
    resume/page.tsx   # resume viewer + download
    layout.tsx        # metadata, fonts, theme bootstrap
    sitemap.ts        # /sitemap.xml
    robots.ts         # /robots.txt
  components/         # Hero, Navigation, ProjectCard, ExperienceCard, ...
public/
  RESUME.pdf          # latest resume
```
