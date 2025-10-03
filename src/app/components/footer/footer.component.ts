import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLink } from '../../types/common.types';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  angularVersion = '20';

  socialLinks: SocialLink[] = [
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
  ];
}