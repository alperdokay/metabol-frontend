import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ReactionVisualizationComponent,
  MetaboliteVisualizationComponent,
  PathwayVisualizationComponent,
  PathwayHeatmapComponent,
  PathwayHistogramComponent
} from './components';

import { MatDialogModule } from '@angular/material';


import { EscherService } from './services';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  declarations: [
    ReactionVisualizationComponent,
    MetaboliteVisualizationComponent,
    PathwayVisualizationComponent,
    PathwayHeatmapComponent,
    PathwayHistogramComponent
  ],
  providers: [
    EscherService
  ],
  exports: [
    ReactionVisualizationComponent,
    MetaboliteVisualizationComponent,
    PathwayVisualizationComponent,
    PathwayHeatmapComponent,
    PathwayHistogramComponent
  ]
})
export class VisualizationModule { }
