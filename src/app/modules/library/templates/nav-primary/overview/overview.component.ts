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

  navMenuItems = [
    {
      text: 'Dropdown Header',
      action: 'none',
    },
    {
      text: 'External Link',
      action: 'ext'
    },
    {
      text: 'In-App Link',
      action: 'int'
    },
    {
      text: 'Button',
      action: 'btn'
    },
    {
      text: 'Dropdown Divider',
      action: 'none',
    },
    {
      text: 'Dropdown Text',
      action: 'none',
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}
