import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  exampleItems = [
    {
      text: 'Dropdown Item',
      action: 'item1'
    },
    {
      text: 'Dropdown Item',
      action: 'item2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
