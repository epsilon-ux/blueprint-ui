import { Component, OnInit } from '@angular/core';
import { BreadcrumbInterface } from 'epsilon-blueprint';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {

  crumbs: BreadcrumbInterface[] = [
    {
      text: 'First Page',
      bpRouterLink: '.'
    },
    {
      text: 'Previous Page',
      bpRouterLink: '.'
    },
    {
      text: 'Current Page'
    }
  ];

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

  click = (): void => { };

  handleSelectionChange = (): void => { };

  ngOnInit(): void { }

}