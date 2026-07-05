# courtneylgreer-site

Personal site: career story, projects, speaking, and community work—built with [Create React App](https://create-react-app.dev/) and React 19.

## Requirements

- **Node.js** 18 or 20 (LTS recommended; CI uses 20)
- **npm** 9+ (uses `npm ci` in automation)

## Local development

This repo uses [`.npmrc`](.npmrc) with `legacy-peer-deps=true` so `npm install` works cleanly with Create React App and packages such as `@vercel/analytics` (their optional peer metadata conflicts with CRA’s TypeScript pin).

```bash
npm ci
npm start
```

Opens the dev server at [http://localhost:3000](http://localhost:3000) with hot reload.

## Scripts

| Command        | Purpose                                      |
| -------------- | -------------------------------------------- |
| `npm start`    | Development server                           |
| `npm run build`| Optimized production bundle in `build/`      |
| `npm test`     | Jest tests (`CI=true` for non-interactive)   |
| `npm audit`    | Check dependencies for known vulnerabilities |

## Analytics (Vercel)

[`@vercel/analytics`](https://vercel.com/docs/analytics) is wired in [`src/App.js`](src/App.js) via `<Analytics />`. After you deploy on Vercel, open the project **Analytics** tab; page views appear as you (and visitors) load the site. Use **Speed Insights** separately if you want Web Vitals.

## Deployment process

**The `build/` folder is not committed** (see `.gitignore`). Your host must run a production build:

1. Connect your host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.) to this repository.
2. Set the **build command** to `npm run build` and the **publish directory** to `build` (or your host’s equivalent).
3. Set **install command** to `npm ci` when possible for reproducible installs.

If your host was previously serving a committed `build/` from git, switch it to a CI build so pushes stay small and secrets never land in static files by mistake.

## Continuous integration

GitHub Actions (`.github/workflows/ci.yml`) runs on pushes and pull requests to `main`:

- `npm ci`
- `CI=true npm test -- --watchAll=false`
- `npm run build`

Keep `main` green before relying on automatic deploys.

## Dependency updates

[Dependabot](.github/dependabot.yml) opens weekly grouped PRs for npm dependencies. Review changelogs, run `npm test` and `npm run build` locally, then merge.

## Maintenance (legacy)

`node_modules/` is still **tracked in git** from an earlier setup. `.gitignore` stops new untracked noise locally, but **tracked** paths are not ignored—avoid `git add node_modules/`. A future cleanup is to run `git rm -r --cached node_modules` once (large diff), rely on `npm ci` in CI and on hosts, and never commit dependencies again.

## Security

See [SECURITY.md](SECURITY.md) for how to report issues and project-specific notes.

Quick checklist:

- Never commit `.env`, `.env.local`, or secrets.
- Remember: **`REACT_APP_*` variables are public** in the built JavaScript.
- Run `npm audit` regularly; use `npm audit fix` (and review breaking upgrades manually).

## Project layout

| Path | Role |
| ---- | ---- |
| `src/App.js` | Route definitions (React Router v7) |
| `src/components/pages/` | One file per route (`HomePage`, `ExperiencePage`, `ProjectsPage`, `ConsultingPage`, `FilmPage`) |
| `src/components/layout/` | `Layout.js` (shell), `Navbar.js`, `Footer.js` |
| `src/components/shared/` | Reusable components (`CardMore`, `CardMedia`, `ExternalOrPlaceholderLink`) |
| `src/components/data/` | Content arrays (`projects.js`, `experience.js`, `filmCredits.js`, etc.) — edit here to update page content |
| `src/theme.css` | Design tokens (colors, spacing, type scale, motion) |
| `src/App.css` | Imports `theme.css` and all per-feature stylesheets |
| `src/styles/` | Per-feature stylesheets (`base.css`, `sections.css`, `navbar.css`, `film.css`, `consulting.css`, `animations.css`) |
| `public/` | Static assets, `index.html`, PWA manifest |

## Coding agent guide

Context a coding agent (or new contributor) needs to work effectively in this repo:

**Stack**
- Create React App (CRA) + React 19 + React Router v7 — SPA, no SSR, no Next.js/Astro
- Plain CSS with design tokens in `src/theme.css` — no Tailwind, no CSS-in-JS
- Jest + React Testing Library — all tests colocated as `*.test.js` next to the file they test

**Adding a page**
1. Create `src/components/pages/MyPage.js`. Set `document.title` in a `useEffect`.
2. Add a `<Route path="my-page" element={<MyPage />} />` inside the `<Route element={<Layout />}>` block in `src/App.js`.
3. Add a `<NavLink to="/my-page">` in `src/components/layout/Navbar.js`.
4. Create `src/styles/my-page.css` and import it at the bottom of `src/App.css`.
5. Add `src/components/pages/MyPage.test.js` following existing page test patterns.

**Adding content (no page changes needed)**
- All page content is in `src/components/data/*.js` as exported arrays. Edit the array; the page re-renders automatically.
- `filmCredits.js` shape: `{ title, roles, year, status? }` — used by both `FilmPage` and `ProjectsPage`.

**Styling conventions**
- Use `var(--token-name)` from `src/theme.css` — never hardcode colors or spacing values.
- Full-width dark bands use the negative-margin technique: `margin: 0 calc(-1 * var(--space-page-inline)); padding-inline: var(--space-page-inline);`
- Dark/cinematic sections use `--black` or `--surface-inverse` backgrounds with `--on-inverse` text.
- Mobile breakpoint: `@media (max-width: 768px)` — keep it in the same stylesheet as the component.

**Testing**
- Run `npm test` locally before pushing. CI (`CI=true npm run test:coverage`) must pass on every push.
- Page tests render the component directly (no router wrapper needed) as long as the component only uses plain `<a>` tags, not `<Link>`.
- If a component needs router context, wrap in `<MemoryRouter>` from `react-router-dom` in the test.

**Deployment pipeline**
1. Work on a feature branch or `develop`.
2. Push → GitHub Actions CI runs automatically (install → test:coverage → build).
3. Open a PR into `main` when CI is green.
4. Merging to `main` triggers a Vercel production deploy automatically (Vercel is connected to this repo; SPA fallback is configured in `vercel.json`).
5. Preview deploys are available for every open PR via Vercel.

## License / usage

Private project; all rights reserved unless you add a license file stating otherwise.
