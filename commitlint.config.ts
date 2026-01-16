import type { UserConfig } from '@commitlint/types';

/**
 * Commitlint configuration for enforcing Conventional Commits
 * @see https://www.conventionalcommits.org/
 * @see https://commitlint.js.org/
 */
const config: UserConfig = {
	extends: ['@commitlint/config-conventional'],

	rules: {
		// Type must be one of the allowed values
		'type-enum': [
			2,
			'always',
			[
				'feat', // New feature
				'fix', // Bug fix
				'docs', // Documentation changes
				'style', // Code style (formatting, semicolons, etc.)
				'refactor', // Code refactoring
				'perf', // Performance improvements
				'test', // Adding or updating tests
				'build', // Build system or dependencies
				'ci', // CI/CD configuration
				'chore', // Maintenance tasks
				'revert' // Reverting changes
			]
		],

		// Scope is optional but recommended
		'scope-case': [2, 'always', 'kebab-case'],

		// Subject rules
		'subject-case': [2, 'always', 'lower-case'],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],

		// Header max length
		'header-max-length': [2, 'always', 100],

		// Body rules
		'body-leading-blank': [2, 'always'],
		'body-max-line-length': [2, 'always', 100],

		// Footer rules
		'footer-leading-blank': [2, 'always'],
		'footer-max-line-length': [2, 'always', 100]
	},

	// Help URL for contributors
	helpUrl: 'https://www.conventionalcommits.org/'
};

export default config;
