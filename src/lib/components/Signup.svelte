<script lang="ts">
	import { Signup as BaseSignup } from '$lib/ui';
	import { i18n } from '$lib/content';

	/**
	 * Signup - Pre-configured signup modal with i18n labels.
	 *
	 * Wraps $lib/ui/Signup and injects content from i18n.
	 *
	 * @example
	 * ```svelte
	 * <Signup {form} bind:open />
	 * ```
	 */
	interface Props {
		form: {
			error?: boolean;
			message?: string;
			cause?: string;
			success?: boolean;
		} | null;
		open?: boolean;
		onclose?: () => void;
	}

	let { form, open = $bindable(false), onclose }: Props = $props();

	const auth = $derived(i18n.auth);

	const content = $derived({
		title: auth.modal.title,
		closeLabel: auth.modal.closeLabel,
		description: auth.modal.description,
		emailLabel: auth.modal.emailLabel,
		emailPlaceholder: auth.modal.emailPlaceholder,
		emailHint: auth.modal.emailHint,
		submitButton: auth.modal.submitButton,
		submitting: auth.modal.submitting,
		errorPrefix: auth.modal.error.prefix,
		errorDefault: auth.modal.error.default,
		closeAlert: auth.modal.closeAlert,
		success: auth.modal.success,
		footer: auth.modal.footer
	});
</script>

<BaseSignup {form} bind:open {onclose} {content} />
