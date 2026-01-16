<script lang="ts">
	import { page } from '$app/stores';
	import { ErrorState, ButtonGroup, LinkButton, Button } from '$lib/ui';
	import { errors } from '$lib/content';

	const getErrorInfo = (
		status: number,
		errorMessage?: string
	): { title: string; message: string; variant: 'default' | 'warning' | 'error' } => {
		if (status === 404) {
			return {
				title: errors.notFound.title,
				message: errors.notFound.message,
				variant: 'default'
			};
		}
		return {
			title: errors.generic.title,
			message: errorMessage ?? errors.generic.message,
			variant: 'error'
		};
	};

	const errorInfo = $derived(getErrorInfo($page.status, $page.error?.message));
</script>

<svelte:head>
	<title>{$page.status} {errors.titleSuffix}</title>
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
				<LinkButton href="/" variant="primary" icon="lucide:home"
					>{errors.buttons.backToHome}</LinkButton
				>
				<Button variant="outline" icon="lucide:arrow-left" onclick={() => history.back()}>
					{errors.buttons.goBack}
				</Button>
			</ButtonGroup>
		{/snippet}
	</ErrorState>
</div>
