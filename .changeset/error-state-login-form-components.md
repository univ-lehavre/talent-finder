---
'talent-finder': minor
---

feat(ui): add ErrorState, ButtonGroup, LoginForm components and fix login page

- Add ErrorState component for consistent error display with icon, code, title, message, and actions
- Add ButtonGroup component for flexible button layouts with orientation and justify options
- Add LoginForm component for standalone magic link authentication
- Refactor +error.svelte to use new ErrorState and ButtonGroup components
- Fix login page to handle both direct access (show form) and magic link callback (validate & redirect)
- Add redirect to dashboard when already logged in
