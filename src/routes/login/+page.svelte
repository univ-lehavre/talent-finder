<script lang="ts">
	import {
		CenteredLayout,
		LoadingState,
		LoginForm,
		ErrorState,
		ButtonGroup,
		LinkButton
	} from '$lib/ui';

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

<CenteredLayout>
	{#if data.isMagicLinkCallback}
		{#if data.error}
			<ErrorState
				title={data.message ?? 'Connexion échouée'}
				message={data.cause ?? 'Le lien de connexion est invalide ou a expiré.'}
				icon="lucide:link-2-off"
				variant="error"
				size="md"
			>
				{#snippet actions()}
					<ButtonGroup justify="center">
						<LinkButton href="/login" variant="primary" icon="lucide:refresh-cw">
							Réessayer
						</LinkButton>
						<LinkButton href="/" variant="secondary" icon="lucide:home">Accueil</LinkButton>
					</ButtonGroup>
				{/snippet}
			</ErrorState>
		{:else}
			<LoadingState
				title="Connexion en cours..."
				message="Veuillez patienter pendant la vérification de vos identifiants."
			/>
		{/if}
	{:else}
		<LoginForm {form} />
	{/if}
</CenteredLayout>
