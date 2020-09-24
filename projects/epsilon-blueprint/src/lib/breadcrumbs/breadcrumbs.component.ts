import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  clickCrumb: EventEmitter<BreadcrumbInterface> = new EventEmitter();

  uuid: string;

  constructor() { }

  ngOnInit(): void {
    this.validate();
    if (!this.bpID) {
      this.uuid = 'breadcrumbs' + generateUniqueId().toString();
    } else {
      this.uuid = this.bpID;
    }
  }

  handleClick(crumb: BreadcrumbInterface): void {
    if (!crumb.bpRouterLink && !crumb.href) {
      this.clickCrumb.emit(crumb);
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
    });
  }

}