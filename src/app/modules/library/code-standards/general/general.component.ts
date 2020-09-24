import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html'
})
export class GeneralComponent implements OnInit {

  headingText = 'General Standards';

  constructor() { }

  ngOnInit(): void { }

}