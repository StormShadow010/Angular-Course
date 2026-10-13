import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPage } from './pages/hero-page/hero-page';
import { Dragonball } from './pages/dragonball/dragonball';

export const routes: Routes = [
  { path: '', component: Counter },
  { path: 'hero', component: HeroPage },
  { path: 'dragonball', component: Dragonball },
  { path: '**', redirectTo: '' },
];
