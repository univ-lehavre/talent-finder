/**
 * Navigation content - English translation.
 */

import { brand, commonLabels } from './brand';
import type { NavigationContent } from '../../types';

/**
 * English navigation content.
 */
export const en: NavigationContent = {
	links: {
		home: commonLabels.home,
		dashboard: 'Dashboard'
	},
	external: {
		github: brand.github,
		githubDescription: 'View source code'
	},
	actions: {
		signIn: 'Sign in',
		signOut: 'Sign out'
	},
	brand: brand.appNameFull,
	footer: {
		attribution: `Developed at ${brand.ulhn}`
	}
};
