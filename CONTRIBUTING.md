# Contributing to Talent Finder

## Getting Started

### Prerequisites

- Node.js 24+
- pnpm 10+

### Installation

```bash
pnpm install
```

### Development Server

```bash
pnpm dev
```

## Development Workflow

### When to Run Each Script

| Moment                  | Script            | Description                              |
| ----------------------- | ----------------- | ---------------------------------------- |
| **While coding**        | `pnpm dev`        | Start development server with hot reload |
| **Before committing**   | _(automatic)_     | Husky runs lint-staged automatically     |
| **Before pushing**      | `pnpm ready`      | Full validation pipeline                 |
| **To check types**      | `pnpm type-check` | TypeScript validation                    |
| **To find unused code** | `pnpm knip`       | Detect dead code and dependencies        |
| **To check security**   | `pnpm audit`      | Scan for vulnerabilities                 |

### Automatic Checks (Git Hooks)

These run automatically - no manual action needed:

| Hook           | Trigger      | What it does                    |
| -------------- | ------------ | ------------------------------- |
| **pre-commit** | `git commit` | Formats and lints staged files  |
| **commit-msg** | `git commit` | Validates commit message format |

### Full Validation Pipeline

Before pushing or creating a PR, run:

```bash
pnpm ready
```

This executes all checks in order:

```
format → type-check → check → lint → knip → audit → test → build
```

## Commit Convention

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type       | Description                               |
| ---------- | ----------------------------------------- |
| `feat`     | New feature                               |
| `fix`      | Bug fix                                   |
| `docs`     | Documentation changes                     |
| `style`    | Code style (formatting, semicolons, etc.) |
| `refactor` | Code refactoring                          |
| `perf`     | Performance improvements                  |
| `test`     | Adding or updating tests                  |
| `build`    | Build system or dependencies              |
| `ci`       | CI/CD configuration                       |
| `chore`    | Maintenance tasks                         |
| `revert`   | Reverting changes                         |

### Examples

```bash
# Good
git commit -m "feat(auth): add password reset functionality"
git commit -m "fix(api): handle null response in user endpoint"
git commit -m "docs: update installation instructions"

# Bad (will be rejected)
git commit -m "Fixed stuff"
git commit -m "WIP"
git commit -m "feat: Add New Feature"  # subject must be lowercase
```

## Available Scripts

| Script            | Description                     |
| ----------------- | ------------------------------- |
| `pnpm dev`        | Start development server        |
| `pnpm build`      | Production build                |
| `pnpm preview`    | Preview production build        |
| `pnpm format`     | Format code with Prettier       |
| `pnpm type-check` | TypeScript type checking        |
| `pnpm check`      | Svelte validation               |
| `pnpm lint`       | ESLint validation               |
| `pnpm knip`       | Detect unused code/dependencies |
| `pnpm audit`      | Security vulnerability check    |
| `pnpm test`       | Run unit tests                  |
| `pnpm test:unit`  | Run tests in watch mode         |
| `pnpm ready`      | Full validation pipeline        |

## Code Quality Standards

- Use TypeScript with strict types
- Write JSDoc comments for exported functions
- Use pure functions where possible
- One file = one concern
- File names in kebab-case
- Write unit tests for new functionality

## Pull Request Process

1. Create a branch from `main`
2. Make your changes
3. Run `pnpm ready` to validate
4. Push and create a PR
5. Wait for CI checks to pass
6. Request review

## CI Pipeline

The CI runs these checks in parallel:

| Job          | Checks                                           |
| ------------ | ------------------------------------------------ |
| **Security** | gitleaks (secrets), pnpm audit (vulnerabilities) |
| **Quality**  | lint, type-check, svelte-check, knip             |
| **Test**     | vitest                                           |
| **Build**    | vite build (requires all above)                  |
