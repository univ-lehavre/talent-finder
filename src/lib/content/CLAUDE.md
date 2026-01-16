---
title: Instructions Claude - Module content
description: Contenu textuel centralisé pour l'internationalisation (i18n)
scope: $lib/content
tags: [i18n, content, text, localization]
parent: /src/lib/CLAUDE.md
related:
  - src/lib/CLAUDE.md
  - src/lib/ui/CLAUDE.md
---

# Module content

> **Parent** : [src/lib/](../CLAUDE.md) | **Voir aussi** : [UI](../ui/CLAUDE.md)

## Vue d'ensemble

Module centralisant tout le contenu textuel visible par l'utilisateur. Préparé pour l'internationalisation (i18n) avec une architecture permettant d'ajouter facilement de nouvelles langues.

## Structure des fichiers

```
content/
├── index.ts          # Hub d'export central
├── types.ts          # Définitions TypeScript de tous les contenus
├── brand.ts          # Constantes de marque et labels communs
├── navigation.ts     # Liens de navigation
├── auth.ts           # Authentification (login, signup, modal)
├── errors.ts         # Pages d'erreur (404, générique)
├── dashboard.ts      # Page tableau de bord
├── repository.ts     # Page statistiques du dépôt
├── ui.ts             # Composants UI partagés
├── theme-page.ts     # Page de personnalisation thème
├── partners.ts       # Section partenaires
├── api-docs.ts       # Documentation API
├── home.ts           # Page d'accueil (hero, challenges, CTA)
└── content.test.ts   # Tests unitaires
```

## Architecture i18n

### Convention de locale

Chaque fichier de contenu suit ce pattern :

```typescript
import type { FeatureContent } from './types';

/** Contenu en français */
export const fr: FeatureContent = { ... };

/** Export par défaut (langue active) */
export const feature = fr;
```

### Ajouter une nouvelle langue

1. Ajouter la constante locale dans chaque fichier :
   ```typescript
   export const en: FeatureContent = { ... };
   ```

2. Modifier l'export par défaut pour switcher :
   ```typescript
   export const feature = locale === 'en' ? en : fr;
   ```

## Types principaux

| Type | Description |
|------|-------------|
| `NavigationContent` | Liens, actions et références externes |
| `AuthContent` | Login, formulaire, modal de signup |
| `ErrorContent` | Messages d'erreur 404 et générique |
| `DashboardContent` | Méta, header, cards du tableau de bord |
| `RepositoryContent` | Colonnes, sections, labels des stats |
| `UIContent` | Health, consent, profile, theme, connectivity |
| `ThemePageContent` | Sections de personnalisation du thème |
| `PartnersContent` | Organisations partenaires |
| `ApiDocsContent` | Métadonnées de la doc API |
| `HomeContent` | Hero, how it works, challenges, CTA |
| `Challenge` | Défi (titre, problème, solution) |
| `Step` | Étape (numéro, titre, description) |

## Constantes partagées

Le fichier `brand.ts` centralise les éléments réutilisables :

```typescript
import { brand, commonLabels, pageTitle } from '$lib/content';

// Noms de marque
brand.appName          // "Talent Finder"
brand.organization     // "ULHN"

// Labels communs
commonLabels.primary   // "Primaire"
commonLabels.error     // "Erreur"
commonLabels.retry     // "Réessayer"

// Fonction utilitaire
pageTitle('Dashboard') // "Dashboard | Talent Finder"
```

## Utilisation

```typescript
import { auth, navigation, ui } from '$lib/content';

// Accès au contenu
const title = auth.login.title;
const links = navigation.links;
const healthLabels = ui.health;
```

## Règles

1. **Tout texte visible** doit être dans ce module (pas de chaînes hardcodées)
2. **Réutiliser `commonLabels`** pour les labels répétés (couleurs, statuts, etc.)
3. **Types dans `types.ts`** - Ne pas définir d'interfaces inline
4. **JSDoc** sur tous les exports
5. **Tests** pour valider la structure du contenu

## Anti-patterns à éviter

- Définir des interfaces dans les fichiers de contenu (utiliser `types.ts`)
- Dupliquer des labels déjà présents dans `commonLabels`
- Hardcoder du texte dans les composants Svelte
- Importer directement un fichier interne : `$lib/content/auth` → utiliser `$lib/content`
