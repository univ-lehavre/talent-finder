/**
 * Font pairing definitions and store for the theme system
 * Provides pre-defined font combinations for UI and editorial content
 * Organized by category: Sans-serif, Serif, Display, Technical
 */

/**
 * Font category for organizing font pairings
 */
export type FontCategory = 'sans-serif' | 'serif' | 'display' | 'technical';

/**
 * Font pairing configuration
 */
export interface FontPairing {
	name: string;
	description: string;
	category: FontCategory;
	/** Font for headings and display text */
	heading: string;
	/** Font for body text and UI elements */
	body: string;
	/** Font for code and monospace content */
	mono: string;
	/** Google Fonts URL for loading */
	googleFontsUrl: string;
}

/**
 * Category metadata for display
 */
export interface FontCategoryInfo {
	id: FontCategory;
	name: string;
	description: string;
}

/**
 * Font categories with descriptions
 */
export const fontCategories: FontCategoryInfo[] = [
	{
		id: 'sans-serif',
		name: 'Sans-serif',
		description: 'Modern, clean fonts without serifs - ideal for interfaces and digital content'
	},
	{
		id: 'serif',
		name: 'Serif',
		description: 'Classic fonts with serifs - excellent for reading and editorial content'
	},
	{
		id: 'display',
		name: 'Display',
		description: 'Decorative and distinctive fonts for headlines and branding'
	},
	{
		id: 'technical',
		name: 'Technical',
		description: 'Precise and engineered fonts optimized for code and data'
	}
];

/**
 * Pre-defined font pairings organized by category
 */
export const fontPairings: FontPairing[] = [
	// === SANS-SERIF ===
	{
		name: 'Interface',
		description: 'Clean and modern for web applications',
		category: 'sans-serif',
		heading: 'Inter',
		body: 'Inter',
		mono: 'JetBrains Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
	},
	{
		name: 'Modern',
		description: 'Contemporary and minimal design',
		category: 'sans-serif',
		heading: 'Poppins',
		body: 'Open Sans',
		mono: 'Roboto Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap'
	},
	{
		name: 'Humanist',
		description: 'Friendly and approachable for content sites',
		category: 'sans-serif',
		heading: 'Nunito',
		body: 'Nunito Sans',
		mono: 'Fira Code',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Nunito+Sans:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Geometric',
		description: 'Clean geometric shapes for modern brands',
		category: 'sans-serif',
		heading: 'Outfit',
		body: 'DM Sans',
		mono: 'DM Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Minimal',
		description: 'Ultra-clean Swiss design aesthetic',
		category: 'sans-serif',
		heading: 'Manrope',
		body: 'Karla',
		mono: 'Space Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap'
	},
	{
		name: 'Startup',
		description: 'Bold and confident for tech products',
		category: 'sans-serif',
		heading: 'Plus Jakarta Sans',
		body: 'Plus Jakarta Sans',
		mono: 'Inconsolata',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Professional',
		description: 'Corporate and business-oriented',
		category: 'sans-serif',
		heading: 'Lexend',
		body: 'Work Sans',
		mono: 'Source Code Pro',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Source+Code+Pro:wght@400;500&family=Work+Sans:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Friendly',
		description: 'Warm and welcoming personality',
		category: 'sans-serif',
		heading: 'Quicksand',
		body: 'Rubik',
		mono: 'Fira Code',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Quicksand:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Rounded',
		description: 'Soft and approachable with rounded edges',
		category: 'sans-serif',
		heading: 'Comfortaa',
		body: 'Varela Round',
		mono: 'Ubuntu Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Ubuntu+Mono:wght@400;700&family=Varela+Round&display=swap'
	},
	{
		name: 'Nordic',
		description: 'Scandinavian minimalist design',
		category: 'sans-serif',
		heading: 'Albert Sans',
		body: 'Figtree',
		mono: 'JetBrains Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
	},

	// === SERIF ===
	{
		name: 'Editorial',
		description: 'Elegant serif for articles and documentation',
		category: 'serif',
		heading: 'Source Serif 4',
		body: 'Source Sans 3',
		mono: 'Source Code Pro',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Classic',
		description: 'Timeless combination for traditional content',
		category: 'serif',
		heading: 'Playfair Display',
		body: 'Lato',
		mono: 'Inconsolata',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&family=Lato:wght@400;700&family=Playfair+Display:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Literary',
		description: 'Book-like feel for long-form reading',
		category: 'serif',
		heading: 'Merriweather',
		body: 'Merriweather',
		mono: 'Fira Code',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Merriweather:wght@400;700&display=swap'
	},
	{
		name: 'Magazine',
		description: 'Editorial style for modern publications',
		category: 'serif',
		heading: 'Libre Baskerville',
		body: 'Libre Franklin',
		mono: 'Roboto Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Libre+Franklin:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap'
	},
	{
		name: 'Academic',
		description: 'Scholarly and refined for research',
		category: 'serif',
		heading: 'Crimson Pro',
		body: 'Crimson Pro',
		mono: 'JetBrains Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
	},
	{
		name: 'Elegant',
		description: 'Sophisticated and luxurious feel',
		category: 'serif',
		heading: 'Cormorant Garamond',
		body: 'Proza Libre',
		mono: 'Source Code Pro',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Proza+Libre:wght@400;500;600;700&family=Source+Code+Pro:wght@400;500&display=swap'
	},
	{
		name: 'News',
		description: 'Traditional newspaper typography',
		category: 'serif',
		heading: 'PT Serif',
		body: 'PT Sans',
		mono: 'PT Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=PT+Mono&family=PT+Sans:wght@400;700&family=PT+Serif:wght@400;700&display=swap'
	},
	{
		name: 'Typewriter',
		description: 'Nostalgic mechanical typewriter look',
		category: 'serif',
		heading: 'Courier Prime',
		body: 'Spectral',
		mono: 'Courier Prime',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Spectral:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Transitional',
		description: 'Bridge between old and modern serifs',
		category: 'serif',
		heading: 'Lora',
		body: 'Roboto',
		mono: 'Roboto Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&family=Roboto:wght@400;500;700&display=swap'
	},
	{
		name: 'Contemporary',
		description: 'Modern serif with clean lines',
		category: 'serif',
		heading: 'Fraunces',
		body: 'Commissioner',
		mono: 'Fira Code',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;600;700&family=Fira+Code:wght@400;500&family=Fraunces:wght@400;500;600;700&display=swap'
	},

	// === DISPLAY ===
	{
		name: 'Bold Statement',
		description: 'High-impact headlines for marketing',
		category: 'display',
		heading: 'Bebas Neue',
		body: 'Montserrat',
		mono: 'Space Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap'
	},
	{
		name: 'Creative',
		description: 'Artistic and expressive for portfolios',
		category: 'display',
		heading: 'Abril Fatface',
		body: 'Raleway',
		mono: 'Fira Code',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fira+Code:wght@400;500&family=Raleway:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Luxe',
		description: 'Premium and sophisticated branding',
		category: 'display',
		heading: 'Bodoni Moda',
		body: 'Josefin Sans',
		mono: 'Inconsolata',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600;700&family=Inconsolata:wght@400;500&family=Josefin+Sans:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Vintage',
		description: 'Retro charm with modern readability',
		category: 'display',
		heading: 'Archivo Black',
		body: 'Archivo',
		mono: 'IBM Plex Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap'
	},
	{
		name: 'Urban',
		description: 'Street-smart and contemporary',
		category: 'display',
		heading: 'Oswald',
		body: 'Source Sans 3',
		mono: 'Source Code Pro',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Code+Pro:wght@400;500&family=Source+Sans+3:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Playful',
		description: 'Fun and energetic for young brands',
		category: 'display',
		heading: 'Fredoka',
		body: 'Nunito',
		mono: 'Ubuntu Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&family=Ubuntu+Mono:wght@400;700&display=swap'
	},
	{
		name: 'Art Deco',
		description: 'Glamorous 1920s inspired style',
		category: 'display',
		heading: 'Poiret One',
		body: 'Quicksand',
		mono: 'Space Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Poiret+One&family=Quicksand:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap'
	},
	{
		name: 'Condensed',
		description: 'Space-efficient for data-dense UIs',
		category: 'display',
		heading: 'Barlow Condensed',
		body: 'Barlow',
		mono: 'Fira Code',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap'
	},
	{
		name: 'Contrast',
		description: 'High contrast for dramatic effect',
		category: 'display',
		heading: 'Yeseva One',
		body: 'Noto Sans',
		mono: 'Noto Sans Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400;500&family=Noto+Sans:wght@400;500;600;700&family=Yeseva+One&display=swap'
	},
	{
		name: 'Slab',
		description: 'Bold slab serif for strong statements',
		category: 'display',
		heading: 'Alfa Slab One',
		body: 'Public Sans',
		mono: 'JetBrains Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=JetBrains+Mono:wght@400;500&family=Public+Sans:wght@400;500;600;700&display=swap'
	},

	// === TECHNICAL ===
	{
		name: 'Technical',
		description: 'Precise and clear for technical content',
		category: 'technical',
		heading: 'IBM Plex Sans',
		body: 'IBM Plex Sans',
		mono: 'IBM Plex Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Developer',
		description: 'Optimized for code-heavy documentation',
		category: 'technical',
		heading: 'JetBrains Mono',
		body: 'Inter',
		mono: 'JetBrains Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Terminal',
		description: 'Command-line inspired aesthetic',
		category: 'technical',
		heading: 'Fira Code',
		body: 'Fira Sans',
		mono: 'Fira Code',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Fira+Sans:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Data',
		description: 'Optimized for tables and numbers',
		category: 'technical',
		heading: 'Roboto',
		body: 'Roboto',
		mono: 'Roboto Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap'
	},
	{
		name: 'Science',
		description: 'Academic scientific documentation',
		category: 'technical',
		heading: 'STIX Two Text',
		body: 'STIX Two Text',
		mono: 'Source Code Pro',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&family=STIX+Two+Text:wght@400;500;600;700&display=swap'
	},
	{
		name: 'Engineering',
		description: 'Industrial precision for CAD-like UIs',
		category: 'technical',
		heading: 'Share Tech',
		body: 'Exo 2',
		mono: 'Share Tech Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Share+Tech&family=Share+Tech+Mono&display=swap'
	},
	{
		name: 'System',
		description: 'OS-inspired system UI fonts',
		category: 'technical',
		heading: 'Ubuntu',
		body: 'Ubuntu',
		mono: 'Ubuntu Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&family=Ubuntu:wght@400;500;700&display=swap'
	},
	{
		name: 'Console',
		description: 'Retro computing terminal style',
		category: 'technical',
		heading: 'VT323',
		body: 'Anonymous Pro',
		mono: 'VT323',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&family=VT323&display=swap'
	},
	{
		name: 'Monospace',
		description: 'Full monospace for coding environments',
		category: 'technical',
		heading: 'Space Mono',
		body: 'Space Grotesk',
		mono: 'Space Mono',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap'
	},
	{
		name: 'Documentation',
		description: 'Clear technical documentation style',
		category: 'technical',
		heading: 'Atkinson Hyperlegible',
		body: 'Atkinson Hyperlegible',
		mono: 'Cascadia Code',
		googleFontsUrl:
			'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap'
	}
];

/**
 * Get font pairings filtered by category
 */
export const getFontsByCategory = (category: FontCategory): FontPairing[] => {
	return fontPairings.filter((p) => p.category === category);
};

/** Current font pairing state */
let currentFontPairing = $state<FontPairing>(fontPairings[0]);

/**
 * Get the current font pairing
 */
export const getFontPairing = (): FontPairing => currentFontPairing;

/**
 * Set the current font pairing
 */
export const setFontPairing = (pairing: FontPairing): void => {
	currentFontPairing = pairing;
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('selected-font', pairing.name);
	}
};

/**
 * Initialize font pairing from localStorage
 */
export const initFontPairing = (): void => {
	if (typeof localStorage !== 'undefined') {
		const savedFontName = localStorage.getItem('selected-font');
		if (savedFontName) {
			const found = fontPairings.find((p) => p.name === savedFontName);
			if (found) {
				currentFontPairing = found;
			}
		}
	}
};

/**
 * Create a reactive font store
 */
export const createFontStore = () => {
	return {
		get pairing() {
			return currentFontPairing;
		},
		set pairing(value: FontPairing) {
			setFontPairing(value);
		}
	};
};
