---
'talent-finder': patch
---

Fix knip errors and audit vulnerabilities

**Security:**

- Update SvelteKit and related dependencies to resolve audit vulnerabilities

**Code cleanup:**

- Remove redundant knip configuration entries
- Delete unused UI components (Drawer, DataList, AsyncContent, ThemeSection)
- Clean up unused exports from server modules (auth, consent, git-stats, github, health, http, openalex, user)
- Remove unused exports from stores, palettes, and content modules
- Update barrel files to reflect removed components

This reduces the codebase size and improves maintainability by removing dead code.
