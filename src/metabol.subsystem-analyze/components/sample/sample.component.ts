import {HttpClient} from "@angular/common/http";
import {ConcentrationTableComponent} from "../concentration-table/concentration-table.component";
import {MetaboliteConcentration} from "../../models/metaboliteConcentration";
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-sample',
  templateUrl: 'sample.component.html',
  styleUrls: ['sample.component.css'],
})
export class SampleComponent implements OnInit {

  conTable: Array<[string, number]> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadSampleDataSet();
  }

  loadSampleDataSet() {
    this.http.get('assets/example-analyze-doc-files/example.json')

      .subscribe((data:any) => this.conTable = <Array<[string, number]>>_.toPairs(data));
  }
}
