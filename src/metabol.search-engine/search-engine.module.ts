import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgPipesModule } from 'ngx-pipes';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material';
// import { MatCardModule } from '@angular/material';
// // import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatMenuModule} from '@angular/material';
// import {MatSelectModule} from '@angular/material/select';
// import {MatInputModule} from '@angular/material';
// import { MatFormFieldModule} from '@angular/material';
//

import { MatButtonModule} from '@angular/material/button';
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



import {
  ChemicalEquationComponent,
  ReactionDetailsComponent,
  MetaboliteDetailsComponent,
  SearchBarComponent,
  SearchPageComponent,
  SearchResultComponent,
  SubsystemComponent,
  SubsystemDetailComponent,
  AnalysisSearchComponent
} from './components';

import { VisualizationModule } from "../metabol.visualization";
import { searchEngineRouting } from './search-engine.routes';

@NgModule({
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA]
  // ,
  imports: [
    MatCardModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
      MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatDialogModule,


    MatRippleModule,
    FlexLayoutModule,
    NgPipesModule,

    searchEngineRouting,
    VisualizationModule,
  ],
  // providers: [searchEngineRoutingProviders],
  declarations: [
    ChemicalEquationComponent,
    ReactionDetailsComponent,
    MetaboliteDetailsComponent,
    SearchBarComponent,
    SearchPageComponent,
    SearchResultComponent,
    SubsystemComponent,
    SubsystemDetailComponent,
    AnalysisSearchComponent
  ]
})
export class SearchEngineModule { }
