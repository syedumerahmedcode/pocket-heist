# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run lint      # Run ESLint
npm run test      # Run all Vitest tests (watch mode)
npx vitest run    # Run tests once (no watch)
npx vitest run tests/components/Navbar.test.tsx  # Run a single test file
```

## Architecture

### Routing

Next.js App Router with two **route groups** that share the root layout (`app/layout.tsx`):

- `app/(public)/` — unauthenticated pages (home/splash, login, signup, preview). Wrapped in a `<main class="public">` shell.
- `app/(dashboard)/` — authenticated pages under `/heists`. Wraps every page with the `<Navbar />` component.

The home page (`(public)/page.tsx`) is intended as a redirect gate: send logged-in users to `/heists`, others to `/login`. That logic is not yet implemented.

### Styling

Tailwind CSS 4 via PostCSS. The theme (colours, font) is declared in `app/globals.css` using the `@theme` block — **not** in a `tailwind.config` file. Reusable layout classes (`.page-content`, `.center-content`, etc.) are also defined there. Component-scoped styles use CSS Modules (e.g. `Navbar.module.css`).

### Components

Reusable components live in `components/<Name>/` with a barrel `index.ts` for imports. Use the `@/` path alias for all imports.

### Testing

Vitest + Testing Library. Tests live in `tests/` mirroring the `components/` structure. Use `screen` queries and accessible roles — see `Navbar.test.tsx` as the reference pattern.

## Additional Coding preferences

- Do not use semicolons for Javascript and typescript code.
- Do not apply tailwind classes directly in component templates unless essential or just 1 at most. If an element needs more than a single tailwind class, combine them in a custom class usinf @apply directive.
- Use minimal project dependencies where possible.
- use the `git switch -c` command to switch to new branches, not `git checkout`.
