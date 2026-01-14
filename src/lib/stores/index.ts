/**
 * Stores index - exports all global stores
 */
export {
	createThemeStore,
	getDarkMode,
	getFont,
	getFontName,
	getPalette,
	initTheme,
	setDarkMode,
	setFont,
	setPalette,
	type DarkMode
} from './theme.svelte.ts';

export {
	fontCategories,
	fontNames,
	fontPairings,
	getFontByName,
	getFontsByCategory,
	type FontCategory,
	type FontCategoryInfo,
	type FontName,
	type FontPairing
} from './fonts.svelte.ts';
