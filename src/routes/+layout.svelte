<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Signup } from '$lib/ui';
	import { page } from '$app/stores';
	import * as icons from '$lib/icons';

	const isCurrentPage = (href: string): boolean => {
		return $page.url.pathname === href || $page.url.pathname.startsWith(href + '/');
	};

	interface Props {
		data: {
			user: { email: string } | null;
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
		icon: icons.dashboard
	};

	const publicNavLinks: NavLink[] = [
		{ href: '/repository', label: 'Repository', icon: icons.chartBar },
		{ href: '/api/docs', label: 'API Docs', icon: icons.code },
		{ href: '/design-system', label: 'Design System', icon: icons.colorSwatch },
		{
			href: 'https://doi.org/10.5281/zenodo.18241663',
			label: 'Archive',
			icon: icons.archive,
			external: true
		}
	];

	const navLinks = $derived(data.user ? [dashboardLink, ...publicNavLinks] : publicNavLinks);

	const mobileNavLinks = $derived([{ href: '/', label: 'Home', icon: icons.home }, ...navLinks]);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<!-- Navigation -->
	<nav class="bg-white border-b border-secondary-200 sticky top-0 z-50">
		<div class="container-app py-4 flex items-center justify-between">
			<a href="/" class="flex items-center gap-2">
				<img src="/favicon.svg" alt="" class="h-8 w-8" />
				<span class="text-xl font-bold text-primary-700">Talent Finder</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center gap-4">
				{#each navLinks as link (link.href)}
					{@const isCurrent = !link.external && isCurrentPage(link.href)}
					<a
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noopener noreferrer' : undefined}
						class="text-sm inline-flex items-center gap-1.5 {isCurrent
							? 'text-secondary-400 cursor-default pointer-events-none'
							: 'text-secondary-600 hover:text-primary-600'}"
						aria-current={isCurrent ? 'page' : undefined}
					>
						<svg
							class="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={link.icon} />
						</svg>
						{link.label}
						{#if link.external}
							<svg
								class="w-3 h-3"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d={icons.externalLink}
								/>
							</svg>
							<span class="sr-only">(opens in new tab)</span>
						{/if}
					</a>
				{/each}
				{#if data.user}
					<span class="text-sm text-secondary-600">{data.user.email}</span>
					<form method="post" action="/?/logout">
						<button type="submit" class="btn-secondary btn-sm">Déconnexion</button>
					</form>
				{:else}
					<button type="button" class="btn-primary btn-sm" onclick={openSignup}>Sign In</button>
				{/if}
			</div>

			<!-- Mobile Menu Button -->
			<button
				type="button"
				class="md:hidden p-2 text-secondary-600 hover:text-primary-600"
				onclick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d={mobileMenuOpen ? icons.x : icons.menu}
					/>
				</svg>
			</button>
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
		<div class="fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 md:hidden">
			<div class="p-4 border-b border-secondary-200 flex items-center justify-between">
				<span class="text-lg font-bold text-primary-700">Menu</span>
				<button
					type="button"
					class="p-2 text-secondary-600 hover:text-primary-600"
					onclick={closeMobileMenu}
					aria-label="Close menu"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icons.x} />
					</svg>
				</button>
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
						class="py-2 border-b border-secondary-100 flex items-center justify-between {isCurrent
							? 'text-secondary-400 cursor-default pointer-events-none'
							: 'text-secondary-700 hover:text-primary-600'}"
						onclick={closeMobileMenu}
						aria-current={isCurrent ? 'page' : undefined}
					>
						<span class="flex items-center gap-3">
							<svg
								class="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d={link.icon}
								/>
							</svg>
							{link.label}
						</span>
						{#if link.external}
							<svg
								class="w-4 h-4 text-secondary-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d={icons.externalLink}
								/>
							</svg>
							<span class="sr-only">(opens in new tab)</span>
						{/if}
					</a>
				{/each}
				<div class="pt-4 border-t border-secondary-200">
					{#if data.user}
						<p class="text-sm text-secondary-600 mb-3">{data.user.email}</p>
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

	<!-- Main Content -->
	<main class="flex-grow">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="bg-secondary-100 border-t border-secondary-200 py-8">
		<div class="container-app">
			<div class="flex flex-col md:flex-row items-center justify-center gap-8">
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
			<p class="text-center text-sm text-secondary-500 mt-6">
				Developed at Université Le Havre Normandie
			</p>
		</div>
	</footer>
</div>

<!-- Signup Modal -->
<Signup {form} bind:open={signupOpen} />
