import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
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

  constructor() { }

  click = () => { };

  handleSelectionChange = () => { };

  ngOnInit(): void { }

}