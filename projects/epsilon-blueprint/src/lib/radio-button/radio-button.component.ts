import { Component, OnInit, Input } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  @Input() id: string;
  @Input() name?: string;
  @Input() value?: string;
  @Input() isChecked = false;
  @Input() isDisabled = false;
  @Input() isRequired = false;
  @Input() label: string;
  @Input() bpID: string;

  uuid: string;

  constructor() { }

  ngOnInit(): void {
    this.validation();
    if(!this.bpID) {
      if(!this.id) {
        this.uuid = 'radioButton' + generateUniqueId().toString();
      } else {
        this.uuid = this.id;
        console.warn('Input id is deprecated. Please use Input bpID instead.');
      }
    } else {
      this.uuid = this.bpID;
    }
  }

  validation() {
    if (!this.label) {
      const err = new Error('\'label\' is a required Input of bp-radio-button');
      err.name = 'Missing Input';
      throw err;
    }
  }

}