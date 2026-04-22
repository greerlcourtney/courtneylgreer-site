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
| `src/components/Main.js` | Page content and data |
| `src/theme.css` | Design tokens |
| `src/styles/` | Layout, sections, animations |
| `public/` | Static assets, `index.html`, PWA manifest |

## License / usage

Private project; all rights reserved unless you add a license file stating otherwise.
