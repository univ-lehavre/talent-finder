<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg?raw';
	import { Navbar, Footer, Signup, ConnectivityBanner } from '$lib/ui';
	import { createThemeStore, initTheme } from '$lib/stores';

	const version = __APP_VERSION__;

	const themeStore = createThemeStore();

	onMount(() => {
		initTheme();
	});

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

	const openSignup = (): void => {
		signupOpen = true;
	};

	/** Navigation links for desktop and mobile */
	const navLinks = $derived([
		{ href: '/', label: 'Home', icon: 'lucide:home' },
		...(data.user
			? [{ href: '/dashboard', label: 'Dashboard', icon: 'lucide:layout-dashboard' }]
			: [])
	]);

	/** Icon links for desktop navbar */
	const iconLinks = [
		{
			href: 'https://github.com/univ-lehavre/talent-finder',
			icon: 'mdi:github',
			label: 'GitHub',
			description: 'View source code',
			external: true
		}
	];

	/** Extra links for mobile menu only */
	const mobileExtraLinks = [
		{
			href: 'https://github.com/univ-lehavre/talent-finder',
			label: 'GitHub',
			icon: 'mdi:github',
			external: true
		}
	];

	/** Partner logos for footer */
	const partners = [
		{
			href: 'https://www.cptmp.fr/',
			src: '/logos/cptmp.png',
			alt: 'Campus Polytechnique des Territoires Maritimes et Portuaires'
		},
		{
			href: 'https://www.univ-lehavre.fr/',
			src: '/logos/ulhn.svg',
			alt: 'Université Le Havre Normandie'
		},
		{
			href: 'https://eunicoast.eu/',
			src: '/logos/eunicoast.png',
			alt: 'EUNICoast'
		}
	];

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
	<Navbar
		brandName="ECRIN | Talent finder"
		logoHtml={logo}
		{navLinks}
		{iconLinks}
		{mobileExtraLinks}
	>
		{#snippet actions()}
			{#if data.user}
				<span class="text-sm text-secondary-600 dark:text-secondary-300 hidden md:inline"
					>{data.user.email}</span
				>
				<p class="text-sm text-secondary-600 dark:text-secondary-400 mb-3 md:hidden">
					{data.user.email}
				</p>
				<form method="post" action="/?/logout">
					<button type="submit" class="btn-secondary btn-sm md:btn-sm md:w-auto w-full"
						>Déconnexion</button
					>
				</form>
			{:else}
				<button
					type="button"
					class="btn-primary btn-sm md:btn-sm md:w-auto w-full"
					onclick={openSignup}>Sign In</button
				>
			{/if}
		{/snippet}
	</Navbar>

	<!-- Connectivity Error Banner -->
	{#if data.connectivityError}
		<ConnectivityBanner error={data.connectivityError} />
	{/if}

	<!-- Main Content -->
	<main class="flex-grow">
		{@render children()}
	</main>

	<!-- Footer -->
	<Footer {partners} {version} />
</div>

<!-- Signup Modal -->
<Signup {form} bind:open={signupOpen} />
