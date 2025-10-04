import { Feature } from "../types/common.types";

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
  },
  {
    icon: "🔗",
    title: "API & intégrations ServiceNav",
    description: "Conception d’APIs, interfaçage ITSM et fiabilisation de la donnée au cœur du SI."
  },
  {
    icon: "⚡",
    title: "Automatisation Make & n8n",
    description: "Digitalisation des processus, synchronisation applicative et réduction des tâches manuelles."
  }
] as const;
