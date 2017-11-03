import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { NavComponent } from './components/nav/nav.component';

const appRoutes: Routes = [
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'details',
        component: UserdetailComponent
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'

    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);