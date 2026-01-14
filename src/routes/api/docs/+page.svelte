<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		data: {
			spec: object;
		};
	}

	let { data }: Props = $props();

	let swaggerContainer: HTMLDivElement;

	onMount(async () => {
		const { SwaggerUIBundle } = await import('swagger-ui-dist');
		await import('swagger-ui-dist/swagger-ui.css');

		SwaggerUIBundle({
			spec: data.spec,
			domNode: swaggerContainer,
			deepLinking: true,
			layout: 'BaseLayout'
		});
	});
</script>

<svelte:head>
	<title>API Documentation - Talent Finder</title>
</svelte:head>

<div class="min-h-screen bg-white">
	<div bind:this={swaggerContainer}></div>
</div>

<style>
	:global(.swagger-ui .topbar) {
		display: none;
	}

	:global(.swagger-ui) {
		font-family: inherit;
	}
</style>
