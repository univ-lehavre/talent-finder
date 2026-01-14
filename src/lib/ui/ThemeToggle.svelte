<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';
	import { createThemeStore, setDarkMode, type DarkMode } from '$lib/stores';

	type DisplayMode = 'light' | 'dark';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();

	const themeStore = createThemeStore();

	const icons: Record<DisplayMode, string> = {
		light: 'lucide:sun',
		dark: 'lucide:moon'
	};

	const labels: Record<DisplayMode, string> = {
		light: 'Clair',
		dark: 'Sombre'
	};

	const getSystemTheme = (): DisplayMode => {
		if (typeof window === 'undefined') return 'light';
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};

	/** Get the currently displayed theme (resolved from system if needed) */
	const getCurrentDisplayMode = (): DisplayMode => {
		return themeStore.darkMode === 'system' ? getSystemTheme() : themeStore.darkMode;
	};

	/**
	 * Toggle between light and dark.
	 * If the new choice matches system preference, store 'system'.
	 * Otherwise, store the explicit choice.
	 */
	const toggleMode = (): void => {
		const currentDisplay = getCurrentDisplayMode();
		const newDisplay: DisplayMode = currentDisplay === 'light' ? 'dark' : 'light';
		const systemTheme = getSystemTheme();

		// Store 'system' if the new choice matches system preference
		const newStored: DarkMode = newDisplay === systemTheme ? 'system' : newDisplay;

		setDarkMode(newStored);
	};

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	/** Current display mode for the UI */
	const displayMode = $derived(mounted ? getCurrentDisplayMode() : 'light');
</script>

<button
	type="button"
	class="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-secondary-200 dark:border-secondary-600 bg-white dark:bg-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-600 transition-colors {className}"
	onclick={toggleMode}
	title="Changer le thème ({labels[displayMode]})"
>
	<Icon
		icon={icons[displayMode]}
		width="16"
		height="16"
		class="text-secondary-600 dark:text-secondary-300"
	/>
	<span class="text-secondary-700 dark:text-secondary-200">{labels[displayMode]}</span>
</button>
