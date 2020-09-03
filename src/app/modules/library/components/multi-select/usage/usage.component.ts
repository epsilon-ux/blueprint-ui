import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {

  optionItems = [
    {
      label: 'Option 1',
      value: 'option1'
    },
    {
      label: 'Option 2 has very very long text',
      value: 'option2'
    },
    {
      label: 'Option 3',
      value: 'option3'
    },
    {
      label: 'Option 4',
      value: 'option4'
    }
  ];

  optionItemsWithGroups = [
    {
      label: 'Option 1',
      value: 'option1',
      group: 'Group 1'
    },
    {
      label: 'Option 2',
      value: 'option2',
      group: 'Group 1'
    },
    {
      label: 'Option 3',
      value: 'option3',
      group: 'Group 2'
    },
    {
      label: 'Option 4',
      value: 'option4',
      group: 'Group 2'
    }
  ];

  optionStatuses = [
    {
      label: 'Deployed',
      value: 'complete'
    },
    {
      label: 'Approved',
      value: 'incomplete-secondary'
    },
    {
      label: 'Draft',
      value: 'incomplete-primary'
    },
    {
      label: 'Error',
      value: 'warning'
    }
  ];

  optionItemsWithDisabled = [
    {
      label: 'Option 1',
      value: 'option1'
    },
    {
      label: 'Option 2 has very very long text',
      value: 'option2',
      disabled: true
    },
    {
      label: 'Option 3',
      value: 'option3'
    },
    {
      label: 'Option 4',
      value: 'option4',
      disabled: true
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}