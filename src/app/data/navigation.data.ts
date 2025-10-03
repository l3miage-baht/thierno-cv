import { NavigationItem } from '../types/common.types';

export const NAVIGATION_ITEMS: ReadonlyArray<NavigationItem> = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
] as const;
