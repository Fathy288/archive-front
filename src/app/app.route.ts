import { Routes } from '@angular/router';
import { IndexComponent } from './index';
import { AppLayout } from './layouts/app-layout';
import { Error404Component } from './misc/error404';
import { Error403Component } from './misc/error403';
import { Error500Component } from './misc/error500';
import { AuthGuard } from './core/guard/auth.guard';
import { NotAuthGuard } from './core/guard/Not.Auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: IndexComponent, data: { title: 'لوحة التحكم' } },
            {
                path: 'add-archive',
                loadComponent: () => import('./arcive-form/arcive-form.component').then((c) => c.ArciveFormComponent),
                data: { title: 'لوحة التحكم' },
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/signin/signin').then((c) => c.SigninComponent),
        canActivate: [NotAuthGuard],
    },
    {
        path: 'miscellaneous/not-found',
        component: Error404Component,
    },
    {
        path: 'miscellaneous/internal-error',
        component: Error500Component,
    },
    {
        path: 'miscellaneous/not-authorized',
        component: Error403Component,
    },
];
