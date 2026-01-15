<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg?raw';
	import { Icon, Signup, ThemeToggle, ConnectivityBanner } from '$lib/ui';
	import { page } from '$app/stores';
	import { createThemeStore, initTheme } from '$lib/stores';

	const themeStore = createThemeStore();

	onMount(() => {
		initTheme();
	});

	const isCurrentPage = (href: string): boolean => {
		return $page.url.pathname === href || $page.url.pathname.startsWith(href + '/');
	};

	interface Props {
		data: {
			user: { email: string } | null;
			connectivityError?: 'appwrite_unavailable' | 'no_internet';
		};
		form: {
			error?: boolean;
			message?: string;
			cause?: string;
			success?: boolean;
			loggedOut?: boolean;
		} | null;
		children: import('svelte').Snippet;
	}

	let { data, form, children }: Props = $props();

	let signupOpen = $state(false);
	let mobileMenuOpen = $state(false);

	const openSignup = (): void => {
		signupOpen = true;
	};

	const toggleMobileMenu = (): void => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	const closeMobileMenu = (): void => {
		mobileMenuOpen = false;
	};

	interface NavLink {
		href: string;
		label: string;
		icon: string;
		external?: boolean;
	}

	const dashboardLink: NavLink = {
		href: '/dashboard',
		label: 'Dashboard',
		icon: 'lucide:layout-dashboard'
	};

	const publicNavLinks: NavLink[] = [];

	const homeLink: NavLink = {
		href: '/',
		label: 'Home',
		icon: 'lucide:home'
	};

	const navLinks = $derived([homeLink, ...(data.user ? [dashboardLink] : []), ...publicNavLinks]);

	const mobileNavLinks = $derived([
		{ href: '/', label: 'Home', icon: 'lucide:home' },
		...(data.user ? [dashboardLink] : []),
		{
			href: 'https://github.com/univ-lehavre/talent-finder',
			label: 'GitHub',
			icon: 'mdi:github',
			external: true
		}
	]);

	/** Google Fonts URL for current font pairing */
	const fontUrl = $derived(themeStore.font.googleFontsUrl);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- Load selected font pairing from Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	{#key themeStore.fontName}
		<link href={fontUrl} rel="stylesheet" />
	{/key}
</svelte:head>

<!-- Font families are defined in CSS via [data-font="name"] selectors -->
<div class="min-h-screen flex flex-col">
	<!-- Navigation -->
	<nav
		class="bg-white dark:bg-secondary-800 border-b border-secondary-200 dark:border-secondary-700 sticky top-0 z-50 transition-colors duration-200"
	>
		<div class="container-app py-4 flex items-center justify-between">
			<a href="/" class="flex items-center gap-2">
				<span class="h-8 w-8 [&>svg]:h-full [&>svg]:w-full">{@html logo}</span>
				<span class="text-xl font-bold text-primary-700 dark:text-primary-400"
					>ECRIN | Talent finder</span
				>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center gap-4">
				{#each navLinks as link (link.href)}
					{@const isCurrent =
						!link.external &&
						(link.href === '/' ? $page.url.pathname === '/' : isCurrentPage(link.href))}
					<a
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noopener noreferrer' : undefined}
						title={link.external ? 'Opens in new tab' : undefined}
						class="text-sm inline-flex items-center gap-1.5 {isCurrent
							? 'text-secondary-400 dark:text-secondary-500 cursor-default pointer-events-none'
							: 'text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400'}"
						aria-current={isCurrent ? 'page' : undefined}
					>
						<Icon icon={link.icon} width="16" height="16" />
						{link.label}
					</a>
				{/each}
				<div class="icon-link-wrapper group relative">
					<a
						href="https://github.com/univ-lehavre/talent-finder"
						target="_blank"
						rel="noopener noreferrer"
						class="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
						aria-describedby="tooltip-github"
					>
						<Icon icon="mdi:github" width="20" height="20" />
						<span class="sr-only">GitHub</span>
					</a>
					<div
						id="tooltip-github"
						role="tooltip"
						class="icon-tooltip opacity-0 invisible group-hover:opacity-100 group-hover:visible"
					>
						<span class="font-semibold">GitHub</span>
						<span class="text-secondary-400 dark:text-secondary-500">View source code</span>
					</div>
				</div>
				<ThemeToggle />
				{#if data.user}
					<span class="text-sm text-secondary-600 dark:text-secondary-300">{data.user.email}</span>
					<form method="post" action="/?/logout">
						<button type="submit" class="btn-secondary btn-sm">Déconnexion</button>
					</form>
				{:else}
					<button type="button" class="btn-primary btn-sm" onclick={openSignup}>Sign In</button>
				{/if}
			</div>

			<!-- Mobile Navigation -->
			<div class="md:hidden flex items-center gap-2">
				<button
					type="button"
					class="p-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400"
					onclick={toggleMobileMenu}
					aria-label="Toggle menu"
				>
					<Icon icon={mobileMenuOpen ? 'lucide:x' : 'lucide:menu'} width="24" height="24" />
				</button>
			</div>
		</div>
	</nav>

	<!-- Mobile Offcanvas Menu -->
	{#if mobileMenuOpen}
		<!-- Backdrop -->
		<button
			type="button"
			class="fixed inset-0 bg-black/50 z-40 md:hidden"
			onclick={closeMobileMenu}
			aria-label="Close menu"
		></button>

		<!-- Offcanvas Panel -->
		<div
			class="fixed top-0 right-0 h-full w-72 bg-white dark:bg-secondary-800 shadow-xl z-50 md:hidden transition-colors duration-200"
		>
			<div
				class="p-4 border-b border-secondary-200 dark:border-secondary-700 flex items-center justify-between"
			>
				<span class="text-lg font-bold text-primary-700 dark:text-primary-400">Menu</span>
				<div class="flex items-center gap-2">
					<ThemeToggle />
					<button
						type="button"
						class="p-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400"
						onclick={closeMobileMenu}
						aria-label="Close menu"
					>
						<Icon icon="lucide:x" width="24" height="24" />
					</button>
				</div>
			</div>
			<div class="p-4 flex flex-col gap-4">
				{#each mobileNavLinks as link (link.href)}
					{@const isCurrent =
						!link.external &&
						(link.href === '/' ? $page.url.pathname === '/' : isCurrentPage(link.href))}
					<a
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noopener noreferrer' : undefined}
						title={link.external ? 'Opens in new tab' : undefined}
						class="py-2 border-b border-secondary-100 dark:border-secondary-700 flex items-center gap-3 {isCurrent
							? 'text-secondary-400 dark:text-secondary-500 cursor-default pointer-events-none'
							: 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400'}"
						onclick={closeMobileMenu}
						aria-current={isCurrent ? 'page' : undefined}
					>
						<Icon icon={link.icon} width="20" height="20" />
						{link.label}
					</a>
				{/each}
				<div class="pt-4 border-t border-secondary-200 dark:border-secondary-700">
					{#if data.user}
						<p class="text-sm text-secondary-600 dark:text-secondary-400 mb-3">{data.user.email}</p>
						<form method="post" action="/?/logout">
							<button type="submit" class="btn-secondary w-full">Déconnexion</button>
						</form>
					{:else}
						<button
							type="button"
							class="btn-primary w-full"
							onclick={() => {
								closeMobileMenu();
								openSignup();
							}}
						>
							Sign In
						</button>
					{/if}
				</div>
			</div>
		</div>
	{/if}

	<!-- Connectivity Error Banner -->
	{#if data.connectivityError}
		<ConnectivityBanner error={data.connectivityError} />
	{/if}

	<!-- Main Content -->
	<main class="flex-grow">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer
		class="bg-secondary-100 dark:bg-secondary-800 border-t border-secondary-200 dark:border-secondary-700 py-8 transition-colors duration-200"
	>
		<div class="container-app">
			<div class="flex flex-col md:flex-row items-center justify-center gap-8">
				<a
					href="https://ecrin.sites.chasset.net"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 hover:opacity-80 transition-opacity"
				>
					<span class="text-lg font-bold text-primary-700 dark:text-primary-400">ECRIN</span>
				</a>
				<a
					href="https://www.univ-lehavre.fr"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 hover:opacity-80 transition-opacity"
				>
					<img src="/logos/ulhn.svg" alt="Université Le Havre Normandie" class="h-12" />
				</a>
				<a
					href="https://eunicoast.eu"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 hover:opacity-80 transition-opacity"
				>
					<img src="/logos/eunicoast.png" alt="EUNICoast" class="h-12" />
				</a>
			</div>
			<p class="text-center text-sm text-secondary-500 dark:text-secondary-400 mt-6">
				Developed at Université Le Havre Normandie
			</p>
		</div>
	</footer>
</div>

<!-- Signup Modal -->
<Signup {form} bind:open={signupOpen} />

<style>
	.icon-tooltip {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 0.5rem;
		padding: 0.5rem 0.75rem;
		background: var(--color-secondary-800);
		border-radius: 0.375rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
		white-space: nowrap;
		z-index: 50;
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-secondary-100);
		transition:
			opacity 0.15s ease-in-out,
			visibility 0.15s ease-in-out;
		pointer-events: none;
	}

	.icon-tooltip::before {
		content: '';
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		border: 6px solid transparent;
		border-bottom-color: var(--color-secondary-800);
	}

	:global(.dark) .icon-tooltip {
		background: var(--color-secondary-700);
	}

	:global(.dark) .icon-tooltip::before {
		border-bottom-color: var(--color-secondary-700);
	}
</style>
