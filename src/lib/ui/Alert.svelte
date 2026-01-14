<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from './Icon.svelte';

	interface ThemeColors {
		primary: string;
		accent: string;
		text: string;
		textMuted: string;
		border: string;
		[key: string]: string;
	}

	interface Props {
		variant?: 'info' | 'success' | 'warning' | 'error';
		dismissible?: boolean;
		ondismiss?: () => void;
		/** Optional theme colors for custom palette styling */
		colors?: ThemeColors;
		children: Snippet;
	}

	let { variant = 'info', dismissible = false, ondismiss, colors, children }: Props = $props();

	let dismissed = $state(false);

	/** Use theme colors when provided, otherwise use default CSS classes */
	const useThemeColors = $derived(!!colors);

	const alertClass = $derived(
		useThemeColors
			? 'p-4 rounded-lg border'
			: variant === 'success'
				? 'alert-success'
				: variant === 'warning'
					? 'alert-warning'
					: variant === 'error'
						? 'alert-error'
						: 'alert-info'
	);

	/** Get colors based on variant when using theme colors */
	const variantColors = $derived.by(() => {
		if (!colors) return null;

		switch (variant) {
			case 'success':
				return {
					bg: 'rgba(34, 197, 94, 0.1)',
					border: 'rgba(34, 197, 94, 0.3)',
					text: '#166534',
					icon: '#16a34a'
				};
			case 'warning':
				return {
					bg: 'rgba(234, 179, 8, 0.1)',
					border: 'rgba(234, 179, 8, 0.3)',
					text: '#854d0e',
					icon: '#ca8a04'
				};
			case 'error':
				return {
					bg: 'rgba(239, 68, 68, 0.1)',
					border: 'rgba(239, 68, 68, 0.3)',
					text: '#991b1b',
					icon: '#dc2626'
				};
			default:
				// Info uses theme primary/accent colors
				return {
					bg: `${colors.primary}15`,
					border: `${colors.primary}40`,
					text: colors.text,
					icon: colors.primary
				};
		}
	});

	const iconClass = $derived(
		useThemeColors
			? ''
			: variant === 'success'
				? 'text-success-600'
				: variant === 'warning'
					? 'text-warning-600'
					: variant === 'error'
						? 'text-error-600'
						: 'text-primary-600'
	);

	const iconName = $derived(
		variant === 'success'
			? 'lucide:check-circle'
			: variant === 'warning'
				? 'lucide:alert-triangle'
				: variant === 'error'
					? 'lucide:x-circle'
					: 'lucide:info'
	);

	const dismissClass = $derived(
		useThemeColors
			? ''
			: variant === 'success'
				? 'text-success-600 hover:text-success-700'
				: variant === 'warning'
					? 'text-warning-600 hover:text-warning-700'
					: variant === 'error'
						? 'text-error-600 hover:text-error-700'
						: 'text-primary-600 hover:text-primary-700'
	);

	const handleDismiss = (): void => {
		dismissed = true;
		ondismiss?.();
	};
</script>

{#if !dismissed}
	<div
		class="{alertClass} flex items-start gap-3"
		role="alert"
		style={useThemeColors && variantColors
			? `background-color: ${variantColors.bg}; border-color: ${variantColors.border}; color: ${variantColors.text}`
			: undefined}
	>
		<span
			class="flex-shrink-0 {iconClass}"
			style={useThemeColors && variantColors ? `color: ${variantColors.icon}` : undefined}
		>
			<Icon icon={iconName} width="20" height="20" />
		</span>
		<div class="flex-grow">
			{@render children()}
		</div>
		{#if dismissible}
			<button
				type="button"
				class="flex-shrink-0 {dismissClass}"
				style={useThemeColors && variantColors
					? `color: ${variantColors.icon}; opacity: 0.7`
					: undefined}
				onclick={handleDismiss}
				aria-label="Fermer l'alerte"
			>
				<Icon icon="lucide:x" width="16" height="16" />
			</button>
		{/if}
	</div>
{/if}
