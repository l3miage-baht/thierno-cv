import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withInMemoryScrolling } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutComponent } from './app/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app/pages/home/home.component').then(m => m.HomeComponent),
    title: 'Accueil — Thierno Bah'
  },
  {
    path: 'about',
    loadComponent: () => import('./app/pages/about/about.component').then(m => m.AboutComponent),
    title: 'À propos — Thierno Bah'
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./app/pages/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    title: 'Portfolio — Thierno Bah'
  },
  {
    path: 'blog',
    loadComponent: () => import('./app/pages/blog/blog.component').then(m => m.BlogComponent),
    title: 'Blog — Thierno Bah'
  },
  {
    path: 'contact',
    loadComponent: () => import('./app/pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact — Thierno Bah'
  },
  { path: '**', redirectTo: '' }
];

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  template: '<app-layout></app-layout>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }))
  ]
});
