import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { LayoutComponent } from './app/components/layout/layout.component';
import { HomeComponent } from './app/pages/home/home.component';

// Routes de base
const routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: HomeComponent }, // Temporaire
  { path: 'portfolio', component: HomeComponent }, // Temporaire
  { path: 'blog', component: HomeComponent }, // Temporaire  
  { path: 'contact', component: HomeComponent }, // Temporaire
  { path: '**', redirectTo: '' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  template: '<app-layout></app-layout>'
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});