import { Component, OnInit } from '@angular/core';
import { AppDataLoader } from '../../../metabol.common/services';
import * as _ from 'lodash';

@Component({
  selector: 'app-subsystem',
  templateUrl: 'subsystem.component.html',
  styleUrls: ['subsystem.component.css'],
})
export class SubsystemComponent implements OnInit {

  subsystems: string[];
  encodeURIComponent = encodeURIComponent;

  constructor(private loader: AppDataLoader) { }

  ngOnInit() {
    this.loader.get('recon2', (recon) => {
      this.subsystems = _.keys(recon.pathways);
    });
  }

}
