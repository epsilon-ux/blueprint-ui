import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {

  standard = [
    {
      text: 'Active Page',
      route: './'
    },
    {
      text: 'Page',
      route: './demo'
    },
    {
      text: 'Page',
      route: './demo'
    },
    {
      text: 'Page',
      route: './demo'
    }
  ];

  groups = [
    {
      text: 'Active Page',
      route: '/library/components/nav-secondary/usage'
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

  ngOnInit(): void {
  }

}