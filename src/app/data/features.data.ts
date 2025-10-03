import { Feature } from '../types/common.types';

export const FEATURES: ReadonlyArray<Feature> = [
  {
    icon: '🎨',
    title: 'Frontend Development',
    description: "Création d'interfaces utilisateur modernes avec React, Angular et Vue.js"
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    description: 'APIs robustes avec Node.js, Python et bases de données relationnelles/NoSQL'
  },
  {
    icon: '🚀',
    title: 'DevOps & Cloud',
    description: 'Déploiement et infrastructure cloud avec AWS, Docker et CI/CD'
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Applications mobiles cross-platform avec React Native et Flutter'
  }
] as const;
