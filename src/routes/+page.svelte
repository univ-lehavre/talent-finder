<script lang="ts">
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
</script>

<svelte:head>
	<title>Talent Finder</title>
	<meta name="description" content="Find and connect with talented professionals" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<!-- Navigation -->
	<nav class="bg-white border-b border-secondary-200">
		<div class="container-app py-4 flex items-center justify-between">
			<span class="text-xl font-bold text-primary-700">Talent Finder</span>
			<div class="flex items-center gap-4">
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href="/design-system" class="text-secondary-600 hover:text-primary-600 text-sm">
					Design System
				</a>
				<button class="btn-primary btn-sm">Sign In</button>
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
					<button class="btn-primary btn-lg bg-white text-primary-700 hover:bg-primary-50">
						Get Started
					</button>
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
			<button class="btn-primary btn-lg">Create Account</button>
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
