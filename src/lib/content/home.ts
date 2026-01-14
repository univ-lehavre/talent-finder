/**
 * Homepage content - prepared for internationalization.
 * All user-facing text should be defined here for easy translation.
 */

export interface Challenge {
	title: string;
	problem: string;
	solution: string;
}

export interface Step {
	number: string;
	title: string;
	description: string;
}

export interface HomeContent {
	hero: {
		title: string;
		subtitle: string;
		ctaLoggedIn: string;
		ctaLoggedOut: string;
		learnMore: string;
	};
	howItWorks: {
		title: string;
		subtitle: string;
		steps: Step[];
	};
	challenges: {
		title: string;
		subtitle: string;
		items: Challenge[];
	};
	cta: {
		title: string;
		subtitle: string;
		buttonLoggedIn: string;
		buttonLoggedOut: string;
	};
}

/**
 * English content for the homepage.
 */
export const en: HomeContent = {
	hero: {
		title: 'Find the Right Talent for Your Projects',
		subtitle:
			'Connect with skilled professionals, researchers, and experts. Build your team and bring your ideas to life.',
		ctaLoggedIn: 'Dashboard',
		ctaLoggedOut: 'Get Started',
		learnMore: 'Learn More'
	},
	howItWorks: {
		title: 'How it Works',
		subtitle:
			'Getting started with Talent Finder is simple. Follow these three steps to find your next collaborator.',
		steps: [
			{
				number: '1',
				title: 'Create Your Profile',
				description: 'Sign up and describe your skills, expertise, and research interests'
			},
			{
				number: '2',
				title: 'Discover Talent',
				description: 'Search the repository to find collaborators matching your project needs'
			},
			{
				number: '3',
				title: 'Connect & Collaborate',
				description: 'Reach out directly and start working together on innovative projects'
			}
		]
	},
	challenges: {
		title: 'Why We Built Talent Finder',
		subtitle:
			"Finding the right collaborators in academia and research remains a challenge. Here's what we're solving.",
		items: [
			{
				title: 'Scattered Information',
				problem:
					'Researcher profiles are spread across LinkedIn, ResearchGate, university pages, and personal websites.',
				solution: 'Talent Finder centralizes expertise in one searchable repository.'
			},
			{
				title: 'Limited Discovery',
				problem:
					'Finding collaborators often relies on word-of-mouth or conferences, missing potential matches.',
				solution:
					'Our platform enables discovery based on skills, research interests, and availability.'
			},
			{
				title: 'Cross-Border Barriers',
				problem: 'International collaboration within university alliances lacks dedicated tools.',
				solution: 'Built for EUNICoast, Talent Finder connects talent across partner institutions.'
			}
		]
	},
	cta: {
		title: 'Ready to Find Your Next Collaborator?',
		subtitle:
			'Join our platform today and start connecting with talented professionals from around the world.',
		buttonLoggedIn: 'Access Dashboard',
		buttonLoggedOut: 'Explore Repository'
	}
};

/**
 * Default content export - can be replaced with locale-based selection.
 */
export const content = en;
