import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import * as _ from 'lodash';
import { NotificationsService } from 'angular2-notifications';

import { AppDataLoader } from '../../../metabol.common/services';
import { AppSettings } from '../../../app/';
import { map } from "rxjs/operators";

@Component({
  selector: 'analysis-search',
  templateUrl: './analysis-search.component.html',
  styleUrls: ['./analysis-search.component.css']
})
export class AnalysisSearchComponent implements OnInit {

  form: FormGroup;

  pathways;
  filteredPathways;

  pathwayChanges = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private loader: AppDataLoader) { }

  ngOnInit() {

    this.loader.get('recon2', (recon) => {
      this.pathways = Object.keys(recon.pathways).sort();
    });

    this.form = this.fb.group({
      pathway: ["", Validators.required],
      change: ["", Validators.required],
      qualifier: [],
      amount: []
    });

    this.filteredPathways = this.form.controls.pathway.valueChanges
      //.startWith(null)
      .pipe(map(val => val ? this.filter(val).sort() : this.pathways.slice()));
  }

  filter(val: string): string[] {
    return this.pathways.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

  remove(index) {
    this.pathwayChanges.splice(index, 1);
  }

  add(value) {
    this.pathwayChanges.push(value);
    this.form.reset();
  }

  search() {
    this.http.post(`${AppSettings.API_ENDPOINT}/analysis/search-by-change`, this.pathwayChanges)
      .subscribe((data:any) => {
        localStorage.setItem('search-results', JSON.stringify(data));
        this.router.navigate(['past-analysis']);
      });
  }

}
