import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html'
})
export class AngularComponent implements OnInit {

  headingText = 'Angular';

  constructor() { }

  ngOnInit(): void { }

}