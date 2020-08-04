import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() titleText: string;

  constructor() { }

  ngOnInit(): void {
    this.validation();
  }

  validation() {
    if (!this.titleText) {
      const err = new Error('\'titleText\' is a required Input of bp-tile');
      err.name = 'Missing Input';
      throw err;
    }
  }

}