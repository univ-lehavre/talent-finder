/**
 * Stores index - exports all global stores
 */
export {
	createThemeStore,
	getDarkMode,
	getFont,
	getPalette,
	initTheme,
	setDarkMode,
	setFont,
	setPalette,
	type DarkMode
} from './theme.svelte.ts';

export {
	fontCategories,
	fontPairings,
	getFontsByCategory,
	type FontCategory,
	type FontCategoryInfo,
	type FontPairing
} from './fonts.svelte.ts';
