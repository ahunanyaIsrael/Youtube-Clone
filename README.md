# YouTube Clone (React + Vite)

Lightweight YouTube-like interface built with React and Vite — a learning/demo project that showcases a simple video feed, sidebar, recommended videos and a Play view.

**Highlights**

- Modern React with Vite for fast dev builds
- Componentized layout: `NavBar`, `SideBar`, `Feed`, `Recommended`, `PlayVideo`
- Routing-ready (uses `react-router-dom`) and moment-based date handling

**Repo owner:** ahunanyaIsrael

## Features

- Video feed with thumbnails and titles
- Play view for a selected video
- Sidebar navigation and recommended videos list
- Simple, responsive UI (CSS modules / component styles under `src/components`)

## Tech Stack

- React
- Vite
- react-router-dom
- moment (for date/time formatting)
- Plain CSS modules (each component has its own `.css` file)

## Project Structure (important files)

- `src/` — application source
  - `App.jsx` — app shell and routes
  - `main.jsx` — app entry
  - `data.js` — sample data used by the UI
  - `components/` — UI components (see subfolders)
    - `NavBar/`, `SideBar/`, `Feed/`, `Recommended/`, `PlayVideo/`
  - `pages/` — page-level components `Home/` and `Video/`
- `index.html`, `vite.config.js` — Vite configuration and entry HTML
- `package.json` — dependencies and scripts

## Getting Started

Prerequisites

- Node.js (v16+ recommended)

Install dependencies

PowerShell

```
npm install
```

Start the dev server

PowerShell

```
npm run dev
```

Build for production

PowerShell

```
npm run build
```

Preview production build locally

PowerShell

```
npm run preview
```

## Available Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — locally preview production build

## Notes

- Routing is prepared in `App.jsx` and pages live under `src/pages`.
- Sample data is provided in `src/data.js`; replace with live API calls to connect to a real backend.

## Deployment

- Ready to deploy on Vercel (a `vercel.json` file is included). Connect the repo and deploy the `main` branch.

## Contributing

Feel free to open issues or PRs. Suggested next improvements:

- Add lazy-loading for video thumbnails
- Integrate with a real video API (YouTube Data API or a mock service)
- Add unit tests and CI (GitHub Actions)

## License

This repository includes a `LICENSE` file. Check it for the project license.

---

If you'd like, I can add screenshots, update `package.json` with a preview script, or open a PR that wires a simple API. What would you like next?
