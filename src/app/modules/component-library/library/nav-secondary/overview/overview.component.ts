import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
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
      text: 'Page 2',
      route: '',
      children: [
        {
          text: 'Nested Page0',
          route: ''
        },
        {
          text: 'Nested Page1',
          route: '',
          children: [
            {
              text: 'Nested Page2',
              route: ''
            },
            {
              text: 'Nested Page3',
              route: ''
            }
          ]
        }
      ]
    },
    {
      text: 'Page 3',
      route: ''
    },
    {
      text: 'Page 4'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
