import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-badge',
  templateUrl: './badge.component.html'
})
export class BadgeComponent implements OnInit {

  @Input() element = 'span';
  @Input() classes = 'badge badge-primary';
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
    this.validation();
  }

  validation() {
    if (!this.text) {
      const err = new Error('\'text\' is a required Input of bp-badge');
      err.name = 'Missing Input';
      throw err;
    }
  }

}