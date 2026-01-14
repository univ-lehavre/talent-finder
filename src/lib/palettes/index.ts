/**
 * UI Palettes Module
 * Defines 18 color palettes for the application UI
 * Each palette is defined by CSS custom properties in app.css
 *
 * Palettes use OKLCH color space with 7 parameters:
 * - 6 hues (primary, accent, neutral, success, warning, error)
 * - 1 optional chroma value for saturation control
 */

/**
 * Available palette names
 * Each name corresponds to a [data-palette="name"] CSS selector in app.css
 */
export const paletteNames = [
	'default',
	'corporate',
	'executive',
	'forest',
	'ocean',
	'earth',
	'neon',
	'electric',
	'tropical',
	'paper',
	'slate',
	'stone',
	'amber',
	'rose',
	'terracotta',
	'arctic',
	'indigo',
	'mint'
] as const;

/** Palette name type derived from the constant array */
export type PaletteName = (typeof paletteNames)[number];

/** Palette category type */
export type PaletteCategory = 'professional' | 'nature' | 'vibrant' | 'minimal' | 'warm' | 'cool';

/** Category metadata */
export interface PaletteCategoryInfo {
	id: PaletteCategory;
	name: string;
	description: string;
}

/** Available palette categories with descriptions */
export const paletteCategories: PaletteCategoryInfo[] = [
	{ id: 'professional', name: 'Professionnel', description: 'Thèmes business et corporate' },
	{ id: 'nature', name: 'Nature', description: 'Tons naturels et terreux' },
	{ id: 'vibrant', name: 'Vibrant', description: 'Couleurs vives et audacieuses' },
	{ id: 'minimal', name: 'Minimal', description: 'Design épuré et sobre' },
	{ id: 'warm', name: 'Chaleureux', description: 'Tons chauds et accueillants' },
	{ id: 'cool', name: 'Frais', description: 'Couleurs froides et apaisantes' }
];

/** Mapping of categories to their palettes */
export const palettesByCategory: Record<PaletteCategory, PaletteName[]> = {
	professional: ['default', 'corporate', 'executive'],
	nature: ['forest', 'ocean', 'earth'],
	vibrant: ['neon', 'electric', 'tropical'],
	minimal: ['paper', 'slate', 'stone'],
	warm: ['amber', 'rose', 'terracotta'],
	cool: ['arctic', 'indigo', 'mint']
};

/**
 * Get the category for a given palette name
 */
export const getCategoryForPalette = (palette: PaletteName): PaletteCategory | undefined => {
	for (const [category, palettes] of Object.entries(palettesByCategory)) {
		if (palettes.includes(palette)) {
			return category as PaletteCategory;
		}
	}
	return undefined;
};

/**
 * Get palettes for a specific category
 */
export const getPalettesByCategory = (category: PaletteCategory): PaletteName[] => {
	return palettesByCategory[category];
};

/**
 * Check if a string is a valid palette name
 */
export const isValidPalette = (name: string): name is PaletteName => {
	return paletteNames.includes(name as PaletteName);
};
