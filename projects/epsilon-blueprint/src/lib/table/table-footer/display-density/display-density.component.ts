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
  displayDensity: string;
  
  @Input()
  showDisplayDensityOptions: any;

  @Input()
  internationalization: any;
  
  constructor() {}

  ngOnInit() {
    this.internationalization = {
      "displayDensity": ""
    }
    
    this.internationalization.displayDensity = !localStorage.getItem('selectedDensity')
      ? this.showDisplayDensityOptions[0]
      : localStorage.getItem('selectedDensity');
  }

  setDisplayDensity() {
    this.displayDensityEmitter.emit(this.internationalization.displayDensity);
  }
}
