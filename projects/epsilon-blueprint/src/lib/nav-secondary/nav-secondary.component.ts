import { Component, OnInit, Input } from '@angular/core';
import { generateUniqueId } from '../../helpers';

interface Item {
  route: string;
  text: string;
  children?: Item[];
}[];

@Component({
  selector: 'bp-nav-secondary',
  templateUrl: './nav-secondary.component.html',
  styleUrls: ['./nav-secondary.component.scss']
})
export class NavSecondaryComponent implements OnInit {

  @Input() title: string;
  @Input() items: Item[];
  @Input() shouldRouteMatchExact = false;
  @Input() isNavCollapsed = false;
  @Input() areItemsExpanded = false;

  uuid = 'dropdown' + generateUniqueId();

  constructor() { }

  ngOnInit() {
    this.validate();
  }

  validate() {
    this.items.forEach(item => {
      if(!item.text) {
        const err = new Error(`Missing text in ${JSON.stringify(item)}`);
        err.name = 'Missing Input';
        throw err;
      }
      if(item.route === undefined && !item.children) {
        const err = new Error(`Nav item needs either a route or children in ${JSON.stringify(item)}`);
        err.name = 'Missing Input';
        throw err;
      }
      if(item.route !== undefined && item.children) {
        const err = new Error(`Nav item can't have both a route and children in ${JSON.stringify(item)}`);
        err.name = 'Invalid Input';
        throw err;
      }
    });
  }

  toggleNav() {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

}
