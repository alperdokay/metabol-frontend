import * as d3 from 'd3';

export interface SubsystemTreeNode {
  name: string;
  children: Array<SubsystemTreeNode>;
  type: SubsystemTreeNodeType;
  active: boolean;
  highlight:boolean;
}

export enum SubsystemTreeNodeType {
  All,
  Pathway,
  Solution
}
