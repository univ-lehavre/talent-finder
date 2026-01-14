<script lang="ts">
	import { LoadingSpinner } from '$lib/ui';
</script>

<svelte:head>
	<title>Login - Talent Finder</title>
</svelte:head>

<div
	class="min-h-screen flex items-center justify-center bg-secondary-50 dark:bg-secondary-900 transition-colors duration-200"
>
	<div class="text-center">
		<h1 class="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
			Logging in...
		</h1>
		<LoadingSpinner size="md" variant="primary" label="Checking your credentials..." />
		<p class="mt-4 text-secondary-600 dark:text-secondary-400">
			Please wait while we verify your credentials.
		</p>
	</div>
</div>
