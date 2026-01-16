---
'talent-finder': minor
---

Refactor imports and add i18n error translation system

## Import refactoring

### Content locale imports
Replace deep relative imports (e.g., `../../../types`, `../../../core/brand`) with
`$lib/content/...` aliases across all locale files for improved readability and
maintainability.

- English locale: brand, app, marketing, shared, system files (15 files)
- French locale: app, marketing, shared, system files (15 files)

### Route imports
Update all routes to import from `$lib/components` instead of `$lib/ui` directly.
UI components are now re-exported through `$lib/components` for architectural consistency.

- Re-export ~40 generic UI components in `common/index.ts`
- Re-export dashboard-specific components in `dashboard/index.ts`
- Updated routes: +error, +page, dashboard, login, repository, theme

## New features

### Homepage meta i18n
Add `meta` section to `HomeContent` type with `title` and `description` translations
for both FR and EN locales.

### Error code translation system
Server-side now returns error codes instead of messages. Client-side translates
codes to localized messages.

- Add `errorCodes` section to `AuthContent` type (FR/EN)
- Server actions return `code` instead of `message`
- `LoginForm` and `Signup` wrappers translate error codes
- Error codes: `invalid_email`, `magicurl_login_validation_error`, `signup_failed`,
  `login_failed`, `invalid_magic_link`, `unexpected_error`
