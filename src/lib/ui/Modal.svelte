<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from './Icon.svelte';

	interface ThemeColors {
		primary: string;
		accent: string;
		background: string;
		surface: string;
		text: string;
		textMuted: string;
		border: string;
		[key: string]: string;
	}

	interface Props {
		open?: boolean;
		title: string;
		onclose?: () => void;
		/** Optional theme colors for custom palette styling */
		colors?: ThemeColors;
		/** Optional heading font family */
		headingFont?: string;
		children: Snippet;
		footer?: Snippet;
	}

	let {
		open = $bindable(false),
		title,
		onclose,
		colors,
		headingFont,
		children,
		footer
	}: Props = $props();

	/** Use theme colors when provided */
	const useThemeColors = $derived(!!colors);

	const closeModal = (): void => {
		open = false;
		onclose?.();
	};

	const handleKeydown = (event: KeyboardEvent): void => {
		if (event.key === 'Escape') {
			closeModal();
		}
	};
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 bg-secondary-900/50 z-40"
		onclick={closeModal}
		onkeydown={(e) => e.key === 'Enter' && closeModal()}
		role="button"
		tabindex="-1"
		aria-label="Close modal"
	></div>

	<!-- Modal Container -->
	<div
		class="fixed inset-0 z-50 overflow-y-auto"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
	>
		<div class="flex min-h-full items-center justify-center p-4">
			<!-- Modal Content -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="relative rounded-lg shadow-xl overflow-hidden {useThemeColors
					? ''
					: 'bg-white dark:bg-secondary-800'}"
				style="width: min(28rem, calc(100vw - 2rem)); {useThemeColors && colors
					? `background-color: ${colors.surface}; color: ${colors.text}`
					: ''}"
				onclick={(e) => e.stopPropagation()}
				onkeydown={(e) => e.stopPropagation()}
			>
				<!-- Header -->
				<div
					class="flex items-center justify-between p-4 {useThemeColors
						? ''
						: 'border-b border-secondary-200 dark:border-secondary-700'}"
					style={useThemeColors && colors ? `border-bottom: 1px solid ${colors.border}` : undefined}
				>
					<h2
						id="modal-title"
						class="text-lg font-semibold"
						style={headingFont ? `font-family: ${headingFont}, sans-serif` : undefined}
					>
						{title}
					</h2>
					<button
						type="button"
						class="transition-colors p-1 {useThemeColors
							? ''
							: 'text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300'}"
						style={useThemeColors && colors ? `color: ${colors.textMuted}` : undefined}
						onclick={closeModal}
						aria-label="Fermer"
					>
						<Icon icon="lucide:x" width="20" height="20" />
					</button>
				</div>

				<!-- Body -->
				<div
					class="p-4"
					style={useThemeColors && colors ? `color: ${colors.textMuted}` : undefined}
				>
					{@render children()}
				</div>

				<!-- Footer -->
				{#if footer}
					<div
						class="p-4 {useThemeColors
							? ''
							: 'border-t border-secondary-200 dark:border-secondary-700 bg-secondary-50 dark:bg-secondary-900'}"
						style={useThemeColors && colors
							? `border-top: 1px solid ${colors.border}; background-color: ${colors.background}`
							: undefined}
					>
						{@render footer()}
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
