<script lang="ts">
	import { Icon } from '$lib/ui';

	interface Props {
		data: {
			user: { email: string } | null;
		};
	}

	let { data }: Props = $props();

	interface QuickAction {
		href: string;
		icon: string;
		title: string;
		description: string;
		external?: boolean;
	}

	const quickActions: QuickAction[] = [
		{
			href: '/repository',
			icon: 'lucide:bar-chart-2',
			title: 'Repository Stats',
			description: 'Explore code statistics and analytics'
		},
		{
			href: '/api/docs',
			icon: 'lucide:code',
			title: 'API Documentation',
			description: 'Browse the REST API reference'
		},
		{
			href: '/theme',
			icon: 'lucide:palette',
			title: 'Theme Customization',
			description: 'Customize colors and fonts'
		},
		{
			href: 'https://doi.org/10.5281/zenodo.18241663',
			icon: 'lucide:archive',
			title: 'Archive',
			description: 'Zenodo permanent archive',
			external: true
		}
	];
</script>

<svelte:head>
	<title>Dashboard - Talent Finder</title>
	<meta name="description" content="Your personal dashboard on Talent Finder" />
</svelte:head>

<div class="container-app py-12">
	<div class="max-w-4xl mx-auto">
		<h1 class="text-3xl font-bold mb-2">Dashboard</h1>
		<p class="text-secondary-600 dark:text-secondary-400 mb-8">
			Welcome back{data.user ? `, ${data.user.email}` : ''}.
		</p>

		<div class="grid md:grid-cols-2 gap-6">
			<!-- Profile Card -->
			<div class="card">
				<h2 class="text-xl font-semibold mb-4">Your Profile</h2>
				<div class="space-y-3">
					<div>
						<span class="text-sm text-secondary-500 dark:text-secondary-400">Email</span>
						<p>{data.user?.email ?? 'Not logged in'}</p>
					</div>
				</div>
				<div class="mt-6">
					<span
						class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
					>
						Profile incomplete
					</span>
				</div>
			</div>

			<!-- Quick Actions Card -->
			<div class="card">
				<h2 class="text-xl font-semibold mb-4">Quick Actions</h2>
				<div class="space-y-3">
					{#each quickActions as action (action.href)}
						<a
							href={action.href}
							target={action.external ? '_blank' : undefined}
							rel={action.external ? 'noopener noreferrer' : undefined}
							title={action.external ? 'Opens in new tab' : undefined}
							class="flex items-center gap-3 p-3 rounded-lg border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
						>
							<Icon
								icon={action.icon}
								width="20"
								height="20"
								class="text-primary-600 dark:text-primary-400"
							/>
							<div class="flex-1">
								<p class="font-medium">{action.title}</p>
								<p class="text-sm text-secondary-500 dark:text-secondary-400">
									{action.description}
								</p>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Coming Soon Section -->
		<div
			class="mt-8 p-6 bg-secondary-50 dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700"
		>
			<h2 class="text-lg font-semibold mb-2">Coming Soon</h2>
			<p class="text-secondary-600 dark:text-secondary-400 mb-4">
				We're working on new features to help you manage your profile and discover collaborators.
			</p>
			<ul class="space-y-2 text-secondary-600 dark:text-secondary-400">
				<li class="flex items-center gap-2">
					<Icon icon="lucide:check" width="16" height="16" class="text-primary-500" />
					Complete profile with skills and expertise
				</li>
				<li class="flex items-center gap-2">
					<Icon icon="lucide:check" width="16" height="16" class="text-primary-500" />
					Search and discover other researchers
				</li>
				<li class="flex items-center gap-2">
					<Icon icon="lucide:check" width="16" height="16" class="text-primary-500" />
					Connect and collaborate on projects
				</li>
			</ul>
		</div>
	</div>
</div>
