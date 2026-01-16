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

**Dépendance externe unique** : `$lib/stores` (localeState, Locale)

## Structure des fichiers

```
content/
├── index.ts              # Hub d'export central
├── types.ts              # Définitions TypeScript
├── CLAUDE.md             # Documentation
├── content.test.ts       # Tests unitaires
│
├── core/                 # Logique et constantes partagées
│   ├── brand.ts          # Constantes de marque (locale-indépendant)
│   └── i18n.svelte.ts    # Système i18n réactif (Svelte 5)
│
└── locales/              # Contenu par locale
    ├── fr/
    │   ├── index.ts      # Exporte tout le FR
    │   ├── marketing/    # Vitrine publique
    │   │   ├── home.ts
    │   │   └── partners.ts
    │   ├── app/          # Application connectée
    │   │   ├── dashboard.ts
    │   │   ├── repository.ts
    │   │   ├── api-docs.ts
    │   │   ├── research.ts
    │   │   └── profile.ts
    │   ├── system/       # Infrastructure
    │   │   ├── auth.ts
    │   │   ├── errors.ts
    │   │   ├── health.ts
    │   │   └── accessibility.ts
    │   └── shared/       # Transverse
    │       ├── navigation.ts
    │       ├── common.ts
    │       └── theme.ts
    │
    └── en/               # Structure miroir
        └── ...
```

## Organisation métier

| Dossier | Contenu | Équipe |
|---------|---------|--------|
| `marketing/` | Homepage, partenaires | Marketing |
| `app/` | Dashboard, recherche, profil | Produit |
| `system/` | Auth, erreurs, santé, a11y | Tech |
| `shared/` | Navigation, thème, labels communs | Tous |

## Architecture i18n

### Système réactif (Svelte 5)

```typescript
import { i18n } from '$lib/content';

// Accès réactif via getters
const title = i18n.navigation.links.home;
const authForm = i18n.auth.form;
```

### Convention de locale

Chaque fichier de contenu suit ce pattern :

```typescript
// locales/fr/app/dashboard.ts
import type { DashboardContent } from '../../../types';

export const fr: DashboardContent = { ... };
```

### Ajouter une nouvelle langue

1. Créer le dossier `locales/[code]/` avec la même structure
2. Copier les fichiers depuis `fr/` et traduire
3. Mettre à jour `locales/[code]/index.ts`
4. Ajouter les imports dans `core/i18n.svelte.ts`

## Types principaux

### Nouveaux types (modulaires)

| Type | Description |
|------|-------------|
| `CommonContent` | Labels communs, temps relatif, coming soon |
| `HealthContent` | Santé système, connectivité |
| `ProfileContent` | Profil utilisateur, consentement |
| `ResearchContent` | Recherche d'organismes, production |
| `ThemeContent` | Préférences thème (card + page) |

### Types existants

| Type | Description |
|------|-------------|
| `NavigationContent` | Liens, actions et références externes |
| `AuthContent` | Login, formulaire, modal de signup |
| `ErrorContent` | Messages d'erreur 404 et générique |
| `DashboardContent` | Méta, header, cards du tableau de bord |
| `RepositoryContent` | Colonnes, sections, labels des stats |
| `ThemePageContent` | Sections de personnalisation du thème |
| `PartnersContent` | Organisations partenaires |
| `ApiDocsContent` | Métadonnées de la doc API |
| `HomeContent` | Hero, how it works, challenges, CTA |
| `AccessibilityContent` | Labels d'accessibilité |
| `LanguageSelectorContent` | Sélecteur de langue |

### Types dépréciés

| Type | Remplacé par |
|------|--------------|
| `UIContent` | `CommonContent`, `HealthContent`, `ProfileContent`, `ResearchContent` |

## Constantes partagées

Le fichier `core/brand.ts` centralise les éléments réutilisables :

```typescript
import { brand, commonLabels, pageTitle } from '$lib/content';

// Noms de marque
brand.appName          // "Talent Finder"
brand.ulhn             // "Université Le Havre Normandie"

// Labels communs
commonLabels.primary   // "Primaire"
commonLabels.error     // "Erreur"
commonLabels.retry     // "Réessayer"

// Fonction utilitaire
pageTitle('Dashboard') // "Dashboard - ECRIN | Talent finder"
```

## Utilisation

### Contenu réactif (recommandé)

```typescript
import { i18n } from '$lib/content';

// Dans un composant Svelte 5
const title = i18n.auth.login.title;
const links = i18n.navigation.links;
```

### Contenu statique (rétrocompatibilité)

```typescript
import { auth, navigation } from '$lib/content';

const title = auth.login.title;
const links = navigation.links;
```

## Règles

1. **Tout texte visible** doit être dans ce module (pas de chaînes hardcodées)
2. **Réutiliser `commonLabels`** pour les labels répétés (couleurs, statuts, etc.)
3. **Types dans `types.ts`** - Ne pas définir d'interfaces inline
4. **JSDoc** sur tous les exports
5. **Tests** pour valider la structure du contenu
6. **Organisation métier** - Respecter la séparation marketing/app/system/shared

## Anti-patterns à éviter

- Définir des interfaces dans les fichiers de contenu (utiliser `types.ts`)
- Dupliquer des labels déjà présents dans `commonLabels`
- Hardcoder du texte dans les composants Svelte
- Importer directement un fichier interne : `$lib/content/locales/fr/app/dashboard` → utiliser `$lib/content`
- Mélanger les responsabilités entre dossiers (ex: marketing dans system)
