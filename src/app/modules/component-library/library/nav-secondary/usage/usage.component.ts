import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['../nav-secondary.component.scss']
})
export class UsageComponent implements OnInit {

  standard = [
    {
      text: 'Active Page',
      route: '/components/nav-secondary/usage'
    },
    {
      text: 'Page',
      route: ''
    },
    {
      text: 'Page',
      route: ''
    },
    {
      text: 'Page',
      route: ''
    }
  ];

  title = [
    {
      text: 'Active Page',
      route: '/components/nav-secondary/usage'
    },
    {
      text: 'Page',
      route: ''
    },
    {
      text: 'Page',
      route: ''
    },
    {
      text: 'Page',
      route: ''
    }
  ];

  groups = [
    {
      text: 'Active Page',
      route: '/components/nav-secondary/usage'
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

  ngOnInit() {
  }

}