/**
 * Common components shared across multiple routes.
 *
 * These components wrap generic UI components from $lib/ui
 * and inject i18n content from $lib/content.
 */

// Navigation
export { default as Navbar } from './Navbar.svelte';
export { default as Footer } from './Footer.svelte';
export { default as Drawer } from './Drawer.svelte';
export { default as Dropdown } from './Dropdown.svelte';
export { default as LanguageSelector } from './LanguageSelector.svelte';

// Feedback
export { default as Modal } from './Modal.svelte';
export { default as Alert } from './Alert.svelte';
export { default as ConnectivityBanner } from './ConnectivityBanner.svelte';

// Layout
export { default as PageHeader } from './PageHeader.svelte';

// Theme
export { default as ThemeToggle } from './ThemeToggle.svelte';
