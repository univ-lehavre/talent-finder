import type { KnipConfig } from 'knip';

/**
 * Knip configuration for detecting unused code and dependencies
 * @see https://knip.dev/overview/configuration
 */
const config: KnipConfig = {
	// Entry points for the application
	entry: [
		'src/routes/**/*.{ts,svelte}',
		'src/hooks.server.ts',
		'src/app.d.ts',
		'vite.config.ts',
		'svelte.config.js',
		'eslint.config.js'
	],

	// Project source files
	project: ['src/**/*.{ts,svelte}'],

	// Ignore patterns
	ignore: [
		// Generated files
		'.svelte-kit/**',
		'build/**',
		'node_modules/**',
		// Test files (handled separately)
		'**/*.test.ts',
		'**/*.spec.ts',
		// Scripts
		'scripts/**'
	],

	// Ignore specific exports (barrel files, types)
	ignoreDependencies: [
		// Peer dependencies and plugins
		'prettier-plugin-svelte',
		'@tailwindcss/vite'
	],

	// SvelteKit specific configuration
	sveltekit: {
		entry: ['src/routes/**/*.{ts,svelte}', 'src/hooks.server.ts']
	},

	// Workspaces (if using monorepo)
	workspaces: {
		'.': {
			entry: [
				'src/routes/**/+*.{ts,svelte}',
				'src/hooks.server.ts',
				'vite.config.ts',
				'svelte.config.js'
			]
		}
	}
};

export default config;
