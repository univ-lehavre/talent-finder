import prettier from 'eslint-config-prettier';
import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },

		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],

		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	},
	{
		files: [
			'**/routes/repository/+page.svelte',
			'**/routes/+page.svelte',
			'**/routes/+layout.svelte',
			'**/routes/+error.svelte',
			'**/routes/login/+page.svelte',
			'**/routes/dashboard/+page.svelte',
			'**/lib/ui/ConnectivityBanner.svelte',
			'**/lib/ui/ErrorState.svelte',
			'**/lib/ui/LoginForm.svelte',
			'**/lib/ui/PageHeader.svelte',
			'**/lib/ui/PartnerLogo.svelte',
			'**/lib/ui/PartnerSection.svelte'
		],
		rules: {
			// External links and static navigation don't need resolve()
			'svelte/no-navigation-without-resolve': 'off'
		}
	},
	{
		files: ['**/routes/+layout.svelte'],
		rules: {
			// Static SVG from build-time import is safe
			'svelte/no-at-html-tags': 'off'
		}
	}
);
