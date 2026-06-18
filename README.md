# Portfolio Project (for sinitski.github.io)

This folder is a ready-to-publish static portfolio project for GitHub Pages.

## Included

- `index.html` - portfolio homepage with prominent links to demo, repo, and case study
- `case-studies/sitewatcher.html` - focused project write-up
- `styles.css` - responsive visual system
- `script.js` - lightweight link click tracking hooks

## Publish to GitHub Pages (root site)

1. Create a repository named `sinitski.github.io`.
2. Copy the contents of this folder into the root of that repository.
3. Push to `main`.
4. In repository settings, ensure GitHub Pages source is set to deploy from `main` branch root.

## Tracking notes

`script.js` emits click events to:

- `window.dataLayer` if present
- `gtag` if Google Analytics is installed
- `plausible` if Plausible is installed

No external analytics script is included by default.
