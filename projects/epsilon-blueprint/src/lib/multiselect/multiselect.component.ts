import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.validation();
  }

  validation() {

  }
}