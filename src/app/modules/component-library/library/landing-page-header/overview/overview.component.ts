import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  headingText = 'Header Text';
  actionText = 'Action Text';
  hasAction = true;
  actionElement = 'dropdown';
  href = '#';

  dropdownItems = [
    {
      text: 'Item 1',
      action: 'test'
    },
    {
      text: 'Item 2',
      routerLink: ''
    }
  ];

  constructor() { }

  ngOnInit() { }

  handleAction(e) { }

}
