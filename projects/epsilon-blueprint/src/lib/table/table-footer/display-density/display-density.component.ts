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

  displayDensity;
  displayDensityOptions = ['Comfortable', 'Compact'];

  constructor() {}

  ngOnInit() {
    this.displayDensity = !localStorage.getItem('selectedDensity')
      ? this.displayDensityOptions[0]
      : localStorage.getItem('selectedDensity');
  }

  setDisplayDensity() {
    this.displayDensityEmitter.emit(this.displayDensity);
  }
}
