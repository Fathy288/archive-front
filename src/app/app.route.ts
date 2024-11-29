import { Routes } from '@angular/router';

// dashboard
import { IndexComponent } from './index';
import { AppLayout } from './layouts/app-layout';
import { AuthLayout } from './layouts/auth-layout';
import { Error404Component } from './misc/error404';
import { Error403Component } from './misc/error403';
import { Error500Component } from './misc/error500';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [{ path: '', component: IndexComponent, data: { title: 'لوحة التحكم' } }],
    },
    {
        path: 'auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                loadComponent: () => import('./auth/signin/signin').then((c) => c.SigninComponent),
            },
        ],
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
