import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['../../../components/collapsible-panel/collapsible-panel.component.scss']
})
export class UsageComponent implements OnInit {

  businessUnits = [
    {
      text: 'Business Unit 1'
    },
    {
      text: 'Business Unit 2'
    },
    {
      text: 'Business Unit 3'
    }
  ];
  selectedBusinessUnit;

  parents = [
    {
      text: 'Parent 1'
    },
    {
      text: 'Parent 2'
    },
    {
      text: 'Parent 3'
    }
  ];
  selectedParent;

  tenants = [
    {
      text: 'Tenant 1'
    },
    {
      text: 'Tenant 2'
    },
    {
      text: 'Tenant 3'
    }
  ];
  selectedTenant;

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
