import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})

export class ToggleComponent implements OnInit {

  @Input() toggleGroupName: string;
  @Input() toggles: [
    {
      text: string;
      id: string;
      value?: string;
      isChecked: boolean;
      isDisabled: boolean;
    }
  ];
  @Input() bpID: string;

  @Output() change = new EventEmitter();

  uuid: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.bpID) {
      this.uuid = 'toggle' + generateUniqueId().toString();
    } else {
      this.uuid = this.bpID;
    }
  }

  // TODO: Find a way to type 'e' so that line 41 and line 47 work properly
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  emitChange(e): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    e.stopPropagation();
    this.toggles.forEach(toggle => {
      toggle.isChecked = false;
    });
    const checkedToggle = this.toggles.find(toggle => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return toggle.id === e.target.id;
    });
    checkedToggle.isChecked = true;
    this.change.emit(e);
  }

}