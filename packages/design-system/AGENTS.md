# Repository Guidelines

## Project Structure & Module Organization
- Source: Next.js App Router under `src/app`, organized by route segment (e.g., `src/app/(billing)/page.tsx`). Co‑locate UI, CSS, and helpers within the segment folder.
- Shared UI/components: `src/app/_components`. Shared utilities: `src/lib`. Static assets: `public/` (served from `/`).
- Tests: co‑locate as `*.test.ts(x)` next to units or place in `src/__tests__`.

## Build, Test, and Development Commands
- `npm run dev`: Start the dev server (Turbopack) at `http://localhost:3000`.
- `npm run build`: Production build via `next build`.
- `npm start`: Run the built app with `next start`.
- `npm run lint`: Lint using Next + TypeScript ESLint config.
- `npm test`: Run tests once Vitest is configured (e.g., `vitest run`).

## Coding Style & Naming Conventions
- TypeScript strict; prefer explicit return types for public APIs. Avoid default exports for shared modules.
- Indentation: 2 spaces; target line length ~100 chars.
- Filenames: routes in `app/` use kebab‑case (`page.tsx`, `layout.tsx`); React components `PascalCase.tsx`; utilities `camelCase.ts`.
- CSS: prefer CSS Modules (`*.module.css`) local to a route/component.
- Imports: use the `@/*` alias, e.g., `import { x } from '@/lib/x'`.

## Testing Guidelines
- Tooling: Vitest (+ React Testing Library if needed).
- Placement: co‑locate tests as `*.test.ts(x)` or use `src/__tests__`.
- Conventions: focused assertions, mock only boundaries, aim ~80% coverage on new/changed code.
- Execution: add `"test": "vitest run"` to `package.json`, then run `npm test`.

## Commit & Pull Request Guidelines
- Commits: follow Conventional Commits, e.g., `feat: add billing route`, `fix(app): handle 404`.
- PRs: include a concise summary, linked issue(s), screenshots for UI changes, and trade‑offs.
- Quality gates: ensure `npm run lint` and `npm run build` pass before requesting review.

## Security & Configuration Tips
- Secrets live in `.env.local` (never commit). Public env vars must start with `NEXT_PUBLIC_`.
- Adjust framework settings in `next.config.ts`.
- Validate external inputs; avoid server‑only code in client components.
