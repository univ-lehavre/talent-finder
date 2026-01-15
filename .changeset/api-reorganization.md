---
'talent-finder': minor
---

refactor(api): reorganize endpoints by data type

API structure reorganized from action-based to resource-based:

- `/api/v1/me` → `/api/v1/users/me`
- `/api/v1/consent` → `/api/v1/consents/[id]` (GET, PUT, DELETE)
- `/api/v1/openalex/institution-stats` → `/api/v1/institutions/stats`
- `/api/v1/openalex/works-count` → `/api/v1/works/counts`
- `/api/v1/repository` → `/api/v1/repositories/[id]/stats`
- `/api/v1/github` → `/api/v1/repositories/[id]/issues` and `/api/v1/repositories/[id]/pulls`

New stub endpoints:

- `/api/v1/repositories/[id]/contributors`
- `/api/v1/repositories/[id]/analysis`

Frontend updated to use new endpoint paths.
OpenAPI documentation fully rewritten with tags and new paths.
