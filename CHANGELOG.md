# talent-finder

## 0.5.0

### Minor Changes

- 0ebda05: feat(i18n): centraliser le contenu textuel dans $lib/content
  - Créer des modules de contenu typés pour chaque domaine (navigation, auth, errors, dashboard, repository, ui, partners, themePage, apiDocs)
  - Définir les interfaces TypeScript pour garantir la cohérence du contenu
  - Migrer tous les textes visibles des fichiers .svelte vers $lib/content
  - Préparer l'application pour l'internationalisation future

- 57e7772: feat(ui): add dashboard components and refactor dashboard page

  New UI components:
  - ProfileCard: User profile summary with email and status badge
  - ThemePreferencesCard: Theme settings display with palette/font toggles
  - ThemeToggleRow: Reusable row for theme toggle buttons
  - DashboardLinkCard: Card with icon, title, description and navigation link
  - ExternalLinkCard: Clickable card for external links
  - ExternalLinksCard: Container for multiple external links
  - ComingSoonSection: Alert-based section for upcoming features

  Dashboard page refactoring:
  - Replaced ~200 lines of inline HTML with reusable components
  - Uses Grid component for responsive layout
  - Components compose existing UI primitives (InfoCard, Badge, Alert, etc.)

- 381a00f: feat(ui): add ErrorState, ButtonGroup, LoginForm components and fix login page
  - Add ErrorState component for consistent error display with icon, code, title, message, and actions
  - Add ButtonGroup component for flexible button layouts with orientation and justify options
  - Add LoginForm component for standalone magic link authentication
  - Refactor +error.svelte to use new ErrorState and ButtonGroup components
  - Fix login page to handle both direct access (show form) and magic link callback (validate & redirect)
  - Add redirect to dashboard when already logged in

- 5518295: Add 9 new landing page UI components:
  - **Hero**: Gradient hero section with title, subtitle, and action buttons
  - **LandingSection**: Centered title/description section for marketing pages
  - **CTASection**: Call-to-action section with surface and gradient variants
  - **StepCard**: Numbered process step card for "how it works" sections
  - **ChallengeCard**: Problem/solution card for feature comparisons
  - **PartnerSection**: Partner display with logo, description, and extra content
  - **PartnerLogo**: Clickable external logo link with hover effect
  - **TagCard**: Compact label card for tags and categories
  - **FeatureCard**: Title + description card for feature highlights

  All components use Svelte 5 snippets for flexible composition and support dark mode.

  Homepage refactored to use these components, reducing code by ~40%.

- 51ce37f: Add reusable navigation and layout components

  New UI components:
  - `Navbar`: Complete navigation bar with desktop/mobile views, logo, nav links, icon links, and user actions
  - `Footer`: Footer with partner logos and version info
  - `Drawer`: Slide-in side panel (offcanvas) with backdrop and keyboard support
  - `NavLink`: Navigation link with icon and active state
  - `IconLink`: Clickable icon with tooltip
  - `Tooltip`: Hover tooltip with title and description

  Refactored `+layout.svelte` to use the new components, reducing code by ~60%.

- 42a310e: feat(ui): add CenteredLayout, LoadingState, Button components and refactor login/error pages
  - Add CenteredLayout component for full-page centered content (auth, error, confirmation pages)
  - Add LoadingState component for loading states with title, spinner and message
  - Add Button component for interactive buttons with variants (primary, secondary, accent, outline, ghost)
  - Refactor login page to use CenteredLayout, LoadingState and LinkButton components
  - Refactor error page to use LinkButton and Button components
  - Export new components from $lib/ui index

- 1e2acce: feat(i18n): système d'internationalisation complet avec sélecteur de langue

  ### Fonctionnalités
  - Ajouter le sélecteur de langue dans la navbar (français/anglais)
  - Détection automatique de la langue du navigateur
  - Persistance du choix de langue dans un cookie (1 an)
  - Changement de langue en temps réel sans rechargement de page

  ### Infrastructure
  - Créer `locale.svelte.ts` avec gestion d'état réactif ($state)
  - Créer `i18n.svelte.ts` avec module-level $derived pour réactivité
  - Ajouter traductions anglaises complètes dans `translations/en/`

  ### Composants
  - Créer `LanguageSelector.svelte` avec dropdown et drapeaux
  - Migrer 18 composants UI vers i18n réactif ($derived)
  - Migrer 8 pages routes vers i18n réactif

  ### Types
  - Ajouter `AccessibilityContent.languageSelector/changeLanguage`
  - Ajouter `UIContent.theme.light/dark/changeTheme`
  - Déplacer `Challenge`, `Step`, `HomeContent` vers `types.ts`

  ### Traductions
  - Contenu français complet (existant)
  - Contenu anglais complet (nouveau)
  - Labels accessibility pour sélecteur de langue

  ### Tests
  - 39 tests unitaires pour le module content

- 730b945: ## Découplage des modules `$lib/ui` et `$lib/content`

  ### Architecture à deux niveaux

  **M0 (`$lib/ui`)** - Design system pur :
  - Composants génériques sans dépendance i18n
  - Props de contenu obligatoires (plus d'optionnels)
  - Interfaces définies inline dans chaque composant
  - Peut être extrait comme package npm externe

  **M1 (`$lib/components`)** - Wrappers applicatifs :
  - Import des composants de base depuis `$lib/ui`
  - Injection du contenu i18n via `$derived` réactif
  - Props simplifiées (pas besoin de passer le contenu)

  ### Réorganisation de `$lib/ui`

  Les 61 composants sont maintenant organisés en sous-répertoires par catégorie :

  ```
  src/lib/ui/
  ├── actions/        # Button, ButtonGroup, LinkButton
  ├── data-display/   # Card, InfoCard, StatCard, DataList, DataTable...
  ├── feedback/       # Alert, Badge, LoadingSpinner, AsyncContent...
  ├── forms/          # Modal, Signup, LoginForm
  ├── layout/         # Section, Grid, PageHeader, Hero, CTASection...
  ├── navigation/     # Navbar, Footer, Drawer, Dropdown, NavLink...
  ├── theme/          # ThemeToggle, ThemeSection, ThemeToggleRow
  ├── dashboard/      # ProfileCard, ThemePreferencesCard...
  ├── domain/         # ResearchOrganizationSearch, HealthStatusCard...
  └── utils/          # Icon, Tooltip, ConnectivityBanner...
  ```

  **Rétrocompatibilité** : Tous les imports via `$lib/ui` restent fonctionnels grâce au barrel export mis à jour.

  ### Migration des routes

  Les pages importent maintenant depuis `$lib/components` :
  - `+layout.svelte` : Navbar, Footer, Signup, ConnectivityBanner
  - `dashboard/+page.svelte` : ProfileCard, ThemePreferencesCard, etc.
  - `login/+page.svelte` : LoginForm
  - `theme/+page.svelte` : Dropdown, Modal, ThemeToggle

  ### Utilisation

  Pour les pages/routes (avec i18n automatique) :

  ```svelte
  import {(Navbar, Footer)} from '$lib/components';
  <Navbar brandName="MyApp" />
  ```

  Pour les tests ou contenu custom (sans i18n) :

  ```svelte
  import {Navbar} from '$lib/ui';
  <Navbar
  	brandName="MyApp"
  	toggleMenuLabel="Menu"
  	mobileMenuTitle="Navigation"
  	mobileMenuCloseLabel="Fermer"
  />
  ```

- 61b10e6: feat(ui): add data display components and refactor repository page

  New components:
  - **LinkButton**: Styled link that looks like a button with variants, icons, and external link support
  - **DataTable**: Generic data table with customizable cell rendering via snippets
  - **KeyValue**: Label/value pair display with color variants
  - **PageLayout**: Standard page structure with padding and centered container

  Improved components:
  - **StatCard**: Added dark mode support, new variants (info, warning, error), icons, suffixes, sizes, optional footer, and backwards compatibility with `variant="danger"`

  Repository page refactored to use:
  - PageLayout, PageHeader, Alert, Card, ButtonGroup, LinkButton
  - Grid, StatCard, InfoCard, KeyValue, DataTable

  Benefits: ~30% less code, reusable components, consistent styling, native dark mode support

- 7443f2f: feat(ui): add dropdown and theme utility components, refactor theme page

  New UI components:
  - Dropdown: reusable dropdown menu with trigger, backdrop, and scroll-to-selected
  - DropdownCategory: sticky category header for dropdown menus
  - DropdownItem: selectable item with selection indicator
  - ColorSwatch: color preview (single or grouped colors)
  - ColorScaleRow: table row for displaying color scale palettes
  - CodeExample: code snippet block with syntax highlighting
  - PageHero: simple page hero section with subtle background

  Theme page refactoring:
  - Replace ThemeSection with Section component for better consistency
  - Use new Dropdown components for palette and font selectors
  - Use ColorSwatch for all color previews
  - Use ColorScaleRow for color scale table (reduces ~400 lines of repetition)
  - Use CodeExample for usage examples
  - Reduce page from ~1112 lines to ~545 lines

### Patch Changes

- 69ea936: ## Réorganisation de `$lib/components` par routes

  ### Nouvelle structure

  Les composants applicatifs sont maintenant organisés par route avec un dossier `common/` pour les composants partagés :

  ```
  src/lib/components/
  ├── common/      # Partagés (Navbar, Footer, Modal, Alert...)
  ├── login/       # Route /login (LoginForm, Signup)
  ├── dashboard/   # Route /dashboard (ProfileCard, HealthStatusCard...)
  ├── home/        # Route / (préparé)
  ├── theme/       # Route /theme (préparé)
  ├── repository/  # Route /repository (préparé)
  └── api-docs/    # Route /api/docs (préparé)
  ```

  ### Imports

  Les imports existants restent compatibles :

  ```typescript
  // Import global (inchangé)
  import { Navbar, LoginForm, ProfileCard } from '$lib/components';

  // Import par catégorie (nouveau)
  import { Navbar, Footer } from '$lib/components/common';
  import { LoginForm } from '$lib/components/login';
  import { ProfileCard } from '$lib/components/dashboard';
  ```

  ### Composants déplacés

  **common/** : Navbar, Footer, Drawer, Dropdown, LanguageSelector, Modal, Alert, ConnectivityBanner, PageHeader, ThemeToggle

  **login/** : LoginForm, Signup

  **dashboard/** : ProfileCard, ThemePreferencesCard, ConsentStatusCard, HealthStatusCard, ArticlesCountCard, ResearchOrganizationSearch, ComingSoonSection

- b8add6c: refactor(api-docs): load Swagger CSS statically to avoid FOUC

  Move CSS import from dynamic onMount to static module import for better performance and to prevent flash of unstyled content on API documentation page.

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
