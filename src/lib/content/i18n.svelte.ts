/**
 * Internationalization system for content.
 * Provides reactive content access based on current locale.
 */

import { localeState, type Locale } from '$lib/stores';
import type {
	AccessibilityContent,
	ApiDocsContent,
	AuthContent,
	DashboardContent,
	ErrorContent,
	HomeContent,
	LanguageSelectorContent,
	NavigationContent,
	PartnersContent,
	RepositoryContent,
	ThemePageContent,
	UIContent
} from './types';

// Import French content
import { fr as authFr } from './auth';
import { fr as dashboardFr } from './dashboard';
import { fr as errorsFr } from './errors';
import { fr as homeFr } from './home';
import { fr as navigationFr } from './navigation';
import { fr as partnersFr } from './partners';
import { fr as repositoryFr } from './repository';
import { fr as themePageFr } from './theme-page';
import { fr as uiFr } from './ui';
import { fr as apiDocsFr } from './api-docs';

// Import English content
import { en as authEn } from './translations/en/auth';
import { en as dashboardEn } from './translations/en/dashboard';
import { en as errorsEn } from './translations/en/errors';
import { en as homeEn } from './translations/en/home';
import { en as navigationEn } from './translations/en/navigation';
import { en as partnersEn } from './translations/en/partners';
import { en as repositoryEn } from './translations/en/repository';
import { en as themePageEn } from './translations/en/theme-page';
import { en as uiEn } from './translations/en/ui';
import { en as apiDocsEn } from './translations/en/api-docs';

/**
 * French accessibility content.
 */
export const accessibilityFr: AccessibilityContent = {
	closeModal: 'Fermer',
	closeAlert: "Fermer l'alerte",
	toggleMenu: 'Ouvrir le menu',
	closeMenu: 'Fermer le menu',
	breadcrumbs: "Fil d'Ariane",
	languageSelector: 'Sélecteur de langue',
	changeLanguage: 'Changer de langue'
};

/**
 * English accessibility content.
 */
export const accessibilityEn: AccessibilityContent = {
	closeModal: 'Close',
	closeAlert: 'Close alert',
	toggleMenu: 'Toggle menu',
	closeMenu: 'Close menu',
	breadcrumbs: 'Breadcrumbs',
	languageSelector: 'Language selector',
	changeLanguage: 'Change language'
};

/**
 * French language selector content.
 */
export const languageSelectorFr: LanguageSelectorContent = {
	currentLanguage: 'Langue actuelle',
	selectLanguage: 'Sélectionner la langue'
};

/**
 * English language selector content.
 */
export const languageSelectorEn: LanguageSelectorContent = {
	currentLanguage: 'Current language',
	selectLanguage: 'Select language'
};

/**
 * Content collections by locale.
 */
const translations = {
	fr: {
		auth: authFr,
		dashboard: dashboardFr,
		errors: errorsFr,
		home: homeFr,
		navigation: navigationFr,
		partners: partnersFr,
		repository: repositoryFr,
		themePage: themePageFr,
		ui: uiFr,
		apiDocs: apiDocsFr,
		accessibility: accessibilityFr,
		languageSelector: languageSelectorFr
	},
	en: {
		auth: authEn,
		dashboard: dashboardEn,
		errors: errorsEn,
		home: homeEn,
		navigation: navigationEn,
		partners: partnersEn,
		repository: repositoryEn,
		themePage: themePageEn,
		ui: uiEn,
		apiDocs: apiDocsEn,
		accessibility: accessibilityEn,
		languageSelector: languageSelectorEn
	}
} as const;

/**
 * Get content for a specific locale.
 */
const getTranslations = (locale: Locale) => translations[locale];

/**
 * Reactive translations - $derived at module level.
 * This creates a reactive binding that updates when localeState.current changes.
 */
const currentTranslations = $derived(translations[localeState.current]);

/**
 * Get current translations based on locale.
 * Reads localeState.current directly for Svelte 5 reactivity.
 */
export const t = () => getTranslations(localeState.current);

/**
 * Reactive i18n object using module-level $derived.
 * Components can access properties directly without wrapping in $derived.
 * Example: i18n.navigation (reactive)
 */
export const i18n = {
	get navigation(): NavigationContent {
		return currentTranslations.navigation;
	},
	get auth(): AuthContent {
		return currentTranslations.auth;
	},
	get errors(): ErrorContent {
		return currentTranslations.errors;
	},
	get dashboard(): DashboardContent {
		return currentTranslations.dashboard;
	},
	get repository(): RepositoryContent {
		return currentTranslations.repository;
	},
	get ui(): UIContent {
		return currentTranslations.ui;
	},
	get partners(): PartnersContent {
		return currentTranslations.partners;
	},
	get themePage(): ThemePageContent {
		return currentTranslations.themePage;
	},
	get apiDocs(): ApiDocsContent {
		return currentTranslations.apiDocs;
	},
	get home(): HomeContent {
		return currentTranslations.home;
	},
	get accessibility(): AccessibilityContent {
		return currentTranslations.accessibility;
	},
	get languageSelector(): LanguageSelectorContent {
		return currentTranslations.languageSelector;
	}
};

/**
 * Get navigation content for current locale.
 * @deprecated Use i18n.navigation with $derived instead
 */
export const getNavigation = (): NavigationContent => t().navigation;

/**
 * Get authentication content for current locale.
 * @deprecated Use i18n.auth with $derived instead
 */
export const getAuth = (): AuthContent => t().auth;

/**
 * Get error content for current locale.
 * @deprecated Use i18n.errors with $derived instead
 */
export const getErrors = (): ErrorContent => t().errors;

/**
 * Get dashboard content for current locale.
 * @deprecated Use i18n.dashboard with $derived instead
 */
export const getDashboard = (): DashboardContent => t().dashboard;

/**
 * Get repository content for current locale.
 * @deprecated Use i18n.repository with $derived instead
 */
export const getRepository = (): RepositoryContent => t().repository;

/**
 * Get UI content for current locale.
 * @deprecated Use i18n.ui with $derived instead
 */
export const getUI = (): UIContent => t().ui;

/**
 * Get partners content for current locale.
 * @deprecated Use i18n.partners with $derived instead
 */
export const getPartners = (): PartnersContent => t().partners;

/**
 * Get theme page content for current locale.
 * @deprecated Use i18n.themePage with $derived instead
 */
export const getThemePage = (): ThemePageContent => t().themePage;

/**
 * Get API docs content for current locale.
 * @deprecated Use i18n.apiDocs with $derived instead
 */
export const getApiDocs = (): ApiDocsContent => t().apiDocs;

/**
 * Get home content for current locale.
 * @deprecated Use i18n.home with $derived instead
 */
export const getHome = (): HomeContent => t().home;

/**
 * Get accessibility content for current locale.
 * @deprecated Use i18n.accessibility with $derived instead
 */
export const getAccessibility = (): AccessibilityContent => t().accessibility;

/**
 * Get language selector content for current locale.
 * @deprecated Use i18n.languageSelector with $derived instead
 */
export const getLanguageSelector = (): LanguageSelectorContent => t().languageSelector;
