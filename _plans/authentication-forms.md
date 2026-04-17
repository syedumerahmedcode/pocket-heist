# Authentication Forms

## Context

The `/login` and `/signup` pages are currently stubs with only a heading. This plan implements the authentication forms described in `_specs/authentication-forms.md`: email + password fields, a password visibility toggle, a submit button, and a link to switch between forms. Submission logs to console only — no backend integration.

## Approach

Create a single shared `AuthForm` component that accepts a `mode` prop (`'login' | 'signup'`). Both pages import the same component with the appropriate mode. This satisfies the "easily switch between forms" requirement by sharing all logic and structure.

---

## Files to Create

### `components/AuthForm/AuthForm.tsx`
- `'use client'` directive (requires `useState`)
- Props: `{ mode: 'login' | 'signup' }`
- State: `email`, `password`, `showPassword`
- Import `Eye`, `EyeOff` from `lucide-react` for the password toggle icon
- `handleSubmit`: calls `e.preventDefault()` then `console.log({ email, password })`
- Renders:
  - `<form>` with `onSubmit={handleSubmit}`
  - Email `<input type="email">` bound to `email` state
  - Password `<input>` with `type` toggled between `"password"` / `"text"` via `showPassword` state
  - `<button>` inside the password wrapper to toggle `showPassword`, rendering `<Eye>` or `<EyeOff>`
  - Submit `<button>` — label is `"Login"` or `"Sign Up"` based on `mode`
  - Switch link: `"Don't have an account?"` → `/signup` (login mode) / `"Already have an account?"` → `/login` (signup mode)
- Use `styles.*` classes for all multi-class elements (CSS module); reuse global `.btn` and `.form-title` classes directly

### `components/AuthForm/AuthForm.module.css`
- `@reference "../../app/globals.css"` at top
- `.form` — flex column layout with gap
- `.field` — label + input stacked column layout
- `.input` — input field styling (border, padding, rounded, bg-light, text-heading, focus ring in primary colour)
- `.passwordWrapper` — `position: relative` wrapper for input + toggle
- `.toggle` — absolutely positioned toggle button (right side of input, vertically centred); no background/border, cursor pointer, text-body colour
- `.switchLink` — centred text for the form-switch line; links styled in primary colour

### `components/AuthForm/index.ts`
```ts
export { default } from "./AuthForm"
```

### `tests/components/AuthForm.test.tsx`
Tests (using `render`, `screen`, `fireEvent` from `@testing-library/react` and `vi` from `vitest`):
1. Renders email and password fields
2. Password field defaults to `type="password"`
3. Clicking the toggle button changes password field to `type="text"`
4. Clicking the toggle button again reverts to `type="password"`
5. Submitting the form calls `console.log` with `{ email, password }`
6. In login mode — renders a link to `/signup`
7. In signup mode — renders a link to `/login`

---

## Files to Modify

### `app/(public)/login/page.tsx`
Replace stub with:
```tsx
import AuthForm from "@/components/AuthForm"
export default function LoginPage() {
  return (
    <div className="center-content">
      <div className="page-content">
        <AuthForm mode="login" />
      </div>
    </div>
  )
}
```

### `app/(public)/signup/page.tsx`
Same structure with `mode="signup"`.

---

## Verification

1. `npm run dev` — visit `/login` and `/signup`, confirm forms render correctly
2. Toggle the password visibility icon on each page
3. Fill in email + password and submit — check browser console for `{ email, password }`
4. Click the switch link on each page — confirm navigation to the other form
5. `npx vitest run tests/components/AuthForm.test.tsx` — all tests pass
6. `npm run lint` — no lint errors
