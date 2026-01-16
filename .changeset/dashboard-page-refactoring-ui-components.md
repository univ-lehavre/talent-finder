---
"talent-finder": minor
---

feat(ui): add dashboard components and refactor dashboard page

New UI components:
- ProfileCard: User profile summary with email and status badge
- ThemePreferencesCard: Theme settings display with palette/font toggles
- ThemeToggleRow: Reusable row for theme toggle buttons
- DashboardLinkCard: Card with icon, title, description and navigation link
- ExternalLinkCard: Clickable card for external links
- ExternalLinksCard: Container for multiple external links
- ComingSoonSection: Alert-based section for upcoming features

Dashboard page refactoring:
- Replaced ~200 lines of inline HTML with reusable components
- Uses Grid component for responsive layout
- Components compose existing UI primitives (InfoCard, Badge, Alert, etc.)
