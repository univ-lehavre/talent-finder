# talent-finder

## 0.2.0

### Minor Changes

- Add repository analytics, GitHub integration, and API documentation

  New features:
  - **git-stats module**: Analyze git commits, code metrics, and test coverage by time period
  - **github module**: Fetch repository metadata, issues, and pull requests from GitHub API
  - **Repository page** (`/repository`): Visual dashboard with commit history, code stats, and contributors
  - **Swagger UI** (`/api/docs`): Interactive API documentation

  API improvements:
  - New REST endpoints: `/api/v1/repository`, `/api/v1/github`
  - Migrate all API responses to pure REST format (remove envelope wrapper)
  - Add OpenAPI 3.0 specification

  Test coverage:
  - Add 138 unit tests covering all exported functions
  - Test files: validators, http, auth, user, git-stats, github modules

  UI enhancements:
  - Add logo and favicon with brand identity
  - Add navigation links to Repository, API Docs, Design System, Archive
  - Update README with comprehensive project documentation

### Patch Changes

- 8384d9d: Reorganize server code by domain with colocation of errors and types
  - Restructure `/src/lib/server` from flat to domain-based organization
  - Create `auth/`, `user/`, `http/` domains with colocated code
  - Move errors and types near the code that uses them
  - Add `index.ts` exports for module encapsulation

## 0.1.0

### Minor Changes

- Add magic link authentication UI with signup modal
  - Create Signup modal component with Tailwind CSS styling
  - Integrate modal in home page with conditional rendering based on auth state
  - Add form actions for signup (magic link) and logout
  - Filter expected authentication errors (401) in server hooks
  - Display user email and logout button when authenticated

- 1f0f039: Initial SvelteKit project setup with complete development infrastructure

  This is the first release of the Talent Finder project, built with:

  **Core Stack:**
  - Node 24 with pnpm 10
  - Svelte 5 and SvelteKit 2
  - TypeScript with strict type checking
  - Vite 7 for building and development

  **Development Infrastructure:**
  - ESLint with Svelte plugin for code linting
  - Prettier with Svelte plugin for code formatting
  - Vitest for unit testing
  - Changesets for version and changelog management
  - SvelteKit adapter-node for production deployment

  **Project Structure:**
  - Basic SvelteKit application structure with routes
  - Favicon and static assets
  - Configuration files for all development tools
  - Code quality standards defined in CLAUDE.md

  **Available Scripts:**
  - `pnpm dev` - Start development server
  - `pnpm build` - Build for production
  - `pnpm preview` - Preview production build
  - `pnpm test` - Run unit tests
  - `pnpm type-check` - Check TypeScript types
  - `pnpm lint` - Lint code
  - `pnpm format` - Format code
  - `pnpm changeset` - Manage changesets
