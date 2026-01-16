/**
 * Application-specific components module.
 *
 * This module contains components that are specific to the talent-finder application.
 * They wrap generic UI components from $lib/ui and inject i18n content from $lib/content.
 *
 * Components are organized by route:
 * - common/    : Shared across multiple routes (Navbar, Footer, Modal, etc.)
 * - home/      : Components for / route
 * - login/     : Components for /login route
 * - dashboard/ : Components for /dashboard route
 * - theme/     : Components for /theme route
 * - repository/: Components for /repository route
 * - api-docs/  : Components for /api/docs route
 *
 * Use these components in pages/routes for convenience - they come pre-configured
 * with localized content.
 *
 * For testing or custom content scenarios, use the base components from $lib/ui directly.
 */

// Common components (shared across routes)
export {
	Navbar,
	Footer,
	Drawer,
	Dropdown,
	LanguageSelector,
	Modal,
	Alert,
	ConnectivityBanner,
	PageHeader,
	ThemeToggle
} from './common';

// Login route components
export { LoginForm, Signup } from './login';

// Dashboard route components
export {
	ProfileCard,
	ThemePreferencesCard,
	ConsentStatusCard,
	HealthStatusCard,
	ArticlesCountCard,
	ResearchOrganizationSearch,
	ComingSoonSection
} from './dashboard';
