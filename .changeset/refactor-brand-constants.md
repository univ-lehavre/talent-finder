---
'talent-finder': minor
---

feat(i18n): système d'internationalisation complet avec sélecteur de langue

### Fonctionnalités

- Ajouter le sélecteur de langue dans la navbar (français/anglais)
- Détection automatique de la langue du navigateur
- Persistance du choix de langue dans un cookie (1 an)
- Changement de langue en temps réel sans rechargement de page

### Infrastructure

- Créer `locale.svelte.ts` avec gestion d'état réactif ($state)
- Créer `i18n.svelte.ts` avec module-level $derived pour réactivité
- Ajouter traductions anglaises complètes dans `translations/en/`

### Composants

- Créer `LanguageSelector.svelte` avec dropdown et drapeaux
- Migrer 18 composants UI vers i18n réactif ($derived)
- Migrer 8 pages routes vers i18n réactif

### Types

- Ajouter `AccessibilityContent.languageSelector/changeLanguage`
- Ajouter `UIContent.theme.light/dark/changeTheme`
- Déplacer `Challenge`, `Step`, `HomeContent` vers `types.ts`

### Traductions

- Contenu français complet (existant)
- Contenu anglais complet (nouveau)
- Labels accessibility pour sélecteur de langue

### Tests

- 39 tests unitaires pour le module content
