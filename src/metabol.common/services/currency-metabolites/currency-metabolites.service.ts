import { Injectable } from '@angular/core';

/**
 * Service to check is metabolite currency or not
 */
@Injectable()
export class CurrencyMetabolitesService {

  currencyMetabolites: { [key: string]: string }

  constructor() {
    this.loadCurrecyMetabolites();
  }

  /**
   * Loads currency metabolites from localStorage
   */
  private loadCurrecyMetabolites(): void {
    let collection = 'currency-metabolites';
    this.currencyMetabolites = JSON.parse(localStorage.getItem(collection));
  }

  /**
   * Check that is metabolite currency
   * @param  {string}  metabolite name of metabolite
   * @return {boolean}            is metabolite currency or not
   */
  isCurrency(metabolite: string): boolean {
    return Boolean(metabolite in this.currencyMetabolites);
  }

}
