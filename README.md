# Yitbarek Ejigu — Portfolio

Personal portfolio: selected work, experience, about, and resume.

**Live:** [my-portfolio-yit.vercel.app](https://my-portfolio-yit.vercel.app)

## Design

Minimal neo-brutalism: thick navy borders, hard zero-blur shadows, flat fills, and buttons that press into their shadow. Light and dark themes (follows the system, with a toggle).

| Token | Hex | Role |
|---|---|---|
| `--sky` | `#8ECAE6` | primary fill |
| `--teal` | `#219EBC` | secondary fill |
| `--navy` | `#023047` | text, borders, shadows |
| `--sun` | `#FFB703` | stickers and highlights |
| `--tang` | `#FB8500` | small accents, focus ring |

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Framer Motion](https://motion.dev) for entrance, count-up and nav animations (respects `prefers-reduced-motion`)
- Plain CSS: design tokens and utilities in `globals.css`, CSS Modules per component
- Self-hosted fonts via `next/font` (Space Grotesk, Space Mono)
- Monochrome icons from [Simple Icons](https://simpleicons.org) (CC0)

## Development

```bash
npm install
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build
npm run lint    # lint
```

## Updating content

Almost everything on the site comes from two files:

- `src/data/portfolio.ts`: projects, experience, leadership, education, stats, skills
- `src/lib/site.ts`: name, URL, email, and social links

To update the resume, replace `public/RESUME.pdf`.

## Structure

```
src/
  app/
    page.tsx              # home: intro, work, experience, about, contact
    resume/page.tsx       # resume viewer + download
    layout.tsx            # metadata, fonts, theme bootstrap
    globals.css           # design tokens + neo-brutalist utilities
    opengraph-image.tsx   # social preview card
    icon.svg              # favicon
    sitemap.ts, robots.ts
  components/             # Nav, Intro, WorkCard, Experience, About, Contact, ...
  data/portfolio.ts       # site content
  lib/site.ts             # site identity + links
public/
  RESUME.pdf              # latest resume
  work/                   # project screenshots
  icons/                  # monochrome brand icons
```
