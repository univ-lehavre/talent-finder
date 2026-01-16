---
"talent-finder": patch
---

refactor(api-docs): load Swagger CSS statically to avoid FOUC

Move CSS import from dynamic onMount to static module import for better performance and to prevent flash of unstyled content on API documentation page.
