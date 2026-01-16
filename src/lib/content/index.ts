/**
 * Content exports for internationalization.
 * All user-facing text content is centralized here for easy translation.
 *
 * @example
 * ```typescript
 * import { navigation, auth, errors, brand } from '$lib/content';
 *
 * // Use content in components
 * const title = navigation.links.home;
 * const errorMessage = errors.notFound.message;
 * const appName = brand.appName;
 * ```
 */

// Brand constants and common labels
export { brand, commonLabels, pageTitle } from './brand';

// Home page content
export { content } from './home';
export type { HomeContent, Challenge, Step } from './types';

// Navigation content
export { navigation } from './navigation';
export type { NavigationContent } from './types';

// Authentication content
export { auth } from './auth';
export type { AuthContent } from './types';

// Error page content
export { errors } from './errors';
export type { ErrorContent } from './types';

// Dashboard content
export { dashboard } from './dashboard';
export type { DashboardContent } from './types';

// Repository page content
export { repository } from './repository';
export type { RepositoryContent } from './types';

// UI component content
export { ui } from './ui';
export type { UIContent } from './types';

// Partners content
export { partners } from './partners';
export type { PartnersContent } from './types';

// Theme page content
export { themePage } from './theme-page';
export type { ThemePageContent } from './types';

// API documentation page content
export { apiDocs } from './api-docs';
export type { ApiDocsContent } from './types';
