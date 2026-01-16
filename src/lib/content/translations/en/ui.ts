/**
 * UI component content - English translation.
 */

import { brand, commonLabels } from './brand';
import type { UIContent } from '../../types';

/**
 * English UI content.
 */
export const en: UIContent = {
	common: {
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
	connectivity: {
		appwriteUnavailable: {
			title: 'Authentication server unavailable',
			description:
				'Unable to connect to the authentication server. Some features may not work properly.'
		},
		noInternet: {
			title: 'No internet connection',
			description: 'Please check your network settings and try again.'
		}
	},
	consent: {
		title: 'Data consent',
		openAlexTitle: `Priority access to ${brand.openAlex}`,
		grantedMessage: `Your email is shared with ${brand.openAlex} for faster queries (10x faster).`,
		declinedMessage: `You declined to share your email with ${brand.openAlex}.`,
		pendingMessage: `Share your email with ${brand.openAlex} for faster searches.`,
		grantButton: 'Grant consent',
		revokeButton: 'Revoke consent',
		declineButton: 'Decline'
	},
	profile: {
		title: 'Your profile',
		complete: 'Profile complete',
		incomplete: 'Profile incomplete'
	},
	theme: {
		title: 'Theme preferences',
		palette: 'Palette',
		font: 'Font',
		mode: 'Mode',
		light: 'Light',
		dark: 'Dark',
		changeTheme: 'Change theme'
	},
	comingSoon: {
		defaultTitle: 'Coming soon',
		defaultDescription: 'We are working on new features to improve your experience.'
	},
	health: {
		title: 'System health',
		refreshLabel: 'Refresh status',
		status: commonLabels.statusLabels,
		services: {
			appwrite: brand.appwrite,
			internet: 'Internet'
		},
		checked: 'Checked',
		apiKey: 'API Key',
		valid: 'Valid',
		invalid: 'Invalid',
		notFound: 'Not found',
		missing: 'Missing'
	},
	researchOrganization: {
		title: 'Organization search',
		consentRequired: 'Consent required',
		consentMessage:
			'Grant consent in the "Data consent" card to search for research organizations.',
		searchPlaceholder: 'Search research organizations...',
		maxReached: 'Maximum number of organizations reached',
		noResults: 'No organizations found for',
		selectedTitle: 'Selected organizations',
		maxLabel: 'max',
		noSelection: 'No organizations selected. Use the search above to add some.',
		works: 'works',
		citations: 'citations',
		removeLabel: 'Remove'
	},
	researchOutput: {
		title: 'Research output',
		consentMessage: 'Grant consent in the "Data consent" card to view output statistics.',
		selectOrganizations: 'Select organizations above to view their research output.',
		loading: 'Loading statistics...',
		articlesByYear: 'Articles by year',
		before: 'Before',
		affiliatedAuthors: 'Affiliated authors',
		total: 'Total'
	}
};
