import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbInterface } from './breadcrumbs.interface';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input()
  crumbs: BreadcrumbInterface[];
  @Input()
  bpID: string;

  uuid: string;

  constructor() { }

  ngOnInit(): void {
    this.validate();
    if(!this.bpID) {
      this.uuid = 'breadcrumbs' + generateUniqueId().toString();
    } else {
      this.uuid = this.bpID;
    }
  }

  validate(): void {
    if (!this.crumbs) {
      const err = new Error('\'crumbs\' is a required Input of bp-breadcrumbs');
      err.name = 'Missing Input';
      throw err;
    }
    this.crumbs.forEach((crumb, i) => {
      if (!crumb.text) {
        const err = new Error('Text is a required property of bp-breadcrumbs \'crumbs\' Input');
        err.name = 'Missing Input';
        throw err;
      }
      if (i !== this.crumbs.length - 1) {
        if (!crumb.bpRouterLink && !crumb.href) {
          // eslint-disable-next-line
          const err = new Error('Must provide either \'bpRouterLink\' or \'href\' for each crumb of bp-breadcrumbs \'crumbs\' Input, except in the last crumb.');
          err.name = 'Missing Input';
          throw err;
        }
      } else {
        if (crumb.bpRouterLink || crumb.href || crumb.target) {
          // eslint-disable-next-line
          const err = new Error('The last crumb of the \'crumbs\' Input in bp-breadcrumbs can only have a text property.');
          err.name = 'Invalid Input';
          throw err;
        }
      }
    });
  }

}