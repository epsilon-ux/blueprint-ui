import { Component, OnInit } from '@angular/core';
import { BreadcrumbInterface } from 'epsilon-blueprint';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

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

  ngOnInit() { }

}