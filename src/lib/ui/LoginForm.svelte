<script lang="ts">
	import { isEmail } from '$lib/validators';
	import { enhance } from '$app/forms';
	import Icon from './Icon.svelte';
	import Alert from './Alert.svelte';

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
		<h1 class="login-form-title">Connexion</h1>
		<p class="login-form-description">
			Entrez votre adresse email professionnelle pour recevoir un lien de connexion sécurisé.
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
			<label for="email" class="label">Adresse email</label>
			<input
				id="email"
				name="email"
				type="email"
				class="input"
				placeholder="prenom.nom@universite.fr"
				aria-describedby="email-help"
				bind:value={email}
				disabled={signuping}
			/>
			<p id="email-help" class="login-form-hint">
				Seules les adresses email universitaires sont acceptées
			</p>
		</div>

		<button type="submit" class="w-full btn-primary" disabled={isDisabled}>
			{#if signuping}
				<span class="inline-flex items-center gap-2">
					<span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
					></span>
					Envoi en cours...
				</span>
			{:else}
				<Icon icon="lucide:send" width="16" height="16" />
				Envoyer le lien de connexion
			{/if}
		</button>

		{#if form?.error}
			<Alert variant="error" dismissible>
				<strong>Erreur :</strong>
				{form.message ?? 'Une erreur est survenue'}
				{#if form.cause}
					— {form.cause}
				{/if}
			</Alert>
		{/if}

		{#if form?.success}
			<Alert variant="success" dismissible>
				<strong>Email envoyé !</strong> Un lien de connexion vous a été envoyé. Vérifiez votre boîte de
				réception.
			</Alert>
		{/if}
	</form>

	<div class="login-form-footer">
		<p>
			En vous connectant, vous acceptez nos
			<a href="/terms" class="login-form-link">conditions d'utilisation</a>.
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
