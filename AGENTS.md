<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project snapshot

Next.js 16 App Router app. The app itself is still a shell; nearly all code is the vendored shadcn/Base UI component set.

## Commands

- `npm install` — use npm; `package-lock.json` is the only lockfile. Node 22+ (`cn` engine requirement).
- `npm run dev` — Turbopack dev server; regenerates route types.
- `npm run build` — full check: TypeScript plus prerendering.
- `npm run lint` — ESLint flat config for the whole repo (not `next lint`). Focus with `npx eslint src/app/page.tsx`.
- `npx tsc --noEmit` — typecheck only; no typecheck script exists.
- `npx next typegen` — regenerate `PageProps`/`LayoutProps` after adding routes.
- No test runner or test script exists, so there is no single-test command.

## Architecture

- Routes: `src/app`. Alias: `@/*` -> `src/*`. There is no root `app/`; the stock README is stale.
- `next.config.ts` enables Cache Components, Partial Prefetching, and React Compiler, and sends every `*.css` through `@tailwindcss/turbopack`.
- Cache Components makes data dynamic by default. Cache async work with `"use cache"` (pair it with `cacheLife`), or wrap uncached reads in `<Suspense>`; otherwise a prerender error blocks the build. No `runtime` route exports (Cache Components is Node-only).
- Route props are generated globals: `PageProps<'/path'>` / `LayoutProps<'/'>`; `params` and `searchParams` are Promises. Don't hand-write these types.
- Tailwind v4 is CSS-first: design tokens live in `src/app/globals.css` (`@theme inline` plus `:root`/`.dark`). There is no `tailwind.config.*` or PostCSS config; don't add one.
- `src/components/ui` holds the shadcn `base-nova` primitives. Prefer composing these over adding another UI dependency.

## Component gotchas

- Components use `@base-ui/react`, not Radix. Composition is `render={<Button />}`, never `asChild`; prop types look like `DialogPrimitive.Popup.Props`.
- Import `cn` from `"cn"` (the Tailwind v4 merge package). `src/lib/utils.ts` only re-exports it, so editing that file does not affect existing components. Don't add `clsx`/`tailwind-merge`.
- Keep generated `data-slot` attributes: variants use selectors such as `in-data-[slot=button-group]`.
- Shiki highlighting lives in `src/lib/highlighter.tsx`. Add languages to its `languages` map; unlisted languages fall back to plain text.
- Add primitives with `npx shadcn add <name>` so `components.json` (`base-nova`, lucide icons, `@/` aliases) is respected.

## Baseline

- `npm run lint` currently exits 1: `react-hooks/set-state-in-effect` in `src/components/ui/carousel.tsx` and `src/hooks/use-mobile.ts`, plus an unused `Image` warning in `src/app/page.tsx`. Don't mistake these for regressions.
- No CI workflows exist. `npm run build` is the strongest verification available.
- `next dev` maintains the managed Next.js block at the top of this file; keep that block intact and commit it.
