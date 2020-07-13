import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {

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

  ngOnInit() { }

  handleAction(e) { }

}
