import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-display-density',
  templateUrl: './display-density.component.html',
  styleUrls: ['../table-footer.component.scss']
})
export class DisplayDensityComponent implements OnInit {
  @Output()
  displayDensityEmitter = new EventEmitter();

  @Input()
  internationalization: any;
  
  displayDensity: string;
  displayOptions: {
    text: string;
    value: string;
  }[];

  constructor() {}

  ngOnInit() {
    this.displayOptions = Object.keys(this.internationalization['Display Density Options']).map(option => ({
      text: this.internationalization['Display Density Options'][option],
      value: option
    }));
    this.displayDensity = !localStorage.getItem('selectedDensity')
      ? this.displayDensity
      : localStorage.getItem('selectedDensity');
  }

  setDisplayDensity() {
    this.displayDensityEmitter.emit(this.displayDensity);
  }
}
