---
'talent-finder': minor
---

Add comprehensive code quality tools and accessibility testing

**ESLint plugins:**

- `eslint-plugin-sonarjs`: cognitive complexity and code smells detection
- `eslint-plugin-security`: security vulnerability patterns detection
- `eslint-plugin-no-secrets`: hardcoded credentials detection

**Code analysis:**

- `jscpd`: copy-paste/duplicate code detection (5% threshold)
- `license-checker`: dependency license compliance verification
- `typedoc`: API documentation generation (output to api-docs/)

**Accessibility testing:**

- `vitest-axe`: accessibility testing with axe-core
- Separate vitest project for a11y tests with jsdom environment
- Example Hero component accessibility tests

**CI pipeline:**

- Add cpd and license-audit checks to quality job
- Full alignment between `pnpm ready` and CI checks
