import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginRoutes, SignupRoutes} from './components'

export const AuthRoutes: Routes = [
  ...LoginRoutes,
  ...SignupRoutes,
];

export const AuthRoutesRoutingProviders: any[] = [];

export const AuthRoutesRouting: ModuleWithProviders = RouterModule.forRoot(AuthRoutes);
