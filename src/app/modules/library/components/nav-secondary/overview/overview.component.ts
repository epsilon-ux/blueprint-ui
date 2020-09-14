import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  navItems = [
    {
      text: 'Active Page',
      route: './'
    },
    {
      text: 'Page',
      route: './demo'
    },
    {
      text: 'Page Group',
      children: [
        {
          text: 'Child Page',
          route: './demo'
        },
        {
          text: 'Nested Page Group',
          children: [
            {
              text: 'Nested Child Page',
              route: './demo'
            },
            {
              text: 'Nested Child Page',
              route: './demo'
            }
          ]
        }
      ]
    },
    {
      text: 'Page',
      route: './demo'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}