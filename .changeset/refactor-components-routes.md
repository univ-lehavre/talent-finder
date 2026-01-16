---
'talent-finder': patch
---

## Réorganisation de `$lib/components` par routes

### Nouvelle structure

Les composants applicatifs sont maintenant organisés par route avec un dossier `common/` pour les composants partagés :

```
src/lib/components/
├── common/      # Partagés (Navbar, Footer, Modal, Alert...)
├── login/       # Route /login (LoginForm, Signup)
├── dashboard/   # Route /dashboard (ProfileCard, HealthStatusCard...)
├── home/        # Route / (préparé)
├── theme/       # Route /theme (préparé)
├── repository/  # Route /repository (préparé)
└── api-docs/    # Route /api/docs (préparé)
```

### Imports

Les imports existants restent compatibles :

```typescript
// Import global (inchangé)
import { Navbar, LoginForm, ProfileCard } from '$lib/components';

// Import par catégorie (nouveau)
import { Navbar, Footer } from '$lib/components/common';
import { LoginForm } from '$lib/components/login';
import { ProfileCard } from '$lib/components/dashboard';
```

### Composants déplacés

**common/** : Navbar, Footer, Drawer, Dropdown, LanguageSelector, Modal, Alert, ConnectivityBanner, PageHeader, ThemeToggle

**login/** : LoginForm, Signup

**dashboard/** : ProfileCard, ThemePreferencesCard, ConsentStatusCard, HealthStatusCard, ArticlesCountCard, ResearchOrganizationSearch, ComingSoonSection
