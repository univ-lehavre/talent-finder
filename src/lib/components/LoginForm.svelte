<script lang="ts">
	import { LoginForm as BaseLoginForm } from '$lib/ui';
	import { i18n } from '$lib/content';

	/**
	 * LoginForm - Pre-configured login form with i18n labels.
	 *
	 * Wraps $lib/ui/LoginForm and injects content from i18n.
	 *
	 * @example
	 * ```svelte
	 * <LoginForm {form} />
	 * ```
	 */
	interface Props {
		/** Form state from SvelteKit action */
		form: {
			error?: boolean;
			message?: string;
			cause?: string;
			success?: boolean;
		} | null;
		/** Additional CSS classes */
		class?: string;
	}

	let { form, class: className = '' }: Props = $props();

	const auth = $derived(i18n.auth);
	const a11y = $derived(i18n.accessibility);

	const content = $derived({
		title: auth.form.title,
		description: auth.form.description,
		emailLabel: auth.form.emailLabel,
		emailPlaceholder: auth.form.emailPlaceholder,
		emailHint: auth.form.emailHint,
		submitButton: auth.form.submitButton,
		submitting: auth.form.submitting,
		errorPrefix: auth.form.error.prefix,
		errorDefault: auth.form.error.default,
		successTitle: auth.form.success.title,
		successMessage: auth.form.success.message,
		footer: auth.form.footer,
		termsLink: auth.form.termsLink,
		closeAlertLabel: a11y.closeAlert
	});
</script>

<BaseLoginForm {form} {content} class={className} />
