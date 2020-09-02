import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['../../collapsible-panel/collapsible-panel.component.scss']
})
export class OverviewComponent implements OnInit {

  logoSrc = 'https://epsilon-ux.github.io/blueprint-primary-navigation/assets/logo.svg';
  logoAlt = 'PeopleCloud Product';

  constructor() { }

  ngOnInit(): void { }

}