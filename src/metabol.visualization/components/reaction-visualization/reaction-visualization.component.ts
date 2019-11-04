import { Component, ElementRef, OnChanges, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AppDataLoader } from '../../../metabol.common/services';
import {EscherService} from '../../services';
import * as d3 from 'd3';
import * as _ from 'lodash';

@Component({
  selector: 'visualization-reaction',
  templateUrl: 'reaction-visualization.component.html',
  styleUrls: ['reaction-visualization.component.css'],
})
export class ReactionVisualizationComponent implements OnChanges {

  @Input() id;

  constructor(
    private loader: AppDataLoader,
    private elementRef: ElementRef,
    private escher: EscherService) { }

  ngOnChanges() {
    this.loader.get('recon2', (recon) => {
      let element = d3.select(this.elementRef.nativeElement).select('#map_container_3');
      this.escher.buildReactionMap(this.id, recon, element);
    });
  }


}
