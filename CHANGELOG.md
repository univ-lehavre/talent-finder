# talent-finder

## 0.4.0

### Minor Changes

- 3c64227: refactor(api): reorganize endpoints by data type

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

- 304d93f: feat: add OpenAlex institution statistics with consent management
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
  - Add health check service and `/api/v1/health` endpoint
  - Add `ConnectivityBanner` for network/Appwrite errors

### Patch Changes

- 81e8fb5: style(branding): rename site to "ECRIN | Talent finder"
  - Update site title across all pages (home, dashboard, login, theme, repository, error, API docs)
  - Add ECRIN link to footer (https://ecrin.sites.chasset.net)
  - Add External Links card in dashboard with ECRIN, GitHub, and Zenodo
  - Remove Zenodo link from navbar (keep GitHub only)
  - Move theme toggle to mobile offcanvas menu header
  - Remove Theme link from mobile offcanvas menu

- 1441010: fix(dashboard): improve card layout and styling
  - Move Research Organization Search and Articles Count cards to top of dashboard
  - Conditionally position Data Consent card (top if not granted, after research cards if granted)
  - Replace single "Pages" card with separate "Repository" and "API Documentation" cards (admin only)
  - Change HealthStatusCard "Healthy" status from success to secondary color
  - Change ConsentStatusCard "granted" state from success to secondary color

- 5d08326: docs: add Appwrite database setup guide
  - Create `docs/appwrite-setup.md` with complete configuration instructions
  - Document environment variables, project creation, API key setup
  - Detail `consent-events` and `current-consents` collections schema
  - Include attribute types, indexes, and enum values
  - Add troubleshooting section for health check statuses
  - Update `docs/CLAUDE.md` and `README.md` with reference to new documentation

- 6a5994c: feat(homepage): add partner sections with institutional information
  - Add "Our Partners" section with gradient background as visual break
  - Add Université Le Havre Normandie section (7,000+ students, 120+ diplomas, 12 labs)
  - Add CPTMP section with ECRIN program axes (Smart City, Maritime, Energy)
  - Add EUNICoast section with 5 thematic hubs
  - Add CPTMP logo to footer in layout
  - Update README with ULHN section and key figures
  - Fix background color alternation across all sections

- 91e2e62: docs: restructure README as project homepage with ECRIN context
  - Transform README from technical documentation to institutional presentation
  - Add ECRIN program description and three major axes (Smart City, Maritime, Energy)
  - Add CPTMP section with strategic axes, hubs, and 12 founding members
  - Add EUNICoast section with thematic hubs and 12 member universities
  - Move technical content to docs/technical-setup.md
  - Add CPTMP logo and partner logos in footer
  - Add links to partner websites (ULHN, CPTMP, EUNICoast)

All notable changes to this project are documented here.

## [0.3.0](https://github.com/univ-lehavre/talent-finder/compare/v0.2.0...v0.3.0) - 2025-01-14

### Minor Changes

- Add navigation, dashboard and improve code architecture ([96c5c7e](https://github.com/univ-lehavre/talent-finder/commit/96c5c7e))

  **New features:**
  - Responsive navbar with icons and mobile offcanvas menu
  - Dashboard page for authenticated users
  - University logos in footer (ULHN, EUNICoast)

  **Code architecture:**
  - Centralized icons module (`$lib/icons`)
  - i18n-ready content module (`$lib/content`)
  - Email normalizers module (`$lib/normalizers`) with subaddress removal
  - RFC 5322 email validation with ReDoS protection
  - Replace internal fetch calls with service functions
  - Layout server load for user profile

- Add theme customization system with admin-only access ([7436774](https://github.com/univ-lehavre/talent-finder/commit/7436774))
  - Add theme page (/theme) with color palette and font pairing selection
  - Restrict theme page access to admin users via Appwrite labels
  - Add 36 theme palettes organized in 6 categories (professional, nature, vibrant, minimal, warm, cool)
  - Add 40 font pairings organized in 4 categories (sans-serif, serif, display, technical)
  - Create reusable UI components (Alert, Badge, Card, Icon, Modal, StatCard, ThemeSection, ThemeToggle)
  - Add global theme CSS variables applied via layout
  - Implement light/dark mode toggle with system preference detection
  - Add Home link to main navigation
  - Persist theme and font preferences in localStorage

- UI and navigation improvements ([a4f7a9b](https://github.com/univ-lehavre/talent-finder/commit/a4f7a9b))
  - Add custom 404 error page with contextual icons and navigation buttons
  - Restrict theme page access to admin users only (returns 404 for non-admins)
  - Add icon-only links with tooltips for Archive and GitHub in navbar
  - Move theme toggle to mobile navbar for better accessibility
  - Remove repository and API docs links from mobile offcanvas menu
  - Add logout redirect to force page reload after sign out
  - Dashboard: rename "Quick Actions" card to "Pages", show "Customize" link only for admins
  - Theme page: add Set/Reset buttons for bulk theme preference management

- Standardize UI components across all pages ([eae0657](https://github.com/univ-lehavre/talent-finder/commit/eae0657))
  - Add new `LoadingSpinner` component to `$lib/ui` with size and color variants
  - Refactor login page to use `LoadingSpinner` component with dark mode support
  - Refactor repository page:
    - Replace hardcoded colors with semantic theme colors (success, error, primary, accent)
    - Replace inline SVG with `Icon` component
    - Use `.card` and `.alert-error` classes consistently
  - Add theme support to `Modal` and `Signup` components (colors, headingFont props)
  - Add demos for all UI components in theme page (Card, LoadingSpinner, ThemeToggle, Signup)
  - Reorganize color palettes into 4 columns (Gradients, Sequential, Diverging, Qualitative)
  - Expand each palette category to 12 options (added Pink-Purple, Green-Blue, Pink-Yellow-Green, Blue-Yellow-Red, Cyan-Magenta, Green-Brown, Vivid, Retro)

### Patch Changes

- Amélioration des dropdowns de thème ([d7bd88a](https://github.com/univ-lehavre/talent-finder/commit/d7bd88a))
  - Dropdown des palettes : affiche les 6 couleurs correctes pour chaque palette avec des styles inline OKLCH
  - Dropdown des fontes : affiche le nom de chaque fonte avec sa propre police
  - Harmonisation des hauteurs de boutons dans la barre de thème
  - Suppression du bouton ThemeToggle redondant dans la barre de paramètres de thème
  - Table Color Scales : cellules vides pour les nuances non définies (success/warning/error)

## [0.2.0](https://github.com/univ-lehavre/talent-finder/compare/v0.1.0...v0.2.0) - 2025-01-14

### Minor Changes

- Add repository analytics, GitHub integration, and API documentation ([e02851a](https://github.com/univ-lehavre/talent-finder/commit/e02851a8ecdfe1842810269ba35df241614ce875))

  **New features:**
  - **git-stats module**: Analyze git commits, code metrics, and test coverage by time period
  - **github module**: Fetch repository metadata, issues, and pull requests from GitHub API
  - **Repository page** ([`/repository`](src/routes/repository/)): Visual dashboard with commit history, code stats, and contributors
  - **Swagger UI** ([`/api/docs`](src/routes/api/docs/)): Interactive API documentation

  **API improvements:**
  - New REST endpoints: [`/api/v1/repository`](src/routes/api/v1/repository/), [`/api/v1/github`](src/routes/api/v1/github/)
  - Migrate all API responses to pure REST format (remove envelope wrapper)
  - Add [OpenAPI 3.0 specification](src/routes/api/docs/openapi.json)

  **Test coverage:**
  - Add 138 unit tests covering all exported functions
  - Test files: validators, http, auth, user, git-stats, github modules

  **UI enhancements:**
  - Add [logo and favicon](src/lib/assets/) with brand identity
  - Add navigation links to Repository, API Docs, Design System, Archive
  - Update [README](README.md) with comprehensive project documentation

### Patch Changes

- Reorganize server code by domain with colocation of errors and types ([8384d9d](https://github.com/univ-lehavre/talent-finder/commit/8384d9dcdffeebba5c48f26b0a90bdc0be2d74d1), [f1a079d](https://github.com/univ-lehavre/talent-finder/commit/f1a079d83cfde60cf867428d6bd3dfa9b9102677))
  - Restructure [`/src/lib/server`](src/lib/server/) from flat to domain-based organization
  - Create [`auth/`](src/lib/server/auth/), [`user/`](src/lib/server/user/), [`http/`](src/lib/server/http/) domains with colocated code
  - Move errors and types near the code that uses them
  - Add `index.ts` exports for module encapsulation

## [0.1.0](https://github.com/univ-lehavre/talent-finder/compare/v0.0.1...v0.1.0) - 2025-01-13

### Minor Changes

- Add magic link authentication UI with signup modal ([#4](https://github.com/univ-lehavre/talent-finder/pull/4), [7215aba](https://github.com/univ-lehavre/talent-finder/commit/7215aba4c3f8a566ff94db26261e517618aeda87))
  - Create [Signup modal component](src/lib/ui/Signup.svelte) with Tailwind CSS styling
  - Integrate modal in home page with conditional rendering based on auth state
  - Add form actions for signup (magic link) and logout
  - Filter expected authentication errors (401) in server hooks
  - Display user email and logout button when authenticated

- Initial SvelteKit project setup with complete development infrastructure ([#2](https://github.com/univ-lehavre/talent-finder/pull/2), [1f0f039](https://github.com/univ-lehavre/talent-finder/commit/1f0f0397f1a5913991ab0bea4ec209fa4f2f8fcf))

  This is the first release of the Talent Finder project, built with:

  **Core Stack:**
  - Node 24 with pnpm 10
  - [Svelte 5](https://svelte.dev/) and [SvelteKit 2](https://svelte.dev/docs/kit/)
  - TypeScript with strict type checking
  - [Vite 7](https://vite.dev/) for building and development

  **Development Infrastructure:**
  - [ESLint](https://eslint.org/) with Svelte plugin for code linting
  - [Prettier](https://prettier.io/) with Svelte plugin for code formatting
  - [Vitest](https://vitest.dev/) for unit testing
  - [Changesets](https://github.com/changesets/changesets) for version and changelog management
  - SvelteKit adapter-node for production deployment

  **Project Structure:**
  - Basic SvelteKit application structure with [routes](src/routes/)
  - Favicon and [static assets](static/)
  - Configuration files for all development tools

  **Available Scripts:**
  - `pnpm dev` - Start development server
  - `pnpm build` - Build for production
  - `pnpm preview` - Preview production build
  - `pnpm test` - Run unit tests
  - `pnpm type-check` - Check TypeScript types
  - `pnpm lint` - Lint code
  - `pnpm format` - Format code
  - `pnpm changeset` - Manage changesets

## [0.0.1](https://github.com/univ-lehavre/talent-finder/releases/tag/v0.0.1) - 2025-01-12

- Initial commit ([a815d9c](https://github.com/univ-lehavre/talent-finder/commit/a815d9c74f206bc82f39387ca6b70f49b1088681))
