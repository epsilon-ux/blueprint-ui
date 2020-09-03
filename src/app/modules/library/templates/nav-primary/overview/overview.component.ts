import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['../../../components/collapsible-panel/collapsible-panel.component.scss']
})
export class OverviewComponent implements OnInit {

  logoSrc = 'https://epsilon-ux.github.io/blueprint-primary-navigation/assets/logo.svg';
  logoAlt = 'PeopleCloud Product';

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
