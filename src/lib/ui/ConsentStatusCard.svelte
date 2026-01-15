<script lang="ts">
	import { onMount } from 'svelte';
	import { Icon, LoadingSpinner } from '$lib/ui';

	interface ConsentStatus {
		consentType: string;
		granted: boolean | null;
		updatedAt: string | null;
	}

	interface Props {
		/** User email to display in modal */
		userEmail?: string | null;
		/** Whether consent has been granted (bindable for parent components) */
		hasConsent?: boolean;
	}

	let { userEmail, hasConsent = $bindable(false) }: Props = $props();

	let isLoading = $state(true);
	let isSaving = $state(false);
	let error = $state<string | null>(null);
	let status = $state<ConsentStatus | null>(null);

	/** Current time for relative date calculation */
	let currentTime = $state(Date.now());

	/**
	 * Formats a relative time string from an ISO date.
	 */
	const formatRelativeTime = (isoDate: string | null): string => {
		if (!isoDate) return '';

		const date = new Date(isoDate);
		const elapsed = currentTime - date.getTime();
		const seconds = Math.floor(elapsed / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		if (seconds < 5) return 'just now';
		if (seconds < 60) return `${seconds}s ago`;
		if (minutes < 60) return `${minutes}m ago`;
		if (hours < 24) return `${hours}h ago`;
		if (days === 1) return 'yesterday';
		if (days < 7) return `${days} days ago`;

		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
		});
	};

	/**
	 * Fetches current consent status.
	 */
	const fetchStatus = async (): Promise<void> => {
		isLoading = true;
		error = null;

		try {
			const response = await fetch('/api/v1/consents/openalex_email');

			if (!response.ok) {
				const data = await response.json().catch(() => null);
				throw new Error(data?.message || `Request failed: ${response.status}`);
			}

			status = await response.json();
			hasConsent = status?.granted === true;
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to fetch consent status';
			status = null;
			hasConsent = false;
		} finally {
			isLoading = false;
		}
	};

	/**
	 * Grants consent.
	 */
	const handleGrant = async (): Promise<void> => {
		isSaving = true;
		error = null;

		try {
			const response = await fetch('/api/v1/consents/openalex_email', {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ granted: true })
			});

			if (!response.ok) {
				const data = await response.json().catch(() => null);
				throw new Error(data?.message || `Request failed: ${response.status}`);
			}

			status = await response.json();
			hasConsent = true;
			currentTime = Date.now();
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to grant consent';
		} finally {
			isSaving = false;
		}
	};

	/**
	 * Revokes consent.
	 */
	const handleRevoke = async (): Promise<void> => {
		isSaving = true;
		error = null;

		try {
			const response = await fetch('/api/v1/consents/openalex_email', {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ granted: false })
			});

			if (!response.ok) {
				const data = await response.json().catch(() => null);
				throw new Error(data?.message || `Request failed: ${response.status}`);
			}

			status = await response.json();
			hasConsent = false;
			currentTime = Date.now();
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to revoke consent';
		} finally {
			isSaving = false;
		}
	};

	onMount(() => {
		fetchStatus();

		// Update current time every minute for relative dates
		const interval = setInterval(() => {
			currentTime = Date.now();
		}, 60000);

		return () => clearInterval(interval);
	});
</script>

<div class="card">
	<div class="flex items-center gap-2 mb-4">
		<Icon
			icon="lucide:shield-check"
			width="20"
			height="20"
			class="text-primary-600 dark:text-primary-400"
		/>
		<h2 class="text-xl font-semibold">Data Consent</h2>
	</div>

	{#if isLoading}
		<div class="flex justify-center py-8">
			<LoadingSpinner size="lg" />
		</div>
	{:else if error && !status}
		<div class="text-center py-6">
			<Icon icon="lucide:alert-circle" width="40" height="40" class="mx-auto mb-3 text-error-400" />
			<p class="text-error-600 dark:text-error-400">{error}</p>
			<button
				type="button"
				onclick={fetchStatus}
				class="mt-4 text-sm text-primary-600 dark:text-primary-400 hover:underline"
			>
				Try again
			</button>
		</div>
	{:else}
		<!-- OpenAlex Email Consent -->
		<div class="space-y-4">
			<div
				class="p-4 rounded-lg border {status?.granted === true
					? 'bg-secondary-50 dark:bg-secondary-800 border-secondary-200 dark:border-secondary-700'
					: status?.granted === false
						? 'bg-secondary-50 dark:bg-secondary-800 border-secondary-200 dark:border-secondary-700'
						: 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800'}"
			>
				<div class="flex items-start gap-3">
					<Icon
						icon={status?.granted === true
							? 'lucide:check-circle'
							: status?.granted === false
								? 'lucide:x-circle'
								: 'lucide:help-circle'}
						width="20"
						height="20"
						class={status?.granted === true
							? 'text-secondary-600 dark:text-secondary-400 mt-0.5'
							: status?.granted === false
								? 'text-secondary-500 dark:text-secondary-400 mt-0.5'
								: 'text-primary-600 dark:text-primary-400 mt-0.5'}
					/>
					<div class="flex-1">
						<p class="font-medium text-secondary-900 dark:text-secondary-100">
							OpenAlex API Priority Access
						</p>
						<p class="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
							{#if status?.granted === true}
								Your email is shared with OpenAlex for faster queries (10x speed).
							{:else if status?.granted === false}
								You have declined to share your email with OpenAlex.
							{:else}
								Share your email with OpenAlex for faster research queries.
							{/if}
						</p>

						{#if status?.updatedAt}
							<p class="text-xs text-secondary-500 dark:text-secondary-500 mt-2">
								Updated {formatRelativeTime(status.updatedAt)}
							</p>
						{/if}

						{#if userEmail && (status?.granted === null || status?.granted === false)}
							<p class="text-xs text-secondary-500 dark:text-secondary-500 mt-2">
								Email: <strong class="text-secondary-700 dark:text-secondary-300"
									>{userEmail}</strong
								>
							</p>
						{/if}
					</div>
				</div>

				{#if error}
					<p class="text-sm text-error-600 dark:text-error-400 mt-3">{error}</p>
				{/if}

				<div class="mt-4 flex gap-2">
					{#if status?.granted === true}
						<button
							type="button"
							onclick={handleRevoke}
							disabled={isSaving}
							class="px-4 py-2 text-sm font-medium text-secondary-700 dark:text-secondary-300 bg-secondary-100 dark:bg-secondary-700 hover:bg-secondary-200 dark:hover:bg-secondary-600 rounded-lg transition-colors disabled:opacity-50"
						>
							{#if isSaving}
								<LoadingSpinner size="sm" />
							{:else}
								Revoke consent
							{/if}
						</button>
					{:else}
						<button
							type="button"
							onclick={handleGrant}
							disabled={isSaving}
							class="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-lg transition-colors disabled:opacity-50"
						>
							{#if isSaving}
								<LoadingSpinner size="sm" />
							{:else}
								Grant consent
							{/if}
						</button>
						{#if status?.granted === null}
							<button
								type="button"
								onclick={handleRevoke}
								disabled={isSaving}
								class="px-4 py-2 text-sm font-medium text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors disabled:opacity-50"
							>
								Decline
							</button>
						{/if}
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>
