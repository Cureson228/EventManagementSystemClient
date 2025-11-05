import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { UserComponent } from './features/user/user.component';
import { RegisterComponent } from './features/user/register/register.component';
import { LoginComponent } from './features/user/login/login.component';
import { CreateEventComponent } from './features/events/create-event/create-event.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'user', component: UserComponent, children: [{
        path: 'signup', component: RegisterComponent,
    },{
        path: 'login', component: LoginComponent
    }]},
    {path: 'event/create', component: CreateEventComponent, canActivate: [authGuard]}
];
