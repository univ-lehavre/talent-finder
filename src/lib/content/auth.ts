/**
 * Authentication content - prepared for internationalization.
 * Contains all authentication-related text content.
 */

import type { AuthContent } from './types';

/**
 * French authentication content.
 */
export const fr: AuthContent = {
	login: {
		title: 'Connexion - ECRIN | Talent finder',
		description: 'Connectez-vous à votre compte ECRIN Talent Finder',
		loading: {
			title: 'Connexion en cours...',
			message: 'Veuillez patienter pendant la vérification de vos identifiants.'
		},
		error: {
			title: 'Connexion échouée',
			message: 'Le lien de connexion est invalide ou a expiré.'
		},
		buttons: {
			retry: 'Réessayer',
			home: 'Accueil'
		}
	},
	form: {
		title: 'Connexion',
		description:
			'Entrez votre adresse email professionnelle pour recevoir un lien de connexion sécurisé.',
		emailLabel: 'Adresse email',
		emailPlaceholder: 'prenom.nom@universite.fr',
		emailHint: 'Seules les adresses email universitaires sont acceptées',
		submitButton: 'Envoyer le lien de connexion',
		submitting: 'Envoi en cours...',
		error: {
			prefix: 'Erreur :',
			default: 'Une erreur est survenue'
		},
		success: {
			title: 'Email envoyé !',
			message: 'Un lien de connexion vous a été envoyé. Vérifiez votre boîte de réception.'
		},
		footer: 'En vous connectant, vous acceptez nos',
		termsLink: "conditions d'utilisation"
	},
	modal: {
		title: 'Authentification à votre compte',
		closeLabel: 'Fermer',
		description:
			"Pour accéder à mes demandes, je vais m'authentifier. Cette action déposera un cookie nécessaire au bon fonctionnement du site dans votre navigateur. Pour le supprimer après l'authentification, il suffira que je me déconnecte.",
		emailLabel: 'Courriel',
		emailPlaceholder: 'prenom.nom@univ-lehavre.fr',
		emailHint: 'Entrez votre adresse email universitaire',
		submitButton: "S'authentifier",
		submitting: 'Envoi en cours...',
		error: {
			prefix: 'Erreur :',
			default: 'Une erreur est survenue'
		},
		closeAlert: "Fermer l'alerte",
		success:
			"Un courriel d'authentification vous a été envoyé. Veuillez vérifier votre boîte de réception.",
		footer: "En vous authentifiant, vous acceptez nos conditions d'utilisation."
	}
};

/**
 * Default content export - can be replaced with locale-based selection.
 */
export const auth = fr;
