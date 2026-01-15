<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Icon,
		ResearchOrganizationSearch,
		ArticlesCountCard,
		HealthStatusCard,
		ConsentStatusCard
	} from '$lib/ui';
	import {
		createThemeStore,
		hasThemePreferences,
		clearPalettePreference,
		clearFontPreference,
		setPalette,
		setFont
	} from '$lib/stores';
	import type { TInstitution } from '$lib/server/openalex';

	const themeStore = createThemeStore();

	let savedPreferences = $state({ palette: false, font: false });

	/** Shared state for selected organizations */
	let selectedOrganizations = $state<TInstitution[]>([]);

	/** Whether user has granted consent for OpenAlex (shared between components) */
	let hasOpenAlexConsent = $state(false);

	/** Toggle palette between fixed (saved) and random */
	const togglePaletteMode = (): void => {
		if (savedPreferences.palette) {
			// Currently fixed -> switch to random (clear cookie only)
			clearPalettePreference();
		} else {
			// Currently random -> switch to fixed (save to cookie)
			setPalette(themeStore.palette);
		}
		savedPreferences = hasThemePreferences();
	};

	/** Toggle font between fixed (saved) and random */
	const toggleFontMode = (): void => {
		if (savedPreferences.font) {
			// Currently fixed -> switch to random (clear cookie only)
			clearFontPreference();
		} else {
			// Currently random -> switch to fixed (save to cookie)
			setFont(themeStore.fontName);
		}
		savedPreferences = hasThemePreferences();
	};

	onMount(() => {
		// initTheme is called in +layout.svelte, just check preferences
		savedPreferences = hasThemePreferences();
	});

	interface Props {
		data: {
			user: { email: string } | null;
			isAdmin: boolean;
		};
	}

	let { data }: Props = $props();

	interface QuickAction {
		href: string;
		icon: string;
		title: string;
		description: string;
		external?: boolean;
	}

	const quickActions: QuickAction[] = [
		{
			href: '/repository',
			icon: 'lucide:bar-chart-2',
			title: 'Repository Stats',
			description: 'Explore code statistics and analytics'
		},
		{
			href: '/api/docs',
			icon: 'lucide:code',
			title: 'API Documentation',
			description: 'Browse the REST API reference'
		},
		{
			href: 'https://doi.org/10.5281/zenodo.18241663',
			icon: 'lucide:archive',
			title: 'Archive',
			description: 'Zenodo permanent archive',
			external: true
		}
	];
</script>

<svelte:head>
	<title>Dashboard - Talent Finder</title>
	<meta name="description" content="Your personal dashboard on Talent Finder" />
</svelte:head>

<div class="container-app py-12">
	<div class="max-w-4xl mx-auto">
		<h1 class="text-3xl font-bold mb-2">Dashboard</h1>
		<p class="text-secondary-600 dark:text-secondary-400 mb-8">
			Welcome back{data.user ? `, ${data.user.email}` : ''}.
		</p>

		<div class="grid md:grid-cols-2 gap-6">
			<!-- Profile Card -->
			<div class="card">
				<h2 class="text-xl font-semibold mb-4">Your Profile</h2>
				<div class="space-y-3">
					<div>
						<span class="text-sm text-secondary-500 dark:text-secondary-400">Email</span>
						<p>{data.user?.email ?? 'Not logged in'}</p>
					</div>
				</div>
				<div class="mt-6">
					<span
						class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
					>
						Profile incomplete
					</span>
				</div>
			</div>

			<!-- Theme Preferences Card -->
			<div class="card">
				<div class="flex items-center justify-between mb-4">
					<h2 class="text-xl font-semibold">Theme Preferences</h2>
					{#if data.isAdmin}
						<a
							href="/theme"
							class="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
						>
							<Icon icon="lucide:settings" width="14" height="14" />
							Customize
						</a>
					{/if}
				</div>
				<div class="space-y-4">
					<!-- Palette -->
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-3">
							<div class="flex gap-0.5">
								<div class="w-5 h-5 rounded-l bg-primary-500"></div>
								<div class="w-5 h-5 bg-accent-500"></div>
								<div class="w-5 h-5 rounded-r bg-secondary-500"></div>
							</div>
							<div>
								<span class="text-sm text-secondary-500 dark:text-secondary-400">Palette</span>
								<p class="font-medium capitalize">{themeStore.palette}</p>
							</div>
						</div>
						<!-- Palette Toggle -->
						<button
							type="button"
							onclick={togglePaletteMode}
							class="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors {savedPreferences.palette
								? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
								: 'bg-secondary-100 text-secondary-600 dark:bg-secondary-700 dark:text-secondary-400'}"
							title={savedPreferences.palette
								? 'Click to switch to random palette on each visit'
								: 'Click to keep this palette'}
						>
							<Icon
								icon={savedPreferences.palette ? 'lucide:lock' : 'lucide:shuffle'}
								width="12"
								height="12"
							/>
							{savedPreferences.palette ? 'Fixed' : 'Random'}
						</button>
					</div>
					<!-- Font -->
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-3">
							<div
								class="w-[62px] h-10 flex items-center justify-center rounded bg-secondary-100 dark:bg-secondary-700"
							>
								<Icon
									icon="lucide:type"
									width="20"
									height="20"
									class="text-secondary-600 dark:text-secondary-300"
								/>
							</div>
							<div>
								<span class="text-sm text-secondary-500 dark:text-secondary-400">Font</span>
								<p class="font-medium capitalize">{themeStore.fontName}</p>
							</div>
						</div>
						<!-- Font Toggle -->
						<button
							type="button"
							onclick={toggleFontMode}
							class="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors {savedPreferences.font
								? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
								: 'bg-secondary-100 text-secondary-600 dark:bg-secondary-700 dark:text-secondary-400'}"
							title={savedPreferences.font
								? 'Click to switch to random font on each visit'
								: 'Click to keep this font'}
						>
							<Icon
								icon={savedPreferences.font ? 'lucide:lock' : 'lucide:shuffle'}
								width="12"
								height="12"
							/>
							{savedPreferences.font ? 'Fixed' : 'Random'}
						</button>
					</div>
					<!-- Dark Mode -->
					<div class="flex items-center gap-3">
						<div
							class="w-[62px] h-10 flex items-center justify-center rounded bg-secondary-100 dark:bg-secondary-700"
						>
							<Icon
								icon={themeStore.darkMode === 'dark'
									? 'lucide:moon'
									: themeStore.darkMode === 'light'
										? 'lucide:sun'
										: 'lucide:monitor'}
								width="20"
								height="20"
								class="text-secondary-600 dark:text-secondary-300"
							/>
						</div>
						<div>
							<span class="text-sm text-secondary-500 dark:text-secondary-400">Mode</span>
							<p class="font-medium capitalize">{themeStore.darkMode}</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Pages Card -->
			<div class="card">
				<h2 class="text-xl font-semibold mb-4">Pages</h2>
				<div class="space-y-3">
					{#each quickActions as action (action.href)}
						<a
							href={action.href}
							target={action.external ? '_blank' : undefined}
							rel={action.external ? 'noopener noreferrer' : undefined}
							title={action.external ? 'Opens in new tab' : undefined}
							class="flex items-center gap-3 p-3 rounded-lg border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
						>
							<Icon
								icon={action.icon}
								width="20"
								height="20"
								class="text-primary-600 dark:text-primary-400"
							/>
							<div class="flex-1">
								<p class="font-medium">{action.title}</p>
								<p class="text-sm text-secondary-500 dark:text-secondary-400">
									{action.description}
								</p>
							</div>
						</a>
					{/each}
				</div>
			</div>

			<!-- Consent Status Card -->
			<ConsentStatusCard userEmail={data.user?.email} bind:hasConsent={hasOpenAlexConsent} />

			<!-- Research Organization Search Card -->
			<ResearchOrganizationSearch bind:selectedOrganizations hasConsent={hasOpenAlexConsent} />

			<!-- Articles Count Card -->
			<ArticlesCountCard {selectedOrganizations} hasConsent={hasOpenAlexConsent} />

			<!-- System Health Card (Admin only) -->
			{#if data.isAdmin}
				<HealthStatusCard />
			{/if}
		</div>

		<!-- Coming Soon Section -->
		<div
			class="mt-8 p-6 bg-secondary-50 dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700"
		>
			<h2 class="text-lg font-semibold mb-2">Coming Soon</h2>
			<p class="text-secondary-600 dark:text-secondary-400 mb-4">
				We're working on new features to help you manage your profile and discover collaborators.
			</p>
			<ul class="space-y-2 text-secondary-600 dark:text-secondary-400">
				<li class="flex items-center gap-2">
					<Icon icon="lucide:check" width="16" height="16" class="text-primary-500" />
					Complete profile with skills and expertise
				</li>
				<li class="flex items-center gap-2">
					<Icon icon="lucide:check" width="16" height="16" class="text-primary-500" />
					Search and discover other researchers
				</li>
				<li class="flex items-center gap-2">
					<Icon icon="lucide:check" width="16" height="16" class="text-primary-500" />
					Connect and collaborate on projects
				</li>
			</ul>
		</div>
	</div>
</div>
