---
'talent-finder': minor
---

feat(i18n): centraliser le contenu textuel dans $lib/content

- Créer des modules de contenu typés pour chaque domaine (navigation, auth, errors, dashboard, repository, ui, partners, themePage, apiDocs)
- Définir les interfaces TypeScript pour garantir la cohérence du contenu
- Migrer tous les textes visibles des fichiers .svelte vers $lib/content
- Préparer l'application pour l'internationalisation future
