import { SocialLink } from '../types/common.types';

export const SOCIAL_LINKS: ReadonlyArray<SocialLink> = [
  {
    platform: 'GitHub',
    url: 'https://github.com/l3miage-baht',
    icon: '🐙'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bah-thierno/',
    icon: '💼'
  },
  {
    platform: 'Email',
    url: 'mailto:bahalioufgn@gmail.com',
    icon: '📧'
  },
  {
    platform: 'Site personnel',
    url: 'https://www.thierno-bah.fr/',
    icon: '🌐'
  }
] as const;
