# AI Business Systems

AI Business Systems is a responsive, design-led marketing website for a digital consultancy that helps companies design and implement AI-powered business workflows. The site presents the offer, explains the value of AI systems, and gives potential clients a clear path to start a conversation.

## Live demo

> **Vercel demo:** [design-ai-business-systems-demo.vercel.app](https://design-ai-business-systems-demo.vercel.app)

## What the project demonstrates

- A polished responsive landing page built from reusable React sections and components.
- Clear visual hierarchy, typography, spacing, and conversion-focused calls to action.
- Responsive behavior for desktop, tablet, and mobile layouts.
- A maintainable frontend structure that separates routing, page composition, UI components, assets, and styling.

## Technology stack

- **React** — component-based UI.
- **TypeScript** — typed component contracts and safer refactoring.
- **Vite** — local development server and production bundling.
- **Custom pathname routing** — explicit route matching in `src/router.tsx` (no router package).
- **Tailwind CSS / utility-first styling** — responsive layout and visual consistency.
- **ESLint and Prettier** — code quality and formatting.

## Architecture

The application uses a small presentation-focused frontend architecture. Route definitions compose page-level screens; pages compose reusable sections; components own local presentation and interaction; assets and global styles remain separate from application logic.

```text
src/
├── components/    # Reusable UI building blocks
├── pages/         # Route-level screens and page composition
├── assets/        # Images, icons, and imported media
├── styles/        # Global styles and design tokens
├── router.tsx     # Client-side route definitions
└── main.tsx       # Application entry point
```

## Run locally

### Requirements

- Node.js 18+
- npm 9+

```bash
pnpm install
pnpm dev
```

The development server normally runs at `http://localhost:8443/`.

### Production build

```bash
pnpm build
pnpm preview
```

Run the available quality checks before submitting changes:

```bash
pnpm format
```

If a script is not present in `package.json`, skip that command or use the repository's equivalent.

## Deployment

The app is suitable for static hosting on Vercel:

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

No backend service is required for the core marketing experience. Future integrations such as a contact form, analytics, CMS, or API can be added behind environment variables without changing the page composition model.

## Important notes for reviewers

This project is primarily a frontend portfolio implementation. Its main engineering focus is responsive UI, reusable component structure, routing, visual consistency, and production-ready build configuration. It does not claim to be a complete AI backend or business automation platform; it is the public-facing presentation layer for that concept.

## Suggested review flow

1. Start the app with `npm run dev`.
2. Review the main route at desktop and mobile widths.
3. Inspect `src/router.tsx` and the page/component structure.
4. Run `npm run build` to verify the production bundle.

## Routes

| Path                                    | Page                       |
| --------------------------------------- | -------------------------- |
| `/`                                     | Home                       |
| `/products/sales-manager/`              | Sales Manager              |
| `/products/ai-agent-master/`            | AI Agent 1.0 Master        |
| `/products/business-app/`               | An App for Your Business   |
| `/products/autonomous-business-system/` | Autonomous Business System |
| Any other path                          | 404 Not Found              |

## Routes

| Path                                    | Page                       |
| --------------------------------------- | -------------------------- |
| `/`                                     | Home                       |
| `/products/sales-manager/`              | Sales Manager              |
| `/products/ai-agent-master/`            | AI Agent 1.0 Master        |
| `/products/business-app/`               | An App for Your Business   |
| `/products/autonomous-business-system/` | Autonomous Business System |
| _(anything else)_                       | 404 Not Found              |

## Tech stack

- React 19 + React DOM
- Vite (dev server, production build)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- TypeScript (strict)

No router library or additional UI framework is used — navigation is handled by a small, explicit path matcher in `src/router.tsx`, matching the original Figma Make setup.

## Project structure (`src/`)

```
App.tsx            # App entry; resolves the current route and renders the page
main.tsx           # React entrypoint; mounts App and imports global CSS
index.css          # Global CSS, Tailwind import, design tokens
router.tsx         # Route definitions and pathname matching
vite-env.d.ts      # Vite client types

types/             # Shared TypeScript types (Product, Service)
data/              # Static content (products, services, audiences, outcomes, process, advantages)
hooks/             # Custom hooks (usePageTitle)
components/
  layout/          # Header, Footer, Brand
  ui/              # Arrow, Eyebrow, SectionHeading, InfoGrid
  contact/         # ContactCta
  products/        # ProductShell, ProductHero
  sections/        # Home page sections (Hero, Problem, Products, Services, Process)
pages/
  Home.tsx
  NotFound.tsx
  products/        # SalesManager, AgentMaster, BusinessApp, AutonomousSystem
```

## Scripts

- `pnpm dev` — start the Vite dev server (already running on `$PORT`, default 8443)
- `pnpm build` — production build to `dist/`
- `pnpm preview` — preview the production build
- `pnpm format` — format source with oxfmt
