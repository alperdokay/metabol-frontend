import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatRippleModule } from '@angular/material';

import {
  ConcentrationTableComponent,
  ManualComponent,
  MeasurementComponent,
  UploadComponent,
  SampleComponent,
  SubsystemAnalyzeComponent
} from './components';

import { subsystemAnalyzeRoutingProviders, subsystemAnalyzeRouting } from './subsystem-analyze.routes';

import { MetabolCommonModule } from '../metabol.common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
      MatSlideToggleModule,


    MatRippleModule,

    subsystemAnalyzeRouting,
    MetabolCommonModule
  ],
  providers: [subsystemAnalyzeRoutingProviders],
  declarations: [
    ConcentrationTableComponent,
    ManualComponent,
    MeasurementComponent,
    UploadComponent,
    SampleComponent,
    SubsystemAnalyzeComponent
  ],
  exports: [

  ]
})
export class SubsystemAnalyzeModule { }
