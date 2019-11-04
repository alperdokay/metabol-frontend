import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-pathway-visualization',
  templateUrl: './dialog-pathway-visualization.component.html',
  styleUrls: ['./dialog-pathway-visualization.component.css']
})
export class DialogPathwayVisualizationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogPathwayVisualizationComponent>) { }

  pathway: string;
  fluxes: any;

  ngOnInit() {

  }

}
