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
    this.change.emit(e);

    this.toggles.forEach(element => {
      element.isChecked = false;
    });

    const selectedElement = this.toggles.find(element => {
      return element.id === e.target.id;
    });
    selectedElement.isChecked = true;
  }
}