import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';


declare var Plotly: any;

@Component({
  selector: 'pathway-heatmap',
  templateUrl: './pathway-heatmap.component.html',
  styleUrls: ['./pathway-heatmap.component.css']
})
export class PathwayHeatmapComponent implements OnInit {

  constructor() { }

  data = [{
    x: ['a', 'b', 'c'],
    z: [[1, 20, 30], [20, 1, 60], [30, 60, 1, 5]],
    type: 'heatmap',
  }];

  @Input() pathwayScores: Array<object>;

  ngOnInit() { }

  ngAfterViewInit() {
    this.data[0].x = Object.keys(this.pathwayScores[0]);
    this.data[0].z = [];

    for (let scores of this.pathwayScores)
      this.data[0].z.push(_.sortBy(_.toPairs(scores), [(x) => x[0]]).map(x => x[1]));

    Plotly.plot('heatmap', this.data);
  }

}
