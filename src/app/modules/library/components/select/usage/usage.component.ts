import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {

  selectOptions = [
    {
      text: 'Option 1'
    },
    {
      text: 'Option 2 has very very long text'
    },
    {
      text: 'Option 3'
    },
    {
      text: 'Option 4'
    }
  ];
  selectedOption;

  optionItemsWithDisabled = [
    {
      label: 'Option 1',
      value: 'option1'
    },
    {
      label: 'Option 2 is disabled',
      value: 'option2',
      disabled: true
    },
    {
      label: 'Option 3',
      value: 'option3'
    },
    {
      label: 'Option 4 is disabled',
      value: 'option4',
      disabled: true
    }
  ];
  disabledOption;

  dateOptions = [
    {
      text: 'Today',
      range: 'MM/DD/YYYY'
    },
    {
      text: 'Yesterday',
      range: 'MM/DD/YYYY'
    },
    {
      text: 'Last 3 Days',
      range: 'MM/DD/YYYY - MM/DD/YYYY'
    },
    {
      text: 'Last 7 Days',
      range: 'MM/DD/YYYY - MM/DD/YYYY'
    },
    {
      text: 'Current Week',
      range: 'MM/DD/YYYY - MM/DD/YYYY'
    },
    {
      text: 'Last 30 Days',
      range: 'MM/DD/YYYY - MM/DD/YYYY'
    },
    {
      text: 'Last 60 Days',
      range: 'MM/DD/YYYY - MM/DD/YYYY'
    },
    {
      text: 'Last 90 Days',
      range: 'MM/DD/YYYY - MM/DD/YYYY'
    }
  ];
  selectedDateRange;

  constructor() { }

  ngOnInit(): void { }

}