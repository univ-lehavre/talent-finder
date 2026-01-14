<script lang="ts">
	import { onMount } from 'svelte';
	import { Alert, Badge, Icon, Modal, StatCard, ThemeSection } from '$lib/ui';
	import {
		themeCategories,
		getThemesByCategory,
		sequentialPalettes,
		divergingPalettes,
		qualitativePalettes,
		gradientPalettes,
		type ThemePalette
	} from '$lib/palettes';
	import {
		createThemeStore,
		createFontStore,
		fontCategories,
		getFontsByCategory,
		initTheme,
		initFontPairing,
		type FontPairing
	} from '$lib/stores';

	const themeStore = createThemeStore();
	const fontStore = createFontStore();

	let modalOpen = $state(false);
	let themeDropdownOpen = $state(false);
	let fontDropdownOpen = $state(false);
	let appliedFeedback = $state(false);

	/** Get current theme colors based on preview mode */
	const currentColors = $derived(themeStore.colors);

	/** Heading font for consistency */
	const headingFont = $derived(`'${fontStore.pairing.heading}'`);

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

	const selectTheme = (theme: ThemePalette): void => {
		themeStore.theme = theme;
		themeDropdownOpen = false;
	};

	const selectFont = (pairing: FontPairing): void => {
		fontStore.pairing = pairing;
		fontDropdownOpen = false;
	};

	const toggleThemeDropdown = (): void => {
		themeDropdownOpen = !themeDropdownOpen;
		if (themeDropdownOpen) fontDropdownOpen = false;
	};

	const toggleFontDropdown = (): void => {
		fontDropdownOpen = !fontDropdownOpen;
		if (fontDropdownOpen) themeDropdownOpen = false;
	};

	const closeDropdowns = (): void => {
		themeDropdownOpen = false;
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
		initFontPairing();
	});
</script>

<svelte:head>
	<title>Theme - Talent Finder</title>
	<meta name="description" content="Talent Finder theme customization and design system" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	{#key fontStore.pairing.name}
		<link href={fontStore.pairing.googleFontsUrl} rel="stylesheet" />
	{/key}
</svelte:head>

<!-- Full page with theme colors applied -->
<div
	class="min-h-screen transition-colors duration-300"
	style="background-color: {currentColors.background}; color: {currentColors.text}; font-family: '{fontStore
		.pairing.body}', sans-serif"
>
	<!-- Theme Selector Bar -->
	<div
		class="border-b transition-colors duration-300 sticky top-16 z-30"
		style="background-color: {currentColors.surface}; border-color: {currentColors.border}"
	>
		<div class="container-app py-4">
			<div class="flex flex-wrap items-center justify-between gap-4">
				<div class="flex items-center gap-3">
					<Icon
						icon="lucide:palette"
						width="20"
						height="20"
						style="color: {currentColors.textMuted}"
					/>
					<span class="text-sm font-medium" style="color: {currentColors.textMuted}">
						Theme Customization
					</span>
				</div>
				<div class="flex flex-wrap items-center gap-4">
					<!-- Light/Dark toggle for preview -->
					<div
						class="flex rounded-lg border overflow-hidden"
						style="border-color: {currentColors.border}"
					>
						<button
							type="button"
							class="px-3 py-1.5 text-sm flex items-center gap-1.5 transition-colors"
							style="background-color: {themeStore.previewMode === 'light'
								? currentColors.border
								: currentColors.surface}; color: {themeStore.previewMode === 'light'
								? currentColors.text
								: currentColors.textMuted}"
							onclick={() => (themeStore.previewMode = 'light')}
						>
							<Icon icon="lucide:sun" width="14" height="14" />
							Light
						</button>
						<button
							type="button"
							class="px-3 py-1.5 text-sm flex items-center gap-1.5 transition-colors"
							style="background-color: {themeStore.previewMode === 'dark'
								? currentColors.border
								: currentColors.surface}; color: {themeStore.previewMode === 'dark'
								? currentColors.text
								: currentColors.textMuted}"
							onclick={() => (themeStore.previewMode = 'dark')}
						>
							<Icon icon="lucide:moon" width="14" height="14" />
							Dark
						</button>
					</div>

					<!-- Font Pairing Dropdown -->
					<div class="relative">
						<button
							type="button"
							class="flex items-center gap-3 px-3 py-2 text-sm border rounded-lg transition-colors"
							style="border-color: {currentColors.border}; background-color: {currentColors.surface}; color: {currentColors.text}"
							onclick={toggleFontDropdown}
							aria-expanded={fontDropdownOpen}
							aria-haspopup="listbox"
						>
							<Icon icon="lucide:type" width="16" height="16" />
							<span style="font-family: '{fontStore.pairing.heading}', sans-serif">
								{fontStore.pairing.name}
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
								class="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto border rounded-lg shadow-lg z-20"
								style="background-color: {currentColors.surface}; border-color: {currentColors.border}"
								use:scrollToSelected
							>
								{#each fontCategories as category, index (category.id)}
									<div>
										{#if index > 0}
											<div class="mx-3 border-t" style="border-color: {currentColors.border}"></div>
										{/if}
										<div
											class="px-4 py-2.5 text-xs font-bold uppercase tracking-wider sticky top-0 flex items-center gap-2"
											style="color: {currentColors.text}; background-color: {currentColors.border}"
										>
											<span
												class="w-2 h-2 rounded-full"
												style="background-color: {currentColors.primary}"
											></span>
											{category.name}
										</div>
										{#each getFontsByCategory(category.id) as pairing (pairing.name)}
											<button
												type="button"
												class="w-full px-4 py-2.5 flex items-center gap-3 transition-colors text-left"
												style="background-color: {fontStore.pairing.name === pairing.name
													? currentColors.border
													: 'transparent'}; color: {currentColors.text}"
												onclick={() => selectFont(pairing)}
												role="option"
												aria-selected={fontStore.pairing.name === pairing.name}
												data-selected={fontStore.pairing.name === pairing.name}
											>
												<div class="flex-1 min-w-0">
													<div
														class="text-sm font-medium truncate"
														style="font-family: '{pairing.heading}', sans-serif"
													>
														{pairing.name}
													</div>
													<div class="text-xs truncate" style="color: {currentColors.textMuted}">
														{pairing.heading} + {pairing.body}
													</div>
												</div>
												{#if fontStore.pairing.name === pairing.name}
													<Icon
														icon="lucide:check"
														width="16"
														height="16"
														style="color: {currentColors.primary}"
													/>
												{/if}
											</button>
										{/each}
									</div>
								{/each}
							</div>
						{/if}
					</div>

					<!-- Theme Dropdown with Color Preview -->
					<div class="relative">
						<button
							type="button"
							class="flex items-center gap-3 px-3 py-2 text-sm border rounded-lg transition-colors"
							style="border-color: {currentColors.border}; background-color: {currentColors.surface}; color: {currentColors.text}"
							onclick={toggleThemeDropdown}
							aria-expanded={themeDropdownOpen}
							aria-haspopup="listbox"
						>
							<div class="flex gap-0.5">
								<div
									class="w-4 h-4 rounded-l"
									style="background-color: {themeStore.theme.light.background}"
								></div>
								<div
									class="w-4 h-4"
									style="background-color: {themeStore.theme.light.surface}"
								></div>
								<div
									class="w-4 h-4"
									style="background-color: {themeStore.theme.light.primary}"
								></div>
								<div
									class="w-4 h-4 rounded-r"
									style="background-color: {themeStore.theme.dark.background}"
								></div>
							</div>
							<span>{themeStore.theme.name}</span>
							<Icon icon="lucide:chevron-down" width="16" height="16" />
						</button>

						{#if themeDropdownOpen}
							<button
								type="button"
								class="fixed inset-0 z-10"
								onclick={closeDropdowns}
								aria-label="Close theme menu"
							></button>

							<div
								class="absolute right-0 mt-2 w-96 max-h-96 overflow-y-auto border rounded-lg shadow-lg z-20"
								style="background-color: {currentColors.surface}; border-color: {currentColors.border}"
								use:scrollToSelected
							>
								{#each themeCategories as category, index (category.id)}
									<div>
										{#if index > 0}
											<div class="mx-3 border-t" style="border-color: {currentColors.border}"></div>
										{/if}
										<div
											class="px-4 py-2.5 text-xs font-bold uppercase tracking-wider sticky top-0 flex items-center gap-2"
											style="color: {currentColors.text}; background-color: {currentColors.border}"
										>
											<span
												class="w-2 h-2 rounded-full"
												style="background-color: {currentColors.primary}"
											></span>
											{category.name}
										</div>
										{#each getThemesByCategory(category.id) as theme (theme.name)}
											<button
												type="button"
												class="w-full px-4 py-2.5 flex items-center gap-3 transition-colors"
												style="background-color: {themeStore.theme.name === theme.name
													? currentColors.border
													: 'transparent'}; color: {currentColors.text}"
												onclick={() => selectTheme(theme)}
												role="option"
												aria-selected={themeStore.theme.name === theme.name}
												data-selected={themeStore.theme.name === theme.name}
											>
												<!-- Light mode colors -->
												<div class="flex gap-0.5">
													<div
														class="w-4 h-4 rounded-l border"
														style="background-color: {theme.light
															.background}; border-color: {currentColors.border}"
														title="Background"
													></div>
													<div
														class="w-4 h-4 border-y"
														style="background-color: {theme.light
															.surface}; border-color: {currentColors.border}"
														title="Surface"
													></div>
													<div
														class="w-4 h-4 border-y"
														style="background-color: {theme.light
															.primary}; border-color: {currentColors.border}"
														title="Primary"
													></div>
													<div
														class="w-4 h-4 rounded-r border"
														style="background-color: {theme.light
															.accent}; border-color: {currentColors.border}"
														title="Accent"
													></div>
												</div>
												<!-- Dark mode colors -->
												<div class="flex gap-0.5">
													<div
														class="w-4 h-4 rounded-l border"
														style="background-color: {theme.dark
															.background}; border-color: {currentColors.border}"
														title="Background"
													></div>
													<div
														class="w-4 h-4 border-y"
														style="background-color: {theme.dark
															.surface}; border-color: {currentColors.border}"
														title="Surface"
													></div>
													<div
														class="w-4 h-4 border-y"
														style="background-color: {theme.dark
															.primary}; border-color: {currentColors.border}"
														title="Primary"
													></div>
													<div
														class="w-4 h-4 rounded-r border"
														style="background-color: {theme.dark
															.accent}; border-color: {currentColors.border}"
														title="Accent"
													></div>
												</div>
												<!-- Theme name and description -->
												<div class="flex-1 text-left min-w-0">
													<div class="text-sm font-medium truncate">
														{theme.name}
													</div>
													<div class="text-xs truncate" style="color: {currentColors.textMuted}">
														{theme.description}
													</div>
												</div>
												{#if themeStore.theme.name === theme.name}
													<Icon
														icon="lucide:check"
														width="16"
														height="16"
														style="color: {currentColors.primary}"
													/>
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
						class="px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2"
						style="background-color: {appliedFeedback
							? '#16a34a'
							: currentColors.primary}; color: white"
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
	<div
		class="py-12 transition-colors duration-300"
		style="background-color: {currentColors.background}"
	>
		<div class="container-app">
			<h1 class="text-4xl font-bold mb-4" style="font-family: {headingFont}, sans-serif">
				Theme Customization
			</h1>
			<p style="color: {currentColors.textMuted}; font-size: 1.125rem">
				Customize colors and fonts to preview how your application will look. Select a theme palette
				and font pairing to see the changes applied to this entire page.
			</p>
		</div>
	</div>

	<!-- Current Settings Section -->
	<ThemeSection
		title="Current Settings"
		icon="lucide:settings"
		variant="surface"
		colors={currentColors}
		{headingFont}
	>
		<div class="grid md:grid-cols-2 gap-6">
			<!-- Theme Colors -->
			<div
				class="rounded-xl p-6 transition-colors duration-300"
				style="background-color: {currentColors.background}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
			>
				<h3 class="text-lg font-semibold mb-4">Color Palette: {themeStore.theme.name}</h3>
				<p class="mb-4" style="color: {currentColors.textMuted}">
					{themeStore.theme.description}
				</p>
				<div class="grid grid-cols-2 gap-3">
					<div class="flex items-center gap-3">
						<div
							class="w-8 h-8 rounded"
							style="background-color: {currentColors.background}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
						></div>
						<span class="text-sm" style="color: {currentColors.textMuted}">Background</span>
					</div>
					<div class="flex items-center gap-3">
						<div
							class="w-8 h-8 rounded"
							style="background-color: {currentColors.surface}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
						></div>
						<span class="text-sm" style="color: {currentColors.textMuted}">Surface</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-8 h-8 rounded" style="background-color: {currentColors.primary}"></div>
						<span class="text-sm" style="color: {currentColors.textMuted}">Primary</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="w-8 h-8 rounded" style="background-color: {currentColors.accent}"></div>
						<span class="text-sm" style="color: {currentColors.textMuted}">Accent</span>
					</div>
				</div>
			</div>

			<!-- Font Pairing -->
			<div
				class="rounded-xl p-6 transition-colors duration-300"
				style="background-color: {currentColors.background}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
			>
				<h3 class="text-lg font-semibold mb-4">Font Pairing: {fontStore.pairing.name}</h3>
				<p class="mb-4" style="color: {currentColors.textMuted}">
					{fontStore.pairing.description}
				</p>
				<div class="space-y-3">
					<div>
						<span class="text-xs uppercase tracking-wide" style="color: {currentColors.textMuted}"
							>Heading</span
						>
						<p
							class="text-xl font-semibold"
							style="font-family: '{fontStore.pairing.heading}', sans-serif"
						>
							{fontStore.pairing.heading}
						</p>
					</div>
					<div>
						<span class="text-xs uppercase tracking-wide" style="color: {currentColors.textMuted}"
							>Body</span
						>
						<p style="font-family: '{fontStore.pairing.body}', sans-serif">
							{fontStore.pairing.body}
						</p>
					</div>
					<div>
						<span class="text-xs uppercase tracking-wide" style="color: {currentColors.textMuted}"
							>Mono</span
						>
						<p style="font-family: '{fontStore.pairing.mono}', monospace">
							{fontStore.pairing.mono}
						</p>
					</div>
				</div>
			</div>
		</div>
	</ThemeSection>

	<!-- Typography Hierarchy Section -->
	<ThemeSection
		title="Typography Hierarchy"
		icon="lucide:heading"
		variant="background"
		colors={currentColors}
		{headingFont}
	>
		<div
			class="rounded-xl p-6 transition-colors duration-300 space-y-6"
			style="background-color: {currentColors.surface}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
		>
			<div class="space-y-4">
				<div>
					<span class="text-xs uppercase tracking-wide" style="color: {currentColors.textMuted}"
						>H1 - 3rem (48px)</span
					>
					<h1
						class="text-5xl font-bold"
						style="font-family: '{fontStore.pairing.heading}', sans-serif"
					>
						Heading Level 1
					</h1>
				</div>
				<div>
					<span class="text-xs uppercase tracking-wide" style="color: {currentColors.textMuted}"
						>H2 - 2.25rem (36px)</span
					>
					<h2
						class="text-4xl font-bold"
						style="font-family: '{fontStore.pairing.heading}', sans-serif"
					>
						Heading Level 2
					</h2>
				</div>
				<div>
					<span class="text-xs uppercase tracking-wide" style="color: {currentColors.textMuted}"
						>H3 - 1.875rem (30px)</span
					>
					<h3
						class="text-3xl font-semibold"
						style="font-family: '{fontStore.pairing.heading}', sans-serif"
					>
						Heading Level 3
					</h3>
				</div>
				<div>
					<span class="text-xs uppercase tracking-wide" style="color: {currentColors.textMuted}"
						>H4 - 1.5rem (24px)</span
					>
					<h4
						class="text-2xl font-semibold"
						style="font-family: '{fontStore.pairing.heading}', sans-serif"
					>
						Heading Level 4
					</h4>
				</div>
				<div>
					<span class="text-xs uppercase tracking-wide" style="color: {currentColors.textMuted}"
						>H5 - 1.25rem (20px)</span
					>
					<h5
						class="text-xl font-medium"
						style="font-family: '{fontStore.pairing.heading}', sans-serif"
					>
						Heading Level 5
					</h5>
				</div>
				<div>
					<span class="text-xs uppercase tracking-wide" style="color: {currentColors.textMuted}"
						>H6 - 1rem (16px)</span
					>
					<h6
						class="text-base font-medium"
						style="font-family: '{fontStore.pairing.heading}', sans-serif"
					>
						Heading Level 6
					</h6>
				</div>
			</div>
			<div class="pt-4 border-t" style="border-color: {currentColors.border}">
				<span class="text-xs uppercase tracking-wide" style="color: {currentColors.textMuted}"
					>Body Text</span
				>
				<p class="mt-2" style="font-family: '{fontStore.pairing.body}', sans-serif">
					This is a paragraph of body text using the selected font pairing. It demonstrates how
					readable content will appear in your application. Good typography enhances user experience
					by making content easy to scan and read.
				</p>
				<p
					class="mt-2 text-sm"
					style="color: {currentColors.textMuted}; font-family: '{fontStore.pairing
						.body}', sans-serif"
				>
					This is smaller muted text often used for captions, hints, or secondary information.
				</p>
			</div>
		</div>
	</ThemeSection>

	<!-- Component Preview Section -->
	<ThemeSection
		title="Component Preview"
		icon="lucide:component"
		variant="surface"
		colors={currentColors}
		{headingFont}
	>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			<!-- Card Preview -->
			<div
				class="rounded-xl shadow-md p-6 transition-colors duration-300"
				style="background-color: {currentColors.background}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
			>
				<h3
					class="text-lg font-semibold mb-2"
					style="font-family: '{fontStore.pairing.heading}', sans-serif"
				>
					Card Component
				</h3>
				<p class="mb-4" style="color: {currentColors.textMuted}">
					This card uses the selected theme colors for background, text, and border.
				</p>
				<button
					class="px-4 py-2 rounded-lg font-medium text-white transition-colors"
					style="background-color: {currentColors.primary}"
				>
					Primary Button
				</button>
			</div>

			<!-- Form Preview -->
			<div
				class="rounded-xl shadow-md p-6 transition-colors duration-300"
				style="background-color: {currentColors.background}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
			>
				<h3
					class="text-lg font-semibold mb-4"
					style="font-family: '{fontStore.pairing.heading}', sans-serif"
				>
					Form Elements
				</h3>
				<div class="space-y-3">
					<div>
						<label
							for="theme-preview-input"
							class="block text-sm font-medium mb-1"
							style="color: {currentColors.textMuted}"
						>
							Input Field
						</label>
						<input
							id="theme-preview-input"
							type="text"
							placeholder="Enter text..."
							class="w-full px-3 py-2 rounded-lg outline-none transition-colors"
							style="background-color: {currentColors.surface}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
						/>
					</div>
					<button
						class="w-full px-4 py-2 rounded-lg font-medium text-white transition-colors"
						style="background-color: {currentColors.accent}"
					>
						Accent Button
					</button>
				</div>
			</div>

			<!-- Typography Preview -->
			<div
				class="rounded-xl shadow-md p-6 transition-colors duration-300"
				style="background-color: {currentColors.background}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
			>
				<h3
					class="text-lg font-semibold mb-4"
					style="font-family: '{fontStore.pairing.heading}', sans-serif"
				>
					Typography
				</h3>
				<div class="space-y-2">
					<h4
						class="text-xl font-bold"
						style="font-family: '{fontStore.pairing.heading}', sans-serif"
					>
						Heading Style
					</h4>
					<p style="font-family: '{fontStore.pairing.body}', sans-serif">
						Body text looks like this with the selected font pairing.
					</p>
					<code
						class="text-sm px-2 py-1 rounded inline-block"
						style="background-color: {currentColors.surface}; font-family: '{fontStore.pairing
							.mono}', monospace"
					>
						const code = "monospace";
					</code>
				</div>
			</div>
		</div>
	</ThemeSection>

	<!-- Buttons Section -->
	<ThemeSection
		title="Buttons"
		icon="lucide:mouse-pointer-click"
		variant="background"
		colors={currentColors}
		{headingFont}
	>
		<div
			class="rounded-xl p-6 transition-colors duration-300"
			style="background-color: {currentColors.surface}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
		>
			<h3
				class="text-lg font-semibold mb-4"
				style="font-family: '{fontStore.pairing.heading}', sans-serif"
			>
				Variants
			</h3>
			<div class="flex flex-wrap gap-4 mb-6">
				<button
					class="px-4 py-2 rounded-lg font-medium text-white transition-colors"
					style="background-color: {currentColors.primary}"
				>
					Primary
				</button>
				<button
					class="px-4 py-2 rounded-lg font-medium transition-colors"
					style="background-color: {currentColors.border}; color: {currentColors.text}"
				>
					Secondary
				</button>
				<button
					class="px-4 py-2 rounded-lg font-medium text-white transition-colors"
					style="background-color: {currentColors.accent}"
				>
					Accent
				</button>
				<button
					class="px-4 py-2 rounded-lg font-medium border-2 transition-colors"
					style="border-color: {currentColors.primary}; color: {currentColors.primary}"
				>
					Outline
				</button>
				<button
					class="px-4 py-2 rounded-lg font-medium transition-colors hover:opacity-80"
					style="color: {currentColors.textMuted}"
				>
					Ghost
				</button>
			</div>

			<h3
				class="text-lg font-semibold mb-4"
				style="font-family: '{fontStore.pairing.heading}', sans-serif"
			>
				With Icons
			</h3>
			<div class="flex flex-wrap items-center gap-4">
				<button
					class="px-4 py-2 rounded-lg font-medium text-white transition-colors inline-flex items-center gap-2"
					style="background-color: {currentColors.primary}"
				>
					<Icon icon="lucide:plus" width="16" height="16" />
					Add Item
				</button>
				<button
					class="px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
					style="background-color: {currentColors.border}; color: {currentColors.text}"
				>
					<Icon icon="lucide:download" width="16" height="16" />
					Download
				</button>
				<button
					class="px-4 py-2 rounded-lg font-medium border-2 transition-colors inline-flex items-center gap-2"
					style="border-color: {currentColors.primary}; color: {currentColors.primary}"
				>
					<Icon icon="lucide:settings" width="16" height="16" />
					Settings
				</button>
			</div>
		</div>
	</ThemeSection>

	<!-- Alerts Section -->
	<ThemeSection
		title="Alerts"
		icon="lucide:bell"
		variant="surface"
		colors={currentColors}
		{headingFont}
	>
		<div class="space-y-4">
			<Alert variant="info" colors={currentColors}>
				<strong>Info:</strong> This is an informational message using the theme colors.
			</Alert>
			<Alert variant="success" colors={currentColors}>
				<strong>Success:</strong> Operation completed successfully!
			</Alert>
			<Alert variant="warning" colors={currentColors}>
				<strong>Warning:</strong> Please review before proceeding.
			</Alert>
			<Alert variant="error" colors={currentColors}>
				<strong>Error:</strong> An error occurred. Please try again.
			</Alert>
		</div>
	</ThemeSection>

	<!-- Modal & Icons Section -->
	<ThemeSection
		title="Modal"
		icon="lucide:square"
		variant="background"
		colors={currentColors}
		{headingFont}
	>
		<div
			class="rounded-xl p-6 transition-colors duration-300"
			style="background-color: {currentColors.surface}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
		>
			<p class="mb-4" style="color: {currentColors.textMuted}">
				Click the button to open a modal dialog.
			</p>
			<button
				type="button"
				class="px-4 py-2 rounded-lg font-medium text-white transition-colors"
				style="background-color: {currentColors.primary}"
				onclick={() => (modalOpen = true)}
			>
				Open Modal
			</button>
		</div>
	</ThemeSection>

	<!-- Icons Section -->
	<ThemeSection
		title="Icons (Iconify)"
		icon="lucide:shapes"
		variant="surface"
		colors={currentColors}
		{headingFont}
	>
		<div
			class="rounded-xl p-6 transition-colors duration-300"
			style="background-color: {currentColors.background}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
		>
			<p class="mb-4" style="color: {currentColors.textMuted}">
				Icons are rendered using the <code
					class="px-1 rounded"
					style="background-color: {currentColors.surface}">Icon</code
				>
				component with Iconify. Use the pattern
				<code class="px-1 rounded" style="background-color: {currentColors.surface}"
					>&lt;Icon icon="set:name" /&gt;</code
				>.
			</p>
			<div class="flex flex-wrap gap-6">
				{#each [{ icon: 'lucide:home', name: 'home' }, { icon: 'lucide:user', name: 'user' }, { icon: 'lucide:settings', name: 'settings' }, { icon: 'lucide:search', name: 'search' }, { icon: 'lucide:mail', name: 'mail' }, { icon: 'lucide:chart-bar', name: 'chart-bar' }, { icon: 'lucide:code', name: 'code' }, { icon: 'lucide:check-circle', name: 'check-circle' }, { icon: 'lucide:alert-triangle', name: 'alert-triangle' }, { icon: 'lucide:x-circle', name: 'x-circle' }] as item (item.name)}
					<div class="flex flex-col items-center gap-2">
						<Icon
							icon={item.icon}
							width="24"
							height="24"
							style="color: {currentColors.textMuted}"
						/>
						<span class="text-xs" style="color: {currentColors.textMuted}">lucide:{item.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</ThemeSection>

	<!-- Stat Cards Section -->
	<ThemeSection
		title="Stat Cards"
		icon="lucide:bar-chart-2"
		variant="background"
		colors={currentColors}
		{headingFont}
	>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
			<StatCard label="Default" value={42} />
			<StatCard label="Success" value={128} variant="success" prefix="+" />
			<StatCard label="Danger" value={23} variant="danger" prefix="-" />
			<StatCard label="Net" value="1.2K" />
		</div>
	</ThemeSection>

	<!-- Badges Section -->
	<ThemeSection
		title="Badges"
		icon="lucide:tag"
		variant="surface"
		colors={currentColors}
		{headingFont}
	>
		<div
			class="rounded-xl p-6 transition-colors duration-300"
			style="background-color: {currentColors.background}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
		>
			<div class="flex flex-wrap gap-3">
				<Badge>Primary</Badge>
				<Badge variant="accent">Accent</Badge>
				<Badge variant="success">Success</Badge>
				<Badge variant="warning">Warning</Badge>
				<Badge variant="error">Error</Badge>
			</div>
		</div>
	</ThemeSection>

	<!-- Gradient Palettes Section -->
	<ThemeSection
		title="Gradient Palettes"
		icon="lucide:blend"
		variant="background"
		colors={currentColors}
		{headingFont}
	>
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{#each gradientPalettes as gradient (gradient.name)}
				<div
					class="rounded-xl overflow-hidden transition-colors duration-300"
					style="border: 1px solid {currentColors.border}"
				>
					<div class="h-24" style="background: {gradient.css}"></div>
					<div class="p-3" style="background-color: {currentColors.surface}">
						<p class="font-medium text-sm">{gradient.name}</p>
						<p class="text-xs mt-1" style="color: {currentColors.textMuted}">
							{gradient.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</ThemeSection>

	<!-- Sequential Palettes Section -->
	<ThemeSection
		title="Sequential Palettes"
		description="Single hue progressions for ordered data, quantities, and progression."
		icon="lucide:arrow-right"
		variant="surface"
		colors={currentColors}
		{headingFont}
	>
		<div class="space-y-4">
			{#each sequentialPalettes as palette (palette.name)}
				<div
					class="rounded-xl p-4 transition-colors duration-300"
					style="background-color: {currentColors.background}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
				>
					<div class="flex items-center justify-between mb-2">
						<p class="font-medium">{palette.name}</p>
						<p class="text-xs" style="color: {currentColors.textMuted}">{palette.description}</p>
					</div>
					<div class="flex rounded-lg overflow-hidden">
						{#each palette.colors as color (color)}
							<div class="flex-1 h-10" style="background-color: {color}" title={color}></div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</ThemeSection>

	<!-- Diverging Palettes Section -->
	<ThemeSection
		title="Diverging Palettes"
		description="Two hues with neutral midpoint for data with meaningful center (positive/negative, above/below average)."
		icon="lucide:arrow-left-right"
		variant="background"
		colors={currentColors}
		{headingFont}
	>
		<div class="space-y-4">
			{#each divergingPalettes as palette (palette.name)}
				<div
					class="rounded-xl p-4 transition-colors duration-300"
					style="background-color: {currentColors.surface}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
				>
					<div class="flex items-center justify-between mb-2">
						<p class="font-medium">{palette.name}</p>
						<p class="text-xs" style="color: {currentColors.textMuted}">{palette.description}</p>
					</div>
					<div class="flex rounded-lg overflow-hidden">
						{#each palette.colors as color (color)}
							<div class="flex-1 h-10" style="background-color: {color}" title={color}></div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</ThemeSection>

	<!-- Qualitative Palettes Section -->
	<ThemeSection
		title="Qualitative Palettes"
		description="Distinct colors for categorical/nominal data, different groups, and labels."
		icon="lucide:shapes"
		variant="surface"
		colors={currentColors}
		{headingFont}
	>
		<div class="space-y-4">
			{#each qualitativePalettes as palette (palette.name)}
				<div
					class="rounded-xl p-4 transition-colors duration-300"
					style="background-color: {currentColors.background}; border: 1px solid {currentColors.border}; color: {currentColors.text}"
				>
					<div class="flex items-center justify-between mb-2">
						<p class="font-medium">{palette.name}</p>
						<p class="text-xs" style="color: {currentColors.textMuted}">{palette.description}</p>
					</div>
					<div class="flex gap-1">
						{#each palette.colors as color (color)}
							<div
								class="flex-1 h-10 rounded"
								style="background-color: {color}"
								title={color}
							></div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</ThemeSection>
</div>

<!-- Demo Modal -->
<Modal bind:open={modalOpen} title="Example Modal">
	<p class="text-secondary-600 mb-4">
		This is a reusable modal component. It handles backdrop click, escape key, and focus management.
	</p>
	<p class="text-secondary-600">
		You can pass any content as children and optionally provide a footer snippet.
	</p>
	{#snippet footer()}
		<p class="text-xs text-secondary-500 text-center">Press Escape or click outside to close.</p>
	{/snippet}
</Modal>
