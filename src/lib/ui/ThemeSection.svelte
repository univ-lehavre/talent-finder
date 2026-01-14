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
		/** Background variant: 'background' or 'surface' */
		variant?: 'background' | 'surface';
		/** Theme colors object (only background, surface, textMuted are used) */
		colors: {
			background: string;
			surface: string;
			textMuted: string;
			[key: string]: string;
		};
		/** Heading font family */
		headingFont?: string;
		/** Section content */
		children: Snippet;
	}

	let {
		title,
		description,
		icon,
		variant = 'background',
		colors,
		headingFont = 'inherit',
		children
	}: Props = $props();

	const backgroundColor = $derived(variant === 'surface' ? colors.surface : colors.background);
</script>

<section class="py-12 transition-colors duration-300" style="background-color: {backgroundColor}">
	<div class="container-app">
		<h2
			class="text-2xl font-bold mb-2 flex items-center gap-3"
			style="font-family: {headingFont}, sans-serif; color: {colors.text}"
		>
			{#if icon}
				<Icon {icon} width="24" height="24" style="color: {colors.text}" />
			{/if}
			{title}
		</h2>
		{#if description}
			<p class="mb-6" style="color: {colors.textMuted}">
				{description}
			</p>
		{:else}
			<div class="mb-6"></div>
		{/if}
		{@render children()}
	</div>
</section>
