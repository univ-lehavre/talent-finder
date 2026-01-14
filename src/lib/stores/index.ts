/**
 * Stores index - exports all global stores
 */
export {
	createThemeStore,
	getCurrentColors,
	getPreviewMode,
	getTheme,
	initTheme,
	setPreviewMode,
	setTheme
} from './theme.svelte';

export {
	createFontStore,
	fontCategories,
	fontPairings,
	getFontPairing,
	getFontsByCategory,
	initFontPairing,
	setFontPairing,
	type FontCategory,
	type FontCategoryInfo,
	type FontPairing
} from './fonts.svelte';
