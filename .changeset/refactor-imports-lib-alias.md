---
"talent-finder": patch
---

Refactor content locale imports to use $lib alias

Replace deep relative imports (e.g., `../../../types`, `../../../core/brand`) with
`$lib/content/...` aliases across all locale files for improved readability and
maintainability.

**Files updated:**
- English locale: brand, app, marketing, shared, system files (15 files)
- French locale: app, marketing, shared, system files (15 files)
