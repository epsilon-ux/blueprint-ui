import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {

  data = [
    {
      xValue: new Date(2020, 0, 1),
      yValue: 1500
    },
    {
      xValue: new Date(2020, 0, 2),
      yValue: 1200
    },
    {
      xValue: new Date(2020, 0, 3),
      yValue: 1000
    },
    {
      xValue: new Date(2020, 0, 4),
      yValue: 2000
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}