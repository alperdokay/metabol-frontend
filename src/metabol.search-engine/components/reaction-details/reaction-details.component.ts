import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AppDataLoader } from '../../../metabol.common/services';
import {ReactionVisualizationComponent} from '../../../metabol.visualization/components'
import * as _ from 'lodash';

@Component({
  selector: 'app-reaction-details',
  templateUrl: 'reaction-details.component.html',
  styleUrls: ['reaction-details.component.css'],
})
export class ReactionDetailsComponent implements OnInit {

  reaction;
  relatedMetabolites;


  constructor(private route: ActivatedRoute, private loader: AppDataLoader) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loader.get("recon2", (recon) => {
        this.reaction = recon.reactions[params['id']];
        this.relatedMetabolites = _.keys(this.reaction.metabolites).map(x => recon.metabolites[x]);
      });
    });
  }

}
