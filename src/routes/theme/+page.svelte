<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Alert,
		Badge,
		Card,
		CodeExample,
		ColorScaleRow,
		ColorSwatch,
		Dropdown,
		DropdownCategory,
		DropdownItem,
		Icon,
		LoadingSpinner,
		Modal,
		PageHero,
		Section,
		Signup,
		StatCard,
		ThemeToggle
	} from '$lib/ui';
	import {
		paletteCategories,
		palettesByCategory,
		getPalettePreviewColors,
		type PaletteName
	} from '$lib/palettes';
	import {
		createThemeStore,
		fontCategories,
		getFontsByCategory,
		clearThemePreferences,
		hasThemePreferences,
		setPalette,
		setFont
	} from '$lib/stores';

	const themeStore = createThemeStore();

	let modalOpen = $state(false);
	let signupOpen = $state(false);
	let paletteDropdownOpen = $state(false);
	let fontDropdownOpen = $state(false);
	let appliedFeedback = $state(false);
	let resetFeedback = $state(false);
	let savedPreferences = $state({ palette: false, font: false });

	const selectPalette = (palette: PaletteName): void => {
		themeStore.palette = palette;
		paletteDropdownOpen = false;
	};

	const selectFont = (fontName: string): void => {
		themeStore.fontName = fontName;
		fontDropdownOpen = false;
	};

	/** Set both palette and font as fixed (saved to cookies) */
	const setTheme = (): void => {
		setPalette(themeStore.palette);
		setFont(themeStore.fontName);
		appliedFeedback = true;
		savedPreferences = hasThemePreferences();
		setTimeout(() => {
			appliedFeedback = false;
		}, 2000);
	};

	/** Reset both palette and font to random mode (clear cookies and randomize) */
	const resetTheme = (): void => {
		clearThemePreferences();
		resetFeedback = true;
		savedPreferences = hasThemePreferences();
		setTimeout(() => {
			resetFeedback = false;
		}, 2000);
	};

	onMount(() => {
		savedPreferences = hasThemePreferences();
	});

	// Color scale configuration
	const fullScaleColors = [
		{ name: 'Primary', cssPrefix: 'primary' },
		{ name: 'Accent', cssPrefix: 'accent' },
		{ name: 'Secondary', cssPrefix: 'secondary' }
	];

	const sparseScaleColors = [
		{ name: 'Success', cssPrefix: 'success', sparseShades: [50, 500, 600, 700] },
		{ name: 'Warning', cssPrefix: 'warning', sparseShades: [50, 500, 600, 700] },
		{ name: 'Error', cssPrefix: 'error', sparseShades: [50, 500, 600, 700] }
	];

	const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
</script>

<svelte:head>
	<title>Theme - ECRIN | Talent finder</title>
	<meta name="description" content="ECRIN Talent finder theme customization and design system" />
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
				<!-- Font Pairing Dropdown -->
				<Dropdown bind:open={fontDropdownOpen} width="w-96">
					{#snippet trigger()}
						<Icon icon="lucide:type" width="16" height="16" />
						<div class="flex flex-col items-start">
							<span class="capitalize font-medium">{themeStore.fontName}</span>
							<span class="text-xs text-secondary-500 dark:text-secondary-400">
								{themeStore.font.headingFamily} / {themeStore.font.bodyFamily}
							</span>
						</div>
					{/snippet}
					{#each fontCategories as category, index (category.id)}
						<DropdownCategory name={category.name} showDivider={index > 0} />
						{#each getFontsByCategory(category.id) as pairing (pairing.name)}
							<DropdownItem
								selected={themeStore.fontName === pairing.name}
								onclick={() => selectFont(pairing.name)}
							>
								<div class="flex-1 min-w-0">
									<span
										class="text-sm font-semibold capitalize text-secondary-900 dark:text-secondary-100"
									>
										{pairing.name}
									</span>
									<div class="grid grid-cols-3 gap-2 text-xs mt-1">
										<div class="flex flex-col">
											<span
												class="text-[10px] uppercase tracking-wider text-secondary-400 dark:text-secondary-500"
												>Heading</span
											>
											<span
												class="text-secondary-700 dark:text-secondary-300 truncate"
												style="font-family: '{pairing.headingFamily}', sans-serif"
											>
												{pairing.headingFamily}
											</span>
										</div>
										<div class="flex flex-col">
											<span
												class="text-[10px] uppercase tracking-wider text-secondary-400 dark:text-secondary-500"
												>Body</span
											>
											<span
												class="text-secondary-700 dark:text-secondary-300 truncate"
												style="font-family: '{pairing.bodyFamily}', sans-serif"
											>
												{pairing.bodyFamily}
											</span>
										</div>
										<div class="flex flex-col">
											<span
												class="text-[10px] uppercase tracking-wider text-secondary-400 dark:text-secondary-500"
												>Mono</span
											>
											<span
												class="text-secondary-700 dark:text-secondary-300 truncate"
												style="font-family: '{pairing.monoFamily}', monospace"
											>
												{pairing.monoFamily}
											</span>
										</div>
									</div>
								</div>
							</DropdownItem>
						{/each}
					{/each}
				</Dropdown>

				<!-- Palette Dropdown -->
				<Dropdown bind:open={paletteDropdownOpen}>
					{#snippet trigger()}
						<ColorSwatch
							colors={[
								'var(--color-primary-500)',
								'var(--color-accent-500)',
								'var(--color-secondary-500)'
							]}
							size="sm"
						/>
						<span class="capitalize">{themeStore.palette}</span>
					{/snippet}
					{#each paletteCategories as category, index (category.id)}
						<DropdownCategory name={category.name} showDivider={index > 0} />
						{#each palettesByCategory[category.id] as palette (palette)}
							{@const colors = getPalettePreviewColors(palette)}
							<DropdownItem
								selected={themeStore.palette === palette}
								onclick={() => selectPalette(palette)}
							>
								<div class="flex-1 min-w-0">
									<span
										class="text-sm font-semibold capitalize text-secondary-900 dark:text-secondary-100 mb-2 block"
									>
										{palette}
									</span>
									<ColorSwatch
										colors={[
											colors.primary,
											colors.accent,
											colors.secondary,
											colors.success,
											colors.warning,
											colors.error
										]}
									/>
								</div>
							</DropdownItem>
						{/each}
					{/each}
				</Dropdown>

				<!-- Reset Button -->
				{#if savedPreferences.palette || savedPreferences.font}
					<button
						type="button"
						class="h-[52px] px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 {resetFeedback
							? 'bg-warning-600 text-white'
							: 'btn-outline'}"
						onclick={resetTheme}
						disabled={resetFeedback}
						title="Clear saved theme preferences and get new random values"
					>
						{#if resetFeedback}
							<Icon icon="lucide:shuffle" width="16" height="16" />
							Randomized!
						{:else}
							<Icon icon="lucide:rotate-ccw" width="16" height="16" />
							Reset
						{/if}
					</button>
				{/if}

				<!-- Set Button -->
				<button
					type="button"
					class="h-[52px] px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 {appliedFeedback
						? 'bg-success-600 text-white'
						: 'btn-primary'}"
					onclick={setTheme}
					disabled={appliedFeedback}
					title="Save both palette and font as fixed preferences"
				>
					{#if appliedFeedback}
						<Icon icon="lucide:check" width="16" height="16" />
						Fixed!
					{:else}
						<Icon icon="lucide:lock" width="16" height="16" />
						Set
					{/if}
				</button>
			</div>
		</div>
	</div>
</div>

<!-- Hero Section -->
<PageHero
	title="Theme Customization"
	description="Customize colors and fonts to preview how your application will look. Select a palette and font pairing to see the changes applied."
/>

<!-- Current Settings Section -->
<Section title="Current Settings" icon="lucide:settings" variant="surface">
	<div class="grid md:grid-cols-2 gap-6">
		<!-- Palette Colors -->
		<div class="card">
			<h3 class="text-lg font-semibold mb-4 capitalize">{themeStore.palette} Palette</h3>
			<div class="grid grid-cols-3 gap-3">
				<ColorSwatch color="var(--color-primary-500)" label="Primary" size="lg" />
				<ColorSwatch color="var(--color-accent-500)" label="Accent" size="lg" />
				<ColorSwatch color="var(--color-secondary-500)" label="Neutral" size="lg" />
				<ColorSwatch color="var(--color-success-500)" label="Success" size="lg" />
				<ColorSwatch color="var(--color-warning-500)" label="Warning" size="lg" />
				<ColorSwatch color="var(--color-error-500)" label="Error" size="lg" />
			</div>
		</div>

		<!-- Font Pairing -->
		<div class="card">
			<h3 class="text-lg font-semibold mb-4 capitalize">{themeStore.fontName}</h3>
			<p class="mb-4 text-secondary-600 dark:text-secondary-400">
				{themeStore.font.description}
			</p>
			<div class="space-y-3">
				<div>
					<span class="text-xs uppercase tracking-wide text-secondary-500 dark:text-secondary-400"
						>Heading</span
					>
					<p class="text-xl font-semibold font-heading">The quick brown fox jumps</p>
				</div>
				<div>
					<span class="text-xs uppercase tracking-wide text-secondary-500 dark:text-secondary-400"
						>Body</span
					>
					<p>The quick brown fox jumps over the lazy dog. This text demonstrates the body font.</p>
				</div>
				<div>
					<span class="text-xs uppercase tracking-wide text-secondary-500 dark:text-secondary-400"
						>Mono</span
					>
					<p class="font-mono">const example = "code";</p>
				</div>
			</div>
		</div>
	</div>
</Section>

<!-- Color Scale Section -->
<Section title="Color Scales" icon="lucide:paintbrush">
	<div class="card overflow-x-auto">
		<table class="w-full text-sm">
			<thead>
				<tr class="border-b border-secondary-200 dark:border-secondary-700">
					<th class="py-3 px-2 text-left font-semibold text-secondary-700 dark:text-secondary-300"
						>Scale</th
					>
					{#each shades as shade (shade)}
						<th
							class="py-3 px-1 text-center font-medium text-secondary-500 dark:text-secondary-400 text-xs"
							>{shade}</th
						>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each fullScaleColors as color (color.cssPrefix)}
					<ColorScaleRow name={color.name} cssPrefix={color.cssPrefix} {shades} />
				{/each}
				{#each sparseScaleColors as color, index (color.cssPrefix)}
					<ColorScaleRow
						name={color.name}
						cssPrefix={color.cssPrefix}
						{shades}
						sparseShades={color.sparseShades}
						isLast={index === sparseScaleColors.length - 1}
					/>
				{/each}
			</tbody>
		</table>

		<!-- Usage Examples -->
		<div class="mt-6 pt-6 border-t border-secondary-200 dark:border-secondary-700">
			<h4 class="text-sm font-semibold mb-3 text-secondary-700 dark:text-secondary-300">
				Usage Examples
			</h4>
			<div class="grid md:grid-cols-2 gap-4">
				<CodeExample comment="// Background" keyword="class" value="bg-primary-500" />
				<CodeExample comment="// Text color" keyword="class" value="text-primary-600" />
				<CodeExample comment="// Border" keyword="class" value="border-accent-300" />
				<CodeExample comment="// CSS Variable" keyword="var" value="--color-primary-500" />
			</div>
		</div>
	</div>
</Section>

<!-- Buttons Section -->
<Section title="Buttons" icon="lucide:mouse-pointer-click" variant="surface">
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
</Section>

<!-- Alerts Section -->
<Section title="Alerts" icon="lucide:bell">
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
</Section>

<!-- Modal & Signup Section -->
<Section title="Modal & Signup" icon="lucide:square" variant="surface">
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
</Section>

<!-- Stat Cards Section -->
<Section title="Stat Cards" icon="lucide:bar-chart-2">
	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
		<StatCard label="Default" value={42} />
		<StatCard label="Success" value={128} variant="success" prefix="+" />
		<StatCard label="Danger" value={23} variant="danger" prefix="-" />
		<StatCard label="Net" value="1.2K" />
	</div>
</Section>

<!-- Badges Section -->
<Section title="Badges" icon="lucide:tag" variant="surface">
	<div class="card">
		<div class="flex flex-wrap gap-3">
			<Badge>Primary</Badge>
			<Badge variant="accent">Accent</Badge>
			<Badge variant="success">Success</Badge>
			<Badge variant="warning">Warning</Badge>
			<Badge variant="error">Error</Badge>
		</div>
	</div>
</Section>

<!-- Card Section -->
<Section title="Card" icon="lucide:square">
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
</Section>

<!-- LoadingSpinner Section -->
<Section title="Loading Spinner" icon="lucide:loader" variant="surface">
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
</Section>

<!-- ThemeToggle Section -->
<Section title="Theme Toggle" icon="lucide:moon">
	<div class="card">
		<p class="mb-4 text-secondary-600 dark:text-secondary-400">
			The ThemeToggle component allows users to switch between light and dark modes. It persists the
			selection in cookies.
		</p>
		<div class="flex items-center gap-4">
			<ThemeToggle />
			<span class="text-sm text-secondary-500 dark:text-secondary-400">
				Click to toggle between light and dark modes
			</span>
		</div>
	</div>
</Section>

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
