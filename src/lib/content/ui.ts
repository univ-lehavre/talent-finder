/**
 * UI component content - prepared for internationalization.
 * Contains all shared UI component text content.
 */

import { brand, commonLabels } from './brand';
import type { UIContent } from './types';

/**
 * French UI content.
 */
export const fr: UIContent = {
	common: {
		tryAgain: commonLabels.retry,
		checkStatus: 'Vérifier le statut',
		email: 'Email',
		notLoggedIn: 'Non connecté',
		customize: 'Personnaliser',
		updated: 'Mis à jour'
	},
	relativeTime: {
		justNow: "à l'instant",
		secondsAgo: 'il y a {count}s',
		minutesAgo: 'il y a {count}min',
		hoursAgo: 'il y a {count}h',
		yesterday: 'hier',
		daysAgo: 'il y a {count} jours'
	},
	connectivity: {
		appwriteUnavailable: {
			title: "Serveur d'authentification indisponible",
			description:
				"Impossible de se connecter au serveur d'authentification. Certaines fonctionnalités peuvent ne pas fonctionner correctement."
		},
		noInternet: {
			title: 'Pas de connexion internet',
			description: 'Veuillez vérifier vos paramètres réseau et réessayer.'
		}
	},
	consent: {
		title: 'Consentement des données',
		openAlexTitle: `Accès prioritaire à ${brand.openAlex}`,
		grantedMessage: `Votre email est partagé avec ${brand.openAlex} pour des requêtes plus rapides (10x plus rapide).`,
		declinedMessage: `Vous avez refusé de partager votre email avec ${brand.openAlex}.`,
		pendingMessage: `Partagez votre email avec ${brand.openAlex} pour des recherches plus rapides.`,
		grantButton: 'Accorder le consentement',
		revokeButton: 'Révoquer le consentement',
		declineButton: 'Refuser'
	},
	profile: {
		title: 'Votre profil',
		complete: 'Profil complet',
		incomplete: 'Profil incomplet'
	},
	theme: {
		title: 'Préférences de thème',
		palette: 'Palette',
		font: 'Police',
		mode: 'Mode',
		light: 'Clair',
		dark: 'Sombre',
		changeTheme: 'Changer le thème'
	},
	comingSoon: {
		defaultTitle: 'Bientôt disponible',
		defaultDescription:
			'Nous travaillons sur de nouvelles fonctionnalités pour améliorer votre expérience.'
	},
	health: {
		title: 'Santé du système',
		refreshLabel: 'Actualiser le statut',
		status: commonLabels.statusLabels,
		services: {
			appwrite: brand.appwrite,
			internet: 'Internet'
		},
		checked: 'Vérifié',
		apiKey: 'Clé API',
		valid: 'Valide',
		invalid: 'Invalide',
		notFound: 'Non trouvé',
		missing: 'Manquant'
	},
	researchOrganization: {
		title: "Recherche d'organismes",
		consentRequired: 'Consentement requis',
		consentMessage:
			'Accordez le consentement dans la carte "Consentement des données" pour rechercher des organismes de recherche.',
		searchPlaceholder: 'Rechercher des organismes de recherche...',
		maxReached: "Nombre maximum d'organismes atteint",
		noResults: 'Aucun organisme trouvé pour',
		selectedTitle: 'Organismes sélectionnés',
		maxLabel: 'max',
		noSelection: 'Aucun organisme sélectionné. Utilisez la recherche ci-dessus pour en ajouter.',
		works: 'travaux',
		citations: 'citations',
		removeLabel: 'Supprimer'
	},
	researchOutput: {
		title: 'Production scientifique',
		consentMessage:
			'Accordez le consentement dans la carte "Consentement des données" pour voir les statistiques de production.',
		selectOrganizations:
			'Sélectionnez des organismes ci-dessus pour voir leur production scientifique.',
		loading: 'Chargement des statistiques...',
		articlesByYear: 'Articles par année',
		before: 'Avant',
		affiliatedAuthors: 'Auteurs affiliés',
		total: 'Total'
	}
};

/**
 * Default content export - can be replaced with locale-based selection.
 */
export const ui = fr;
