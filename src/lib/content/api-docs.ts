/**
 * API documentation page content - prepared for internationalization.
 * Contains all API docs page text content.
 */

import { pageTitle } from './brand';
import type { ApiDocsContent } from './types';

/**
 * French API documentation page content.
 */
export const fr: ApiDocsContent = {
	meta: {
		title: pageTitle('Documentation API')
	}
};

/**
 * Default content export - can be replaced with locale-based selection.
 */
export const apiDocs = fr;
