import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogPathwayVisualizationComponent } from '../dialog-pathway-visualization';
import { DialogReactionResultsComponent } from '../dialog-reaction-results';
import * as _ from 'lodash';


@Component({
  selector: 'result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit, OnChanges {

  @Input() data;
  tableData;

  analysisNames: Array<string>;
  columns;
  // Result is defined to sort pathway scores in sortScores()
  result = [{
    x : [],
    y : []
  }];

  constructor(private dialog: MatDialog) { }

  ngOnInit() { }

  ngOnChanges() {
    let tableData = Object.keys(this.data[0].results_pathway[0])
      .map(x => ({ name: x }));

    this.columns = [{ name: 'Name' }];
    this.sortScores(this.data[0].results_pathway);
    this.analysisNames = [];

    for (let i = 0; i < this.data.length; i++) {
      let analysisName = `${this.data[i].name}_${i}`;
      this.columns.push({ prop: analysisName, comparator: this.scoreComparator.bind(this) });
      this.analysisNames.push(analysisName);
      for (let t of tableData)
        t[analysisName] = this.data[i].results_pathway[0][t.name];
    }
    this.tableData = tableData;
  }

  openReactionDialog(pathway, index) {
    let dialogRef = this.dialog.open(DialogReactionResultsComponent);
    dialogRef.componentInstance.pathway = pathway;
    dialogRef.componentInstance.fluxes = this.data[0].results_reaction[0];
  }

  openPathwayDialog(pathway, index) {
    let dialogRef = this.dialog.open(DialogPathwayVisualizationComponent, {
      width: '1000px',
    });
    let flux_dictionary = { 'reaction_data': this.data[0].results_reaction[0], 'fold_changes': this.data[0].fold_changes}
    dialogRef.componentInstance.pathway = pathway;
    dialogRef.componentInstance.fluxes = flux_dictionary;
  }

  scoreComparator(s1, s2) {
    return Math.abs(s1) > Math.abs(s2) ? 1 : -1;
  }

  sortScores(pathwayScores) {
    let sortedPathways = {};
    this.result[0].x = Object.keys(pathwayScores[0]);
    this.result[0].y = [];

    for (let scores of pathwayScores) {
      let sortedScores = _.orderBy(_.toPairs(scores), [(x) => x[1]], ['desc']);
      this.result[0].x = sortedScores.map(x => x[0]);
      this.result[0].y = sortedScores.map(x => x[1]);
    }
  }
}
