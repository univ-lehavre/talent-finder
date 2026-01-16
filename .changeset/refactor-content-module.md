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

### Réorganisation de `$lib/ui`

Les 61 composants sont maintenant organisés en sous-répertoires par catégorie :

```
src/lib/ui/
├── actions/        # Button, ButtonGroup, LinkButton
├── data-display/   # Card, InfoCard, StatCard, DataList, DataTable...
├── feedback/       # Alert, Badge, LoadingSpinner, AsyncContent...
├── forms/          # Modal, Signup, LoginForm
├── layout/         # Section, Grid, PageHeader, Hero, CTASection...
├── navigation/     # Navbar, Footer, Drawer, Dropdown, NavLink...
├── theme/          # ThemeToggle, ThemeSection, ThemeToggleRow
├── dashboard/      # ProfileCard, ThemePreferencesCard...
├── domain/         # ResearchOrganizationSearch, HealthStatusCard...
└── utils/          # Icon, Tooltip, ConnectivityBanner...
```

**Rétrocompatibilité** : Tous les imports via `$lib/ui` restent fonctionnels grâce au barrel export mis à jour.

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
