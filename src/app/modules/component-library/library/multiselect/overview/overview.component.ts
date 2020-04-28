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
      label: 'Option 2',
      value: 'option2'
    }
  ];

  selectedOptions;

  constructor() { }

  ngOnInit() {
    this.selectedOptions = ['option1'];
  }

  handleMulti(e) { }
}
