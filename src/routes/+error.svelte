<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '$lib/ui';
</script>

<svelte:head>
	<title>{$page.status} - Talent Finder</title>
	<meta name="description" content="Page not found" />
</svelte:head>

<div class="container-app py-20 md:py-32">
	<div class="text-center">
		<div
			class="w-24 h-24 mx-auto mb-8 rounded-full bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center"
		>
			{#if $page.status === 404}
				<Icon
					icon="lucide:search-x"
					width="48"
					height="48"
					class="text-secondary-400 dark:text-secondary-500"
				/>
			{:else}
				<Icon icon="lucide:alert-triangle" width="48" height="48" class="text-warning-500" />
			{/if}
		</div>

		<h1 class="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">
			{$page.status}
		</h1>

		<h2 class="text-2xl font-semibold text-secondary-800 dark:text-secondary-200 mb-4">
			{#if $page.status === 404}
				Page not found
			{:else}
				Something went wrong
			{/if}
		</h2>

		<p class="text-secondary-600 dark:text-secondary-400 mb-8">
			{#if $page.status === 404}
				The page you're looking for doesn't exist or has been moved.
			{:else}
				{$page.error?.message ?? 'An unexpected error occurred.'}
			{/if}
		</p>

		<div class="flex flex-wrap justify-center gap-4">
			<a href="/" class="btn-primary">
				<Icon icon="lucide:home" width="16" height="16" />
				Back to Home
			</a>
			<button type="button" class="btn-outline" onclick={() => history.back()}>
				<Icon icon="lucide:arrow-left" width="16" height="16" />
				Go Back
			</button>
		</div>
	</div>
</div>
