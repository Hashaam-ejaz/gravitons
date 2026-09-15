# Gravitons Landing Page

A single-page marketing site for GRAVITONS, built with Vite + React + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Outputs static files to `dist/` — this is what you deploy. Preview the
production build locally with `npm run preview`.

## Project structure

```
src/
  GravitonsLanding.jsx   the entire page (one component)
  main.jsx               React entry point
  index.css              Tailwind directives
  assets/
    gravitons-icon.webp  logo mark (transparent background)
public/
  favicon.webp
```

## Editing content

All copy, service lists, leadership info, etc. live as plain arrays near
the top of `src/GravitonsLanding.jsx` (`CORE_VALUES`, `SERVICES`,
`DIFFERENTIATORS`, `SECTORS`, `LEADERSHIP`, `CERTIFICATIONS`, `CSR`) —
edit those directly, no need to touch the JSX layout below.

Brand colors are CSS variables at the top of the `<style>` block inside
`GravitonsLanding.jsx` (`--navy`, `--gold`, etc.).
