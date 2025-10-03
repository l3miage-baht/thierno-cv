import { Feature } from '../types/common.types';

export const FEATURES: ReadonlyArray<Feature> = [
  {
    icon: "🧭",
    title: "Stratégie & Gouvernance SI",
    description: "Alignement des systèmes d'information avec vos objectifs métiers et trajectoire digitale"
  },
  {
    icon: "📊",
    title: "Business Intelligence & Data",
    description: "Conception d'indicateurs fiables, datavisualisation et valorisation de vos référentiels"
  },
  {
    icon: "🤝",
    title: "Pilotage de projets",
    description: "Coordination PMO, cadrage fonctionnel et suivi de la valeur délivrée"
  },
  {
    icon: "🚀",
    title: "Accompagnement du changement",
    description: "Mobilisation des équipes, communication et adoption durable des nouveaux usages"
  }
] as const;
