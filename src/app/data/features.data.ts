import { Feature } from '../types/common.types';

export const FEATURES: ReadonlyArray<Feature> = [
  {
    icon: '📊',
    title: 'Pilotage BI DigDash',
    description: 'Animation des comités, suivi des KPIs et industrialisation des dashboards stratégiques.'
  },
  {
    icon: '🧭',
    title: 'Direction de projets SI',
    description: 'Coordination des programmes M2/M1, cadrage fonctionnel et accompagnement des équipes métier.'
  },
  {
    icon: '🔗',
    title: 'API & intégrations ServiceNav',
    description: 'Conception d’APIs, interfaçage ITSM et fiabilisation de la donnée au cœur du SI.'
  },
  {
    icon: '⚡',
    title: 'Automatisation Make & n8n',
    description: 'Digitalisation des processus, synchronisation applicative et réduction des tâches manuelles.'
  }
] as const;
