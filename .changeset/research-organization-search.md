---
'talent-finder': minor
---

feat: add OpenAlex institution statistics with consent management

- Add OpenAlex API integration for searching research institutions
- Create `ResearchOrganizationSearch` component with autocomplete search
- Add `ArticlesCountCard` with yearly article breakdown and "Avant" category
- Implement consent management system for OpenAlex polite pool
- Add `ConsentStatusCard` for managing user data consent
- Require authentication and consent for OpenAlex API endpoints
- Add collapsible `HealthStatusCard` for Appwrite service details
- Use `group_by=publication_year` for efficient API calls (3 calls instead of 8)
- Display institution details (name, location, works count, citations)
- Lock OpenAlex cards when user has not granted consent
- Add `/api/v1/institutions/search`, `/api/v1/openalex/institution-stats`, `/api/v1/consent` endpoints
- Update OpenAPI documentation with consent and openalex endpoints
