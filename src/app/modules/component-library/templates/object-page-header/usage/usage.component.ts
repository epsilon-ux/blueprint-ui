import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['../object-page-header.component.scss']
})
export class UsageComponent implements OnInit {

  @Input()
  selectorOptions = [];

  @Input()
  optionSelected: string;

  exampleItems = [
    {
      text: 'Dropdown Item',
      action: 'item1'
    },
    {
      text: 'Dropdown Item',
      action: 'item2',
      isDisabled: true
    },
    {
      text: 'Dropdown Item',
      action: 'item3',
      isDestructive: true
    }
  ];

  constructor() { }

  ngOnInit() { }

  handleSelectionChange = (event) => { }
}
