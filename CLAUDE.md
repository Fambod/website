# FamBod website

Static marketing site for FamBod: hand-written HTML + Tailwind CSS, served at
**https://fambod.com** by GitHub Pages (custom domain via `public/CNAME`).

## Public repo: keep PRs and commits minimal

This repository is public. PR titles, PR descriptions and commit messages must be
extremely minimal: state what changed in one or two short sentences, and nothing more.

Never include:
- business context, or the reasons or motivation behind a change
- plans, timelines, or the history of how something came about
- legal, compliance, security or vendor status
- links or paths to internal documents, or references to internal discussions

When in doubt, leave it out. Share context privately, never on GitHub.

## Layout

| Path | What it is |
| --- | --- |
| `public/` | **Everything that ships.** The deploy uploads this directory as-is. |
| `public/index.html` | Landing page |
| `public/privacy-data-policy.html`, `public/terms-of-use.html` | Legal pages |
| `public/fambod-alpha-one-pager.html` | Alpha download page (links live in its `CONFIG` block) |
| `src/style.css` | Tailwind entry point + hand-written custom rules |
| `tailwind.config.js` | Custom breakpoints (`xxs`–`4xl`), brand colours, fonts |

## Shipping

**`main` is production.** Every push to `main` deploys straight to fambod.com.
There is no staging environment, so always work on a branch and open a PR.
PRs run the same build as the deploy (without deploying).

## CSS is generated — never commit it

`public/css/style.css` is a build artifact: gitignored and rebuilt in CI on every
deploy. Edit `src/style.css` or the Tailwind classes in the HTML instead.

```bash
npm ci            # install dependencies (node_modules is not committed)
npm run build:css # one-off build
npm run watch:css # rebuild on change while working
npm run serve     # preview at http://localhost:4173
```
