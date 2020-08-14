import { Component } from '@angular/core';
import { BreadcrumbInterface } from 'epsilon-blueprint';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent {

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