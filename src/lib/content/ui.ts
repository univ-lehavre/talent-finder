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
		mode: 'Mode'
	},
	comingSoon: {
		defaultTitle: 'Bientôt disponible',
		defaultDescription:
			'Nous travaillons sur de nouvelles fonctionnalités pour améliorer votre expérience.'
	},
	health: {
		title: 'Santé du système',
		refreshLabel: 'Actualiser le statut',
		status: {
			healthy: 'Opérationnel',
			degraded: 'Dégradé',
			unhealthy: 'Hors service'
		},
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
	}
};

/**
 * Default content export - can be replaced with locale-based selection.
 */
export const ui = fr;
