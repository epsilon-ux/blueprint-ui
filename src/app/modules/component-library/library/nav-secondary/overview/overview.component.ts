import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  navItems = [
    {
      text: 'ActivePage',
      route: '/components/nav-secondary/overview'
    },
    {
      text: 'Page',
      route: ''
    },
    {
      text: 'Page2',
      children: [
        {
          text: 'NestedPage0',
          route: ''
        },
        {
          text: 'NestedPage1',
          children: [
            {
              text: 'NestedPage2',
              route: ''
            },
            {
              text: 'NestedPage3',
              route: ''
            }
          ]
        }
      ]
    },
    {
      text: 'Page3',
      route: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
