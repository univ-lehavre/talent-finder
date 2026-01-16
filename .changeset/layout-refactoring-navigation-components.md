---
'talent-finder': minor
---

Add reusable navigation and layout components

New UI components:

- `Navbar`: Complete navigation bar with desktop/mobile views, logo, nav links, icon links, and user actions
- `Footer`: Footer with partner logos and version info
- `Drawer`: Slide-in side panel (offcanvas) with backdrop and keyboard support
- `NavLink`: Navigation link with icon and active state
- `IconLink`: Clickable icon with tooltip
- `Tooltip`: Hover tooltip with title and description

Refactored `+layout.svelte` to use the new components, reducing code by ~60%.
