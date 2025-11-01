import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { UserComponent } from './features/user/user.component';
import { RegisterComponent } from './features/user/register/register.component';
import { LoginComponent } from './features/user/login/login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: '', component: UserComponent, children: [{
        path: 'signup', component: RegisterComponent,
    },{
        path: 'login', component: LoginComponent
    }]}
];
