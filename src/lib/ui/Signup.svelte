<script lang="ts">
	import { isEmail } from '$lib/validators';
	import { enhance } from '$app/forms';

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

	let email = $state('');
	let signuping = $state(false);
	let dismissed = $state(false);

	const isDisabled = $derived(!isEmail(email) || signuping);

	const closeModal = (): void => {
		open = false;
		dismissed = false;
		onclose?.();
	};

	const dismissAlert = (): void => {
		dismissed = true;
	};

	const handleKeydown = (event: KeyboardEvent): void => {
		if (event.key === 'Escape') {
			closeModal();
		}
	};
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 bg-secondary-900/50 z-40"
		onclick={closeModal}
		onkeydown={(e) => e.key === 'Enter' && closeModal()}
		role="button"
		tabindex="-1"
		aria-label="Close modal"
	></div>

	<!-- Modal Container -->
	<div
		class="fixed inset-0 z-50 overflow-y-auto"
		role="dialog"
		aria-modal="true"
		aria-labelledby="signup-modal-title"
	>
		<div class="flex min-h-full items-center justify-center p-4">
			<!-- Modal Content -->
			<div
				class="relative bg-white rounded-lg shadow-xl overflow-hidden"
				style="width: min(28rem, calc(100vw - 2rem));"
				onclick={(e) => e.stopPropagation()}
				onkeydown={(e) => e.stopPropagation()}
				role="document"
			>
				<!-- Header -->
				<div class="flex items-center justify-between p-4 border-b border-secondary-200">
					<h2 id="signup-modal-title" class="text-lg font-semibold text-secondary-900">
						Authentification à votre compte
					</h2>
					<button
						type="button"
						class="text-secondary-400 hover:text-secondary-600 transition-colors p-1"
						onclick={closeModal}
						aria-label="Fermer"
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<!-- Body -->
				<div class="p-4">
					<p class="text-secondary-600 text-sm mb-4">
						Pour accéder à mes demandes, je vais m'authentifier. Cette action déposera un cookie
						nécessaire au bon fonctionnement du site dans votre navigateur. Pour le supprimer après
						l'authentification, il suffira que je me déconnecte.
					</p>

					<form
						method="post"
						action="?/signup"
						class="space-y-4"
						use:enhance={() => {
							signuping = true;
							dismissed = false;
							return async ({ update }) => {
								await update();
								signuping = false;
							};
						}}
					>
						<div>
							<label for="email" class="label">Courriel</label>
							<input
								id="email"
								name="email"
								type="email"
								class="input"
								placeholder="prenom.nom@univ-lehavre.fr"
								aria-describedby="email-help"
								bind:value={email}
							/>
							<p id="email-help" class="text-xs text-secondary-500 mt-1">
								Entrez votre adresse email universitaire
							</p>
						</div>

						<button type="submit" class="btn-primary w-full" disabled={isDisabled}>
							{#if signuping}
								<span class="inline-flex items-center gap-2">
									<span
										class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
									></span>
									Envoi en cours...
								</span>
							{:else}
								S'authentifier
							{/if}
						</button>
					</form>

					<!-- Alerts -->
					{#if !dismissed}
						{#if form?.error}
							<div class="alert-error mt-4 flex items-start justify-between" role="alert">
								<span>
									<strong>Erreur :</strong>
									{form.message ?? 'Une erreur est survenue'}
									{#if form.cause}
										: {form.cause}
									{/if}
								</span>
								<button
									type="button"
									class="text-red-600 hover:text-red-800 ml-2 flex-shrink-0"
									onclick={dismissAlert}
									aria-label="Fermer l'alerte"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						{/if}

						{#if form?.success}
							<div class="alert-success mt-4 flex items-start justify-between" role="alert">
								<span>
									Un courriel d'authentification vous a été envoyé. Veuillez vérifier votre boîte de
									réception.
								</span>
								<button
									type="button"
									class="text-green-600 hover:text-green-800 ml-2 flex-shrink-0"
									onclick={dismissAlert}
									aria-label="Fermer l'alerte"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						{/if}
					{/if}
				</div>

				<!-- Footer -->
				<div class="p-4 border-t border-secondary-200 bg-secondary-50">
					<p class="text-xs text-secondary-500 text-center">
						En vous authentifiant, vous acceptez nos conditions d'utilisation.
					</p>
				</div>
			</div>
		</div>
	</div>
{/if}
