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
  showDisplayDensity: boolean;

  @Input()
  internationalization: any;
  
  displayDensity: string;
  displayOptions: any;

  constructor() {}

  ngOnInit() {
    this.displayOptions = Object.keys(this.internationalization['Display Density Options']).map(option => ({
      text: this.internationalization['Display Density Options'][option],
      value: option
    }));
    console.log(this.internationalization['Display Density Options']);
    this.displayDensity = !localStorage.getItem('selectedDensity')
      ? this.displayDensity
      : localStorage.getItem('selectedDensity');
  }

  setDisplayDensity() {
    console.log(this.displayDensity);
    this.displayDensityEmitter.emit(this.displayDensity);
  }
}
