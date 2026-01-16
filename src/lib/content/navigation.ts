/**
 * Navigation content - prepared for internationalization.
 * Contains all navigation-related text content.
 */

import { brand, commonLabels } from './brand';
import type { NavigationContent } from './types';

/**
 * French navigation content.
 */
export const fr: NavigationContent = {
	links: {
		home: commonLabels.home,
		dashboard: 'Tableau de bord'
	},
	external: {
		github: brand.github,
		githubDescription: 'Voir le code source'
	},
	actions: {
		signIn: 'Se connecter',
		signOut: 'Déconnexion'
	},
	brand: brand.appNameFull,
	footer: {
		attribution: `Développé à ${brand.ulhn}`
	}
};

/**
 * Default content export - can be replaced with locale-based selection.
 */
export const navigation = fr;
