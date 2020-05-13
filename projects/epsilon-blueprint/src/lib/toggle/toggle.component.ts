import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Toggle {
  text: string;
  id: string;
  value?: string;
  isChecked: boolean;
  isDisabled: boolean;
}

@Component({
  selector: 'bp-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})

export class ToggleComponent implements OnInit {

  @Input() toggleGroupName: string;
  @Input() toggles: Toggle[];

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  emitChange(e) {
    e.stopPropagation();
    this.toggles.forEach(element => {
      element.isChecked = false;
    });
    const selectedElement = this.toggles.find(element => {
      return element.id === e.target.id;
    });
    selectedElement.isChecked = true;
    this.change.emit(e);
  }
}