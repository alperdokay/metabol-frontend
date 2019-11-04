import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SubsystemAnalyzeModule } from "../metabol.subsystem-analyze";
import { VisualizationModule } from '../metabol.visualization';

import { NgPipesModule } from 'ngx-pipes';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatExpansionModule, MatTabsModule} from '@angular/material';

import {
  PanelComponent,
  ProfileComponent,
  PastAnalysisComponent,
  ChangePasswordComponent,
  PastAnalysisDetailComponent,
  CompareAnalysisComponent,
  DialogPathwayVisualizationComponent,
  DialogReactionResultsComponent,
  ResultTableComponent,
  SimilarDiseasesComponent,
  AnalysisListComponent,
} from "./components";

import { LoginService } from '../metabol.auth/services/login/login.service';
import { PanelRoutesRoutingProviders, PanelRoutesRouting } from './metabol.panel.routes';

@NgModule({
  declarations: [
    PanelComponent,
    ProfileComponent,
    ChangePasswordComponent,
    PastAnalysisComponent,
    PastAnalysisDetailComponent,
    CompareAnalysisComponent,
    DialogPathwayVisualizationComponent,
    DialogReactionResultsComponent,
    ResultTableComponent,
    SimilarDiseasesComponent,
    AnalysisListComponent,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    MatExpansionModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    

    NgPipesModule,
    MatRippleModule,
    FlexLayoutModule,
    NgxPaginationModule,
    NgxDatatableModule,
    HttpClientModule,

    PanelRoutesRouting,
    SubsystemAnalyzeModule,
    VisualizationModule,
  ],
  providers: [
    LoginService,
    PanelRoutesRoutingProviders
  ],
  entryComponents: [
    DialogPathwayVisualizationComponent,
    DialogReactionResultsComponent
  ]
})
export class MetabolPanelModule { }
