import { Component, OnInit } from '@angular/core';
import { BreadcrumbInterface } from 'epsilon-blueprint';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {

  crumbs: BreadcrumbInterface[] = [
    {
      text: 'First Page',
      bpRouterLink: '.'
    },
    {
      text: 'Previous Page',
      bpRouterLink: '.'
    },
    {
      text: 'Current Page'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
