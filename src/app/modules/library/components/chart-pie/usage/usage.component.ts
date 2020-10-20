import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {

  data = [
    {
      name: 'Baisc Tier',
      value: 1000
    },
    {
      name: 'Standard Tier',
      value: 750
    },
    {
      name: 'Premium Tier',
      value: 200
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}