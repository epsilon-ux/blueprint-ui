import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['../../../components/collapsible-panel/collapsible-panel.component.scss']
})
export class UsageComponent implements OnInit {

  logoSrc = 'https://epsilon-ux.github.io/blueprint-primary-navigation/assets/logo.svg';
  logoAlt = 'PeopleCloud Product';

  programSetupNavItems = [
    {
      text: 'Batch',
      action: 'batch'
    },
    {
      text: 'Momentum',
      action: 'momentum'
    },
    {
      text: 'Program Management',
      action: 'programManagement'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}
