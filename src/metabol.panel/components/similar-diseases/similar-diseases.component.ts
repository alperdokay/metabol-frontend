import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as _ from 'lodash';

import { AppSettings } from "../../../app";
import { LoginService } from "../../../metabol.auth/services";


@Component({
  selector: 'similar-diseases',
  templateUrl: './similar-diseases.component.html',
  styleUrls: ['./similar-diseases.component.css']
})
export class SimilarDiseasesComponent implements OnInit {

  @Input() id;
  diseases;

  constructor(private http: HttpClient, private login: LoginService) { }

  ngOnInit() {
    // let apiUrl = `${AppSettings.API_ENDPOINT}/analysis/most-similar-diseases/${this.id}`;
    // let apiUrl = `http://127.0.0.1:5000/analysis/most-similar-diseases/${this.id}`;
    // this.http.get(apiUrl, this.login.optionByAuthorization())
    //   .subscribe((d:any) => this.diseases = _.orderBy(_.toPairs(d), '1', 'desc'));
  }

}
