<script lang="ts">
	const features = [
		{ title: 'Fast', description: 'Built with SvelteKit for optimal performance' },
		{ title: 'Modern', description: 'Using Svelte 5 with runes and Tailwind CSS' },
		{ title: 'Scalable', description: 'Ready for growth with TypeScript' }
	];
</script>

<svelte:head>
	<title>Talent Finder</title>
	<meta name="description" content="Find and connect with talented professionals" />
</svelte:head>

<div class="min-h-screen">
	<!-- Hero Section -->
	<header class="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
		<div class="container-app py-20">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Talent Finder</h1>
			<p class="text-xl text-primary-100 mb-8 max-w-2xl">
				Find and connect with talented professionals. Your next great hire is just a search away.
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
	</header>

	<!-- Features Section -->
	<section class="container-app py-16">
		<h2 class="text-3xl font-bold text-center mb-12">Why Talent Finder?</h2>
		<div class="grid md:grid-cols-3 gap-8">
			{#each features as feature}
				<div class="card hover:shadow-lg transition-shadow">
					<h3 class="text-xl font-semibold mb-2 text-primary-700">{feature.title}</h3>
					<p class="text-secondary-600">{feature.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Design System Preview -->
	<section class="bg-secondary-100 py-16">
		<div class="container-app">
			<h2 class="text-3xl font-bold text-center mb-12">Design System Preview</h2>

			<!-- Buttons -->
			<div class="card mb-8">
				<h3 class="text-xl font-semibold mb-4">Buttons</h3>
				<div class="flex flex-wrap gap-4">
					<button class="btn-primary">Primary</button>
					<button class="btn-secondary">Secondary</button>
					<button class="btn-accent">Accent</button>
					<button class="btn-outline">Outline</button>
					<button class="btn-ghost">Ghost</button>
				</div>
				<div class="flex flex-wrap gap-4 mt-4">
					<button class="btn-primary btn-sm">Small</button>
					<button class="btn-primary">Default</button>
					<button class="btn-primary btn-lg">Large</button>
				</div>
			</div>

			<!-- Badges -->
			<div class="card mb-8">
				<h3 class="text-xl font-semibold mb-4">Badges</h3>
				<div class="flex flex-wrap gap-2">
					<span class="badge-primary">Primary</span>
					<span class="badge-accent">Accent</span>
					<span class="badge-success">Success</span>
					<span class="badge-warning">Warning</span>
					<span class="badge-error">Error</span>
				</div>
			</div>

			<!-- Inputs -->
			<div class="card mb-8">
				<h3 class="text-xl font-semibold mb-4">Form Elements</h3>
				<div class="grid md:grid-cols-2 gap-4">
					<div>
						<label class="label" for="demo-input">Default Input</label>
						<input class="input" id="demo-input" type="text" placeholder="Enter text..." />
					</div>
					<div>
						<label class="label" for="demo-error">Error Input</label>
						<input
							class="input input-error"
							id="demo-error"
							type="text"
							placeholder="Invalid input"
						/>
					</div>
				</div>
			</div>

			<!-- Alerts -->
			<div class="card">
				<h3 class="text-xl font-semibold mb-4">Alerts</h3>
				<div class="space-y-4">
					<div class="alert-info">This is an informational message.</div>
					<div class="alert-success">Operation completed successfully!</div>
					<div class="alert-warning">Please review before proceeding.</div>
					<div class="alert-error">An error occurred. Please try again.</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-secondary-900 text-secondary-300 py-8">
		<div class="container-app text-center">
			<p>Talent Finder - Built with SvelteKit and Tailwind CSS</p>
		</div>
	</footer>
</div>
