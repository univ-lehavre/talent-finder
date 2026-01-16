<script lang="ts">
	import { Icon } from '$lib/ui';
	import { i18n } from '$lib/content';

	const ui = $derived(i18n.ui);

	interface Props {
		/** Type of connectivity error */
		error: 'appwrite_unavailable' | 'no_internet';
	}

	let { error }: Props = $props();

	const messages = $derived<
		Record<
			'appwrite_unavailable' | 'no_internet',
			{ title: string; description: string; icon: string }
		>
	>({
		appwrite_unavailable: {
			title: ui.connectivity.appwriteUnavailable.title,
			description: ui.connectivity.appwriteUnavailable.description,
			icon: 'lucide:server-off'
		},
		no_internet: {
			title: ui.connectivity.noInternet.title,
			description: ui.connectivity.noInternet.description,
			icon: 'lucide:wifi-off'
		}
	});

	const message = $derived(messages[error]);
</script>

<div
	class="bg-warning-50 dark:bg-warning-900/30 border-b border-warning-200 dark:border-warning-800"
	role="alert"
>
	<div class="container-app py-3">
		<div class="flex items-center gap-3">
			<Icon
				icon={message.icon}
				width="20"
				height="20"
				class="text-warning-600 dark:text-warning-400 flex-shrink-0"
			/>
			<div class="flex-1 min-w-0">
				<p class="text-sm font-medium text-warning-800 dark:text-warning-200">
					{message.title}
				</p>
				<p class="text-xs text-warning-600 dark:text-warning-400">
					{message.description}
				</p>
			</div>
			<a
				href="/api/v1/health"
				target="_blank"
				class="text-xs text-warning-600 dark:text-warning-400 hover:underline flex-shrink-0"
			>
				{ui.common.checkStatus}
			</a>
		</div>
	</div>
</div>
