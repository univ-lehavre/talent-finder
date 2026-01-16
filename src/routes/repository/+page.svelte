<script lang="ts">
	import type { PageData } from './$types';
	import {
		Alert,
		ButtonGroup,
		Card,
		DataTable,
		Grid,
		InfoCard,
		KeyValue,
		LinkButton,
		PageHeader,
		PageLayout,
		StatCard
	} from '$lib/ui';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	/**
	 * Format a date to French locale string
	 */
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

	/**
	 * Calculate net changes (additions - deletions)
	 */
	const netChanges = $derived.by(() => {
		if (!data.stats) return 0;
		return data.stats.totalAdditions - data.stats.totalDeletions;
	});

	/**
	 * Format net changes with sign
	 */
	const formatNet = (value: number): string => {
		return value > 0 ? `+${value}` : String(value);
	};

	/**
	 * Activity table columns definition
	 */
	type HourlyStatRow = {
		period: string;
		commits: number;
		additions: number;
		deletions: number;
		authors: string[];
	};

	const activityColumns = [
		{ key: 'period', label: 'Période' },
		{ key: 'commits', label: 'Commits' },
		{ key: 'additions', label: 'Additions' },
		{ key: 'deletions', label: 'Deletions' },
		{ key: 'authors', label: 'Auteurs' }
	];

	/**
	 * Reversed activity data (most recent first)
	 */
	const activityData = $derived.by((): HourlyStatRow[] => {
		if (!data.stats?.hourlyStats) return [];
		return data.stats.hourlyStats.slice(-20).reverse();
	});
</script>

<svelte:head>
	<title>Repository Stats - ECRIN | Talent finder</title>
</svelte:head>

<PageLayout maxWidth="xl">
	<PageHeader title="Statistiques du dépôt" class="mb-8" />

	{#if data.error}
		<Alert variant="error">
			{data.error}
		</Alert>
	{:else if data.stats}
		<!-- GitHub Links -->
		{#if data.githubUrls?.repository}
			<Card class="mb-6">
				<h2 class="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Liens GitHub</h2>
				<ButtonGroup>
					{#if data.githubUrls.repository}
						<LinkButton href={data.githubUrls.repository} variant="dark" icon="mdi:github" external>
							Dépôt
						</LinkButton>
					{/if}
					{#if data.githubUrls.issues}
						<LinkButton href={data.githubUrls.issues} variant="success" external>
							Issues ({data.stats.github.issues.open} ouvertes)
						</LinkButton>
					{/if}
					{#if data.githubUrls.newIssue}
						<LinkButton href={data.githubUrls.newIssue} variant="primary" external>
							Nouvelle Issue
						</LinkButton>
					{/if}
					{#if data.githubUrls.pullRequests}
						<LinkButton href={data.githubUrls.pullRequests} variant="accent" external>
							Pull Requests ({data.stats.github.pullRequests.open} ouvertes)
						</LinkButton>
					{/if}
					{#if data.githubUrls.discussions}
						<LinkButton href={data.githubUrls.discussions} variant="secondary" external>
							Discussions
						</LinkButton>
					{/if}
				</ButtonGroup>
			</Card>
		{/if}

		<!-- Overview Stats -->
		<Grid cols={4} gap="md" class="mb-6">
			<StatCard label="Commits" value={data.stats.totalCommits} />
			<StatCard label="Additions" value={data.stats.totalAdditions} variant="success" prefix="+" />
			<StatCard label="Deletions" value={data.stats.totalDeletions} variant="error" prefix="-" />
			<StatCard label="Net" value={formatNet(netChanges)} />
		</Grid>

		<!-- Date Range -->
		<Card class="mb-6">
			<h2 class="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Historique</h2>
			<Grid cols={2} gap="md">
				<KeyValue
					label="Premier commit"
					value={formatDate(data.stats.firstCommitDate)}
					direction="vertical"
				/>
				<KeyValue
					label="Dernier commit"
					value={formatDate(data.stats.lastCommitDate)}
					direction="vertical"
				/>
			</Grid>
		</Card>

		<!-- Code Stats -->
		<Grid cols={2} gap="lg" class="mb-6">
			<InfoCard title="Code Source TypeScript" icon="lucide:code">
				<div class="space-y-3">
					<KeyValue label="Fichiers" value={data.stats.currentCode.files} />
					<KeyValue label="Constantes exportées" value={data.stats.currentCode.constants} />
					<KeyValue label="Fonctions exportées" value={data.stats.currentCode.functions} />
					<KeyValue label="Types/Interfaces exportés" value={data.stats.currentCode.types} />
				</div>
			</InfoCard>

			<InfoCard title="Tests" icon="lucide:test-tube">
				<div class="space-y-3">
					<KeyValue label="Fichiers de test" value={data.stats.currentTests.files} />
					<KeyValue label="Blocs describe" value={data.stats.currentTests.describes} />
					<KeyValue label="Tests (it/test)" value={data.stats.currentTests.tests} />
				</div>
			</InfoCard>
		</Grid>

		<!-- GitHub Stats -->
		<Grid cols={2} gap="lg" class="mb-6">
			<InfoCard title="Issues GitHub" icon="lucide:circle-dot">
				<div class="space-y-3">
					<KeyValue label="Ouvertes" value={data.stats.github.issues.open} variant="success" />
					<KeyValue label="Fermées" value={data.stats.github.issues.closed} variant="muted" />
				</div>
			</InfoCard>

			<InfoCard title="Pull Requests GitHub" icon="lucide:git-pull-request">
				<div class="space-y-3">
					<KeyValue label="Ouvertes" value={data.stats.github.pullRequests.open} variant="accent" />
					<KeyValue label="Fermées" value={data.stats.github.pullRequests.closed} variant="muted" />
				</div>
			</InfoCard>
		</Grid>

		<!-- Activity Timeline -->
		{#if activityData.length > 0}
			<Card>
				<h2 class="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
					Activité récente ({data.stats.hourlyStats.length} périodes)
				</h2>
				<DataTable data={activityData} columns={activityColumns} caption="Activité du dépôt">
					{#snippet cell(item, column)}
						{#if column.key === 'additions'}
							<span class="text-success-600 dark:text-success-500">+{item.additions}</span>
						{:else if column.key === 'deletions'}
							<span class="text-error-600 dark:text-error-500">-{item.deletions}</span>
						{:else if column.key === 'authors'}
							<span class="text-secondary-500 dark:text-secondary-400">
								{item.authors.join(', ')}
							</span>
						{:else}
							{item[column.key as keyof HourlyStatRow]}
						{/if}
					{/snippet}
				</DataTable>
			</Card>
		{/if}
	{/if}
</PageLayout>
