<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Drawer as BaseDrawer } from '$lib/ui';
	import { i18n } from '$lib/content';

	/**
	 * Drawer - Pre-configured drawer with i18n labels.
	 *
	 * Wraps $lib/ui/Drawer and injects accessibility labels from i18n.
	 *
	 * @example
	 * ```svelte
	 * <Drawer bind:open title="Menu">
	 *   <nav>...</nav>
	 * </Drawer>
	 * ```
	 */
	interface Props {
		/** Whether the drawer is open */
		open?: boolean;
		/** Drawer title (defaults to i18n toggleMenu label) */
		title?: string;
		/** Position of the drawer */
		position?: 'left' | 'right';
		/** Width class */
		width?: string;
		/** Close handler */
		onclose?: () => void;
		/** Header content (rendered after title) */
		header?: Snippet;
		/** Main content */
		children: Snippet;
		/** Additional CSS classes */
		class?: string;
	}

	let {
		open = $bindable(false),
		title,
		position = 'right',
		width = 'w-72',
		onclose,
		header,
		children,
		class: className = ''
	}: Props = $props();

	const a11y = $derived(i18n.accessibility);
	const drawerTitle = $derived(title ?? a11y.toggleMenu);
</script>

<BaseDrawer
	bind:open
	title={drawerTitle}
	closeLabel={a11y.closeMenu}
	{position}
	{width}
	{onclose}
	{header}
	class={className}
>
	{@render children()}
</BaseDrawer>
