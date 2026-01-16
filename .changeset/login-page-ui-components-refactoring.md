---
'talent-finder': minor
---

feat(ui): add CenteredLayout, LoadingState, Button components and refactor login/error pages

- Add CenteredLayout component for full-page centered content (auth, error, confirmation pages)
- Add LoadingState component for loading states with title, spinner and message
- Add Button component for interactive buttons with variants (primary, secondary, accent, outline, ghost)
- Refactor login page to use CenteredLayout, LoadingState and LinkButton components
- Refactor error page to use LinkButton and Button components
- Export new components from $lib/ui index
