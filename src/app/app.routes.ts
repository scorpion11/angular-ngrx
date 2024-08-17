import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('../features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'todo-list',
    loadComponent: () => import('../features/todo-list/todo-list.component').then((m) => m.TodoListComponent),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
