import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
