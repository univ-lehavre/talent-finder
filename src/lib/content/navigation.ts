/**
 * Navigation content - prepared for internationalization.
 * Contains all navigation-related text content.
 */

import type { NavigationContent } from './types';

/**
 * French navigation content.
 */
export const fr: NavigationContent = {
	links: {
		home: 'Accueil',
		dashboard: 'Tableau de bord'
	},
	external: {
		github: 'GitHub',
		githubDescription: 'Voir le code source'
	},
	actions: {
		signIn: 'Se connecter',
		signOut: 'Déconnexion'
	},
	brand: 'ECRIN | Talent finder'
};

/**
 * Default content export - can be replaced with locale-based selection.
 */
export const navigation = fr;
