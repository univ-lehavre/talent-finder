<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from './Icon.svelte';
	import LoadingSpinner from './LoadingSpinner.svelte';

	/**
	 * AsyncContent - Gestion unifiée des états loading/error/success
	 *
	 * @example Simple
	 * ```svelte
	 * <AsyncContent loading={isLoading} error={errorMessage}>
	 *   <DataTable {data} />
	 * </AsyncContent>
	 * ```
	 *
	 * @example Avec états personnalisés
	 * ```svelte
	 * <AsyncContent loading={isLoading} error={error}>
	 *   <MyContent />
	 *   {#snippet loadingContent()}
	 *     <SkeletonLoader />
	 *   {/snippet}
	 *   {#snippet errorContent(msg)}
	 *     <CustomError message={msg} onretry={retry} />
	 *   {/snippet}
	 * </AsyncContent>
	 * ```
	 */
	interface Props {
		/** Loading state */
		loading?: boolean;
		/** Error message (truthy = show error) */
		error?: string | null;
		/** Main content (shown when not loading and no error) */
		children: Snippet;
		/** Custom loading state */
		loadingContent?: Snippet;
		/** Custom error state (receives error message) */
		errorContent?: Snippet<[string]>;
		/** Loading message */
		loadingMessage?: string;
		/** Retry callback for error state */
		onretry?: () => void;
		/** Spinner size */
		spinnerSize?: 'sm' | 'md' | 'lg';
		/** Minimum height to prevent layout shift */
		minHeight?: string;
	}

	let {
		loading = false,
		error = null,
		children,
		loadingContent,
		errorContent,
		loadingMessage = 'Chargement...',
		onretry,
		spinnerSize = 'md',
		minHeight
	}: Props = $props();
</script>

<div class="async-content" style:min-height={minHeight}>
	{#if loading}
		{#if loadingContent}
			{@render loadingContent()}
		{:else}
			<div class="state-loading">
				<LoadingSpinner size={spinnerSize} />
				<span class="loading-message">{loadingMessage}</span>
			</div>
		{/if}
	{:else if error}
		{#if errorContent}
			{@render errorContent(error)}
		{:else}
			<div class="state-error">
				<Icon icon="lucide:alert-circle" width="40" height="40" class="error-icon" />
				<p class="error-message">{error}</p>
				{#if onretry}
					<button type="button" class="retry-button" onclick={onretry}>
						<Icon icon="lucide:refresh-cw" width="16" height="16" />
						Réessayer
					</button>
				{/if}
			</div>
		{/if}
	{:else}
		{@render children()}
	{/if}
</div>

<style>
	.async-content {
		position: relative;
	}

	/* Loading state */
	.state-loading {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-md);
		padding: var(--spacing-2xl) var(--spacing-lg);
		text-align: center;
	}

	.loading-message {
		font-size: var(--text-sm);
		color: var(--color-secondary-500);
	}

	:global(.dark) .loading-message {
		color: var(--color-secondary-400);
	}

	/* Error state */
	.state-error {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-md);
		padding: var(--spacing-2xl) var(--spacing-lg);
		text-align: center;
	}

	:global(.error-icon) {
		color: var(--color-error-500);
	}

	:global(.dark) :global(.error-icon) {
		color: var(--color-error-400);
	}

	.error-message {
		font-size: var(--text-base);
		color: var(--color-error-600);
		max-width: 400px;
		margin: 0;
	}

	:global(.dark) .error-message {
		color: var(--color-error-400);
	}

	.retry-button {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-xs);
		padding: var(--spacing-sm) var(--spacing-md);
		font-size: var(--text-sm);
		font-weight: 500;
		color: var(--color-primary-600);
		background-color: var(--color-primary-50);
		border: 1px solid var(--color-primary-200);
		border-radius: var(--radius-lg);
		cursor: pointer;
		transition:
			background-color var(--transition-fast),
			border-color var(--transition-fast);
	}

	.retry-button:hover {
		background-color: var(--color-primary-100);
		border-color: var(--color-primary-300);
	}

	.retry-button:focus-visible {
		outline: 2px solid var(--color-primary-500);
		outline-offset: 2px;
	}

	:global(.dark) .retry-button {
		color: var(--color-primary-400);
		background-color: var(--color-primary-900);
		border-color: var(--color-primary-700);
	}

	:global(.dark) .retry-button:hover {
		background-color: var(--color-primary-800);
		border-color: var(--color-primary-600);
	}
</style>
