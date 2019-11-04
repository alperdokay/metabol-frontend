import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {CurrencyMetabolitesService, AppDataLoader} from './services';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [
    AppDataLoader,
    CurrencyMetabolitesService
  ],
})
export class MetabolCommonModule { }
