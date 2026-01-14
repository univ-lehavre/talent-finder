<script lang="ts">
	/**
	 * LoadingSpinner component
	 * A reusable loading indicator with customizable size and color variants.
	 */
	interface Props {
		/** Size variant of the spinner */
		size?: 'sm' | 'md' | 'lg';
		/** Color variant using theme colors */
		variant?: 'primary' | 'accent' | 'secondary';
		/** Accessible label for screen readers */
		label?: string;
	}

	let { size = 'md', variant = 'primary', label = 'Loading...' }: Props = $props();

	const sizeClasses = $derived(
		size === 'sm' ? 'w-4 h-4 border-2' : size === 'lg' ? 'w-12 h-12 border-4' : 'w-8 h-8 border-4'
	);

	const colorClasses = $derived(
		variant === 'accent'
			? 'border-accent-200 border-t-accent-600 dark:border-accent-800 dark:border-t-accent-400'
			: variant === 'secondary'
				? 'border-secondary-200 border-t-secondary-600 dark:border-secondary-700 dark:border-t-secondary-400'
				: 'border-primary-200 border-t-primary-600 dark:border-primary-800 dark:border-t-primary-400'
	);
</script>

<div class="inline-block {sizeClasses} {colorClasses} rounded-full animate-spin" role="status">
	<span class="sr-only">{label}</span>
</div>
