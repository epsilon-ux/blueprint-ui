import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  headingText = 'Header Text';
  actionText = 'Action Text';
  hasAction = true;
  actionElement = 'dropdown';

  dropdownItems = [
    {
      text: 'Item 1',
      action: 'test'
    },
    {
      text: 'Item 2',
      bpRouterLink: ''
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  handleAction() { }

}