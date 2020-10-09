import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  data = [
    {
      name: 'Jupiter',
      amount: 7
    },
    {
      name: 'Mars',
      amount: 12
    },
    {
      name: 'Venus',
      amount: 4
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addData() {
    this.data = [...this.data, {
      name: 'Saturn',
      amount: 20
    }];
  }

}