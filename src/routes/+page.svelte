<script lang="ts">
	import { content } from '$lib/content/home';

	interface Props {
		data: {
			user: { email: string } | null;
		};
	}

	let { data }: Props = $props();

	const scrollToHowItWorks = (): void => {
		document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<svelte:head>
	<title>ECRIN | Talent finder</title>
	<meta name="description" content="Find and connect with talented professionals" />
</svelte:head>

<!-- Hero Section -->
<header class="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
	<div class="container-app py-20 md:py-32">
		<div class="max-w-3xl">
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
				{content.hero.title}
			</h1>
			<p class="text-xl text-primary-100 mb-8">
				{content.hero.subtitle}
			</p>
			<div class="flex flex-wrap gap-4">
				{#if data.user}
					<a
						href="/dashboard"
						class="btn-primary btn-lg bg-white text-primary-700 hover:bg-primary-50"
					>
						{content.hero.ctaLoggedIn}
					</a>
				{:else}
					<a
						href="/repository"
						class="btn-primary btn-lg bg-white text-primary-700 hover:bg-primary-50"
					>
						{content.hero.ctaLoggedOut}
					</a>
				{/if}
				<button
					type="button"
					class="btn-outline btn-lg border-white text-white hover:bg-white/10"
					onclick={scrollToHowItWorks}
				>
					{content.hero.learnMore}
				</button>
			</div>
		</div>
	</div>
</header>

<!-- How it Works Section -->
<section
	id="how-it-works"
	class="bg-white dark:bg-secondary-900 py-16 md:py-24 scroll-mt-16 transition-colors duration-200"
>
	<div class="container-app">
		<h2 class="text-3xl font-bold text-center mb-4 text-secondary-900 dark:text-white">
			{content.howItWorks.title}
		</h2>
		<p class="text-secondary-600 dark:text-secondary-400 text-center mb-12 max-w-3xl mx-auto">
			{content.howItWorks.subtitle}
		</p>
		<div class="grid md:grid-cols-3 gap-8">
			{#each content.howItWorks.steps as step (step.number)}
				<div class="text-center">
					<div
						class="w-16 h-16 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
					>
						{step.number}
					</div>
					<h3 class="text-xl font-semibold mb-3 text-secondary-900 dark:text-white">
						{step.title}
					</h3>
					<p class="text-secondary-600 dark:text-secondary-400">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- State of the Art Section -->
<section
	class="bg-secondary-50 dark:bg-secondary-800 py-16 md:py-24 transition-colors duration-200"
>
	<div class="container-app">
		<h2 class="text-3xl font-bold text-center mb-4 text-secondary-900 dark:text-white">
			{content.challenges.title}
		</h2>
		<p class="text-secondary-600 dark:text-secondary-400 text-center mb-12 max-w-3xl mx-auto">
			{content.challenges.subtitle}
		</p>
		<div class="grid md:grid-cols-3 gap-8">
			{#each content.challenges.items as challenge (challenge.title)}
				<div class="card hover:shadow-lg transition-shadow">
					<h3 class="text-lg font-semibold mb-3 text-secondary-900 dark:text-white">
						{challenge.title}
					</h3>
					<p class="text-secondary-600 dark:text-secondary-400 text-sm mb-4">{challenge.problem}</p>
					<p class="text-primary-700 dark:text-primary-400 text-sm font-medium">
						{challenge.solution}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-white dark:bg-secondary-900 py-16 transition-colors duration-200">
	<div class="container-app text-center">
		<h2 class="text-3xl font-bold mb-4 text-secondary-900 dark:text-white">{content.cta.title}</h2>
		<p class="text-secondary-600 dark:text-secondary-400 mb-8 max-w-3xl mx-auto">
			{content.cta.subtitle}
		</p>
		{#if data.user}
			<a href="/dashboard" class="btn-primary btn-lg">{content.cta.buttonLoggedIn}</a>
		{:else}
			<a href="/repository" class="btn-primary btn-lg">{content.cta.buttonLoggedOut}</a>
		{/if}
	</div>
</section>
