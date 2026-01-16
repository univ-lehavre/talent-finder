---
'talent-finder': minor
---

## Découplage des modules `$lib/ui` et `$lib/content`

### Architecture à deux niveaux

**M0 (`$lib/ui`)** - Design system pur :
- Composants génériques sans dépendance i18n
- Props de contenu obligatoires (plus d'optionnels)
- Interfaces définies inline dans chaque composant
- Peut être extrait comme package npm externe

**M1 (`$lib/components`)** - Wrappers applicatifs :
- Import des composants de base depuis `$lib/ui`
- Injection du contenu i18n via `$derived` réactif
- Props simplifiées (pas besoin de passer le contenu)

### Composants refactorisés

UI purs (`$lib/ui`) :
- Alert, ArticlesCountCard, ComingSoonSection
- ConnectivityBanner, ConsentStatusCard, Drawer
- Dropdown, Footer, HealthStatusCard
- LanguageSelector, LoginForm, Modal
- Navbar, PageHeader, ProfileCard
- ResearchOrganizationSearch, Signup
- ThemePreferencesCard, ThemeToggle

Wrappers avec i18n (`$lib/components`) :
- Même liste, importent depuis `$lib/ui` + injectent i18n

### Migration des routes

Les pages importent maintenant depuis `$lib/components` :
- `+layout.svelte` : Navbar, Footer, Signup, ConnectivityBanner
- `dashboard/+page.svelte` : ProfileCard, ThemePreferencesCard, etc.
- `login/+page.svelte` : LoginForm
- `theme/+page.svelte` : Dropdown, Modal, ThemeToggle

### Utilisation

Pour les pages/routes (avec i18n automatique) :
```svelte
import { Navbar, Footer } from '$lib/components';
<Navbar brandName="MyApp" />
```

Pour les tests ou contenu custom (sans i18n) :
```svelte
import { Navbar } from '$lib/ui';
<Navbar
  brandName="MyApp"
  toggleMenuLabel="Menu"
  mobileMenuTitle="Navigation"
  mobileMenuCloseLabel="Fermer"
/>
```
