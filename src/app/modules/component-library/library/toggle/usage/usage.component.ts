import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {

  exampleTwoToggleButtons = [
    {
      id: 'ex1-Opt1',
      text: 'Option 1',
      value: 'option1',
      isChecked: true
    },
    {
      id: 'ex1-Opt2',
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

  ngOnInit() { }

}