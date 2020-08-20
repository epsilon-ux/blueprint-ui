import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TableIntlInterface } from '../../table.interface';

@Component({
  selector: 'app-display-density',
  templateUrl: './display-density.component.html',
  styleUrls: ['../table-footer.component.scss']
})
export class DisplayDensityComponent implements OnInit {

  @Output()
  displayDensityEmitter = new EventEmitter();

  @Input()
  internationalization: TableIntlInterface;

  @Input()
  bpID: string;

  displayDensity: string;
  displayOptions: {
    text: string;
    value: string;
  }[];

  constructor() { }

  ngOnInit(): void {
    this.displayOptions = Object.keys(this.internationalization['Display Density Options']).map(option => ({
      text: this.internationalization['Display Density Options'][option],
      value: option
    }));
    this.displayDensity = !localStorage.getItem('selectedDensity')
      ? this.displayDensity
      : localStorage.getItem('selectedDensity');
  }

  setDisplayDensity(): void {
    this.displayDensityEmitter.emit(this.displayDensity);
  }

}