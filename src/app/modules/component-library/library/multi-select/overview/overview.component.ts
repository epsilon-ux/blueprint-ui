import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

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
      value: 'option4',
      disabled: true
    }
  ];

  selectedOptions;

  constructor() { }

  ngOnInit(): void {
    this.selectedOptions = ['option1'];
  }

  handleMulti(e) { }

}