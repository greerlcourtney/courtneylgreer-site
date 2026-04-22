# Security

This repository is a static Create React App site. There is no server-side code in this repo.

## Reporting a vulnerability

If you believe you have found a security issue (for example, exposed credentials in git history, a dependency with a known critical CVE, or a problem with how the site is hosted), please report it responsibly:

1. **Do not** open a public GitHub issue for undisclosed sensitive details.
2. Contact the maintainer privately (for example, via the email on the site or GitHub private security advisory for this repository, if enabled).

## Practices for this project

- Do not commit API keys, tokens, or `.env` files. Anything prefixed with `REACT_APP_` is embedded in the client bundle and is **public** to anyone who loads the site.
- Run `npm audit` before releases and apply patches (`npm audit fix`) where safe.
- Prefer lockfile-driven installs in CI: `npm ci` (not `npm install`) for reproducible builds.

## Hosting

Use HTTPS on your hosting provider, keep the default security headers your platform provides, and rebuild after dependency updates.
