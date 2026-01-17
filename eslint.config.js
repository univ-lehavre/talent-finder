import prettier from 'eslint-config-prettier';
import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import functional from 'eslint-plugin-functional';
import jsdoc from 'eslint-plugin-jsdoc';
import noSecrets from 'eslint-plugin-no-secrets';
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
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
			'no-undef': 'off',
			// Complexity rules - detect code that needs refactoring
			complexity: ['warn', { max: 10 }],
			'max-depth': ['warn', { max: 4 }],
			'max-nested-callbacks': ['warn', { max: 3 }],
			'max-params': ['warn', { max: 4 }],
			'max-lines-per-function': ['warn', { max: 50, skipBlankLines: true, skipComments: true }]
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
	},
	// JSDoc rules for src/lib - require documentation on exports
	{
		files: ['src/lib/**/*.ts'],
		ignores: ['**/*.test.ts', '**/*.spec.ts', '**/index.ts'],
		plugins: { jsdoc },
		rules: {
			'jsdoc/require-jsdoc': [
				'warn',
				{
					publicOnly: true,
					require: {
						FunctionDeclaration: true,
						MethodDefinition: true,
						ClassDeclaration: true,
						ArrowFunctionExpression: true,
						FunctionExpression: true
					},
					contexts: [
						'ExportNamedDeclaration > VariableDeclaration > VariableDeclarator > ArrowFunctionExpression',
						'ExportNamedDeclaration > VariableDeclaration > VariableDeclarator > FunctionExpression',
						'ExportNamedDeclaration > FunctionDeclaration',
						'ExportNamedDeclaration > ClassDeclaration',
						'ExportNamedDeclaration > TSTypeAliasDeclaration',
						'ExportNamedDeclaration > TSInterfaceDeclaration'
					]
				}
			],
			'jsdoc/require-description': ['warn', { contexts: ['any'] }],
			'jsdoc/require-param': 'warn',
			'jsdoc/require-param-type': 'warn',
			'jsdoc/require-returns': 'warn',
			'jsdoc/require-returns-type': 'warn',
			'jsdoc/check-param-names': 'warn',
			'jsdoc/check-tag-names': 'warn',
			'jsdoc/check-types': 'off' // TypeScript handles types
		}
	},
	// Functional programming rules for src/lib - encourage pure functions
	{
		files: ['src/lib/**/*.ts'],
		ignores: ['**/*.test.ts', '**/*.spec.ts', '**/index.ts', '**/*.svelte.ts'],
		plugins: { functional },
		rules: {
			// Prefer immutable variables (const over let)
			'functional/no-let': 'warn',
			// No loops - prefer map/filter/reduce
			'functional/no-loop-statements': 'warn',
			// No this/classes in pure functions
			'functional/no-this-expressions': 'warn',
			// No throw statements - prefer Result types
			'functional/no-throw-statements': 'warn'
		}
	},
	// SonarJS rules - detect bugs and code smells
	{
		files: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.svelte'],
		plugins: { sonarjs },
		rules: {
			// Cognitive complexity - easier to understand code
			'sonarjs/cognitive-complexity': ['warn', 15],
			// No duplicate strings - use constants
			'sonarjs/no-duplicate-string': ['warn', { threshold: 3 }],
			// No identical functions
			'sonarjs/no-identical-functions': 'warn',
			// No redundant boolean comparisons
			'sonarjs/no-redundant-boolean': 'warn',
			// No unused variables in catch
			'sonarjs/no-ignored-exceptions': 'warn',
			// No nested template literals
			'sonarjs/no-nested-template-literals': 'warn',
			// Prefer immediate return
			'sonarjs/prefer-immediate-return': 'warn'
		}
	},
	// Security rules - detect potential security issues
	{
		files: ['src/**/*.ts', 'src/**/*.js'],
		plugins: { security },
		rules: {
			// Detect potential RegEx DoS
			'security/detect-unsafe-regex': 'warn',
			// Detect buffer overflow
			'security/detect-buffer-noassert': 'warn',
			// Detect child_process usage
			'security/detect-child-process': 'warn',
			// Detect eval usage
			'security/detect-eval-with-expression': 'warn',
			// Detect non-literal fs filename
			'security/detect-non-literal-fs-filename': 'warn',
			// Detect non-literal require
			'security/detect-non-literal-require': 'warn',
			// Detect object injection
			'security/detect-object-injection': 'off', // Too many false positives
			// Detect possible timing attacks
			'security/detect-possible-timing-attacks': 'warn',
			// Detect pseudoRandomBytes
			'security/detect-pseudoRandomBytes': 'warn',
			// Detect non-literal regexp
			'security/detect-non-literal-regexp': 'warn'
		}
	},
	// No secrets rules - detect hardcoded secrets
	{
		files: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.svelte'],
		plugins: { 'no-secrets': noSecrets },
		rules: {
			// Detect hardcoded secrets and credentials
			'no-secrets/no-secrets': [
				'warn',
				{
					tolerance: 4.5,
					additionalDelimiters: ['/', '=']
				}
			]
		}
	}
);
