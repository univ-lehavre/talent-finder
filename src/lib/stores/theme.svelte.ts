/**
 * Global theme store for managing the selected color palette
 * Provides reactive state for theme selection across the entire application
 */
import { themePalettes, type ThemePalette } from '$lib/palettes';

/** Current theme state - writable store pattern using Svelte 5 module-level state */
let currentTheme = $state<ThemePalette>(themePalettes[0]);

/** Preview mode state for the theme page */
let currentPreviewMode = $state<'light' | 'dark'>('light');

/**
 * Get the current selected theme
 */
export const getTheme = (): ThemePalette => currentTheme;

/**
 * Set the current theme
 */
export const setTheme = (theme: ThemePalette): void => {
	currentTheme = theme;
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('selected-theme', theme.name);
	}
};

/**
 * Get the current preview mode
 */
export const getPreviewMode = (): 'light' | 'dark' => currentPreviewMode;

/**
 * Set the preview mode
 */
export const setPreviewMode = (mode: 'light' | 'dark'): void => {
	currentPreviewMode = mode;
};

/**
 * Initialize theme from localStorage
 */
export const initTheme = (): void => {
	if (typeof localStorage !== 'undefined') {
		const savedThemeName = localStorage.getItem('selected-theme');
		if (savedThemeName) {
			const found = themePalettes.find((p) => p.name === savedThemeName);
			if (found) {
				currentTheme = found;
			}
		}
	}
};

/**
 * Get current colors based on preview mode
 */
export const getCurrentColors = (): ThemePalette['light'] => {
	return currentPreviewMode === 'light' ? currentTheme.light : currentTheme.dark;
};

/**
 * Create a reactive theme store that can be used in components
 * Returns functions to access reactive state
 */
export const createThemeStore = () => {
	return {
		get theme() {
			return currentTheme;
		},
		set theme(value: ThemePalette) {
			setTheme(value);
		},
		get previewMode() {
			return currentPreviewMode;
		},
		set previewMode(value: 'light' | 'dark') {
			currentPreviewMode = value;
		},
		get colors() {
			return currentPreviewMode === 'light' ? currentTheme.light : currentTheme.dark;
		}
	};
};
