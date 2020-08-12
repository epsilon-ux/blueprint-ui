import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-page-header',
  templateUrl: './object-page-header.component.html'
})

export class ObjectPageHeaderComponent implements OnInit {

  headingText = 'Object Page Header';

  constructor() { }

  ngOnInit(): void { }

}