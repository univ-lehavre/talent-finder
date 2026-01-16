---
"talent-finder": minor
---

## Restructuration du module `$lib/content`

### Nouvelle structure par domaine métier

Le module content est réorganisé avec une structure hiérarchique claire :

```
content/
├── index.ts              # Hub d'export central
├── types.ts              # Définitions TypeScript
├── core/                 # Logique partagée
│   ├── brand.ts          # Constantes de marque
│   └── i18n.svelte.ts    # Système i18n réactif
└── locales/
    ├── fr/
    │   ├── marketing/    # home, partners
    │   ├── app/          # dashboard, repository, research, profile
    │   ├── system/       # auth, errors, health, accessibility
    │   └── shared/       # navigation, common, theme
    └── en/               # Structure miroir
```

### Nouveaux types modulaires

Nouveaux types pour remplacer `UIContent` monolithique :
- `CommonContent` : labels communs, temps relatif
- `HealthContent` : santé système, connectivité
- `ProfileContent` : profil utilisateur, consentement
- `ResearchContent` : recherche d'organismes
- `ThemeContent` : préférences thème (card + page)

### Rétrocompatibilité

L'API publique reste inchangée. Les imports existants continuent de fonctionner :
```typescript
import { i18n, brand, navigation } from '$lib/content';
```
