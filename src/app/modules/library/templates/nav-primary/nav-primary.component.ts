import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-primary',
  templateUrl: './nav-primary.component.html'
})

export class NavPrimaryComponent implements OnInit {

  headingText = 'Primary Navigation';

  constructor() { }

  ngOnInit(): void { }

}