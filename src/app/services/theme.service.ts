import { Injectable, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly mediaQuery = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : undefined;

  readonly currentTheme = signal<Theme>(this.mediaQuery?.matches ? 'dark' : 'light');

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      const rootElement = this.document.documentElement;
      rootElement.setAttribute('data-theme', theme);
    });

    this.mediaQuery?.addEventListener('change', event => {
      this.currentTheme.set(event.matches ? 'dark' : 'light');
    });
  }

  toggle(): void {
    this.currentTheme.update(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }
}
