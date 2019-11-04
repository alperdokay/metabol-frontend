import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConcentrationTableComponent} from '../concentration-table/concentration-table.component';
import {MetaboliteConcentration} from '../../models/metaboliteConcentration';
import * as _ from 'lodash';
@Component({
  selector: 'app-upload',
  templateUrl: 'upload.component.html',
  styleUrls: ['upload.component.css'],
})
export class UploadComponent {
  conTable: Array<[string, number]> = [];
  file: any;

  constructor(fb: FormBuilder) { }

  jsonChange($event) {
    this.readJson($event.target);
  }

  readJson(inputValue: any) {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    myReader.onload = (e: any) =>
      this.conTable = <Array<[string, number]>>_.toPairs(JSON.parse(e.target.result));
    myReader.readAsText(file);
  }

  csvChange($event) {
    this.readCsv($event.target);
  }

  readCsv(inputValue: any) {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    myReader.onload = (e: any) => {
      let lines = e.target.result.split("\n");
      for (let i of lines) {
        let c = i.split(',');
        this.conTable.push(c);
      }
    }
    myReader.readAsText(file);
  }

}
