<script lang="ts">
	import InfoCard from './InfoCard.svelte';
	import KeyValue from './KeyValue.svelte';
	import Badge from './Badge.svelte';

	/**
	 * ProfileCard - User profile summary card
	 *
	 * Displays user profile information with email and profile status.
	 * Uses InfoCard for consistent styling.
	 *
	 * @example
	 * ```svelte
	 * <ProfileCard email="user@example.com" isComplete={false} />
	 * ```
	 */
	interface Props {
		/** User email address */
		email?: string;
		/** Whether the profile is complete */
		isComplete?: boolean;
		/** Additional CSS classes */
		class?: string;
	}

	let { email, isComplete = false, class: className = '' }: Props = $props();
</script>

<InfoCard title="Your Profile" icon="lucide:user" class={className}>
	<div class="profile-content">
		<KeyValue label="Email" value={email ?? 'Not logged in'} direction="vertical" />
		<div class="profile-status">
			<Badge variant={isComplete ? 'success' : 'warning'}>
				{isComplete ? 'Profile complete' : 'Profile incomplete'}
			</Badge>
		</div>
	</div>
</InfoCard>

<style>
	.profile-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.profile-status {
		margin-top: var(--spacing-sm);
	}
</style>
