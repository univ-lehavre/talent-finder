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

<!-- Partners Section -->
<section
	class="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 md:py-24 transition-colors duration-200"
>
	<div class="container-app">
		<h2 class="text-3xl font-bold text-center mb-4">Our Partners</h2>
		<p class="text-primary-100 text-center mb-8 max-w-3xl mx-auto">
			Talent Finder is a sub-project of <strong class="text-white">ECRIN</strong>, fostering
			cooperation between researchers from Université Le Havre Normandie, Campus Polytechnique des
			Territoires Maritimes et Portuaires, and EUNICoast.
		</p>
	</div>
</section>

<!-- Université Le Havre Normandie Section -->
<section class="bg-white dark:bg-secondary-900 py-16 md:py-24 transition-colors duration-200">
	<div class="container-app">
		<div class="flex flex-col md:flex-row items-center gap-8">
			<div class="md:w-1/3 flex justify-center">
				<a
					href="https://www.univ-lehavre.fr/"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:opacity-80 transition-opacity"
				>
					<img
						src="/logos/ulhn.svg"
						alt="Université Le Havre Normandie"
						class="max-h-24 md:max-h-32 w-auto object-contain"
					/>
				</a>
			</div>
			<div class="md:w-2/3">
				<h2 class="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">
					<a
						href="https://www.univ-lehavre.fr/"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
					>
						Université Le Havre Normandie
					</a>
				</h2>
				<p class="text-secondary-600 dark:text-secondary-400 mb-4">
					<strong>Université Le Havre Normandie</strong> is a French public higher education and research
					institution with over 7,000 students from 85 nationalities. It offers 120+ diplomas across Arts,
					Law, Human Sciences, and Science & Technology, supported by 12 research laboratories.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CPTMP Section -->
<section
	class="bg-secondary-50 dark:bg-secondary-800 py-16 md:py-24 transition-colors duration-200"
>
	<div class="container-app">
		<div class="flex flex-col md:flex-row-reverse items-center gap-8">
			<div class="md:w-1/3 flex justify-center">
				<a
					href="https://www.cptmp.fr/"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:opacity-80 transition-opacity"
				>
					<img
						src="/logos/cptmp.png"
						alt="Campus Polytechnique des Territoires Maritimes et Portuaires"
						class="max-h-24 md:max-h-32 w-auto object-contain"
					/>
				</a>
			</div>
			<div class="md:w-2/3">
				<h2 class="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">
					<a
						href="https://www.cptmp.fr/"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
					>
						CPTMP
					</a>
				</h2>
				<p class="text-secondary-600 dark:text-secondary-400 mb-4">
					The <strong>Campus Polytechnique des Territoires Maritimes et Portuaires</strong> is an open-air
					laboratory unique in Europe. This interdisciplinary consortium unites 12 partners including
					CNRS, INSA Rouen Normandie, ENSM, ENSA Normandie, and Sciences Po.
				</p>
			</div>
		</div>
		<div class="grid md:grid-cols-3 gap-6 mt-8">
			<div class="card text-center">
				<h3 class="text-lg font-semibold mb-2 text-primary-700 dark:text-primary-400">
					Smart City
				</h3>
				<p class="text-secondary-600 dark:text-secondary-400 text-sm">
					Urban logistics, sustainable mobility, reuse, pedagogical innovation, air and water
					quality
				</p>
			</div>
			<div class="card text-center">
				<h3 class="text-lg font-semibold mb-2 text-primary-700 dark:text-primary-400">
					Maritime and Port
				</h3>
				<p class="text-secondary-600 dark:text-secondary-400 text-sm">
					Cybersecurity, drones, sail transport, data platforms, financial engineering
				</p>
			</div>
			<div class="card text-center">
				<h3 class="text-lg font-semibold mb-2 text-primary-700 dark:text-primary-400">
					Energy and Industry
				</h3>
				<p class="text-secondary-600 dark:text-secondary-400 text-sm">
					Digital transition, material recovery, new energy production
				</p>
			</div>
		</div>
	</div>
</section>

<!-- EUNICoast Section -->
<section class="bg-white dark:bg-secondary-900 py-16 md:py-24 transition-colors duration-200">
	<div class="container-app">
		<div class="flex flex-col md:flex-row items-center gap-8">
			<div class="md:w-1/3 flex justify-center">
				<a
					href="https://eunicoast.eu/"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:opacity-80 transition-opacity"
				>
					<img src="/logos/eunicoast.png" alt="EUNICoast" class="h-24 md:h-32" />
				</a>
			</div>
			<div class="md:w-2/3">
				<h2 class="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">
					<a
						href="https://eunicoast.eu/"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
					>
						EUNICoast
					</a>
				</h2>
				<p class="text-secondary-600 dark:text-secondary-400 mb-4">
					<strong>EUNICoast</strong> (European University of Islands, Ports and Coastal Territories) is
					an alliance of 12 higher education institutions and 88 associated partners across 11 European
					countries, coordinated by Université Le Havre Normandie.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
			<div class="card text-center py-4">
				<h3 class="text-sm font-semibold text-primary-700 dark:text-primary-400">
					Local identities and cultures
				</h3>
			</div>
			<div class="card text-center py-4">
				<h3 class="text-sm font-semibold text-primary-700 dark:text-primary-400">
					Blue economy and sustainable tourism
				</h3>
			</div>
			<div class="card text-center py-4">
				<h3 class="text-sm font-semibold text-primary-700 dark:text-primary-400">
					Coastal governance
				</h3>
			</div>
			<div class="card text-center py-4">
				<h3 class="text-sm font-semibold text-primary-700 dark:text-primary-400">
					Biodiversity and environmental health
				</h3>
			</div>
			<div class="card text-center py-4">
				<h3 class="text-sm font-semibold text-primary-700 dark:text-primary-400">
					Maritime technologies
				</h3>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-secondary-50 dark:bg-secondary-800 py-16 transition-colors duration-200">
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
