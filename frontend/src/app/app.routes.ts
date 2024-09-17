import { Routes } from '@angular/router';
import { AllresultComponent } from './allresult/allresult.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateMeritComponent } from './create-merit/create-merit.component';
import { authGuard } from './auth.guard';
import { userauthGuard } from './userauth.guard';

export const routes: Routes = [
  {
    path: 'alldata',
    component: AllresultComponent,
    pathMatch: 'full',
    canActivate: [userauthGuard],
  },
  { path: 'signup', component: SignUpComponent, pathMatch: 'full' },
  { path: 'app', component: AppComponent, pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  { path: '', component: LoginComponent },
  {
    path: 'createMerit',
    component: CreateMeritComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
];
