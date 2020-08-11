import { Component } from '@angular/core';
import { BreadcrumbInterface } from 'epsilon-blueprint';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent {

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

}