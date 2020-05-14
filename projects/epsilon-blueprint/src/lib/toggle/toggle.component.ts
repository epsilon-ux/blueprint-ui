import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  emitChange(e) {
    e.stopPropagation();
    this.toggles.forEach(toggle => {
      toggle.isChecked = false;
    });
    const checkedToggle = this.toggles.find(toggle => {
      return toggle.id === e.target.id;
    });
    checkedToggle.isChecked = true;
    this.change.emit(e);
  }
}