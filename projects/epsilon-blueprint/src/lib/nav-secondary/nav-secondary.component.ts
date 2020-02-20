import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-nav-secondary',
  templateUrl: './nav-secondary.component.html',
  styleUrls: ['./nav-secondary.component.scss']
})
export class NavSecondaryComponent implements OnInit {
  
  isNavCollapsed = false;
  
  @Input() items: {
    route: string;
    text: string;
  }[];

  constructor() { }

  ngOnInit() {}

  toggleNav() {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

}
