<script lang="ts">
	import type { PageData } from './$types';

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
			<div
				class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-400"
			>
				{data.error}
			</div>
		{:else if data.stats}
			<!-- GitHub Links -->
			{#if data.githubUrls?.repository}
				<div
					class="bg-white dark:bg-secondary-800 rounded-lg shadow dark:shadow-black/20 p-6 mb-6 transition-colors duration-200"
				>
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
								<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
								Dépôt
							</a>
						{/if}
						{#if data.githubUrls.issues}
							<a
								href={data.githubUrls.issues}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
							>
								Issues ({data.stats.github.issues.open} ouvertes)
							</a>
						{/if}
						{#if data.githubUrls.newIssue}
							<a
								href={data.githubUrls.newIssue}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
							>
								Nouvelle Issue
							</a>
						{/if}
						{#if data.githubUrls.pullRequests}
							<a
								href={data.githubUrls.pullRequests}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
							>
								Pull Requests ({data.stats.github.pullRequests.open} ouvertes)
							</a>
						{/if}
						{#if data.githubUrls.discussions}
							<a
								href={data.githubUrls.discussions}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
							>
								Discussions
							</a>
						{/if}
					</div>
				</div>
			{/if}

			<!-- Overview Stats -->
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
				<div
					class="bg-white dark:bg-secondary-800 rounded-lg shadow dark:shadow-black/20 p-6 transition-colors duration-200"
				>
					<div class="text-sm text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
						Commits
					</div>
					<div class="text-3xl font-bold text-secondary-900 dark:text-white">
						{data.stats.totalCommits}
					</div>
				</div>
				<div
					class="bg-white dark:bg-secondary-800 rounded-lg shadow dark:shadow-black/20 p-6 transition-colors duration-200"
				>
					<div class="text-sm text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
						Additions
					</div>
					<div class="text-3xl font-bold text-green-600 dark:text-green-400">
						+{data.stats.totalAdditions}
					</div>
				</div>
				<div
					class="bg-white dark:bg-secondary-800 rounded-lg shadow dark:shadow-black/20 p-6 transition-colors duration-200"
				>
					<div class="text-sm text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
						Deletions
					</div>
					<div class="text-3xl font-bold text-red-600 dark:text-red-400">
						-{data.stats.totalDeletions}
					</div>
				</div>
				<div
					class="bg-white dark:bg-secondary-800 rounded-lg shadow dark:shadow-black/20 p-6 transition-colors duration-200"
				>
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
			<div
				class="bg-white dark:bg-secondary-800 rounded-lg shadow dark:shadow-black/20 p-6 mb-6 transition-colors duration-200"
			>
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
				<div
					class="bg-white dark:bg-secondary-800 rounded-lg shadow dark:shadow-black/20 p-6 transition-colors duration-200"
				>
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

				<div
					class="bg-white dark:bg-secondary-800 rounded-lg shadow dark:shadow-black/20 p-6 transition-colors duration-200"
				>
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
				<div
					class="bg-white dark:bg-secondary-800 rounded-lg shadow dark:shadow-black/20 p-6 transition-colors duration-200"
				>
					<h2 class="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
						Issues GitHub
					</h2>
					<div class="space-y-3">
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400">Ouvertes</span>
							<span class="font-semibold text-green-600 dark:text-green-400"
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

				<div
					class="bg-white dark:bg-secondary-800 rounded-lg shadow dark:shadow-black/20 p-6 transition-colors duration-200"
				>
					<h2 class="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
						Pull Requests GitHub
					</h2>
					<div class="space-y-3">
						<div class="flex justify-between items-center">
							<span class="text-secondary-600 dark:text-secondary-400">Ouvertes</span>
							<span class="font-semibold text-purple-600 dark:text-purple-400"
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
				<div
					class="bg-white dark:bg-secondary-800 rounded-lg shadow dark:shadow-black/20 p-6 transition-colors duration-200"
				>
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
											class="px-4 py-3 whitespace-nowrap text-sm text-green-600 dark:text-green-400"
											>+{period.additions}</td
										>
										<td class="px-4 py-3 whitespace-nowrap text-sm text-red-600 dark:text-red-400"
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
