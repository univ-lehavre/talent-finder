/**
 * Dashboard content - prepared for internationalization.
 * Contains all dashboard-related text content.
 */

import type { DashboardContent } from './types';

/**
 * French dashboard content.
 */
export const fr: DashboardContent = {
	meta: {
		title: 'Tableau de bord - ECRIN | Talent finder',
		description: 'Votre tableau de bord personnel sur ECRIN Talent finder'
	},
	header: {
		title: 'Tableau de bord',
		welcomeBack: 'Bienvenue'
	},
	externalLinks: {
		ecrin: {
			title: 'ECRIN',
			description: 'Site principal du projet'
		},
		github: {
			title: 'GitHub',
			description: 'Dépôt du code source'
		},
		zenodo: {
			title: 'Zenodo',
			description: 'Archive permanente'
		}
	},
	comingSoon: {
		title: 'Bientôt disponible',
		description:
			'Nous travaillons sur de nouvelles fonctionnalités pour vous aider à gérer votre profil et découvrir des collaborateurs.',
		features: [
			'Compléter votre profil avec vos compétences et expertises',
			'Rechercher et découvrir des chercheurs',
			'Se connecter et collaborer sur des projets'
		]
	},
	cards: {
		repository: {
			title: 'Dépôt',
			description: 'Explorez les statistiques et analyses du code de ce dépôt.',
			linkText: 'Voir les stats'
		},
		apiDocs: {
			title: 'Documentation API',
			description: "Parcourez la référence de l'API REST avec Swagger UI.",
			linkText: "Parcourir l'API"
		}
	}
};

/**
 * Default content export - can be replaced with locale-based selection.
 */
export const dashboard = fr;
