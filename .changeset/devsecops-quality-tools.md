---
'talent-finder': minor
---

Add DevSecOps quality enforcement tools

### New Tools

- **commitlint**: Enforces Conventional Commits format on all commit messages
- **Knip**: Detects unused code, exports, and dependencies
- **gitleaks**: Detects secrets and credentials in code (CI only)
- **pnpm audit**: Scans dependencies for known vulnerabilities

### New Scripts

- `pnpm audit` - Security vulnerability check
- `pnpm knip` - Detect unused code/dependencies
- `pnpm ready` now includes knip and audit checks

### CI Pipeline

- Reorganized into parallel jobs: security, quality, test
- Build job requires all checks to pass
- Added gitleaks action for secrets detection
