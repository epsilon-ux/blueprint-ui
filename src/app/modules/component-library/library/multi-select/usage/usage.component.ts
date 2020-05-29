import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
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

  ngOnInit() { }

  // Returns a status depending on the index
  randomStatus(index) {
    switch (0) {
      case index % 4:
        return 'warning'
      case index % 3:
        return 'incomplete-primary'
      case index % 2:
        return 'incomplete-secondary'
      case index % 1:
        return 'complete';
    }
  }

}
