import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { NavComponent } from './components/nav/nav.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    { path: 'users', component: UsersComponent },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);