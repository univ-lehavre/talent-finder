<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from './Icon.svelte';

	interface Props {
		/** Section title */
		title: string;
		/** Optional description below the title */
		description?: string;
		/** Lucide icon name (e.g., "lucide:palette") */
		icon?: string;
		/** Background variant: 'default' uses bg-secondary-50, 'surface' uses bg-white */
		variant?: 'default' | 'surface';
		/** Section content */
		children: Snippet;
	}

	let { title, description, icon, variant = 'default', children }: Props = $props();
</script>

<section
	class="py-12 transition-colors duration-300 {variant === 'surface'
		? 'bg-white dark:bg-secondary-800'
		: 'bg-secondary-50 dark:bg-secondary-900'}"
>
	<div class="container-app">
		<h2
			class="text-2xl font-bold mb-2 flex items-center gap-3 text-secondary-900 dark:text-secondary-100"
		>
			{#if icon}
				<Icon {icon} width="24" height="24" />
			{/if}
			{title}
		</h2>
		{#if description}
			<p class="mb-6 text-secondary-600 dark:text-secondary-400">
				{description}
			</p>
		{:else}
			<div class="mb-6"></div>
		{/if}
		{@render children()}
	</div>
</section>
