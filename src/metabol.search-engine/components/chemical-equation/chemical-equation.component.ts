import { Component, OnChanges, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'chemical-equation',
  templateUrl: 'chemical-equation.component.html',
  styleUrls: ['chemical-equation.component.css'],
})
export class ChemicalEquationComponent {
  @Input() metabolites: any[];
  @Input() selectedMetabolite: { id: string, stoichiometry: number };
  reactants: Array<{ id: string, stoichiometry: number }>;
  products: Array<{ id: string, stoichiometry: number }>;

  constructor() {
    this.reactants = new Array<{ id: string, stoichiometry: number }>();
    this.products = new Array<{ id: string, stoichiometry: number }>();
  }

  // TODO: check if given data is resolved
  ngOnChanges() {
    this.constructor();

    for (let key in this.metabolites) {
      if (this.metabolites[key] > 0)
        this.products.push({
          id: key,
          stoichiometry: this.metabolites[key]
        });
      else
        this.reactants.push({
          id: key,
          stoichiometry: Math.abs(this.metabolites[key])
        });
    }
  }

}
