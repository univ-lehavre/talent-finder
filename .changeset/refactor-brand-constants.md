---
'talent-finder': minor
---

feat(i18n): compléter la centralisation du contenu textuel

### Documentation
- Ajouter `CLAUDE.md` avec l'architecture i18n et les conventions du module

### Types
- Déplacer les interfaces `Challenge`, `Step`, `HomeContent` vers `types.ts`
- Exporter les nouveaux types depuis `index.ts`

### Traductions
- Traduire le contenu de `home.ts` en français (page d'accueil)
- Traduire `ResearchOrganizationSearch` (Recherche d'organismes)
- Traduire `ArticlesCountCard` (Production scientifique)
- Traduire `Footer` (Développé à Université Le Havre Normandie)

### Refactoring
- Ajouter `statusLabels` dans `commonLabels` (brand.ts)
- Ajouter `researchOrganization` et `researchOutput` dans `ui.ts`
- Ajouter `footer.attribution` dans `navigation.ts`
- Utiliser les labels centralisés dans les composants

### Tests
- Ajouter 39 tests unitaires pour le module content
