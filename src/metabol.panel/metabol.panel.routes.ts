import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../metabol.auth";
import {
  PanelComponent,
  ProfileComponent,
  PastAnalysisComponent,
  ChangePasswordComponent,
  PastAnalysisDetailComponent,
  CompareAnalysisComponent
} from "./components";


export const MetabolPanelRoutes: Routes = [
  { path: 'panel', redirectTo: 'profile', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'past-analysis', component: PastAnalysisComponent },
  { path: 'search-past-analysis/:query', component: PastAnalysisComponent },
  { path: 'past-analysis/:key', component: PastAnalysisDetailComponent },
  { path: 'compare-analysis', component: CompareAnalysisComponent }
];


export const PanelRoutesRoutingProviders: any[] = [];

export const PanelRoutesRouting: ModuleWithProviders = RouterModule.forRoot(MetabolPanelRoutes);
