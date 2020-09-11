import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})

export class ToggleComponent implements OnInit {

  @Input() toggleGroupName: string;
  @Input() toggles: {
    text: string;
    id?: string; // Deprecated: Use bpID instead
    bpID?: string;
    value?: string;
    isDisabled: boolean;
    isChecked: boolean; // For internal use
    isFocused: boolean; // For internal use
  }[];

  @Output() change = new EventEmitter();

  @Input() checkedToggle: string;
  @Output() checkedToggleChange = new EventEmitter();

  uuid = 'toggle' + generateUniqueId().toString();

  constructor() { }

  ngOnInit(): void {
    this.toggles.forEach((toggle, i) => {
      // TODO: Remove once id attribute is removed
      if (toggle.id && !toggle.bpID) {
        toggle.bpID = toggle.id;
      }

      if (!toggle.id && !toggle.bpID) {
        toggle.bpID = this.uuid + 'Toggle' + String(i);
      }
    });

    if (!this.checkedToggle) {
      for (const toggle of this.toggles) {
        if (!toggle.isDisabled) {
          this.checkedToggle = toggle.bpID;
          break;
        }
      }
    }

    this.setCheckedToggle(this.checkedToggle);
  }

  setCheckedToggle(checkedToggleID: string): void {
    this.toggles.forEach(toggle => toggle.isChecked = toggle.bpID === checkedToggleID);
  }

  focusLabel(i: number): void {
    this.toggles.forEach(toggle => toggle.isFocused = false);
    if (i !== null) {
      this.toggles[i].isFocused = true;
    }
  }

  // TODO: Find a way to type 'e' so that all eslint disabled lines below work properly
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  emitChange(e): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    e.stopPropagation();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.setCheckedToggle(e.target.id);
    this.change.emit(e);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.checkedToggle = e.target.id;
    this.checkedToggleChange.emit(this.checkedToggle);
  }

}