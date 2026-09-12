# Sanidhya Srivastava — Portfolio

React + TypeScript + Tailwind CSS + Framer Motion. Single-page, sectioned portfolio built from
your resume content only.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build
```

Output goes to `dist/` — deploy that folder to Render (or Vercel/Netlify) as a static site.

## Before you deploy — 2 things to do

1. **Add your photo.** Drop a square-ish photo into `public/profile-photo.jpg`
   (recommend ~500x500px, JPG). If it's missing, the hero gracefully falls back to a
   monogram, so nothing breaks — but add the real photo for the full effect.
2. **Resume PDF.** `public/Sanidhya_Srivastava_Resume.pdf` was generated from your uploaded
   `.docx` — swap it out any time you update your resume; just keep the filename or update the
   `resumeFile` path in `src/data/content.ts`.

## Editing content

All resume-derived copy lives in one place: `src/data/content.ts`. Update your profile,
projects, skills, experience, education, and the "currently building" log there — no need to
touch component files for content changes.

## Design notes

- Palette: deep charcoal-navy base (`#0A0D11`) with a desaturated cyan signal color (`#4FC9E0`),
  used sparingly.
- Type: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (technical labels only).
- The vertical line on the left (desktop only) is a scroll-progress "signal" — a nod to the
  data-pipeline theme running through your projects.
- Project cards expand in place ("case files") instead of linking out, so recruiters can scan
  problem → approach → stack without leaving the page.
