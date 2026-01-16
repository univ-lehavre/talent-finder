/**
 * Error page content - prepared for internationalization.
 * Contains all error-related text content.
 */

import type { ErrorContent } from './types';

/**
 * French error content.
 */
export const fr: ErrorContent = {
	titleSuffix: '- ECRIN | Talent finder',
	notFound: {
		title: 'Page non trouvée',
		message: "La page que vous recherchez n'existe pas ou a été déplacée."
	},
	generic: {
		title: 'Une erreur est survenue',
		message: 'Une erreur inattendue est survenue.'
	},
	buttons: {
		backToHome: "Retour à l'accueil",
		goBack: 'Revenir en arrière'
	}
};

/**
 * Default content export - can be replaced with locale-based selection.
 */
export const errors = fr;
