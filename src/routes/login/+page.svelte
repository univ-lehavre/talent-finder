<script lang="ts">
	import { LoadingSpinner, LoginForm, ErrorState, ButtonGroup, Icon } from '$lib/ui';

	interface Props {
		data: {
			isMagicLinkCallback: boolean;
			error?: boolean;
			message?: string;
			cause?: string;
		};
		form: {
			error?: boolean;
			message?: string;
			cause?: string;
			success?: boolean;
		} | null;
	}

	let { data, form }: Props = $props();
</script>

<svelte:head>
	<title>Connexion - ECRIN | Talent finder</title>
	<meta name="description" content="Connectez-vous à votre compte ECRIN Talent Finder" />
</svelte:head>

<div
	class="min-h-screen flex items-center justify-center bg-secondary-50 dark:bg-secondary-900 transition-colors duration-200 px-4"
>
	{#if data.isMagicLinkCallback}
		{#if data.error}
			<!-- Magic link error -->
			<ErrorState
				title={data.message ?? 'Connexion échouée'}
				message={data.cause ?? 'Le lien de connexion est invalide ou a expiré.'}
				icon="lucide:link-2-off"
				variant="error"
				size="md"
			>
				{#snippet actions()}
					<ButtonGroup justify="center">
						<a href="/login" class="btn-primary">
							<Icon icon="lucide:refresh-cw" width="16" height="16" />
							Réessayer
						</a>
						<a href="/" class="btn-outline">
							<Icon icon="lucide:home" width="16" height="16" />
							Accueil
						</a>
					</ButtonGroup>
				{/snippet}
			</ErrorState>
		{:else}
			<!-- Magic link processing -->
			<div class="text-center">
				<h1 class="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
					Connexion en cours...
				</h1>
				<LoadingSpinner size="md" variant="primary" label="Vérification de vos identifiants..." />
				<p class="mt-4 text-secondary-600 dark:text-secondary-400">
					Veuillez patienter pendant la vérification de vos identifiants.
				</p>
			</div>
		{/if}
	{:else}
		<!-- Login form -->
		<LoginForm {form} />
	{/if}
</div>
