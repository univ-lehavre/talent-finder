<script lang="ts">
	import { isEmail } from '$lib/validators';
	import { enhance } from '$app/forms';
	import Icon from './Icon.svelte';
	import Alert from './Alert.svelte';
	import { i18n } from '$lib/content';

	const auth = $derived(i18n.auth);

	/**
	 * LoginForm - Formulaire de connexion standalone
	 *
	 * Version page complète du formulaire d'authentification par magic link.
	 * Utilisable sur la page /login ou intégrable dans d'autres layouts.
	 *
	 * @example
	 * ```svelte
	 * <LoginForm {form} />
	 * ```
	 */
	interface Props {
		/** Form state from SvelteKit action */
		form: {
			error?: boolean;
			message?: string;
			cause?: string;
			success?: boolean;
		} | null;
		/** Additional CSS classes */
		class?: string;
	}

	let { form, class: className = '' }: Props = $props();

	let email = $state('');
	let signuping = $state(false);

	const isDisabled = $derived(!isEmail(email) || signuping);
</script>

<div class="login-form {className}">
	<div class="login-form-header">
		<div class="login-form-icon">
			<Icon icon="lucide:mail" width="32" height="32" />
		</div>
		<h1 class="login-form-title">{auth.form.title}</h1>
		<p class="login-form-description">
			{auth.form.description}
		</p>
	</div>

	<form
		method="post"
		action="?/signup"
		class="login-form-body"
		use:enhance={() => {
			signuping = true;
			return async ({ update }) => {
				await update();
				signuping = false;
			};
		}}
	>
		<div class="login-form-field">
			<label for="email" class="label">{auth.form.emailLabel}</label>
			<input
				id="email"
				name="email"
				type="email"
				class="input"
				placeholder={auth.form.emailPlaceholder}
				aria-describedby="email-help"
				bind:value={email}
				disabled={signuping}
			/>
			<p id="email-help" class="login-form-hint">
				{auth.form.emailHint}
			</p>
		</div>

		<button type="submit" class="w-full btn-primary" disabled={isDisabled}>
			{#if signuping}
				<span class="inline-flex items-center gap-2">
					<span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
					></span>
					{auth.form.submitting}
				</span>
			{:else}
				<Icon icon="lucide:send" width="16" height="16" />
				{auth.form.submitButton}
			{/if}
		</button>

		{#if form?.error}
			<Alert variant="error" dismissible>
				<strong>{auth.form.error.prefix}</strong>
				{form.message ?? auth.form.error.default}
				{#if form.cause}
					— {form.cause}
				{/if}
			</Alert>
		{/if}

		{#if form?.success}
			<Alert variant="success" dismissible>
				<strong>{auth.form.success.title}</strong>
				{auth.form.success.message}
			</Alert>
		{/if}
	</form>

	<div class="login-form-footer">
		<p>
			{auth.form.footer}
			<a href="/terms" class="login-form-link">{auth.form.termsLink}</a>.
		</p>
	</div>
</div>

<style>
	.login-form {
		width: 100%;
		max-width: 24rem;
		margin-inline: auto;
	}

	.login-form-header {
		text-align: center;
		margin-bottom: var(--spacing-xl);
	}

	.login-form-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 4rem;
		height: 4rem;
		margin-inline: auto;
		margin-bottom: var(--spacing-md);
		border-radius: 9999px;
		background-color: var(--color-primary-100);
		color: var(--color-primary-600);
	}

	:global(.dark) .login-form-icon {
		background-color: var(--color-primary-900);
		color: var(--color-primary-400);
	}

	.login-form-title {
		font-size: var(--text-2xl);
		font-weight: 700;
		color: var(--color-secondary-900);
		margin-bottom: var(--spacing-sm);
	}

	:global(.dark) .login-form-title {
		color: var(--color-secondary-100);
	}

	.login-form-description {
		font-size: var(--text-sm);
		color: var(--color-secondary-600);
	}

	:global(.dark) .login-form-description {
		color: var(--color-secondary-400);
	}

	.login-form-body {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.login-form-field {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.login-form-hint {
		font-size: var(--text-xs);
		color: var(--color-secondary-500);
	}

	:global(.dark) .login-form-hint {
		color: var(--color-secondary-400);
	}

	.login-form-footer {
		margin-top: var(--spacing-xl);
		padding-top: var(--spacing-md);
		border-top: 1px solid var(--color-secondary-200);
		text-align: center;
		font-size: var(--text-xs);
		color: var(--color-secondary-500);
	}

	:global(.dark) .login-form-footer {
		border-color: var(--color-secondary-700);
		color: var(--color-secondary-400);
	}

	.login-form-link {
		color: var(--color-primary-600);
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.login-form-link:hover {
		color: var(--color-primary-700);
	}

	:global(.dark) .login-form-link {
		color: var(--color-primary-400);
	}

	:global(.dark) .login-form-link:hover {
		color: var(--color-primary-300);
	}
</style>
