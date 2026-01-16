/**
 * Common shared content - English.
 * Labels and messages used across multiple components.
 */

import { commonLabels } from '../brand';
import type { CommonContent } from '../../../types';

/**
 * English common content.
 */
export const en: CommonContent = {
	labels: {
		tryAgain: commonLabels.retry,
		checkStatus: 'Check status',
		email: 'Email',
		notLoggedIn: 'Not logged in',
		customize: 'Customize',
		updated: 'Updated'
	},
	relativeTime: {
		justNow: 'just now',
		secondsAgo: '{count}s ago',
		minutesAgo: '{count}min ago',
		hoursAgo: '{count}h ago',
		yesterday: 'yesterday',
		daysAgo: '{count} days ago'
	},
	comingSoon: {
		defaultTitle: 'Coming soon',
		defaultDescription: 'We are working on new features to improve your experience.'
	}
};
