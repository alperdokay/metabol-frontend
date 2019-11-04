/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EscherService } from './escher.service';
import { HttpModule } from '@angular/http';


describe('Service: Escher', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [EscherService]
    });
  });

  it('should ...', inject([EscherService], (service: EscherService) => {
    expect(service).toBeTruthy();
  }));
});
