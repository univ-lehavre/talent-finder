/**
 * Error page content - French.
 */

import { brand } from '../../../core/brand';
import type { ErrorContent } from '../../../types';

/**
 * French error content.
 */
export const fr: ErrorContent = {
	titleSuffix: brand.titleSuffix,
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
