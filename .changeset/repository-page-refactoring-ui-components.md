---
'talent-finder': minor
---

feat(ui): add data display components and refactor repository page

New components:

- **LinkButton**: Styled link that looks like a button with variants, icons, and external link support
- **DataTable**: Generic data table with customizable cell rendering via snippets
- **KeyValue**: Label/value pair display with color variants
- **PageLayout**: Standard page structure with padding and centered container

Improved components:

- **StatCard**: Added dark mode support, new variants (info, warning, error), icons, suffixes, sizes, optional footer, and backwards compatibility with `variant="danger"`

Repository page refactored to use:

- PageLayout, PageHeader, Alert, Card, ButtonGroup, LinkButton
- Grid, StatCard, InfoCard, KeyValue, DataTable

Benefits: ~30% less code, reusable components, consistent styling, native dark mode support
