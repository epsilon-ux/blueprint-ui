import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['../../../components/collapsible-panel/collapsible-panel.component.scss']
})
export class OverviewComponent implements OnInit {

  contexts = [
    {
      text: 'Business Unit'
    },
    {
      text: 'Parent'
    },
    {
      text: 'Tenant'
    }
  ];
  selectedContext;

  navDropdownItems = [
    {
      heading: 'Dropdown Header'
    },
    {
      text: 'Button',
      action: 'click'
    },
    {
      text: 'In-App Link',
      bpRouterLink: './demo'
    },
    {
      text: 'External Link',
      href: '#',
      target: '_blank'
    },
    {
      isDivider: true
    },
    {
      plainText: 'Dropdown Text'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}