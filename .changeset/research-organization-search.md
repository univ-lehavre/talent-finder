---
"talent-finder": minor
---

feat: add research organization search card to dashboard

- Add OpenAlex API integration for searching research institutions
- Create `ResearchOrganizationSearch` component with autocomplete search
- Display institution details (name, location, works count, citations)
- Allow users to select and manage a pool of organizations
- Add `/api/v1/institutions/search` endpoint
- Include loading, empty, and error states for smooth UX
