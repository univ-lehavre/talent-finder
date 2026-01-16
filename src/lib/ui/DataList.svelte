<script lang="ts" generics="T">
	import type { Snippet } from 'svelte';

	/**
	 * DataList - Liste avec snippets paramétrés pour personnalisation totale
	 *
	 * @example Simple
	 * ```svelte
	 * <DataList items={users}>
	 *   {#snippet item(user, idx)}
	 *     <span>{idx + 1}. {user.name}</span>
	 *   {/snippet}
	 * </DataList>
	 * ```
	 *
	 * @example Complet avec leading/trailing
	 * ```svelte
	 * <DataList items={organizations} hoverable>
	 *   {#snippet item(org)}
	 *     <div>
	 *       <p class="font-medium">{org.name}</p>
	 *       <p class="text-sm text-secondary-500">{org.country}</p>
	 *     </div>
	 *   {/snippet}
	 *   {#snippet leading(org)}
	 *     <Avatar name={org.name} />
	 *   {/snippet}
	 *   {#snippet trailing(org)}
	 *     <Badge>{org.articles} articles</Badge>
	 *   {/snippet}
	 *   {#snippet empty()}
	 *     <p>Aucune organisation trouvée</p>
	 *   {/snippet}
	 * </DataList>
	 * ```
	 */
	interface Props<T> {
		/** Array of items to render */
		items: T[];
		/** Main content renderer (required) */
		item: Snippet<[T, number]>;
		/** Leading area renderer (avatar, icon) */
		leading?: Snippet<[T, number]>;
		/** Trailing area renderer (badge, action, value) */
		trailing?: Snippet<[T, number]>;
		/** Empty state content */
		empty?: Snippet;
		/** Header content */
		header?: Snippet;
		/** Enable hover effect */
		hoverable?: boolean;
		/** Enable dividers between items */
		divided?: boolean;
		/** Item click handler */
		onitemclick?: (item: T, index: number) => void;
		/** Additional CSS classes */
		class?: string;
	}

	let {
		items,
		item: itemSnippet,
		leading,
		trailing,
		empty,
		header,
		hoverable = false,
		divided = true,
		onitemclick,
		class: className = ''
	}: Props<T> = $props();

	function handleItemClick(item: T, index: number): void {
		onitemclick?.(item, index);
	}

	function handleKeyDown(event: KeyboardEvent, item: T, index: number): void {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleItemClick(item, index);
		}
	}
</script>

<div class="data-list {className}" data-divided={divided}>
	{#if header}
		<div class="list-header">
			{@render header()}
		</div>
	{/if}

	{#if items.length === 0 && empty}
		<div class="list-empty">
			{@render empty()}
		</div>
	{:else}
		<ul class="list-items" role="list">
			{#each items as listItem, idx (idx)}
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<li
					class="list-item"
					data-hoverable={hoverable}
					data-clickable={!!onitemclick}
					role={onitemclick ? 'button' : 'listitem'}
					tabindex={onitemclick ? 0 : undefined}
					onclick={() => handleItemClick(listItem, idx)}
					onkeydown={(e) => handleKeyDown(e, listItem, idx)}
				>
					{#if leading}
						<div class="item-leading">
							{@render leading(listItem, idx)}
						</div>
					{/if}

					<div class="item-content">
						{@render itemSnippet(listItem, idx)}
					</div>

					{#if trailing}
						<div class="item-trailing">
							{@render trailing(listItem, idx)}
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.data-list {
		background-color: white;
		border-radius: var(--radius-xl);
		border: 1px solid var(--color-secondary-200);
		overflow: hidden;
	}

	:global(.dark) .data-list {
		background-color: var(--color-secondary-800);
		border-color: var(--color-secondary-700);
	}

	/* Header */
	.list-header {
		padding: var(--spacing-md) var(--spacing-lg);
		border-bottom: 1px solid var(--color-secondary-200);
		background-color: var(--color-secondary-50);
	}

	:global(.dark) .list-header {
		background-color: var(--color-secondary-900);
		border-color: var(--color-secondary-700);
	}

	/* Empty state */
	.list-empty {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: var(--spacing-2xl) var(--spacing-lg);
		text-align: center;
		color: var(--color-secondary-500);
	}

	:global(.dark) .list-empty {
		color: var(--color-secondary-400);
	}

	/* Items list */
	.list-items {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	/* Individual item */
	.list-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		padding: var(--spacing-md) var(--spacing-lg);
		transition:
			background-color var(--transition-fast),
			transform var(--transition-fast);
	}

	.data-list[data-divided='true'] .list-item:not(:last-child) {
		border-bottom: 1px solid var(--color-secondary-100);
	}

	:global(.dark) .data-list[data-divided='true'] .list-item:not(:last-child) {
		border-color: var(--color-secondary-700);
	}

	.list-item[data-hoverable='true'] {
		cursor: default;
	}

	.list-item[data-hoverable='true']:hover {
		background-color: var(--color-secondary-50);
	}

	:global(.dark) .list-item[data-hoverable='true']:hover {
		background-color: var(--color-secondary-700);
	}

	.list-item[data-clickable='true'] {
		cursor: pointer;
	}

	.list-item[data-clickable='true']:hover {
		background-color: var(--color-primary-50);
	}

	:global(.dark) .list-item[data-clickable='true']:hover {
		background-color: var(--color-primary-900);
	}

	.list-item[data-clickable='true']:focus-visible {
		outline: 2px solid var(--color-primary-500);
		outline-offset: -2px;
	}

	.list-item[data-clickable='true']:active {
		transform: scale(0.99);
	}

	/* Item parts */
	.item-leading {
		flex-shrink: 0;
	}

	.item-content {
		flex: 1;
		min-width: 0;
	}

	.item-trailing {
		flex-shrink: 0;
	}
</style>
