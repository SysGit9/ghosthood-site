# AGENTS.md — Ghosthood

## Context
- Static site served from `/site` on branch `main` via GitHub Pages.
- No build step yet; keep it simple & fast.

## Allowed
- Add/update HTML/CSS in `/site` (e.g., create about.html, contact.html).
- Keep styles minimal and consistent with index.
- Maintain accessibility basics (semantic tags, alt text).
- Small, descriptive commits. Conventional style: feat:, fix:, docs:, chore:.

## Not allowed (without explicit approval)
- Adding heavy frameworks/bundlers.
- Third-party trackers or external fonts.

## Deployment
- Deploys automatically on push to `main` (see `.github/workflows/pages.yml`).
