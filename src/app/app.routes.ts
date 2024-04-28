import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomeComponent } from './components/dashboard/welcome/welcome.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';
import { CreateEditUserComponent } from './components/dashboard/create-edit-user/create-edit-user.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, children: [
        { path: '', component: WelcomeComponent },
        { path: 'users', component: UsersComponent },
        { path: 'reports', component: ReportsComponent },
        { path: 'createUser', component: CreateEditUserComponent },
    ]},
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
