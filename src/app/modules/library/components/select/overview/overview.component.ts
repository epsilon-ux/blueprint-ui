import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void { }

}