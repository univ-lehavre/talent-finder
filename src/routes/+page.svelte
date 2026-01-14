<script lang="ts">
	import { Signup } from '$lib/ui';

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
	}

	let { data, form }: Props = $props();

	let signupOpen = $state(false);

	const features = [
		{
			title: 'Discover Talent',
			description: 'Find skilled professionals matching your specific requirements'
		},
		{
			title: 'Connect Easily',
			description: 'Reach out directly to potential candidates or collaborators'
		},
		{
			title: 'Build Teams',
			description: 'Assemble the perfect team for your projects and research'
		}
	];

	const openSignup = (): void => {
		signupOpen = true;
	};
</script>

<svelte:head>
	<title>Talent Finder</title>
	<meta name="description" content="Find and connect with talented professionals" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<!-- Navigation -->
	<nav class="bg-white border-b border-secondary-200">
		<div class="container-app py-4 flex items-center justify-between">
			<a href="/" class="flex items-center gap-2">
				<img src="/favicon.svg" alt="" class="h-8 w-8" />
				<span class="text-xl font-bold text-primary-700">Talent Finder</span>
			</a>
			<div class="flex items-center gap-4">
				<a href="/repository" class="text-secondary-600 hover:text-primary-600 text-sm">
					Repository
				</a>
				<a href="/api/docs" class="text-secondary-600 hover:text-primary-600 text-sm"> API Docs </a>
				<a href="/design-system" class="text-secondary-600 hover:text-primary-600 text-sm">
					Design System
				</a>
				<a
					href="https://zenodo.org/records/18241664"
					target="_blank"
					rel="noopener noreferrer"
					class="text-secondary-600 hover:text-primary-600 text-sm"
				>
					Archive
				</a>
				{#if data.user}
					<span class="text-sm text-secondary-600">{data.user.email}</span>
					<form method="post" action="?/logout">
						<button type="submit" class="btn-secondary btn-sm">Déconnexion</button>
					</form>
				{:else}
					<button type="button" class="btn-primary btn-sm" onclick={openSignup}>Sign In</button>
				{/if}
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<header class="bg-gradient-to-br from-primary-600 to-primary-800 text-white flex-grow">
		<div class="container-app py-20 md:py-32">
			<div class="max-w-3xl">
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
					Find the Right Talent for Your Projects
				</h1>
				<p class="text-xl text-primary-100 mb-8">
					Connect with skilled professionals, researchers, and experts. Build your team and bring
					your ideas to life.
				</p>
				<div class="flex flex-wrap gap-4">
					{#if data.user}
						<button class="btn-primary btn-lg bg-white text-primary-700 hover:bg-primary-50">
							Dashboard
						</button>
					{:else}
						<button
							type="button"
							class="btn-primary btn-lg bg-white text-primary-700 hover:bg-primary-50"
							onclick={openSignup}
						>
							Get Started
						</button>
					{/if}
					<button class="btn-outline btn-lg border-white text-white hover:bg-white/10">
						Learn More
					</button>
				</div>
			</div>
		</div>
	</header>

	<!-- Features Section -->
	<section class="bg-secondary-50 py-16 md:py-24">
		<div class="container-app">
			<h2 class="text-3xl font-bold text-center mb-12">Why Talent Finder?</h2>
			<div class="grid md:grid-cols-3 gap-8">
				{#each features as feature (feature.title)}
					<div class="card hover:shadow-lg transition-shadow text-center">
						<h3 class="text-xl font-semibold mb-3 text-primary-700">{feature.title}</h3>
						<p class="text-secondary-600">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="bg-white py-16">
		<div class="container-app text-center">
			<h2 class="text-3xl font-bold mb-4">Ready to Find Your Next Collaborator?</h2>
			<p class="text-secondary-600 mb-8 max-w-xl mx-auto">
				Join our platform today and start connecting with talented professionals from around the
				world.
			</p>
			{#if data.user}
				<button class="btn-primary btn-lg">Access Dashboard</button>
			{:else}
				<button type="button" class="btn-primary btn-lg" onclick={openSignup}>Create Account</button
				>
			{/if}
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-secondary-900 text-secondary-300 py-8">
		<div class="container-app text-center">
			<p class="mb-2">Talent Finder</p>
			<p class="text-sm text-secondary-500">Built with SvelteKit and Tailwind CSS</p>
		</div>
	</footer>
</div>

<!-- Signup Modal -->
<Signup {form} bind:open={signupOpen} />
