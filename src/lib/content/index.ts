/**
 * Content exports for internationalization.
 * All user-facing text content is centralized here for easy translation.
 *
 * @example Using i18n getters (recommended for reactive content)
 * ```typescript
 * import { getNavigation, getAuth, getErrors } from '$lib/content';
 *
 * // In components, call getters to get current locale content
 * const nav = getNavigation();
 * const title = nav.links.home;
 * ```
 *
 * @example Using static exports (for non-reactive contexts)
 * ```typescript
 * import { brand, navigation } from '$lib/content';
 *
 * const appName = brand.appName;
 * ```
 */

// Brand constants (locale-independent)
export { brand, commonLabels, pageTitle } from './brand';

// i18n reactive object and getters
export {
	getAccessibility,
	getApiDocs,
	getAuth,
	getDashboard,
	getErrors,
	getHome,
	getLanguageSelector,
	getNavigation,
	getPartners,
	getRepository,
	getThemePage,
	getUI,
	i18n,
	t
} from './i18n.svelte';

// Static exports (French default - for backwards compatibility)
export { content } from './home';
export { navigation } from './navigation';
export { auth } from './auth';
export { errors } from './errors';
export { dashboard } from './dashboard';
export { repository } from './repository';
export { ui } from './ui';
export { partners } from './partners';
export { themePage } from './theme-page';
export { apiDocs } from './api-docs';

// Type exports
export type {
	AccessibilityContent,
	ApiDocsContent,
	AuthContent,
	Challenge,
	DashboardContent,
	ErrorContent,
	HomeContent,
	LanguageSelectorContent,
	NavigationContent,
	PartnersContent,
	RepositoryContent,
	Step,
	ThemePageContent,
	UIContent
} from './types';
