import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.validation();
  }

  validation() {
    if (!this.label) {
      const err = new Error('\'label\' is a required Input of bp-radio-button');
      err.name = 'Missing Input';
      throw err;
    }
  }

}