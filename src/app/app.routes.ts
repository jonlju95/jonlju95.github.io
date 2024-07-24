import { Routes } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { AboutComponent } from './components/common/about/about.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, data: { animation: 'home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'about' } },
];
