import { SocialLink } from '../types/common.types';

export const SOCIAL_LINKS: ReadonlyArray<SocialLink> = [
  {
    platform: 'GitHub',
    url: 'https://github.com/thierno-bah',
    icon: '🐙'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/thierno-bah',
    icon: '💼'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/thierno_bah',
    icon: '🐦'
  },
  {
    platform: 'Email',
    url: 'mailto:contact@thierno-bah.fr',
    icon: '📧'
  }
] as const;
