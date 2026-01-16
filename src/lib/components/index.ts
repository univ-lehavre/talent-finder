/**
 * Application-specific components module.
 *
 * This module contains components that are specific to the talent-finder application.
 * They wrap generic UI components from $lib/ui and inject i18n content from $lib/content.
 *
 * Use these components in pages/routes for convenience - they come pre-configured
 * with localized content.
 *
 * For testing or custom content scenarios, use the base components from $lib/ui directly.
 */

// Auth components (wrap $lib/ui with i18n)
export { default as LoginForm } from './LoginForm.svelte';
export { default as Signup } from './Signup.svelte';

// Navigation components (wrap $lib/ui with i18n)
export { default as Navbar } from './Navbar.svelte';
export { default as Footer } from './Footer.svelte';
export { default as LanguageSelector } from './LanguageSelector.svelte';

// Dashboard components (wrap $lib/ui with i18n)
export { default as ProfileCard } from './ProfileCard.svelte';
export { default as ThemePreferencesCard } from './ThemePreferencesCard.svelte';
export { default as ThemeToggle } from './ThemeToggle.svelte';

// Domain-specific components (wrap $lib/ui with i18n)
export { default as ConsentStatusCard } from './ConsentStatusCard.svelte';
export { default as ResearchOrganizationSearch } from './ResearchOrganizationSearch.svelte';
export { default as ArticlesCountCard } from './ArticlesCountCard.svelte';
export { default as HealthStatusCard } from './HealthStatusCard.svelte';
export { default as ConnectivityBanner } from './ConnectivityBanner.svelte';

// Layout components with i18n (wrap $lib/ui with i18n)
export { default as PageHeader } from './PageHeader.svelte';
export { default as Modal } from './Modal.svelte';
export { default as Alert } from './Alert.svelte';
export { default as Drawer } from './Drawer.svelte';
export { default as Dropdown } from './Dropdown.svelte';
export { default as ComingSoonSection } from './ComingSoonSection.svelte';
