import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  optionItems = ['Option 1', 'Option 2'];

  constructor() { }

  ngOnInit() { }

  handleMulti(e) {
    console.log(e);
  }
}
