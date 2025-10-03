import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SOCIAL_LINKS } from '../../data/social-links.data';
import { NAVIGATION_ITEMS } from '../../data/navigation.data';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly angularVersion = '20';
  protected readonly navigationItems = signal(NAVIGATION_ITEMS);
  protected readonly socialLinks = signal(SOCIAL_LINKS);
  protected readonly hasSocialLinks = computed(() => this.socialLinks().length > 0);
}
