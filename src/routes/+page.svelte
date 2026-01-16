<script lang="ts">
	import { content } from '$lib/content/home';
	import {
		Hero,
		LandingSection,
		Grid,
		StepCard,
		ChallengeCard,
		CTASection,
		PartnerSection,
		TagCard,
		FeatureCard
	} from '$lib/ui';

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
<Hero title={content.hero.title} subtitle={content.hero.subtitle}>
	{#snippet actions()}
		{#if data.user}
			<a href="/dashboard" class="btn-primary btn-lg bg-white text-primary-700 hover:bg-primary-50">
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
	{/snippet}
</Hero>

<!-- How it Works Section -->
<LandingSection
	id="how-it-works"
	title={content.howItWorks.title}
	description={content.howItWorks.subtitle}
	variant="default"
	class="scroll-mt-16"
>
	<Grid cols={3}>
		{#each content.howItWorks.steps as step (step.number)}
			<StepCard number={step.number} title={step.title} description={step.description} />
		{/each}
	</Grid>
</LandingSection>

<!-- State of the Art Section -->
<LandingSection
	title={content.challenges.title}
	description={content.challenges.subtitle}
	variant="surface"
>
	<Grid cols={3}>
		{#each content.challenges.items as challenge (challenge.title)}
			<ChallengeCard
				title={challenge.title}
				problem={challenge.problem}
				solution={challenge.solution}
			/>
		{/each}
	</Grid>
</LandingSection>

<!-- Partners Section -->
<CTASection
	title="Our Partners"
	subtitle="Talent Finder is a sub-project of ECRIN, fostering cooperation between researchers from Université Le Havre Normandie, Campus Polytechnique des Territoires Maritimes et Portuaires, and EUNICoast."
	variant="gradient"
/>

<!-- Université Le Havre Normandie Section -->
<PartnerSection
	href="https://www.univ-lehavre.fr/"
	logoSrc="/logos/ulhn.svg"
	logoAlt="Université Le Havre Normandie"
	title="Université Le Havre Normandie"
	variant="default"
>
	<p>
		<strong>Université Le Havre Normandie</strong> is a French public higher education and research institution
		with over 7,000 students from 85 nationalities. It offers 120+ diplomas across Arts, Law, Human Sciences,
		and Science & Technology, supported by 12 research laboratories.
	</p>
</PartnerSection>

<!-- CPTMP Section -->
<PartnerSection
	href="https://www.cptmp.fr/"
	logoSrc="/logos/cptmp.png"
	logoAlt="Campus Polytechnique des Territoires Maritimes et Portuaires"
	title="CPTMP"
	variant="surface"
	logoPosition="right"
>
	<p>
		The <strong>Campus Polytechnique des Territoires Maritimes et Portuaires</strong> is an open-air laboratory
		unique in Europe. This interdisciplinary consortium unites 12 partners including CNRS, INSA Rouen
		Normandie, ENSM, ENSA Normandie, and Sciences Po.
	</p>
	{#snippet extra()}
		<Grid cols={3}>
			<FeatureCard
				title="Smart City"
				description="Urban logistics, sustainable mobility, reuse, pedagogical innovation, air and water quality"
			/>
			<FeatureCard
				title="Maritime and Port"
				description="Cybersecurity, drones, sail transport, data platforms, financial engineering"
			/>
			<FeatureCard
				title="Energy and Industry"
				description="Digital transition, material recovery, new energy production"
			/>
		</Grid>
	{/snippet}
</PartnerSection>

<!-- EUNICoast Section -->
<PartnerSection
	href="https://eunicoast.eu/"
	logoSrc="/logos/eunicoast.png"
	logoAlt="EUNICoast"
	title="EUNICoast"
	variant="default"
>
	<p>
		<strong>EUNICoast</strong> (European University of Islands, Ports and Coastal Territories) is an alliance
		of 12 higher education institutions and 88 associated partners across 11 European countries, coordinated
		by Université Le Havre Normandie.
	</p>
	{#snippet extra()}
		<div class="grid grid-cols-2 md:grid-cols-5 gap-4">
			<TagCard label="Local identities and cultures" size="sm" />
			<TagCard label="Blue economy and sustainable tourism" size="sm" />
			<TagCard label="Coastal governance" size="sm" />
			<TagCard label="Biodiversity and environmental health" size="sm" />
			<TagCard label="Maritime technologies" size="sm" />
		</div>
	{/snippet}
</PartnerSection>

<!-- CTA Section -->
<CTASection title={content.cta.title} subtitle={content.cta.subtitle}>
	{#snippet actions()}
		{#if data.user}
			<a href="/dashboard" class="btn-primary btn-lg">{content.cta.buttonLoggedIn}</a>
		{:else}
			<a href="/repository" class="btn-primary btn-lg">{content.cta.buttonLoggedOut}</a>
		{/if}
	{/snippet}
</CTASection>
