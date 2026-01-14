<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from './Icon.svelte';

	interface Props {
		variant?: 'info' | 'success' | 'warning' | 'error';
		dismissible?: boolean;
		ondismiss?: () => void;
		children: Snippet;
	}

	let { variant = 'info', dismissible = false, ondismiss, children }: Props = $props();

	let dismissed = $state(false);

	const alertClass = $derived(
		variant === 'success'
			? 'alert-success'
			: variant === 'warning'
				? 'alert-warning'
				: variant === 'error'
					? 'alert-error'
					: 'alert-info'
	);

	const iconClass = $derived(
		variant === 'success'
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
		variant === 'success'
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
	<div class="{alertClass} flex items-start gap-3" role="alert">
		<span class="flex-shrink-0 {iconClass}">
			<Icon icon={iconName} width="20" height="20" />
		</span>
		<div class="flex-grow">
			{@render children()}
		</div>
		{#if dismissible}
			<button
				type="button"
				class="flex-shrink-0 {dismissClass}"
				onclick={handleDismiss}
				aria-label="Fermer l'alerte"
			>
				<Icon icon="lucide:x" width="16" height="16" />
			</button>
		{/if}
	</div>
{/if}
