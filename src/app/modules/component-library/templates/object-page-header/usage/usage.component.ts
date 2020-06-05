import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['../object-page-header.component.scss']
})
export class UsageComponent implements OnInit {

  selectorOptions = [];
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

  click = (e) => { };

  handleSelectionChange = (e) => { }

  constructor() { }

  ngOnInit() { }
}