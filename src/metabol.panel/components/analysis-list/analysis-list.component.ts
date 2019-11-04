import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { AppSettings } from "../../../app";
import { LoginService } from "../../../metabol.auth/services";
import * as _ from 'lodash';


@Component({
  selector: 'app-analysis-list',
  templateUrl: './analysis-list.component.html',
  styleUrls: ['./analysis-list.component.css']
})
export class AnalysisListComponent implements OnInit, OnChanges {

  @Input() type: string;


  data = { list: [], disease: [] };
  form = new FormGroup({});

  constructor(private http: HttpClient, private fb: FormBuilder, private login: LoginService, private router: Router) { }

  ngOnInit() { }

  ngOnChanges() {
    this.getData(this.type);
  }

  getData(type: string) {
    let apiUrl = `${AppSettings.API_ENDPOINT}/analysis/${type}`;

    if (type != 'private' || this.login.isLoggedIn())
      this.http.get(apiUrl)
        .subscribe((d:any) => {
          this.data[type] = d;
          this.createForm();
        });
  }

  createForm() {
    let combined_data = [...this.data.list, ...this.data.disease];
    this.form = this.fb.group(_.zipObject(combined_data.map(x => x.id),
      _.times(combined_data.length, _.constant([false]))));
  }

  submit() {
    let selecteds = _.toPairs(this.form.value).filter(x => x[1]).map(x => x[0]);
    this.router.navigate(['panel', 'compare-analysis', selecteds]);
  }
}
