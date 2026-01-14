/**
 * Color Palettes Module
 * Inspired by ColorBrewer (https://colorbrewer2.org/)
 * Provides accessible color schemes for data visualization.
 *
 * Palette types:
 * - Sequential: For ordered data from low to high
 * - Diverging: For data with a meaningful midpoint
 * - Qualitative: For categorical/nominal data
 */

export interface ColorPalette {
	name: string;
	type: 'sequential' | 'diverging' | 'qualitative';
	colors: string[];
	description: string;
}

/**
 * Sequential palettes - Single hue progressions
 * Best for: ordered data, quantities, progression
 */
export const sequentialPalettes: ColorPalette[] = [
	{
		name: 'Blues',
		type: 'sequential',
		colors: [
			'#f7fbff',
			'#deebf7',
			'#c6dbef',
			'#9ecae1',
			'#6baed6',
			'#4292c6',
			'#2171b5',
			'#084594'
		],
		description: 'Light to dark blue, good for water/cold themes'
	},
	{
		name: 'Greens',
		type: 'sequential',
		colors: [
			'#f7fcf5',
			'#e5f5e0',
			'#c7e9c0',
			'#a1d99b',
			'#74c476',
			'#41ab5d',
			'#238b45',
			'#005a32'
		],
		description: 'Light to dark green, good for nature/growth themes'
	},
	{
		name: 'Oranges',
		type: 'sequential',
		colors: [
			'#fff5eb',
			'#fee6ce',
			'#fdd0a2',
			'#fdae6b',
			'#fd8d3c',
			'#f16913',
			'#d94801',
			'#8c2d04'
		],
		description: 'Light to dark orange, good for warmth/energy themes'
	},
	{
		name: 'Purples',
		type: 'sequential',
		colors: [
			'#fcfbfd',
			'#efedf5',
			'#dadaeb',
			'#bcbddc',
			'#9e9ac8',
			'#807dba',
			'#6a51a3',
			'#4a1486'
		],
		description: 'Light to dark purple, good for luxury/creativity themes'
	},
	{
		name: 'Reds',
		type: 'sequential',
		colors: [
			'#fff5f0',
			'#fee0d2',
			'#fcbba1',
			'#fc9272',
			'#fb6a4a',
			'#ef3b2c',
			'#cb181d',
			'#99000d'
		],
		description: 'Light to dark red, good for intensity/heat themes'
	},
	{
		name: 'Greys',
		type: 'sequential',
		colors: [
			'#ffffff',
			'#f0f0f0',
			'#d9d9d9',
			'#bdbdbd',
			'#969696',
			'#737373',
			'#525252',
			'#252525'
		],
		description: 'Light to dark grey, neutral and accessible'
	},
	{
		name: 'Blue-Green',
		type: 'sequential',
		colors: [
			'#f7fcfd',
			'#e5f5f9',
			'#ccece6',
			'#99d8c9',
			'#66c2a4',
			'#41ae76',
			'#238b45',
			'#005824'
		],
		description: 'Blue to green transition, good for ocean/environment'
	},
	{
		name: 'Blue-Purple',
		type: 'sequential',
		colors: [
			'#f7fcfd',
			'#e0ecf4',
			'#bfd3e6',
			'#9ebcda',
			'#8c96c6',
			'#8c6bb1',
			'#88419d',
			'#6e016b'
		],
		description: 'Blue to purple transition, good for tech/innovation'
	},
	{
		name: 'Yellow-Green',
		type: 'sequential',
		colors: [
			'#ffffe5',
			'#f7fcb9',
			'#d9f0a3',
			'#addd8e',
			'#78c679',
			'#41ab5d',
			'#238443',
			'#005a32'
		],
		description: 'Yellow to green, good for vegetation/agriculture'
	},
	{
		name: 'Yellow-Orange-Red',
		type: 'sequential',
		colors: [
			'#ffffcc',
			'#ffeda0',
			'#fed976',
			'#feb24c',
			'#fd8d3c',
			'#fc4e2a',
			'#e31a1c',
			'#b10026'
		],
		description: 'Heat map colors, good for intensity/temperature'
	},
	{
		name: 'Pink-Purple',
		type: 'sequential',
		colors: [
			'#fff7f3',
			'#fde0dd',
			'#fcc5c0',
			'#fa9fb5',
			'#f768a1',
			'#dd3497',
			'#ae017e',
			'#7a0177'
		],
		description: 'Pink to purple, good for feminine/creative themes'
	},
	{
		name: 'Green-Blue',
		type: 'sequential',
		colors: [
			'#f7fcf0',
			'#e0f3db',
			'#ccebc5',
			'#a8ddb5',
			'#7bccc4',
			'#4eb3d3',
			'#2b8cbe',
			'#08589e'
		],
		description: 'Green to blue, good for depth/water themes'
	}
];

/**
 * Diverging palettes - Two hues with neutral midpoint
 * Best for: data with meaningful center (e.g., positive/negative, above/below average)
 */
export const divergingPalettes: ColorPalette[] = [
	{
		name: 'Red-Blue',
		type: 'diverging',
		colors: [
			'#b2182b',
			'#d6604d',
			'#f4a582',
			'#fddbc7',
			'#d1e5f0',
			'#92c5de',
			'#4393c3',
			'#2166ac'
		],
		description: 'Classic diverging, warm to cool'
	},
	{
		name: 'Brown-Teal',
		type: 'diverging',
		colors: [
			'#8c510a',
			'#bf812d',
			'#dfc27d',
			'#f6e8c3',
			'#c7eae5',
			'#80cdc1',
			'#35978f',
			'#01665e'
		],
		description: 'Earth tones, good for environmental data'
	},
	{
		name: 'Purple-Green',
		type: 'diverging',
		colors: [
			'#762a83',
			'#9970ab',
			'#c2a5cf',
			'#e7d4e8',
			'#d9f0d3',
			'#a6dba0',
			'#5aae61',
			'#1b7837'
		],
		description: 'Colorblind-friendly diverging palette'
	},
	{
		name: 'Pink-Green',
		type: 'diverging',
		colors: [
			'#c51b7d',
			'#de77ae',
			'#f1b6da',
			'#fde0ef',
			'#e6f5d0',
			'#b8e186',
			'#7fbc41',
			'#4d9221'
		],
		description: 'High contrast diverging palette'
	},
	{
		name: 'Orange-Purple',
		type: 'diverging',
		colors: [
			'#b35806',
			'#e08214',
			'#fdb863',
			'#fee0b6',
			'#d8daeb',
			'#b2abd2',
			'#8073ac',
			'#542788'
		],
		description: 'Vibrant diverging, good for highlighting extremes'
	},
	{
		name: 'Red-Grey',
		type: 'diverging',
		colors: [
			'#b2182b',
			'#d6604d',
			'#f4a582',
			'#fddbc7',
			'#e0e0e0',
			'#bababa',
			'#878787',
			'#4d4d4d'
		],
		description: 'Red to neutral grey, emphasizes one direction'
	},
	{
		name: 'Red-Yellow-Blue',
		type: 'diverging',
		colors: [
			'#d73027',
			'#f46d43',
			'#fdae61',
			'#fee090',
			'#e0f3f8',
			'#abd9e9',
			'#74add1',
			'#4575b4'
		],
		description: 'Three-color diverging for temperature maps'
	},
	{
		name: 'Spectral',
		type: 'diverging',
		colors: [
			'#d53e4f',
			'#f46d43',
			'#fdae61',
			'#fee08b',
			'#e6f598',
			'#abdda4',
			'#66c2a5',
			'#3288bd'
		],
		description: 'Rainbow-like diverging, highly visible'
	},
	{
		name: 'Pink-Yellow-Green',
		type: 'diverging',
		colors: [
			'#8e0152',
			'#c51b7d',
			'#de77ae',
			'#f1b6da',
			'#d9f0a3',
			'#addd8e',
			'#78c679',
			'#31a354'
		],
		description: 'Warm pink to fresh green, good for sentiment'
	},
	{
		name: 'Blue-Yellow-Red',
		type: 'diverging',
		colors: [
			'#2166ac',
			'#4393c3',
			'#92c5de',
			'#fee090',
			'#fdb863',
			'#f4a582',
			'#d6604d',
			'#b2182b'
		],
		description: 'Cool to warm transition via yellow'
	},
	{
		name: 'Cyan-Magenta',
		type: 'diverging',
		colors: [
			'#01665e',
			'#35978f',
			'#80cdc1',
			'#c7eae5',
			'#f1b6da',
			'#de77ae',
			'#c51b7d',
			'#8e0152'
		],
		description: 'Print-inspired colors, good for comparison'
	},
	{
		name: 'Green-Brown',
		type: 'diverging',
		colors: [
			'#1b7837',
			'#5aae61',
			'#a6dba0',
			'#d9f0d3',
			'#f6e8c3',
			'#dfc27d',
			'#bf812d',
			'#8c510a'
		],
		description: 'Nature-inspired, good for land use data'
	}
];

/**
 * Qualitative palettes - Distinct colors for categories
 * Best for: categorical data, different groups, labels
 */
export const qualitativePalettes: ColorPalette[] = [
	{
		name: 'Set1',
		type: 'qualitative',
		colors: [
			'#e41a1c',
			'#377eb8',
			'#4daf4a',
			'#984ea3',
			'#ff7f00',
			'#ffff33',
			'#a65628',
			'#f781bf'
		],
		description: 'Bold, high-contrast categorical colors'
	},
	{
		name: 'Set2',
		type: 'qualitative',
		colors: [
			'#66c2a5',
			'#fc8d62',
			'#8da0cb',
			'#e78ac3',
			'#a6d854',
			'#ffd92f',
			'#e5c494',
			'#b3b3b3'
		],
		description: 'Pastel categorical colors, gentler contrast'
	},
	{
		name: 'Set3',
		type: 'qualitative',
		colors: [
			'#8dd3c7',
			'#ffffb3',
			'#bebada',
			'#fb8072',
			'#80b1d3',
			'#fdb462',
			'#b3de69',
			'#fccde5'
		],
		description: 'Light pastel palette for backgrounds'
	},
	{
		name: 'Pastel1',
		type: 'qualitative',
		colors: [
			'#fbb4ae',
			'#b3cde3',
			'#ccebc5',
			'#decbe4',
			'#fed9a6',
			'#ffffcc',
			'#e5d8bd',
			'#fddaec'
		],
		description: 'Very light pastels, subtle differentiation'
	},
	{
		name: 'Pastel2',
		type: 'qualitative',
		colors: [
			'#b3e2cd',
			'#fdcdac',
			'#cbd5e8',
			'#f4cae4',
			'#e6f5c9',
			'#fff2ae',
			'#f1e2cc',
			'#cccccc'
		],
		description: 'Soft pastels with good balance'
	},
	{
		name: 'Dark2',
		type: 'qualitative',
		colors: [
			'#1b9e77',
			'#d95f02',
			'#7570b3',
			'#e7298a',
			'#66a61e',
			'#e6ab02',
			'#a6761d',
			'#666666'
		],
		description: 'Dark saturated colors, good for small elements'
	},
	{
		name: 'Paired',
		type: 'qualitative',
		colors: [
			'#a6cee3',
			'#1f78b4',
			'#b2df8a',
			'#33a02c',
			'#fb9a99',
			'#e31a1c',
			'#fdbf6f',
			'#ff7f00'
		],
		description: 'Light-dark pairs, good for paired categories'
	},
	{
		name: 'Accent',
		type: 'qualitative',
		colors: [
			'#7fc97f',
			'#beaed4',
			'#fdc086',
			'#ffff99',
			'#386cb0',
			'#f0027f',
			'#bf5b17',
			'#666666'
		],
		description: 'Mixed accent colors for highlights'
	},
	{
		name: 'Tableau10',
		type: 'qualitative',
		colors: [
			'#4e79a7',
			'#f28e2c',
			'#e15759',
			'#76b7b2',
			'#59a14f',
			'#edc949',
			'#af7aa1',
			'#ff9da7'
		],
		description: 'Tableau default palette, well-balanced'
	},
	{
		name: 'Category10',
		type: 'qualitative',
		colors: [
			'#1f77b4',
			'#ff7f0e',
			'#2ca02c',
			'#d62728',
			'#9467bd',
			'#8c564b',
			'#e377c2',
			'#7f7f7f'
		],
		description: 'D3.js default categorical palette'
	},
	{
		name: 'Vivid',
		type: 'qualitative',
		colors: [
			'#e60049',
			'#0bb4ff',
			'#50e991',
			'#e6d800',
			'#9b19f5',
			'#ffa300',
			'#dc0ab4',
			'#00bfa0'
		],
		description: 'High saturation, maximum distinction'
	},
	{
		name: 'Retro',
		type: 'qualitative',
		colors: [
			'#ea5545',
			'#f46a9b',
			'#ef9b20',
			'#edbf33',
			'#ede15b',
			'#bdcf32',
			'#87bc45',
			'#27aeef'
		],
		description: 'Vintage-inspired warm colors'
	}
];

/**
 * Gradient palettes - CSS gradient definitions
 * Best for: backgrounds, overlays, decorative elements
 */
export interface GradientPalette {
	name: string;
	type: 'linear' | 'radial';
	css: string;
	colors: string[];
	description: string;
}

export const gradientPalettes: GradientPalette[] = [
	{
		name: 'Ocean',
		type: 'linear',
		css: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		colors: ['#667eea', '#764ba2'],
		description: 'Purple to indigo, modern tech feel'
	},
	{
		name: 'Sunset',
		type: 'linear',
		css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
		colors: ['#f093fb', '#f5576c'],
		description: 'Pink to coral, warm and inviting'
	},
	{
		name: 'Forest',
		type: 'linear',
		css: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
		colors: ['#11998e', '#38ef7d'],
		description: 'Teal to green, fresh and natural'
	},
	{
		name: 'Peach',
		type: 'linear',
		css: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
		colors: ['#ffecd2', '#fcb69f'],
		description: 'Cream to peach, soft and warm'
	},
	{
		name: 'Night Sky',
		type: 'linear',
		css: 'linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)',
		colors: ['#0c3483', '#a2b6df'],
		description: 'Dark to light blue, evening atmosphere'
	},
	{
		name: 'Sunrise',
		type: 'linear',
		css: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
		colors: ['#ff9a9e', '#fecfef'],
		description: 'Pink gradient, gentle morning feel'
	},
	{
		name: 'Arctic',
		type: 'linear',
		css: 'linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%)',
		colors: ['#74ebd5', '#acb6e5'],
		description: 'Cyan to lavender, cool and calm'
	},
	{
		name: 'Flame',
		type: 'linear',
		css: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
		colors: ['#f12711', '#f5af19'],
		description: 'Red to orange, energetic and bold'
	},
	{
		name: 'Royal',
		type: 'linear',
		css: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
		colors: ['#141e30', '#243b55'],
		description: 'Dark blue gradient, elegant and professional'
	},
	{
		name: 'Mint',
		type: 'linear',
		css: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)',
		colors: ['#00b09b', '#96c93d'],
		description: 'Green gradient, fresh and lively'
	},
	{
		name: 'Lavender',
		type: 'linear',
		css: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
		colors: ['#c471f5', '#fa71cd'],
		description: 'Purple to pink, playful and creative'
	},
	{
		name: 'Steel',
		type: 'linear',
		css: 'linear-gradient(135deg, #485563 0%, #29323c 100%)',
		colors: ['#485563', '#29323c'],
		description: 'Dark grey gradient, industrial and modern'
	}
];

/**
 * Get all palettes grouped by type
 */
export const getAllPalettes = (): {
	sequential: ColorPalette[];
	diverging: ColorPalette[];
	qualitative: ColorPalette[];
	gradients: GradientPalette[];
} => ({
	sequential: sequentialPalettes,
	diverging: divergingPalettes,
	qualitative: qualitativePalettes,
	gradients: gradientPalettes
});

/**
 * Get a specific palette by name
 */
export const getPaletteByName = (name: string): ColorPalette | GradientPalette | undefined => {
	const all = [...sequentialPalettes, ...divergingPalettes, ...qualitativePalettes];
	const found = all.find((p) => p.name.toLowerCase() === name.toLowerCase());
	if (found) return found;
	return gradientPalettes.find((p) => p.name.toLowerCase() === name.toLowerCase());
};

/**
 * Get colors for a specific number of categories from a palette
 */
export const getColorsForCount = (palette: ColorPalette, count: number): string[] => {
	if (count >= palette.colors.length) {
		return palette.colors;
	}
	if (count === 1) {
		return [palette.colors[Math.floor(palette.colors.length / 2)]];
	}

	const step = (palette.colors.length - 1) / (count - 1);
	const result: string[] = [];
	for (let i = 0; i < count; i++) {
		result.push(palette.colors[Math.round(i * step)]);
	}
	return result;
};

/**
 * Theme palette - Complete color scheme for UI theming
 * Provides coherent light and dark mode colors for backgrounds and components
 */
export interface ThemePalette {
	name: string;
	description: string;
	category: ThemePaletteCategory;
	light: {
		background: string;
		surface: string;
		border: string;
		text: string;
		textMuted: string;
		primary: string;
		primaryHover: string;
		accent: string;
	};
	dark: {
		background: string;
		surface: string;
		border: string;
		text: string;
		textMuted: string;
		primary: string;
		primaryHover: string;
		accent: string;
	};
}

/** Theme palette category */
export type ThemePaletteCategory =
	| 'professional'
	| 'nature'
	| 'vibrant'
	| 'minimal'
	| 'warm'
	| 'cool';

/** Category metadata */
export interface ThemeCategoryInfo {
	id: ThemePaletteCategory;
	name: string;
	description: string;
}

/** Available theme categories */
export const themeCategories: ThemeCategoryInfo[] = [
	{ id: 'professional', name: 'Professional', description: 'Business and corporate themes' },
	{ id: 'nature', name: 'Nature', description: 'Earth tones and natural colors' },
	{ id: 'vibrant', name: 'Vibrant', description: 'Bold and colorful themes' },
	{ id: 'minimal', name: 'Minimal', description: 'Clean and understated' },
	{ id: 'warm', name: 'Warm', description: 'Cozy and inviting tones' },
	{ id: 'cool', name: 'Cool', description: 'Calm and refreshing colors' }
];

/** Get themes by category */
export const getThemesByCategory = (category: ThemePaletteCategory): ThemePalette[] => {
	return themePalettes.filter((p) => p.category === category);
};

/**
 * Pre-defined theme palettes for UI theming
 * Each palette provides coherent light/dark mode colors
 */
export const themePalettes: ThemePalette[] = [
	// ==================== PROFESSIONAL ====================
	{
		name: 'Corporate Blue',
		description: 'Classic business blue',
		category: 'professional',
		light: {
			background: '#f8fafc',
			surface: '#ffffff',
			border: '#e2e8f0',
			text: '#1e293b',
			textMuted: '#64748b',
			primary: '#0284c7',
			primaryHover: '#0369a1',
			accent: '#0d9488'
		},
		dark: {
			background: '#0f172a',
			surface: '#1e293b',
			border: '#334155',
			text: '#f1f5f9',
			textMuted: '#94a3b8',
			primary: '#38bdf8',
			primaryHover: '#7dd3fc',
			accent: '#2dd4bf'
		}
	},
	{
		name: 'Executive',
		description: 'Navy with gold accent',
		category: 'professional',
		light: {
			background: '#f8fafc',
			surface: '#ffffff',
			border: '#cbd5e1',
			text: '#1e3a5f',
			textMuted: '#475569',
			primary: '#1e40af',
			primaryHover: '#1e3a8a',
			accent: '#b45309'
		},
		dark: {
			background: '#0c1524',
			surface: '#1e293b',
			border: '#334155',
			text: '#f1f5f9',
			textMuted: '#94a3b8',
			primary: '#60a5fa',
			primaryHover: '#93c5fd',
			accent: '#fbbf24'
		}
	},
	{
		name: 'Legal',
		description: 'Deep burgundy professional',
		category: 'professional',
		light: {
			background: '#faf5f5',
			surface: '#ffffff',
			border: '#e7e5e4',
			text: '#44403c',
			textMuted: '#78716c',
			primary: '#7c2d12',
			primaryHover: '#6c2710',
			accent: '#854d0e'
		},
		dark: {
			background: '#1c1917',
			surface: '#292524',
			border: '#44403c',
			text: '#f5f5f4',
			textMuted: '#a8a29e',
			primary: '#dc2626',
			primaryHover: '#ef4444',
			accent: '#f59e0b'
		}
	},
	{
		name: 'Finance',
		description: 'Trust-inspiring green',
		category: 'professional',
		light: {
			background: '#f8faf8',
			surface: '#ffffff',
			border: '#d4d4d8',
			text: '#18181b',
			textMuted: '#52525b',
			primary: '#065f46',
			primaryHover: '#064e3b',
			accent: '#0369a1'
		},
		dark: {
			background: '#09090b',
			surface: '#18181b',
			border: '#3f3f46',
			text: '#fafafa',
			textMuted: '#a1a1aa',
			primary: '#10b981',
			primaryHover: '#34d399',
			accent: '#38bdf8'
		}
	},
	{
		name: 'Consultant',
		description: 'Sophisticated charcoal',
		category: 'professional',
		light: {
			background: '#fafafa',
			surface: '#ffffff',
			border: '#e5e5e5',
			text: '#171717',
			textMuted: '#525252',
			primary: '#404040',
			primaryHover: '#262626',
			accent: '#2563eb'
		},
		dark: {
			background: '#0a0a0a',
			surface: '#171717',
			border: '#404040',
			text: '#fafafa',
			textMuted: '#a3a3a3',
			primary: '#d4d4d4',
			primaryHover: '#e5e5e5',
			accent: '#60a5fa'
		}
	},
	{
		name: 'Healthcare',
		description: 'Calming medical blue',
		category: 'professional',
		light: {
			background: '#f0f9ff',
			surface: '#ffffff',
			border: '#bae6fd',
			text: '#0c4a6e',
			textMuted: '#0369a1',
			primary: '#0284c7',
			primaryHover: '#0369a1',
			accent: '#059669'
		},
		dark: {
			background: '#082f49',
			surface: '#0c4a6e',
			border: '#0369a1',
			text: '#e0f2fe',
			textMuted: '#7dd3fc',
			primary: '#38bdf8',
			primaryHover: '#7dd3fc',
			accent: '#34d399'
		}
	},

	// ==================== NATURE ====================
	{
		name: 'Forest',
		description: 'Deep woodland greens',
		category: 'nature',
		light: {
			background: '#f0fdf4',
			surface: '#ffffff',
			border: '#bbf7d0',
			text: '#14532d',
			textMuted: '#166534',
			primary: '#16a34a',
			primaryHover: '#15803d',
			accent: '#059669'
		},
		dark: {
			background: '#052e16',
			surface: '#14532d',
			border: '#166534',
			text: '#dcfce7',
			textMuted: '#86efac',
			primary: '#4ade80',
			primaryHover: '#86efac',
			accent: '#34d399'
		}
	},
	{
		name: 'Ocean',
		description: 'Deep sea blues',
		category: 'nature',
		light: {
			background: '#f0f9ff',
			surface: '#ffffff',
			border: '#bae6fd',
			text: '#0c4a6e',
			textMuted: '#0369a1',
			primary: '#2563eb',
			primaryHover: '#1d4ed8',
			accent: '#0891b2'
		},
		dark: {
			background: '#0c1929',
			surface: '#0f2744',
			border: '#1e3a5f',
			text: '#e0f2fe',
			textMuted: '#7dd3fc',
			primary: '#60a5fa',
			primaryHover: '#93c5fd',
			accent: '#22d3ee'
		}
	},
	{
		name: 'Earth',
		description: 'Warm terracotta tones',
		category: 'nature',
		light: {
			background: '#faf5f0',
			surface: '#ffffff',
			border: '#d6d3d1',
			text: '#44403c',
			textMuted: '#78716c',
			primary: '#b45309',
			primaryHover: '#92400e',
			accent: '#65a30d'
		},
		dark: {
			background: '#1c1917',
			surface: '#292524',
			border: '#44403c',
			text: '#fafaf9',
			textMuted: '#a8a29e',
			primary: '#f59e0b',
			primaryHover: '#fbbf24',
			accent: '#84cc16'
		}
	},
	{
		name: 'Moss',
		description: 'Soft sage greens',
		category: 'nature',
		light: {
			background: '#f7fee7',
			surface: '#ffffff',
			border: '#d9f99d',
			text: '#365314',
			textMuted: '#4d7c0f',
			primary: '#65a30d',
			primaryHover: '#4d7c0f',
			accent: '#0d9488'
		},
		dark: {
			background: '#1a2e05',
			surface: '#365314',
			border: '#4d7c0f',
			text: '#ecfccb',
			textMuted: '#bef264',
			primary: '#a3e635',
			primaryHover: '#bef264',
			accent: '#2dd4bf'
		}
	},
	{
		name: 'Desert',
		description: 'Sandy warm neutrals',
		category: 'nature',
		light: {
			background: '#fefce8',
			surface: '#ffffff',
			border: '#fef08a',
			text: '#713f12',
			textMuted: '#a16207',
			primary: '#ca8a04',
			primaryHover: '#a16207',
			accent: '#ea580c'
		},
		dark: {
			background: '#1c1a05',
			surface: '#422006',
			border: '#713f12',
			text: '#fef9c3',
			textMuted: '#fde047',
			primary: '#facc15',
			primaryHover: '#fde047',
			accent: '#fb923c'
		}
	},
	{
		name: 'Sky',
		description: 'Clear blue atmosphere',
		category: 'nature',
		light: {
			background: '#ecfeff',
			surface: '#ffffff',
			border: '#a5f3fc',
			text: '#164e63',
			textMuted: '#0e7490',
			primary: '#0891b2',
			primaryHover: '#0e7490',
			accent: '#7c3aed'
		},
		dark: {
			background: '#083344',
			surface: '#164e63',
			border: '#0e7490',
			text: '#cffafe',
			textMuted: '#67e8f9',
			primary: '#22d3ee',
			primaryHover: '#67e8f9',
			accent: '#a78bfa'
		}
	},

	// ==================== VIBRANT ====================
	{
		name: 'Electric',
		description: 'Bold purple energy',
		category: 'vibrant',
		light: {
			background: '#f5f3ff',
			surface: '#ffffff',
			border: '#ddd6fe',
			text: '#3b0764',
			textMuted: '#5b21b6',
			primary: '#7c3aed',
			primaryHover: '#6d28d9',
			accent: '#06b6d4'
		},
		dark: {
			background: '#0f0720',
			surface: '#1e1146',
			border: '#3b0764',
			text: '#ede9fe',
			textMuted: '#c4b5fd',
			primary: '#a78bfa',
			primaryHover: '#c4b5fd',
			accent: '#22d3ee'
		}
	},
	{
		name: 'Neon',
		description: 'Cyberpunk inspired',
		category: 'vibrant',
		light: {
			background: '#fdf4ff',
			surface: '#ffffff',
			border: '#f5d0fe',
			text: '#4a044e',
			textMuted: '#86198f',
			primary: '#c026d3',
			primaryHover: '#a21caf',
			accent: '#0ea5e9'
		},
		dark: {
			background: '#1a0520',
			surface: '#2e1065',
			border: '#581c87',
			text: '#fae8ff',
			textMuted: '#f0abfc',
			primary: '#e879f9',
			primaryHover: '#f0abfc',
			accent: '#38bdf8'
		}
	},
	{
		name: 'Tropical',
		description: 'Vibrant island colors',
		category: 'vibrant',
		light: {
			background: '#f0fdfa',
			surface: '#ffffff',
			border: '#99f6e4',
			text: '#134e4a',
			textMuted: '#0f766e',
			primary: '#14b8a6',
			primaryHover: '#0d9488',
			accent: '#f43f5e'
		},
		dark: {
			background: '#042f2e',
			surface: '#134e4a',
			border: '#0f766e',
			text: '#ccfbf1',
			textMuted: '#5eead4',
			primary: '#2dd4bf',
			primaryHover: '#5eead4',
			accent: '#fb7185'
		}
	},
	{
		name: 'Sunset',
		description: 'Warm orange glow',
		category: 'vibrant',
		light: {
			background: '#fff7ed',
			surface: '#ffffff',
			border: '#fed7aa',
			text: '#7c2d12',
			textMuted: '#c2410c',
			primary: '#ea580c',
			primaryHover: '#c2410c',
			accent: '#e11d48'
		},
		dark: {
			background: '#1c1408',
			surface: '#431407',
			border: '#7c2d12',
			text: '#ffedd5',
			textMuted: '#fdba74',
			primary: '#fb923c',
			primaryHover: '#fdba74',
			accent: '#fb7185'
		}
	},
	{
		name: 'Cherry',
		description: 'Bold pink pop',
		category: 'vibrant',
		light: {
			background: '#fdf2f8',
			surface: '#ffffff',
			border: '#fbcfe8',
			text: '#831843',
			textMuted: '#be185d',
			primary: '#ec4899',
			primaryHover: '#db2777',
			accent: '#8b5cf6'
		},
		dark: {
			background: '#1a0612',
			surface: '#500724',
			border: '#9d174d',
			text: '#fce7f3',
			textMuted: '#f9a8d4',
			primary: '#f472b6',
			primaryHover: '#f9a8d4',
			accent: '#a78bfa'
		}
	},
	{
		name: 'Lime',
		description: 'Fresh citrus energy',
		category: 'vibrant',
		light: {
			background: '#f7fee7',
			surface: '#ffffff',
			border: '#bef264',
			text: '#365314',
			textMuted: '#4d7c0f',
			primary: '#84cc16',
			primaryHover: '#65a30d',
			accent: '#06b6d4'
		},
		dark: {
			background: '#1a2e05',
			surface: '#365314',
			border: '#4d7c0f',
			text: '#ecfccb',
			textMuted: '#bef264',
			primary: '#a3e635',
			primaryHover: '#bef264',
			accent: '#22d3ee'
		}
	},

	// ==================== MINIMAL ====================
	{
		name: 'Paper',
		description: 'Clean white space',
		category: 'minimal',
		light: {
			background: '#ffffff',
			surface: '#fafafa',
			border: '#e5e5e5',
			text: '#171717',
			textMuted: '#525252',
			primary: '#404040',
			primaryHover: '#262626',
			accent: '#737373'
		},
		dark: {
			background: '#0a0a0a',
			surface: '#171717',
			border: '#262626',
			text: '#fafafa',
			textMuted: '#a3a3a3',
			primary: '#d4d4d4',
			primaryHover: '#e5e5e5',
			accent: '#a3a3a3'
		}
	},
	{
		name: 'Slate',
		description: 'Cool neutral tones',
		category: 'minimal',
		light: {
			background: '#f8fafc',
			surface: '#ffffff',
			border: '#e2e8f0',
			text: '#1e293b',
			textMuted: '#64748b',
			primary: '#475569',
			primaryHover: '#334155',
			accent: '#64748b'
		},
		dark: {
			background: '#0f172a',
			surface: '#1e293b',
			border: '#334155',
			text: '#f1f5f9',
			textMuted: '#94a3b8',
			primary: '#94a3b8',
			primaryHover: '#cbd5e1',
			accent: '#94a3b8'
		}
	},
	{
		name: 'Stone',
		description: 'Warm grey balance',
		category: 'minimal',
		light: {
			background: '#fafaf9',
			surface: '#ffffff',
			border: '#e7e5e4',
			text: '#1c1917',
			textMuted: '#57534e',
			primary: '#78716c',
			primaryHover: '#57534e',
			accent: '#a8a29e'
		},
		dark: {
			background: '#0c0a09',
			surface: '#1c1917',
			border: '#292524',
			text: '#fafaf9',
			textMuted: '#a8a29e',
			primary: '#a8a29e',
			primaryHover: '#d6d3d1',
			accent: '#a8a29e'
		}
	},
	{
		name: 'Zinc',
		description: 'Industrial modern',
		category: 'minimal',
		light: {
			background: '#fafafa',
			surface: '#ffffff',
			border: '#e4e4e7',
			text: '#18181b',
			textMuted: '#52525b',
			primary: '#52525b',
			primaryHover: '#3f3f46',
			accent: '#71717a'
		},
		dark: {
			background: '#09090b',
			surface: '#18181b',
			border: '#27272a',
			text: '#fafafa',
			textMuted: '#a1a1aa',
			primary: '#a1a1aa',
			primaryHover: '#d4d4d8',
			accent: '#a1a1aa'
		}
	},
	{
		name: 'Ink',
		description: 'High contrast mono',
		category: 'minimal',
		light: {
			background: '#ffffff',
			surface: '#f5f5f5',
			border: '#d4d4d4',
			text: '#0a0a0a',
			textMuted: '#404040',
			primary: '#171717',
			primaryHover: '#0a0a0a',
			accent: '#525252'
		},
		dark: {
			background: '#000000',
			surface: '#0a0a0a',
			border: '#262626',
			text: '#ffffff',
			textMuted: '#a3a3a3',
			primary: '#ffffff',
			primaryHover: '#e5e5e5',
			accent: '#a3a3a3'
		}
	},
	{
		name: 'Mist',
		description: 'Soft ethereal grey',
		category: 'minimal',
		light: {
			background: '#f9fafb',
			surface: '#ffffff',
			border: '#e5e7eb',
			text: '#111827',
			textMuted: '#6b7280',
			primary: '#6b7280',
			primaryHover: '#4b5563',
			accent: '#9ca3af'
		},
		dark: {
			background: '#030712',
			surface: '#111827',
			border: '#1f2937',
			text: '#f9fafb',
			textMuted: '#9ca3af',
			primary: '#9ca3af',
			primaryHover: '#d1d5db',
			accent: '#9ca3af'
		}
	},

	// ==================== WARM ====================
	{
		name: 'Amber',
		description: 'Golden warmth',
		category: 'warm',
		light: {
			background: '#fffbeb',
			surface: '#ffffff',
			border: '#fde68a',
			text: '#78350f',
			textMuted: '#92400e',
			primary: '#d97706',
			primaryHover: '#b45309',
			accent: '#ea580c'
		},
		dark: {
			background: '#1c1408',
			surface: '#422006',
			border: '#78350f',
			text: '#fef3c7',
			textMuted: '#fcd34d',
			primary: '#fbbf24',
			primaryHover: '#fcd34d',
			accent: '#fb923c'
		}
	},
	{
		name: 'Rose',
		description: 'Elegant blush',
		category: 'warm',
		light: {
			background: '#fff1f2',
			surface: '#ffffff',
			border: '#fecdd3',
			text: '#881337',
			textMuted: '#9f1239',
			primary: '#e11d48',
			primaryHover: '#be123c',
			accent: '#db2777'
		},
		dark: {
			background: '#1c0a12',
			surface: '#4c0519',
			border: '#881337',
			text: '#ffe4e6',
			textMuted: '#fda4af',
			primary: '#fb7185',
			primaryHover: '#fda4af',
			accent: '#f472b6'
		}
	},
	{
		name: 'Terracotta',
		description: 'Rustic clay',
		category: 'warm',
		light: {
			background: '#fef2f2',
			surface: '#ffffff',
			border: '#fecaca',
			text: '#7f1d1d',
			textMuted: '#991b1b',
			primary: '#b91c1c',
			primaryHover: '#991b1b',
			accent: '#b45309'
		},
		dark: {
			background: '#1c0808',
			surface: '#450a0a',
			border: '#7f1d1d',
			text: '#fee2e2',
			textMuted: '#fca5a5',
			primary: '#f87171',
			primaryHover: '#fca5a5',
			accent: '#fbbf24'
		}
	},
	{
		name: 'Peach',
		description: 'Soft coral tones',
		category: 'warm',
		light: {
			background: '#fff7ed',
			surface: '#ffffff',
			border: '#fed7aa',
			text: '#7c2d12',
			textMuted: '#9a3412',
			primary: '#f97316',
			primaryHover: '#ea580c',
			accent: '#ec4899'
		},
		dark: {
			background: '#1c1408',
			surface: '#431407',
			border: '#7c2d12',
			text: '#ffedd5',
			textMuted: '#fdba74',
			primary: '#fb923c',
			primaryHover: '#fdba74',
			accent: '#f472b6'
		}
	},
	{
		name: 'Cinnamon',
		description: 'Spiced brown',
		category: 'warm',
		light: {
			background: '#faf5f0',
			surface: '#ffffff',
			border: '#e7e5e4',
			text: '#44403c',
			textMuted: '#78716c',
			primary: '#a16207',
			primaryHover: '#854d0e',
			accent: '#dc2626'
		},
		dark: {
			background: '#1c1917',
			surface: '#292524',
			border: '#44403c',
			text: '#fafaf9',
			textMuted: '#a8a29e',
			primary: '#eab308',
			primaryHover: '#facc15',
			accent: '#ef4444'
		}
	},
	{
		name: 'Wine',
		description: 'Rich burgundy',
		category: 'warm',
		light: {
			background: '#fdf2f8',
			surface: '#ffffff',
			border: '#fce7f3',
			text: '#701a75',
			textMuted: '#a21caf',
			primary: '#be185d',
			primaryHover: '#9d174d',
			accent: '#c026d3'
		},
		dark: {
			background: '#1a0612',
			surface: '#4a044e',
			border: '#701a75',
			text: '#fdf4ff',
			textMuted: '#f0abfc',
			primary: '#ec4899',
			primaryHover: '#f472b6',
			accent: '#e879f9'
		}
	},

	// ==================== COOL ====================
	{
		name: 'Arctic',
		description: 'Icy blue fresh',
		category: 'cool',
		light: {
			background: '#ecfeff',
			surface: '#ffffff',
			border: '#a5f3fc',
			text: '#164e63',
			textMuted: '#0e7490',
			primary: '#0891b2',
			primaryHover: '#0e7490',
			accent: '#6366f1'
		},
		dark: {
			background: '#083344',
			surface: '#164e63',
			border: '#0e7490',
			text: '#cffafe',
			textMuted: '#67e8f9',
			primary: '#22d3ee',
			primaryHover: '#67e8f9',
			accent: '#818cf8'
		}
	},
	{
		name: 'Indigo',
		description: 'Deep purple blue',
		category: 'cool',
		light: {
			background: '#eef2ff',
			surface: '#ffffff',
			border: '#c7d2fe',
			text: '#312e81',
			textMuted: '#4338ca',
			primary: '#4f46e5',
			primaryHover: '#4338ca',
			accent: '#06b6d4'
		},
		dark: {
			background: '#0f0f2e',
			surface: '#1e1b4b',
			border: '#312e81',
			text: '#e0e7ff',
			textMuted: '#a5b4fc',
			primary: '#818cf8',
			primaryHover: '#a5b4fc',
			accent: '#22d3ee'
		}
	},
	{
		name: 'Teal',
		description: 'Refreshing aqua',
		category: 'cool',
		light: {
			background: '#f0fdfa',
			surface: '#ffffff',
			border: '#99f6e4',
			text: '#134e4a',
			textMuted: '#0f766e',
			primary: '#0d9488',
			primaryHover: '#0f766e',
			accent: '#3b82f6'
		},
		dark: {
			background: '#042f2e',
			surface: '#134e4a',
			border: '#0f766e',
			text: '#ccfbf1',
			textMuted: '#5eead4',
			primary: '#2dd4bf',
			primaryHover: '#5eead4',
			accent: '#60a5fa'
		}
	},
	{
		name: 'Sapphire',
		description: 'Royal blue gem',
		category: 'cool',
		light: {
			background: '#eff6ff',
			surface: '#ffffff',
			border: '#bfdbfe',
			text: '#1e3a8a',
			textMuted: '#1d4ed8',
			primary: '#2563eb',
			primaryHover: '#1d4ed8',
			accent: '#8b5cf6'
		},
		dark: {
			background: '#0c1929',
			surface: '#1e3a8a',
			border: '#1d4ed8',
			text: '#dbeafe',
			textMuted: '#93c5fd',
			primary: '#60a5fa',
			primaryHover: '#93c5fd',
			accent: '#a78bfa'
		}
	},
	{
		name: 'Mint',
		description: 'Fresh mint green',
		category: 'cool',
		light: {
			background: '#ecfdf5',
			surface: '#ffffff',
			border: '#a7f3d0',
			text: '#065f46',
			textMuted: '#047857',
			primary: '#059669',
			primaryHover: '#047857',
			accent: '#0ea5e9'
		},
		dark: {
			background: '#022c22',
			surface: '#064e3b',
			border: '#047857',
			text: '#d1fae5',
			textMuted: '#6ee7b7',
			primary: '#34d399',
			primaryHover: '#6ee7b7',
			accent: '#38bdf8'
		}
	},
	{
		name: 'Violet',
		description: 'Soft lavender',
		category: 'cool',
		light: {
			background: '#f5f3ff',
			surface: '#ffffff',
			border: '#ddd6fe',
			text: '#3b0764',
			textMuted: '#5b21b6',
			primary: '#7c3aed',
			primaryHover: '#6d28d9',
			accent: '#4f46e5'
		},
		dark: {
			background: '#0f0720',
			surface: '#1e1146',
			border: '#3b0764',
			text: '#ede9fe',
			textMuted: '#c4b5fd',
			primary: '#a78bfa',
			primaryHover: '#c4b5fd',
			accent: '#818cf8'
		}
	}
];

/**
 * Get theme palette by name
 */
export const getThemePaletteByName = (name: string): ThemePalette | undefined => {
	return themePalettes.find((p) => p.name.toLowerCase() === name.toLowerCase());
};

/**
 * Generate CSS custom properties from a theme palette for light mode
 */
export const generateLightThemeCssVars = (palette: ThemePalette): Record<string, string> => ({
	'--theme-background': palette.light.background,
	'--theme-surface': palette.light.surface,
	'--theme-border': palette.light.border,
	'--theme-text': palette.light.text,
	'--theme-text-muted': palette.light.textMuted,
	'--theme-primary': palette.light.primary,
	'--theme-primary-hover': palette.light.primaryHover,
	'--theme-accent': palette.light.accent
});

/**
 * Generate CSS custom properties from a theme palette for dark mode
 */
export const generateDarkThemeCssVars = (palette: ThemePalette): Record<string, string> => ({
	'--theme-background': palette.dark.background,
	'--theme-surface': palette.dark.surface,
	'--theme-border': palette.dark.border,
	'--theme-text': palette.dark.text,
	'--theme-text-muted': palette.dark.textMuted,
	'--theme-primary': palette.dark.primary,
	'--theme-primary-hover': palette.dark.primaryHover,
	'--theme-accent': palette.dark.accent
});

/**
 * Generate CSS custom properties from a theme palette
 * Uses CSS variables that respond to light/dark mode
 */
export const generateThemeCssVars = (palette: ThemePalette): Record<string, string> => ({
	// Light mode values (default)
	'--theme-bg-light': palette.light.background,
	'--theme-surface-light': palette.light.surface,
	'--theme-border-light': palette.light.border,
	'--theme-text-light': palette.light.text,
	'--theme-text-muted-light': palette.light.textMuted,
	'--theme-primary-light': palette.light.primary,
	'--theme-primary-hover-light': palette.light.primaryHover,
	'--theme-accent-light': palette.light.accent,
	// Dark mode values
	'--theme-bg-dark': palette.dark.background,
	'--theme-surface-dark': palette.dark.surface,
	'--theme-border-dark': palette.dark.border,
	'--theme-text-dark': palette.dark.text,
	'--theme-text-muted-dark': palette.dark.textMuted,
	'--theme-primary-dark': palette.dark.primary,
	'--theme-primary-hover-dark': palette.dark.primaryHover,
	'--theme-accent-dark': palette.dark.accent
});
