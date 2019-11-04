import { Component, ElementRef, OnChanges, Input } from '@angular/core';
import { AppDataLoader } from '../../../metabol.common/services';
import { EscherService } from '../../services';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pathway-visualization',
  templateUrl: './pathway-visualization.component.html',
  styleUrls: ['./pathway-visualization.component.css']
})
export class PathwayVisualizationComponent implements OnChanges {

  @Input() name;
  @Input() fluxes?: Array<any>;


  constructor(
    private loader: AppDataLoader,
    private elementRef: ElementRef,
    private escher: EscherService,
    private http: HttpClient) { }

  ngOnChanges() {
    console.log("Pathway Name: " + this.name);
    this.loader.get('recon2', (recon) => {
      let element = d3.select(this.elementRef.nativeElement).select('#map_container_3');
      this.escher.buildPathwayMap(this.name, recon, element, this.fluxes, (m) => {
        //if (this.fluxes) this.escher.setFluxData(m, this.fluxes);
      });
    });

  }

}
