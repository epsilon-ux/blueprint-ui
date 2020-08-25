import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent {

  exampleTwoToggleButtons = [
    {
      id: 'ex1-Opt1',
      text: 'Option 1',
      value: 'option1',
      isChecked: true
    },
    {
      text: 'Option 2',
      value: 'option2'
    }
  ];

  exampleThreeToggleButtons = [
    {
      id: 'ex2-Opt1',
      text: 'Option 1',
      value: 'option1',
      isChecked: true
    },
    {
      id: 'ex2-Opt2',
      text: 'Option 2',
      value: 'option2'
    },
    {
      id: 'ex2-Opt3',
      text: 'Option 3',
      value: 'option3',
      isDisabled: true
    }
  ];

  constructor() { }

}