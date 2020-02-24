import { Component, OnInit, Input } from '@angular/core';

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
  
  isNavCollapsed = false;

  @Input() title: string;
  @Input() items: Item[];
  @Input() shouldRouteMatchExact = false;

  constructor() { }

  ngOnInit() {}

  toggleNav() {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

}
