import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['../nav-secondary.component.scss']
})
export class OverviewComponent implements OnInit {

  navItems = [
    {
      text: 'Active Page',
      route: '/components/nav-secondary/overview'
    },
    {
      text: 'Page',
      route: ''
    },
    {
      text: 'Page Group',
      children: [
        {
          text: 'Child Page',
          route: ''
        },
        {
          text: 'Nested Page Group',
          children: [
            {
              text: 'Nested Child Page',
              route: ''
            },
            {
              text: 'Nested Child Page',
              route: ''
            }
          ]
        }
      ]
    },
    {
      text: 'Page',
      route: ''
    }
  ];

  constructor() { }

  ngOnInit() { }

}