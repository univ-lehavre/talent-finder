<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'accent' | 'success' | 'warning' | 'error';
		children: Snippet;
	}

	let { variant = 'primary', children }: Props = $props();

	const badgeClass = $derived(
		variant === 'accent'
			? 'badge-accent'
			: variant === 'success'
				? 'badge-success'
				: variant === 'warning'
					? 'badge-warning'
					: variant === 'error'
						? 'badge-error'
						: 'badge-primary'
	);
</script>

<span class={badgeClass}>
	{@render children()}
</span>
