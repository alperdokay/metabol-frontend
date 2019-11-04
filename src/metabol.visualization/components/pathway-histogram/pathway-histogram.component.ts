import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';

declare var Plotly: any;

@Component({
  selector: 'pathway-histogram',
  templateUrl: './pathway-histogram.component.html',
  styleUrls: ['./pathway-histogram.component.css']
})
export class PathwayHistogramComponent implements OnInit, AfterViewInit {

  constructor() { }

  data = [{
    x: ['a', 'b', 'c'],
    y: [1, 20, 30],
    type: 'bar',
    marker: {
      color: []
    },

  }];

  @Input() pathwayScores: Array<object>;

  ngOnInit() { }

  ngAfterViewInit() {
    this.data[0].x = Object.keys(this.pathwayScores[0]);
    this.data[0].y = [];

    for (let scores of this.pathwayScores) {
      let sortedScores = _.orderBy(_.toPairs(scores), [(x) => Math.abs(x[1])], ['desc']).slice(0, 20);
      this.data[0].x = sortedScores.map(x => x[0]);
      this.data[0].y = sortedScores.map(x => x[1]);
      this.data[0].marker.color = sortedScores.map(x => x[1] > 0 ? '#3F51B5' : '#E91E63');
    }
    Plotly.plot('histogram', this.data);
  }

}
