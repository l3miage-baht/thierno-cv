# Plan d'amélioration de l'application

Cette feuille de route regroupe les optimisations prioritaires pour moderniser l'application Angular et améliorer l'expérience utilisateur.

## Architecture et structure
- **Basculer tous les composants vers les dernières conventions Angular** : supprimer les déclarations `standalone: true` superflues et migrer les importations vers le champ `imports` tout en conservant l'approche standalone. 【F:src/app/components/header/header.component.ts†L1-L37】【F:src/app/components/footer/footer.component.ts†L1-L37】【F:src/app/pages/home/home.component.ts†L1-L34】【F:src/app/components/layout/layout.component.ts†L1-L25】
- **Remplacer l'usage de `HostListener` par la configuration `host` du décorateur** afin de respecter les bonnes pratiques et centraliser les bindings dans la métadonnée du composant. 【F:src/app/components/header/header.component.ts†L1-L33】
- **Introduire des signaux pour l'état local** (`isScrolled`, `isMenuOpen`, `features`, `socialLinks`) et dériver les valeurs calculées avec `computed()` afin de tirer parti de la réactivité fine d'Angular 17+. 【F:src/app/components/header/header.component.ts†L14-L35】【F:src/app/pages/home/home.component.ts†L12-L33】【F:src/app/components/footer/footer.component.ts†L12-L37】
- **Isoler la configuration des données statiques** (navigation, réseaux sociaux, fonctionnalités) dans des fichiers de type `data.ts` afin de faciliter la maintenance et d'encourager la réutilisation. 【F:src/app/components/header/header.component.ts†L17-L23】【F:src/app/components/footer/footer.component.ts†L16-L37】【F:src/app/pages/home/home.component.ts†L12-L33】

## Templates et accessibilité
- **Adopter le nouveau contrôle de flux** (`@for`, `@if`) et supprimer `*ngFor` pour bénéficier d'un rendu plus performant et de meilleures options de suivi. 【F:src/app/pages/home/home.component.html†L1-L45】【F:src/app/components/header/header.component.html†L10-L34】【F:src/app/components/footer/footer.component.html†L15-L35】
- **Renforcer l'accessibilité du header** : ajouter des attributs `aria-expanded`, `aria-controls` et gérer le focus lorsque le menu mobile s'ouvre. 【F:src/app/components/header/header.component.html†L1-L35】
- **Harmoniser la navigation du footer** en utilisant `routerLink` plutôt que des liens absolus pour bénéficier du routage Angular et éviter le rechargement complet de la page. 【F:src/app/components/footer/footer.component.html†L15-L20】
- **Mettre en place `NgOptimizedImage`** pour remplacer la zone placeholder et préparer l'intégration d'une véritable photo ou illustration optimisée. 【F:src/app/pages/home/home.component.html†L1-L30】

## Style et performances
- **Consolider les styles globaux** en factorisant les variables SCSS et en introduisant un thème clair/sombre contrôlé par signaux pour améliorer l'expérience utilisateur. 【F:src/global_styles.scss†L1-L101】
- **Ajouter des styles responsives dédiés** pour les composants Header, Home et Footer afin d'assurer une expérience mobile fluide (actuellement, la plupart des règles sont globales). 【F:src/app/components/header/header.component.scss†L1-L157】【F:src/app/pages/home/home.component.scss†L1-L161】【F:src/app/components/footer/footer.component.scss†L1-L116】
- **Optimiser la gestion du scroll** du header (debounce, seuil configurable) pour éviter les recalculs inutiles lors de défilements rapides. 【F:src/app/components/header/header.component.ts†L24-L27】

## Contenu et SEO
- **Enrichir les métadonnées de la page d'accueil** (balises title, description, Open Graph) directement dans `index.html` ou via un service dédié. 【F:src/index.html†L1-L23】
- **Compléter les sections de contenu** (Portfolio, Blog, Contact) avec des routes lazy-loaded et des composants dédiés pour offrir une navigation complète. 【F:src/app/components/header/header.component.ts†L17-L23】【F:src/app/components/footer/footer.component.html†L15-L34】
- **Ajouter un composant "Call To Action" réutilisable** pour inciter au contact et améliorer le taux de conversion.

## Qualité du code et outillage
- **Mettre en place des tests unitaires ciblant les composants clés** (Header, Home, Footer) afin de garantir la stabilité du rendu et des interactions.
- **Configurer ESLint et Prettier** pour uniformiser le formatage et prévenir les régressions de style.
- **Ajouter un pipeline CI simple** (GitHub Actions) exécutant lint, tests et build afin d'automatiser les vérifications de qualité.

Ces améliorations permettront de hisser l'application au niveau des standards modernes d'Angular tout en offrant une expérience utilisateur plus riche et performante.
