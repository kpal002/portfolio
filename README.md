# Kuntal Pal — Personal Site

A brutalist, light-theme personal site built with **Next.js 14 (App Router)**, **React 18**, **Tailwind CSS**, and **Space Mono**.

## Sections

- **Home** (Hero with status pill, gradient name, blinking cursor, CTAs)
- **Projects** (grid of brutalist cards, featured ones span wider)
- **Blog** (vertical post list — drop in real article URLs as you publish)
- **Experience** (timeline of roles with thick black rail)
- **About** (prose + quick facts + education panel)
- **Skills** (grouped tag cards)
- **Get in Touch** (mailto CTA + socials)

The navbar uses an `IntersectionObserver` to highlight the currently-visible section with a yellow pill, matching your reference screenshot.

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

To build for production:

```bash
npm run build
npm start
```

## Where to edit your content

All copy lives in **one place**: [`lib/content.js`](./lib/content.js). Open it and change:

- `profile` — name, role, headline, location, email, phone, resume URL
- `socials` — GitHub, LinkedIn, Blog, Email links
- `navLinks` — the in-page sections shown in the navbar
- `about` — the paragraphs and the quick-facts list
- `education` — degree entries
- `skills` — categorised skill tags
- `projects` — your project cards (set `featured: true` for wider cards)
- `blogPosts` — drop in real titles, dates, excerpts and `href` URLs as you publish
- `experience` — your roles, in reverse-chronological order

You shouldn't need to touch the JSX in `app/components/*` to swap content — components read everything from `lib/content.js`.

## Theming

Colours, fonts, and animations are defined in [`tailwind.config.js`](./tailwind.config.js) under `theme.extend`. The core palette:

| Token        | Value     | Used for                                  |
| ------------ | --------- | ----------------------------------------- |
| `bg`         | `#fbf3e0` | cream page background                     |
| `surface`    | `#fff8e7` | cards / panels                            |
| `ink`        | `#0a0a0a` | primary text + thick borders              |
| `muted`      | `#4b4b4b` | secondary text                            |
| `accent`     | `#fde68a` | yellow — active pills, status, highlight  |
| `accent2`    | `#fb923c` | orange — punctuation accents, headings    |
| `ok`         | `#16a34a` | status dot green                          |

Change `accent` and `accent2` to rebrand the entire site.

The diagonal stripe + dot textures live in [`app/globals.css`](./app/globals.css) as `.bg-stripes` and `.bg-dots`.

## Resume

Your résumé is already in `public/Kuntal-Pal-Resume.pdf`. The navbar Resume link and the hero "Download Resume" button serve it from `/Kuntal-Pal-Resume.pdf`. To replace, drop a new PDF with the same filename — or update `profile.resumeUrl` in `lib/content.js`.

## Profile photo

Drop your portrait at `public/profile.jpg` and the hero will pick it up automatically — both the desktop right column and the mobile top-of-hero variant. Square aspect ratio works best (the photo is rendered inside an `aspect-square` frame and cropped with `object-cover`). To change the filename or use a different format, edit `profile.profileImage` in `lib/content.js`.

## Project structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Skills.jsx
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── lib/
│   └── content.js          ← edit your copy here
├── public/
│   └── Kuntal-Pal-Resume.pdf
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## Deploying

This is a stock Next.js app, so the easiest path is **Vercel**:

```bash
npx vercel
```

It also works on Netlify, Cloudflare Pages, or any Node host that can run `next start`.
