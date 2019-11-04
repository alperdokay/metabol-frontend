import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SimpleNotificationsModule } from 'angular2-notifications'
import { NgPipesModule } from 'ngx-pipes';
import { MatRippleModule } from '@angular/material';

// import {MaterialModule} from '@angular/material/material.module';
import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';

import { DocumentationModule } from '../documentation';
import { MetabolCommonModule } from '../metabol.common';
import { SearchEngineModule } from "../metabol.search-engine";
import { VisualizationModule } from "../metabol.visualization";
import { MetabolAuthModule } from "../metabol.auth";
import { SubsystemAnalyzeModule } from "../metabol.subsystem-analyze";
import { MetabolPanelModule } from '../metabol.panel';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatButtonModule} from '@angular/material';
import { MatTabsModule} from '@angular/material/tabs';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';


import {NoopAnimationsModule} from '@angular/platform-browser/animations';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ]
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA]
  ,
  imports: [
    // MaterialModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MetabolCommonModule,
    DocumentationModule,
    MetabolAuthModule,
    SearchEngineModule,
    SubsystemAnalyzeModule,
    MetabolPanelModule,
    VisualizationModule,
    NgPipesModule,
    MatRippleModule,
    SimpleNotificationsModule.forRoot(),

    routing,

    // BrowserAnimationsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
