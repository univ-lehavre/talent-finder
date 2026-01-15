<script lang="ts">
	import { Icon, LoadingSpinner, Alert } from '$lib/ui';
	import type { TInstitution } from '$lib/server/openalex';

	/** Debounce delay in milliseconds */
	const DEBOUNCE_MS = 300;

	/** Minimum query length to trigger search */
	const MIN_QUERY_LENGTH = 2;

	let searchQuery = $state('');
	let searchResults = $state<TInstitution[]>([]);
	let selectedOrganizations = $state<TInstitution[]>([]);
	let isLoading = $state(false);
	let error = $state<string | null>(null);
	let debounceTimer = $state<ReturnType<typeof setTimeout> | null>(null);

	/**
	 * Searches for institutions using the API.
	 * @param query - The search query string
	 */
	const searchInstitutions = async (query: string): Promise<void> => {
		if (query.length < MIN_QUERY_LENGTH) {
			searchResults = [];
			return;
		}

		isLoading = true;
		error = null;

		try {
			const response = await fetch(`/api/v1/institutions/search?q=${encodeURIComponent(query)}`);

			if (!response.ok) {
				throw new Error(`Search failed: ${response.status}`);
			}

			const data = await response.json();
			searchResults = data.institutions;
		} catch (err) {
			error = err instanceof Error ? err.message : 'An error occurred while searching';
			searchResults = [];
		} finally {
			isLoading = false;
		}
	};

	/**
	 * Handles input changes with debouncing.
	 */
	const handleInput = (): void => {
		if (debounceTimer) {
			clearTimeout(debounceTimer);
		}

		debounceTimer = setTimeout(() => {
			searchInstitutions(searchQuery);
		}, DEBOUNCE_MS);
	};

	/**
	 * Adds an organization to the selected pool.
	 * @param organization - The organization to add
	 */
	const addOrganization = (organization: TInstitution): void => {
		if (!selectedOrganizations.some((org) => org.id === organization.id)) {
			selectedOrganizations = [...selectedOrganizations, organization];
		}
		searchQuery = '';
		searchResults = [];
	};

	/**
	 * Removes an organization from the selected pool.
	 * @param organizationId - The ID of the organization to remove
	 */
	const removeOrganization = (organizationId: string): void => {
		selectedOrganizations = selectedOrganizations.filter((org) => org.id !== organizationId);
	};

	/**
	 * Formats a number for display.
	 * @param num - The number to format
	 */
	const formatNumber = (num: number | null): string => {
		if (num === null) return 'N/A';
		return new Intl.NumberFormat().format(num);
	};
</script>

<div class="card">
	<h2 class="text-xl font-semibold mb-4">Research Organization Search</h2>

	<!-- Search Input -->
	<div class="relative">
		<div class="relative">
			<Icon
				icon="lucide:search"
				width="20"
				height="20"
				class="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400"
			/>
			<input
				type="text"
				bind:value={searchQuery}
				oninput={handleInput}
				placeholder="Search for research organizations..."
				class="w-full pl-10 pr-10 py-2.5 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 placeholder-secondary-400 dark:placeholder-secondary-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
			/>
			{#if isLoading}
				<div class="absolute right-3 top-1/2 -translate-y-1/2">
					<LoadingSpinner size="sm" />
				</div>
			{/if}
		</div>

		<!-- Search Results Dropdown -->
		{#if searchResults.length > 0}
			<div
				class="absolute z-10 w-full mt-1 bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg shadow-lg max-h-64 overflow-y-auto"
			>
				{#each searchResults as result (result.id)}
					<button
						type="button"
						onclick={() => addOrganization(result)}
						class="w-full px-4 py-3 text-left hover:bg-primary-50 dark:hover:bg-primary-900/20 border-b border-secondary-100 dark:border-secondary-700 last:border-b-0 transition-colors"
					>
						<p class="font-medium text-secondary-900 dark:text-secondary-100">
							{result.displayName}
						</p>
						{#if result.location}
							<p class="text-sm text-secondary-500 dark:text-secondary-400">
								{result.location}
							</p>
						{/if}
						<p class="text-xs text-secondary-400 dark:text-secondary-500 mt-1">
							{formatNumber(result.worksCount)} works &middot; {formatNumber(result.citedByCount)} citations
						</p>
					</button>
				{/each}
			</div>
		{/if}

		<!-- Empty State for Search -->
		{#if searchQuery.length >= MIN_QUERY_LENGTH && !isLoading && searchResults.length === 0 && !error}
			<div
				class="absolute z-10 w-full mt-1 bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg shadow-lg p-4"
			>
				<p class="text-secondary-500 dark:text-secondary-400 text-center">
					No organizations found for "{searchQuery}"
				</p>
			</div>
		{/if}
	</div>

	<!-- Error State -->
	{#if error}
		<div class="mt-3">
			<Alert variant="error">
				{error}
			</Alert>
		</div>
	{/if}

	<!-- Selected Organizations Pool -->
	<div class="mt-6">
		<h3 class="text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-3">
			Selected Organizations ({selectedOrganizations.length})
		</h3>

		{#if selectedOrganizations.length === 0}
			<p class="text-sm text-secondary-500 dark:text-secondary-400 italic">
				No organizations selected. Use the search above to add organizations.
			</p>
		{:else}
			<div class="space-y-2">
				{#each selectedOrganizations as organization (organization.id)}
					<div
						class="flex items-center justify-between p-3 bg-secondary-50 dark:bg-secondary-700/50 rounded-lg border border-secondary-200 dark:border-secondary-600"
					>
						<div class="flex-1 min-w-0">
							<p class="font-medium text-secondary-900 dark:text-secondary-100 truncate">
								{organization.displayName}
							</p>
							{#if organization.location}
								<p class="text-sm text-secondary-500 dark:text-secondary-400 truncate">
									{organization.location}
								</p>
							{/if}
						</div>
						<button
							type="button"
							onclick={() => removeOrganization(organization.id)}
							class="ml-3 p-1.5 text-secondary-400 hover:text-error-600 dark:hover:text-error-400 hover:bg-error-50 dark:hover:bg-error-900/20 rounded transition-colors"
							aria-label="Remove {organization.displayName}"
						>
							<Icon icon="lucide:x" width="18" height="18" />
						</button>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
