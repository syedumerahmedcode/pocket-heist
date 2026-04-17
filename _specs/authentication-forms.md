# Spec for authentication-forms

branch: claude/feature/authentication-forms
figma_component (if used): N/A

## Summary

Build the login and signup forms for the `/login` and `/signup` public pages. Each form includes email and password fields, a toggle to show/hide the password, and a submit button. On submission, form data is logged to the console only (no backend integration yet). Users can navigate easily between the two forms via a link.

## Functional Requirements

- The `/login` page renders a login form with:
  - An email input field
  - A password input field with a show/hide toggle icon
  - A "Login" submit button
  - A link to navigate to `/signup`
- The `/signup` page renders a signup form with:
  - An email input field
  - A password input field with a show/hide toggle icon
  - A "Sign Up" submit button
  - A link to navigate to `/login`
- Clicking the show/hide icon toggles the password field between `type="password"` and `type="text"`
- On form submission, log the email and password values to the browser console
- Form submission does not navigate away or call any API
- Both forms should share the same visual structure and reuse the same form component where possible

## Figma Design Reference (only if referenced)

- File: N/A
- Component name: N/A
- Key visual constraints: N/A

## Possible Edge Cases

- User submits the form with empty fields — should still log (empty strings) without breaking
- User toggles password visibility multiple times in succession
- User navigates between login and signup — form state should reset on page change

## Acceptance Criteria

- `/login` renders a form with email, password (with toggle), and a Login button
- `/signup` renders a form with email, password (with toggle), and a Sign Up button
- Submitting either form logs `{ email, password }` to the console
- The password toggle correctly shows and hides the password text
- Each page contains a navigation link to the other (`/login` ↔ `/signup`)
- Forms are visually consistent with each other

## Open Questions

- Should the password toggle icon use an existing icon library already in the project, or a custom SVG? Use icons which exist in the project already.
- Should client-side validation (e.g. required fields, email format) be included in this spec or deferred? They should be defferred.

## Testing Guidelines

Create a test file(s) in the ./tests folder for the new feature, and create meaningful tests for the following cases, without going too heavy:

- Renders the email and password fields
- Password field defaults to `type="password"`
- Clicking the show/hide toggle changes the password field type to `type="text"` and back
- Submitting the form calls `console.log` with the entered email and password
- The navigation link to the other form is present and points to the correct route
