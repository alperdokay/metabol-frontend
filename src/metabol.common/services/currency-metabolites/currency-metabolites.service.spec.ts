/* tslint:disable:no-unused-variable */

import { CurrencyMetabolitesService } from './currency-metabolites.service';
import { TestBed, async, inject } from '@angular/core/testing';

describe('CurrencyMetabolites Service', () => {
  let currencyMetabolitesService: CurrencyMetabolitesService;

  let localStoreData = {
    "2hb[c]": "",
    "2hb[e]": "",
    "h[c]": ""
  };

  beforeAll(function() {
    localStorage.clear();
    localStorage.setItem('currency-metabolites', JSON.stringify(localStoreData));
  });

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [CurrencyMetabolitesService]
    });

    currencyMetabolitesService = TestBed.get(CurrencyMetabolitesService);

  });

  it('should correctly initialized', () => {
    expect(currencyMetabolitesService.currencyMetabolites).not.toBeNull();
  });

  it('should isCurrecyMetabolite', () => {
    expect(currencyMetabolitesService.isCurrency('h[c]')).toBeTruthy();
    expect(currencyMetabolitesService.isCurrency('2hb[e]')).toBeTruthy();
    expect(currencyMetabolitesService.isCurrency('nocurrency')).not.toBeTruthy();
  });

  afterAll(() => {
    localStorage.clear();
  });

});
