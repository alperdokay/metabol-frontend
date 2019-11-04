import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { map } from "rxjs/operators";
import { AppSettings } from "../../../app";
import { LoginService } from "../../../metabol.auth/services";
import * as _ from 'lodash';


@Component({
  selector: 'app-past-analysis',
  templateUrl: './past-analysis.component.html',
  styleUrls: ['./past-analysis.component.css']
})
export class PastAnalysisComponent implements OnInit {

  data = { list: [], disease: [], public: [], results: [] };
  form = new FormGroup({});

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private login: LoginService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      let searchResults = JSON.parse(localStorage.getItem('search-results'));
      if (searchResults) {
        this.data.results = searchResults;
        this.createForm();
        localStorage.removeItem('search-results');
      }
      else
        ['list', 'disease', 'public'].forEach(x => this.getData(x));
    });
  }

  search(query) {
    this.http.get(`${AppSettings.API_ENDPOINT}/analysis/search/${query}`)

      .subscribe((d:any) => {
        this.data.results = d;
        this.createForm();
      });
  }

  getData(type: string) {
    // let apiUrl = `${AppSettings.API_ENDPOINT}/analysis/${type}`;
    let apiUrl = `http://127.0.0.1:5000/analysis/${type}`;
    this.http.get(apiUrl, this.login.optionByAuthorization())

      .subscribe((d:any) => {
        this.data[type] = d;
        this.createForm();
      });
    console.log(this.data);
  }

  createForm() {
    let combined_data = [];
    for (let t in this.data)
      combined_data = combined_data.concat(this.data[t]);

    this.form = this.fb.group(_.zipObject(combined_data.map(x => x.id),
      _.times(combined_data.length, _.constant([false]))));
  }

  submit() {
    let selecteds = _.toPairs(this.form.value).filter(x => x[1]).map(x => x[0]);
    console.log(selecteds);
    this.router.navigate(['compare-analysis', selecteds]);
  }

}
