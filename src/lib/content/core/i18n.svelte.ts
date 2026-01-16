/**
 * Internationalization system for content.
 * Provides reactive content access based on current locale.
 */

import { localeState, type Locale } from '$lib/stores';
import type {
	AccessibilityContent,
	ApiDocsContent,
	AuthContent,
	CommonContent,
	DashboardContent,
	ErrorContent,
	HealthContent,
	HomeContent,
	LanguageSelectorContent,
	NavigationContent,
	PartnersContent,
	ProfileContent,
	RepositoryContent,
	ResearchContent,
	ThemeContent,
	ThemePageContent,
	UIContent
} from '../types';

// Import French content
import {
	homeFr,
	partnersFr,
	dashboardFr,
	repositoryFr,
	apiDocsFr,
	researchFr,
	profileFr,
	authFr,
	errorsFr,
	healthFr,
	accessibilityFr,
	languageSelectorFr,
	navigationFr,
	commonFr,
	themeFr
} from '../locales/fr';

// Import English content
import {
	homeEn,
	partnersEn,
	dashboardEn,
	repositoryEn,
	apiDocsEn,
	researchEn,
	profileEn,
	authEn,
	errorsEn,
	healthEn,
	accessibilityEn,
	languageSelectorEn,
	navigationEn,
	commonEn,
	themeEn
} from '../locales/en';

/**
 * Build UIContent from new modular structure for backwards compatibility.
 */
const buildUIContent = (
	common: CommonContent,
	health: HealthContent,
	profile: ProfileContent,
	research: ResearchContent,
	theme: ThemeContent
): UIContent => ({
	common: common.labels,
	relativeTime: common.relativeTime,
	connectivity: health.connectivity,
	consent: profile.consent,
	profile: profile.card,
	theme: theme.card,
	comingSoon: common.comingSoon,
	health: health.card,
	researchOrganization: research.organization,
	researchOutput: research.output
});

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
		themePage: themeFr.page,
		ui: buildUIContent(commonFr, healthFr, profileFr, researchFr, themeFr),
		apiDocs: apiDocsFr,
		accessibility: accessibilityFr,
		languageSelector: languageSelectorFr,
		// New modular content
		common: commonFr,
		health: healthFr,
		profile: profileFr,
		research: researchFr,
		theme: themeFr
	},
	en: {
		auth: authEn,
		dashboard: dashboardEn,
		errors: errorsEn,
		home: homeEn,
		navigation: navigationEn,
		partners: partnersEn,
		repository: repositoryEn,
		themePage: themeEn.page,
		ui: buildUIContent(commonEn, healthEn, profileEn, researchEn, themeEn),
		apiDocs: apiDocsEn,
		accessibility: accessibilityEn,
		languageSelector: languageSelectorEn,
		// New modular content
		common: commonEn,
		health: healthEn,
		profile: profileEn,
		research: researchEn,
		theme: themeEn
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
	/** @deprecated Use i18n.common, i18n.health, i18n.profile, i18n.research instead */
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
	},
	// New modular getters
	get common(): CommonContent {
		return currentTranslations.common;
	},
	get health(): HealthContent {
		return currentTranslations.health;
	},
	get profile(): ProfileContent {
		return currentTranslations.profile;
	},
	get research(): ResearchContent {
		return currentTranslations.research;
	},
	get theme(): ThemeContent {
		return currentTranslations.theme;
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
 * @deprecated Use i18n.common, i18n.health, i18n.profile, i18n.research instead
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
