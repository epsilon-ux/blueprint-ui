import { Component, OnInit, Input, OnDestroy } from '@angular/core';

declare var $: any;

@Component({
  selector: 'bp-toggletip',
  templateUrl: './toggletip.component.html',
  styleUrls: ['./toggletip.component.scss']
})

export class ToggletipComponent implements OnInit, OnDestroy {

  @Input() content: string;

  popover;

  constructor() { }

  ngOnInit() {
    this.popover = $('[data-toggle="popover"]');
    this.popover.popover();

    this.validation();
  }

  ngOnDestroy() {
    this.popover.popover('hide');
  }

  validation() {
    if (!this.content) {
      let err = new Error('\'content\' is a required Input of bp-toggletip');
      err.name = 'Missing Input';
      throw err;
    }
  }
}