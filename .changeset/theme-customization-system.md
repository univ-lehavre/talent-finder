---
'talent-finder': minor
---

Add theme customization system with admin-only access

- Add theme page (/theme) with color palette and font pairing selection
- Restrict theme page access to admin users via Appwrite labels
- Add 36 theme palettes organized in 6 categories (professional, nature, vibrant, minimal, warm, cool)
- Add 40 font pairings organized in 4 categories (sans-serif, serif, display, technical)
- Create reusable UI components (Alert, Badge, Card, Icon, Modal, StatCard, ThemeSection, ThemeToggle)
- Add global theme CSS variables applied via layout
- Implement light/dark mode toggle with system preference detection
- Add Home link to main navigation
- Persist theme and font preferences in localStorage
