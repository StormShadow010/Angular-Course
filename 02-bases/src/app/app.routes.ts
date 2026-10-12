import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPage } from './pages/hero-page/hero-page';

export const routes: Routes = [
  { path: '', component: Counter },
  { path: 'hero', component: HeroPage },
];
