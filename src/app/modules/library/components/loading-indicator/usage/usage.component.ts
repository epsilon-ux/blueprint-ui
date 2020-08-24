import { Component } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent {

  isDemoRunning = false;

  constructor() { }

  runDemo(): void {
    this.isDemoRunning = true;
    setTimeout(() => this.isDemoRunning = false, 3000);
  }

}