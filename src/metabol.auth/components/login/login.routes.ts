import {Component} from '@angular/core';
import {Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {SignupComponent} from '../signup/signup.component';
import {AuthGuardLogin} from '../../auth-guard-login/auth-guard-login';


export const LoginRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardLogin] },
];
