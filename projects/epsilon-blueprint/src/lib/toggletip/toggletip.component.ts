import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { generateUniqueId } from '../../helpers';

declare let $: any;

@Component({
  selector: 'bp-toggletip',
  templateUrl: './toggletip.component.html'
})

export class ToggletipComponent implements OnInit, OnDestroy {

  @Input() content: string;
  @Input() triggerAriaLabel = 'Toggle tooltip';
  @Input() bpID: string;

  popover;

  uuid: string;

  constructor() { }

  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.popover = $('[data-toggle="popover"]');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    this.popover.popover();

    this.validation();

    if (!this.bpID) {
      this.uuid = 'toggleTip' + generateUniqueId().toString();
    } else {
      this.uuid = this.bpID;
    }
  }

  public show(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    this.popover.popover('show');
  }

  public hide(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    this.popover.popover('hide');
  }

  ngOnDestroy(): void {
    this.hide();
  }

  validation(): void {
    if (!this.content) {
      const err = new Error('\'content\' is a required Input of bp-toggletip');
      err.name = 'Missing Input';
      throw err;
    }
  }

}