/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppDataLoader } from './data-loader.service';
import {HttpModule} from '@angular/http';

describe('Service: DataLoader', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppDataLoader],
      imports:[
        HttpModule
      ]
    });
  });

  it('should ...', inject([AppDataLoader], (service: AppDataLoader) => {
    expect(service).toBeTruthy();
  }));

});
