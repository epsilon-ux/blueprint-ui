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
      text: 'Path',
      bpRouterLink: '/components/buttons-links/overview'
    },
    {
      text: 'to',
      bpRouterLink: '/components/buttons-links/usage'
    },
    {
      text: 'Current Location'
    }
  ];

  constructor() { }

  ngOnInit() { }

}