<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Alert,
		Badge,
		Card,
		Icon,
		LoadingSpinner,
		Modal,
		Signup,
		StatCard,
		ThemeSection,
		ThemeToggle
	} from '$lib/ui';
	import { paletteCategories, palettesByCategory, type PaletteName } from '$lib/palettes';
	import {
		createThemeStore,
		initTheme,
		fontCategories,
		getFontsByCategory,
		type FontPairing
	} from '$lib/stores';

	const themeStore = createThemeStore();

	let modalOpen = $state(false);
	let signupOpen = $state(false);
	let paletteDropdownOpen = $state(false);
	let fontDropdownOpen = $state(false);
	let appliedFeedback = $state(false);

	/** Scroll to selected item when dropdown opens */
	const scrollToSelected = (node: HTMLElement): void => {
		const selected = node.querySelector('[data-selected="true"]') as HTMLElement | null;
		if (selected) {
			const containerHeight = node.clientHeight;
			const selectedTop = selected.offsetTop;
			const selectedHeight = selected.offsetHeight;
			node.scrollTop = selectedTop - containerHeight / 2 + selectedHeight / 2;
		}
	};

	const selectPalette = (palette: PaletteName): void => {
		themeStore.palette = palette;
		paletteDropdownOpen = false;
	};

	const selectFont = (pairing: FontPairing): void => {
		themeStore.font = pairing;
		fontDropdownOpen = false;
	};

	const togglePaletteDropdown = (): void => {
		paletteDropdownOpen = !paletteDropdownOpen;
		if (paletteDropdownOpen) fontDropdownOpen = false;
	};

	const toggleFontDropdown = (): void => {
		fontDropdownOpen = !fontDropdownOpen;
		if (fontDropdownOpen) paletteDropdownOpen = false;
	};

	const closeDropdowns = (): void => {
		paletteDropdownOpen = false;
		fontDropdownOpen = false;
	};

	/** Apply theme settings and show feedback */
	const applySettings = (): void => {
		// Settings are already saved via stores, just show feedback
		appliedFeedback = true;
		setTimeout(() => {
			appliedFeedback = false;
		}, 2000);
	};

	onMount(() => {
		initTheme();
	});
</script>

<svelte:head>
	<title>Theme - Talent Finder</title>
	<meta name="description" content="Talent Finder theme customization and design system" />
</svelte:head>

<!-- Theme Selector Bar -->
<div
	class="border-b border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 sticky top-16 z-30 transition-colors duration-200"
>
	<div class="container-app py-4">
		<div class="flex flex-wrap items-center justify-between gap-4">
			<div class="flex items-center gap-3">
				<Icon
					icon="lucide:palette"
					width="20"
					height="20"
					class="text-secondary-500 dark:text-secondary-400"
				/>
				<span class="text-sm font-medium text-secondary-500 dark:text-secondary-400">
					Theme Customization
				</span>
			</div>
			<div class="flex flex-wrap items-center gap-4">
				<!-- Dark mode toggle -->
				<ThemeToggle />

				<!-- Font Pairing Dropdown -->
				<div class="relative">
					<button
						type="button"
						class="flex items-center gap-3 px-3 py-2 text-sm border border-secondary-200 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 transition-colors"
						onclick={toggleFontDropdown}
						aria-expanded={fontDropdownOpen}
						aria-haspopup="listbox"
					>
						<Icon icon="lucide:type" width="16" height="16" />
						<span style="font-family: '{themeStore.font.heading}', sans-serif">
							{themeStore.font.name}
						</span>
						<Icon icon="lucide:chevron-down" width="16" height="16" />
					</button>

					{#if fontDropdownOpen}
						<button
							type="button"
							class="fixed inset-0 z-10"
							onclick={closeDropdowns}
							aria-label="Close font menu"
						></button>

						<div
							class="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto border border-secondary-200 dark:border-secondary-600 rounded-lg shadow-lg z-20 bg-white dark:bg-secondary-800"
							use:scrollToSelected
						>
							{#each fontCategories as category, index (category.id)}
								<div>
									{#if index > 0}
										<div class="mx-3 border-t border-secondary-200 dark:border-secondary-700"></div>
									{/if}
									<div
										class="px-4 py-2.5 text-xs font-bold uppercase tracking-wider sticky top-0 flex items-center gap-2 bg-secondary-100 dark:bg-secondary-700 text-secondary-900 dark:text-secondary-100"
									>
										<span class="w-2 h-2 rounded-full bg-primary-500"></span>
										{category.name}
									</div>
									{#each getFontsByCategory(category.id) as pairing (pairing.name)}
										<button
											type="button"
											class="w-full px-4 py-2.5 flex items-center gap-3 transition-colors text-left hover:bg-secondary-50 dark:hover:bg-secondary-700 {themeStore
												.font.name === pairing.name
												? 'bg-secondary-100 dark:bg-secondary-700'
												: ''}"
											onclick={() => selectFont(pairing)}
											role="option"
											aria-selected={themeStore.font.name === pairing.name}
											data-selected={themeStore.font.name === pairing.name}
										>
											<div class="flex-1 min-w-0">
												<div
													class="text-sm font-medium truncate text-secondary-900 dark:text-secondary-100"
													style="font-family: '{pairing.heading}', sans-serif"
												>
													{pairing.name}
												</div>
												<div class="text-xs truncate text-secondary-500 dark:text-secondary-400">
													{pairing.heading} + {pairing.body}
												</div>
											</div>
											{#if themeStore.font.name === pairing.name}
												<Icon icon="lucide:check" width="16" height="16" class="text-primary-500" />
											{/if}
										</button>
									{/each}
								</div>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Palette Dropdown -->
				<div class="relative">
					<button
						type="button"
						class="flex items-center gap-3 px-3 py-2 text-sm border border-secondary-200 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 transition-colors"
						onclick={togglePaletteDropdown}
						aria-expanded={paletteDropdownOpen}
						aria-haspopup="listbox"
					>
						<div class="flex gap-0.5">
							<div class="w-4 h-4 rounded-l bg-primary-500"></div>
							<div class="w-4 h-4 bg-accent-500"></div>
							<div class="w-4 h-4 rounded-r bg-secondary-500"></div>
						</div>
						<span class="capitalize">{themeStore.palette}</span>
						<Icon icon="lucide:chevron-down" width="16" height="16" />
					</button>

					{#if paletteDropdownOpen}
						<button
							type="button"
							class="fixed inset-0 z-10"
							onclick={closeDropdowns}
							aria-label="Close palette menu"
						></button>

						<div
							class="absolute right-0 mt-2 w-72 max-h-96 overflow-y-auto border border-secondary-200 dark:border-secondary-600 rounded-lg shadow-lg z-20 bg-white dark:bg-secondary-800"
							use:scrollToSelected
						>
							{#each paletteCategories as category, index (category.id)}
								<div>
									{#if index > 0}
										<div class="mx-3 border-t border-secondary-200 dark:border-secondary-700"></div>
									{/if}
									<div
										class="px-4 py-2.5 text-xs font-bold uppercase tracking-wider sticky top-0 flex items-center gap-2 bg-secondary-100 dark:bg-secondary-700 text-secondary-900 dark:text-secondary-100"
									>
										<span class="w-2 h-2 rounded-full bg-primary-500"></span>
										{category.name}
									</div>
									{#each palettesByCategory[category.id] as palette (palette)}
										<button
											type="button"
											class="w-full px-4 py-2.5 flex items-center gap-3 transition-colors text-left hover:bg-secondary-50 dark:hover:bg-secondary-700 {themeStore.palette ===
											palette
												? 'bg-secondary-100 dark:bg-secondary-700'
												: ''}"
											onclick={() => selectPalette(palette)}
											role="option"
											aria-selected={themeStore.palette === palette}
											data-selected={themeStore.palette === palette}
										>
											<div class="flex-1 min-w-0">
												<div
													class="text-sm font-medium truncate capitalize text-secondary-900 dark:text-secondary-100"
												>
													{palette}
												</div>
												<div class="text-xs truncate text-secondary-500 dark:text-secondary-400">
													{category.description}
												</div>
											</div>
											{#if themeStore.palette === palette}
												<Icon icon="lucide:check" width="16" height="16" class="text-primary-500" />
											{/if}
										</button>
									{/each}
								</div>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Apply Button -->
				<button
					type="button"
					class="px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 {appliedFeedback
						? 'bg-success-600 text-white'
						: 'btn-primary'}"
					onclick={applySettings}
					disabled={appliedFeedback}
				>
					{#if appliedFeedback}
						<Icon icon="lucide:check" width="16" height="16" />
						Applied!
					{:else}
						<Icon icon="lucide:save" width="16" height="16" />
						Apply
					{/if}
				</button>
			</div>
		</div>
	</div>
</div>

<!-- Hero Section -->
<div class="py-12 bg-secondary-50 dark:bg-secondary-900 transition-colors duration-200">
	<div class="container-app">
		<h1 class="text-4xl font-bold mb-4 text-secondary-900 dark:text-secondary-100">
			Theme Customization
		</h1>
		<p class="text-lg text-secondary-600 dark:text-secondary-400">
			Customize colors and fonts to preview how your application will look. Select a palette and
			font pairing to see the changes applied.
		</p>
	</div>
</div>

<!-- Current Settings Section -->
<ThemeSection title="Current Settings" icon="lucide:settings" variant="surface">
	<div class="grid md:grid-cols-2 gap-6">
		<!-- Palette Colors -->
		<div class="card">
			<h3 class="text-lg font-semibold mb-4 capitalize">{themeStore.palette} Palette</h3>
			<div class="grid grid-cols-3 gap-3">
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 rounded-lg bg-primary-500"></div>
					<span class="text-xs text-secondary-500 dark:text-secondary-400">Primary</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 rounded-lg bg-accent-500"></div>
					<span class="text-xs text-secondary-500 dark:text-secondary-400">Accent</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 rounded-lg bg-secondary-500"></div>
					<span class="text-xs text-secondary-500 dark:text-secondary-400">Neutral</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 rounded-lg bg-success-500"></div>
					<span class="text-xs text-secondary-500 dark:text-secondary-400">Success</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 rounded-lg bg-warning-500"></div>
					<span class="text-xs text-secondary-500 dark:text-secondary-400">Warning</span>
				</div>
				<div class="flex flex-col items-center gap-2">
					<div class="w-12 h-12 rounded-lg bg-error-500"></div>
					<span class="text-xs text-secondary-500 dark:text-secondary-400">Error</span>
				</div>
			</div>
		</div>

		<!-- Font Pairing -->
		<div class="card">
			<h3 class="text-lg font-semibold mb-4">{themeStore.font.name}</h3>
			<p class="mb-4 text-secondary-600 dark:text-secondary-400">
				{themeStore.font.description}
			</p>
			<div class="space-y-3">
				<div>
					<span class="text-xs uppercase tracking-wide text-secondary-500 dark:text-secondary-400"
						>Heading</span
					>
					<p
						class="text-xl font-semibold"
						style="font-family: '{themeStore.font.heading}', sans-serif"
					>
						{themeStore.font.heading}
					</p>
				</div>
				<div>
					<span class="text-xs uppercase tracking-wide text-secondary-500 dark:text-secondary-400"
						>Body</span
					>
					<p style="font-family: '{themeStore.font.body}', sans-serif">
						{themeStore.font.body}
					</p>
				</div>
				<div>
					<span class="text-xs uppercase tracking-wide text-secondary-500 dark:text-secondary-400"
						>Mono</span
					>
					<p style="font-family: '{themeStore.font.mono}', monospace">
						{themeStore.font.mono}
					</p>
				</div>
			</div>
		</div>
	</div>
</ThemeSection>

<!-- Color Scale Section -->
<ThemeSection title="Color Scales" icon="lucide:paintbrush" variant="default">
	<div class="space-y-6">
		<!-- Primary Scale -->
		<div class="card">
			<h3 class="text-lg font-semibold mb-4">Primary</h3>
			<div class="flex rounded-lg overflow-hidden">
				{#each [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as shade (shade)}
					<div
						class="flex-1 h-12 bg-primary-{shade}"
						title="primary-{shade}"
						style="background-color: var(--color-primary-{shade})"
					></div>
				{/each}
			</div>
		</div>

		<!-- Accent Scale -->
		<div class="card">
			<h3 class="text-lg font-semibold mb-4">Accent</h3>
			<div class="flex rounded-lg overflow-hidden">
				{#each [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as shade (shade)}
					<div
						class="flex-1 h-12 bg-accent-{shade}"
						title="accent-{shade}"
						style="background-color: var(--color-accent-{shade})"
					></div>
				{/each}
			</div>
		</div>

		<!-- Secondary Scale -->
		<div class="card">
			<h3 class="text-lg font-semibold mb-4">Secondary (Neutral)</h3>
			<div class="flex rounded-lg overflow-hidden">
				{#each [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as shade (shade)}
					<div
						class="flex-1 h-12 bg-secondary-{shade}"
						title="secondary-{shade}"
						style="background-color: var(--color-secondary-{shade})"
					></div>
				{/each}
			</div>
		</div>
	</div>
</ThemeSection>

<!-- Buttons Section -->
<ThemeSection title="Buttons" icon="lucide:mouse-pointer-click" variant="surface">
	<div class="card">
		<h3 class="text-lg font-semibold mb-4">Variants</h3>
		<div class="flex flex-wrap gap-4 mb-6">
			<button class="btn-primary">Primary</button>
			<button class="btn-secondary">Secondary</button>
			<button class="btn-accent">Accent</button>
			<button class="btn-outline">Outline</button>
			<button class="btn-ghost">Ghost</button>
		</div>

		<h3 class="text-lg font-semibold mb-4">With Icons</h3>
		<div class="flex flex-wrap items-center gap-4">
			<button class="btn-primary">
				<Icon icon="lucide:plus" width="16" height="16" />
				Add Item
			</button>
			<button class="btn-secondary">
				<Icon icon="lucide:download" width="16" height="16" />
				Download
			</button>
			<button class="btn-outline">
				<Icon icon="lucide:settings" width="16" height="16" />
				Settings
			</button>
		</div>
	</div>
</ThemeSection>

<!-- Alerts Section -->
<ThemeSection title="Alerts" icon="lucide:bell" variant="default">
	<div class="space-y-4">
		<Alert variant="info">
			<strong>Info:</strong> This is an informational message using the theme colors.
		</Alert>
		<Alert variant="success">
			<strong>Success:</strong> Operation completed successfully!
		</Alert>
		<Alert variant="warning">
			<strong>Warning:</strong> Please review before proceeding.
		</Alert>
		<Alert variant="error">
			<strong>Error:</strong> An error occurred. Please try again.
		</Alert>
	</div>
</ThemeSection>

<!-- Modal & Signup Section -->
<ThemeSection title="Modal & Signup" icon="lucide:square" variant="surface">
	<div class="grid md:grid-cols-2 gap-6">
		<div class="card">
			<h3 class="text-lg font-semibold mb-4">Modal</h3>
			<p class="mb-4 text-secondary-600 dark:text-secondary-400">
				Click the button to open a modal dialog.
			</p>
			<button type="button" class="btn-primary" onclick={() => (modalOpen = true)}>
				Open Modal
			</button>
		</div>
		<div class="card">
			<h3 class="text-lg font-semibold mb-4">Signup</h3>
			<p class="mb-4 text-secondary-600 dark:text-secondary-400">
				The Signup component is a modal form for user authentication.
			</p>
			<button type="button" class="btn-primary" onclick={() => (signupOpen = true)}>
				Open Signup Modal
			</button>
		</div>
	</div>
</ThemeSection>

<!-- Stat Cards Section -->
<ThemeSection title="Stat Cards" icon="lucide:bar-chart-2" variant="default">
	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
		<StatCard label="Default" value={42} />
		<StatCard label="Success" value={128} variant="success" prefix="+" />
		<StatCard label="Danger" value={23} variant="danger" prefix="-" />
		<StatCard label="Net" value="1.2K" />
	</div>
</ThemeSection>

<!-- Badges Section -->
<ThemeSection title="Badges" icon="lucide:tag" variant="surface">
	<div class="card">
		<div class="flex flex-wrap gap-3">
			<Badge>Primary</Badge>
			<Badge variant="accent">Accent</Badge>
			<Badge variant="success">Success</Badge>
			<Badge variant="warning">Warning</Badge>
			<Badge variant="error">Error</Badge>
		</div>
	</div>
</ThemeSection>

<!-- Card Section -->
<ThemeSection title="Card" icon="lucide:square" variant="default">
	<div class="grid md:grid-cols-2 gap-6">
		<Card>
			<h3 class="text-lg font-semibold mb-2">Card Component</h3>
			<p class="text-secondary-600 dark:text-secondary-400 mb-4">
				This is a reusable Card component with default shadow styling.
			</p>
			<button class="btn-primary">Action</button>
		</Card>
		<Card class="border-2 border-primary-500">
			<h3 class="text-lg font-semibold mb-2">Card with Custom Class</h3>
			<p class="text-secondary-600 dark:text-secondary-400 mb-4">
				Cards accept a <code class="px-1 bg-secondary-100 dark:bg-secondary-700 rounded">class</code
				> prop for customization.
			</p>
			<button class="btn-accent">Custom Action</button>
		</Card>
	</div>
</ThemeSection>

<!-- LoadingSpinner Section -->
<ThemeSection title="Loading Spinner" icon="lucide:loader" variant="surface">
	<div class="card">
		<h3 class="text-lg font-semibold mb-4">Size Variants</h3>
		<div class="flex flex-wrap items-center gap-8 mb-6">
			<div class="flex flex-col items-center gap-2">
				<LoadingSpinner size="sm" />
				<span class="text-xs text-secondary-500 dark:text-secondary-400">Small</span>
			</div>
			<div class="flex flex-col items-center gap-2">
				<LoadingSpinner size="md" />
				<span class="text-xs text-secondary-500 dark:text-secondary-400">Medium</span>
			</div>
			<div class="flex flex-col items-center gap-2">
				<LoadingSpinner size="lg" />
				<span class="text-xs text-secondary-500 dark:text-secondary-400">Large</span>
			</div>
		</div>

		<h3 class="text-lg font-semibold mb-4">Color Variants</h3>
		<div class="flex flex-wrap items-center gap-8">
			<div class="flex flex-col items-center gap-2">
				<LoadingSpinner variant="primary" />
				<span class="text-xs text-secondary-500 dark:text-secondary-400">Primary</span>
			</div>
			<div class="flex flex-col items-center gap-2">
				<LoadingSpinner variant="accent" />
				<span class="text-xs text-secondary-500 dark:text-secondary-400">Accent</span>
			</div>
			<div class="flex flex-col items-center gap-2">
				<LoadingSpinner variant="secondary" />
				<span class="text-xs text-secondary-500 dark:text-secondary-400">Secondary</span>
			</div>
		</div>
	</div>
</ThemeSection>

<!-- ThemeToggle Section -->
<ThemeSection title="Theme Toggle" icon="lucide:moon" variant="default">
	<div class="card">
		<p class="mb-4 text-secondary-600 dark:text-secondary-400">
			The ThemeToggle component allows users to switch between light and dark modes. It persists the
			selection in cookies.
		</p>
		<div class="flex items-center gap-4">
			<ThemeToggle />
			<span class="text-sm text-secondary-500 dark:text-secondary-400"
				>Click to toggle between light and dark modes</span
			>
		</div>
	</div>
</ThemeSection>

<!-- Demo Modal -->
<Modal bind:open={modalOpen} title="Example Modal">
	<p class="mb-4">
		This is a reusable modal component. It handles backdrop click, escape key, and focus management.
	</p>
	<p>You can pass any content as children and optionally provide a footer snippet.</p>
	{#snippet footer()}
		<p class="text-xs text-center text-secondary-500 dark:text-secondary-400">
			Press Escape or click outside to close.
		</p>
	{/snippet}
</Modal>

<!-- Demo Signup Modal -->
<Signup form={null} bind:open={signupOpen} />
