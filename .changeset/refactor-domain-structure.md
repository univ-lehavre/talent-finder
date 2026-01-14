---
"talent-finder": patch
---

Reorganize server code by domain with colocation of errors and types

- Restructure `/src/lib/server` from flat to domain-based organization
- Create `auth/`, `user/`, `http/` domains with colocated code
- Move errors and types near the code that uses them
- Add `index.ts` exports for module encapsulation
