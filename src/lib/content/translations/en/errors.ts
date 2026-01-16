/**
 * Error page content - English translation.
 */

import { brand } from './brand';
import type { ErrorContent } from '../../types';

/**
 * English error content.
 */
export const en: ErrorContent = {
	titleSuffix: brand.titleSuffix,
	notFound: {
		title: 'Page not found',
		message: 'The page you are looking for does not exist or has been moved.'
	},
	generic: {
		title: 'An error occurred',
		message: 'An unexpected error occurred.'
	},
	buttons: {
		backToHome: 'Back to home',
		goBack: 'Go back'
	}
};
