import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirección a login
  { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },
  { path: 'alumnos', loadComponent: () => import('./alumnos/alumnos.page').then(m => m.AlumnosPage) },
  { path: 'maestros', loadComponent: () => import('./maestros/maestros.page').then(m => m.MaestrosPage) },
  { path: 'actividades', loadComponent: () => import('./actividades/actividades.page').then(m => m.ActividadesPage) }
];
