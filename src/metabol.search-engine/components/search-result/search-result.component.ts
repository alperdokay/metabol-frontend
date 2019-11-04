import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AppDataLoader } from '../../../metabol.common/services';
import * as _ from 'lodash';

@Component({
  selector: 'app-search-result',
  templateUrl: 'search-result.component.html',
  styleUrls: ['search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  query: string;
  filteredMetabolites: Array<any>;
  filteredReactions: Array<any>;
  filteredPathways: Array<any>;

  constructor(private route: ActivatedRoute, private loader: AppDataLoader) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loader.get('recon2', (recon) => {
        // this.filteredReactions = this.filter(recon.reactions, params['query']);
        // this.filteredMetabolites = this.filter(recon.metabolites, params['query']);
        // this.filteredPathways = this.filter(recon.pathways, params['query']);
        const query = params['query'];
        this.filteredReactions = _.values<any>(recon.reactions)
          .filter(x => x.id.startsWith(query) || x.name.startsWith(query));
        this.filteredMetabolites = _.values<any>(recon.metabolites)
          .filter(x => x.id.startsWith(query) || x.name.startsWith(query));
        this.filteredPathways = _.keys(recon.pathways)
          .filter(x => x.startsWith(query));
      });
    });
  }

  filter(metaboliteReaction, query) {
    return _.values<any>(metaboliteReaction)
      .filter(x => x.id.startsWith(query) || x.name.startsWith(query));
  }

}
