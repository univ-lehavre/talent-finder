# Issue: Centraliser le contenu textuel dans `/src/lib/content`

## Titre suggéré
**refactor: Centraliser tous les labels, titres et textes dans /src/lib/content**

---

## Description

Actuellement, les textes (labels, titres, descriptions, messages d'erreur, etc.) sont dispersés dans les fichiers `+page.svelte` et les composants. Cette approche pose plusieurs problèmes :

- **Maintenance difficile** : modifier un texte nécessite de chercher dans plusieurs fichiers
- **Duplication** : certains textes sont répétés à plusieurs endroits
- **i18n impossible** : pas de support pour la traduction
- **Incohérence** : risque de variations dans la terminologie

## Objectif

Centraliser **100% du contenu textuel** dans `/src/lib/content` pour :
- Faciliter la maintenance
- Préparer le support multilingue (i18n)
- Garantir la cohérence terminologique
- Permettre aux non-développeurs de modifier les textes

---

## Scope

### Types de contenu à centraliser

| Type | Exemple | Priorité |
|------|---------|----------|
| **Titres de page** | "Dashboard", "Paramètres" | Haute |
| **Descriptions** | "Vue d'ensemble de vos données" | Haute |
| **Labels de formulaire** | "Email", "Mot de passe" | Haute |
| **Boutons/CTA** | "Enregistrer", "Annuler" | Haute |
| **Messages d'erreur** | "Email invalide" | Haute |
| **Messages de succès** | "Modifications enregistrées" | Moyenne |
| **Tooltips** | "Cliquez pour plus d'infos" | Moyenne |
| **Placeholders** | "Rechercher..." | Moyenne |
| **États vides** | "Aucun résultat trouvé" | Moyenne |
| **Confirmations** | "Êtes-vous sûr ?" | Basse |

### Fichiers à auditer

```
src/routes/+page.svelte
src/routes/dashboard/+page.svelte
src/routes/theme/+page.svelte
src/routes/repository/+page.svelte
src/routes/login/+page.svelte
src/routes/api/docs/+page.svelte
src/lib/ui/*.svelte (composants avec textes hardcodés)
```

---

## Structure proposée

```
src/lib/content/
├── index.ts              # Export centralisé
├── fr/                   # Français (langue par défaut)
│   ├── common.ts         # Textes communs (boutons, labels génériques)
│   ├── errors.ts         # Messages d'erreur
│   ├── pages/
│   │   ├── home.ts       # Page d'accueil
│   │   ├── dashboard.ts  # Dashboard
│   │   ├── theme.ts      # Page thème
│   │   └── ...
│   └── components/
│       ├── auth.ts       # Composants d'authentification
│       ├── search.ts     # Composants de recherche
│       └── ...
└── types.ts              # Types TypeScript pour le contenu
```

### Exemple de structure de fichier

```typescript
// src/lib/content/fr/pages/home.ts
export const home = {
  meta: {
    title: 'Talent Finder - Accueil',
    description: 'Découvrez les talents de la recherche'
  },
  hero: {
    title: 'Trouvez les meilleurs chercheurs',
    subtitle: 'Une plateforme pour connecter les talents',
    cta: 'Commencer'
  },
  features: {
    title: 'Fonctionnalités',
    subtitle: 'Tout ce dont vous avez besoin',
    items: [
      {
        title: 'Recherche avancée',
        description: 'Filtrez par domaine, pays, institution'
      },
      // ...
    ]
  },
  howItWorks: {
    title: 'Comment ça marche',
    steps: [
      { title: 'Étape 1', description: '...' },
      // ...
    ]
  }
} as const;
```

### Exemple d'utilisation

```svelte
<script>
  import { home } from '$lib/content';
</script>

<Section title={home.features.title} description={home.features.subtitle}>
  <Grid cols={3}>
    {#each home.features.items as feature}
      <InfoCard title={feature.title}>
        <p>{feature.description}</p>
      </InfoCard>
    {/each}
  </Grid>
</Section>
```

---

## Tâches

### Phase 1 : Audit et structure (1-2h)
- [ ] Auditer tous les textes hardcodés dans les pages
- [ ] Créer la structure de dossiers dans `/src/lib/content`
- [ ] Définir les types TypeScript

### Phase 2 : Contenu commun (1h)
- [ ] Créer `common.ts` (boutons, labels génériques)
- [ ] Créer `errors.ts` (messages d'erreur)
- [ ] Créer l'index d'export

### Phase 3 : Pages principales (2-3h)
- [ ] Migrer `+page.svelte` (home)
- [ ] Migrer `dashboard/+page.svelte`
- [ ] Migrer `theme/+page.svelte`
- [ ] Migrer `repository/+page.svelte`

### Phase 4 : Composants (1-2h)
- [ ] Migrer les textes des composants UI
- [ ] Vérifier la cohérence

### Phase 5 : Validation (30min)
- [ ] Tester toutes les pages
- [ ] Vérifier qu'aucun texte n'est hardcodé

---

## Critères d'acceptation

- [ ] Aucun texte visible hardcodé dans les fichiers `.svelte` (sauf noms de variables)
- [ ] Structure de contenu typée avec TypeScript
- [ ] Export centralisé via `$lib/content`
- [ ] Documentation de la structure
- [ ] Tests de non-régression visuels

---

## Bénéfices attendus

| Aspect | Avant | Après |
|--------|-------|-------|
| Modifier un texte | Chercher dans 6+ fichiers | 1 fichier |
| Ajouter une langue | Impossible | Dupliquer le dossier |
| Cohérence terminologique | Non garantie | Garantie |
| Collaboration non-dev | Difficile | Facile |

---

## Labels suggérés

`refactor`, `enhancement`, `content`, `i18n-ready`

## Priorité

Moyenne - À faire après la migration vers les nouveaux composants UI
