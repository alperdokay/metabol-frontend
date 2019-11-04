import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SubsystemAnalyzeRoutes} from './components'

export const SubsystemRoutes: Routes = [
  ...SubsystemAnalyzeRoutes,
];

export const subsystemAnalyzeRoutingProviders: any[] = [];

export const subsystemAnalyzeRouting: ModuleWithProviders = RouterModule.forRoot(SubsystemRoutes);
