<script lang="ts">
	import {
		CenteredLayout,
		LoadingState,
		LoginForm,
		ErrorState,
		ButtonGroup,
		LinkButton
	} from '$lib/ui';
	import { auth } from '$lib/content';

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
	<title>{auth.login.title}</title>
	<meta name="description" content={auth.login.description} />
</svelte:head>

<CenteredLayout>
	{#if data.isMagicLinkCallback}
		{#if data.error}
			<ErrorState
				title={data.message ?? auth.login.error.title}
				message={data.cause ?? auth.login.error.message}
				icon="lucide:link-2-off"
				variant="error"
				size="md"
			>
				{#snippet actions()}
					<ButtonGroup justify="center">
						<LinkButton href="/login" variant="primary" icon="lucide:refresh-cw">
							{auth.login.buttons.retry}
						</LinkButton>
						<LinkButton href="/" variant="secondary" icon="lucide:home"
							>{auth.login.buttons.home}</LinkButton
						>
					</ButtonGroup>
				{/snippet}
			</ErrorState>
		{:else}
			<LoadingState title={auth.login.loading.title} message={auth.login.loading.message} />
		{/if}
	{:else}
		<LoginForm {form} />
	{/if}
</CenteredLayout>
