# Clarence Boone — PM Portfolio

A Notion-inspired PM portfolio built with Next.js 14 (App Router), TypeScript, and plain CSS.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              Root layout
│   ├── page.tsx                Home / About
│   ├── globals.css             All styles (CSS variables for light/dark)
│   ├── cases/
│   │   ├── page.tsx            Case Studies index
│   │   └── [slug]/page.tsx     Individual case study
│   └── teardowns/
│       ├── page.tsx            Teardowns index
│       └── [slug]/page.tsx     Individual teardown
├── components/
│   ├── LayoutShell.tsx         Sidebar + topbar state wrapper
│   ├── Sidebar.tsx             Left navigation
│   ├── Topbar.tsx              Top bar with breadcrumbs + theme toggle
│   ├── ThemeProvider.tsx       Light/dark mode context
│   └── ProcessImage.tsx        Photo component (placeholder in dev, real in prod)
├── lib/
│   ├── cases.ts                All case study content + photo metadata
│   └── teardowns.ts            All teardown content + photo metadata
└── public/
    └── images/
        ├── cases/
        │   ├── blackstone/     Drop Blackstone case photos here
        │   ├── netflix/        Drop Netflix case photos here
        │   └── equityzen/      Drop EquityZen case photos here
        └── teardowns/
            ├── cursor/         Drop Cursor teardown photos here
            └── perplexity/     Drop Perplexity teardown photos here
```

---

## Adding Photos

When you run `npm run dev`, every photo slot shows a **blue dashed placeholder box** with:
- Exact instructions on what screenshot or artifact to create
- The file path where the image should go (`public/images/...`)
- A caption that will appear under the real photo

**To add a photo:**
1. Read the placeholder suggestion in the browser
2. Take the screenshot / export the Figma frame / photograph the whiteboard
3. Save it to the path shown in the placeholder (e.g., `public/images/cases/blackstone/cover.png`)
4. Refresh — the placeholder disappears and the real image appears

**Recommended image specs:**
- Format: PNG or WebP
- Width: 1200–1600px
- Aspect ratio: 16:9 or 3:2 (landscape works best)
- File size: under 500KB (compress with squoosh.app if needed)

**Photo priority order (highest impact first):**
1. `blackstone/after-consistency.png` — Before/after is the most powerful proof of system impact
2. `cursor/concept-sketch.png` — Your Figma wireframe of "Cursor for PMs" (design differentiator)
3. `perplexity/workspace-concept.png` — Your Figma wireframe of "Perplexity Workspace"
4. `equityzen/affinity-map.png` — Post-interview synthesis (iconic research imagery)
5. `blackstone/token-architecture.png` — Shows systems thinking depth

---

## Adding a New Case Study

Open `lib/cases.ts` and add a new object to the `cases` array following the existing structure.
The `[slug]/page.tsx` route is already dynamic — no routing changes needed.

---

## Adding a New Teardown

Same pattern: open `lib/teardowns.ts`, add to the `teardowns` array.

---

## Customizing Content

All portfolio content lives in `lib/cases.ts` and `lib/teardowns.ts`.
All styles live in `app/globals.css` using CSS custom properties (variables).
Light/dark colors are in the `:root` and `.dark` blocks at the top of `globals.css`.

---

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

That's it. Vercel auto-detects Next.js. Free tier is more than sufficient for a portfolio.

---

## Annotation Color System (for teardown photos)

Be consistent across all teardown screenshots:
- 🟢 **Green box/arrow** = What's Working
- 🔴 **Red box/arrow** = What's Broken
- 🔵 **Blue box/arrow** = The Opportunity / Your Bet
- **Numbered labels** (1, 2, 3) = Multiple issues annotated with a legend below

Use Figma, CleanShot X, or Skitch for annotations.
