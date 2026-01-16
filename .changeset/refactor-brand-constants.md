---
"talent-finder": patch
---

refactor(content): factoriser les noms propres et labels communs dans brand.ts

- Créer `brand.ts` avec les constantes de marque (ECRIN, EUNICoast, ULHN, CPTMP, etc.)
- Ajouter `commonLabels` pour les labels UI répétés (Primaire, Succès, Erreur, etc.)
- Ajouter `pageTitle()` helper pour générer les titres de page cohérents
- Mettre à jour tous les fichiers de contenu pour utiliser ces constantes
- Garantir une source unique pour la cohérence des traductions futures
