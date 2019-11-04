import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

import { LoginService } from "../../../metabol.auth/services";
import { MetaboliteConcentration } from '../../models/metaboliteConcentration';
import { SubsystemAnalyzeService } from "../../services/subsystem-analyze/subsystem-analyze.service";
import { AppSettings } from '../../../app/';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'concentration-table',
  templateUrl: 'concentration-table.component.html',
  styleUrls: ['concentration-table.component.css'],
  providers: [SubsystemAnalyzeService],
})
export class ConcentrationTableComponent implements OnInit {
  @Input() conTable: Array<[string, number]> = [];

  form: FormGroup;
  analyzeName: FormControl;
  isPublic: FormControl;
  selectedMethod = 0;
  comboboxMethods: Array<object> = [
    { id: 0, name: "Metabolitics" },
    { id: 1, name: "Direct Pathway Mapping" },
    { id: 2, name: "Pathway Enrichment"}
  ];
  methods = {
    Metabolitics: 0,
    DirectPathwayMapping: 1,
    MetaboliteEnrichment: 2
  };
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private login: LoginService,
    private http: HttpClient,
    private notify: NotificationsService) { }

  ngOnInit() {
    this.form = this.createForm();
    this.analyzeName = new FormControl("My Analyze", Validators.required);
    this.isPublic = new FormControl(true, Validators.required);
  }

  remove(index) {
    this.conTable.splice(index, 1);
  }

  createForm() {
    return this.fb.group({
      "name": ["", Validators.required],
      "value": ["", Validators.pattern('[0-9]+(\\.[0-9]+)?')]
    });
  }

  onSubmit(value) {
    this.conTable.push([value['name'], parseInt(value['value'])]);
    this.form = this.createForm();
  }

  analyze() {
    const selectedMethod = this.selectedMethod;
    let data = {
      "name": this.analyzeName.value,
      "public": this.isPublic.value,
      "concentration_changes": _.fromPairs(this.conTable)
    };
    if (selectedMethod === this.methods.Metabolitics) {
      this.metabolitics(data);
    }
    else if(selectedMethod === this.methods.DirectPathwayMapping) {
      this.directPathwayMapping(data);
    }
    else if(selectedMethod === this.methods.MetaboliteEnrichment){
      this.metaboliteEnrichment(data);
    }
  }
  metabolitics(data) {
    this.http.post(`${AppSettings.API_ENDPOINT}/analysis/fva`,
      data, this.login.optionByAuthorization())
      .subscribe((data: any) => {
        this.notify.info('Analysis Start', 'Analysis in progress');
        this.router.navigate(['/past-analysis', data['id']]);
      },
        error => {
          this.notify.error('Analysis Fail', error);
        });
  }

  directPathwayMapping(data) {
     console.log("Running...");
     this.http.post(`http://127.0.0.1:5000/analysis/direct-pathway-mapping`,
         data, this.login.optionByAuthorization())
         .subscribe((data:any) => {
           console.log(data);
           this.notify.info('Analysis Start', 'Analysis in progress');
           this.notify.success('Analysis Done', 'Analysis is successfully done');
           this.router.navigate(['/past-analysis', data['id']]);
         },
         error => {
         this.notify.error('Analysis Fail', error);
      });
    // data['results_pathway'] = [this.scorePathways(data['concentration_changes'])];
    // data['results_reaction'] = [this.scoreReactions(data['concentration_changes'])];
    // data['results_metabolite'] = [data['concentration_changes']];
    localStorage.setItem('search-results', JSON.stringify(data));
    // localStorage.setItem('histogram', JSON.stringify(pathwayScores));
    // this.router.navigate(['/past-analysis', 'direct-pathway-mapping']);
  }
  metaboliteEnrichment(data){
    console.log("Metabolite enrichment is running...");
    this.http.post(`http://127.0.0.1:5000/analysis/metabolite-enrichment`,
         data, this.login.optionByAuthorization())
         .subscribe((data:any) => {
           console.log(data);
           this.notify.info('Analysis Start', 'Analysis in progress');
           this.notify.success('Analysis Done', 'Analysis is successfully done');
           this.router.navigate(['/past-analysis', data['id']]);
         },
         error => {
         this.notify.error('Analysis Fail', error);
      });
    localStorage.setItem('search-results', JSON.stringify(data));
  }
}
