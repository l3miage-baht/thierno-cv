import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  viewChildren
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NAVIGATION_ITEMS } from '../../data/navigation.data';
import { NavigationItem } from '../../types/common.types';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onWindowScroll()',
    '[class.scrolled]': 'isScrolled()',
    '[attr.data-menu-open]': 'isMenuOpen()',
    'role': 'banner'
  }
})
export class HeaderComponent {
  private readonly themeService = inject(ThemeService);

  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);
  protected readonly navigationItems = signal<ReadonlyArray<NavigationItem>>(NAVIGATION_ITEMS);
  protected readonly menuButtonLabel = computed(() =>
    this.isMenuOpen() ? 'Fermer la navigation' : 'Ouvrir la navigation'
  );
  protected readonly themeLabel = computed(() =>
    this.themeService.currentTheme() === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'
  );
  protected readonly themeIcon = computed(() =>
    this.themeService.currentTheme() === 'dark' ? '🌙' : '☀️'
  );

  protected readonly navLinks = viewChildren<ElementRef<HTMLAnchorElement>>('navLink');

  constructor() {
    this.onWindowScroll();
    effect(() => {
      if (this.isMenuOpen()) {
        const links = this.navLinks();
        queueMicrotask(() => links[0]?.nativeElement.focus());
      }
    });
  }

  protected onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected toggleTheme(): void {
    this.themeService.toggle();
  }
}
