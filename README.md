# Kundrapu Tanishq — Portfolio

Personal portfolio built as a multi-page React SPA.

## Stack

- React 19 + TypeScript + Vite
- React Router (client-side routing, deep-linkable routes)
- Framer Motion (page transitions, reveals, scroll-linked motion)

## Structure

```
src/
  data/         content — profile, projects, skills, journey (edit these to update copy)
  components/   layout (nav/footer/cursor), ui (buttons/reveals), home, projects
  pages/        one file per route
```

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build   # outputs to dist/
npm run preview
```

Deploys as a static SPA — `vercel.json` and `public/_redirects` handle
client-side route fallback for Vercel and Netlify respectively.

`legacy-static/` holds the previous vanilla HTML/CSS/JS version of this
site, kept for reference.
