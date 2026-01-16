<script lang="ts">
	import { page } from '$app/stores';
	import { ErrorState, ButtonGroup, LinkButton, Button } from '$lib/ui';

	const getErrorInfo = (
		status: number,
		errorMessage?: string
	): { title: string; message: string; variant: 'default' | 'warning' | 'error' } => {
		if (status === 404) {
			return {
				title: 'Page not found',
				message: "The page you're looking for doesn't exist or has been moved.",
				variant: 'default'
			};
		}
		return {
			title: 'Something went wrong',
			message: errorMessage ?? 'An unexpected error occurred.',
			variant: 'error'
		};
	};

	const errorInfo = $derived(getErrorInfo($page.status, $page.error?.message));
</script>

<svelte:head>
	<title>{$page.status} - ECRIN | Talent finder</title>
	<meta name="description" content={errorInfo.title} />
</svelte:head>

<div class="container-app">
	<ErrorState
		code={$page.status}
		title={errorInfo.title}
		message={errorInfo.message}
		variant={errorInfo.variant}
	>
		{#snippet actions()}
			<ButtonGroup justify="center">
				<LinkButton href="/" variant="primary" icon="lucide:home">Back to Home</LinkButton>
				<Button variant="outline" icon="lucide:arrow-left" onclick={() => history.back()}>
					Go Back
				</Button>
			</ButtonGroup>
		{/snippet}
	</ErrorState>
</div>
