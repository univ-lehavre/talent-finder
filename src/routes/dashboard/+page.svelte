<script lang="ts">
	interface Props {
		data: {
			user: { email: string } | null;
		};
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Dashboard - Talent Finder</title>
	<meta name="description" content="Your personal dashboard on Talent Finder" />
</svelte:head>

<div class="container-app py-12">
	<div class="max-w-4xl mx-auto">
		<h1 class="text-3xl font-bold mb-2">Dashboard</h1>
		<p class="text-secondary-600 mb-8">
			Welcome back{data.user ? `, ${data.user.email}` : ''}.
		</p>

		<div class="grid md:grid-cols-2 gap-6">
			<!-- Profile Card -->
			<div class="card">
				<h2 class="text-xl font-semibold mb-4 text-secondary-900">Your Profile</h2>
				<div class="space-y-3">
					<div>
						<span class="text-sm text-secondary-500">Email</span>
						<p class="text-secondary-900">{data.user?.email ?? 'Not logged in'}</p>
					</div>
				</div>
				<div class="mt-6">
					<span
						class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
					>
						Profile incomplete
					</span>
				</div>
			</div>

			<!-- Quick Actions Card -->
			<div class="card">
				<h2 class="text-xl font-semibold mb-4 text-secondary-900">Quick Actions</h2>
				<div class="space-y-3">
					<a
						href="/repository"
						class="flex items-center gap-3 p-3 rounded-lg border border-secondary-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
					>
						<svg
							class="w-5 h-5 text-primary-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
							/>
						</svg>
						<div>
							<p class="font-medium text-secondary-900">View Repository Stats</p>
							<p class="text-sm text-secondary-500">Explore code statistics and analytics</p>
						</div>
					</a>
					<a
						href="/api/docs"
						class="flex items-center gap-3 p-3 rounded-lg border border-secondary-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
					>
						<svg
							class="w-5 h-5 text-primary-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
						<div>
							<p class="font-medium text-secondary-900">API Documentation</p>
							<p class="text-sm text-secondary-500">Browse the REST API reference</p>
						</div>
					</a>
				</div>
			</div>
		</div>

		<!-- Coming Soon Section -->
		<div class="mt-8 p-6 bg-secondary-50 rounded-lg border border-secondary-200">
			<h2 class="text-lg font-semibold mb-2 text-secondary-900">Coming Soon</h2>
			<p class="text-secondary-600 mb-4">
				We're working on new features to help you manage your profile and discover collaborators.
			</p>
			<ul class="space-y-2 text-secondary-600">
				<li class="flex items-center gap-2">
					<svg
						class="w-4 h-4 text-primary-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
					Complete profile with skills and expertise
				</li>
				<li class="flex items-center gap-2">
					<svg
						class="w-4 h-4 text-primary-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
					Search and discover other researchers
				</li>
				<li class="flex items-center gap-2">
					<svg
						class="w-4 h-4 text-primary-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
					Connect and collaborate on projects
				</li>
			</ul>
		</div>
	</div>
</div>
