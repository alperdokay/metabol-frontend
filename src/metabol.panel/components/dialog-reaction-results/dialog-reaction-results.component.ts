import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AppDataLoader } from '../../../metabol.common/services'
import * as _ from 'lodash';


@Component({
  selector: 'app-dialog-reaction-results',
  templateUrl: './dialog-reaction-results.component.html',
  styleUrls: ['./dialog-reaction-results.component.css']
})
export class DialogReactionResultsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogReactionResultsComponent>, private loader: AppDataLoader) { }

  page: number;
  pathway: string;
  fluxes: Array<any>;
  reactions: Array<any>;

  ngOnInit() {
    this.loader.get('recon2', (recon) => {
      this.reactions = [];
      for (let r of recon.pathways[this.pathway])
        if (this.fluxes[r]){
          this.reactions.push([r, this.fluxes[r]]);
        }
      this.reactions = _.orderBy(this.reactions, [(x) => Math.abs(x[1])], ['desc']);
    });
  }

}
