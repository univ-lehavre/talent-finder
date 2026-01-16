/**
 * Theme page content - prepared for internationalization.
 * Contains all theme page text content.
 */

import type { ThemePageContent } from './types';

/**
 * French theme page content.
 */
export const fr: ThemePageContent = {
	meta: {
		title: 'Thème - ECRIN | Talent finder',
		description: 'Personnalisation du thème et système de design ECRIN Talent finder'
	},
	selectorBar: {
		title: 'Personnalisation du thème',
		fontLabels: {
			heading: 'Titre',
			body: 'Corps',
			mono: 'Mono'
		},
		resetButton: 'Réinitialiser',
		resetFeedback: 'Aléatoire !',
		setButton: 'Fixer',
		setFeedback: 'Fixé !'
	},
	hero: {
		title: 'Personnalisation du thème',
		description:
			"Personnalisez les couleurs et les polices pour prévisualiser l'apparence de votre application. Sélectionnez une palette et un appairage de polices pour voir les changements appliqués."
	},
	currentSettings: {
		title: 'Paramètres actuels',
		paletteTitle: 'Palette',
		fontTitle: 'Polices',
		fontLabels: {
			heading: 'Titre',
			body: 'Corps',
			mono: 'Mono'
		},
		fontDemo: {
			headingText: 'Le vif zéphyr jubile',
			bodyText:
				'Le vif zéphyr jubile sur les kumquats du clown gracieux. Ce texte démontre la police du corps.',
			monoText: 'const exemple = "code";'
		},
		colorLabels: {
			primary: 'Primaire',
			accent: 'Accent',
			neutral: 'Neutre',
			success: 'Succès',
			warning: 'Attention',
			error: 'Erreur'
		}
	},
	colorScales: {
		title: 'Échelles de couleurs',
		scaleHeader: 'Échelle',
		colorNames: {
			primary: 'Primaire',
			accent: 'Accent',
			secondary: 'Secondaire',
			success: 'Succès',
			warning: 'Attention',
			error: 'Erreur'
		},
		usageExamples: {
			title: "Exemples d'utilisation",
			background: '// Arrière-plan',
			textColor: '// Couleur du texte',
			border: '// Bordure',
			cssVariable: '// Variable CSS'
		}
	},
	buttons: {
		title: 'Boutons',
		variantsTitle: 'Variantes',
		withIconsTitle: 'Avec icônes',
		variants: {
			primary: 'Primaire',
			secondary: 'Secondaire',
			accent: 'Accent',
			outline: 'Contour',
			ghost: 'Fantôme'
		},
		iconButtons: {
			addItem: 'Ajouter',
			download: 'Télécharger',
			settings: 'Paramètres'
		}
	},
	alerts: {
		title: 'Alertes',
		labels: {
			info: 'Info :',
			success: 'Succès :',
			warning: 'Attention :',
			error: 'Erreur :'
		},
		info: 'Ceci est un message informatif utilisant les couleurs du thème.',
		success: 'Opération terminée avec succès !',
		warning: 'Veuillez vérifier avant de continuer.',
		error: "Une erreur s'est produite. Veuillez réessayer."
	},
	modalSection: {
		title: 'Modal et Inscription',
		modalCard: {
			title: 'Modal',
			description: 'Cliquez sur le bouton pour ouvrir une boîte de dialogue modale.',
			openButton: 'Ouvrir le modal'
		},
		signupCard: {
			title: 'Inscription',
			description:
				"Le composant d'inscription est un formulaire modal pour l'authentification des utilisateurs.",
			openButton: "Ouvrir le modal d'inscription"
		},
		modalContent: {
			title: 'Exemple de modal',
			line1:
				"Ceci est un composant modal réutilisable. Il gère le clic sur l'arrière-plan, la touche échap et la gestion du focus.",
			line2:
				"Vous pouvez passer n'importe quel contenu en tant qu'enfants et optionnellement fournir un snippet de pied de page.",
			footer: 'Appuyez sur Échap ou cliquez à côté pour fermer.'
		}
	},
	statCards: {
		title: 'Cartes de statistiques',
		labels: {
			default: 'Par défaut',
			success: 'Succès',
			danger: 'Danger',
			net: 'Net'
		}
	},
	badges: {
		title: 'Badges',
		labels: {
			primary: 'Primaire',
			accent: 'Accent',
			success: 'Succès',
			warning: 'Attention',
			error: 'Erreur'
		}
	},
	cardSection: {
		title: 'Carte',
		card1: {
			title: 'Composant Carte',
			description: "Ceci est un composant Carte réutilisable avec un style d'ombre par défaut.",
			button: 'Action'
		},
		card2: {
			title: 'Carte avec classe personnalisée',
			description: 'Les cartes acceptent une prop pour la personnalisation.',
			button: 'Action personnalisée'
		}
	},
	loadingSpinner: {
		title: 'Indicateur de chargement',
		sizeVariants: 'Variantes de taille',
		colorVariants: 'Variantes de couleur',
		sizes: {
			small: 'Petit',
			medium: 'Moyen',
			large: 'Grand'
		},
		colors: {
			primary: 'Primaire',
			accent: 'Accent',
			secondary: 'Secondaire'
		}
	},
	themeToggle: {
		title: 'Basculement du thème',
		description:
			'Le composant de basculement du thème permet aux utilisateurs de passer du mode clair au mode sombre. La sélection est conservée dans les cookies.',
		hint: 'Cliquez pour basculer entre les modes clair et sombre'
	}
};

/**
 * Default content export - can be replaced with locale-based selection.
 */
export const themePage = fr;
