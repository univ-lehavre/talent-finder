import type { KnipConfig } from 'knip';

/**
 * Knip configuration for detecting unused code and dependencies
 * @see https://knip.dev/overview/configuration
 */
const config: KnipConfig = {
	// Entry points for the application
	entry: [
		'src/routes/**/+*.{ts,svelte}',
		'src/hooks.server.ts',
		'src/app.d.ts',
		'vite.config.ts',
		'svelte.config.js',
		'eslint.config.js',
		'commitlint.config.ts'
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
		'scripts/**',
		// Legacy barrel files (to be cleaned up)
		'src/lib/components/api-docs/index.ts',
		'src/lib/components/home/index.ts',
		'src/lib/components/repository/index.ts',
		'src/lib/components/theme/index.ts',
		'src/lib/index.ts'
	],

	// Ignore specific dependencies
	ignoreDependencies: [
		// Vite/build plugins
		'prettier-plugin-svelte',
		'@tailwindcss/vite',
		// Tailwind is used via @tailwindcss/vite
		'tailwindcss'
	],

	// Paths that Knip cannot resolve (SvelteKit virtual modules)
	paths: {
		'$env/*': ['src/app.d.ts'],
		'$app/*': ['node_modules/@sveltejs/kit/types']
	}
};

export default config;
