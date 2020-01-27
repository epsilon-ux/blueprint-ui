import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.scss']
})
export class SecondaryNavComponent implements OnInit {
  isNavCollapsed = false;

  @Input() title = '';
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
