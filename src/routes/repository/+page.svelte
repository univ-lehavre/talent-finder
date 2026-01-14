<script lang="ts">
	import type { PageData } from './$types';
	import { Icon } from '$lib/ui';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const formatDate = (date: Date | null): string => {
		if (!date) return 'N/A';
		return date.toLocaleDateString('fr-FR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	};
</script>

<svelte:head>
	<title>Repository Stats - Talent Finder</title>
</svelte:head>

<div class="min-h-screen bg-secondary-50 dark:bg-secondary-900 py-8 transition-colors duration-200">
	<div class="max-w-6xl mx-auto px-4">
		<h1 class="text-3xl font-bold text-secondary-900 dark:text-white mb-8">
			Statistiques du dépôt
		</h1>

		{#if data.error}
			<div class="alert-error">
				{data.error}
			</div>
		{:else if data.stats}
			<!-- GitHub Links -->
			{#if data.githubUrls?.repository}
				<div class="card mb-6">
					<h2 class="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
						Liens GitHub
					</h2>
					<div class="flex flex-wrap gap-4">
						{#if data.githubUrls.repository}
							<a
								href={data.githubUrls.repository}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center px-4 py-2 bg-secondary-900 dark:bg-secondary-700 text-white rounded-lg hover:bg-secondary-700 dark:hover:bg-secondary-600 transition-colors"
							>
								<Icon icon="mdi:github" width={20} height={20} class="mr-2" />
								Dépôt
							</a>
						{/if}
						{#if data.githubUrls.issues}
							<a
								href={data.githubUrls.issues}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center px-4 py-2 bg-success-600 text-white rounded-lg hover:bg-success-500 transition-colors"
							>
								Issues ({data.stats.github.issues.open} ouvertes)
							</a>
						{/if}
						{#if data.githubUrls.newIssue}
							<a
								href={data.githubUrls.newIssue}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors"
							>
								Nouvelle Issue
							</a>
						{/if}
						{#if data.githubUrls.pullRequests}
							<a
								href={data.githubUrls.pullRequests}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-500 transition-colors"
							>
								Pull Requests ({data.stats.github.pullRequests.open} ouvertes)
							</a>
						{/if}
						{#if data.githubUrls.discussions}
							<a
								href={data.githubUrls.discussions}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-600 transition-colors"
							>
								Discussions
							</a>
						{/if}
					</div>
				</div>
			{/if}

			<!-- Overview Stats -->
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
				<div class="card">
					<div class="text-sm text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
						Commits
					</div>
					<div class="text-3xl font-bold text-secondary-900 dark:text-white">
						{data.stats.totalCommits}
					</div>
				</div>
				<div class="card">
					<div class="text-sm text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
						Additions
					</div>
					<div class="text-3xl font-bold text-success-600 dark:text-success-500">
						+{data.stats.totalAdditions}
					</div>
				</div>
				<div class="card">
					<div class="text-sm text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
						Deletions
					</div>
					<div class="text-3xl font-bold text-error-600 dark:text-error-500">
						-{data.stats.totalDeletions}
					</div>
				</div>
				<div class="card">
					<div class="text-sm text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
						Net
					</div>
					<div class="text-3xl font-bold text-secondary-900 dark:text-white">
						{data.stats.totalAdditions - data.stats.totalDeletions > 0 ? '+' : ''}{data.stats
							.totalAdditions - data.stats.totalDeletions}
					</div>
				</div>
			</div>

			<!-- Date Range -->
			<div class="card mb-6">
				<h2 class="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Historique</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<div class="text-sm text-secondary-500 dark:text-secondary-400">Premier commit</div>
						<div class="text-secondary-900 dark:text-white">
							{formatDate(data.stats.firstCommitDate)}
						</div>
					</div>
					<div>
						<div class="text-sm text-secondary-500 dark:text-secondary-400">Dernier commit</div>
						<div class="text-secondary-900 dark:text-white">
							{formatDate(data.stats.lastCommitDate)}
						</div>
					</div>
				</div>
			</div>

			<!-- Code Stats -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
				<div class="card">
					<h2 class="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
						Code Source TypeScript
					</h2>
					<div class="space-y-3">
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400">Fichiers</span>
							<span class="font-semibold text-secondary-900 dark:text-white"
								>{data.stats.currentCode.files}</span
							>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400">Constantes exportées</span>
							<span class="font-semibold text-secondary-900 dark:text-white"
								>{data.stats.currentCode.constants}</span
							>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400">Fonctions exportées</span>
							<span class="font-semibold text-secondary-900 dark:text-white"
								>{data.stats.currentCode.functions}</span
							>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400"
								>Types/Interfaces exportés</span
							>
							<span class="font-semibold text-secondary-900 dark:text-white"
								>{data.stats.currentCode.types}</span
							>
						</div>
					</div>
				</div>

				<div class="card">
					<h2 class="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Tests</h2>
					<div class="space-y-3">
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400">Fichiers de test</span>
							<span class="font-semibold text-secondary-900 dark:text-white"
								>{data.stats.currentTests.files}</span
							>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400">Blocs describe</span>
							<span class="font-semibold text-secondary-900 dark:text-white"
								>{data.stats.currentTests.describes}</span
							>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400">Tests (it/test)</span>
							<span class="font-semibold text-secondary-900 dark:text-white"
								>{data.stats.currentTests.tests}</span
							>
						</div>
					</div>
				</div>
			</div>

			<!-- GitHub Stats -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
				<div class="card">
					<h2 class="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
						Issues GitHub
					</h2>
					<div class="space-y-3">
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400">Ouvertes</span>
							<span class="font-semibold text-success-600 dark:text-success-500"
								>{data.stats.github.issues.open}</span
							>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400">Fermées</span>
							<span class="font-semibold text-secondary-500 dark:text-secondary-400"
								>{data.stats.github.issues.closed}</span
							>
						</div>
					</div>
				</div>

				<div class="card">
					<h2 class="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
						Pull Requests GitHub
					</h2>
					<div class="space-y-3">
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400">Ouvertes</span>
							<span class="font-semibold text-accent-600 dark:text-accent-500"
								>{data.stats.github.pullRequests.open}</span
							>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400">Fermées</span>
							<span class="font-semibold text-secondary-500 dark:text-secondary-400"
								>{data.stats.github.pullRequests.closed}</span
							>
						</div>
					</div>
				</div>
			</div>

			<!-- Activity Timeline -->
			{#if data.stats.hourlyStats.length > 0}
				<div class="card">
					<h2 class="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
						Activité récente ({data.stats.hourlyStats.length} périodes)
					</h2>
					<div class="overflow-x-auto">
						<table class="min-w-full divide-y divide-secondary-200 dark:divide-secondary-700">
							<thead class="bg-secondary-50 dark:bg-secondary-700/50">
								<tr>
									<th
										class="px-4 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider"
										>Période</th
									>
									<th
										class="px-4 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider"
										>Commits</th
									>
									<th
										class="px-4 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider"
										>Additions</th
									>
									<th
										class="px-4 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider"
										>Deletions</th
									>
									<th
										class="px-4 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider"
										>Auteurs</th
									>
								</tr>
							</thead>
							<tbody
								class="bg-white dark:bg-secondary-800 divide-y divide-secondary-200 dark:divide-secondary-700"
							>
								{#each data.stats.hourlyStats.slice(-20).reverse() as period (period.period)}
									<tr>
										<td
											class="px-4 py-3 whitespace-nowrap text-sm text-secondary-900 dark:text-white"
											>{period.period}</td
										>
										<td
											class="px-4 py-3 whitespace-nowrap text-sm text-secondary-900 dark:text-white"
											>{period.commits}</td
										>
										<td
											class="px-4 py-3 whitespace-nowrap text-sm text-success-600 dark:text-success-500"
											>+{period.additions}</td
										>
										<td
											class="px-4 py-3 whitespace-nowrap text-sm text-error-600 dark:text-error-500"
											>-{period.deletions}</td
										>
										<td
											class="px-4 py-3 whitespace-nowrap text-sm text-secondary-500 dark:text-secondary-400"
											>{period.authors.join(', ')}</td
										>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			{/if}
		{/if}
	</div>
</div>
